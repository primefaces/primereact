import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import DomHandler from '../utils/DomHandler';

export class InputSwitch extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className: null,
        inputId: null,
        name: null,
        checked: false,
        disabled: false,
        onChange: null
    }

    static propsTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        inputId: PropTypes.string,
        name: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onClick(event) {
        if (this.props.disabled) {
            return;
        }

        this.toggle(event);
        this.input.focus();
    }

    toggle(event) {        
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: !this.props.checked
            });
        }
    }

    onFocus(event) {
        DomHandler.addClass(this.container, 'ui-inputswitch-focus');

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    onBlur(event) {  
        DomHandler.removeClass(this.container, 'ui-inputswitch-focus');      

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    render() {
        const className = classNames('ui-inputswitch ui-widget', this.props.className, {
            'ui-inputswitch-checked': this.props.checked,
            'ui-state-disabled': this.props.disabled
        });

        return (
            <div ref={el => this.container = el} id={this.props.id} className={className} style={this.props.style} onClick={this.onClick} role="checkbox" aria-checked={this.props.checked}>
                <div className="ui-helper-hidden-accessible">
                    <input ref={el => this.input = el} type="checkbox" id={this.props.inputId} name={this.props.name} checked={this.props.checked} onChange={this.toggle} 
                        onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled} />
                </div>
                <span className="ui-inputswitch-slider"></span>
            </div>
        );
    }

}