import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
 
export class Password extends Component {
 
    static defaultProps = {
        promptLabel: 'Please enter a password',
        weakLabel: 'Weak',
        mediumLabel: 'Medium',
        strongLabel: 'Strong',
        feedback: true
    };

    static propTypes = {
        promptLabel: PropTypes.string,
        weakLabel: PropTypes.string,
        mediumLabel: PropTypes.string,
        strongLabel:PropTypes.string,
        feedback: PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
    }

    onFocus(e) {
        if (this.props.feedback) {
            if (!this.panel) {
                this.createPanel();
            }
            
            this.panel.style.zIndex = String(DomHandler.generateZIndex());
            this.panel.style.display = 'block';
            setTimeout(() => {
                DomHandler.addClass(this.panel, 'ui-input-overlay-visible');
                DomHandler.removeClass(this.panel, 'ui-input-overlay-hidden');
            }, 1);
            DomHandler.absolutePosition(this.panel, this.inputEl);
        }
        
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }
  
    onBlur(e) {
        if (this.props.feedback) {
            DomHandler.addClass(this.panel, 'ui-input-overlay-hidden');
            DomHandler.removeClass(this.panel, 'ui-input-overlay-visible');

            setTimeout(() => {
                this.panel.style.display = 'none';
                DomHandler.removeClass(this.panel, 'ui-input-overlay-hidden');
            }, 150);
        }

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    }

    onKeyup(e) {
        if(this.props.feedback) {
            let value = e.target.value,
            label = null,
            meterPos = null;

            if(value.length === 0) {
                label = this.props.promptLabel;
                meterPos = '0px 0px';
            }
            else {
                var score = this.testStrength(value);

                if(score < 30) {
                    label = this.props.weakLabel;
                    meterPos = '0px -10px';
                }
                else if(score >= 30 && score < 80) {
                    label = this.props.mediumLabel;
                    meterPos = '0px -20px';
                } 
                else if(score >= 80) {
                    label = this.props.strongLabel;
                    meterPos = '0px -30px';
                }
            }

            this.meter.style.backgroundPosition = meterPos;
            this.info.textContent = label;
        }

        if (this.props.onKeyUp) {
            this.props.onKeyUp(e);
        }
    }
    
    testStrength(str) {
        let grade = 0;
        let val;

        val = str.match('[0-9]');
        grade += this.normalize(val ? val.length : 1/4, 1) * 25;

        val = str.match('[a-zA-Z]');
        grade += this.normalize(val ? val.length : 1/2, 3) * 10;

        val = str.match('[!@#$%^&*?_~.,;=]');
        grade += this.normalize(val ? val.length : 1/6, 1) * 35;

        val = str.match('[A-Z]');
        grade += this.normalize(val ? val.length : 1/6, 1) * 30;

        grade *= str.length / 8;

        return grade > 100 ? 100 : grade;
    }
    
    normalize(x, y) {
        let diff = x - y;

        if(diff <= 0)
            return x / y;
        else
            return 1 + 0.5 * (x / (x + y/4));
    }

    createPanel() {
        this.panel = document.createElement('div');
        this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all ui-helper-hidden ui-password-panel-overlay ui-input-overlay';
        this.meter = document.createElement('div');
        this.meter.className = 'ui-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'ui-password-info';
        this.info.textContent = this.props.promptLabel;

        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        document.body.appendChild(this.panel);
    }

    componentWillUnmount() {
        if(this.feedback && this.panel) {
            this.panel.removeChild(this.meter);
            this.panel.removeChild(this.info);
            document.body.removeChild(this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }
    }

    render() {
        let inputProps = Object.assign({}, this.props);
        delete inputProps.onFocus;
        delete inputProps.onBlur;
        delete inputProps.onKeyUp;
        delete inputProps.promptLabel;
        delete inputProps.weakLabel;
        delete inputProps.mediumLabel;
        delete inputProps.strongLabel;
        delete inputProps.feedback;

        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} {...inputProps} type="password" onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />
        );
    }
} 