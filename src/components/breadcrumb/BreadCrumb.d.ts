import React = require("react");
import {MenuItem} from '../menuitem/MenuItem';

interface BreadCrumbProps {
    id?: string;
    model?: Array<MenuItem>;
    home?: any;
    style?: object;
    className?: string;
}

export class BreadCrumb extends React.Component<BreadCrumbProps,any> {}