import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Chip = React.memo(React.forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = React.useState(true);

    const onKeyDown = (event) => {
        if (event.keyCode === 13) { // enter
            close(event);
        }
    }

    const close = (event) => {
        setVisibleState(false);

        if (props.onRemove) {
            props.onRemove(event);
        }
    }

    const createContent = () => {
        let content = [];

        if (props.image) {
            content.push(<img key="image" src={props.image} alt={props.imageAlt} onError={props.onImageError}></img>);
        }
        else if (props.icon) {
            content.push(IconUtils.getJSXIcon(props.icon, { key: 'icon', className: 'p-chip-icon' }, { props }));
        }

        if (props.label) {
            content.push(<span key="label" className="p-chip-text">{props.label}</span>);
        }

        if (props.removable) {
            content.push(IconUtils.getJSXIcon(props.removeIcon, { key: 'removeIcon', tabIndex: 0, className: 'p-chip-remove-icon', onClick: close, onKeyDown }, { props }));
        }

        return content;
    }

    const createElement = () => {
        const otherProps = ObjectUtils.findDiffKeys(props, Chip.defaultProps);
        const className = classNames('p-chip p-component', {
            'p-chip-image': props.image != null
        }, props.className);

        const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

        return (
            <div className={className} style={props.style} {...otherProps}>
                {content}
            </div>
        )
    }

    return visibleState && createElement();
}));

Chip.displayName = 'Chip';
Chip.defaultProps = {
    __TYPE: 'Chip',
    label: null,
    icon: null,
    image: null,
    removable: false,
    removeIcon: 'pi pi-times-circle',
    className: null,
    style: null,
    template: null,
    imageAlt: 'chip',
    onImageError: null,
    onRemove: null
}
