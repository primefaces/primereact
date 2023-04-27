import { ObjectUtils } from '../utils/Utils';

export const ComponentBase = {
    defaultProps: {
        pt: undefined
    },
    extend: (props = {}) => {
        const defaultProps = { ...props.defaultProps, ...ComponentBase.defaultProps };

        const getProps = (props) => ObjectUtils.getMergedProps(props, defaultProps);
        const getOtherProps = (props) => ObjectUtils.getDiffProps(props, defaultProps);

        const getPTItem = (obj = {}, key = '') => {
            const fKey = ObjectUtils.convertToFlatCase(key);

            return obj[Object.keys(obj).find((k) => ObjectUtils.convertToFlatCase(k) === fKey) || ''];
        };

        const getPTValue = (obj = {}, key = '', params = {}) => ObjectUtils.getPropValue(getPTItem(obj, key), params);

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
