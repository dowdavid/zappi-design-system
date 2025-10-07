# Changelog

All notable changes to the Zappi Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Comprehensive Typography System** from Figma specifications (2025-10-07)
  - Added 7 typography categories: Display, Headline, Title, Body, Label, Caption, Overline
  - Added 18 distinct text styles with proper size, line height, and weight specifications
  - Added `--font-weight-bold` (700) token
  - Added Display sizes: Display Medium (46px/52px), Display Small (36px/44px)
  - Added Headline sizes: Large (32px/46px), Medium (28px/36px), Small (22px/32px)
  - Added Title sizes: Large (18px/28px), Medium (16px/24px), Small (14px/22px)
  - Added Body sizes: Large (18px/32px), Medium (16px/30px), Small (14px/26px)
  - Added Label size: 14px/22px (Regular and Semibold weights)
  - Added Caption size: 12px/18px (Regular and Semibold weights)
  - Added Overline size: 10px/14px (Regular and Semibold weights)
  - Updated Typography demo component to showcase all new sizes
  - Created TYPOGRAPHY_REFERENCE.md with complete documentation
  - Maintained backward compatibility with legacy typography tokens (h1, h2, h3, body, caption)
- Initial library setup as reusable npm package (2025-10-07)
  - Configured Rollup for building library bundles (CommonJS and ES Modules)
  - Set up TypeScript declarations generation
  - Created comprehensive documentation suite
  - Added dual-purpose functionality (library + demo app)

### Changed
- Updated Google Fonts import to include Bold weight (700) in addition to Regular (400) and Semibold (600)
- Enhanced Typography component to display all typography categories with usage guidelines

### Documentation
- Created TYPOGRAPHY_REFERENCE.md - Complete typography system reference
- Created LIBRARY_README.md - Component API documentation
- Created USAGE_GUIDE.md - Advanced usage and publishing guide
- Created QUICK_START.md - Fast reference for developers
- Created EXAMPLE_USAGE.md - Full project examples
- Created LIBRARY_SETUP_COMPLETE.md - Setup verification guide
- Created INDEX_OF_DOCS.md - Documentation navigation hub
- Updated README.md with typography reference link

## [0.1.0] - 2025-10-07

### Added
- Initial release of Zappi Design System
- Core components: Button, Chip, Tag, Toggle, Typography, Colors
- Design tokens for colors, spacing, typography, shadows, transitions
- Demo application showcasing all components
- React 18+ and 19+ support
- TypeScript support with full type definitions
- CSS custom properties for theming
- Build configuration for library distribution

### Components
- **Button** - Primary, secondary, and ghost variants with 3 sizes
- **Chip** - Compact labels with optional close functionality
- **Tag** - Status and category labels with multiple variants
- **Toggle** - Switch component for binary states
- **Typography** - Text style showcase and guidelines
- **Colors** - Design system color palette display

### Design Tokens
- Brand colors with primary, dark, and light variants
- Background colors (white, light, dark, transparent)
- Text colors (primary, secondary, disabled, inverted)
- Outline and hover state colors
- Spacing scale (4px to 48px)
- Border radius (small, medium, large, full)
- Shadows (small, medium, large)
- Transitions (fast, normal, slow)
- Typography tokens (initial set)

### Build System
- Rollup configuration for library bundling
- PostCSS for CSS processing and minification
- TypeScript compilation with declaration files
- Source maps for debugging
- Tree-shaking support via ES Modules

---

## Version History

- **v0.1.0** (2025-10-07) - Initial release with core components
- **Unreleased** - Comprehensive typography system from Figma

---

## Migration Notes

### From v0.1.0 to Unreleased (Typography Update)

The comprehensive typography system adds new tokens while maintaining backward compatibility:

**No Breaking Changes:** Legacy tokens (`--font-size-h1`, `--font-size-h2`, etc.) are still available.

**Recommended Migration:**
1. Review [TYPOGRAPHY_REFERENCE.md](./TYPOGRAPHY_REFERENCE.md) for new typography options
2. Consider migrating to new category-based tokens for better semantics:
   - Old `--font-size-h1` → New `--font-size-display-medium` or `--font-size-headline-large`
   - Old `--font-size-body` → New `--font-size-body-small` or `--font-size-label`
3. Take advantage of new sizes like Display, Overline, and multiple Body/Title variants

**New Features to Explore:**
- 18 text styles vs. original 5
- Proper semantic naming (Display, Headline, Title, Body, Label, Caption, Overline)
- Bold font weight for Display and Headline categories
- Better line height ratios based on Figma specifications

---

## Semantic Versioning Guide

- **MAJOR** version: Incompatible API changes
- **MINOR** version: Backward-compatible functionality additions
- **PATCH** version: Backward-compatible bug fixes

---

For more information, see:
- [README.md](./README.md) - Project overview
- [LIBRARY_README.md](./LIBRARY_README.md) - Component documentation
- [TYPOGRAPHY_REFERENCE.md](./TYPOGRAPHY_REFERENCE.md) - Typography system

