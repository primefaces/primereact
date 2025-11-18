# PrimeReact Component Properties

This directory contains extracted component properties from PrimeReact v10 for form generation purposes.

## Generated Files

- `index.json` - Master index of all modules and components
- `[module-name].json` - Complete module information with all components
- `[module-name]-[ComponentName].json` - Individual component files

## Statistics

- **Total Modules**: 163
- **Total Components**: 154
- **Total Properties**: 2217

## Structure

Each component file contains:

```json
{
  "name": "ComponentName",
  "description": "Component description",
  "properties": [
    {
      "name": "propertyName",
      "type": "TypeScript type definition",
      "typeCategory": "string|number|boolean|enum|array|object|component|style|mixed",
      "optional": true|false,
      "readonly": true|false,
      "defaultValue": "default value or null",
      "description": "Property description",
      "deprecated": "deprecation message or null",
      "acceptedValues": ["value1", "value2"] or null,
      "formControl": "text|number|checkbox|radio|select|multiselect|json|style-editor|template"
    }
  ],
  "callbacks": [...],
  "methods": [...],
  "stats": {
    "totalProperties": 0,
    "requiredProperties": 0,
    "optionalProperties": 0,
    "callbacksCount": 0,
    "methodsCount": 0
  }
}
```

## Usage

These JSON files can be used to:

1. Generate dynamic forms for component configuration
2. Build component property editors
3. Create documentation interfaces
4. Generate TypeScript/JavaScript code
5. Validate component props

## Generated

- Date: 2025-11-18T20:17:04.206Z
- Source: PrimeReact v10 API Documentation
