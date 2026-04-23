# GAVL UI

Pixel RPG CSS library for `GAVL.IO.VN`.

GAVL UI is a pure CSS UI kit built around a retro game visual language: pixel shadows, gold-brown palette, Vietnamese-ready typography, and zero JavaScript dependencies at the styling layer.

This repository contains the documentation site for the library, built with Docusaurus.

## Highlights

- Pixel RPG visual style with reusable CSS classes
- Vietnamese-ready typography with `Be Vietnam Pro` and `SVN Determination Sans`
- Zero framework dependency for the UI layer
- Dark mode support via theme classes
- Design tokens exposed as CSS custom properties
- Component docs for common UI building blocks

## Included Components

- Button
- Card
- Badge
- Alert
- Form
- Modal
- Progress
- Toast
- Tabs
- Table
- Breadcrumb
- Pagination

## Documentation Structure

```text
docs/
├── getting-started/
│   ├── installation.mdx
│   └── design-tokens.mdx
├── components/
│   ├── button.mdx
│   ├── card.mdx
│   ├── badge.mdx
│   ├── alert.mdx
│   ├── form.mdx
│   ├── modal.mdx
│   ├── progress.mdx
│   └── toast.mdx
└── utilities/
    ├── typography.mdx
    ├── layout.mdx
    └── vietnamese.mdx
```

## Tech Stack

- Docusaurus `3.10.0`
- React `19`
- TypeScript

## Local Development

Install dependencies:

```bash
npm install
```

Run the docs site locally:

```bash
npm run start
```

Build for production:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run serve
```

## Fonts

The docs and UI currently use:

- `SVN Determination Sans` for pixel-style headings, labels, and display text
- `Be Vietnam Pro` for body copy and long-form Vietnamese content

`SVN Determination Sans` is loaded from:

```text
src/font/SVN-Determination-Sans.otf
```

## CSS Organization

Main CSS entry:

- `src/css/custom.css`

Docs-specific styling is split into:

- `src/css/docs-components.css`
- `src/css/docs-utilities.css`

Core UI styles live in:

- `src/css/gavl-ui.css`

## GitHub Deployment

If you deploy with Docusaurus:

```bash
npm run build
```

or use the built-in deploy script after setting the appropriate GitHub config in `docusaurus.config.ts`.

## Repository Purpose

This repo is focused on:

- documenting the GAVL UI design system
- showcasing components and utilities with live visual examples
- serving as the public docs site for the library
