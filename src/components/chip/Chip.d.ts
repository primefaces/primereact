import * as React from 'react';

interface ChipProps {
    label?: string;
    icon?: string;
    image?: string;
    removable?: boolean;
    removeIcon?: string;
    className?: string;
    style?: object;
    template?: any;
    onRemove?(event: Event): void;
}

export class Chip extends React.Component<ChipProps,any> {}
