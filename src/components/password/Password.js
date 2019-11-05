import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import Tooltip from "../tooltip/Tooltip";
import ObjectUtils from '../utils/ObjectUtils';
 
export class Password extends Component {
 
    static defaultProps = {
        promptLabel: 'Enter a password',
        weakLabel: 'Weak',
        mediumLabel: 'Medium',
        strongLabel: 'Strong',
        feedback: true,
        tooltip: null,
        tooltipOptions: null
    };

    static propTypes = {
        promptLabel: PropTypes.string,
        weakLabel: PropTypes.string,
        mediumLabel: PropTypes.string,
        strongLabel:PropTypes.string,
        feedback: PropTypes.bool,
        tooltip: PropTypes.string,
        tooltipOptions: PropTypes.object
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
                DomHandler.addClass(this.panel, 'p-input-overlay-visible');
                DomHandler.removeClass(this.panel, 'p-input-overlay-hidden');
            }, 1);
            DomHandler.absolutePosition(this.panel, this.inputEl);
        }
        
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    }
  
    onBlur(e) {
        if (this.props.feedback) {
            DomHandler.addClass(this.panel, 'p-input-overlay-hidden');
            DomHandler.removeClass(this.panel, 'p-input-overlay-visible');

            setTimeout(() => {
                this.panel.style.display = 'none';
                DomHandler.removeClass(this.panel, 'p-input-overlay-hidden');
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
        this.panel.className = 'p-password-panel p-component p-highlight p-hidden p-password-panel-overlay p-input-overlay';
        this.meter = document.createElement('div');
        this.meter.className = 'p-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'p-password-info';
        this.info.textContent = this.props.promptLabel;

        this.panel.style.minWidth = DomHandler.getOuterWidth(this.inputEl) + 'px';
        this.panel.appendChild(this.meter);
        this.panel.appendChild(this.info);
        document.body.appendChild(this.panel);
    }

    componentDidMount() {
        if (this.props.tooltip) {
            this.renderTooltip();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.tooltip !== this.props.tooltip) {
            if (this.tooltip)
                this.tooltip.updateContent(this.props.tooltip);
            else
                this.renderTooltip();
        }
    }

    componentWillUnmount() {
        if (this.feedback && this.panel) {
            this.panel.removeChild(this.meter);
            this.panel.removeChild(this.info);
            document.body.removeChild(this.panel);
            this.panel = null;
            this.meter = null;
            this.info = null;
        }

        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    }

    renderTooltip() {
        this.tooltip = new Tooltip({
            target: this.inputEl,
            content: this.props.tooltip,
            options: this.props.tooltipOptions
        });
    }

    render() {
        let inputProps = ObjectUtils.findDiffKeys(this.props, Password.defaultProps);

        return (
            <InputText ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} {...inputProps} type="password" onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />
        );
    }
} 