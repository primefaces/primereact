import * as React from 'react';
import { localeOption } from '../api/Api';
import { useTimeout } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils } from '../utils/Utils';

export const UIMessage = React.memo(
    React.forwardRef((props, ref) => {
        const { severity, content, summary, detail, closable, life, sticky, icon } = props.message;

        const [clearTimer] = useTimeout(
            () => {
                onClose(null);
            },
            life || 3000,
            !sticky
        );

        const onClose = (event) => {
            clearTimer();
            props.onClose && props.onClose(props.message);

            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const onClick = () => {
            props.onClick && props.onClick(props.message);
        };

        const createCloseIcon = () => {
            if (closable !== false) {
                const ariaLabel = localeOption('close');

                return (
                    <button type="button" className="p-message-close p-link" aria-label={ariaLabel} onClick={onClose}>
                        <i className="p-message-close-icon pi pi-times" aria-hidden="true"></i>
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createMessage = () => {
            if (props.message) {
                let iconValue = icon;

                if (!iconValue) {
                    iconValue = classNames('pi', {
                        'pi-info-circle': severity === 'info',
                        'pi-exclamation-triangle': severity === 'warn',
                        'pi-times-circle': severity === 'error',
                        'pi-check': severity === 'success'
                    });
                }

                const iconContent = IconUtils.getJSXIcon(iconValue, { className: 'p-message-icon' }, { props });

                return (
                    content || (
                        <>
                            {iconContent}
                            <span className="p-message-summary">{summary}</span>
                            <span className="p-message-detail">{detail}</span>
                        </>
                    )
                );
            }

            return null;
        };

        const className = classNames('p-message p-component p-message-' + severity);
        const closeIcon = createCloseIcon();
        const message = createMessage();

        return (
            <div ref={ref} className={className} onClick={onClick}>
                <div className="p-message-wrapper">
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    })
);

UIMessage.displayName = 'UIMessage';
