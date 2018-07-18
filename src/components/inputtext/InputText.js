import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KeyFilter from "../keyfilter/KeyFilter";

export class InputText extends Component {

    static defaultProps = {
        onInput: null,
        onKeyPress: null,
        keyfilter: null,
        validateOnly: false
    };

    static propTypes = {
        onInput: PropTypes.func,
        onKeyPress: PropTypes.func,
        keyfilter: PropTypes.any,
        validateOnly: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event) {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(event);
        }

        if (this.props.keyfilter) {
            KeyFilter.onKeyPress(event, this.props.keyfilter, this.props.validateOnly)
        }
    }

    onInput(event) {
        let validatePattern = true;
        if (this.props.keyfilter && this.props.validateOnly) {
            validatePattern = KeyFilter.validate(event, this.props.keyfilter);
        }

        if (this.props.onInput) {
            this.props.onInput(event, validatePattern);
        }
    }

    render() {
        const className = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-state-filled': this.props.value && this.props.value.length
        });

        let inputProps = Object.assign({}, this.props);
        delete inputProps.onInput;
        delete inputProps.onKeyPress;
        delete inputProps.keyfilter;
        delete inputProps.validateOnly;

        return <input ref={(el) => this.inputEl = el} {...inputProps} className={className} onInput={this.onInput} onKeyPress={this.onKeyPress}/>;
    }
}