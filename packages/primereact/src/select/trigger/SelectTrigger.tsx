'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { isNotEmpty, mergeProps, resolve, focus } from '@primeuix/utils';
import * as React from 'react';
import { useSelectContext } from '../Select.context';
import { defaultTriggerProps } from './SelectTrigger.props';

export const SelectTrigger = withComponent({
    name: 'SelectTrigger',
    defaultProps: defaultTriggerProps,
    setup({ id }) {
        const select = useSelectContext();

        const [bindLabelClick] = useEventListener({
            target: () => document.querySelector(`label[for="${id}"]`) as HTMLElement,
            type: 'click',
            listener: () => {
                if (select?.triggerRef?.current) {
                    focus(select.triggerRef.current as HTMLElement);
                }
            }
        });

        React.useEffect(() => {
            bindLabelClick();
        }, [id]);

        return { select };
    },
    render(instance) {
        const { props, ptmi, select } = instance;

        const createLabel = () => {
            if (props.children) {
                return resolve(props.children, instance);
            }

            const selectedLabel = select?.getSelectedOptionLabel();

            if (isNotEmpty(selectedLabel)) {
                return selectedLabel as string;
            }

            return '&nbsp;';
        };

        const label = createLabel();
        const isLabelEmpty = label === '&nbsp;';

        const rootProps = mergeProps(
            {
                className: select?.cx('label', { empty: isLabelEmpty }),
                tabIndex: select?.props.disabled ? -1 : select?.props.tabIndex,
                role: 'combobox',
                disabled: select?.props.disabled,
                'aria-haspopup': 'listbox',
                'aria-expanded': select?.state.overlayVisible,
                'aria-controls': select?.state.overlayVisible ? `${select?.id}_list` : undefined,
                'aria-activedescendant': select?.state.overlayVisible ? select?.getFocusedOptionId() : undefined,
                'aria-invalid': select?.props.invalid,
                'aria-disabled': select?.props.disabled,
                onFocus: select?.onFocus,
                onBlur: select?.onBlur,
                onKeyDown: select?.onKeyDown
            },
            select?.ptm('trigger'),
            ptmi('root')
        );

        return (
            <Component ref={select?.triggerRef} instance={instance} attrs={rootProps}>
                {label}
            </Component>
        );
    }
});
