import * as React from 'react';

declare namespace TabPanel {

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
}

export declare class TabPanel extends React.Component<TabPanel.TabPanelProps, any> { }

declare namespace TabView {

    interface TabChangeParams {
        originalEvent: React.SyntheticEvent;
        index: number;
    }

    interface TabViewProps {
        id?: string;
        activeIndex?: number;
        style?: object;
        className?: string;
        renderActiveOnly?: boolean;
        onTabChange?(e: TabChangeParams): void;
    }
}

// tslint:disable-next-line:max-classes-per-file
export declare class TabView extends React.Component<TabView.TabViewProps, any> { }
