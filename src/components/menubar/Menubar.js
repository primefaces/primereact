import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {NestedMenu} from "../nestedmenu/NestedMenu";

export class Menubar extends Component{
    static defaultProps = {
        model:null,
        style:null,
        styleClass:null,
    };

    static propTypes = {
        model:PropTypes.array,
        style:PropTypes.object,
        styleClass:PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        var styleClass=classNames('ui-menubar ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix', this.props.styleClass);
        var ulClass=classNames('ui-menu-list ui-menubar-root-list ui-helper-clearfix');

        return(
            <div className={styleClass} style={this.props.style}>
                <NestedMenu styleClass={ulClass} items={this.props.model} parentMenu="Menubar" root={true} index={0}>{this.props.children}</NestedMenu>
            </div>
        );
    }
}
