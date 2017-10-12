import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class InputTextarea extends Component {

    static defaultProps = {
        autoResize: false,
        onInput: null,
        onClick: null
    };

    static propTypes = {
        autoResize: PropTypes.bool,
        onInput: PropTypes.func,
        onClick: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {filled: false};

        this.textareaProps = Object.assign({}, this.props);
        delete this.textareaProps.autoResize;
        delete this.textareaProps.onInput;
    }

    onFocus(e) {
        if(this.props.autoResize) {
            this.resize();
        }
    }

    onBlur(e) {
        if(this.props.autoResize) {
            this.resize();
        }
    }

    onKeyUp(e) {
        if(this.props.autoResize) {
            this.resize();
        }
    }

  onClick(e) {
    if(this.props.onClick) {
      this.props.onClick();
    } else {
      e.stopPropagation();
    }
  }

    resize () {
        let linesCount = 0,
        lines = this.textareaElement.value.split('\n');

        for(let i = lines.length-1; i >= 0 ; --i) {
            linesCount += Math.floor((lines[i].length / parseInt(this.props.cols, 10)) + 1);
        }

        this.textareaElement.rows = (linesCount >= parseInt(this.props.rows, 10)) ? (linesCount + 1) : parseInt(this.props.rows, 10);
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
        let _value =  this.textareaProps.value||this.textareaProps.defaultValue,
        _filled = (_value && _value.length) ? true : false;
        
        this.setState({filled: _filled});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.hasOwnProperty('value')) {
            this.textareaProps.value = nextProps.value;
        }
    }   

    render() {
        var className = classNames('ui-inputtext ui-corner-all ui-state-default ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled,
            'ui-state-filled': this.state.filled
        });

        return <textarea {...this.textareaProps} className={className} ref={(input) => {this.textareaElement = input;}} onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyUp} onInput={this.onInput} onClick={this.onClick}></textarea>;
    }
}