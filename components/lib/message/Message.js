import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Message = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);

        const createContent = () => {
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);
            let iconValue = props.icon;

            if (!iconValue) {
                iconValue = classNames('pi', {
                    'pi-info-circle': props.severity === 'info',
                    'pi-exclamation-triangle': props.severity === 'warn',
                    'pi-times-circle': props.severity === 'error',
                    'pi-check': props.severity === 'success'
                });
            }

            const icon = IconUtils.getJSXIcon(iconValue, { className: 'p-inline-message-icon' }, { props });

            return (
                <>
                    {icon}
                    <span className="p-inline-message-text">{text}</span>
                </>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const otherProps = ObjectUtils.findDiffKeys(props, Message.defaultProps);
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
Message.defaultProps = {
    __TYPE: 'Message',
    id: null,
    className: null,
    style: null,
    text: null,
    icon: null,
    severity: 'info',
    content: null
};
