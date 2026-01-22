'use client';
import { Component } from '@primereact/core/component';
import { styles } from '@primereact/styles/textarea';
import { withComponent } from '@primereact/ui/base';
import { mergeDefaultProps } from '@primeuix/utils';
import { Textarea, defaultProps } from 'primereact/textarea';
import * as React from 'react';

export const UITextarea = withComponent({
    name: 'UITextarea',
    defaultProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ styles }, instance.inProps);

        return <Component as={Textarea} attrs={rootProps} />;
    }
});
