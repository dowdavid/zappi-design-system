# Contributing to Zappi Design System

Thank you for your interest in contributing to the Zappi Design System! 🎉

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/zappi-design-system.git
   cd zappi-design-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the library:
   ```bash
   npm run build
   ```

## Development Workflow

### Making Changes

1. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes to the source code in `src/`

3. Build and test locally:
   ```bash
   npm run build
   ```

4. Preview your changes:
   ```bash
   open dev-preview.html
   ```

### Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```bash
git commit -m "feat: add new Input component"
git commit -m "fix: correct Button hover state"
```

### Pull Request Process

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a Pull Request on GitHub

3. Fill in the PR template with:
   - Description of changes
   - Screenshots (if UI changes)
   - Testing steps

4. Wait for review and address feedback

## Adding New Components

When adding a new component:

1. Create component directory:
   ```
   src/components/YourComponent/
   ├── YourComponent.tsx
   ├── YourComponent.css
   └── index.ts
   ```

2. Use design tokens from `src/design-tokens/tokens.css`

3. Export component in `src/components/index.ts`

4. Import CSS in `src/lib.ts`

5. Add to `dev-preview.html` for testing

6. Update README.md with component documentation

## Design Tokens

- Always use CSS custom properties from `src/design-tokens/tokens.css`
- Don't hardcode colors, spacing, or typography
- Follow the existing naming conventions

## Code Style

- Use TypeScript for all components
- Follow existing component patterns
- Use functional components with hooks
- Include prop types and JSDoc comments
- Keep components focused and single-purpose

## Questions?

Feel free to open an issue for discussion before starting major work!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

