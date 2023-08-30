import * as React from 'react';
import { localeOption } from '../api/Api';
import { useTimeout } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, mergeProps } from '../utils/Utils';

export const UIMessage = React.memo(
    React.forwardRef((props, ref) => {
        const {
            message: messageInfo,
            metaData: parentMetaData,
            ptCallbacks: { ptm, ptmo, cx },
            index
        } = props;
        const { severity, content, summary, detail, closable, life, sticky, className: _className, style, contentClassName: _contentClassName, contentStyle, icon: _icon, closeIcon: _closeIcon, pt } = messageInfo.message;
        const params = { index };
        const parentParams = { ...parentMetaData, ...params };
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

                const buttonIconProps = mergeProps(
                    {
                        className: cx('uimessage.buttonicon'),
                        'aria-hidden': true
                    },
                    ptm('buttonicon', parentParams),
                    ptmo(pt, 'buttonicon', params)
                );

                const icon = _closeIcon || <TimesIcon {...buttonIconProps} />;
                const closeIcon = IconUtils.getJSXIcon(icon, { ...buttonIconProps }, { props });

                const buttonProps = mergeProps(
                    {
                        type: 'button',
                        className: cx('uimessage.button'),
                        'aria-label': ariaLabel,
                        onClick: onClose
                    },
                    ptm('button', parentParams),
                    ptmo(pt, 'button', params)
                );

                return (
                    <button {...buttonProps}>
                        {closeIcon}
                        <Ripple />
                    </button>
                );
            }

            return null;
        };

        const createMessage = () => {
            if (props.message) {
                const iconProps = mergeProps(
                    {
                        className: cx('uimessage.icon')
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

                const iconContent = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

                const summaryProps = mergeProps(
                    {
                        className: cx('uimessage.summary')
                    },
                    ptm('summary', parentParams),
                    ptmo(pt, 'summary', params)
                );

                const detailProps = mergeProps(
                    {
                        className: cx('uimessage.detail')
                    },
                    ptm('detail', parentParams),
                    ptmo(pt, 'detail', params)
                );

                return (
                    content || (
                        <>
                            {iconContent}
                            <span {...summaryProps}>{summary}</span>
                            <span {...detailProps}>{detail}</span>
                        </>
                    )
                );
            }

            return null;
        };

        const closeIcon = createCloseIcon();
        const message = createMessage();

        const wrapperProps = mergeProps(
            {
                className: classNames(_contentClassName, cx('uimessage.wrapper')),
                style: contentStyle
            },
            ptm('wrapper', parentParams),
            ptmo(pt, 'wrapper', params)
        );

        const rootProps = mergeProps(
            {
                ref,
                className: classNames(_className, cx('uimessage.root', { severity })),
                style,
                onClick
            },
            ptm('root', parentParams),
            ptmo(pt, 'root', params)
        );

        return (
            <div {...rootProps}>
                <div {...wrapperProps}>
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    })
);

UIMessage.displayName = 'UIMessage';
