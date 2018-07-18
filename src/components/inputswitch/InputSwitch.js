import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

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
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {        
        if (this.props.onChange) {
            this.props.onChange({
                originalEvent: event,
                value: !this.props.checked
            });
        }
    }

    render() {
        const className = classNames('ui-inputswitch ui-widget', this.props.className, {
            'ui-inputswitch-checked': this.props.checked,
            'ui-state-disabled': this.props.disabled
        });

        return (
            <div id={this.props.id} className={className} style={this.props.style} onClick={this.toggle}>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox" id={this.props.inputId} name={this.props.name} checked={this.props.checked} onChange={this.toggle} />
                </div>
                <span className="ui-inputswitch-slider"></span>
            </div>
        );
    }

}