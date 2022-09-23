[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primereact.svg)](https://badge.fury.io/js/primereact)
[![primereact](https://snyk.io/advisor/npm-package/primereact/badge.svg)](https://snyk.io/advisor/npm-package/primereact)
[![Actions CI](https://github.com/primefaces/primereact/workflows/NodeJS%20CI/badge.svg)](https://github.com/primefaces/primereact/actions/workflows/node.js.yml)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Stackoverflow](https://img.shields.io/badge/StackOverflow-primereact-chocolate.svg)](https://stackoverflow.com/questions/tagged/primereact)

[![PrimeReact Hero](https://www.primefaces.org/wp-content/uploads/2021/12/primereact-release-7.jpeg)](https://www.primefaces.org/primereact)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React. See [PrimeReact homepage](https://www.primefaces.org/primereact) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
// with npm
npm install primereact primeicons

// with yarn
yarn add primereact primeicons
```
Please note that react >= 17.0.0 and react-dom >= 17.0.0 are peer dependencies and some components have optional dependencies.

## Import

#### Module
```javascript
//import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
```

#### CDN

```javascript
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/accordion/accordion.min.js"></script>
//<script src="https://unpkg.com/primereact/{componentname}/{componentname}.min.js"></script>
```

```javascript
const { Dialog } = primereact.dialog;
const { Accordion, AccordionTab } = primereact.accordion;
```

Import all components and structures
```javascript
<script src="https://unpkg.com/primereact/primereact.all.min.js"></script>
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons and react-transition-group for animations. The react-transition-group is available as dependencies in the npm package of PrimeReact.

```javascript
dependencies: {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0",
    "primeicons": "^5.0.0 || ^6.0.0"
}
```

#### Optional

Here is the list of components with 3rd party dependencies.

| Component | Dependency |
| --- | --- |
| Charts | Charts.js 3.x |
| GMap | Google Maps |
| Editor | Quill.js |
| DataView | PrimeFlex |

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/lara-light-indigo/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## QuickStart

[Example applications](https://github.com/primefaces/primereact-examples) based on create-react-app and Next.js are available at github.

## TypeScript

Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-examples/tree/main/cra-basic-ts) is available as well at github.

## Contributors

<a href="https://github.com/primefaces/primereact/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primereact" />
</a>
