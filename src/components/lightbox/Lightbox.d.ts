import React = require("react");

interface LightboxProps {
    id?: string;
    images?: Array<any>;
    type?: string;
    style?: object;
    className?: string;
    easing?: string;
    effectDuration?: string;
}

export class Lightbox extends React.Component<LightboxProps,any> {}