import { usePrimeReact } from '@primereact/core/config';
import { combinedRefs } from '@primereact/core/utils';
import { useAttrSelector, useId, useProps } from '@primereact/hooks';
import type { BaseSetup, CommonInstance, ComputedInstance, Instance, useBaseOptions } from '@primereact/types/core';
import { isNotEmpty, resolve } from '@primeuix/utils';
import * as React from 'react';

export const useBase = <IProps extends { id?: string; ref?: React.Ref<unknown> }, DProps, PInstance, RData>(name: string = 'UnknownBase', options: useBaseOptions<IProps, DProps, PInstance, RData>) => {
    const $primereact = usePrimeReact();
    const { parent } = $primereact;
    const { inProps, defaultProps, setup } = options || {};

    const { props, attrs } = useProps(inProps, defaultProps);
    const id = useId(inProps?.id as string | undefined);
    const $attrSelector = useAttrSelector('pc_');

    const ref = React.useRef(inProps?.ref ?? null);
    const elementRef = React.useRef<HTMLElement>(null);

    const common: CommonInstance<typeof props, IProps, typeof parent> = {
        ref,
        elementRef,
        id,
        name,
        props,
        attrs,
        parent,
        inProps,
        $attrSelector,
        $primereact,
        getParent: (type?: string) => (isNotEmpty(type) ? instance.$pc?.[type!] : instance.parent)
    };

    const $computedSetup = resolve(setup as BaseSetup<typeof props, IProps, typeof parent, RData>, common) as RData;

    const computed: ComputedInstance<typeof props, IProps, typeof parent, RData> = {
        state: {},
        $computedSetup,
        ...$computedSetup,
        ...common
    };

    const instance: Instance<typeof props, IProps, typeof parent, RData> = {
        ...computed,
        $pc: {}
    };

    // Inject parent component instances and self instance
    instance.$pc = {
        ...parent?.$pc,
        [name]: instance as Instance // @todo - update type
    };

    React.useEffect(() => {
        combinedRefs(ref, inProps?.ref);
    }, [ref, inProps?.ref]);

    React.useImperativeHandle(ref as React.Ref<Instance<typeof props, IProps, typeof parent, RData>>, () => instance, [instance]);

    return instance;
};
