import * as React from 'react';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Card = React.forwardRef((props, ref) => {

    const elementRef = React.useRef(ref);

    const createHeader = () => {
        if (props.header) {
            return <div className="p-card-header">{ObjectUtils.getJSXElement(props.header, props)}</div>
        }

        return null;
    }

    const createBody = () => {
        const title = props.title && <div className="p-card-title">{ObjectUtils.getJSXElement(props.title, props)}</div>
        const subTitle = props.subTitle && <div className="p-card-subtitle">{ObjectUtils.getJSXElement(props.subTitle, props)}</div>
        const children = props.children && <div className="p-card-content">{props.children}</div>
        const footer = props.footer && <div className="p-card-footer">{ObjectUtils.getJSXElement(props.footer, props)}</div>;

        return (
            <div className="p-card-body">
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        )
    }

    React.useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    const otherProps = ObjectUtils.findDiffKeys(props, Card.defaultProps);
    const className = classNames('p-card p-component', props.className);
    const header = createHeader();
    const body = createBody();

    return (
        <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps}>
            {header}
            {body}
        </div>
    )
});

Card.displayName = 'Card';
Card.defaultProps = {
    __TYPE: 'Card',
    id: null,
    header: null,
    footer: null,
    title: null,
    subTitle: null,
    style: null,
    className: null
}
