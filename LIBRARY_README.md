# Zappi Design System

A comprehensive React component library with design tokens, themes, and pre-built UI components.

## Installation

```bash
npm install zappi-design-system
# or
yarn add zappi-design-system
```

## Quick Start

### 1. Import Styles

Import the design system styles in your main app file (e.g., `App.tsx` or `index.tsx`):

```tsx
import 'zappi-design-system/styles';
```

Or import design tokens separately:

```tsx
import 'zappi-design-system/tokens';
```

### 2. Use Components

```tsx
import React from 'react';
import { Button, Chip, Tag, Toggle, Typography } from 'zappi-design-system';

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to My App</Typography>
      
      <Button variant="primary" size="medium">
        Click Me
      </Button>
      
      <Chip label="Active" variant="primary" />
      
      <Tag label="New Feature" />
      
      <Toggle 
        checked={true} 
        onChange={() => {}} 
      />
    </div>
  );
}

export default App;
```

## Available Components

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'zappi-design-system';

<Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `onClick`: () => void
- All standard button HTML attributes

### Chip
A compact component for displaying tags, categories, or selections.

```tsx
import { Chip } from 'zappi-design-system';

<Chip 
  label="Active" 
  variant="primary" 
  onClose={() => console.log('Closed')} 
/>
```

**Props:**
- `label`: string
- `variant`: 'primary' | 'secondary' | 'neutral'
- `size`: 'small' | 'medium'
- `onClose`: () => void (optional, shows close button)
- `onClick`: () => void (optional)

### Tag
A simple label component for categorization and status.

```tsx
import { Tag } from 'zappi-design-system';

<Tag label="New" variant="primary" />
```

**Props:**
- `label`: string
- `variant`: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium'

### Toggle
A switch component for binary on/off states.

```tsx
import { Toggle } from 'zappi-design-system';

const [checked, setChecked] = useState(false);

<Toggle 
  checked={checked}
  onChange={setChecked}
  disabled={false}
/>
```

**Props:**
- `checked`: boolean
- `onChange`: (checked: boolean) => void
- `disabled`: boolean
- `label`: string (optional)

### Typography
Pre-styled text components following the design system.

```tsx
import { Typography } from 'zappi-design-system';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>
```

**Props:**
- `variant`: 'h1' | 'h2' | 'h3' | 'body' | 'caption'
- `weight`: 'regular' | 'semibold'
- `color`: 'primary' | 'secondary' | 'disabled' | 'inverted'
- All standard HTML text element attributes

### Colors
Color palette component for displaying available design system colors.

```tsx
import { Colors } from 'zappi-design-system';

<Colors />
```

## Design Tokens

The design system includes CSS custom properties (CSS variables) for colors, typography, spacing, and more.

### Using Design Tokens

```css
/* In your CSS files */
.my-custom-component {
  color: var(--color-brand-primary);
  font-family: var(--font-family-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### Available Token Categories

#### Colors
- Brand colors: `--color-brand-primary`, `--color-brand-primary-dark`, `--color-brand-primary-light`
- Background colors: `--color-background-white`, `--color-background-light`, `--color-background-dark`
- Text colors: `--color-text-primary`, `--color-text-secondary`, `--color-text-disabled`, `--color-text-inverted`
- Outline colors: `--color-outline-light`, `--color-outline-dark`
- Hover states: `--color-hover-light`, `--color-hover-dark`

#### Typography (Comprehensive System)
The design system includes 7 typography categories with 18 distinct text styles:

**Font Properties:**
- Font family: `--font-family-primary`
- Font weights: `--font-weight-regular` (400), `--font-weight-semibold` (600), `--font-weight-bold` (700)

**Display** (Hero sections):
- Display Medium: `--font-size-display-medium` (46px), `--line-height-display-medium` (52px)
- Display Small: `--font-size-display-small` (36px), `--line-height-display-small` (44px)

**Headline** (Section headers):
- Headline Large: `--font-size-headline-large` (32px), `--line-height-headline-large` (46px)
- Headline Medium: `--font-size-headline-medium` (28px), `--line-height-headline-medium` (36px)
- Headline Small: `--font-size-headline-small` (22px), `--line-height-headline-small` (32px)

**Title** (Component titles):
- Title Large: `--font-size-title-large` (18px), `--line-height-title-large` (28px)
- Title Medium: `--font-size-title-medium` (16px), `--line-height-title-medium` (24px)
- Title Small: `--font-size-title-small` (14px), `--line-height-title-small` (22px)

**Body** (Paragraphs):
- Body Large: `--font-size-body-large` (18px), `--line-height-body-large` (32px)
- Body Medium: `--font-size-body-medium` (16px), `--line-height-body-medium` (30px)
- Body Small: `--font-size-body-small` (14px), `--line-height-body-small` (26px)

**Label** (UI labels):
- Label: `--font-size-label` (14px), `--line-height-label` (22px)

**Caption** (Helper text):
- Caption: `--font-size-caption` (12px), `--line-height-caption` (18px)

**Overline** (Eyebrows):
- Overline: `--font-size-overline` (10px), `--line-height-overline` (14px)

**📘 See [TYPOGRAPHY_REFERENCE.md](./TYPOGRAPHY_REFERENCE.md) for complete typography documentation.**

#### Spacing
- `--spacing-1` (4px) through `--spacing-12` (48px)

#### Border Radius
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`

#### Shadows
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`

#### Transitions
- `--transition-fast`, `--transition-normal`, `--transition-slow`

## TypeScript Support

This library is written in TypeScript and includes full type definitions. You'll get autocompletion and type checking out of the box.

```tsx
import { Button, ButtonProps } from 'zappi-design-system';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Development Workflow

### Using the Design System in Your Project

1. **Install the package** (when published to npm):
   ```bash
   npm install zappi-design-system
   ```

2. **Local development** (for testing before publishing):
   ```bash
   # In the zappi-design-system directory
   npm run build:lib
   npm link
   
   # In your project directory
   npm link zappi-design-system
   ```

3. **Import styles and components**:
   ```tsx
   import 'zappi-design-system/styles';
   import { Button, Chip, Typography } from 'zappi-design-system';
   ```

## Building the Library

```bash
# Build the library for distribution
npm run build:lib

# Build the demo app
npm run build:app

# Start the development server (for demo app)
npm start
```

## Publishing

Before publishing to npm:

1. Update the version in `package.json`
2. Build the library: `npm run build:lib`
3. Publish: `npm publish`

The `prepublishOnly` script ensures the library is built before publishing.

## Example Project Setup

Here's a complete example of setting up a new project with the design system:

```tsx
// src/index.tsx or src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'zappi-design-system/styles'; // Import design system styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.tsx
import React, { useState } from 'react';
import { 
  Button, 
  Chip, 
  Tag, 
  Toggle, 
  Typography 
} from 'zappi-design-system';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h1">My Application</Typography>
      <Typography variant="body">
        Built with Zappi Design System
      </Typography>
      
      <div style={{ marginTop: '2rem' }}>
        <Button 
          variant="primary" 
          size="medium"
          onClick={() => alert('Button clicked!')}
        >
          Primary Action
        </Button>
        
        <Button 
          variant="secondary" 
          size="medium"
          onClick={() => alert('Secondary action')}
          style={{ marginLeft: '1rem' }}
        >
          Secondary Action
        </Button>
      </div>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
        <Chip label="Active" variant="primary" />
        <Chip label="Pending" variant="secondary" />
        <Chip 
          label="Removable" 
          variant="neutral" 
          onClose={() => console.log('Chip removed')} 
        />
      </div>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem' }}>
        <Tag label="New" variant="primary" />
        <Tag label="Featured" variant="success" />
        <Tag label="Warning" variant="warning" />
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <Toggle 
          checked={isToggled}
          onChange={setIsToggled}
          label="Enable feature"
        />
      </div>
    </div>
  );
}

export default App;
```

## Best Practices

1. **Always import styles first** in your main entry file
2. **Use design tokens** for custom styling to maintain consistency
3. **Follow the component API** as documented for predictable behavior
4. **Leverage TypeScript types** for better development experience
5. **Keep the design system updated** to get the latest improvements

## Support

For issues, questions, or contributions, please refer to the main repository.

## License

MIT

