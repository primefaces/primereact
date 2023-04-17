import * as React from 'react';
import { localeOption } from '../api/Api';
import { useTimeout } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils } from '../utils/Utils';
import { InfoCircleIcon } from '../icon/infocircle';
import { ExclamationTriangleIcon } from '../icon/exclamationtriangle';
import { TimesCircleIcon } from '../icon/timescircle';
import { CheckIcon } from '../icon/check';
import { TimesIcon } from '../icon/times';

export const UIMessage = React.memo(
    React.forwardRef((props, ref) => {
        const { severity, content, summary, detail, closable, life, sticky, icon: _icon, closeIcon: _closeIcon } = props.message;

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
                const iconProps = { className: "p-message-close-icon", "aria-hidden": true };
                const icon = _closeIcon || <TimesIcon {...iconProps} />;
                const closeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

                return (
                    <button type="button" className="p-message-close p-link" aria-label={ariaLabel} onClick={onClose}>
                        {closeIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createMessage = () => {
            if (props.message) {
                const iconClassName = "p-message-icon";
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

                const iconContent = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

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
