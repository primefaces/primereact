import React = require("react");

interface TabPanelProps {
    header?: string;
    leftIcon?: string;
    rightIcon?: string;
    disabled?: boolean;
    headerStyle?: any;
    headerClassName?: string;
    contentStyle?: any;
    contentClassName?: string;
}

interface TabViewProps {
    id?: string;
    activeIndex?: number;
    style?: any;
    className?: string;
    onTabChange?(e: {event: originalEvent, index: number}): void;
}

export class TabPanel extends React.Component<TabPanelProps,any> {}
export class TabView extends React.Component<TabViewProps,any> {}