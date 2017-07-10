import React, {Component} from 'react';
 import PropTypes from 'prop-types';
 import DomHandler from '../utils/DomHandler';
 
 export class Password extends Component {
 
     static defaultProps = {
        value: null,
        promptLabel:'Please enter a password',
        weakLabel:'Weak',
        mediumLabel:'Medium',
        strongLabel:'Strong',
        feedback:true,
    };

    static propTypes = {
        value: PropTypes.any,
        promptLabel:PropTypes.string,
        weakLabel:PropTypes.string,
        mediumLabel:PropTypes.string,
        strongLabel:PropTypes.string,
        feedback:PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {hidden:true};
    }

    onInputFocus(event) {
        if(this.props.feedback) {
            this.panel.style.zIndex = DomHandler.getZindex();
            DomHandler.removeClass(this.panel, 'ui-helper-hidden');
            DomHandler.absolutePosition(this.panel, this.container);
            DomHandler.fadeIn(this.panel, 250);
            if(event.target.value.length===0)
                this.info.textContent = this.props.promptLabel;
        }
    }

    onInputBlur(event) {
        DomHandler.addClass(this.panel, 'ui-helper-hidden');
    }

    onKeyup(event) {
        let value = event.target.value,
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

    render() {
        let password= <input type="password" className="ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all"
                             onFocus={this.onInputFocus.bind(this)} onBlur={this.onInputBlur.bind(this)}
                             onChange={this.onKeyup.bind(this)}  ref={(el) => {this.container = el;}} />

        return (
            <div className='ui-inputtext ui-corner-all ui-widget ui-state-filled'>
                {password}
                <div className={'ui-password-panel ui-widget ui-state-highlight ui-password-panel-overlay ui-helper-hidden'}
                     ref={(el) => {this.panel = el;}}>
                    <div className='ui-password-meter' ref={(el) => {this.meter = el;}}/>
                    <div className='ui-password-info' ref={(el) => {this.info = el;}}/>
                </div>
            </div>
        );
    }
} 