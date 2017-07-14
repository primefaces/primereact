import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class SplitButtonItem extends Component {
    
    static defaultProps = {
        menuitem: null
    }
    
    static propsTypes = {
        menuitem: PropTypes.any
    }
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e) {
        this.props.menuitem.command({originalEvent: e, item:this.props.menuitem}); 
        e.preventDefault();
    }
    
    render() {
        var styleClass = classNames('ui-menuitem-link ui-corner-all', {'ui-state-disabled': this.props.menuitem.disabled});
        var icon = this.props.menuitem.icon ? <span className={classNames('ui-menuitem-icon fa fa-fw', this.props.menuitem.icon)}></span> : null;
        var label = <span className="ui-menuitem-text">{this.props.menuitem.label}</span>;
        
        return (
            <li className="ui-menuitem ui-widget ui-corner-all" role="menuitem">
                <a href={this.props.menuitem.url||'#'} className={styleClass} target={this.props.menuitem.target} onClick={this.onClick}>
                    {icon}
                    {label}
                </a>
            </li>
        );
    }
}

export class SplitButton extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        onClick: null,
        model: null,
        disabled: null,
        menuStyle: null,
        menuStyleClass: null
    }

    static propsTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        onClick: PropTypes.func,
        model: PropTypes.array,
        disabled: PropTypes.bool,
        menuStyle: PropTypes.string,
        menuStyleClass: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.onDropdownButtonClick = this.onDropdownButtonClick.bind(this);
        this.onPanelClick = this.onPanelClick.bind(this);
    }
    
    onDropdownButtonClick(event) {
        if(this.panelEl.offsetParent)
            this.hide();
        else
            this.show();
    }
    
    onPanelClick() {
        this.hide();
    }
    
    show() {
        this.panelEl.style.zIndex = DomHandler.getZindex();
        DomHandler.relativePosition(this.panelEl, this.containerEl);
        DomHandler.fadeIn(this.panelEl, 250);
        this.panelEl.style.display = 'block';
    }
    
    hide() {
        this.panelEl.style.display = 'none';
    }
    
    render() {
        var styleClass = classNames('ui-splitbutton ui-buttonset ui-widget', {'ui-state-disabled': this.props.disabled});
        var menuStyleClass = classNames('ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow', this.props.menuStyleClass);
        if(this.props.model) {
            var items = this.props.model.map((menuitem, index) => {
                return <SplitButtonItem menuitem={menuitem} key={index}/>
            });
        }
        
        return (
            <div className={styleClass} style={this.props.style}  ref={(el) => { this.containerEl = el; }}>
                <Button type="button" icon={this.props.icon} label={this.props.label} onClick={this.props.onClick} disabled={this.props.disabled} cornerStyleClass="ui-corner-left"></Button>
                <Button type="button" className="ui-splitbutton-menubutton" icon="fa-caret-down" onClick={this.onDropdownButtonClick} disabled={this.props.disabled} cornerStyleClass="ui-corner-right"></Button>
                <div className={menuStyleClass} style={this.props.menuStyle} ref={(el) => { this.panelEl = el; }} onClick={this.onPanelClick}>
                    <ul className="ui-menu-list ui-helper-reset">
                        {items}    
                    </ul>
                </div>
            </div>
        );
    }
}