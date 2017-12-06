import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class MenuItem extends Component{
    static defaultProps = {
        index:null,
        items:null,
        onItemClick:null,
        parentMenu:null,
        root:false,
    };

    static propTypes = {
        index:PropTypes.any,
        items:PropTypes.any,
        onItemClick:PropTypes.func,
        parentMenu:PropTypes.string,
        root:PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.item=this.props.items;
    }

    render() {
        var className=classNames('ui-menuitem-link ui-corner-all',{'ui-state-disabled':this.item.disabled},
            {'ui-menuitem-link-parent':this.item.items && this.props.parentMenu==='SlideMenu'});
        var iconClass=classNames('ui-menuitem-icon fa fa-fw',this.item.icon?this.item.icon:null);
        var rootClass=classNames('ui-submenu-icon fa fa-fw',{' fa-caret-down':this.props.root},{' fa-caret-right':!this.props.root})
        if(this.item.url){
            return (
                <a href={this.item.url || '#'} className={className} target={this.item.target} onClick={this.props.onItemClick}>
                    {this.item.items && (this.props.parentMenu==='TieredMenu' || this.props.parentMenu==='ContextMenu') && <span className="ui-submenu-icon fa fa-fw fa-caret-right"></span>}
                    {this.item.icon && <span className={iconClass}></span>}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                    {this.item.items && this.props.parentMenu==='Menubar' && <span className={rootClass}></span>}
                </a>
            );
        }
        else{
            return (
                <a className={className} target={this.item.target} onClick={this.props.onItemClick}>
                    {this.item.items && (this.props.parentMenu==='TieredMenu' || this.props.parentMenu==='ContextMenu') && <span className="ui-submenu-icon fa fa-fw fa-caret-right"></span>}
                    {this.item.icon && <span className={iconClass}></span>}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                    {this.item.items && this.props.parentMenu==='Menubar' && <span className={rootClass}></span>}
                </a>
            );
        }
    }
}
