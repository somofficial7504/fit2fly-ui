# Fit2Fly UI

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.18.3
- **npm** 11.2.0

We recommend using [Volta](https://volta.sh) to manage your Node.js version:

```sh
# Install Volta if you haven't already
curl https://get.volta.sh | bash

# Install and pin Node.js v20.18.3 for this project
volta install node@20.18.3
volta pin node@20.18.3
```

## Getting Started

**Install dependencies:**

```sh
npm install
```

**Start the development server:**

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Available Commands

The following scripts are available in [package.json](package.json):

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start the Vite development server    |
| `npm run build`           | Build the app for production         |
| `npm run preview`         | Preview the production build locally |
| `npm run lint`            | Run ESLint on the codebase           |
| `npm run format`          | Format code using Prettier           |
| `npm run test`            | Run unit tests (Vitest)              |
| `npm run coverage`        | Generate test coverage report        |
| `npm run storybook`       | Start Storybook for UI component dev |
| `npm run build-storybook` | Build Storybook static site          |

## Git Workflow

**Feature Development:**

1. Checkout from the `dev` branch:
   ```sh
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   ```
2. Ensure all tests pass and code is linted before creating a PR.
3. Push your branch:
   ```sh
   git push origin feature/your-feature-name
   ```
4. Create a Pull Request (PR) targeting the `dev` branch.
5. After review and approval (optional), merge into `dev`.

## Internationalization

### Naming Convention for Keys

```json
// <module>.json
"<page>": {
   "<event | element>": "...",
   "<component>": "...",
   "<component>": {
      "<event | element>":
   }
}
```

ie.

```json
// admin.json
"profile": {
   "title": "Admin Profile",
   "onLoad": "Fetching admin profile...",
   "onSubmit": "Submitting...",
   "submitBtn": {
      "title": "Submit",
      "hover": "Example tooltip"
   }
}
```

### Usage

```jsx
const { t } = useTransate(['admin']);

return (
  <div>
    {isLoading && <Loading message={t('profile.onLoad')} />}
    {isSubmitting && <Loading message={t('profile.onSubmit')} />}
    <h1>{t('profile.title')}</h1>
    ...
    <Tooltip message={t('profile.submitBtn.hover')}>
      <button role='submit'>{t('profile.submitBtn.title')}</button>
    </Tooltip>
  </div>
);
```

## Shadcn generate UI components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components. To add new components:

### Add a new component

```bash
npx shadcn@latest add <component-name>
```

Example:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

### Add multiple components at once

```bash
npx shadcn@latest add button dialog dropdown-menu
```

### Configuration

The project is configured via `components.json`:

- Components are installed to `src/ui/`
- Utils are located at `src/libs/utils`
- Uses Tailwind CSS with CSS variables
- Icon library: Lucide React

### Available components

View all available components at: https://ui.shadcn.com/docs/components
