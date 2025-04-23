import { withBaseIcon } from '@primereact/icons/base';
import * as React from 'react';

export const BlankIcon = withBaseIcon({
    name: 'Blank',
    render: ({ rootProps }) => {
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...rootProps}>
                <rect width="1" height="1" fill="currentColor" fill-opacity="0" />
            </svg>
        );
    }
});
