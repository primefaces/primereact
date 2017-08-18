import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenuItem} from "../menu/MenuItem";
import DomHandler from '../utils/DomHandler';
import {NestedMenu} from "./NestedMenu";

export class NestedMenuItem extends Component{
    static defaultProps = {
        item:null,
        menu:null,
        parentMenu:null,
        root:null,
        index:null
    };

    static propTypes = {
        item:PropTypes.any,
        menu:PropTypes.any,
        parentMenu:PropTypes.string,
        root:PropTypes.bool,
        index:PropTypes.any
    };

    constructor(props) {
        super(props);
        this.state = {activeItem:null};
        this.onItemMouseLeave=this.onItemMouseLeave.bind(this);
    }
    onItemMouseEnter(event, menuitem) {
        this.setState({activeItem: menuitem});
        this.sublist=event.currentTarget.children[1];
        if(this.sublist){
            this.sublist.style.zIndex = DomHandler.getZindex();
            if(this.props.parentMenu==='TieredMenu' || (this.props.parentMenu==='Menubar' && !this.props.root) || this.props.parentMenu==='ContextMenu')
                DomHandler.addClass(this.sublist,'ui-tieredmenu-item');
            this.sublist.style.display='block';
        }
    }
    onItemMouseLeave(event) {
        this.setState({activeItem:null});
        if(this.sublist){
            DomHandler.removeClass(this.sublist,'ui-tieredmenu-item')
            this.sublist.style.display='none';}
    }
    itemClick(event,item){
        if(item.disabled) {
            event.preventDefault();
            return;
        }

        if(!item.url) {
            event.preventDefault();
        }

        if(item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    }
    render() {


        var listClass=classNames('ui-menuitem ui-widget ui-corner-all',{'ui-menu-parent':this.props.item.items},
            {'ui-menuitem-active':this.state.activeItem===this.props.item});
        return( this.props.item.separator?
            <li className="ui-menu-separator ui-widget-content" key={this.props.index}/>:
            <li className={listClass}  key={this.props.index} onMouseEnter={event=>this.onItemMouseEnter(event,this.props.item)}
                onMouseLeave={this.onItemMouseLeave} onClick={()=>{
                this.setState({activeItem: null});
                if(this.sublist)
                this.sublist.style.display='none';
            }}>

                <MenuItem items={this.props.item} onItemClick={event=>this.itemClick(event,this.props.item)} root={this.props.root}  parentMenu={this.props.parentMenu} />

                {this.props.item.items?
                    <NestedMenu className={'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow'} index={this.props.index}
                                items={this.props.item.items} menu={this} parentMenu={this.props.parentMenu} root={false}/>:null}

            </li>
            )

    }
}