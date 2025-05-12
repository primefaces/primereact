import APIDocs from '@/data/api.json';
import o from '@/data/tokens.mjs';

export const getPTOptions = (name) => {
    const { props } = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughOptions`] || APIDocs[name.toLowerCase()].interfaces.values[`${name}DirectivePassThroughOptions`];
    const options = APIDocs[name.toLowerCase()].interfaces.values[`${name}PassThroughMethodOptions`];
    const data = [];

    for (const [i, prop] of props.entries()) {
        if (options) {
            let subCompName, subOptions;
            const hasSubComp = prop.name !== 'hooks' && prop.type.indexOf('TransitionType') === -1 && prop.type.indexOf('<') > -1 && name.toLowerCase() !== prop.type.slice(0, prop.type.indexOf('<')).toLowerCase();

            if (hasSubComp) {
                subCompName = prop.type.slice(0, prop.type.indexOf('<')).replace('PassThroughOptions', '').replace('PassThroughOptionType', '');
                subOptions = APIDocs[subCompName.toLowerCase()].interfaces.values[`${subCompName}PassThroughMethodOptions`];
                const objToReplace = subOptions.props.find((opt) => opt.name === 'parent');

                objToReplace.type = prop.type;
            }

            if (!prop.deprecated) {
                data.push({
                    value: i + 1,
                    label: prop.name,
                    options: hasSubComp ? subOptions?.props : options?.props,
                    description: prop.description
                });
            }
        } else {
            data.push({
                value: i + 1,
                label: prop.name,
                description: prop.description
            });
        }
    }

    return data;
};

export const getStyleOptions = (name) => {
    const styleDoc = APIDocs[name.toLowerCase() + 'style'];
    const enumValues = styleDoc && styleDoc.enumerations && styleDoc.enumerations.values;
    const { members = [] } = enumValues ? enumValues[`${name}Classes`] || {} : {};
    const data = [];

    for (const member of members) {
        const { value, description } = member;

        data.push({
            class: value.replaceAll('"', ''),
            description
        });
    }

    return data;
};

export const getTokenOptions = (name) => {
    const data = [];

    if (o[name.toLowerCase()]) {
        const tokens = o[name.toLowerCase()].tokens;

        for (const [, value] of Object.entries(tokens)) {
            data.push({
                token: value.token,
                /*property: value.name.split('.').slice(1).join('.'),*/
                'CSS Variable': value.variable,
                description: value.description
            });
        }
    }

    return data;
};
