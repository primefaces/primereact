import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class RadioButton extends Component {

    static defaultProps = {
        id: null,
        value: null,
        onChange: null,
        checked: false
    };

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
        checked: PropTypes.bool
    };
    
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
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

    render() {
        let containerClass = classNames('ui-radiobutton ui-widget', this.props.className);
        let boxClass = classNames('ui-radiobutton-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': this.props.checked });
        let iconClass = classNames('ui-radiobutton-icon ui-c', { 'fa fa-circle': this.props.checked });
        
        return (
            <div className={containerClass} onClick={this.onClick}>
                <div className="ui-helper-hidden-accessible">
                    <input ref={(el) => this.input = el} type="radio" />
                </div>
                <div className={boxClass} >
                    <span className={iconClass}></span>
                </div>
            </div>
        )
    }
}