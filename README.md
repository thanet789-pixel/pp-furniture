# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment

This project is configured for GitHub Actions and Vercel deployment.

- GitHub Actions: `.github/workflows/ci.yml`
  - Runs on push and pull request to `main`/`master`
  - Installs dependencies, builds, and lints
- Vercel: `vercel.json`
  - Uses `@vercel/static-build`
  - Builds with `npm run build`
  - Serves `dist/` with SPA fallback to `index.html`

### How to use

1. Push your repository to GitHub using the existing remote:

```bash
git add .
git commit -m "Add GitHub and Vercel deployment config"
git push origin main
```

2. In Vercel, import the repository and set the build command to:

```bash
npm run build
```

3. Set the output directory in Vercel to:

```bash
dist
```

4. Deploy.
