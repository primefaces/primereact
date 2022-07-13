import * as React from 'react';
import { useTimeout } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const ToastMessage = React.memo(React.forwardRef((props, ref) => {
    const { severity, content, summary, detail, closable, life, sticky,
        className: _className, style, contentClassName: _contentClassName, contentStyle } = props.message;

    const [clearTimer] = useTimeout(() => {
        onClose();
    }, life || 3000, !sticky);

    const onClose = () => {
        clearTimer();
        props.onClose && props.onClose(props.message);
    }

    const onClick = (event) => {
        if (props.onClick && !(DomHandler.hasClass(event.target, 'p-toast-icon-close') || DomHandler.hasClass(event.target, 'p-toast-icon-close-icon'))) {
            props.onClick(props.message);
        }
    }

    const createCloseIcon = () => {
        if (closable !== false) {
            return (
                <button type="button" className="p-toast-icon-close p-link" onClick={onClose}>
                    <span className="p-toast-icon-close-icon pi pi-times"></span>
                    <Ripple />
                </button>
            )
        }

        return null;
    }

    const createMessage = () => {
        if (props.message) {
            const contentEl = ObjectUtils.getJSXElement(content, { ...props, onClose });
            const iconClassName = classNames('p-toast-message-icon pi', {
                'pi-info-circle': severity === 'info',
                'pi-exclamation-triangle': severity === 'warn',
                'pi-times': severity === 'error',
                'pi-check': severity === 'success'
            });

            return contentEl || (
                <>
                    <span className={iconClassName}></span>
                    <div className="p-toast-message-text">
                        <span className="p-toast-summary">{summary}</span>
                        {detail && <div className="p-toast-detail">{detail}</div>}
                    </div>
                </>
            )
        }

        return null;
    }

    const className = classNames('p-toast-message', {
        [`p-toast-message-${severity}`]: severity
    }, _className);
    const contentClassName = classNames('p-toast-message-content', _contentClassName);
    const message = createMessage();
    const closeIcon = createCloseIcon();

    return (
        <div ref={ref} className={className} style={style} role="alert" aria-live="assertive" aria-atomic="true" onClick={onClick}>
            <div className={contentClassName} style={contentStyle}>
                {message}
                {closeIcon}
            </div>
        </div>
    )
}));

ToastMessage.displayName = 'ToastMessage';
