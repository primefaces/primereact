const TypeDoc = require('typedoc');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '../');
const distDir = path.resolve(rootDir, 'dist');
const outputPath = path.resolve(rootDir, 'components/doc/common/apidoc');

const staticMessages = {
    methods: "Defines methods that can be accessed by the component's reference.",
    callbacks: 'Defines callbacks that determine the behavior of the component based on a given condition or report the actions that the component takes.',
    functions: 'Defines the custom functions used by the module.',
    events: "Defines the custom events used by the component's callbacks.",
    interfaces: 'Defines the custom interfaces used by the module.',
    types: 'Defines the custom types used by the module.'
};

const app = new TypeDoc.Application();

// If you want TypeDoc to load tsconfig.json / typedoc.json files
app.options.addReader(new TypeDoc.TSConfigReader());
app.options.addReader(new TypeDoc.TypeDocReader());

const pkg = require(path.resolve(rootDir, 'package.json'));
const library = {
    name: 'PrimeReact',
    version: pkg.version,
    repository: pkg.repository,
    license: pkg.license
};

const webTypes = {
    $schema: 'https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json',
    framework: 'react',
    name: library.name,
    version: library.version,
    repository: library.repository,
    license: library.license,
    contributions: {
        html: {
            'types-syntax': 'typescript',
            'description-markup': 'markdown',
            tags: [],
            attributes: []
        }
    }
};

app.bootstrap({
    // typedoc options here
    name: 'PrimeReact',
    entryPoints: [`components/lib`],
    entryPointStrategy: 'expand',
    tsconfig: 'api-scripts/tsconfig.json',
    hideGenerator: true,
    excludeExternals: true,
    includeVersion: true,
    searchInComments: true,
    disableSources: true,
    logLevel: 'Error',
    sort: ['source-order'],
    exclude: ['node_modules', 'components/lib/**/*.js'],
    externalSymbolLinkMappings: {
        '@types/react': {
            'React.ReactNode': 'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts',
            'React.CSSProperties': 'https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts'
        }
    }
});

const project = app.convert();

if (project) {
    const doc = {};

    const parseText = (text) => {
        return text.replace(/&#123;/g, '{').replace(/&#125;/g, '}');
    };

    project.children.forEach((module) => {
        const { name, comment } = module;

        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        const description = comment && comment.summary.map((s) => s.text || '').join(' ');
        let url = '';

        if (description) {
            const urlRegex = /\[(Live Demo)\]\((https?:\/\/[^\s)]+)\)/;
            const urlMatch = description.match(urlRegex);

            if (urlMatch && urlMatch[2]) {
                url = urlMatch[2];
            }
        }

        const tag = {
            name: capitalizedName,
            source: {
                module: library.name,
                symbol: capitalizedName
            },
            description,
            'doc-url': url
        };

        webTypes.contributions.html.tags.push(tag);

        doc[name] = {
            description
        };

        const module_component_group = module.groups.find((g) => g.title === 'Component');

        module_component_group &&
            module_component_group.children.forEach((component) => {
                const description =
                    component.comment &&
                    component.comment.summary
                        .map((s) => {
                            const text = s.text || '';
                            const splittedText = text.split('_');

                            return splittedText[1] ? splittedText[1] : text;
                        })
                        .join(' ');

                !doc[name]['components'] && (doc[name]['components'] = {});

                const methods = {
                    description: staticMessages['methods'],
                    values: []
                };
                const component_method_group = component.groups && component.groups.find((g) => g.title === 'Methods');

                component_method_group &&
                    component_method_group.children.forEach((method) => {
                        const signature = method.getAllSignatures()[0];

                        methods.values.push({
                            name: signature.name,
                            parameters: signature.parameters.map((param) => {
                                return {
                                    name: param.name,
                                    type: param.type.toString(),
                                    description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                                };
                            }),
                            returnType: signature.type.toString(),
                            description: signature.comment && signature.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                const component_props_id = component.extendedTypes && component.extendedTypes[0].typeArguments && component.extendedTypes[0].typeArguments[0] && component.extendedTypes[0].typeArguments[0]._target;
                const module_properties_group = module.groups.find((g) => g.title === 'Properties');
                const component_props = module_properties_group && module_properties_group.children.find((c) => (component_props_id ? c.id === component_props_id : true));

                const props = [];
                const callbacks = [];

                if (component_props) {
                    //props.description = component_props.comment ? component_props.comment.summary.map((s) => parseText(s.text || '')).join(' ') : '';

                    const component_props_group = component_props.groups && component_props.groups.find((g) => g.title === 'Properties');

                    component_props_group &&
                        component_props_group.children.forEach((prop) => {
                            if (!prop.inheritedFrom || (prop.inheritedFrom && !prop.inheritedFrom.toString().startsWith('Omit.data-pr-'))) {
                                props.push({
                                    name: prop.name,
                                    default: prop.comment && prop.comment.getTag('@defaultValue') ? parseText(prop.comment.getTag('@defaultValue').content[0].text) : 'null', // TODO: Check
                                    description: prop.comment && prop.comment.summary.map((s) => parseText(s.text || '')).join(' '),
                                    value: {
                                        kind: 'expression',
                                        type: prop.type.toString()
                                    }
                                    //optional: prop.flags.isOptional,
                                    //readonly: prop.flags.isReadonly,
                                    //deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0].text) : undefined
                                });
                            }
                        });

                    const component_props_methods_group = component_props.groups && component_props.groups.find((g) => g.title === 'Methods');

                    component_props_methods_group &&
                        component_props_methods_group.children.forEach((method) => {
                            const signature = method.getAllSignatures()[0];

                            callbacks.push({
                                name: signature.name,
                                description: signature.comment.summary.map((s) => parseText(s.text || '')).join(' '),
                                arguments: signature.parameters.map((param) => {
                                    return {
                                        name: param.name,
                                        // optional: param.flags.isOptional,
                                        type: param.type.toString(),
                                        description: param.comment && param.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                                    };
                                })
                            });
                        });
                }

                tag.attributes = props;
                tag.events = callbacks;

                doc[name]['components'][component.name] = {
                    description,
                    methods,
                    props,
                    callbacks
                };
            });

        const module_model_group = module.groups.find((g) => g.title === 'Model');

        module_model_group &&
            module_model_group.children.forEach((model) => {
                const event_props_description = model.comment && model.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['model'] && (doc[name]['model'] = {});

                const props = {
                    description: '',
                    values: []
                };
                const model_props_group = model.groups.find((g) => g.title === 'Properties');

                model_props_group &&
                    model_props_group.children.forEach((prop) => {
                        props.values.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                doc[name]['model'][model.name] = {
                    description: event_props_description,
                    props
                };
            });

        const module_functions_group = module.groups.find((g) => g.title === 'Functions');

        module_functions_group &&
            module_functions_group.children.forEach((method) => {
                !doc[name]['functions'] &&
                    (doc[name]['functions'] = {
                        description: staticMessages['functions'],
                        values: {}
                    });

                const signatures = method.getAllSignatures();

                if (signatures && signatures.length > 0) {
                    const signature = signatures[0];

                    doc[name]['functions'].values[method.name] = {
                        name: signature.name,
                        parameters: signature.parameters.map((param) => {
                            return {
                                name: param.name,
                                type: param.type.toString(),
                                description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                            };
                        }),
                        returnType: signature.type.toString(),
                        description: signature.comment && signature.comment.summary.map((s) => s.text || '').join(' ')
                    };
                }
            });

        const module_events_group = module.groups.find((g) => g.title === 'Events');

        module_events_group &&
            module_events_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                const component_prop = event.comment && event.comment.getTag('@see') ? event.comment.getTag('@see').content[0].text : ''; // TODO: Check
                const event_extendedBy = event.extendedBy && event.extendedBy.toString();

                !doc[name]['events'] &&
                    (doc[name]['events'] = {
                        description: staticMessages['events'],
                        values: {}
                    });

                const props = [];
                const event_props_group = event.groups.find((g) => g.title === 'Properties');

                event_props_group &&
                    event_props_group.children.forEach((prop) => {
                        props.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            //default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                doc[name]['events'].values[event.name] = {
                    description: event_props_description,
                    relatedProp: component_prop,
                    props,
                    extendedBy: event_extendedBy
                };
            });

        const module_interfaces_group = module.groups.find((g) => g.title === 'Interfaces');

        module_interfaces_group &&
            module_interfaces_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                const component_prop = event.comment && event.comment.getTag('@see') ? event.comment.getTag('@see').content[0].text : ''; // TODO: Check
                const event_extendedBy = event.extendedBy && event.extendedBy.toString();
                const event_extendedTypes = event.extendedTypes && event.extendedTypes.toString();

                !doc[name]['interfaces'] &&
                    (doc[name]['interfaces'] = {
                        description: staticMessages['interfaces'],
                        values: {}
                    });

                const props = [];
                const callbacks = [];

                if (event.groups) {
                    const event_props_group = event.groups.find((g) => g.title === 'Properties');

                    event_props_group &&
                        event_props_group.children.forEach((prop) => {
                            props.push({
                                name: prop.name,
                                optional: prop.flags.isOptional,
                                readonly: prop.flags.isReadonly,
                                type: prop.type.toString(),
                                //default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                                description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                            });
                        });

                    const event_methods_group = event.groups.find((g) => g.title === 'Methods');

                    event_methods_group &&
                        event_methods_group.children.forEach((method) => {
                            const signature = method.getAllSignatures()[0];

                            callbacks.push({
                                name: signature.name,
                                parameters: signature.parameters.map((param) => {
                                    return {
                                        name: param.name,
                                        optional: param.flags.isOptional,
                                        type: param.type.toString(),
                                        description: param.comment && param.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                                    };
                                }),
                                returnType: signature.type.toString(),
                                description: signature.comment && signature.comment.summary.map((s) => parseText(s.text || '')).join(' ')
                            });
                        });
                }

                const signature = event.getAllSignatures();

                if (signature && signature.length > 0) {
                    const parameter = signature[0].parameters[0];

                    props.push({
                        name: `[${parameter.name}: ${parameter.type.toString()}]`,
                        optional: parameter.flags.isOptional,
                        readonly: parameter.flags.isReadonly,
                        type: signature[0].type.toString(),
                        //default: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                        description: signature[0].comment && signature[0].comment.summary.map((s) => s.text || '').join(' ')
                    });
                }

                doc[name]['interfaces'].values[event.name] = {
                    description: event_props_description,
                    relatedProp: component_prop,
                    props,
                    callbacks,
                    extendedBy: event_extendedBy,
                    extendedTypes: event_extendedTypes
                };
            });

        const module_types_group = module.groups.find((g) => g.title === 'Type Aliases');

        module_types_group &&
            module_types_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['types'] &&
                    (doc[name]['types'] = {
                        description: staticMessages['types'],
                        values: {}
                    });

                let values = event.type.toString();
                const declaration = event.type.declaration;

                if (declaration) {
                    const groups = declaration.groups && declaration.groups.find((g) => g.title === 'Properties');

                    const map = {};

                    groups &&
                        groups.children.forEach((prop) => {
                            const description = prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ');

                            map[`${prop.name}${prop.flags.isOptional ? '?' : ''}`] = `${prop.type.toString()}, ${description ? '// ' + description : ''}`;
                        });

                    values = JSON.stringify(map, null, 4);
                }

                doc[name]['types'].values[event.name] = {
                    values,
                    description: event_props_description
                };
            });
    });

    const webTypesJson = JSON.stringify(webTypes, null, 4);

    !fs.existsSync(distDir) && fs.mkdirSync(distDir);
    fs.writeFileSync(path.resolve(distDir, 'web-types.json'), webTypesJson);
}
