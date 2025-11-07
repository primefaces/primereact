'use client';
import { TimesIcon } from '@primereact/icons/times';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { usePasswordContext } from '../Password.context';
import { defaultClearIconProps } from './PasswordClearIcon.props';

export const PasswordClearIcon = withComponent({
    name: 'PasswordClearIcon',
    defaultProps: defaultClearIconProps,
    setup() {
        const password = usePasswordContext();

        return { password };
    },
    render(instance) {
        const { ptmi, password } = instance;

        if (!password?.state.showClearIcon) {
            return null;
        }

        const rootProps = mergeProps(
            {
                className: password?.cx('clearIcon'),
                onClick: password?.onClearClick
            },
            password?.ptm('clearIcon'),
            ptmi('root')
        );

        return <TimesIcon {...rootProps} />;
    }
});
