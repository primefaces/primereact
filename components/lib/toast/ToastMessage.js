import * as React from 'react';
import { localeOption } from '../api/Locale';
import { useMergeProps, useTimeout } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { Ripple } from '../ripple/Ripple';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const ToastMessage = React.memo(
    React.forwardRef((props, ref) => {
        const mergeProps = useMergeProps();
        const {
            messageInfo,
            metaData: parentMetaData,
            ptCallbacks: { ptm, ptmo, cx },
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

        const getPTOptions = (key, options) => {
            return ptm(key, {
                hostName: props.hostName,
                ...options
            });
        };

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
            const buttonIconProps = mergeProps(
                {
                    className: cx('message.buttonicon')
                },
                getPTOptions('buttonicon', parentParams),
                ptmo(pt, 'buttonicon', { ...params, hostName: props.hostName })
            );

            const icon = _closeIcon || <TimesIcon {...buttonIconProps} />;
            const closeIcon = IconUtils.getJSXIcon(icon, { ...buttonIconProps }, { props });
            const ariaLabel = props.ariaCloseLabel || localeOption('close');

            const closeButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('message.closeButton'),
                    onClick: onClose,
                    'aria-label': ariaLabel
                },
                getPTOptions('closeButton', parentParams),
                ptmo(pt, 'closeButton', { ...params, hostName: props.hostName })
            );

            if (closable !== false) {
                return (
                    <div>
                        <button {...closeButtonProps}>
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
                const iconProps = mergeProps(
                    {
                        className: cx('message.icon')
                    },
                    getPTOptions('icon', parentParams),
                    ptmo(pt, 'icon', { ...params, hostName: props.hostName })
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
                        className: cx('message.text')
                    },
                    getPTOptions('text', parentParams),
                    ptmo(pt, 'text', { ...params, hostName: props.hostName })
                );

                const summaryProps = mergeProps(
                    {
                        className: cx('message.summary')
                    },
                    getPTOptions('summary', parentParams),
                    ptmo(pt, 'summary', { ...params, hostName: props.hostName })
                );

                const detailProps = mergeProps(
                    {
                        className: cx('message.detail')
                    },
                    getPTOptions('detail', parentParams),
                    ptmo(pt, 'detail', { ...params, hostName: props.hostName })
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

        const message = createMessage();
        const closeIcon = createCloseIcon();

        const messageProps = mergeProps(
            {
                ref,
                className: classNames(_className, cx('message.message', { severity })),
                style,
                role: 'alert',
                'aria-live': 'assertive',
                'aria-atomic': 'true',
                onClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave
            },
            getPTOptions('message', parentParams),
            ptmo(pt, 'root', { ...params, hostName: props.hostName })
        );

        const contentProps = mergeProps(
            {
                className: classNames(_contentClassName, cx('message.content')),
                style: contentStyle
            },
            getPTOptions('content', parentParams),
            ptmo(pt, 'content', { ...params, hostName: props.hostName })
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
