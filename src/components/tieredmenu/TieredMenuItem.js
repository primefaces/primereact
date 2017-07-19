import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenuItem} from "../menu/MenuItem";
import DomHandler from '../utils/DomHandler';

export class TieredMenuItem extends Component{
    static defaultProps = {
        index:0,
        items:null,
        menu:null,
        root:false
    };

    static propTypes = {
        index:PropTypes.number,
        items:PropTypes.any,
        menu:PropTypes.any,
        root:PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {activeItem:null};
        this.listClick=this.listClick.bind(this);
        this.onItemMouseLeave=this.onItemMouseLeave.bind(this);
    }
    onItemMouseEnter(event, menuitem) {
        this.setState({activeItem: menuitem});
        this.sublist=event.currentTarget.children[1];
        if(this.sublist){
            this.sublist.style.zIndex = DomHandler.getZindex();
            this.sublist.style.top = '0px';
            this.sublist.style.display='block';
            this.sublist.style.left='100%'
        }
    }
    onItemMouseLeave(event) {
        this.setState({activeItem:null});
        if(this.sublist)
            this.sublist.style.display='none';
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
    listClick(event) {
        this.setState({activeItem: null});
        if(this.sublist)
            this.sublist.style.display='none';
    }
    render() {

        var styleClass=classNames('ui-menu-list',{'ui-helper-reset':this.props.root},
            {'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!this.props.root})
        var mapElement=this.props.root?this.props.items:this.props.items.items;
        var childElement;

        childElement=mapElement && mapElement.map((child,index)=>{
            var listClass=classNames('ui-menuitem ui-widget ui-corner-all',{'ui-menu-parent':child.items},
                {'ui-menuitem-active':this.state.activeItem===child})
            var element=child.separator?
                <li className="ui-menu-separator ui-widget-content" key={this.props.index+'_'+index}/>:
                <li className={listClass} key={this.props.index+'_'+index} onMouseEnter={event=>this.onItemMouseEnter(event,child)}
                    onMouseLeave={this.onItemMouseLeave}>

                    <MenuItem items={child} menu={this} index={index} parentMenu={'TieredMenu'}/>

                    {child.items?<TieredMenuItem items={child} index={index} menu={this}/>:null}

                </li>
                return element;
            })

        return(
            <ul className={styleClass} ref={el=>this.list=el} onClick={this.listClick}>
                {childElement}
            </ul>
        )
    }
}
