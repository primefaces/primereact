import React, {Component} from 'react';
import classNames from 'classnames';

export class InputTextarea extends Component {
    
    constructor() {
        super();
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
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

    resize () {
        let linesCount = 0,
        lines = this.textareaElement.value.split('\n');

        for(let i = lines.length-1; i >= 0 ; --i) {
            linesCount += Math.floor((lines[i].length / parseInt(this.props.cols)) + 1);
        }

        this.textareaElement.rows = (linesCount >= parseInt(this.props.rows)) ? (linesCount + 1) : parseInt(this.props.rows);
    }

    render() {
        var styleClass = classNames('ui-inputtext ui-corner-all ui-state-default ui-widget', this.props.className, {
            'ui-state-disabled': this.props.disabled
        });

        var textareaProps = Object.assign({}, this.props);
        delete textareaProps.autoResize;

        return <textarea {...textareaProps} className={styleClass} ref={(input) => {this.textareaElement = input;}} onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyUp}>{this.props.value}</textarea>;
    }
}

InputTextarea.defaultProps = {
    autoResize: false
};

InputTextarea.propTypes = {
    autoResize: React.PropTypes.bool
};