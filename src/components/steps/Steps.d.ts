import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface StepsProps {
    id?: string;
    model: Array<MenuItem>;
    activeIndex?:  number;
    readOnly?: boolean;
    style?: object;
    className?: string;
    onSelect?(e: {originalEvent: Event, item: any, index: any}): void;
}

export class Steps extends React.Component<StepsProps,any> {}