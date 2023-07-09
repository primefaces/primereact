import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { ExclamationTriangleIcon } from '../icons/exclamationtriangle';
import { InfoCircleIcon } from '../icons/infocircle';
import { TimesCircleIcon } from '../icons/timescircle';
import { IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';
import { MessageBase } from './MessageBase';

export const Message = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MessageBase.getProps(inProps, context);

        const elementRef = React.useRef(null);

        useStyle(MessageBase.css.styles, { name: 'primereact_message_style' });

        const { ptm, cx } = MessageBase.setMetaData({
            props
        });

        const createContent = () => {
            if (props.content) {
                return ObjectUtils.getJSXElement(props.content, props);
            }

            const text = ObjectUtils.getJSXElement(props.text, props);

            const iconProps = mergeProps(
                {
                    className: cx('icon')
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
                    className: cx('text')
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

        const content = createContent();

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: cx('root'),
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
