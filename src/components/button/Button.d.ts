import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

declare namespace Button {

    type PositionType = 'top' | 'bottom' | 'left' | 'right';

    type IconType = React.ReactNode | ((options: IconOptions) => React.ReactNode);

    interface IconOptions {
        className: string;
        element: React.ReactNode;
        props: ButtonProps;
    }

    interface LoadingOptions {
        icon: IconType;
        position: PositionType;
        disabled: boolean;
    }

    interface ButtonProps extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'disabled'> {
        label?: string;
        icon?: IconType;
        iconPos?: PositionType;
        badge?: string;
        badgeClassName?: string;
        tooltip?: string;
        tooltipOptions?: TooltipOptions;
        disabled?: boolean;
        loading?: boolean;
        loadingOptions?: LoadingOptions;
    }
}

export declare class Button extends React.Component<Button.ButtonProps, any> { }
