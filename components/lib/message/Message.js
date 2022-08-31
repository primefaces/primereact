import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Message = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);

        const createIcon = () => {
            return IconUtils.getJSXIcon(props.icon, { ...props.iconProps });
        };

        const createContent = () => {
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);
            const icon = classNames('p-inline-message-icon pi', {
                '': props.severity === 'info',
                '': props.severity === 'warn',
                '': props.severity === 'error',
                '': props.severity === 'success'
            });

            return (
                <>
                    <span className={icon}></span>
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
        const icon = createIcon();

        return (
            <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps} role="alert" aria-live="polite">
                {icon}
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
    severity: null,
    content: null,
    icon: 'pi pi-info-circle',
    iconProps: null,
    iconPos: 'left'
};
