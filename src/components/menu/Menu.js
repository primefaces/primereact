import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import {MenuItem} from './MenuItem'

export class Menu extends Component {

    static defaultProps = {
        id: null,
        model:null,
        popup:false,
        style:null,
        className:null,
        onShow:null,
        onHide:null
    };

    static propTypes = {
        id: PropTypes.string,
        model:PropTypes.array,
        popup:PropTypes.bool,
        style:PropTypes.object,
        className:PropTypes.string,
        onShow:PropTypes.func,
        onHide:PropTypes.func
    };

    constructor() {
        super();
        this.state = {};
    }
    hasSubMenu(){
        if(this.props.model){
            for(var items of this.props.model){
                if(items.items)
                    return true;
            }
        }
        return false;
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

        if(this.props.popup) {
            this.hide(event);
        }
    }
    toggle(event){
        if(this.documentClickListener) {
            this.dropdownClick = true;
        }
        if(this.container.offsetParent)
            this.hide(event);
        else
            this.show(event);

    }

    show(event) {
        let target = event.currentTarget;
        this.onResizeTarget = event.currentTarget;
        this.container.style.display = 'block';
        DomHandler.absolutePosition(this.container, target);
        DomHandler.fadeIn(this.container, 250);
        this.bindDocumentListener();
        if(this.props.onShow){
            this.props.onShow({
                originalEvent:event
            })
        }
    }
    hide(event) {
        if(this.container)
            this.container.style.display = 'none';
        if(this.props.onHide){
            this.props.onHide({
                originalEvent:event
            })
        }
        this.unbindDocumentListener();
    }
    bindDocumentListener() {
        if(!this.documentClickListener) {
            this.documentClickListener = () => {
                if(this.dropdownClick)
                    this.dropdownClick = false;
                else
                    this.hide();
            };

            document.addEventListener('click', this.documentClickListener);
        }

        window.addEventListener('resize',()=>{
            if(this.onResizeTarget && this.container.offsetParent) {
                DomHandler.absolutePosition(this.container, this.onResizeTarget);
            }
        })
    }

    unbindDocumentListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListener();
    }

    render() {
        var className=classNames('ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix',this.props.className,
            {'ui-menu-dynamic ui-shadow':this.props.popup})
        var itemSubMenu,itemMenu;

        if(this.hasSubMenu()){
            itemSubMenu=this.props.model && this.props.model.map((submenu,indexSub)=>{
                var subMenu=<div key={indexSub}>
                    <li className={submenu.separator?'ui-menu-separator ui-widget-content':'ui-widget-header ui-corner-all'}>
                        <h3>{submenu.label}</h3>
                    </li>
                    {submenu.items && submenu.items.map((item,indexItem)=>{
                      var menu=<li className={item.separator?'ui-menu-separator ui-widget-content':'ui-menuitem ui-widget ui-corner-all'}
                                       key={item.label+'_'+indexSub+'_'+indexItem}>
                          <MenuItem items={item} index={indexItem} onItemClick={event=>this.itemClick(event,item)}/>
                      </li>
                        return menu;
                    })}</div>
                    return subMenu})
        }
        else{
            itemMenu=this.props.model && this.props.model.map((item,index)=>{
                var menu=<li className={item.separator?'ui-menu-separator ui-widget-content':'ui-menuitem ui-widget ui-corner-all'}
                             key={item.label+'_'+index}>
                    <MenuItem items={item} index={index} onItemClick={event=>this.itemClick(event,item)}/>
                </li>
                    return menu
                })
        }

        return (
            <div id={this.props.id} className={className} style={this.props.style} ref={el=>this.container=el} onClick={()=>this.preventDocumentDefault=true}>
                <ul className="ui-menu-list ui-helper-reset">
                    {itemSubMenu}
                    {itemMenu}
                </ul>
            </div>
        );
    }
}