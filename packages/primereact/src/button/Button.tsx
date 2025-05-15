'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useButton } from '@primereact/headless/button';
import { styles } from '@primereact/styles/button';
import type { ButtonProps } from '@primereact/types/shared/button';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { ButtonProvider } from './Button.context';
import { defaultProps } from './Button.props';
import { ButtonGroup } from './group';

function createButtonVariants<VariantNames extends readonly string[]>(variants: VariantNames) {
    return Object.fromEntries(variants.map((variant) => [variant, (props: React.PropsWithChildren<ButtonProps>) => <Button severity={variant.toLowerCase()} {...props} />])) as Record<
        VariantNames[number],
        (props: React.PropsWithChildren<ButtonProps>) => React.JSX.Element
    >;
}

const ButtonVariants = createButtonVariants(['Secondary', 'Success', 'Info', 'Warn', 'Help', 'Danger', 'Contrast'] as const);

export const Button = withComponent({
    name: 'Button',
    defaultProps,
    styles,
    setup(instance) {
        const button = useButton(instance.inProps);

        return button;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <ButtonProvider value={instance}>
                <Component instance={instance} attrs={rootProps}>
                    {props.children}
                </Component>
            </ButtonProvider>
        );
    },
    components: {
        Group: ButtonGroup,
        ...ButtonVariants
    }
});
