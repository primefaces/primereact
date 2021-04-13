import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

declare namespace Button {

    type PositionType = 'top' | 'bottom' | 'left' | 'right';

    type LoadingIconType = React.ReactNode | ((props: ButtonProps) => React.ReactNode);

    interface LoadingOptions {
        icon: LoadingIconType,
        position: PositionType
    }

    interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        label?: string;
        icon?: string;
        iconPos?: PositionType;
        badge?: string;
        badgeClassName?: string;
        tooltip?: string;
        tooltipOptions?: TooltipOptions;
        loading?: boolean;
        loadingOptions?: LoadingOptions;
    }
}

export declare class Button extends React.Component<Button.ButtonProps, any> { }
