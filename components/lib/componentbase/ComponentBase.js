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
            const fKeys = String(ObjectUtils.convertToFlatCase(key)).split('.');
            const fKey = fKeys.shift();
            const matchedPTOption = Object.keys(obj).find((k) => ObjectUtils.convertToFlatCase(k) === fKey) || '';

            return fKey ? (ObjectUtils.isObject(obj) ? getOptionValue(ObjectUtils.getJSXElement(obj[matchedPTOption], params), fKeys.join('.'), params) : undefined) : ObjectUtils.getJSXElement(obj, params);
        };

        const getPTValue = (obj = {}, key = '', params = {}) => {
            const datasetPrefix = 'data-pc-';
            const componentName = (params.props && params.props.__TYPE && ObjectUtils.convertToFlatCase(params.props.__TYPE)) || '';
            const pt = ComponentBase.context.pt || PrimeReact.pt || {};

            const defaultPT = (key) => pt && getOptionValue(pt[componentName], key);
            const self = ObjectUtils.getPropValue(obj, key, params)[key];
            const globalPT = defaultPT(key);
            const datasetProps = {
                ...(key === 'root' && { [`${datasetPrefix}name`]: componentName }),
                [`${datasetPrefix}section`]: ObjectUtils.convertToFlatCase(key)
            };

            let merged = {
                ...ObjectUtils.getMergedProps(globalPT, self)
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
