import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { MessageBase } from './MessageBase';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesCircleIcon } from '../icons/timescircle';
import { CheckIcon } from '../icons/check';

export const Message = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MessageBase.getProps(inProps);

        const elementRef = React.useRef(null);

        const createContent = () => {
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);
            let iconClassName = 'p-inline-message-icon';
            let icon = props.icon;

            if (!icon) {
                switch (props.severity) {
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
                <>
                    {messageIcon}
                    <span className="p-inline-message-text">{text}</span>
                </>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const otherProps = MessageBase.getOtherProps(props);
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

        return (
            <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps} role="alert" aria-live="polite">
                {content}
            </div>
        );
    })
);

Message.displayName = 'Message';
