import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Card extends Component {

    static defaultProps = {
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null
    };

    static propTypes = {
        id: PropTypes.string,
        header: PropTypes.any,
        footer: PropTypes.any,
        title: PropTypes.any,
        subTitle: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string
    };

    renderHeader() {
        if (this.props.header) {
            return <div className="p-card-header">{ObjectUtils.getJSXElement(this.props.header, this.props)}</div>;
        }

        return null;
    }

    renderBody() {
        const title = this.props.title && <div className="p-card-title">{ObjectUtils.getJSXElement(this.props.title, this.props)}</div>
        const subTitle = this.props.subTitle && <div className="p-card-subtitle">{ObjectUtils.getJSXElement(this.props.subTitle, this.props)}</div>
        const children = this.props.children && <div className="p-card-content">{this.props.children}</div>
        const footer = this.props.footer && <div className="p-card-footer">{ObjectUtils.getJSXElement(this.props.footer, this.props)}</div>;

        return (
            <div className="p-card-body">
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        );
    }

    render() {
        const header = this.renderHeader();
        const body = this.renderBody();
        let className = classNames('p-card p-component', this.props.className);

        return (
            <div className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}
