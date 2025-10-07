# Typography Reference - Zappi Design System

Complete typography system based on the Figma design specifications.

## Overview

The Zappi Design System includes a comprehensive typography scale with 7 categories and multiple sizes within each category, providing flexibility for all UI needs from large hero text to small metadata.

## Typography Categories

### 1. Display (Largest)
For hero sections and main page titles.

| Name | Size/Line Height | Weight | HTML Tag | CSS Variables |
|------|------------------|--------|----------|---------------|
| Display Medium | 46px / 52px | Bold (700) | h1 | `--font-size-display-medium`, `--line-height-display-medium` |
| Display Small | 36px / 44px | Bold (700) | h2 | `--font-size-display-small`, `--line-height-display-small` |

**Usage Example:**
```css
.hero-title {
  font-size: var(--font-size-display-medium);
  line-height: var(--line-height-display-medium);
  font-weight: var(--font-weight-bold);
}
```

---

### 2. Headline
For major section headings.

| Name | Size/Line Height | Weight | HTML Tag | CSS Variables |
|------|------------------|--------|----------|---------------|
| Headline Large | 32px / 46px | Bold (700) | h2 | `--font-size-headline-large`, `--line-height-headline-large` |
| Headline Medium | 28px / 36px | Bold (700) | h3 | `--font-size-headline-medium`, `--line-height-headline-medium` |
| Headline Small | 22px / 32px | Bold (700) | h4 | `--font-size-headline-small`, `--line-height-headline-small` |

**Usage Example:**
```css
.section-title {
  font-size: var(--font-size-headline-large);
  line-height: var(--line-height-headline-large);
  font-weight: var(--font-weight-bold);
}
```

---

### 3. Title
For component titles and card headers.

| Name | Size/Line Height | Weight | HTML Tag | CSS Variables |
|------|------------------|--------|----------|---------------|
| Title Large | 18px / 28px | Semibold (600) | h5 | `--font-size-title-large`, `--line-height-title-large` |
| Title Medium | 16px / 24px | Semibold (600) | h6 | `--font-size-title-medium`, `--line-height-title-medium` |
| Title Small | 14px / 22px | Semibold (600) | p | `--font-size-title-small`, `--line-height-title-small` |

**Usage Example:**
```css
.card-title {
  font-size: var(--font-size-title-large);
  line-height: var(--line-height-title-large);
  font-weight: var(--font-weight-semibold);
}
```

---

### 4. Body
For long-form paragraph content (supports **bold** and *italics*).

| Name | Size/Line Height | Weight | HTML Tag | CSS Variables |
|------|------------------|--------|----------|---------------|
| Body Large | 18px / 32px | Regular (400) | p | `--font-size-body-large`, `--line-height-body-large` |
| Body Medium | 16px / 30px | Regular (400) | p | `--font-size-body-medium`, `--line-height-body-medium` |
| Body Small | 14px / 26px | Regular (400) | p | `--font-size-body-small`, `--line-height-body-small` |

**Usage Example:**
```css
.article-text {
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-body-large);
  font-weight: var(--font-weight-regular);
}
```

**Best Practice:**
- ✅ **Do** use body styles for long-form paragraph text
- ❌ **Don't** use body styles for labels (e.g., button labels, list item labels)

---

### 5. Label
For button labels, form labels, and list items (supports *italics*).

| Name | Size/Line Height | Weight | CSS Variables |
|------|------------------|--------|---------------|
| Label | 14px / 22px | Regular (400) | `--font-size-label`, `--line-height-label` |
| Label Bold | 14px / 22px | Semibold (600) | `--font-size-label`, `--line-height-label` |

**Usage Example:**
```css
.button-label {
  font-size: var(--font-size-label);
  line-height: var(--line-height-label);
  font-weight: var(--font-weight-regular);
}

.form-label {
  font-size: var(--font-size-label);
  line-height: var(--line-height-label);
  font-weight: var(--font-weight-semibold);
}
```

**Best Practice:**
- ✅ **Do** use label styles for button labels, list item labels, form labels
- ❌ **Don't** use label styles for long-form text

---

### 6. Caption
For helper text, metadata, and timestamps (supports *italics*).

| Name | Size/Line Height | Weight | CSS Variables |
|------|------------------|--------|---------------|
| Caption | 12px / 18px | Regular (400) | `--font-size-caption`, `--line-height-caption` |
| Caption Bold | 12px / 18px | Semibold (600) | `--font-size-caption`, `--line-height-caption` |

**Usage Example:**
```css
.helper-text {
  font-size: var(--font-size-caption);
  line-height: var(--line-height-caption);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
}
```

---

### 7. Overline (Smallest)
For eyebrows, categories, and small metadata (supports *italics*). **Use sparingly due to small size.**

| Name | Size/Line Height | Weight | CSS Variables |
|------|------------------|--------|---------------|
| Overline | 10px / 14px | Regular (400) | `--font-size-overline`, `--line-height-overline` |
| Overline Bold | 10px / 14px | Semibold (600) | `--font-size-overline`, `--line-height-overline` |

**Usage Example:**
```css
.eyebrow {
  font-size: var(--font-size-overline);
  line-height: var(--line-height-overline);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**⚠️ Warning:** Overline styles should be used sparingly due to their small size. Consider accessibility and readability.

---

## Font Weights

| Name | Value | CSS Variable | Usage |
|------|-------|--------------|-------|
| Regular | 400 | `--font-weight-regular` | Body text, labels, captions |
| Semibold | 600 | `--font-weight-semibold` | Titles, emphasis, important text |
| Bold | 700 | `--font-weight-bold` | Headlines, displays, strong emphasis |

---

## Quick Reference Table

| Category | Variants | Use For | Weight Options |
|----------|----------|---------|----------------|
| **Display** | 2 sizes | Hero sections, landing pages | Bold |
| **Headline** | 3 sizes | Section headers | Bold |
| **Title** | 3 sizes | Component titles, cards | Semibold |
| **Body** | 3 sizes | Paragraphs, long-form content | Regular (+ bold, italic) |
| **Label** | 2 weights | Buttons, forms, list items | Regular, Semibold |
| **Caption** | 2 weights | Helper text, metadata | Regular, Semibold |
| **Overline** | 2 weights | Eyebrows, categories | Regular, Semibold |

**Total Typography Options:** 18 distinct text styles

---

## Complete CSS Variable Reference

### Display
```css
--font-size-display-medium: 46px;
--line-height-display-medium: 52px;
--font-size-display-small: 36px;
--line-height-display-small: 44px;
```

### Headline
```css
--font-size-headline-large: 32px;
--line-height-headline-large: 46px;
--font-size-headline-medium: 28px;
--line-height-headline-medium: 36px;
--font-size-headline-small: 22px;
--line-height-headline-small: 32px;
```

### Title
```css
--font-size-title-large: 18px;
--line-height-title-large: 28px;
--font-size-title-medium: 16px;
--line-height-title-medium: 24px;
--font-size-title-small: 14px;
--line-height-title-small: 22px;
```

### Body
```css
--font-size-body-large: 18px;
--line-height-body-large: 32px;
--font-size-body-medium: 16px;
--line-height-body-medium: 30px;
--font-size-body-small: 14px;
--line-height-body-small: 26px;
```

### Label
```css
--font-size-label: 14px;
--line-height-label: 22px;
```

### Caption
```css
--font-size-caption: 12px;
--line-height-caption: 18px;
```

### Overline
```css
--font-size-overline: 10px;
--line-height-overline: 14px;
```

### Weights
```css
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Font Family
```css
--font-family-primary: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

---

## Legacy Variables (Backward Compatibility)

The following variables are maintained for backward compatibility:

```css
--font-size-h1: 24px;
--line-height-h1: 32px;
--font-size-h2: 20px;
--line-height-h2: 28px;
--font-size-h3: 16px;
--line-height-h3: 24px;
--font-size-body: 14px;
--line-height-body: 22px;
```

**Note:** New projects should use the new typography categories (Display, Headline, Title, Body, Label, Caption, Overline) instead of the legacy h1/h2/h3 variables.

---

## Implementation Examples

### React Component Example
```tsx
import './styles.css';

function HeroSection() {
  return (
    <section className="hero">
      <span className="hero-overline">New Feature</span>
      <h1 className="hero-title">Welcome to Zappi</h1>
      <p className="hero-body">
        Discover powerful insights with our comprehensive research platform.
      </p>
      <button className="hero-button">
        <span className="button-label">Get Started</span>
      </button>
    </section>
  );
}
```

### CSS Implementation
```css
.hero-overline {
  font-size: var(--font-size-overline);
  line-height: var(--line-height-overline);
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
}

.hero-title {
  font-size: var(--font-size-display-medium);
  line-height: var(--line-height-display-medium);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.hero-body {
  font-size: var(--font-size-body-large);
  line-height: var(--line-height-body-large);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-primary);
}

.button-label {
  font-size: var(--font-size-label);
  line-height: var(--line-height-label);
  font-weight: var(--font-weight-semibold);
}
```

---

## Accessibility Guidelines

1. **Maintain Hierarchy:** Use proper heading hierarchy (h1 → h2 → h3 → h4 → h5 → h6)
2. **Semantic HTML:** Use appropriate HTML elements for each typography style
3. **Color Contrast:** Ensure 4.5:1 contrast ratio for body text, 3:1 for large text (18px+)
4. **Zoom Support:** Test readability at 200% zoom level
5. **Font Variations:** Support bold and italic text where indicated
6. **Overline Caution:** Use overline styles sparingly due to their small size

---

## Migration Guide

If you're updating from the legacy typography system:

| Old Variable | New Variable | Category |
|--------------|--------------|----------|
| `--font-size-h1` | `--font-size-display-medium` or `--font-size-headline-large` | Display/Headline |
| `--font-size-h2` | `--font-size-headline-medium` | Headline |
| `--font-size-h3` | `--font-size-title-medium` | Title |
| `--font-size-body` | `--font-size-body-small` or `--font-size-label` | Body/Label |
| `--font-size-caption` | `--font-size-caption` | Caption |

---

## Viewing in Demo App

To see all typography styles in action:

```bash
npm start
```

Navigate to the **Typography** page in the demo app to see live examples of all typography sizes with usage guidelines.

---

## Source

Typography specifications imported from Figma Design:
- **File:** Zappi DS - Core components V2.1
- **Node ID:** 1982:35816
- **Last Updated:** October 7, 2025

---

For questions or contributions, see the main [README.md](./README.md) or [LIBRARY_README.md](./LIBRARY_README.md).

