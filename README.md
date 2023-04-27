[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primereact.svg)](https://badge.fury.io/js/primereact)
[![primereact](https://snyk.io/advisor/npm-package/primereact/badge.svg)](https://snyk.io/advisor/npm-package/primereact)
[![Actions CI](https://github.com/primefaces/primereact/workflows/NodeJS%20CI/badge.svg)](https://github.com/primefaces/primereact/actions/workflows/node.js.yml)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Stackoverflow](https://img.shields.io/badge/StackOverflow-primereact-chocolate.svg)](https://stackoverflow.com/questions/tagged/primereact)

[![PrimeReact Hero](https://www.primefaces.org/wp-content/uploads/2021/12/primereact-release-7.jpeg)](https://www.primereact.org)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React. See [PrimeReact homepage](https://www.primereact.org) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
// with npm
npm install primereact

// with yarn
yarn add primereact
```
Please note that react >= 17.0.0 and react-dom >= 17.0.0 are peer dependencies and some components have optional dependencies.

## Styles
Theme and core are the necessary css files of the components, visit the Themes section for the complete list of available themes to choose from.

```javascript
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component.

```javascript
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
```

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

## QuickStart

[Example applications](https://github.com/primefaces/primereact-examples) based on create-react-app and Next.js are available at github.

Next.js
PrimeReact has first class support for SSR and Next.JS, in fact this website is also built with Next.js

[![Getting Started with NextJS and PrimeReact](http://img.youtube.com/vi/OrRffCobuts/0.jpg)](http://www.youtube.com/watch?v=OrRffCobuts "Getting Started with NextJS and PrimeReact")

CRA
Create-React-App is the official scaffolding project by Facebook

[![Getting Started with PrimeReact](http://img.youtube.com/vi/Prz3phy2bHY/0.jpg)](http://www.youtube.com/watch?v=Prz3phy2bHY "Getting Started with PrimeReact")


## TypeScript

Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-examples/tree/main/cra-basic-ts) is available as well at github.

## Contributors

<a href="https://github.com/primefaces/primereact/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primereact" />
</a>
