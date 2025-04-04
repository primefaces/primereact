import type { GlobalComponentProps } from '@primereact/types/core';
import * as React from 'react';
export interface AvatarProps extends GlobalComponentProps {
    readonly __TYPE?: 'Avatar';
    label?: string | undefined;
    icon?: string | React.ReactNode | undefined;
    image?: string | undefined;
    size?: string | undefined;
    shape?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaLabel?: string | undefined;
}
