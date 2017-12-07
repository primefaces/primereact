import React = require("react");

interface StepsProps {
    id?: string;
    model?: Array<any>;
    activeIndex?:  number;
    readOnly?: boolean;
    style?: object;
    className?: string;
    activeIndexChange?(e: {originalEvent: Event, index: any}): void;
}

export class Steps extends React.Component<StepsProps,any> {}