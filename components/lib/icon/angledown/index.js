import * as React from 'react';
import { IconBase } from '../../iconbase/IconBase';

export const AngleDownIcon = React.memo(
    React.forwardRef((inProps, ref) => {
        const pti = IconBase.getPTI(inProps);

        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...pti}>
                <path
                    d="M7 9.95946C6.88043 9.96002 6.76196 9.9367 6.65152 9.89086C6.54109 9.84502 6.44093 9.77758 6.35691 9.69251L2.14645 5.44565C2.03556 5.27462 1.9853 5.07131 2.00373 4.8683C2.02216 4.6653 2.10821 4.47436 2.24808 4.32609C2.38796 4.17782 2.57357 4.0808 2.77516 4.05059C2.97674 4.02037 3.18264 4.05872 3.35984 4.15946L7 7.79963L10.6402 4.15946C10.8174 4.05872 11.0233 4.02037 11.2248 4.05059C11.4264 4.0808 11.612 4.17782 11.7519 4.32609C11.8918 4.47436 11.9778 4.6653 11.9963 4.8683C12.0147 5.07131 11.9644 5.27462 11.8535 5.44565L7.60669 9.69251C7.44591 9.85561 7.22888 9.9511 7 9.95946Z"
                    fill="currentColor"
                />
            </svg>
        );
    })
);

AngleDownIcon.displayName = 'AngleDownIcon';
