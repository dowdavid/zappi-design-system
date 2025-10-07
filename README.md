# Zappi Design System

[![npm version](https://img.shields.io/npm/v/zappi-design-system.svg?style=flat-square)](https://www.npmjs.com/package/zappi-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/YOUR-USERNAME/zappi-design-system/workflows/CI/badge.svg)](https://github.com/YOUR-USERNAME/zappi-design-system/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

A comprehensive React component library with design tokens, themes, and pre-built UI components.

## Overview

This is a **pure component library** designed to be used in React projects. It provides reusable UI components and a complete design token system.

## Quick Links

- **[Library Documentation](./LIBRARY_README.md)** - How to use this as a library in your projects
- **[Usage Guide](./USAGE_GUIDE.md)** - Detailed setup instructions for developers
- **[Typography Reference](./TYPOGRAPHY_REFERENCE.md)** - Complete typography system from Figma

## Installation

Install the library in your React project:

```bash
npm install zappi-design-system
```

## Usage

```tsx
import 'zappi-design-system/styles';
import { Button, Chip, Drawer, Modal, Tag, Toggle } from 'zappi-design-system';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div>
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>
        Open Drawer
      </Button>
      <Chip label="Active" variant="primary" />
      <Tag label="New" variant="success" />
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal"
        secondaryText="Optional secondary text"
        size="default"
        onPrimary={() => console.log('Confirmed!')}
      >
        <p>Modal content goes here</p>
      </Modal>
      
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="My Drawer"
        description="Optional description text"
        onSave={() => console.log('Saved!')}
      >
        <p>Drawer content goes here</p>
      </Drawer>
    </div>
  );
}
```

**See [LIBRARY_README.md](./LIBRARY_README.md) for complete documentation.**

## Available Scripts

### Building

```bash
# Build the library for distribution
npm run build
```

This creates the `dist/` folder with:
- `index.js` - CommonJS bundle
- `index.esm.js` - ES Module bundle
- `index.css` - Compiled styles
- `types/` - TypeScript definitions

## Components

The design system includes:

- **Button** - Primary, secondary, and ghost variants with 3 sizes
- **Chip** - Compact labels with optional close functionality
- **Drawer** - Right-side modal drawer with overlay and animations
- **Modal** - Centered modal dialog in small, default, and large sizes
- **Tag** - Status and category labels with multiple variants
- **Toggle** - Switch component for binary states

## Design Tokens

Pre-defined CSS custom properties for:

- **Colors** - Brand, background, text, outline
- **Typography** - 7 categories with 18 text styles (Display, Headline, Title, Body, Label, Caption, Overline)
- **Spacing** - 4px to 48px scale
- **Border radius** - Small, medium, large, full
- **Shadows** - Small, medium, large
- **Transitions** - Fast, normal, slow

See [TYPOGRAPHY_REFERENCE.md](./TYPOGRAPHY_REFERENCE.md) for the complete typography system.

## Project Structure

```
src/
├── components/          # All UI components
│   ├── Button/
│   ├── Chip/
│   ├── Drawer/
│   ├── Modal/
│   ├── Tag/
│   └── Toggle/
├── design-tokens/      # CSS variables and tokens
└── lib.ts             # Library entry point
```

## Using as a Library

### Local Development (npm link)

```bash
# In this directory
npm run build
npm link

# In your project
npm link zappi-design-system
```

### Publishing to npm

```bash
# Update version
npm version patch  # or minor/major

# Build and publish
npm run build
npm publish
```

**Complete setup instructions:** [USAGE_GUIDE.md](./USAGE_GUIDE.md)

## TypeScript Support

Full TypeScript support with exported types for all components.

```tsx
import { Button, ButtonProps, Chip, ChipProps } from 'zappi-design-system';
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- React 18+ or React 19+

## Design System Features

✅ **Type-safe** - Full TypeScript support  
✅ **Tree-shakeable** - Import only what you need  
✅ **Themeable** - CSS custom properties for easy customization  
✅ **Accessible** - Built with accessibility best practices  
✅ **Consistent** - Design tokens ensure visual consistency  
✅ **Documented** - Comprehensive docs and examples  

## Contributing

1. Make changes to components in `src/components/`
2. Update design tokens in `src/design-tokens/tokens.css`
3. Build the library with `npm run build`
4. Test in another project using `npm link`

## Version History

- **0.1.0** - Initial release with core components

## License

MIT

---

## Learn More

- [React Documentation](https://reactjs.org/)
- [Library Usage Guide](./USAGE_GUIDE.md)
- [Typography Reference](./TYPOGRAPHY_REFERENCE.md)
