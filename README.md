# markdown-magic-install-extended

[![npm version](https://img.shields.io/npm/v/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![npm downloads](https://img.shields.io/npm/dm/markdown-magic-install-extended.svg)](https://www.npmjs.com/package/markdown-magic-install-extended) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/<your-username>/markdown-magic-install-extended/graphs/commit-activity)

An extended `INSTALL` transform for [markdown-magic](https://www.npmjs.com/package/markdown-magic).

## Table of Contents

<!-- doc-gen TOC -->
- [markdown-magic-install-extended](#markdown-magic-install-extended)
  - [Table of Contents](#table-of-contents)
  - [Why this exists](#why-this-exists)
  - [Features](#features)
  - [Usage](#usage)
  - [Transform Options](#transform-options)
  - [Helper Scripts](#helper-scripts)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)
<!-- end-doc-gen -->
## Why this exists

`markdown-magic@3.7.0` ships with **two different install transforms**:

- `install` (lowercase) — bundled but ignores options passed in the comment line.
- `INSTALL` (uppercase) — bundled and option‑aware, but undocumented and inconsistent.

This duplication leads to confusing, contradictory behavior: one transform silently discards options, while the other honors them. Developers often waste time trying to understand why their inline attributes don’t work.

**`markdown-magic-install-extended`** exists to resolve that ambiguity. It provides a **single, predictable transform** that:

- Reads the package name directly from your project’s `package.json`.
- Honors inline options (`heading`, `npm`, `yarn`, `pnpm`, `global`, `dev`).
- Produces consistent installation snippets across npm, yarn, and pnpm.
- Can be dropped into any `markdown-magic` config without worrying about uppercase vs lowercase quirks.

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
    INSTALLEXTENDED: installExtended,
  },
};
```

In your README.md:

```md
## Installation

Install the package using `npm`:

<!-- $$doc-gen$$ INSTALLEXTENDED header=false -->
<!-- end-$$doc-gen$$ -->
```

At the command prompt:

```bash
npx markdown-magic README.md --config ./markdown-magic.config.js
```

The resulting README.md will look like this:

```md
## Installation

Install the package with `npm`:

<!-- $$doc-gen$$ INSTALLEXTENDED header=false -->

npm install <your-package-name>

<!-- end-$$doc-gen$$ -->
```

## Transform Options

Each option can be set globally in your `markdown-magic.config.js` file or overridden inline in your README using comment attributes, for example:

```md
<!-- $$doc-gen$$ INSTALL packageName=my-lib yarn=false bun=true heading="Getting Started" -->
<!-- end-$$doc-gen$$ -->
```

- **Global defaults** are useful when you want consistent behavior across all generated files.
- **Inline overrides** let you customize output for a specific block without changing the global config.

This flexibility ensures you can tailor installation instructions to your project’s needs while keeping your documentation DRY and predictable.

| Option        | Type(s)             | Description                                                                                                        | Default      |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ |
| `bun`         | `boolean`           | If `true`, include a `bun add` command.                                                                            | `false`      |
| `dev`         | `boolean`           | If `true`, installs as a development dependency (`--save-dev`, `--dev`, `-D`).                                     | `false`      |
| `global`      | `boolean`           | If `true`, installs the package globally (`-g`).                                                                   | `false`      |
| `heading`     | `boolean \| string` | Adds a heading above the install commands. `true` → "Installation", string → custom heading, `false` → no heading. | `false`      |
| `npm`         | `boolean`           | If `true`, include an `npm install` command.                                                                       | `true`       |
| `packageName` | `string`            | The package name to install. Defaults to the `name` field in `package.json`.                                       | `<pkg.name>` |
| `pnpm`        | `boolean`           | If `true`, include a `pnpm add` command.                                                                           | `false`      |
| `yarn`        | `boolean`           | If `true`, include a `yarn add` command.                                                                           | `true`       |

## Helper Scripts

The scripts listed below aren’t just boilerplate — they’re designed to help you **maintain code quality, consistency, and developer productivity**.

- **Quality checks:** Run linters, formatters, and type checks to keep the codebase clean and predictable.
- **Automation:** Common tasks like building, testing, or cleaning are just one command away, so you don’t have to remember long CLI invocations.
- **Consistency:** Every contributor uses the same commands, which reduces “works on my machine” issues.
- **Discoverability:** By documenting them here, new contributors can quickly see what’s available and how to run it.

👉 Don’t ignore these scripts — they’re your toolkit for keeping the repository healthy. Run them often, especially before committing or opening a pull request, to ensure your contributions meet the project’s standards.

<!-- doc-gen SCRIPTS format=list -->
- `docs` — Generate documentation in README.md (line [53](./package.json#L53))

  ```bash
  npx markdown-magic README.md --config ./markdown-magic.config.js
  ```

- `fix` — Run linting and formatting fixes (line [54](./package.json#L54))

  ```bash
  npm run lint:fix && npm run format && npm run format:package
  ```

- `format` — Format all files using Prettier (line [55](./package.json#L55))

  ```bash
  prettier --write .
  ```

- `format:package` — Format package.json using Prettier (line [56](./package.json#L56))

  ```bash
  prettier --write package.json
  ```

- `lint` — Lint all .js, .json, .yaml, and .md files using ESLint (line [57](./package.json#L57))

  ```bash
  eslint . --ext .js,.json,.yaml,.md
  ```

- `lint:fix` — Lint and automatically fix issues in .js, .json, .yaml, and .md files using ESLint (line [58](./package.json#L58))

  ```bash
  eslint . --ext .js,.json,.yaml,.md --fix
  ```

- `test` — Run tests using Jest (line [59](./package.json#L59))

  ```bash
  jest --passWithNoTests
  ```
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

## Contributing

Contributions are welcome! 🎉  

If you’d like to improve **markdown-magic-install-extended**, please open an issue or submit a pull request.  

- See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.  
- Please review our [Rules of Conduct](RULES_OF_CONDUCT.md) to ensure a respectful and collaborative environment.  

Your feedback, bug reports, and feature ideas help make this project better for everyone.

## License

This project is licensed under the terms of the [MIT License](LICENSE).  
You are free to use, modify, and distribute this software in accordance with the license.
