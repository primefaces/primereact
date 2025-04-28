import { useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import type { GlobalComponentProps, Instance, PassThroughOptions } from '@primereact/types/core';
import { mergeProps } from '@primeuix/utils/mergeprops';
import { getKeyValue, isArray, isFunction, isNotEmpty, isString, resolve, toFlatCase } from '@primeuix/utils/object';
import * as React from 'react';

export const useComponentPT = <Props extends GlobalComponentProps, IProps, PInstance, Params>(instance: Instance<Props, IProps, PInstance>, $params?: Params) => {
    const { id, name, props, attrs, $primereact, $attrSelector } = instance || {};

    // methods
    const _hook = React.useCallback(
        (hookName: string) => {
            const selfHook = _usePT(_getPT(props.pt, name), getKeyValue, `hooks.${hookName}`) as (() => void) | undefined;
            const defaultHook = _useDefaultPT(getKeyValue, `hooks.${hookName}`) as (() => void) | undefined;

            selfHook?.();
            defaultHook?.();
        },
        [props.pt, name]
    );

    const _mergeProps = React.useCallback(<T extends unknown[], R = Record<PropertyKey, unknown>>(fn: ((...args: T) => R | undefined) | boolean, ...args: T): R => {
        return (isFunction(fn) ? fn(...args) : fn ? mergeProps(...args) : Object.assign({}, ...args)) as R;
    }, []);

    const _getPTValue = React.useCallback(
        (obj = {}, key = '', params: Record<string, unknown> = {}, searchInDefaultPT = true) => {
            const searchOut = /./g.test(key) && !!params[key.split('.')[0]];
            const { mergeSections = true, mergeProps: useMergeProps = false } = props?.ptOptions || $primereact.config?.ptOptions || {};
            const global = searchInDefaultPT ? (searchOut ? _useGlobalPT(_getPTClassValue, key, params) : _useDefaultPT(_getPTClassValue, key, params)) : undefined;
            const self = searchOut ? undefined : _getPTSelf(obj, _getPTClassValue, key, { ...params, global: global || {} });
            const datasets = _getPTDatasets(key);

            return mergeSections || (!mergeSections && self) ? _mergeProps(useMergeProps, global, self, datasets) : { ...self, ...datasets };
        },
        [props.ptOptions, _mergeProps]
    );

    const _getPTDatasets = React.useCallback(
        (key = '') => {
            const datasetPrefix = 'data-pc-';
            const isExtended = key === 'root' && isNotEmpty(props?.pt?.['data-pc-section']);

            return (
                key !== 'transition' && {
                    ...(key === 'root' && {
                        [`${datasetPrefix}name`]: toFlatCase((isExtended ? props.pt?.['data-pc-section'] : name) as string),
                        ...(isExtended && { [`${datasetPrefix}extend`]: toFlatCase(name!) }),
                        [`${$attrSelector}`]: ''
                    }),
                    [`${datasetPrefix}section`]: toFlatCase(key)
                }
            );
        },
        [props.pt, $attrSelector]
    );

    const _getPTClassValue = React.useCallback((obj: Record<string, unknown> = {}, key = '', params?: Record<string, unknown>) => {
        const value = getKeyValue(obj, key, params);

        return isString(value) || isArray(value) ? { className: value } : value;
    }, []);

    const _getPT = React.useCallback(<Fn extends (...args: unknown[]) => unknown>(pt?: Record<string, unknown>, key = '', fn?: Fn) => {
        const getValue = (value: unknown, checkSameKey = false) => {
            const computedValue = (fn ? fn(value) : value) as Record<string, unknown>;
            const _key = toFlatCase(key);
            const _cKey = toFlatCase(name!);

            return ((checkSameKey ? (_key !== _cKey ? computedValue?.[_key] : undefined) : computedValue?.[_key]) ?? computedValue) as Record<string, unknown>;
        };

        return pt && Object.hasOwn(pt, '_usept')
            ? {
                  _usept: pt['_usept'],
                  originalValue: getValue(pt.originalValue),
                  value: getValue(pt.value)
              }
            : getValue(pt, true);
    }, []);

    const _usePT = React.useCallback(
        <Fn>(pt: Record<string, unknown>, fn: Fn, key: string = '', params?: Record<string, unknown>) => {
            const vfn = (value: unknown) => (fn as (...args: unknown[]) => unknown)(value, key, params);

            if (pt && Object.hasOwn(pt, '_usept')) {
                const { mergeSections = true, mergeProps: useMergeProps = false } = (pt['_usept'] || $primereact.config?.ptOptions || {}) as PassThroughOptions;
                const originalValue = vfn(pt.originalValue);
                const value = vfn(pt.value);

                if (originalValue === undefined && value === undefined) return undefined;
                else if (isString(value)) return value;
                else if (isString(originalValue)) return originalValue;

                return mergeSections || (!mergeSections && value) ? _mergeProps(useMergeProps, originalValue, value) : value;
            }

            return vfn(pt);
        },
        [$primereact.config?.ptOptions, _mergeProps]
    );

    // computed values
    const $globalPT = React.useMemo(() => _getPT($primereact?.config?.pt, undefined, (value) => resolve(value, instance)), [$primereact?.config?.pt]);
    const $defaultPT = React.useMemo(() => _getPT($primereact?.config?.pt, undefined, (value) => getKeyValue(value as Record<string, unknown>, name, instance) || resolve(value, instance)), [$primereact?.config?.pt]);
    const $attrsPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => key?.startsWith('pt:'))
            .reduce<Record<string, unknown>>((result, [key, value]) => {
                const [, ...rest] = key.split(':');

                rest?.reduce((currentObj, nestedKey, index, array) => {
                    if (!currentObj[nestedKey]) {
                        currentObj[nestedKey] = index === array.length - 1 ? value : {};
                    }

                    return currentObj[nestedKey] as Record<string, unknown>;
                }, result);

                return result;
            }, {});
    }, [attrs]);
    const $attrsWithoutPT = React.useMemo(() => {
        return Object.entries(attrs || {})
            .filter(([key]) => !key?.startsWith('pt:'))
            .reduce<Record<string, unknown>>((acc, [key, value]) => {
                acc[key] = value;

                return acc;
            }, {});
    }, [attrs]);

    // helpers
    const _getPTSelf = React.useCallback(
        <Fn>(obj: Record<string, unknown> = {}, fn: Fn, key: string = '', params?: Record<string, unknown>) => {
            return mergeProps(
                _usePT(_getPT(obj, name), fn, key, params), // Exp; <PRComponent pt={{ [passthrough_key]: { [attribute]: value } }}>
                _usePT($attrsPT, fn, key, params) // Exp; <PRComponent pt:[passthrough_key]:[attribute]={value}> or <PRComponent pt:[passthrough_key]={() =>{value}}>
            );
        },
        [$attrsPT]
    );

    const _useGlobalPT = React.useCallback(
        <Fn>(fn: Fn, key: string = '', params?: Record<string, unknown>) => {
            return _usePT($globalPT, fn, key, params);
        },
        [$globalPT]
    );

    const _useDefaultPT = React.useCallback(
        <Fn>(fn: Fn, key: string, params?: Record<string, unknown>) => {
            return _usePT($defaultPT, fn, key, params);
        },
        [$defaultPT]
    );

    // exposed methods
    const ptm = React.useCallback(
        (key = '', params: Record<string, unknown> | undefined = {}) => {
            return _getPTValue(props.pt, key, { ...$params, ...params }) as Record<string, unknown>;
        },
        [props.pt, $params]
    );

    const ptmi = React.useCallback(
        (key = '', params: Record<string, unknown> | undefined = {}) => {
            const _attrs = mergeProps($attrsWithoutPT, ptm(key, params)) as Record<string, unknown>;

            if (_attrs && Object.hasOwn(_attrs, 'id')) {
                _attrs.id ??= id;
            }

            return _attrs as Record<string, unknown>;
        },
        [ptm, id, $attrsWithoutPT]
    );

    const ptmo = React.useCallback(
        (obj: Record<string, unknown> = {}, key = '', params: Record<string, unknown> | undefined = {}) => {
            return _getPTValue(obj, key, { ...$params, ...params }, false) as Record<string, unknown>;
        },
        [$params]
    );

    // hooks
    useMountEffect(() => _hook('onMounted'));
    useUpdateEffect(() => _hook('onUpdated'));
    useUnmountEffect(() => _hook('onUnmounted'));

    return React.useMemo(
        () => ({
            ptm,
            ptmi,
            ptmo
        }),
        [ptm, ptmi, ptmo]
    );
};
