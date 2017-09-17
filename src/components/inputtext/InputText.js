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
        this.state = {filled: false};
    }

    onInput(e) {
        if(this.props.onInput) {
            this.props.onInput(e);
        }

        this.updateFilledState(e);
    }

    updateFilledState(e) {
        let _filled = (e.target.value && e.target.value.length) ? true : false;
        this.setState({filled: _filled});
    }
    
    componentDidMount() {
        let _value =  this.props.value||this.props.defaultValue,
        _filled = (_value && _value.length) ? true : false;
        
        this.setState({filled: _filled});
    }

    render() {
        var className = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-state-filled': this.state.filled
        });

        let inputProps = Object.assign({}, this.props);
        delete inputProps.onInput;

        return <input {...inputProps} className={className} onInput={this.onInput}/>;
    }
}