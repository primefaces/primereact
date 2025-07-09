'use client';
import { Component } from '@primereact/core/component';
import { useFocusTrap } from '@primereact/headless/focustrap';
import { styles } from '@primereact/styles/focustrap';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { FocusTrapProvider } from './FocusTrap.context';
import { defaultProps } from './FocusTrap.props';

export const FocusTrap = withComponent({
    name: 'FocusTrap',
    defaultProps,
    styles,
    setup(instance) {
        const focustrap = useFocusTrap(instance.inProps);

        return focustrap;
    },
    render(instance) {
        const { props, hiddenElements } = instance;

        const rootProps = mergeProps({});

        return (
            <FocusTrapProvider value={instance}>
                <Component
                    attrs={rootProps}
                    instance={instance}
                    children={
                        <React.Fragment>
                            {hiddenElements[0]}
                            <Component children={props.children} />
                            {hiddenElements[1]}
                        </React.Fragment>
                    }
                />
            </FocusTrapProvider>
        );
    }
});
