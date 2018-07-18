[![Join the chat at https://gitter.im/primefaces/primereact](https://badges.gitter.im/primefaces/primereact.svg)](https://gitter.im/primefaces/primereact?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# PrimeReact

PrimeReact is a rich set of open source UI Components for React.

![alt text](https://www.primefaces.org/wp-content/uploads/2017/09/primereact-transparent-250.png "PrimeReact")

See [PrimeReact homepage](https://www.primefaces.org/primereact) for live showcase and documentation.

## Download

PrimeReact is available at npm, if you have an existing application run the following command to download it to your project.

```
npm install primereact --save
```

## Import

```javascript
//import {ComponentName} from 'primereact/components/componentname/componentname';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
```

## Dependencies

Majority of PrimeReact components (95%) are native and there are some exceptions having 3rd party dependencies such as Google Maps for GMap.

In addition, components require font-awesome for icons, classNames package to manage style classes and react-transition-group for animations.

```json
dependencies: {
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-transition-group": "^2.2.1",
    "font-awesome": "^4.7.0",
    "classnames": "^2.2.5"
}
```

## Styles
The css dependencies are as follows, note that you may change the theme with another one of your choice.

```
primereact/resources/themes/omega/theme.css
primereact/resources/primereact.min.css
```

primereact.min.css is a bundle that contains styles of all components, if you require a style of a specific component import the css from the folder of the component along with the Common.css.

```
primereact/resources/themes/omega/theme.css
primereact/components/common/Common.css
primereact/components/autocomplete/AutoComplete.css
```

If you are using a bundler such as webpack with a css loader you may also import them to your main application component, an example from create-react-app would be.

```javascript
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
```

## QuickStart

An [example application](https://github.com/primefaces/primereact-quickstart) based on create-react-app is available at github.

## TypeScript

Typescript
Typescript is fully supported as type definition files are provided in the npm package of PrimeReact. A sample [typescript-primereact application](https://github.com/primefaces/primereact-typescript-quickstart) is available as well at github.
