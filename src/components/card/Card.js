import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        title: PropTypes.string,
        subTitle: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    renderHeader() {
        if (this.props.header) {
            return <div className="p-card-header">{this.props.header}</div>;
        }

        return null;
    }

    renderBody() {
        const title = this.props.title && <div className="p-card-title">{this.props.title}</div>
        const subTitle = this.props.subTitle && <div className="p-card-subtitle">{this.props.subTitle}</div>
        const children = this.props.children && <div className="p-card-content">{this.props.children}</div>
        const footer = this.props.footer && <div className="p-card-footer"> {this.props.footer}</div>;

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
        let className = classNames('p-card p-component',this.props.className);

        return (
            <div className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}
