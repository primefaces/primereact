import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NestedMenu} from "../nestedmenu/NestedMenu";

export class Menubar extends Component{
    static defaultProps = {
        model:null,
        style:null,
        className:null,
    };

    static propTypes = {
        model:PropTypes.array,
        style:PropTypes.object,
        className:PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        var className=classNames('ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix', this.props.className);
        var ulClass=classNames('ui-menu-list ui-menubar-root-list ui-helper-clearfix');

        return(
            <div className={className} style={this.props.style}>
                <NestedMenu className={ulClass} items={this.props.model} parentMenu="Menubar" root={true} index={0}>{this.props.children}</NestedMenu>
            </div>
        );
    }
}
