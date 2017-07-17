import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {MenuItem} from '../menu/MenuItem'

export class BreadCrumb extends Component {

    static defaultProps = {
        model:null,
        home:null,
        style:null,
        styleClass:null
    };

    static propTypes = {
        model:PropTypes.array,
        home:PropTypes.any,
        style:PropTypes.object,
        styleClass:PropTypes.string
    };

    constructor() {
        super();
        this.state = {};
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


    onHomeClick(event) {
        if(this.props.home) {
            this.itemClick(event, this.props.home);
        }
    }

    render() {
        var styleClass=classNames('ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all',this.props.styleClass);
        var homeClass=classNames('ui-menuitem-link',{'ui-state-disabled':this.props.home && this.props.home.disabled})

        var home,right,menu;

        if(this.props.home){
            home=<li className="ui-breadcrumb-home" >
                {this.props.home.url?
                    <a href={this.props.home.url || '#'} className={homeClass} target={this.props.home.target}
                       onClick={event=>this.itemClick(event,this.props.home)}>
                        <span className="fa fa-home"></span>
                    </a>:
                    <a href='#' className={homeClass} target={this.props.home.target}
                       onClick={event=>this.itemClick(event,this.props.home)}>
                        <span className="fa fa-home"></span>
                    </a>}
            </li>
        }
        else{
            home=<li className="ui-breadcrumb-home fa fa-home" ></li>
        }
        if(this.props.model){
            right=<li className="ui-breadcrumb-chevron fa fa-chevron-right"></li>
        }
        menu=this.props.model && this.props.model.map((item,index)=>{
            var menuItem=<span key={index}>
                <li role="menuitem">
                    <MenuItem items={item} index={index} menu={this} />
                </li>
                {this.props.model.length-1!==index && <li className="ui-breadcrumb-chevron fa fa-chevron-right" style={{marginLeft:4,marginRight:4}}></li>}
            </span>
                return menuItem;
        })

        return (
            <div className={styleClass} style={this.props.style} ref={el=>this.container=el}>
                <ul>
                    {home}
                    {right}
                    {menu}
                </ul>
            </div>
        );
    }
}