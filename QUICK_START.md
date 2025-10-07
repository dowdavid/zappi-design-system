# Quick Start Guide - Zappi Design System

## Using This Library in Other Projects

### Step 1: Build the Library

```bash
npm run build:lib
```

This creates the `dist/` folder with:
- `index.js` - CommonJS bundle
- `index.esm.js` - ES Module bundle
- `index.css` - Compiled styles
- `types/` - TypeScript definitions

### Step 2: Link for Local Testing

**In this directory (zappi-design-system):**
```bash
npm link
```

**In your project directory:**
```bash
npm link zappi-design-system
npm install react react-dom
```

### Step 3: Use in Your Project

**Import styles and components:**

```tsx
// In your main file (e.g., src/index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'zappi-design-system/styles';  // Import styles first
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

// In any component file
import { Button, Chip, Typography } from 'zappi-design-system';

function MyComponent() {
  return (
    <>
      <Typography variant="h1">Welcome</Typography>
      <Button variant="primary">Click Me</Button>
      <Chip label="New" variant="primary" />
    </>
  );
}
```

### Step 4: Rebuild After Changes

Whenever you make changes to the design system:

```bash
npm run build:lib
```

The linked project will automatically see the updates!

---

## Publishing to npm

### First Time Setup

1. Login to npm:
   ```bash
   npm login
   ```

2. Choose a package name (if `zappi-design-system` is taken):
   ```bash
   # Update package.json "name" field to something like:
   # "@your-username/zappi-design-system"
   ```

### Publishing

```bash
# Update version
npm version patch  # 0.1.0 → 0.1.1
npm version minor  # 0.1.0 → 0.2.0
npm version major  # 0.1.0 → 1.0.0

# Publish
npm publish

# For scoped packages (@username/package):
npm publish --access public
```

### Installing Published Package

```bash
npm install zappi-design-system
# or
npm install @your-username/zappi-design-system
```

---

## Available Components

| Component | Import | Description |
|-----------|--------|-------------|
| Button | `import { Button } from 'zappi-design-system'` | Primary, secondary, and ghost buttons |
| Chip | `import { Chip } from 'zappi-design-system'` | Compact labels with optional close |
| Tag | `import { Tag } from 'zappi-design-system'` | Status and category labels |
| Toggle | `import { Toggle } from 'zappi-design-system'` | Switch for binary states |
| Typography | `import { Typography } from 'zappi-design-system'` | Text components (h1-h3, body, caption) |
| Colors | `import { Colors } from 'zappi-design-system'` | Color palette display |

---

## Component Examples

### Button
```tsx
<Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
  Primary Button
</Button>
```

### Chip
```tsx
<Chip 
  label="Active" 
  variant="primary" 
  onClose={() => console.log('Closed')} 
/>
```

### Tag
```tsx
<Tag label="New Feature" variant="success" />
```

### Toggle
```tsx
const [checked, setChecked] = useState(false);

<Toggle 
  checked={checked}
  onChange={setChecked}
  label="Enable feature"
/>
```

### Typography
```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="body" color="secondary">
  Body text with secondary color
</Typography>
```

---

## Design Tokens

Use CSS variables in your custom styles:

```css
.my-component {
  /* Colors */
  color: var(--color-brand-primary);
  background: var(--color-background-light);
  
  /* Spacing */
  padding: var(--spacing-4);
  margin: var(--spacing-2);
  
  /* Typography */
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  
  /* Border & Shadows */
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  
  /* Transitions */
  transition: var(--transition-normal);
}
```

---

## Troubleshooting

### "Module not found" error
```bash
# Make sure dependencies are installed
npm install react react-dom

# If using npm link, try unlinking and relinking
npm unlink zappi-design-system
npm link zappi-design-system
```

### Styles not applying
```tsx
// Make sure you import styles in your main file
import 'zappi-design-system/styles';
```

### TypeScript errors
```bash
# Install React types
npm install --save-dev @types/react @types/react-dom
```

---

## Development Workflow

1. **Make changes** to components in `src/components/`
2. **Test locally** using `npm start` (runs the demo app)
3. **Build library** with `npm run build:lib`
4. **Test in another project** using `npm link`
5. **Publish updates** with `npm version` + `npm publish`

---

## File Structure

```
zappi-design-system/
├── src/
│   ├── components/          # Component source files
│   ├── design-tokens/       # CSS variables
│   └── lib.ts              # Library entry point
├── dist/                   # Built files (generated)
│   ├── index.js           # CommonJS bundle
│   ├── index.esm.js       # ES Module bundle
│   ├── index.css          # Compiled styles
│   └── types/             # TypeScript definitions
├── package.json
├── rollup.config.js        # Build configuration
└── tsconfig.lib.json       # TypeScript config for library
```

---

## Next Steps

- ✅ Build the library: `npm run build:lib`
- ✅ Link locally: `npm link`
- ✅ Create a test project to verify
- ✅ Read [LIBRARY_README.md](./LIBRARY_README.md) for complete docs
- ✅ Read [USAGE_GUIDE.md](./USAGE_GUIDE.md) for advanced topics

---

**For detailed documentation, see:**
- [LIBRARY_README.md](./LIBRARY_README.md) - Complete component API
- [USAGE_GUIDE.md](./USAGE_GUIDE.md) - Advanced usage and integration

