import { PrimeReactContext } from '@primereact/core/config';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { getKeyValue, isArray, isFunction, isNotEmpty, isString, resolve, toFlatCase } from '@primeuix/utils/object';
import * as React from 'react';
import { ComponentContext } from './Component.context';

export const useComponentPT = ({ props, attrs, state }, ref) => {
    const config = React.useContext(PrimeReactContext);
    const parent = React.useContext(ComponentContext);
    const name = props.__TYPE;
    // @todo
    const instance = {
        ref,
        name,
        props,
        attrs,
        state,
        parent
    };
    // @todo
    const $params = {
        instance: ref,
        props,
        state,
        attrs,
        parent
    };

    // methods
    const _hook = (hookName) => {
        const selfHook = _usePT(_getPT(props.pt, name), getKeyValue, `hooks.${hookName}`);
        const defaultHook = _useDefaultPT(getKeyValue, `hooks.${hookName}`);

        selfHook?.();
        defaultHook?.();
    };

    const _mergeProps = (fn, ...args) => {
        return isFunction(fn) ? fn(...args) : mergeProps(...args);
    };

    const _getPTValue = (obj = {}, key = '', params = {}, searchInDefaultPT = true) => {
        const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
        const { mergeSections = true, mergeProps: useMergeProps = false } = props.ptOptions || config?.ptOptions || {};
        const global = searchInDefaultPT ? (searchOut ? _useGlobalPT(_getPTClassValue, key, params) : _useDefaultPT(_getPTClassValue, key, params)) : undefined;
        const self = searchOut ? undefined : _getPTSelf(obj, _getPTClassValue, key, { ...params, global: global || {} });
        const datasets = _getPTDatasets(key);

        return mergeSections || (!mergeSections && self) ? (useMergeProps ? _mergeProps(useMergeProps, global, self, datasets) : { ...global, ...self, ...datasets }) : { ...self, ...datasets };
    };

    const _getPTSelf = (obj = {}, ...args) => {
        return mergeProps(
            _usePT(_getPT(obj, name), ...args), // Exp; <component :pt="{}"
            _usePT($attrsPT, ...args) // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
        );
    };

    const _getPTDatasets = (key = '') => {
        const datasetPrefix = 'data-pc-';
        const isExtended = key === 'root' && isNotEmpty(props.pt?.['data-pc-section']);

        return (
            key !== 'transition' && {
                ...(key === 'root' && {
                    [`${datasetPrefix}name`]: toFlatCase(isExtended ? props.pt?.['data-pc-section'] : name),
                    ...(isExtended && { [`${datasetPrefix}extend`]: toFlatCase(name) })
                }),
                [`${datasetPrefix}section`]: toFlatCase(key)
            }
        );
    };

    const _getPTClassValue = (...args) => {
        const value = getKeyValue(...args);

        return isString(value) || isArray(value) ? { className: value } : value;
    };

    const _getPT = (pt, key = '', callback) => {
        const getValue = (value, checkSameKey = false) => {
            const computedValue = callback ? callback(value) : value;
            const _key = toFlatCase(key);
            const _cKey = toFlatCase(name);

            return (checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue;
        };

        return pt?.hasOwnProperty('_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt, true);
    };

    const _usePT = (pt, callback, key, params) => {
        const fn = (value) => callback(value, key, params);

        if (pt?.hasOwnProperty('_usept')) {
            const { mergeSections = true, mergeProps: useMergeProps = false } = pt['_usept'] || config?.ptOptions || {};
            const originalValue = fn(pt.originalValue);
            const value = fn(pt.value);

            if (originalValue === undefined && value === undefined) return undefined;
            else if (isString(value)) return value;
            else if (isString(originalValue)) return originalValue;

            return mergeSections || (!mergeSections && value) ? (useMergeProps ? _mergeProps(useMergeProps, originalValue, value) : { ...originalValue, ...value }) : value;
        }

        return fn(pt);
    };

    const _useGlobalPT = (callback, key, params) => {
        return _usePT($globalPT, callback, key, params);
    };

    const _useDefaultPT = (callback, key, params) => {
        return _usePT($defaultPT, callback, key, params);
    };

    // exposed methods
    const ptm = (key = '', params = {}) => {
        return _getPTValue(props.pt, key, { ...$params, ...params });
    };

    const ptmi = (key = '', params = {}) => {
        return mergeProps($attrsWithoutPT, ptm(key, params));
    };

    const ptmo = (obj = {}, key = '', params = {}) => {
        return _getPTValue(obj, key, { instance: this, ...params }, false);
    };

    // computed values
    const $globalPT = React.useMemo(() => _getPT(config?.pt, undefined, (value) => resolve(value, { instance: this })), [config?.pt]);
    const $defaultPT = React.useMemo(() => _getPT(config?.pt, undefined, (value) => getKeyValue(value, name, { ...$params }) || resolve(value, { ...$params })), [config?.pt]);
    const $attrsPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => key?.startsWith('pt:'))
            .reduce((result, [key, value]) => {
                const [, ...rest] = key.split(':');

                rest?.reduce((currentObj, nestedKey, index, array) => {
                    !currentObj[nestedKey] && (currentObj[nestedKey] = index === array.length - 1 ? value : {});

                    return currentObj[nestedKey];
                }, result);

                return result;
            }, {});
    }, [attrs]);
    const $attrsWithoutPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => !key?.startsWith('pt:'))
            .reduce((acc, [key, value]) => {
                acc[key] = value;

                return acc;
            }, {});
    }, [attrs]);

    // hooks
    useMountEffect(() => _hook('onMounted'));
    useUpdateEffect(() => _hook('onUpdated'));
    useUnmountEffect(() => _hook('onUnmounted'));

    return {
        ptm,
        ptmi,
        ptmo
    };
};
