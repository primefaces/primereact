import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import { useMountEffect, useUnmountEffect } from '../hooks/Hooks';

export const Captcha = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const instance = useRef(null);
    const recaptchaScript = useRef(null);

    const init = () => {
        instance.current = (window).grecaptcha.render(elementRef.current, {
            'sitekey': props.siteKey,
            'theme': props.theme,
            'type': props.type,
            'size': props.size,
            'tabindex': props.tabIndex,
            'hl': props.language,
            'callback': recaptchaCallback,
            'expired-callback': recaptchaExpiredCallback
        });
    }

    const reset = () => {
        !!instance.current && (window).grecaptcha.reset(instance.current);
    }

    const getResponse = () => {
        return !!instance.current ? (window).grecaptcha.getResponse(instance.current) : null;
    }

    const recaptchaCallback = (response) => {
        props.onResponse && props.onResponse({ response });
    }

    const recaptchaExpiredCallback = () => {
        props.onExpire && props.onExpire();
    }

    const addRecaptchaScript = () => {
        recaptchaScript.current = null;
        if (!(window).grecaptcha) {
            let head = document.head || document.getElementsByTagName('head')[0];
            let script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                if (!(window).grecaptcha) {
                    console.warn('Recaptcha is not loaded');
                    return;
                }

                window.grecaptcha.ready(() => {
                    init();
                });
            }
            recaptchaScript.current = script;

            head.appendChild(recaptchaScript.current);
        }
    }

    useMountEffect(() => {
        addRecaptchaScript();

        if ((window).grecaptcha) {
            init();
        }
    });

    useUnmountEffect(() => {
        if (recaptchaScript.current) {
            recaptchaScript.current.parentNode.removeChild(recaptchaScript.current);
        }
    });

    useImperativeHandle(ref, () => ({
        reset,
        getResponse
    }));

    return <div ref={elementRef} id={props.id}></div>
}));

Captcha.defaultProps = {
    __TYPE: 'Captcha',
    id: null,
    siteKey: null,
    theme: 'light',
    type: 'image',
    size: 'normal',
    tabIndex: 0,
    language: 'en',
    onResponse: null,
    onExpire: null
}

Captcha.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    sitekey: PropTypes.string,
    theme: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    tabIndex: PropTypes.number,
    language: PropTypes.string,
    onResponse: PropTypes.func,
    onExpire: PropTypes.func
}
