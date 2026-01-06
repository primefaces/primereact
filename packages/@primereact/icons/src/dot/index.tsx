import { withBaseIcon } from '@primereact/icons/base';
import * as React from 'react';

export const DotIcon = withBaseIcon({
    name: 'Dot',
    render({ rootProps }) {
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...rootProps}>
                <path d="M7 9.5C8.37745 9.5 9.5 8.37745 9.5 7C9.5 5.62255 8.37745 4.5 7 4.5C5.62255 4.5 4.5 5.62255 4.5 7C4.5 8.37745 5.62255 9.5 7 9.5Z" fill="currentColor" />
            </svg>
        );
    }
});
