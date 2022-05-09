import * as React from 'react';
import { useMountEffect, useUnmountEffect } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';

export const Captcha = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const instance = React.useRef(null);
    const recaptchaScript = React.useRef(null);
    const isCaptchaLoaded = React.useRef(false);

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
                    // eslint-disable-next-line no-console
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
        if (!isCaptchaLoaded.current) {
            addRecaptchaScript();

            if ((window).grecaptcha) {
                init();
            }

            isCaptchaLoaded.current = true;
        }
    });

    useUnmountEffect(() => {
        if (recaptchaScript.current && recaptchaScript.current.parentNode) {
            recaptchaScript.current.parentNode.removeChild(recaptchaScript.current);
        }
    });

    React.useImperativeHandle(ref, () => ({
        reset,
        getResponse
    }));

    const otherProps = ObjectUtils.findDiffKeys(props, Captcha.defaultProps);

    return <div ref={elementRef} id={props.id} {...otherProps}></div>
}));

Captcha.displayName = 'Captcha';
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
