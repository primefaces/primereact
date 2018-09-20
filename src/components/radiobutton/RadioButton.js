import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';
import Tooltip from "../tooltip/Tooltip";

export class RadioButton extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        name: null,
        value: null,
        checked: false,
        style: null,
        className: null,
        disabled: false,
        tooltip: null,
        tooltipOptions: null,
        onChange: null
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.any,
        checked: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    select(e) {
        this.input.checked = true;
        this.onClick(e);
    }

    onClick(e) {
        if(!this.props.disabled && this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked,
                stopPropagation : () =>{},
                preventDefault : () =>{},
                target: {
                    name: this.props.name,
                    id :  this.props.id,
                    value:  this.props.value,
                }
            });

            this.input.checked = !this.props.checked;
        }
    }

    onFocus(e) {
        DomHandler.addClass(this.box, 'p-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.box, 'p-focus');
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.tooltip = new Tooltip({
                target: this.element,
                content: this.props.tooltip,
                options: this.props.tooltipOptions
            });
        }
    }

    componentWillUnmount() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    render() {
        if(this.input) {
            this.input.checked = this.props.checked;
        }
        
        let containerClass = classNames('p-radiobutton p-component', this.props.className);
        let boxClass = classNames('p-radiobutton-box p-component', {'p-highlight': this.props.checked,  'p-disabled': this.props.disabled});
        let iconClass = classNames('p-radiobutton-icon p-c', { 'pi pi-circle-on': this.props.checked });
        
        return (
            <div ref={(el) => this.element = el} id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick}>
                <div className="p-hidden-accessible">
                    <input id={this.props.inputId} ref={(el) => this.input = el} type="radio" name={this.props.name} defaultChecked={this.props.checked} onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled}/>
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}