import React = require("react");

interface CaptchaProps {
    id?: string;
    sitekey?: string;
    theme?: string;
    type?: string;
    size?: string;
    tabindex?: number;
    language?: string;
    onResponse?(response: any): void;
    onExpire?(): void;
}

export class Captcha extends React.Component<CaptchaProps,any> {}