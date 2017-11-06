import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {InputText} from '../inputtext/InputText';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
 
export class Password extends Component {
 
    static defaultProps = {
        id: null,
        promptLabel:'Please enter a password',
        weakLabel:'Weak',
        mediumLabel:'Medium',
        strongLabel:'Strong',
        feedback:true,
        onChange:null
    };

    static propTypes = {
        id: PropTypes.string,
        promptLabel:PropTypes.string,
        weakLabel:PropTypes.string,
        mediumLabel:PropTypes.string,
        strongLabel:PropTypes.string,
        feedback:PropTypes.bool,
        onChange:PropTypes.func
    };

    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
    }

    onFocus(e) {
        let zIndex = DomHandler.getZindex();
        this.panel.style.zIndex = String(++zIndex);
        DomHandler.removeClass(this.panel, 'ui-helper-hidden');
        DomHandler.absolutePosition(this.panel, this.inputEl);
        DomHandler.fadeIn(this.panel, 250);
    }
  
    onBlur(e) {        
        DomHandler.addClass(this.panel, 'ui-helper-hidden');
    }

    onKeyup(e) {
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

    componentDidMount() {
        this.panel = document.createElement('div');
        this.panel.className = 'ui-password-panel ui-widget ui-state-highlight ui-corner-all ui-helper-hidden ui-password-panel-overlay';
        this.meter = document.createElement('div');
        this.meter.className = 'ui-password-meter';
        this.info = document.createElement('div');
        this.info.className = 'ui-password-info';
        this.info.textContent = this.props.promptLabel;
        
        if(this.props.feedback) {
            this.panel.appendChild(this.meter);
            this.panel.appendChild(this.info);
            document.body.appendChild(this.panel);
        }
    }

    componentWillUnmount() {
        if (!this.props.feedback)
            return;
            
        this.panel.removeChild(this.meter);
        this.panel.removeChild(this.info);
        document.body.removeChild(this.panel);
        this.panel = null;
        this.meter = null;
        this.info = null;
    }

    render() {
        return <InputText id={this.props.id} ref={(el) => this.inputEl = ReactDOM.findDOMNode(el)} type="password" onChange={this.props.onChange} onFocus={this.onFocus} onBlur={this.onBlur} onKeyUp={this.onKeyup} />;
    }
} 