# Using Zappi Design System as a Library

This guide explains how to use the Zappi Design System in other projects.

## Table of Contents

1. [Local Development Setup](#local-development-setup)
2. [Publishing to npm](#publishing-to-npm)
3. [Installing in Other Projects](#installing-in-other-projects)
4. [Advanced Usage](#advanced-usage)

## Local Development Setup

### Option 1: npm link (Recommended for Development)

This is the best approach when you're actively developing the design system and want to test it in another project.

**In the design system directory:**
```bash
# Build the library
npm run build:lib

# Create a global symlink
npm link
```

**In your application directory:**
```bash
# Link to the design system
npm link zappi-design-system

# Install peer dependencies if not already present
npm install react react-dom
```

**Workflow:**
- Make changes in the design system
- Run `npm run build:lib` to rebuild
- Changes will automatically be available in your linked project
- No need to reinstall or republish

### Option 2: Local File Path

You can install directly from the file system:

**In your application directory:**
```bash
npm install /path/to/zappi-design-system
```

Or add to `package.json`:
```json
{
  "dependencies": {
    "zappi-design-system": "file:../zappi-design-system"
  }
}
```

## Publishing to npm

### First Time Setup

1. **Create an npm account** at https://www.npmjs.com/signup

2. **Login to npm:**
   ```bash
   npm login
   ```

3. **Update package.json** with your organization/username if needed:
   ```json
   {
     "name": "@your-org/zappi-design-system",
   }
   ```

### Publishing Steps

1. **Update version** in `package.json`:
   ```bash
   npm version patch  # 0.1.0 -> 0.1.1
   npm version minor  # 0.1.0 -> 0.2.0
   npm version major  # 0.1.0 -> 1.0.0
   ```

2. **Build the library:**
   ```bash
   npm run build:lib
   ```

3. **Publish:**
   ```bash
   npm publish
   # Or for scoped packages:
   npm publish --access public
   ```

### Automated Publishing (Optional)

Add these scripts to `package.json`:
```json
{
  "scripts": {
    "release:patch": "npm version patch && npm publish",
    "release:minor": "npm version minor && npm publish",
    "release:major": "npm version major && npm publish"
  }
}
```

## Installing in Other Projects

### From npm (After Publishing)

```bash
npm install zappi-design-system
# or with version
npm install zappi-design-system@0.1.0
```

### Import and Use

**Step 1: Import styles in your main file** (e.g., `src/index.tsx` or `src/App.tsx`):
```tsx
import 'zappi-design-system/styles';
```

**Step 2: Import components:**
```tsx
import { Button, Chip, Typography } from 'zappi-design-system';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

## Advanced Usage

### Custom Theming

Override design tokens in your own CSS:

```css
/* src/theme.css */
:root {
  /* Override brand colors */
  --color-brand-primary: #your-color;
  --color-brand-primary-dark: #your-dark-color;
  
  /* Override spacing */
  --spacing-4: 20px; /* instead of default 16px */
}
```

Import after design system styles:
```tsx
import 'zappi-design-system/styles';
import './theme.css'; // Your overrides
```

### Tree Shaking

The library is built with ES modules to support tree shaking. Only import what you need:

```tsx
// Good - only imports Button
import { Button } from 'zappi-design-system';

// Also good - explicit import
import { Button } from 'zappi-design-system/dist/index.esm.js';
```

### TypeScript Configuration

If you encounter TypeScript errors, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "jsx": "react-jsx"
  }
}
```

### Using with Different Frameworks

#### Next.js

```tsx
// pages/_app.tsx
import 'zappi-design-system/styles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

If you get CSS import errors, add to `next.config.js`:
```js
module.exports = {
  transpilePackages: ['zappi-design-system'],
};
```

#### Vite

```tsx
// src/main.tsx
import 'zappi-design-system/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Vite should work out of the box with no additional configuration.

#### Create React App

```tsx
// src/index.tsx
import 'zappi-design-system/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Selective Style Imports

If you want more control over styles:

```tsx
// Import only design tokens
import 'zappi-design-system/tokens';

// Then import component-specific styles manually
import 'zappi-design-system/dist/index.css';
```

### Using with CSS Modules

If your project uses CSS modules, the design system styles won't interfere because they use CSS custom properties and minimal global styles.

```tsx
import 'zappi-design-system/styles';
import styles from './MyComponent.module.css';
import { Button } from 'zappi-design-system';

function MyComponent() {
  return (
    <div className={styles.container}>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### Extending Components

You can wrap design system components to add your own functionality:

```tsx
import { Button, ButtonProps } from 'zappi-design-system';

interface MyButtonProps extends ButtonProps {
  loading?: boolean;
}

function MyButton({ loading, children, ...props }: MyButtonProps) {
  return (
    <Button {...props} disabled={loading || props.disabled}>
      {loading ? 'Loading...' : children}
    </Button>
  );
}
```

## Troubleshooting

### "Module not found" errors

Make sure you've installed the package and its peer dependencies:
```bash
npm install zappi-design-system react react-dom
```

### Styles not applying

Ensure you've imported the styles in your main entry file:
```tsx
import 'zappi-design-system/styles';
```

### TypeScript errors

1. Check that TypeScript can find the type definitions:
   ```bash
   npm install --save-dev @types/react @types/react-dom
   ```

2. Ensure `node_modules` is not excluded in `tsconfig.json`

### npm link issues

If you encounter issues with `npm link`:

1. Unlink and relink:
   ```bash
   # In your app
   npm unlink zappi-design-system
   
   # In the design system
   npm unlink
   npm link
   
   # In your app
   npm link zappi-design-system
   ```

2. Clear cache:
   ```bash
   npm cache clean --force
   ```

### Build errors

If the library build fails:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Clear dist folder:
   ```bash
   rm -rf dist
   npm run build:lib
   ```

## Example Projects

### Minimal Example

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'zappi-design-system/styles';
import { Button, Typography } from 'zappi-design-system';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1">Hello Zappi!</Typography>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
```

### Full Featured Example

See `LIBRARY_README.md` for a comprehensive example with all components.

## Continuous Updates

When the design system is updated:

1. **If using npm link:** Just rebuild the library (`npm run build:lib`)
2. **If installed from npm:** Update the package:
   ```bash
   npm update zappi-design-system
   # or for specific version
   npm install zappi-design-system@latest
   ```

## Best Practices

1. ✅ Always import styles before using components
2. ✅ Use TypeScript for better developer experience
3. ✅ Import only the components you need
4. ✅ Use design tokens for custom styling
5. ✅ Keep the design system version updated
6. ✅ Test locally with `npm link` before publishing
7. ✅ Follow semantic versioning when publishing updates
8. ❌ Don't modify design system files in `node_modules`
9. ❌ Don't override component styles directly
10. ❌ Don't bundle the design system with your library

## Getting Help

If you encounter issues:

1. Check this guide and the main README
2. Verify you're using compatible React versions
3. Check for console errors and TypeScript warnings
4. Review the example projects
5. Contact the design system maintainers

## Next Steps

- Read the [LIBRARY_README.md](./LIBRARY_README.md) for component documentation
- Explore the demo app by running `npm start`
- Check out the design tokens in `src/design-tokens/tokens.css`
- Review component source code in `src/components/`

