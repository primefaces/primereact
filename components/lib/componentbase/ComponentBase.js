import PrimeReact from '../api/Api';
import { ObjectUtils } from '../utils/Utils';

export const ComponentBase = {
    defaultProps: {
        pt: undefined
    },
    context: undefined,
    extend: (props = {}) => {
        const defaultProps = { ...props.defaultProps, ...ComponentBase.defaultProps };

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
            const baseGlobalPTValue = getValue(defaultPT(), key, params);
            const isNestedParam = /./g.test(key) && !!params[key.split('.')[0]];
            const globalPT = baseGlobalPTValue || (isNestedParam ? getValue(globalPT, key, params) : undefined);

            const datasetProps = {
                ...(fkey === 'root' && { [`${datasetPrefix}name`]: componentName }),
                [`${datasetPrefix}section`]: fkey
            };

            let merged = {
                ...ObjectUtils.getMergedProps(self, globalPT)
            };

            let mergedClassName = [globalPT.className, self.className].filter(Boolean).join(' ').trim();

            mergedClassName = ObjectUtils.isEmpty(mergedClassName) ? undefined : mergedClassName;

            if (Object.keys(datasetProps).length) {
                merged = {
                    ...ObjectUtils.getMergedProps(self, globalPT),
                    className: mergedClassName,
                    ...datasetProps
                };
            }

            return merged;
        };

        const setMetaData = (metadata = {}) => {
            const ptm = (key = '', params = {}) => ptmo((metadata.props || {}).pt, key, { ...metadata, ...params });
            const ptmo = (obj = {}, key = '', params = {}) => getPTValue(obj, key, params);

            return { ptm, ptmo };
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
