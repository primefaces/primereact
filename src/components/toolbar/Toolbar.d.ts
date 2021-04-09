import * as React from 'react';

type TemplateType = React.ReactNode | ((props: ToolbarProps) => React.ReactNode);

interface ToolbarProps {
    id?: string;
    style?: object;
    className?: string;
    left?: TemplateType;
    right?: TemplateType;
}

export class Toolbar extends React.Component<ToolbarProps, any> { }
