# Example: Using Zappi Design System in a New Project

This guide shows you how to create a new React project and integrate the Zappi Design System.

## Step 1: Create a New React Project

### Using Create React App

```bash
npx create-react-app my-app --template typescript
cd my-app
```

### Using Vite (Recommended)

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

## Step 2: Link the Design System (Local Development)

**In the zappi-design-system directory:**
```bash
npm run build:lib
npm link
```

**In your new project directory (my-app):**
```bash
npm link zappi-design-system
```

**Or install from npm (if published):**
```bash
npm install zappi-design-system
```

## Step 3: Set Up Your App

### Update `src/main.tsx` (Vite) or `src/index.tsx` (CRA)

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'zappi-design-system/styles'; // ⭐ Import design system styles
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create a Simple App Component

**src/App.tsx:**

```tsx
import { useState } from 'react';
import {
  Button,
  Chip,
  Tag,
  Toggle,
  Typography,
} from 'zappi-design-system';
import './App.css';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [chips, setChips] = useState(['React', 'TypeScript', 'Design System']);

  const handleChipClose = (label: string) => {
    setChips(chips.filter((chip) => chip !== label));
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <Typography variant="h1">My Application</Typography>
        <Typography variant="body" color="secondary">
          Built with Zappi Design System
        </Typography>
      </header>

      {/* Buttons Section */}
      <section className="section">
        <Typography variant="h2">Buttons</Typography>
        <div className="button-group">
          <Button variant="primary" size="medium" onClick={() => alert('Primary!')}>
            Primary Action
          </Button>
          <Button variant="secondary" size="medium" onClick={() => alert('Secondary!')}>
            Secondary Action
          </Button>
          <Button variant="ghost" size="small">
            Ghost Button
          </Button>
          <Button variant="primary" size="large" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* Chips Section */}
      <section className="section">
        <Typography variant="h2">Chips</Typography>
        <div className="chip-group">
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              variant="primary"
              onClose={() => handleChipClose(chip)}
            />
          ))}
          <Chip label="Not Removable" variant="secondary" />
        </div>
      </section>

      {/* Tags Section */}
      <section className="section">
        <Typography variant="h2">Tags</Typography>
        <div className="tag-group">
          <Tag label="New" variant="primary" />
          <Tag label="Featured" variant="success" />
          <Tag label="Important" variant="warning" />
          <Tag label="Deprecated" variant="error" />
          <Tag label="Default" variant="neutral" />
        </div>
      </section>

      {/* Toggle Section */}
      <section className="section">
        <Typography variant="h2">Toggle</Typography>
        <div className="toggle-group">
          <Toggle
            checked={isToggled}
            onChange={setIsToggled}
            label="Enable dark mode"
          />
          <Typography variant="body" color="secondary">
            Dark mode is {isToggled ? 'enabled' : 'disabled'}
          </Typography>
        </div>
      </section>

      {/* Typography Section */}
      <section className="section">
        <Typography variant="h2">Typography</Typography>
        <div className="typography-examples">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body">
            This is body text with regular weight. It's perfect for longer
            paragraphs and general content.
          </Typography>
          <Typography variant="body" weight="semibold">
            This is body text with semibold weight.
          </Typography>
          <Typography variant="caption" color="secondary">
            This is caption text, often used for metadata or helper text.
          </Typography>
        </div>
      </section>
    </div>
  );
}

export default App;
```

### Add Some Basic Styling

**src/App.css:**

```css
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8);
}

.header {
  margin-bottom: var(--spacing-10);
  text-align: center;
}

.section {
  margin-bottom: var(--spacing-8);
  padding: var(--spacing-6);
  background: var(--color-background-light);
  border-radius: var(--radius-lg);
}

.button-group {
  display: flex;
  gap: var(--spacing-3);
  flex-wrap: wrap;
  margin-top: var(--spacing-4);
}

.chip-group {
  display: flex;
  gap: var(--spacing-2);
  flex-wrap: wrap;
  margin-top: var(--spacing-4);
}

.tag-group {
  display: flex;
  gap: var(--spacing-2);
  flex-wrap: wrap;
  margin-top: var(--spacing-4);
}

.toggle-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}

.typography-examples {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}
```

**src/index.css:**

```css
body {
  margin: 0;
  font-family: var(--font-family-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-background-white);
}

* {
  box-sizing: border-box;
}
```

## Step 4: Run Your App

```bash
npm run dev  # Vite
# or
npm start    # Create React App
```

## Step 5: Using Design Tokens

You can use design tokens in your custom CSS:

**CustomComponent.css:**

```css
.custom-card {
  /* Use design system colors */
  background: var(--color-background-white);
  border: 1px solid var(--color-outline-light);
  
  /* Use design system spacing */
  padding: var(--spacing-6);
  margin: var(--spacing-4);
  
  /* Use design system border radius */
  border-radius: var(--radius-md);
  
  /* Use design system shadows */
  box-shadow: var(--shadow-md);
  
  /* Use design system transitions */
  transition: var(--transition-normal);
}

.custom-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--color-brand-primary);
}

.custom-text {
  /* Use design system typography */
  font-family: var(--font-family-primary);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-text-primary);
}
```

## Advanced Example: Form with Design System

```tsx
import { useState } from 'react';
import { Button, Toggle, Typography } from 'zappi-design-system';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for details.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h2">Contact Us</Typography>
      
      <div style={{ marginTop: 'var(--spacing-6)' }}>
        <label style={{ display: 'block', marginBottom: 'var(--spacing-2)' }}>
          <Typography variant="body" weight="semibold">Name</Typography>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{
            width: '100%',
            padding: 'var(--spacing-3)',
            border: '1px solid var(--color-outline-light)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-body)',
          }}
        />
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <label style={{ display: 'block', marginBottom: 'var(--spacing-2)' }}>
          <Typography variant="body" weight="semibold">Email</Typography>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{
            width: '100%',
            padding: 'var(--spacing-3)',
            border: '1px solid var(--color-outline-light)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-body)',
          }}
        />
      </div>

      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Toggle
          checked={formData.subscribe}
          onChange={(checked) => setFormData({ ...formData, subscribe: checked })}
          label="Subscribe to newsletter"
        />
      </div>

      <div style={{ marginTop: 'var(--spacing-6)' }}>
        <Button type="submit" variant="primary" size="large">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
```

## Next Steps

1. ✅ Explore all components in the demo app
2. ✅ Customize with design tokens
3. ✅ Build your own components using the design system
4. ✅ Read [LIBRARY_README.md](./LIBRARY_README.md) for complete API docs
5. ✅ Check out [USAGE_GUIDE.md](./USAGE_GUIDE.md) for advanced patterns

## Tips

- **Always import styles first** in your main entry file
- **Use design tokens** for consistent styling
- **Leverage TypeScript** for better developer experience
- **Check the demo app** for component examples and best practices
- **Update regularly** to get new features and improvements

Happy coding! 🚀

