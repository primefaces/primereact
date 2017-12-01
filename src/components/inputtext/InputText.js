import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class InputText extends Component {

    static defaultProps = {
        onInput: null
    };

    static propTypes = {
        onInput: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        if(this.props.onInput) {
            this.props.onInput(e);
        }

        this.updateFilledState(e.target.value);
    }

    updateFilledState(val) {
        if(val && val.length)
            this.inputEl.classList.add('ui-state-filled');
        else
            this.inputEl.classList.remove('ui-state-filled');
    }
    
    componentDidMount() {
        let _value =  this.props.value||this.props.defaultValue;

        this.updateFilledState(_value);
    }

    componentWillUpdate(nextProps){
        if(nextProps.value !== this.props.value) {
            this.updateFilledState(nextProps.value);
        }
    }

    render() {
        var className = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        let inputProps = Object.assign({}, this.props);
        delete inputProps.onInput;

        return <input ref={(el) => this.inputEl = el} {...inputProps} className={className} onInput={this.onInput}/>;
    }
}