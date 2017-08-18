import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NestedMenuItem} from './NestedMenuItem'

export class NestedMenu extends Component{
    static defaultProps = {
        className:null,
        style:null,
        items:null,
        parentMenu:null,
        root:null,
        index:null
    };

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        items:PropTypes.any,
        parentMenu:PropTypes.string,
        root:PropTypes.bool,
        index:PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <ul className={this.props.className} style={this.props.style}>
                {this.props.items && this.props.items.map((item,index)=>
                    <NestedMenuItem key={this.props.index+'_'+index} item={item} root={this.props.root} index={this.props.index+'_'+index}
                                    menu={this} parentMenu={this.props.parentMenu}/>)}

                {this.props.parentMenu==='Menubar' && <li className="ui-menuitem ui-menuitem-custom ui-widget ui-corner-all">
                    {this.props.children}
                </li> }
            </ul>
        )
    }
}
