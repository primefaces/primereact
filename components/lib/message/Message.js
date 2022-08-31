import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Message = React.memo(
    React.forwardRef((props, ref) => {
        const elementRef = React.useRef(null);

        
        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const createIcon = () => {
            return IconUtils.getJSXIcon(props.icon, { ...props.iconProps });
        };

        const createContent = () => {
            const customIcon = createIcon();
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);
            const icon = classNames('p-inline-message-icon pi', {
                'pi-info-circle': props.severity === 'info',
                'pi-exclamation-triangle': props.severity === 'warn',
                'pi-times-circle': props.severity === 'error',
                'pi-check': props.severity === 'success'
            });


            return (
                <>
                    {props.icon ? <span className='p-inline-message-icon'>{customIcon}</span> : <span className={icon}></span>}
                    <span className="p-inline-message-text">{text}</span>
                </>
            );
        };

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
    severity: null,
    content: null,
    icon: null,
    iconProps: null,
    iconPos: 'left'
};
