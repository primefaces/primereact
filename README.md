[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primereact.svg)](https://badge.fury.io/js/primereact)

[![PrimeReact Hero](https://www.primefaces.org/wp-content/uploads/2020/03/primereact-github-02032020-2.jpg "PrimeReact Hero")](https://www.primefaces.org/primereact)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React.

[![PrimeReact Logo](https://www.primefaces.org/wp-content/uploads/2017/09/primereact-transparent-250.png "PrimeReact")](https://www.primefaces.org/primereact)

See [PrimeReact homepage](https://www.primefaces.org/react) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
npm install primereact
npm install primeicons
```
or

```
yarn add primereact
yarn add primeicons
```

## Import

```javascript
//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons, classNames package to manage style classes and react-transition-group for animations.

```json
dependencies: {
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-transition-group": "^2.2.1",
    "classnames": "^2.2.5",
    "primeicons": "^2.0.0"
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/nova-light/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## QuickStart

An [example application](https://github.com/primefaces/primereact-quickstart) based on create-react-app is available at github.

## TypeScript

Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-typescript-quickstart) is available as well at github.
