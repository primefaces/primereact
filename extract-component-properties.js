#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Output directory
const OUTPUT_DIR = path.join(__dirname, 'component-properties');

// Read the API documentation JSON
const apiDoc = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, 'components/doc/common/apidoc/index.json'),
    'utf8'
  )
);

// Helper function to parse TypeScript union types to extract enum values
function parseEnumValues(typeString) {
  if (!typeString) return null;

  // Match quoted strings in union types: "value1" | "value2" | "value3"
  const quotedPattern = /"([^"]+)"/g;
  const matches = [...typeString.matchAll(quotedPattern)];

  if (matches.length > 0) {
    return matches.map(m => m[1]);
  }

  // Check for boolean type
  if (typeString === 'boolean') {
    return [true, false];
  }

  return null;
}

// Helper function to categorize property types
function categorizeType(typeString) {
  if (!typeString) return 'unknown';

  const type = typeString.toLowerCase();

  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'boolean') return 'boolean';
  if (type.includes('reactnode') || type.includes('function')) return 'component';
  if (type.includes('cssproperties')) return 'style';
  if (type.includes('"') && type.includes('|')) return 'enum';
  if (type.includes('[]')) return 'array';
  if (type.includes('{') || type.includes('interface')) return 'object';

  return 'mixed';
}

// Helper function to extract detailed property information
function extractPropertyInfo(prop) {
  const enumValues = parseEnumValues(prop.type);
  const typeCategory = categorizeType(prop.type);

  return {
    name: prop.name,
    type: prop.type,
    typeCategory: typeCategory,
    optional: prop.optional !== false,
    readonly: prop.readonly === true,
    defaultValue: prop.default || null,
    description: prop.description || '',
    deprecated: prop.deprecated || null,
    acceptedValues: enumValues,
    // Additional metadata for form generation
    formControl: determineFormControl(typeCategory, enumValues)
  };
}

// Determine appropriate form control type
function determineFormControl(typeCategory, enumValues) {
  if (enumValues && enumValues.length > 0) {
    if (enumValues.length <= 5) return 'radio';
    return 'select';
  }

  switch (typeCategory) {
    case 'string': return 'text';
    case 'number': return 'number';
    case 'boolean': return 'checkbox';
    case 'array': return 'multiselect';
    case 'object': return 'json';
    case 'style': return 'style-editor';
    case 'component': return 'template';
    default: return 'text';
  }
}

// Extract callback/event information
function extractCallbackInfo(callback) {
  return {
    name: callback.name,
    description: callback.description || '',
    parameters: callback.parameters || [],
    returnType: callback.returnType || 'void'
  };
}

// Extract method information
function extractMethodInfo(method) {
  return {
    name: method.name,
    description: method.description || '',
    parameters: method.parameters || [],
    returnType: method.returnType || 'void'
  };
}

// Process each component module
function processComponents() {
  const componentIndex = {};

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let totalComponents = 0;
  let totalProps = 0;

  // Process each module in the API doc
  for (const [moduleName, moduleData] of Object.entries(apiDoc)) {
    console.log(`Processing module: ${moduleName}`);

    const moduleInfo = {
      moduleName: moduleName,
      description: moduleData.description || '',
      components: {}
    };

    // Process each component in the module
    if (moduleData.components) {
      for (const [componentName, componentData] of Object.entries(moduleData.components)) {
        totalComponents++;

        const componentInfo = {
          name: componentName,
          description: componentData.description || '',
          properties: [],
          callbacks: [],
          methods: []
        };

        // Extract properties
        if (componentData.props && componentData.props.values) {
          componentInfo.properties = componentData.props.values.map(extractPropertyInfo);
          totalProps += componentInfo.properties.length;
        }

        // Extract callbacks
        if (componentData.callbacks && componentData.callbacks.values) {
          componentInfo.callbacks = componentData.callbacks.values.map(extractCallbackInfo);
        }

        // Extract methods
        if (componentData.methods && componentData.methods.values) {
          componentInfo.methods = componentData.methods.values.map(extractMethodInfo);
        }

        // Add statistics
        componentInfo.stats = {
          totalProperties: componentInfo.properties.length,
          requiredProperties: componentInfo.properties.filter(p => !p.optional).length,
          optionalProperties: componentInfo.properties.filter(p => p.optional).length,
          callbacksCount: componentInfo.callbacks.length,
          methodsCount: componentInfo.methods.length
        };

        moduleInfo.components[componentName] = componentInfo;

        // Write individual component file
        // Sanitize module and component names to avoid path separators
        const sanitizedModuleName = moduleName.replace(/\//g, '-');
        const sanitizedComponentName = componentName.replace(/\//g, '-');
        const filename = `${sanitizedModuleName}-${sanitizedComponentName}.json`;
        fs.writeFileSync(
          path.join(OUTPUT_DIR, filename),
          JSON.stringify(componentInfo, null, 2),
          'utf8'
        );

        console.log(`  - ${componentName}: ${componentInfo.properties.length} props, ${componentInfo.callbacks.length} callbacks`);
      }
    }

    // Add to index
    componentIndex[moduleName] = {
      description: moduleInfo.description,
      components: Object.keys(moduleInfo.components)
    };

    // Write module file
    // Sanitize module name to avoid path separators
    const sanitizedModuleName = moduleName.replace(/\//g, '-');
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `${sanitizedModuleName}.json`),
      JSON.stringify(moduleInfo, null, 2),
      'utf8'
    );
  }

  // Write master index
  const masterIndex = {
    generatedAt: new Date().toISOString(),
    version: 'PrimeReact v10',
    stats: {
      totalModules: Object.keys(componentIndex).length,
      totalComponents: totalComponents,
      totalProperties: totalProps
    },
    modules: componentIndex
  };

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'index.json'),
    JSON.stringify(masterIndex, null, 2),
    'utf8'
  );

  // Write README
  const readme = `# PrimeReact Component Properties

This directory contains extracted component properties from PrimeReact v10 for form generation purposes.

## Generated Files

- \`index.json\` - Master index of all modules and components
- \`[module-name].json\` - Complete module information with all components
- \`[module-name]-[ComponentName].json\` - Individual component files

## Statistics

- **Total Modules**: ${Object.keys(componentIndex).length}
- **Total Components**: ${totalComponents}
- **Total Properties**: ${totalProps}

## Structure

Each component file contains:

\`\`\`json
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
\`\`\`

## Usage

These JSON files can be used to:

1. Generate dynamic forms for component configuration
2. Build component property editors
3. Create documentation interfaces
4. Generate TypeScript/JavaScript code
5. Validate component props

## Generated

- Date: ${new Date().toISOString()}
- Source: PrimeReact v10 API Documentation
`;

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'README.md'),
    readme,
    'utf8'
  );

  console.log(`\n✅ Processing complete!`);
  console.log(`📊 Statistics:`);
  console.log(`   - Modules: ${Object.keys(componentIndex).length}`);
  console.log(`   - Components: ${totalComponents}`);
  console.log(`   - Total Properties: ${totalProps}`);
  console.log(`\n📁 Output directory: ${OUTPUT_DIR}`);
  console.log(`📄 Files generated: ${fs.readdirSync(OUTPUT_DIR).length}`);
}

// Run the extraction
try {
  processComponents();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
