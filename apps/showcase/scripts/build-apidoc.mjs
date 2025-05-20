import fs from 'fs-extra';
import path from 'path';
import { Application, TypeDocReader } from 'typedoc';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../../');
const outputPath = path.resolve(rootDir, 'apps/showcase/assets/apidoc');
const tsConfigPath = path.resolve(rootDir, 'apps/showcase/typedoc-tsconfig.json');

const staticMessages = {
    exposes: 'Defines public properties and methods that are exposed by the component to interact with it programmatically.',
    state: 'Defines the internal state variables that the component manages and updates during its lifecycle.',
    interfaces: 'Defines the custom interfaces used by the module.',
    types: 'Defines the custom types used by the module.'
};

const getTypeDoc = async (typeDocOptions) => {
    try {
        const app = await Application.bootstrap({
            entryPointStrategy: 'expand',
            hideGenerator: true,
            excludeExternals: true,
            includeVersion: true,
            searchInComments: true,
            disableSources: true,
            logLevel: 'Error',
            sort: ['source-order'],
            tsconfig: tsConfigPath,
            ...typeDocOptions
        });

        await app.options.addReader(new TypeDocReader());

        const project = await app.convert();

        if (project) {
            const doc = {};

            project.children.forEach((module) => {
                const { name, comment } = module;

                if (comment) {
                    const description = comment && comment.summary.map((s) => s.text || '').join(' ');

                    doc[name] = {
                        description
                    };

                    const module_interfaces_group = module.groups?.find((g) => g.title === 'Interfaces');

                    if (module_interfaces_group) {
                        module_interfaces_group.children.forEach((event) => {
                            const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                            const component_prop = '';
                            const event_extendedBy = event.extendedBy && event.extendedBy.toString();
                            const event_extendedTypes = event.extendedTypes && event.extendedTypes.toString();

                            if (!doc[name]['interfaces']) {
                                doc[name]['interfaces'] = {
                                    description: staticMessages['interfaces'],
                                    typeDescription: staticMessages['types'],
                                    values: {}
                                };
                            }

                            if (!doc[name]['types']) {
                                doc[name]['types'] = {
                                    description: staticMessages['exposes'],
                                    stateDescription: staticMessages['state'],
                                    typeDescription: staticMessages['types'],
                                    values: {}
                                };
                            }

                            const props = [];
                            const methods = [];

                            if (event.groups) {
                                const event_props_group = event.groups.find((g) => g.title === 'Properties');

                                if (event_props_group) {
                                    event_props_group.children.forEach((prop) => {
                                        props.push({
                                            name: prop.name,
                                            optional: prop.flags.isOptional,
                                            readonly: prop.flags.isReadonly,
                                            type: prop.type.toString(),
                                            default: prop.comment && prop.comment.getTag('@default') ? prop.comment.getTag('@default').content[0]?.text.replaceAll('```ts', '').replace('```', '').trim() || '' : '',
                                            description: prop.comment && prop.comment.summary.map((s) => s.text || '').join(' '),
                                            deprecated: prop.comment && prop.comment.getTag('@deprecated') ? parseText(prop.comment.getTag('@deprecated').content[0]?.text) : undefined
                                        });
                                    });
                                }
                            }

                            const signature = event.getAllSignatures();

                            if (signature && signature.length > 0) {
                                const parameter = signature[0].parameters[0];

                                props.push({
                                    name: `[${parameter.name}: ${parameter.type.toString()}]`,
                                    optional: parameter.flags.isOptional,
                                    readonly: parameter.flags.isReadonly,
                                    type: signature[0].type.toString(),
                                    //default: prop.comment && prop.comment.getTag('@default') ? prop.comment.getTag('@default').content[0].text : '',
                                    description: signature[0].comment && signature[0].comment.summary.map((s) => s.text || '').join(' ')
                                });
                            }

                            doc[name]['interfaces'].values[event.name] = {
                                description: event_props_description,
                                relatedProp: component_prop,
                                props,
                                methods,
                                extendedBy: event_extendedBy,
                                extendedTypes: event_extendedTypes
                            };
                        });
                    }

                    const module_types_group = module.groups?.find((g) => g.title === 'Type Aliases');

                    if (module_types_group) {
                        module_types_group.children.forEach((event) => {
                            const event_props_description = event.comment && event.comment.summary.map((s) => s.text || '').join(' ');
                            const values = event.type.toString();

                            doc[name]['types'].values[event.name] = {
                                values,
                                description: event_props_description
                            };
                        });
                    }
                }
            });

            return doc;
        } else {
            // eslint-disable-next-line no-console
            console.error('Failed to convert project: TypeDoc conversion returned null or undefined');

            return {};
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error in TypeDoc process:', error);

        return {};
    }
};

const main = async () => {
    try {
        const inlineDocs = await getTypeDoc({
            name: 'PrimeReact',
            entryPoints: [path.resolve(rootDir, 'packages/types/src/shared')],
            exclude: ['node_modules/**/*', '**/*.spec.ts', '**/*.test.ts']
        });

        if (!(await fs.exists(outputPath))) {
            await fs.mkdir(outputPath, { recursive: true });
        }

        await fs.writeFile(path.resolve(outputPath, 'index.json'), JSON.stringify({ ...inlineDocs }, null, 4));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Main process error:', error);
    }
};

main();
