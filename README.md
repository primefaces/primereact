[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primereact.svg)](https://badge.fury.io/js/primereact)
[![primereact](https://snyk.io/advisor/npm-package/primereact/badge.svg)](https://snyk.io/advisor/npm-package/primereact)
![NPM Downloads](https://img.shields.io/npm/dm/primereact?color=purple)
[![Actions CI](https://github.com/primefaces/primereact/workflows/NodeJS%20CI/badge.svg)](https://github.com/primefaces/primereact/actions/workflows/node.js.yml)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Stackoverflow](https://img.shields.io/badge/StackOverflow-primereact-chocolate.svg)](https://stackoverflow.com/questions/tagged/primereact)
[![Prime Discussions](https://img.shields.io/github/discussions-search?query=org%3Aprimefaces&logo=github&label=Prime%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fprimefaces%2Fdiscussions)](https://github.com/orgs/primefaces/discussions)

[![PrimeReact Hero](https://www.primefaces.org/static/social/primereact-preview.jpg)](https://www.primereact.org)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React. See [PrimeReact homepage](https://primereact.org/) for live showcase and documentation.

## Download

PrimeReact is available at [npm](https://www.npmjs.com/package/primereact).

```
# Using npm
npm install primereact

# Using yarn
yarn add primereact

# Using pnpm
pnpm add primereact
```

## Import

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
//import { ComponentName } from 'primereact/{componentname}';
import { Button } from 'primereact/button';

export default function MyComponent() {
  return (
    <Button label="PrimeReact" />
  )
}
```

## Theming

PrimeReact has two theming modes; styled or unstyled.

**Styled Mode**

Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the [Themes](https://primereact.org/theming) section for the complete list of available themes to choose from.

```javascript
// theme
import 'primereact/resources/themes/lara-light-cyan/theme.css';
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the PrimeReact context, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://primereact.org/unstyled) documentation for more information and examples.

## Contributors

<a href="https://github.com/primefaces/primereact/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primereact" />
</a>
