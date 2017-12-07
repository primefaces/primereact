import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';
import {NestedMenu} from "../nestedmenu/NestedMenu";

export class ContextMenu extends Component {
    
    static defaultProps = {
        id: null,
        model: null,
        style: null,
        className: null,
        global: false,
        target: null,
        appendTo: null
    }

    static propsTypes = {
        id: PropTypes.string,
        model: PropTypes.array,
        style: PropTypes.object,
        className: PropTypes.string,
        global: PropTypes.bool,
        target: PropTypes.any,
        appendTo: PropTypes.any
    }
    
    toggle(event) {
        if(this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    }

    show(event) {
        this.position(event);
        DomHandler.fadeIn(this.container, 250);
        this.container.style.display = 'block';

        if(event) {
            event.preventDefault();
        }
    }
    
    hide() {
        if(this.container) {
            this.container.style.display = 'none';
        }
    }
    
    position(event) {
        if(event) {
            let left = event.pageX + 1;
            let top = event.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.container);
            let viewport = DomHandler.getViewport();

            //flip
            if(left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if(top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if(left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }

            //fit
            if(top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }

            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        }
    }
    
    bindDocumentListener() {
        this.documentClickListener = () => {
            this.hide();
        };
        document.addEventListener('click', this.documentClickListener, false);
        
        var documentEvent = document.createEvent('HTMLEvents');
        documentEvent.initEvent('click', true, false);
        
        if(this.props.global){
            this.rightClickListener = (event) => {
                document.dispatchEvent(documentEvent);
                this.show(event);
                event.preventDefault();
            }
            document.addEventListener('contextmenu', this.rightClickListener);
        }
        else if(this.props.target) {
            this.rightClickListener = (event) => {
                document.dispatchEvent(documentEvent);
                this.show(event);
                event.preventDefault();
                event.stopPropagation();                
            }
            
            document.getElementById(this.props.target).addEventListener('contextmenu', this.rightClickListener);
        }

    }

    unbindDocumentListener() {
        if(this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }

        if(this.rightClickListener) {
            document.removeEventListener('contextmenu', this.rightClickListener);
            this.rightClickListener = null;
        }
    }
    
    componentDidMount(){
        this.bindDocumentListener();
        
        if(this.props.appendTo) {
            if(this.props.appendTo === 'body')
                document.body.appendChild(this.container);
            else
                DomHandler.appendChild(this.container, this.props.appendTo);
        }
    }

    componentWillUnmount() {
        this.unbindDocumentListener();
    }
    
    render() {
        let className = classNames('ui-contextmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-dynamic ui-shadow', 
                                this.props.className);
        
        return (
            <div id={this.props.id} className={className} style={this.props.style} ref={el => this.container = el}>
                <NestedMenu className="ui-menu-list ui-helper-reset" items={this.props.model} root={true} parentMenu="ContextMenu" index={Math.random()}/>
            </div>
        );
    }
}