import React = require("react");

interface CardProps {
    header?: any;
    footer?: any;
    title?: string;
    subtitle?: string;
    style?: object;
    className?: string;
}

export class Card extends React.Component<CardProps,any> {}