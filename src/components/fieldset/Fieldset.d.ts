import * as React from 'react';

interface OnToggleParams {
    originalEvent: React.MouseEvent<HTMLElement>;
    value: boolean;
}

interface FieldsetProps {
    id?: string;
    legend?: React.ReactNode;
    className?: string;
    style?: object;
    toggleable?: boolean;
    collapsed?: boolean;
    onExpand?(event: React.MouseEvent<HTMLElement>): void;
    onCollapse?(event: React.MouseEvent<HTMLElement>): void;
    onToggle?(e: OnToggleParams): void;
    onClick?(event: React.MouseEvent<HTMLElement>): void;
}

export class Fieldset extends React.Component<FieldsetProps, any> { }
