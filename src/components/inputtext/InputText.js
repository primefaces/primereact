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

        this.inputProps = Object.assign({}, this.props);
        delete this.inputProps.onInput;
    }

    onInput(e) {
        if(this.props.onInput) {
            this.props.onInput();
        }

        this.updateFilledState(e);
    }

    updateFilledState(e) {
        let _filled = (e.target.value && e.target.value.length) ? true : false;
        this.setState({filled: _filled});
    }
    
    componentDidMount() {
        let _value =  this.inputProps.value||this.inputProps.defaultValue,
        _filled = (_value && _value.length) ? true : false;
        
        this.setState({filled: _filled});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasOwnProperty('value')) {
            this.inputProps.value = nextProps.value;
        }
    }   

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.filled === nextState.filled && !this.inputProps.value) {
            return false;
        }
        return true;
    }
    
    render() {
        var styleClass = classNames('ui-inputtext ui-state-default ui-corner-all ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-state-filled': this.state.filled
        });

        return <input {...this.inputProps} className={styleClass} onInput={this.onInput}/>;
    }
}