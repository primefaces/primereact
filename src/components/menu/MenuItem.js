import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class MenuItem extends Component{
    static defaultProps = {
        index:null,
        items:null,
        menu:null,
    };

    static propTypes = {
        index:PropTypes.number,
        items:PropTypes.any,
        menu:PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.item=this.props.items;
        this.menu=this.props.menu
    }

    render() {
        var styleClass=classNames('ui-menuitem-link ui-corner-all',{'ui-state-disabled':this.item.disabled})
        var iconClass=classNames('ui-menuitem-icon fa fa-fw',this.item.icon?this.item.icon:null)
        if(this.item.url){
            return (
                <a href={this.item.url || '#'} className={styleClass} target={this.item.target} onClick={event=>this.menu.itemClick(event,this.item)}>
                    {this.item.icon?<span className={iconClass}></span>:null}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                </a>
            );
        }
        else{
            return (
                <a className={styleClass} href="#" target={this.item.target} onClick={event=>this.menu.itemClick(event,this.item)}>
                    {this.item.icon?<span className={iconClass}></span>:null}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                </a>
            );
        }
    }
}
