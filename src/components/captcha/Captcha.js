import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Captcha extends Component {

    static defaultProps = {
        id: null,
        siteKey: null,
        theme: "light",
        type: "image",
        size: "normal",
        tabIndex: 0,
        language: "en",
        onResponse: null,
        onExpire: null
    }

    static propTypes = {
        id: PropTypes.string,
        sitekey: PropTypes.string,
        theme: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        tabindex: PropTypes.number,
        language: PropTypes.string,
        onResponse: PropTypes.func,
        onExpire: PropTypes.func
    }

    init() {
        this._instance = (window).grecaptcha.render(this.targetEL, {
            'sitekey': this.props.siteKey,
            'theme': this.props.theme,
            'type': this.props.type,
            'size': this.props.size,
            'tabindex': this.props.tabIndex,
            'hl': this.props.language,
            'callback': (response) => {this.recaptchaCallback(response)},
            'expired-callback': () => {this.recaptchaExpiredCallback()}
        });
    }

    reset() {
        if(this._instance === null)
            return;
        
        (window).grecaptcha.reset(this._instance);
    }
    
    getResponse() {
        if (this._instance === null)
            return null;
        
        return (window).grecaptcha.getResponse(this._instance);
    }
    
    recaptchaCallback(response) {
        if(this.props.onResponse) {
            this.props.onResponse({
                response: response
            });
        }
    }

    recaptchaExpiredCallback() {
        if(this.props.onExpire) {
            this.props.onExpire();
        }
    }
    
    addRecaptchaScript() {
        this.recaptchaScript = null;
        if (!(window).grecaptcha) {
            var head = document.head || document.getElementsByTagName('head')[0];
            this.recaptchaScript = document.createElement('script');
            this.recaptchaScript.src = "https://www.google.com/recaptcha/api.js?render=explicit";
            this.recaptchaScript.async = true;
            this.recaptchaScript.defer = true;
            head.appendChild(this.recaptchaScript);
        }
    }

    componentDidMount() {
        this.addRecaptchaScript();

        if ((window).grecaptcha) {
            this.init(); 
        }
        else {
            setTimeout(() => {
                if (!(window).grecaptcha) {
                    console.warn("Recaptcha is not loaded");
                    return;
                }
                this.init();
            },500);
        }
    }

    componentWillUnmount() {
        if(this.recaptchaScript) {
            this.recaptchaScript.parentNode.removeChild(this.recaptchaScript);
        }
    }

    render() {
        return <div id={this.props.id} ref={(el) => this.targetEL = ReactDOM.findDOMNode(el)}></div>
    }
}