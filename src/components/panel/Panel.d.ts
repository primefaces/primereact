import * as React from 'react';

type HeaderTemplateType = React.ReactNode | ((options: HeaderTemplateOptions) => React.ReactNode);

type IconsTemplateType = React.ReactNode | ((props: PanelProps) => React.ReactNode);

interface HeaderTemplateOptions {
    className: string;
    titleClassName: string;
    iconsClassName: string;
    togglerClassName: string;
    togglerIconClassName: string;
    onTogglerClick(event: React.MouseEvent<HTMLElement>);
    titleElement: JSX.Element;
    iconsElement: JSX.Element;
    togglerElement: JSX.Element;
    element: JSX.Element;
    props: PanelProps;
    collapsed: boolean;
}

interface OnToggleParams {
    originalEvent: React.MouseEvent<HTMLElement>;
    value: boolean;
}

interface PanelProps {
    id?: string;
    header?: React.ReactNode;
    headerTemplate?: HeaderTemplateType;
    toggleable?: boolean;
    style?: object;
    className?: string;
    collapsed?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    icons?: IconsTemplateType;
    onExpand?(event: Event): void;
    onCollapse?(event: Event): void;
    onToggle?(e: OnToggleParams): void;
}

export class Panel extends React.Component<PanelProps, any> { }
