import variablesData from './[ Zappi DS ] Core components V2.1-variables-full.json';

// Create comprehensive lookup maps
const variableMap = new Map();
const collectionMap = new Map();
const modeMap = new Map(); // collectionName -> {modeName -> modeId}
const collectionNameToId = new Map(); // collectionName -> collectionId

// Build all lookup maps dynamically from JSON
variablesData.collections.forEach(collection => {
  collectionMap.set(collection.id, collection);
  collectionNameToId.set(collection.name, collection.id);
  
  // Build mode mapping for this collection
  const modes = {};
  collection.modes.forEach(mode => {
    modes[mode.name] = mode.modeId;
  });
  modeMap.set(collection.name, modes);
  
  // Add variables to variable map
  collection.variables.forEach(variable => {
    variableMap.set(variable.id, variable);
  });
});

// Helper to get all available collections and their modes
function getAvailableCollections() {
  const collections = {};
  for (const [collectionName, modes] of modeMap.entries()) {
    const collection = collectionMap.get(collectionNameToId.get(collectionName));
    collections[collectionName] = {
      modes: Object.keys(modes),
      defaultMode: collection.modes.find(m => m.modeId === collection.defaultModeId)?.name,
      id: collection.id
    };
  }
  return collections;
}

// Convert mode names to mode IDs for variable resolution
function resolveModeIds(modesByCollectionName = {}) {
  const resolvedModes = {};
  
  // For each collection, resolve the mode name to mode ID
  for (const [collectionName, availableModes] of modeMap.entries()) {
    const requestedMode = modesByCollectionName[collectionName];
    let modeId;
    
    if (requestedMode && availableModes[requestedMode]) {
      // Use requested mode if it exists
      modeId = availableModes[requestedMode];
    } else {
      // Fall back to default mode
      const collection = collectionMap.get(collectionNameToId.get(collectionName));
      modeId = collection.defaultModeId;
    }
    
    resolvedModes[collectionName] = modeId;
  }
  
  return resolvedModes;
}

// Convert RGB color object to CSS color string
function rgbaToCSS(colorObj) {
  if (typeof colorObj !== 'object' || colorObj.type === 'VARIABLE_ALIAS') {
    return colorObj;
  }
  const { r, g, b, a = 1 } = colorObj;
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);
  
  if (a === 1) {
    return `rgb(${red}, ${green}, ${blue})`;
  }
  return `rgba(${red}, ${green}, ${blue}, ${a})`;
}

// Resolve variable value with support for aliases and dynamic modes
function resolveVariable(variableId, modesByCollectionName = {}) {
  const variable = variableMap.get(variableId);
  if (!variable) {
    console.warn(`Variable ${variableId} not found`);
    return null;
  }

  const collection = collectionMap.get(variable.variableCollectionId);
  if (!collection) {
    console.warn(`Collection ${variable.variableCollectionId} not found`);
    return null;
  }

  // Dynamically resolve mode ID for this collection
  const resolvedModes = resolveModeIds(modesByCollectionName);
  const modeId = resolvedModes[collection.name];
  const value = variable.valuesByMode[modeId];

  if (!value) {
    console.warn(`No value found for variable ${variableId} in mode ${modeId} for collection ${collection.name}`);
    return null;
  }

  // Handle variable alias
  if (value.type === 'VARIABLE_ALIAS') {
    return resolveVariable(value.id, modesByCollectionName);
  }

  // Handle color values
  if (variable.resolvedType === 'COLOR') {
    return rgbaToCSS(value);
  }

  // Return numeric or other values as-is
  return value;
}

// Get variable by name with dynamic mode resolution
function getVariableByName(name, modesByCollectionName = {}) {
  for (const variable of variableMap.values()) {
    if (variable.name === name) {
      return resolveVariable(variable.id, modesByCollectionName);
    }
  }
  console.warn(`Variable with name "${name}" not found`);
  return null;
}

// Get all variables that match a pattern (useful for discovery)
function findVariablesByPattern(pattern) {
  const matches = [];
  for (const variable of variableMap.values()) {
    if (variable.name.includes(pattern)) {
      matches.push({
        name: variable.name,
        id: variable.id,
        type: variable.resolvedType,
        collectionName: collectionMap.get(variable.variableCollectionId)?.name
      });
    }
  }
  return matches;
}

export { 
  resolveVariable, 
  getVariableByName, 
  getAvailableCollections,
  findVariablesByPattern,
  variableMap, 
  collectionMap,
  modeMap
};