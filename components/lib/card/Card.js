import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ObjectUtils, classNames } from '../utils/Utils';

export const Card = forwardRef((props, ref) => {

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

    const className = classNames('p-card p-component', props.className);
    const header = createHeader();
    const body = createBody();

    return (
        <div id={props.id} className={className} style={props.style}>
            {header}
            {body}
        </div>
    )
});

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

Card.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
    title: PropTypes.any,
    subTitle: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string
}
