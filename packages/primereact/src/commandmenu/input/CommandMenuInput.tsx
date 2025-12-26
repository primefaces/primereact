'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useCommandMenuContext } from '../CommandMenu.context';
import { defaultInputProps } from './CommandMenuInput.props';

export const CommandMenuInput = withComponent({
    name: 'CommandMenuInput',
    defaultProps: defaultInputProps,
    setup() {
        const commandmenu = useCommandMenuContext();

        return {
            commandmenu
        };
    },
    render(instance) {
        const { id, props, ptmi, commandmenu } = instance;

        const search = commandmenu?.useCommandMenuStore((state) => state.search);
        const isControlled = props.value !== undefined;

        React.useEffect(() => {
            if (props.value !== undefined) {
                commandmenu?.store.setSearch(props.value);
            }
        }, [props.value]);

        const rootProps = mergeProps(
            {
                id,
                role: 'combobox',
                className: commandmenu?.cx('input'),
                type: 'text',
                value: isControlled ? props.value : search,
                autoComplete: 'off',
                autoCorrect: 'off',
                spellCheck: false,
                'aria-expanded': true,
                'aria-controls': commandmenu?.listRef?.current?.id ?? undefined,
                'aria-activedescendant': commandmenu?.useCommandMenuStore((state) => state.selected) ?? undefined,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    const val = e.target.value;

                    if (!isControlled) {
                        commandmenu?.store.setSearch(val);
                    }

                    props?.onValueChange?.(val);
                }
            },
            commandmenu?.ptm('input'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});
