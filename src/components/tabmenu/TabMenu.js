import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenuItem} from '../menu/MenuItem'

export class TabMenu extends Component {

    static defaultProps = {
        id: null,
        model:null,
        activeItem:null,
        style:null,
        className:null,
    };

    static propTypes = {
        id: PropTypes.string,
        model:PropTypes.array,
        activeItem:PropTypes.any,
        style:PropTypes.any,
        className:PropTypes.string,
    };


    constructor(props) {
        super(props);
        this.state ={activeItem:this.props.activeItem || this.props.model[0]};
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

        this.setState({activeItem:item});
    }

    render() {
        var tabMenuClass=classNames('ui-tabmenu ui-widget ui-widget-content ui-corner-all',this.props.className);

        var item=this.props.model && this.props.model.map((item,index)=>{
            var listClass=classNames('ui-tabmenuitem ui-state-default ui-corner-top',{'ui-state-disabled':item.disabled},
                {'ui-tabmenuitem-hasicon':item.icon},{'ui-state-active':this.state.activeItem===item})
            var list=<li className={listClass} key={'tabmenuItem_' + index}>
                <MenuItem index={index} items={item} onItemClick={event=>this.itemClick(event,item)}/>
            </li>
                return list;
            })

        return (
            <div id={this.props.id} className={tabMenuClass} style={this.props.style} ref={el=>this.container=el}>
                <ul className="ui-tabmenu-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all" role="tablist">
                    {item}
                </ul>
            </div>
        );
    }
}