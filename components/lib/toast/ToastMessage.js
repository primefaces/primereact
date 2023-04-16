import * as React from 'react';
import { localeOption } from '../api/Locale';
import { useTimeout } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { TimesIcon } from '../icon/times';
import { ExclamationTriangleIcon } from '../icon/exclamationtriangle';
import { InfoCircleIcon } from '../icon/infocircle';
import { TimesCircleIcon } from '../icon/timescircle';
import { CheckIcon } from '../icon/check';

export const ToastMessage = React.memo(
    React.forwardRef((props, ref) => {
        const messageInfo = props.messageInfo;
        const { severity, content, summary, detail, closable, life, sticky, className: _className, style, contentClassName: _contentClassName, contentStyle, icon: _icon } = messageInfo.message;

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
            const iconClassName = 'p-toast-icon-close-icon';
            const icon = props.closeIcon || <TimesIcon className={iconClassName} />;
            const closeIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
            const ariaLabel = props.ariaCloseLabel || localeOption('close');

            if (closable !== false) {
                return (
                    <div>
                        <button type="button" className="p-toast-icon-close p-link" onClick={onClose} aria-label={ariaLabel}>
                            {closeIcon}
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
                const iconClassName = "p-toast-message-icon";
                let icon = _icon;

                if (!_icon) {
                    switch (severity) {
                        case 'info':
                            icon = <InfoCircleIcon className={iconClassName} />;
                            break;
                        case 'warn':
                            icon = <ExclamationTriangleIcon className={iconClassName} />;
                            break;
                        case 'error':
                            icon = <TimesCircleIcon className={iconClassName} />;
                            break;
                        case 'success':
                            icon = <CheckIcon className={iconClassName} />;
                            break;
                        default:
                            break;
                    }
                }

                const messageIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

                return (
                    contentEl || (
                        <>
                            {messageIcon}
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
