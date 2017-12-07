import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import {NestedMenu} from "../nestedmenu/NestedMenu";

export class TieredMenu extends Component{
    static defaultProps = {
        id: null,
        model:null,
        popup:false,
        style:null,
        className:null,
    };

    static propTypes = {
        id: PropTypes.string,
        model:PropTypes.array,
        popup:PropTypes.bool,
        style:PropTypes.object,
        className:PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {};
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
    }
    hide(event) {
        if(this.container)
            this.container.style.display = 'none';
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

        var divClass=classNames('ui-tieredmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix',
            this.props.className,{'ui-menu-dynamic ui-shadow':this.props.popup});
        var ulClass=classNames('ui-menu-list ui-helper-reset');

        return(
            <div id={this.props.id} className={divClass} style={this.props.style} ref={el=>this.container=el}>
                <NestedMenu className={ulClass} items={this.props.model} root={true} parentMenu="TieredMenu" index={Math.random()}/>
            </div>
        );
    }
}