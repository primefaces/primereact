import * as React from 'react';
import { localeOption } from '../api/Locale';
import { useTimeout } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';

export const ToastMessage = React.memo(
    React.forwardRef((props, ref) => {
        const {
            messageInfo,
            metaData: parentMetaData,
            ptCallbacks: { ptm, ptmo },
            index
        } = props;
        const { severity, content, summary, detail, closable, life, sticky, className: _className, style, contentClassName: _contentClassName, contentStyle, icon: _icon, closeIcon: _closeIcon, pt } = messageInfo.message;
        const params = { index };
        const parentParams = { ...parentMetaData, ...params };
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
            const buttonIconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('buttonicon', parentParams),
                ptmo(pt, 'buttonicon', params)
            );

            const icon = _closeIcon || <TimesIcon {...buttonIconProps} />;
            const closeIcon = IconUtils.getJSXIcon(icon, { ...buttonIconProps }, { props });
            const ariaLabel = props.ariaCloseLabel || localeOption('close');

            const buttonProps = mergeProps(
                {
                    type: 'button',
                    className: 'p-toast-icon-close p-link',
                    onClick: onClose,
                    'aria-label': ariaLabel
                },
                ptm('button', parentParams),
                ptmo(pt, 'button', params)
            );

            if (closable !== false) {
                return (
                    <div>
                        <button {...buttonProps}>
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
                const iconClassName = 'p-toast-message-icon';
                const iconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    ptm('icon', parentParams),
                    ptmo(pt, 'icon', params)
                );

                let icon = _icon;

                if (!_icon) {
                    switch (severity) {
                        case 'info':
                            icon = <InfoCircleIcon {...iconProps} />;
                            break;
                        case 'warn':
                            icon = <ExclamationTriangleIcon {...iconProps} />;
                            break;
                        case 'error':
                            icon = <TimesCircleIcon {...iconProps} />;
                            break;
                        case 'success':
                            icon = <CheckIcon {...iconProps} />;
                            break;
                        default:
                            break;
                    }
                }

                const messageIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

                const textProps = mergeProps(
                    {
                        className: 'p-toast-message-text'
                    },
                    ptm('text', parentParams),
                    ptmo(pt, 'text', params)
                );

                const summaryProps = mergeProps(
                    {
                        className: 'p-toast-summary'
                    },
                    ptm('summary', parentParams),
                    ptmo(pt, 'summary', params)
                );

                const detailProps = mergeProps(
                    {
                        className: 'p-toast-detail'
                    },
                    ptm('detail', parentParams),
                    ptmo(pt, 'detail', params)
                );

                return (
                    contentEl || (
                        <>
                            {messageIcon}
                            <div {...textProps}>
                                <span {...summaryProps}>{summary}</span>
                                {detail && <div {...detailProps}>{detail}</div>}
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

        const messageProps = mergeProps(
            {
                ref,
                className,
                style,
                role: 'alert',
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                onClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave
            },
            ptm('message', parentParams),
            ptmo(pt, 'root', params)
        );

        const contentProps = mergeProps(
            {
                className: contentClassName,
                style: contentStyle
            },
            ptm('content', parentParams),
            ptmo(pt, 'content', params)
        );

        return (
            <div {...messageProps}>
                <div {...contentProps}>
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    })
);

ToastMessage.displayName = 'ToastMessage';
