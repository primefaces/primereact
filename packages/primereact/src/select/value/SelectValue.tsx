'use client';
import { Component, withComponent } from '@primereact/core/component';
import { isNotEmpty, mergeProps, resolve } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultValueProps } from './SelectValue.props';

export const SelectValue = withComponent({
    name: 'Select.Value',
    defaultProps: defaultValueProps,
    setup() {
        const select = useSelectContext();

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;
        const showPlaceholder = React.useRef(false);

        const createLabel = () => {
            if (props.children) {
                showPlaceholder.current = false;

                return resolve(props.children, instance);
            }

            const selectedLabel = select?.getSelectedOptionLabel();

            if (isNotEmpty(selectedLabel)) {
                showPlaceholder.current = false;

                if (Array.isArray(selectedLabel)) {
                    return selectedLabel.join(', ');
                }

                return selectedLabel as string;
            }

            showPlaceholder.current = true;

            return props.placeholder ?? '\u00a0';
        };

        const label = createLabel();
        const isLabelEmpty = label === '\u00a0';

        const rootProps = mergeProps(
            {
                className: select?.cx('label', { empty: isLabelEmpty, showPlaceholder: showPlaceholder.current }),
                tabIndex: select?.props.disabled ? -1 : select?.props.tabIndex,
                role: 'combobox',
                disabled: select?.props.disabled,
                'aria-haspopup': 'listbox',
                'aria-multiselectable': select?.props.multiple || undefined,
                'aria-expanded': select?.state.opened,
                'aria-controls': select?.state.opened ? `${select?.id}_list` : undefined,
                'aria-activedescendant': select?.state.opened ? select?.getFocusedOptionId() : undefined,
                'aria-invalid': select?.props.invalid,
                'aria-disabled': select?.props.disabled,
                onFocus: select?.onFocus,
                onBlur: select?.onBlur,
                onKeyDown: select?.onKeyDown
            },
            select?.ptm('value'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={label} />;
    }
});
