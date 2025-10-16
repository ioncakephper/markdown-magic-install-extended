# markdown-magic-install-extended


[![npm version](https://img.shields.io/npm/v/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![Build Status](https://github.com/<your-username>/markdown-magic-install-extended/actions/workflows/ci.yml/badge.svg)](https://github.com/<your-username>/markdown-magic-install-extended/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![npm downloads](https://img.shields.io/npm/dm/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/<your-username>/markdown-magic-install-extended/graphs/commit-activity)

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
const installExtended = require('markdown-magic-install-extended')

module.exports = {
  transforms: {
    INSTALL: installExtended
  }
}
```

In your README.md:

```md
<!-- doc-gen INSTALL heading=true yarn=false -->
<!-- end-doc-gen -->
```

## Available Scripts
<!-- doc-gen SCRIPTS -->
| Script | Command | Description | Line |
| -------- | -------- | -------- | -------- |
| `docs` | `npx markdown-magic README.md --config ./markdown-magic.config.js` | Generate documentation in README.md | [49](./package.json#L49) |
| `fix` | `npm run lint:fix && npm run format && npm run format:package` | Run linting and formatting fixes | [50](./package.json#L50) |
| `format` | `prettier --write .` | Format all files using Prettier | [51](./package.json#L51) |
| `format:package` | `prettier --write package.json` | Format package.json using Prettier | [52](./package.json#L52) |
| `lint` | `eslint . --ext .js,.json,.yaml,.md` | Lint all .js, .json, .yaml, and .md files using ESLint | [53](./package.json#L53) |
| `lint:fix` | `eslint . --ext .js,.json,.yaml,.md --fix` | Lint and automatically fix issues in .js, .json, .yaml, and .md files using ESLint | [54](./package.json#L54) |
| `test` | `jest` | Run tests using Jest | [55](./package.json#L55) |
<!-- end-doc-gen -->

## Project Structure
<!-- doc-gen fileTree -->
```
└── markdown-magic-install-extended/
    ├── .prettierrc.json
    ├── eslint.config.js
    ├── LICENSE
    ├── markdown-magic.config.js
    ├── package-lock.json
    ├── package.json
    └── README.md
```
<!-- end-doc-gen -->