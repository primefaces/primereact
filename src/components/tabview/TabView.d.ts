import * as React from 'react';

interface TabPanelProps {
    header?: React.ReactNode;
    leftIcon?: string;
    rightIcon?: string;
    disabled?: boolean;
    headerStyle?: object;
    headerClassName?: string;
    contentStyle?: object;
    contentClassName?: string;
}

export class TabPanel extends React.Component<TabPanelProps, any> { }

interface OnTabChangeParams {
    originalEvent: Event;
    index: number;
}

interface TabViewProps {
    id?: string;
    activeIndex?: number;
    style?: object;
    className?: string;
    renderActiveOnly?: boolean;
    onTabChange?(e: OnTabChangeParams): void;
}

// tslint:disable-next-line:max-classes-per-file
export class TabView extends React.Component<TabViewProps, any> { }
