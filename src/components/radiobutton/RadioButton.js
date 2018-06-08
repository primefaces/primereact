import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

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
        onChange: PropTypes.func
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
                checked: !this.props.checked
            });

            this.input.checked = !this.props.checked;
        }
    }

    onFocus(e) {
        DomHandler.addClass(this.box, 'ui-state-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.box, 'ui-state-focus');
    }

    render() {
        if(this.input) {
            this.input.checked = this.props.checked;
        }
        
        let containerClass = classNames('ui-radiobutton ui-widget', this.props.className);
        let boxClass = classNames('ui-radiobutton-box ui-widget ui-corner-all ui-state-default', {'ui-state-active': this.props.checked,  'ui-state-disabled': this.props.disabled});
        let iconClass = classNames('ui-radiobutton-icon ui-c', { 'pi pi-circle-on': this.props.checked });
        
        return (
            <div id={this.props.id} className={containerClass} style={this.props.style} onClick={this.onClick}>
                <div className="ui-helper-hidden-accessible">
                    <input id={this.props.inputId} ref={(el) => this.input = el} type="radio" name={this.props.name} defaultChecked={this.props.checked} onFocus={this.onFocus} onBlur={this.onBlur} disabled={this.props.disabled}/>
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}