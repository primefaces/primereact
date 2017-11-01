import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames'

export class InputSwitch extends Component {

    static defaultProps = {
        id: null,
        offLabel: "Off",
        onLabel: "On",
        style: null,
        className: null,
        checked: false,
        disabled: false,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        offLabel: PropTypes.string,
        onLabel: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        if(!this.props.disabled) {
            if (this.props.checked) {
                this.uncheckUI();
            }
            else {
                this.checkUI();
            }

            if (this.props.onChange) {
                this.props.onChange({
                    originalEvent: e,
                    value: !this.props.checked
                })
            }
        }
    }

    checkUI() {
        this.onContainer.style.width = this.offset + 'px';
        this.onLabelChild.style.marginLeft = 0 + 'px';
        this.offLabelChild.style.marginRight = -this.offset + 'px';
        this.handle.style.left = this.offset + 'px';
    }

    uncheckUI() {
        this.onContainer.style.width = 0 + 'px';
        this.onLabelChild.style.marginLeft = -this.offset + 'px';
        this.offLabelChild.style.marginRight = 0 + 'px';
        this.handle.style.left = 0 + 'px';
    }

    componentDidMount() {
        this.handle = this.container.children[2];
        this.onContainer = this.container.children[1];
        this.offContainer = this.container.children[0];
        this.onLabelChild = this.onContainer.children[0];
        this.offLabelChild = this.offContainer.children[0];

        let	onContainerWidth =  DomHandler.width(this.onContainer),
            offContainerWidth = DomHandler.width(this.offContainer),
            spanPadding	= DomHandler.innerWidth(this.offLabelChild) - DomHandler.width(this.offLabelChild),
            handleMargins = DomHandler.getOuterWidth(this.handle) - DomHandler.innerWidth(this.handle);
        
        var containerWidth = (onContainerWidth > offContainerWidth) ? onContainerWidth : offContainerWidth,
            handleWidth = containerWidth;

        this.handle.style.width = handleWidth + 'px';
        handleWidth = DomHandler.width(this.handle);
        containerWidth = containerWidth + handleWidth + 6;

        var labelWidth = containerWidth - handleWidth - spanPadding - handleMargins;

        this.container.style.width = containerWidth + 'px';
        this.onLabelChild.style.width = labelWidth + 'px';
        this.offLabelChild.style.width = labelWidth + 'px';
        
        //position
        this.offContainer.style.width = (DomHandler.width(this.container) - 5) + 'px';
        this.offset = DomHandler.width(this.container) - DomHandler.getOuterWidth(this.handle);

        //default value
        if(this.props.checked) {
            this.handle.style.left = this.offset + 'px';
            this.onContainer.style.width = this.offset + 'px';
            this.offLabelChild.style.marginRight = -this.offset + 'px';
        }
        else {
            this.onContainer.style.width = 0 + 'px';
            this.onLabelChild.style.marginLeft = -this.offset + 'px';
        }
    }

    render() {
        var className = classNames('ui-inputswitch ui-widget ui-widget-content ui-corner-all', this.props.className, {
            'ui-inputswitch-checked': this.props.checked,
            'ui-state-disabled': this.props.disabled
        });

        return (
            <div id={this.props.id} ref={(el) => {this.container = el;}} className={className} style={this.props.style} onClick={this.toggle}>
                <div className="ui-inputswitch-off">
                    <span className="ui-inputswitch-offlabel">{this.props.offLabel}</span>
                </div>
                <div className="ui-inputswitch-on">
                    <span className="ui-inputswitch-onlabel">{this.props.onLabel}</span>
                </div>
                <div className="ui-inputswitch-handle ui-state-default"></div>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" readOnly="readOnly" />
                </div>
            </div >
        );
    }

}