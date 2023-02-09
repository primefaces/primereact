import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { ChipBase } from './ChipBase';

export const Chip = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ChipBase.getProps(inProps);

        const elementRef = React.useRef(null);
        const [visibleState, setVisibleState] = React.useState(true);

        const onKeyDown = (event) => {
            if (event.keyCode === 13) {
                // enter
                close(event);
            }
        };

        const close = (event) => {
            setVisibleState(false);

            if (props.onRemove) {
                props.onRemove(event);
            }
        };

        const createContent = () => {
            let content = [];

            if (props.image) {
                content.push(<img key="image" src={props.image} alt={props.imageAlt} onError={props.onImageError}></img>);
            } else if (props.icon) {
                content.push(IconUtils.getJSXIcon(props.icon, { key: 'icon', className: 'p-chip-icon' }, { props }));
            }

            if (props.label) {
                content.push(
                    <span key="label" className="p-chip-text">
                        {props.label}
                    </span>
                );
            }

            if (props.removable) {
                content.push(IconUtils.getJSXIcon(props.removeIcon, { key: 'removeIcon', tabIndex: 0, className: 'p-chip-remove-icon', onClick: close, onKeyDown }, { props }));
            }

            return content;
        };

        const createElement = () => {
            const otherProps = ChipBase.getOtherProps(props);
            const className = classNames(
                'p-chip p-component',
                {
                    'p-chip-image': props.image != null
                },
                props.className
            );

            const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

            return (
                <div ref={elementRef} className={className} style={props.style} {...otherProps}>
                    {content}
                </div>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        return visibleState && createElement();
    })
);

Chip.displayName = 'Chip';
