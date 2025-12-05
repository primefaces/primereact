'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useMenuContext } from '../Menu.context';
import { MenuCheckboxGroupProvider } from './MenuCheckboxGroup.context';
import { defaultCheckboxGroupProps } from './MenuCheckboxGroup.props';

export const MenuCheckboxGroup = withComponent({
    name: 'MenuCheckboxGroup',
    defaultProps: defaultCheckboxGroupProps,
    setup({ props }) {
        const menu = useMenuContext();
        const [valueState, setValueState] = React.useState(props.value !== undefined ? props.value : (props.defaultValue ?? undefined));

        React.useEffect(() => {
            if (props.value !== undefined) {
                setValueState(props.value);
            }
        }, [props.value]);

        const handleValueChange = React.useCallback(
            (value: unknown[]) => {
                setValueState(value);
                props.onValueChange?.({ value });
            },
            [props.onValueChange]
        );

        const context = React.useMemo(
            () => ({
                value: valueState,
                onValueChange: handleValueChange,
                name: props.name
            }),
            [valueState, handleValueChange, props.name]
        );

        return { menu, context };
    },
    render(instance) {
        const { props, ptmi, context } = instance;

        const rootProps = mergeProps({ role: 'group' }, ptmi('root'));

        return (
            <MenuCheckboxGroupProvider value={{ ...instance, ...context }}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </MenuCheckboxGroupProvider>
        );
    }
});
