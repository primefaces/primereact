import * as React from 'react';

export interface CaptchaProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    children?: React.ReactNode;
    language?: string;
    onExpire?(): void;
    onResponse?(response: any): void;
    siteKey?: string;
    size?: string;
    sourceUrl?: string;
    theme?: string;
    type?: string;
}

export declare class Captcha extends React.Component<CaptchaProps, any> {
    public reset(): void;
    public getResponse(): any;
    public getElement(): HTMLDivElement;
}
