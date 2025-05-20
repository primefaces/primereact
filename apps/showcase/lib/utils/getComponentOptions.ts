import APIDocs from '@/assets/apidoc/index.json';
import type { ApiDoc, APIDocsInterface, EventDefinition, PropItem, PropsDefinition, TokensObject, TypeDefinition } from '@/types/Doc.types';
import ComponentTokens from '@primeuix/themes/tokens';

const typedAPIDocs = APIDocs as unknown as APIDocsInterface;

export const getApiDocs = (component: string): ApiDoc[] => {
    const newDocs: ApiDoc[] = [];
    const moduleName = component.toLowerCase();
    const regex = /\[Live Demo][\s\S]*/g;

    const newDoc: ApiDoc = {
        id: `api.${moduleName}`,
        label: component,
        description: typedAPIDocs[moduleName]?.description?.replace(regex, '') || null,
        children: [],
        docName: component
    };

    const values = typedAPIDocs[moduleName]?.interfaces?.values;
    const types = typedAPIDocs[moduleName]?.types?.values;

    let props: PropsDefinition | undefined = undefined;
    let exposes: PropsDefinition | undefined = undefined;
    let state: PropsDefinition | undefined = undefined;
    let events: EventDefinition[] | undefined = undefined;
    let passThrough: PropsDefinition | undefined = undefined;
    let instance: TypeDefinition | undefined = undefined;
    let passThroughOptionType: TypeDefinition | undefined = undefined;

    if (values) {
        props = values[`${component}Props`];
        exposes = values[`${component}Exposes`];
        state = values[`${component}State`];
        events = findEvents(values);
        passThrough = values[`${component}PassThroughOptions`];
    }

    if (types) {
        instance = types[`${component}Instance`];
        passThroughOptionType = types[`${component}PassThroughOptionType`];
    }

    if (props && props.props.length) {
        newDoc.children.push({
            id: `api.${moduleName}.props`,
            label: 'Props',
            data: setPropsData(props.props),
            description: props.description
        });
    }

    if (exposes && exposes.props.length) {
        newDoc.children.push({
            id: `api.${moduleName}.exposes`,
            label: 'Exposes',
            data: setPropsData(exposes.props),
            description: exposes.description
        });
    }

    if (state && state.props.length) {
        newDoc.children.push({
            id: `api.${moduleName}.state`,
            label: 'State',
            data: setPropsData(state.props),
            description: state.description
        });
    }

    if (events && events.length > 0) {
        newDoc.children.push({
            id: `api.${moduleName}.events`,
            label: 'Events',
            data: setEventsData(moduleName, events)
        });
    }

    if (passThrough) {
        const data = [];

        if (passThrough && passThrough.props.length) {
            data.push({
                label: 'PassThroughOptions',
                description: passThrough.description,
                data: setPropsData(passThrough.props)
            });
        }

        newDoc.children.push({
            id: `api.${moduleName}.interfaces`,
            label: 'Interfaces',
            data: data
        });
    }

    if (passThroughOptionType || instance) {
        const data = [];

        if (passThroughOptionType && passThroughOptionType.values) {
            data.push({
                label: 'PassThroughOptionType',
                description: passThroughOptionType.description,
                data: [
                    {
                        values: passThroughOptionType.values
                    }
                ]
            });
        }

        if (instance && instance.values) {
            data.push({
                label: 'Instance',
                description: instance.description,
                data: [
                    {
                        values: instance.values
                    }
                ]
            });
        }

        newDoc.children.push({
            id: `api.${moduleName}.types`,
            label: 'Types',
            data: data
        });
    }

    newDocs.push(newDoc);

    return newDocs;
};

export const setPropsData = (props: PropItem[]): unknown[] => {
    const data = [];

    for (const prop of props) {
        data.push({
            name: prop.name,
            type: prop.type,
            default: prop.default,
            description: prop.description,
            deprecated: prop.deprecated
        });
    }

    return data;
};

const findEvents = (values: { [key: string]: PropsDefinition }): EventDefinition[] => {
    const events: EventDefinition[] = [];

    for (const key of Object.keys(values)) {
        if (key.includes('Event')) {
            events.push({ key, values: values[key] });
        }
    }

    return events;
};

const setEventsData = (moduleName: string, events: EventDefinition[]) => {
    const data = [];

    for (const event of events) {
        const eventData: {
            id: string;
            label: string;
            description?: string;
            relatedProp?: string;
            data: Array<{ name: string; type: string; description?: string }>;
        } = {
            id: `api.${moduleName}.events.${event.key}`,
            label: event.key,
            description: event.values.description,
            relatedProp: event.values.relatedProp,
            data: []
        };

        if (event.values.relatedProp) {
            eventData.relatedProp = event.values.relatedProp;
        }

        event.values.props.forEach((prop) => {
            eventData.data.push({
                name: prop.name,
                type: prop.type,
                description: prop.description
            });
        });

        data.push(eventData);
    }

    return data;
};

export const getPTOptions = (name: string): { data: unknown[]; description?: string } => {
    const { props, description } = typedAPIDocs[name.toLowerCase()]?.interfaces?.values[`${name}PassThroughOptions`] as PropsDefinition;

    const options = typedAPIDocs[name.toLowerCase()]?.interfaces?.values[`${name}PassThroughMethodOptions`] as PropsDefinition | undefined;
    const data = [];

    for (const [, prop] of props.entries()) {
        if (options) {
            let subCompName: string | undefined;
            let subOptions: PropsDefinition | undefined;
            const hasSubComp = prop.name !== 'hooks' && prop.type.indexOf('TransitionType') === -1 && prop.type.indexOf('<') > -1 && name.toLowerCase() !== prop.type.slice(0, prop.type.indexOf('<')).toLowerCase();

            if (hasSubComp) {
                subCompName = prop.type.slice(0, prop.type.indexOf('<')).replace('PassThroughOptions', '').replace('PassThroughOptionType', '');
                subOptions = typedAPIDocs[subCompName.toLowerCase()]?.interfaces?.values[`${subCompName}PassThroughMethodOptions`] as PropsDefinition;

                if (subOptions && subOptions.props) {
                    const objToReplace = subOptions.props.find((opt) => opt.name === 'parent');

                    if (objToReplace) {
                        objToReplace.type = prop.type;
                    }
                }
            }

            if (!prop.deprecated) {
                data.push({
                    // value: i + 1,
                    label: prop.name,
                    options: hasSubComp ? subOptions?.props : options?.props,
                    description: prop.description
                });
            }
        } else {
            data.push({
                // value: i + 1,
                label: prop.name,
                type: prop.type,
                description: prop.description
            });
        }
    }

    return {
        data,
        description
    };
};

export const getStyleOptions = (name: string): { data: unknown[] } => {
    const styleDoc = typedAPIDocs[name.toLowerCase() + 'style'];
    const enumValues = styleDoc && styleDoc.enumerations && styleDoc.enumerations.values;
    const { members = [] } = enumValues ? enumValues[`${name}ClassNames`] || {} : {};
    const data = [];

    for (const member of members) {
        const { value, description } = member;

        data.push({
            class: value.replaceAll('"', ''),
            description
        });
    }

    return { data };
};

export const getTokenOptions = (name: string): { data: unknown[] } => {
    const data = [];
    const typedTokens = ComponentTokens as unknown as TokensObject;

    if (typedTokens[name.toLowerCase()]) {
        const tokens = typedTokens[name.toLowerCase()].tokens;

        for (const [, value] of Object.entries(tokens)) {
            data.push({
                token: value.token,
                /*property: value.name.split('.').slice(1).join('.'),*/
                'CSS Variable': value.variable,
                description: value.description
            });
        }
    }

    return { data };
};
