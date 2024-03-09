import PrimeReact from '../api/Api';
import { useMountEffect, useStyle, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ObjectUtils, classNames, mergeProps } from '../utils/Utils';

const baseStyle = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;

const buttonStyles = `
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`;
const checkboxStyles = `
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: auto;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;
const inputTextStyles = `
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`;
const radioButtonStyles = `
.p-radiobutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}

`;
const iconStyles = `
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g,
.p-disabled svg.p-icon {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`;
const commonStyle = `
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    ${buttonStyles}
    ${checkboxStyles}
    ${inputTextStyles}
    ${radioButtonStyles}
    ${iconStyles}
}
`;

export const ComponentBase = {
    cProps: undefined,
    cParams: undefined,
    cName: undefined,
    defaultProps: {
        pt: undefined,
        ptOptions: undefined,
        unstyled: false
    },
    context: {},
    globalCSS: undefined,
    classes: {},
    styles: '',
    extend: (props = {}) => {
        const css = props.css;
        const defaultProps = { ...props.defaultProps, ...ComponentBase.defaultProps };
        const inlineStyles = {};

        const getProps = (props, context = {}) => {
            ComponentBase.context = context;
            ComponentBase.cProps = props;

            return ObjectUtils.getMergedProps(props, defaultProps);
        };

        const getOtherProps = (props) => ObjectUtils.getDiffProps(props, defaultProps);

        const getPTValue = (obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
            // obj either is the passthrough options or has a .pt property.
            if (obj.hasOwnProperty('pt') && obj.pt !== undefined) {
                obj = obj.pt;
            }

            const originalkey = key;
            const isNestedParam = /./g.test(originalkey) && !!params[originalkey.split('.')[0]];
            const fkey = isNestedParam ? ObjectUtils.toFlatCase(originalkey.split('.')[1]) : ObjectUtils.toFlatCase(originalkey);
            const hostName = params.hostName && ObjectUtils.toFlatCase(params.hostName);
            const componentName = hostName || (params.props && params.props.__TYPE && ObjectUtils.toFlatCase(params.props.__TYPE)) || '';
            const isTransition = fkey === 'transition';
            const datasetPrefix = 'data-pc-';

            const getHostInstance = (params) => {
                return params?.props ? (params.hostName ? (params.props.__TYPE === params.hostName ? params.props : getHostInstance(params.parent)) : params.parent) : undefined;
            };

            const getPropValue = (name) => {
                return params.props?.[name] || getHostInstance(params)?.[name];
            };

            ComponentBase.cParams = params;
            ComponentBase.cName = componentName;
            const { mergeSections = true, mergeProps: useMergeProps = false } = getPropValue('ptOptions') || ComponentBase.context.ptOptions || {};

            const getPTClassValue = (...args) => {
                const value = getOptionValue(...args);

                if (Array.isArray(value)) return { className: classNames(...value) };
                if (ObjectUtils.isString(value)) return { className: value };

                if (value?.hasOwnProperty('className') && Array.isArray(value.className)) {
                    return { className: classNames(...value.className) };
                }

                return value;
            };

            const globalPT = searchInDefaultPT ? (isNestedParam ? _useGlobalPT(getPTClassValue, originalkey, params) : _useDefaultPT(getPTClassValue, originalkey, params)) : undefined;
            const self = isNestedParam ? undefined : _usePT(_getPT(obj, componentName), getPTClassValue, originalkey, params, componentName);

            const datasetProps = !isTransition && {
                ...(fkey === 'root' && { [`${datasetPrefix}name`]: params.props && params.props.__parentMetadata ? ObjectUtils.toFlatCase(params.props.__TYPE) : componentName }),
                [`${datasetPrefix}section`]: fkey
            };

            return mergeSections || (!mergeSections && self)
                ? useMergeProps
                    ? mergeProps([globalPT, self, Object.keys(datasetProps).length ? datasetProps : {}], { classNameMergeFunction: ComponentBase.context.ptOptions?.classNameMergeFunction })
                    : { ...globalPT, ...self, ...(Object.keys(datasetProps).length ? datasetProps : {}) }
                : { ...self, ...(Object.keys(datasetProps).length ? datasetProps : {}) };
        };

        const setMetaData = (metadata = {}) => {
            const { props, state } = metadata;
            const ptm = (key = '', params = {}) => getPTValue((props || {}).pt, key, { ...metadata, ...params });
            const ptmo = (obj = {}, key = '', params = {}) => getPTValue(obj, key, params, false);

            const isUnstyled = () => {
                return ComponentBase.context.unstyled || PrimeReact.unstyled || props.unstyled;
            };

            const cx = (key = '', params = {}) => {
                return !isUnstyled() ? getOptionValue(css && css.classes, key, { props, state, ...params }) : undefined;
            };

            const sx = (key = '', params = {}, when = true) => {
                if (when) {
                    const self = getOptionValue(css && css.inlineStyles, key, { props, state, ...params });
                    const base = getOptionValue(inlineStyles, key, { props, state, ...params });

                    return mergeProps([base, self], { classNameMergeFunction: ComponentBase.context.ptOptions?.classNameMergeFunction });
                }

                return undefined;
            };

            return { ptm, ptmo, sx, cx, isUnstyled };
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

const getOptionValue = (obj, key = '', params = {}) => {
    const fKeys = String(ObjectUtils.toFlatCase(key)).split('.');
    const fKey = fKeys.shift();
    const matchedPTOption = ObjectUtils.isNotEmpty(obj) ? Object.keys(obj).find((k) => ObjectUtils.toFlatCase(k) === fKey) : '';

    return fKey ? (ObjectUtils.isObject(obj) ? getOptionValue(ObjectUtils.getItemValue(obj[matchedPTOption], params), fKeys.join('.'), params) : undefined) : ObjectUtils.getItemValue(obj, params);
};

const _getPT = (pt, key = '', callback) => {
    const _usept = pt?.['_usept'];

    const getValue = (value, checkSameKey = false) => {
        const _value = callback ? callback(value) : value;
        const _key = ObjectUtils.toFlatCase(key);

        return (checkSameKey ? (_key !== ComponentBase.cName ? _value?.[_key] : undefined) : _value?.[_key]) ?? _value;
    };

    return ObjectUtils.isNotEmpty(_usept)
        ? {
              _usept,
              originalValue: getValue(pt.originalValue),
              value: getValue(pt.value)
          }
        : getValue(pt, true);
};

const _usePT = (pt, callback, key, params) => {
    const fn = (value) => callback(value, key, params);

    if (pt?.hasOwnProperty('_usept')) {
        const { mergeSections = true, mergeProps: useMergeProps = false, classNameMergeFunction } = pt['_usept'] || ComponentBase.context.ptOptions || {};
        const originalValue = fn(pt.originalValue);
        const value = fn(pt.value);

        if (originalValue === undefined && value === undefined) return undefined;
        else if (ObjectUtils.isString(value)) return value;
        else if (ObjectUtils.isString(originalValue)) return originalValue;

        return mergeSections || (!mergeSections && value) ? (useMergeProps ? mergeProps([originalValue, value], { classNameMergeFunction }) : { ...originalValue, ...value }) : value;
    }

    return fn(pt);
};

const getGlobalPT = () => {
    return _getPT(ComponentBase.context.pt || PrimeReact.pt, undefined, (value) => ObjectUtils.getItemValue(value, ComponentBase.cParams));
};

const getDefaultPT = () => {
    return _getPT(ComponentBase.context.pt || PrimeReact.pt, undefined, (value) => getOptionValue(value, ComponentBase.cName, ComponentBase.cParams) || ObjectUtils.getItemValue(value, ComponentBase.cParams));
};

const _useGlobalPT = (callback, key, params) => {
    return _usePT(getGlobalPT(), callback, key, params);
};

const _useDefaultPT = (callback, key, params) => {
    return _usePT(getDefaultPT(), callback, key, params);
};

export const useHandleStyle = (styles, _isUnstyled = () => {}, config) => {
    const { name, styled = false, hostName = '' } = config;

    const globalCSS = _useGlobalPT(getOptionValue, 'global.css', ComponentBase.cParams);
    const componentName = ObjectUtils.toFlatCase(name);

    const { load: loadBaseStyle } = useStyle(baseStyle, { name: 'base', manual: true });
    const { load: loadCommonStyle } = useStyle(commonStyle, { name: 'common', manual: true });
    const { load: loadGlobalStyle } = useStyle(globalCSS, { name: 'global', manual: true });
    const { load } = useStyle(styles, { name: name, manual: true });

    const hook = (hookName) => {
        if (!hostName) {
            const selfHook = _usePT(_getPT((ComponentBase.cProps || {}).pt, componentName), getOptionValue, `hooks.${hookName}`);
            const defaultHook = _useDefaultPT(getOptionValue, `hooks.${hookName}`);

            selfHook?.();
            defaultHook?.();
        }
    };

    hook('useMountEffect');
    useMountEffect(() => {
        loadBaseStyle();
        loadGlobalStyle();
        loadCommonStyle();
        if (!styled) load();
    });

    useUpdateEffect(() => {
        hook('useUpdateEffect');
    });

    useUnmountEffect(() => {
        hook('useUnmountEffect');
    });
};
