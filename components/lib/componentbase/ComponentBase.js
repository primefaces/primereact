import PrimeReact from '../api/Api';
import { ObjectUtils } from '../utils/Utils';

export const ComponentBase = {
    defaultProps: {
        pt: undefined,
        unstyled: false
    },
    context: undefined,
    classes: {},
    styles: '',
    extend: (props = {}) => {
        const css = props.css;
        const defaultProps = { ...props.defaultProps, ...ComponentBase.defaultProps };
        const inlineStyles = {
            hiddenAccessible: {
                border: '0',
                clip: 'rect(0 0 0 0)',
                height: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: '0',
                position: 'absolute',
                width: '1px'
            }
        };

        const getProps = (props, context = {}) => {
            ComponentBase.context = context;

            return ObjectUtils.getMergedProps(props, defaultProps);
        };

        const getOtherProps = (props) => ObjectUtils.getDiffProps(props, defaultProps);

        const getOptionValue = (obj = {}, key = '', params = {}) => {
            const fKeys = String(ObjectUtils.toFlatCase(key)).split('.');
            const fKey = fKeys.shift();
            const matchedPTOption = Object.keys(obj).find((k) => ObjectUtils.toFlatCase(k) === fKey) || '';

            return fKey ? (ObjectUtils.isObject(obj) ? getOptionValue(ObjectUtils.getJSXElement(obj[matchedPTOption], params), fKeys.join('.'), params) : undefined) : ObjectUtils.getJSXElement(obj, params);
        };

        const getPTValue = (obj = {}, key = '', params = {}) => {
            const fkey = ObjectUtils.toFlatCase(key);
            const datasetPrefix = 'data-pc-';
            const componentName = (params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE)) || '';
            const pt = ComponentBase.context.pt || PrimeReact.pt || {};

            const getValue = (...args) => {
                const value = getOptionValue(...args);

                return ObjectUtils.isString(value) ? { className: value } : value;
            };

            const _globalPT = () => {
                return pt && ObjectUtils.getJSXElement(pt, params);
            };

            const defaultPT = () => {
                return getOptionValue(pt, componentName, params) || _globalPT();
            };

            const self = getValue(obj, fkey, params);
            const globalPT = getValue(defaultPT(), key, params) || (/./g.test(key) && !!params[key.split('.')[0]] ? getValue(_globalPT(), key, params) : undefined);

            const datasetProps = {
                ...(fkey === 'root' && { [`${datasetPrefix}name`]: componentName }),
                [`${datasetPrefix}section`]: fkey
            };

            let merged = {
                ...ObjectUtils.getMergedProps(self, globalPT)
            };

            if (Object.keys(datasetProps).length) {
                merged = {
                    ...merged,
                    ...datasetProps
                };
            }

            return merged;
        };

        const setMetaData = (metadata = {}) => {
            const { props, state } = metadata;
            const ptm = (key = '', params = {}) => ptmo((props || {}).pt, key, { ...metadata, ...params });
            const ptmo = (obj = {}, key = '', params = {}) => getPTValue(obj, key, params);

            const isUnstyled = () => {
                return ComponentBase.context.unstyled || PrimeReact.unstyled || props.unstyled;
            };

            const cx = (key = '', params = {}) => {
                return !isUnstyled() ? getOptionValue(css && css.classes, key, { props, state, ...params }) : undefined;
            };

            const sx = (key = '', when = true, params = {}) => {
                if (when) {
                    const self = getOptionValue(css && css.inlineStyles, key, { props, state, ...params });
                    const base = getOptionValue(inlineStyles, key, { props, state, ...params });
                    let merged = {
                        ...ObjectUtils.getMergedProps(base, self)
                    };

                    return merged;
                }

                return undefined;
            };

            return { ptm, ptmo, sx, cx };
        };

        return {
            getProps,
            getOtherProps,
            setMetaData,
            ...props,
            defaultProps
        };
    }
};
