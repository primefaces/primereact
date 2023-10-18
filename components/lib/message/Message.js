import * as React from 'react';
import { classNames, IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';
import { MessageBase } from './MessageBase';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesCircleIcon } from '../icons/timescircle';
import { CheckIcon } from '../icons/check';
import { PrimeReactContext } from '../api/Api';

export const Message = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MessageBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        const { ptm } = MessageBase.setMetaData({
            props
        });

        const createContent = () => {
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);
            let iconClassName = 'p-inline-message-icon';

            const iconProps = mergeProps(
                {
                    className: iconClassName
                },
                ptm('icon')
            );

            let icon = props.icon;

            if (!icon) {
                switch (props.severity) {
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
                    className: 'p-inline-message-text'
                },
                ptm('text')
            );

            return (
                <>
                    {messageIcon}
                    <span {...textProps}>{text}</span>
                </>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const className = classNames(
            'p-inline-message p-component',
            {
                'p-inline-message-info': props.severity === 'info',
                'p-inline-message-warn': props.severity === 'warn',
                'p-inline-message-error': props.severity === 'error',
                'p-inline-message-success': props.severity === 'success',
                'p-inline-message-icon-only': !props.text
            },
            props.className
        );
        const content = createContent();

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className,
                style: props.style,
                role: 'alert',
                'aria-live': 'polite'
            },
            MessageBase.getOtherProps(props),
            ptm('root')
        );

        return <div {...rootProps}>{content}</div>;
    })
);

Message.displayName = 'Message';
