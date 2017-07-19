import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TieredMenuItem} from "./TieredMenuItem";
import DomHandler from '../utils/DomHandler';

export class TieredMenu extends Component{
    static defaultProps = {
        model:null,
        popup:false,
        style:null,
        styleClass:null,
    };

    static propTypes = {
        model:PropTypes.array,
        popup:PropTypes.bool,
        style:PropTypes.object,
        styleClass:PropTypes.string,
    };

    constructor(props) {
        super(props);
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
    }
    hide(event) {
        if(this.container)
            this.container.style.display = 'none';
    }
    render() {

        var styleClass=classNames('ui-tieredmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix',
            this.props.styleClass,{'ui-menu-dynamic ui-shadow':this.props.popup});

        return(
            <div className={styleClass} style={this.props.style} ref={el=>this.container=el}>
                <TieredMenuItem items={this.props.model} menu={this} root={true}/>
            </div>
        );
    }
}