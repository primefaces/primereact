import * as React from 'react';
import { localeOption } from '../api/Locale';
import { useTimeout } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const ToastMessage = React.memo(
    React.forwardRef((props, ref) => {
        const messageInfo = props.messageInfo;
        const { severity, content, summary, detail, closable, life, sticky, className: _className, style, contentClassName: _contentClassName, contentStyle } = messageInfo.message;

        const [focused, setFocused] = React.useState(false);
        const [clearTimer] = useTimeout(
            () => {
                onClose();
            },
            life || 3000,
            !sticky && !focused
        );

        const onClose = () => {
            clearTimer();
            props.onClose && props.onClose(messageInfo);
        };

        const onClick = (event) => {
            if (props.onClick && !(DomHandler.hasClass(event.target, 'p-toast-icon-close') || DomHandler.hasClass(event.target, 'p-toast-icon-close-icon'))) {
                props.onClick(messageInfo.message);
            }
        };

        const onMouseEnter = (event) => {
            props.onMouseEnter && props.onMouseEnter(event);

            // do not continue if the user has canceled the event
            if (event.defaultPrevented) {
                return;
            }

            // stop timer while user has focused message
            if (!sticky) {
                clearTimer();
                setFocused(true);
            }
        };

        const onMouseLeave = (event) => {
            props.onMouseLeave && props.onMouseLeave(event);

            // do not continue if the user has canceled the event
            if (event.defaultPrevented) {
                return;
            }

            // restart timer when user has left message
            if (!sticky) {
                setFocused(false);
            }
        };

        const createCloseIcon = () => {
            if (closable !== false) {
                return (
                    <div>
                        <button type="button" className="p-toast-icon-close p-link" onClick={onClose} aria-label={localeOption('close')}>
                            <span className="p-toast-icon-close-icon pi pi-times" aria-hidden="true"></span>
                            <Ripple />
                        </button>
                    </div>
                );
            }

            return null;
        };

        const createMessage = () => {
            if (messageInfo) {
                const contentEl = ObjectUtils.getJSXElement(content, { message: messageInfo.message, onClick, onClose });
                const iconClassName = classNames('p-toast-message-icon pi', {
                    'pi-info-circle': severity === 'info',
                    'pi-exclamation-triangle': severity === 'warn',
                    'pi-times': severity === 'error',
                    'pi-check': severity === 'success'
                });

                return (
                    contentEl || (
                        <>
                            <span className={iconClassName}></span>
                            <div className="p-toast-message-text">
                                <span className="p-toast-summary">{summary}</span>
                                {detail && <div className="p-toast-detail">{detail}</div>}
                            </div>
                        </>
                    )
                );
            }

            return null;
        };

        const className = classNames(
            'p-toast-message',
            {
                [`p-toast-message-${severity}`]: severity
            },
            _className
        );
        const contentClassName = classNames('p-toast-message-content', _contentClassName);
        const message = createMessage();
        const closeIcon = createCloseIcon();

        return (
            <div ref={ref} className={className} style={style} role="alert" aria-live="assertive" aria-atomic="true" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className={contentClassName} style={contentStyle}>
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    })
);

ToastMessage.displayName = 'ToastMessage';
