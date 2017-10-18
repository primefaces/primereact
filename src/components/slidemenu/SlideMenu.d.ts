import React = require("react");

interface SlideMenuSubProps {
    item?: any;
    root?: boolean;
    backLabel?: string;
    menuWidth?: any;
    effectDuration?: any;
    easing?: string;
    slideMenu?: any;
    slideMenuLeft?: string;
    onMenuItemClick?(): void;
    isAnimating?(): void;
    setAnimating?(boolean: boolean): void;
}

export class SlideMenuSub extends React.Component<SlideMenuSubProps,any> {}

interface SlideMenuProps {
    id?: string;
    model?: Array<any>;
    popup?: boolean;
    style?: object;
    className?: string;
    easing?: string;
    effectDuration?: number;
    backLabel?: string;
    menuWidth?: number;
    viewportHeight?: number;
}

export class SlideMenu extends React.Component<SlideMenuProps,any> {}