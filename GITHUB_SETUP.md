# GitHub Setup Guide

This guide will help you host your Zappi Design System library on GitHub.

## Quick Start

### 1. Commit Your Changes

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "feat: complete design system library with Modal and Drawer components"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Fill in the details:
   - **Repository name**: `zappi-design-system` (or your preferred name)
   - **Description**: "Zappi Design System - Reusable React component library"
   - **Visibility**: Public (for open source) or Private
   - **DO NOT** initialize with README (you already have one)
4. Click "Create repository"

### 3. Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/zappi-design-system.git

# Push your code
git branch -M main
git push -u origin main
```

Or if you're using SSH:

```bash
git remote add origin git@github.com:YOUR-USERNAME/zappi-design-system.git
git branch -M main
git push -u origin main
```

## Publishing to npm from GitHub

### Option 1: Manual Publishing

```bash
# Login to npm (if not already)
npm login

# Publish the package
npm publish
```

### Option 2: Automated Publishing with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

To use this:
1. Get your npm token: `npm token create`
2. Add it to GitHub: Settings → Secrets → New repository secret → Name: `NPM_TOKEN`
3. Create a release on GitHub to trigger automatic publishing

## Using GitHub Packages Instead of npm

You can also publish to GitHub Packages:

1. Update `package.json`:
```json
{
  "name": "@YOUR-USERNAME/zappi-design-system",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

2. Authenticate with GitHub Packages:
```bash
npm login --registry=https://npm.pkg.github.com
```

3. Publish:
```bash
npm publish
```

## Best Practices

### Version Management

Use semantic versioning:
```bash
# Patch release (bug fixes): 0.1.0 → 0.1.1
npm version patch

# Minor release (new features): 0.1.1 → 0.2.0
npm version minor

# Major release (breaking changes): 0.2.0 → 1.0.0
npm version major

# Then push with tags
git push && git push --tags
```

### Branch Protection

Consider setting up branch protection rules on GitHub:
- Settings → Branches → Add rule
- Require pull request reviews
- Require status checks to pass

### Documentation

Make sure your README.md has:
- ✅ Clear installation instructions
- ✅ Usage examples
- ✅ Component documentation
- ✅ Contributing guidelines
- ✅ License information

### CI/CD

Set up GitHub Actions for:
- Running tests
- Linting
- Building on pull requests
- Automated publishing on release

## Repository Settings Recommendations

### Topics/Tags

Add topics to make your repo discoverable:
- `react`
- `design-system`
- `component-library`
- `typescript`
- `ui-components`

### About Section

Fill in the "About" section with:
- Description
- Website URL (if you have documentation site)
- Topics

### License

Add a LICENSE file (MIT is common for open source):
```bash
# Add MIT license
echo 'MIT License...' > LICENSE
```

## Next Steps

1. ✅ Commit all changes
2. ✅ Create GitHub repository
3. ✅ Push to GitHub
4. ⭐ Add topics and description
5. 📝 Update package.json with repository URL
6. 🚀 Publish to npm (optional)
7. 📖 Add more documentation
8. 🤝 Add contributing guidelines

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin YOUR-NEW-URL
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

### "Permission denied (publickey)"
Set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

