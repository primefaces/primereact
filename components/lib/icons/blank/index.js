import * as React from 'react';
import { IconBase } from '../../iconbase/IconBase';

export const BlankIcon = React.memo(
    React.forwardRef((inProps, ref) => {
        const pti = IconBase.getPTI(inProps);

        return (
            <svg ref={ref} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...pti}>
                <rect width="1" height="1" fill="currentColor" fillOpacity="0" />
            </svg>
        );
    })
);

BlankIcon.displayName = 'BlankIcon';
