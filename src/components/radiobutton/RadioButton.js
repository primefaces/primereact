import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DomHandler from '../utils/DomHandler';

export class RadioButton extends Component {

    static defaultProps = {
        id: null,
        inputId: null,
        value: null,
        onChange: null,
        checked: false
    };

    static propTypes = {
        id: PropTypes.string,
        inputId: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
        checked: PropTypes.bool
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
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: this.props.value,
                checked: !this.props.checked
            });
        }
    }

    onFocus(e) {
        DomHandler.addClass(this.box, 'ui-state-focus');
    }

    onBlur(e) {
        DomHandler.removeClass(this.box, 'ui-state-focus');
    }

    render() {
        let containerClass = classNames('ui-radiobutton ui-widget', this.props.className);
        let boxClass = classNames('ui-radiobutton-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': this.props.checked });
        let iconClass = classNames('ui-radiobutton-icon ui-c', { 'fa fa-circle': this.props.checked });
        
        return (
            <div className={containerClass} onClick={this.onClick}>
                <div className="ui-helper-hidden-accessible">
                    <input id={this.props.inputId} ref={(el) => this.input = el} type="radio" checked={this.props.checked}
                        onFocus={this.onFocus} onBlur={this.onBlur}/>
                </div>
                <div className={boxClass} ref={(el) => { this.box = el; }}>
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}