import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
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
                <a className={styleClass} target={this.item.target} onClick={event=>this.menu.itemClick(event,this.item)}>
                    {this.item.icon?<span className={iconClass}></span>:null}
                    <span className="ui-menuitem-text">{this.item.label}</span>
                </a>
            );
        }
    }
}

export class Menu extends Component {

    static defaultProps = {
        model:null,
        popup:false,
        style:null,
        styleClass:null,
        onShow:null,
        onHide:null
    };

    static propTypes = {
        model:PropTypes.array,
        popup:PropTypes.bool,
        style:PropTypes.object,
        styleClass:PropTypes.string,
        onShow:PropTypes.func,
        onHide:PropTypes.func
    };

    constructor() {
        super();
        this.state = {};
    }
    componentDidMount(){
        if(this.props.popup){
            document.body.appendChild(this.container);
            this.documentClickListener=document.addEventListener('click',(event)=>{
                if(!this.preventDocumentDefault) {
                    this.hide(event);
                }
                this.preventDocumentDefault = false;
            })
        }
        window.addEventListener('resize',()=>{
            if(this.onResizeTarget && this.container.offsetParent) {
                DomHandler.absolutePosition(this.container, this.onResizeTarget);
            }
        })
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
        if(this.container.offsetParent)
            this.hide(event);
        else
            this.show(event);

        this.preventDocumentDefault = true;
    }

    show(event) {
        let target = event.currentTarget;
        this.onResizeTarget = event.currentTarget;
        this.container.style.display = 'block';
        DomHandler.absolutePosition(this.container, target);
        DomHandler.fadeIn(this.container, 250);
        this.preventDocumentDefault = true;
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
    }

    render() {
        var styleClass=classNames('ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix',this.props.styleClass,
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
                                       key={indexItem}>
                          <MenuItem items={item} index={indexItem} menu={this}/>
                      </li>
                        return menu;
                    })}</div>
                    return subMenu})
        }
        else{
            itemMenu=this.props.model && this.props.model.map((item,index)=>{
                var menu=<li className={item.separator?'ui-menu-separator ui-widget-content':'ui-menuitem ui-widget ui-corner-all'}
                             key={index}>
                    <MenuItem items={item} index={index} menu={this} />
                </li>
                    return menu
                })
        }

        return (
            <div className={styleClass} style={this.props.style} ref={el=>this.container=el} onClick={()=>this.preventDocumentDefault=true}>
                <ul className="ui-menu-list ui-helper-reset">
                    {itemSubMenu}
                    {itemMenu}
                </ul>
            </div>
        );
    }
}