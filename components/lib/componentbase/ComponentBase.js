import PrimeReact from '../api/Api';
import { mergeProps } from '../utils/MergeProps';
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
            const matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find((k) => ObjectUtils.toFlatCase(k) === fKey) : '';

            return fKey ? (ObjectUtils.isObject(obj) ? getOptionValue(ObjectUtils.getJSXElement(obj[matchedPTOption], params), fKeys.join('.'), params) : undefined) : ObjectUtils.getJSXElement(obj, params);
        };

        const getPTValue = (obj = {}, key = '', params = {}) => {
            const datasetPrefix = 'data-pc-';
            const componentName = (params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE)) || '';
            const pt = ComponentBase.context.pt || PrimeReact.pt || {};
            const isNestedParam = ObjectUtils.isString(key) && /./g.test(key) && !!params[key.split('.')[0]];
            const fkey = isNestedParam ? ObjectUtils.toFlatCase(key.split('.')[1]) : ObjectUtils.toFlatCase(key);

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
            const globalPT = (isNestedParam ? getValue(getOptionValue(pt, componentName, params), key, params) : undefined) || baseGlobalPTValue;
            const datasetProps = {
                ...(fkey === 'root' && { [`${datasetPrefix}name`]: isNestedParam ? ObjectUtils.toFlatCase(key.split('.')[0]) : componentName }),
                [`${datasetPrefix}section`]: fkey
            };

            const merged = mergeProps(self, globalPT, Object.keys(datasetProps).length ? datasetProps : {});

            return merged;
        };

        const setMetaData = (metadata = {}) => {
            const ptm = (key = '', params = {}) => ptmo((props || {}).pt, key, { ...metadata, ...params });
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
