import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import {MenuItem} from "../menu/MenuItem";

export class MegaMenu extends Component {
    static defaultProps = {
        id: null,
        model:null,
        style: null,
        className: null,
        orientation:'horizontal'
    }

    static propsTypes = {
        id: PropTypes.string,
        model:PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        orientation:PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {};
    }
    onItemMouseEnter(event, item) {
        if(item.disabled) {
            return;
        }

        this.setState({activeItem:item});
        let submenu =  event.currentTarget.children[1];
        if(submenu) {
            submenu.style.zIndex = DomHandler.getZindex();

            if(this.props.orientation === 'horizontal')  {
                submenu.style.top = DomHandler.getOuterHeight(event.currentTarget.children[0]) + 'px';
                submenu.style.left = '0px';
            }
            else if(this.props.orientation === 'vertical')  {
                submenu.style.top = '0px';
                submenu.style.left = DomHandler.getOuterWidth(event.currentTarget.children[0]) + 'px';
            }
        }
    }
    onItemMouseLeave(event, link) {
        this.setState({activeItem: null});
    }
    getColumnClass(menuitem) {
        let length = menuitem.items ? menuitem.items.length: 0;
        let columnClass;
        switch(length) {
            case 2:
                columnClass= 'ui-g-6';
                break;

            case 3:
                columnClass= 'ui-g-4';
                break;

            case 4:
                columnClass= 'ui-g-3';
                break;

            case 6:
                columnClass= 'ui-g-2';
                break;

            default:
                columnClass= 'ui-g-12';
                break;
        }

        return columnClass;
    }
    itemClick(event, item) {
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

        this.setState({activeItem: null});
    }
    render() {
        var divClass=classNames('ui-menu ui-menubar ui-megamenu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix',
            this.props.className,{'ui-megamenu-vertical': this.props.orientation === 'vertical'});
        var horizontalChild,menuItems;
        if(this.props.orientation==='horizontal'){
            horizontalChild=<li className="ui-menuitem ui-menuitem-custom ui-widget ui-corner-all">
                {this.props.children}
            </li>
        }
        menuItems=this.props.model && this.props.model.map((category,index)=>{
            var liClass=classNames('ui-menuitem ui-widget ui-corner-all',{'ui-menu-parent':category.items,'ui-menuitem-active':category===this.state.activeItem});
            var aClass=classNames('ui-menuitem-link ui-corner-all ui-submenu-link',{'ui-state-disabled':category.disabled});
            var spanClass=classNames('ui-menuitem-icon fa fa-fw ',category.icon);
            var submenuClass=classNames('ui-submenu-icon fa fa-fw ',{'fa-caret-down':this.props.orientation==='horizontal','fa-caret-right':this.props.orientation==='vertical'})

            var categoryItem=category.separator?<li className="ui-menu-separator ui-widget-content" key={index}></li>:
            <li  onMouseEnter={event=>this.onItemMouseEnter(event,category)} onMouseLeave={event=>this.onItemMouseLeave(event,category)}
                className={liClass} ref={el=>this.item=el} key={index}>
                <a className={aClass}>
                    <span className={spanClass}></span>
                    <span className="ui-menuitem-text">{category.label}</span>
                    <span className={submenuClass}></span>
                </a>
                <div className="ui-megamenu-panel ui-widget-content ui-menu-list ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow">
                    <div className="ui-g">
                        {category.items && category.items.map((column,index1)=>{
                            return <div className={this.getColumnClass(category)} key={index+'_'+index1}>
                                    {column && column.map((submenu,index2)=>{
                                        return <ul className="ui-menu-list ui-helper-reset" key={index+'_'+index1+'_'+index2}>
                                            <li className="ui-widget-header ui-corner-all"><h3>{submenu.label}</h3></li>
                                            {submenu.items && submenu.items.map((item,index3)=>{
                                                return item.separator?<li className="ui-menu-separator ui-widget-content" key={index+'_'+index1+'_'+index2+'_'+index3}></li>:
                                                    <li className="ui-menuitem ui-widget ui-corner-all"  key={index+'_'+index1+'_'+index2+'_'+index3}>
                                                        <MenuItem items={item} onItemClick={event=>this.itemClick(event,item)} index={index+'_'+index1+'_'+index2+'_'+index3}/>
                                                    </li>
                                            })}
                                        </ul>
                                    })}
                            </div>
                        })}
                    </div>
                </div>
            </li>
            return categoryItem;
        })

        return (
            <div id={this.props.id} className={divClass} style={this.props.style} ref={el=>this.container=el} >
                <ul className="ui-menu-list ui-helper-reset ui-menubar-root-list">
                    {menuItems}
                    {horizontalChild}
                </ul>
            </div>
        );
    }
}