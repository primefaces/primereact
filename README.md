[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primereact.svg)](https://badge.fury.io/js/primereact)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)

[![PrimeReact Hero](https://www.primefaces.org/wp-content/uploads/2020/08/primereact-promotion-21aug2020@2x.jpg)](https://www.primefaces.org/primereact)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React. See [PrimeReact homepage](https://www.primefaces.org/primereact) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
npm install primereact --save
npm install primeicons --save
```

## Import

```javascript
//import {ComponentName} from 'primereact/{componentname}';
import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require PrimeIcons for icons and react-transition-group for animations.

```json
dependencies: {
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-transition-group": "^4.4.1",
    "primeicons": "^4.1.0"
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/saga-blue/theme.css
primereact/resources/primereact.min.css
primeicons/primeicons.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

## QuickStart

An [example application](https://github.com/primefaces/primereact-quickstart) based on create-react-app is available at github.

## TypeScript

Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-typescript-quickstart) is available as well at github.
