# markdown-magic-install-extended

[![npm version](https://img.shields.io/npm/v/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![Build Status](https://github.com/ioncakephper/markdown-magic-install-extended/actions/workflows/ci.yml/badge.svg)](https://github.com/ioncakephper/markdown-magic-install-extended/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![npm downloads](https://img.shields.io/npm/dm/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/<your-username>/markdown-magic-install-extended/graphs/commit-activity)

An extended `INSTALL` transform for [markdown-magic](https://www.npmjs.com/package/markdown-magic).

## Table of Contents

<!-- doc-gen TOC -->

- [markdown-magic-install-extended](#markdown-magic-install-extended)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#project-structure)
<!-- end-doc-gen -->

## Features

- Reads `package.json` to auto-detect the package name
- Supports npm, yarn, and pnpm
- Options for `global`, `dev`, and custom headings
- Drop-in replacement for the bundled `install` transform

## Usage

Install:

```bash
npm install --save-dev markdown-magic-install-extended
```

Configure:

```js
// markdown-magic.config.js
const installExtended = require('markdown-magic-install-extended');

module.exports = {
  transforms: {
    INSTALL: installExtended,
  },
};
```

In your README.md:

```md
<!-- doc-gen INSTALL heading=true yarn=false -->

# Installation

Install the `markdown-magic-install-extended` cli using your favorite package manager.

| package manager | command                                        |
| --------------- | ---------------------------------------------- |
| npm             | `npm install markdown-magic-install-extended ` |
| pnpm            | `pnpm add markdown-magic-install-extended `    |
| yarn            | `yarn add markdown-magic-install-extended `    |
| bun             | `bun install markdown-magic-install-extended`  |

<!-- end-doc-gen -->
```

## Available Scripts

<!-- doc-gen SCRIPTS -->

| Script           | Command                                                            | Description                                                                        | Line                     |
| ---------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------ |
| `docs`           | `npx markdown-magic README.md --config ./markdown-magic.config.js` | Generate documentation in README.md                                                | [53](./package.json#L53) |
| `fix`            | `npm run lint:fix && npm run format && npm run format:package`     | Run linting and formatting fixes                                                   | [54](./package.json#L54) |
| `format`         | `prettier --write .`                                               | Format all files using Prettier                                                    | [55](./package.json#L55) |
| `format:package` | `prettier --write package.json`                                    | Format package.json using Prettier                                                 | [56](./package.json#L56) |
| `lint`           | `eslint . --ext .js,.json,.yaml,.md`                               | Lint all .js, .json, .yaml, and .md files using ESLint                             | [57](./package.json#L57) |
| `lint:fix`       | `eslint . --ext .js,.json,.yaml,.md --fix`                         | Lint and automatically fix issues in .js, .json, .yaml, and .md files using ESLint | [58](./package.json#L58) |
| `test`           | `jest --passWithNoTests`                                           | Run tests using Jest                                                               | [59](./package.json#L59) |

<!-- end-doc-gen -->

## Project Structure

<!-- doc-gen fileTree -->

```
└── markdown-magic-install-extended/
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── eslint.config.js
    ├── index.js
    ├── LICENSE
    ├── markdown-magic.config.js
    ├── package-lock.json
    ├── package.json
    └── README.md
```

<!-- end-doc-gen -->
