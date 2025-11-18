# Guide d'Utilisation - Propriétés des Composants PrimeReact

Ce guide explique comment utiliser les fichiers JSON générés pour créer des formulaires de configuration de composants dynamiques.

## 📚 Structure des Fichiers

### 1. Fichier Index Principal (`index.json`)

Contient la liste de tous les modules et composants avec des statistiques globales :

```json
{
  "generatedAt": "2025-11-18T20:17:04.205Z",
  "version": "PrimeReact v10",
  "stats": {
    "totalModules": 163,
    "totalComponents": 154,
    "totalProperties": 2217
  },
  "modules": {
    "button": {
      "description": "...",
      "components": ["Button"]
    }
  }
}
```

### 2. Fichiers par Module (`[module-name].json`)

Contient tous les composants d'un module avec leurs propriétés complètes.

### 3. Fichiers par Composant (`[module-name]-[ComponentName].json`)

Fichiers individuels pour chaque composant, optimisés pour la génération de formulaires.

## 🎯 Structure d'un Composant

Chaque fichier de composant contient :

```json
{
  "name": "Button",
  "description": "Button is an extension to standard button element...",
  "properties": [...],
  "callbacks": [...],
  "methods": [...],
  "stats": {
    "totalProperties": 23,
    "requiredProperties": 0,
    "optionalProperties": 23,
    "callbacksCount": 0,
    "methodsCount": 0
  }
}
```

## 📋 Structure d'une Propriété

Chaque propriété contient les métadonnées suivantes :

```json
{
  "name": "severity",
  "type": "\"success\" | \"help\" | \"warning\" | \"info\" | \"secondary\" | \"danger\" | \"contrast\"",
  "typeCategory": "enum",
  "optional": true,
  "readonly": false,
  "defaultValue": null,
  "description": "Defines the style of the button...",
  "deprecated": null,
  "acceptedValues": ["success", "help", "warning", "info", "secondary", "danger", "contrast"],
  "formControl": "select"
}
```

### Champs Détaillés

| Champ | Type | Description |
|-------|------|-------------|
| `name` | string | Nom de la propriété |
| `type` | string | Type TypeScript complet |
| `typeCategory` | enum | Catégorie simplifiée : `string`, `number`, `boolean`, `enum`, `array`, `object`, `component`, `style`, `mixed` |
| `optional` | boolean | Si la propriété est optionnelle |
| `readonly` | boolean | Si la propriété est en lecture seule |
| `defaultValue` | string\|null | Valeur par défaut de la propriété |
| `description` | string | Description de la propriété |
| `deprecated` | string\|null | Message de dépréciation si applicable |
| `acceptedValues` | array\|null | Liste des valeurs acceptées (pour les enums) |
| `formControl` | enum | Type de contrôle de formulaire recommandé |

### Types de Contrôles de Formulaire (`formControl`)

| Type | Usage | Exemple de Propriété |
|------|-------|---------------------|
| `text` | Champ texte simple | `label`, `placeholder` |
| `number` | Champ numérique | `rows`, `cols`, `tabIndex` |
| `checkbox` | Case à cocher | `disabled`, `readOnly` |
| `radio` | Boutons radio (2-5 options) | `size` (small\|large), `iconPos` |
| `select` | Liste déroulante (5+ options) | `severity`, `variant` |
| `multiselect` | Sélection multiple | Arrays de valeurs |
| `json` | Éditeur JSON | Objets complexes |
| `style-editor` | Éditeur de styles CSS | `style`, `contentStyle` |
| `template` | Composant React | `header`, `footer`, `children` |

## 🔧 Exemples d'Utilisation

### Exemple 1 : Générer un Formulaire Simple pour Button

```javascript
import buttonData from './component-properties/button-Button.json';

function generateButtonForm() {
  const formConfig = {
    componentName: buttonData.name,
    description: buttonData.description,
    fields: buttonData.properties
      .filter(prop => !prop.readonly) // Exclure les props en lecture seule
      .map(prop => ({
        id: prop.name,
        label: prop.name,
        type: prop.formControl,
        required: !prop.optional,
        defaultValue: prop.defaultValue,
        description: prop.description,
        options: prop.acceptedValues, // Pour select/radio
        deprecated: prop.deprecated
      }))
  };

  return formConfig;
}
```

### Exemple 2 : Payload de Configuration du Button

```json
{
  "component": "Button",
  "props": {
    "label": "Cliquez ici",
    "icon": "pi pi-check",
    "iconPos": "left",
    "severity": "success",
    "size": "large",
    "disabled": false,
    "raised": true,
    "rounded": false
  }
}
```

### Exemple 3 : Filtrer les Propriétés par Catégorie

```javascript
// Récupérer uniquement les propriétés de style
const styleProperties = buttonData.properties
  .filter(prop => prop.typeCategory === 'style');

// Récupérer uniquement les enums
const enumProperties = buttonData.properties
  .filter(prop => prop.typeCategory === 'enum');

// Récupérer les propriétés requises
const requiredProperties = buttonData.properties
  .filter(prop => !prop.optional);
```

### Exemple 4 : Génération de Formulaire React Dynamique

```jsx
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { InputNumber } from 'primereact/inputnumber';

function DynamicComponentForm({ componentData }) {
  const [formValues, setFormValues] = React.useState({});

  const renderFormField = (property) => {
    const { name, formControl, acceptedValues, description, defaultValue } = property;

    switch (formControl) {
      case 'text':
        return (
          <div key={name} className="field">
            <label htmlFor={name}>{name}</label>
            <InputText
              id={name}
              value={formValues[name] || defaultValue || ''}
              onChange={(e) => setFormValues({...formValues, [name]: e.target.value})}
              placeholder={description}
            />
          </div>
        );

      case 'select':
        return (
          <div key={name} className="field">
            <label htmlFor={name}>{name}</label>
            <Dropdown
              id={name}
              value={formValues[name] || defaultValue}
              options={acceptedValues?.map(v => ({ label: v, value: v }))}
              onChange={(e) => setFormValues({...formValues, [name]: e.value})}
              placeholder={`Select ${name}`}
            />
          </div>
        );

      case 'checkbox':
        return (
          <div key={name} className="field-checkbox">
            <Checkbox
              inputId={name}
              checked={formValues[name] || defaultValue === 'true'}
              onChange={(e) => setFormValues({...formValues, [name]: e.checked})}
            />
            <label htmlFor={name}>{name}</label>
          </div>
        );

      case 'number':
        return (
          <div key={name} className="field">
            <label htmlFor={name}>{name}</label>
            <InputNumber
              id={name}
              value={formValues[name] || defaultValue}
              onValueChange={(e) => setFormValues({...formValues, [name]: e.value})}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dynamic-form">
      <h2>{componentData.name} Configuration</h2>
      <p>{componentData.description}</p>

      <div className="form-grid">
        {componentData.properties
          .filter(prop => !prop.readonly && prop.typeCategory !== 'component')
          .map(renderFormField)}
      </div>

      <h3>Generated Payload:</h3>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}
```

### Exemple 5 : Validation des Valeurs

```javascript
function validatePropertyValue(property, value) {
  // Vérifier si la propriété est requise
  if (!property.optional && (value === null || value === undefined || value === '')) {
    return { valid: false, error: `${property.name} is required` };
  }

  // Vérifier les valeurs acceptées pour les enums
  if (property.acceptedValues && property.acceptedValues.length > 0) {
    if (!property.acceptedValues.includes(value)) {
      return {
        valid: false,
        error: `${property.name} must be one of: ${property.acceptedValues.join(', ')}`
      };
    }
  }

  // Vérifier le type
  if (property.typeCategory === 'number' && typeof value !== 'number') {
    return { valid: false, error: `${property.name} must be a number` };
  }

  if (property.typeCategory === 'boolean' && typeof value !== 'boolean') {
    return { valid: false, error: `${property.name} must be a boolean` };
  }

  return { valid: true };
}
```

## 📊 Statistiques des Composants

### Top 10 Composants par Nombre de Propriétés

1. **DataTable** : 103 propriétés, 46 callbacks
2. **TreeTable** : 71 propriétés, 22 callbacks
3. **Calendar** : 79 propriétés, 20 callbacks
4. **MultiSelect** : 74 propriétés, 8 callbacks
5. **Dropdown** : 69 propriétés, 8 callbacks
6. **Column** : 68 propriétés, 14 callbacks
7. **AutoComplete** : 55 propriétés, 16 callbacks
8. **TreeSelect** : 48 propriétés, 11 callbacks
9. **PickList** : 48 propriétés, 11 callbacks
10. **InputNumber** : 47 propriétés, 5 callbacks

## 🎨 Cas d'Usage

### 1. Générateur de Formulaires de Configuration

Créer une interface utilisateur permettant aux utilisateurs de configurer visuellement des composants PrimeReact sans écrire de code.

### 2. Documentation Interactive

Générer automatiquement de la documentation interactive avec des exemples en temps réel.

### 3. Builder de Composants Drag & Drop

Créer un éditeur visuel où les utilisateurs peuvent glisser-déposer des composants et configurer leurs propriétés via des formulaires.

### 4. Validation de Props

Valider les props passés aux composants en comparant avec les définitions TypeScript extraites.

### 5. Générateur de Code

Générer automatiquement du code React basé sur les configurations utilisateur.

```javascript
function generateReactCode(componentName, props) {
  const propsString = Object.entries(props)
    .map(([key, value]) => {
      if (typeof value === 'string') return `${key}="${value}"`;
      if (typeof value === 'boolean') return value ? key : '';
      return `${key}={${JSON.stringify(value)}}`;
    })
    .filter(Boolean)
    .join(' ');

  return `<${componentName} ${propsString} />`;
}

// Exemple d'utilisation
const code = generateReactCode('Button', {
  label: 'Click me',
  severity: 'success',
  raised: true,
  icon: 'pi pi-check'
});
// Résultat: <Button label="Click me" severity="success" raised icon="pi pi-check" />
```

## 📁 Organisation des Fichiers

```
component-properties/
├── index.json                          # Index principal
├── README.md                           # Documentation automatique
├── USAGE-GUIDE.md                      # Ce guide
├── accordion.json                      # Module Accordion
├── accordion-Accordion.json            # Composant Accordion
├── accordion-AccordionTab.json         # Composant AccordionTab
├── button.json                         # Module Button
├── button-Button.json                  # Composant Button
├── datatable.json                      # Module DataTable
├── datatable-DataTable.json            # Composant DataTable
└── ...                                 # 319 fichiers au total
```

## 🔄 Régénération des Données

Pour régénérer les fichiers JSON à partir des sources TypeScript :

```bash
# Régénérer l'API doc depuis les sources TypeScript
npm run apidoc

# Exécuter le script d'extraction
node extract-component-properties.js
```

## 💡 Conseils

1. **Performance** : Pour les grandes applications, chargez uniquement les fichiers de composants nécessaires plutôt que l'index complet.

2. **Caching** : Mettez en cache les fichiers JSON pour éviter des lectures répétées.

3. **Propriétés Readonly** : Filtrez les propriétés `readonly: true` car elles ne doivent pas être modifiées par l'utilisateur (ex: `children`).

4. **Propriétés Deprecated** : Affichez un avertissement pour les propriétés avec `deprecated !== null`.

5. **Type Template** : Les propriétés avec `formControl: "template"` nécessitent un éditeur de composants React (non un simple input).

6. **Callbacks** : Les callbacks peuvent être affichés dans une section avancée du formulaire avec des éditeurs de code.

## 🚀 Intégration dans un Projet

### Installation

```bash
# Copier le répertoire component-properties dans votre projet
cp -r component-properties /path/to/your/project/src/
```

### Import dans React

```javascript
// Importer l'index pour lister les composants
import componentsIndex from './component-properties/index.json';

// Importer un composant spécifique
import buttonConfig from './component-properties/button-Button.json';

// Ou charger dynamiquement
const loadComponentConfig = async (moduleName, componentName) => {
  const config = await import(
    `./component-properties/${moduleName}-${componentName}.json`
  );
  return config.default;
};
```

## 📝 Format de Payload Final

Le payload généré pour l'intégration dans votre système de génération de formulaires devrait ressembler à :

```json
{
  "formId": "user-registration-form",
  "version": "1.0",
  "components": [
    {
      "id": "submit-button",
      "type": "Button",
      "props": {
        "label": "S'inscrire",
        "severity": "success",
        "icon": "pi pi-check",
        "iconPos": "right",
        "type": "submit",
        "raised": true
      },
      "layout": {
        "grid": { "col": 12 },
        "order": 5
      }
    },
    {
      "id": "email-input",
      "type": "InputText",
      "props": {
        "placeholder": "Email",
        "type": "email",
        "required": true
      },
      "layout": {
        "grid": { "col": 12 },
        "order": 1
      },
      "validation": {
        "required": true,
        "pattern": "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
      }
    }
  ]
}
```

---

**Généré le** : 2025-11-18
**Version PrimeReact** : v10
**Total de composants** : 154
**Total de propriétés** : 2217
