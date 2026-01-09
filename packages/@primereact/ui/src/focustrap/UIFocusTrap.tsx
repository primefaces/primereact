'use client';
import { Component } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { styles } from '@primereact/styles/focustrap';
import { withComponent } from '@primereact/ui/base';
import { FocusTrap, defaultProps } from 'primereact/focustrap';
import * as React from 'react';

export const UIFocusTrap = withComponent({
    name: 'UIFocusTrap',
    defaultProps: defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={FocusTrap} attrs={rootProps} />;
    }
});
