const TypeDoc = require('typedoc');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '../');
const outputPath = path.resolve(rootDir, 'components/doc/common/apidoc');

const app = new TypeDoc.Application();

// If you want TypeDoc to load tsconfig.json / typedoc.json files
app.options.addReader(new TypeDoc.TSConfigReader());
app.options.addReader(new TypeDoc.TypeDocReader());

app.bootstrap({
    // typedoc options here
    name: 'PrimeReact',
    entryPoints: [`components/lib`],
    entryPointStrategy: 'expand',
    hideGenerator: true,
    excludeExternals: true,
    includeVersion: true,
    searchInComments: true,
    disableSources: true,
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

    project.children.forEach((module) => {
        const { name, comment } = module;

        // if (name !== 'datatable') return; // REMOVE

        const description = comment && comment.summary.map((s) => s.text || '').join(' ');

        doc[name] = {
            description
        };

        const module_component_group = module.groups.find((g) => g.title === 'Component');

        module_component_group &&
            module_component_group.children.forEach((component) => {
                const description = component.comment && component.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['components'] && (doc[name]['components'] = {});

                const methods = [];
                const component_method_group = component.groups && component.groups.find((g) => g.title === 'Methods');

                component_method_group &&
                    component_method_group.children.forEach((method) => {
                        const signature = method.getAllSignatures()[0];

                        methods.push({
                            name: signature.name,
                            parameters: signature.parameters.map((param) => {
                                return {
                                    name: param.name,
                                    type: param.type.name,
                                    description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                                };
                            }),
                            returnType: signature.type.name,
                            description: signature.comment && signature.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                const component_props_id = component.extendedTypes && component.extendedTypes[0].typeArguments && component.extendedTypes[0].typeArguments[0] && component.extendedTypes[0].typeArguments[0]._target;
                const module_properties_group = module.groups.find((g) => g.title === 'Properties');
                const component_props = module_properties_group && module_properties_group.children.find((c) => c.id === component_props_id);

                const props = [];
                const callbacks = [];

                if (component_props) {
                    const component_props_description = component_props.comment && component_props.comment.summary.map((s) => s.text || '').join(' ');

                    const component_props_group = component_props.groups && component_props.groups.find((g) => g.title === 'Properties');

                    component_props_group &&
                        component_props_group.children.forEach((prop) => {
                            if (!prop.inheritedFrom) {
                                props.push({
                                    name: prop.name,
                                    optional: prop.flags.isOptional,
                                    readonly: prop.flags.isReadonly,
                                    type: prop.type.toString(),
                                    defaultValue: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                                    description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                                });
                            }
                        });

                    const component_props_methods_group = component_props.groups && component_props.groups.find((g) => g.title === 'Methods');

                    component_props_methods_group &&
                        component_props_methods_group.children.forEach((method) => {
                            const signature = method.getAllSignatures()[0];

                            callbacks.push({
                                name: signature.name,
                                parameters: signature.parameters.map((param) => {
                                    return {
                                        name: param.name,
                                        optional: param.flags.isOptional,
                                        type: param.type.name,
                                        description: param.comment && param.comment.summary.map((s) => s.text || '').join(' ')
                                    };
                                }),
                                returnType: signature.type.toString(),
                                description: signature.comment.summary.map((s) => s.text || '').join(' ')
                            });
                        });
                }

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

                const props = [];
                const model_props_group = model.groups.find((g) => g.title === 'Properties');

                model_props_group &&
                    model_props_group.children.forEach((prop) => {
                        props.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            defaultValue: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                doc[name]['model'][model.name] = {
                    description: event_props_description,
                    props
                };
            });

        const module_events_group = module.groups.find((g) => g.title === 'Events');

        module_events_group &&
            module_events_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                const component_prop = event.comment && event.comment.getTag('@see') ? event.comment.getTag('@see').content[0].text : ''; // TODO: Check
                const event_extendedBy = event.extendedBy && event.extendedBy.toString();

                !doc[name]['events'] && (doc[name]['events'] = {});

                const props = [];
                const event_props_group = event.groups.find((g) => g.title === 'Properties');

                event_props_group &&
                    event_props_group.children.forEach((prop) => {
                        props.push({
                            name: prop.name,
                            optional: prop.flags.isOptional,
                            readonly: prop.flags.isReadonly,
                            type: prop.type.toString(),
                            //defaultValue: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
                        });
                    });

                doc[name]['events'][event.name] = {
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

                !doc[name]['interfaces'] && (doc[name]['interfaces'] = {});

                const props = [];

                if (event.groups) {
                    const event_props_group = event.groups.find((g) => g.title === 'Properties');

                    event_props_group &&
                        event_props_group.children.forEach((prop) => {
                            props.push({
                                name: prop.name,
                                optional: prop.flags.isOptional,
                                readonly: prop.flags.isReadonly,
                                type: prop.type.toString(),
                                //defaultValue: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                                description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' ')
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
                        //defaultValue: prop.comment && prop.comment.getTag('@defaultValue') ? prop.comment.getTag('@defaultValue').content[0].text : '', // TODO: Check
                        description: signature[0].comment && signature[0].comment.summary.map((s) => s.text || '').join(' ')
                    });
                }

                doc[name]['interfaces'][event.name] = {
                    description: event_props_description,
                    relatedProp: component_prop,
                    props,
                    extendedBy: event_extendedBy
                };
            });

        const module_types_group = module.groups.find((g) => g.title === 'Type Aliases');

        module_types_group &&
            module_types_group.children.forEach((event) => {
                const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');

                !doc[name]['types'] && (doc[name]['types'] = {});
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

                doc[name]['types'][event.name] = {
                    values
                    //description: event_props_description
                };
            });
    });

    const typedocJSON = JSON.stringify(doc, null, 4);

    !fs.existsSync(outputPath) && fs.mkdirSync(outputPath);
    fs.writeFileSync(path.resolve(outputPath, 'index.json'), typedocJSON);

    app.generateJson(project, `./api-generator/typedoc.json`);
}
