import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class UIMessage extends Component {

    static defaultProps = {
        message: null,
        onClose: null,
        onClick: null
    }

    static propTypes = {
        message: PropTypes.object,
        onClose: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
        if (!this.props.message.sticky) {
            this.timeout = setTimeout(() => {
                this.onClose(null);
            }, this.props.message.life || 3000);
        }
    }

    onClose(event) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        if (this.props.onClose) {
            this.props.onClose(this.props.message);
        }

        if (event) {
            event.preventDefault();
        }
    }

    onClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props.message);
        }
    }

    renderCloseIcon() {
        if (this.props.message.closable !== false) {
            return (
                <a className="ui-messages-close" onClick={this.onClose}>
                    <i className="fa fa-close"></i>
                </a>
            );
        }
        else {
            return null;
        }
    }

    renderMessages() {
        if(this.props.message) {
            return (
                <ul>
                    <li key={this.props.message.id}>
                        <span className="ui-messages-summary">{this.props.message.summary}</span>
                        <span className="ui-messages-detail">{this.props.message.detail}</span>
                    </li>
                </ul>
            )
        }
        else {
            return null;
        }
    }

    render() {
        let className = 'ui-messages ui-widget ui-corner-all ui-messages-' + this.props.message.severity;
        let icon = classNames('ui-messages-icon fa fa-fw fa-2x', {
            'fa-info-circle': this.props.message.severity === 'info',
            'fa-warning': this.props.message.severity === 'warn',
            'fa-close': this.props.message.severity === 'error',
            'fa-check': this.props.message.severity === 'success',
        });
        let closeIcon = this.renderCloseIcon();
        let messages = this.renderMessages();

        return (
            <div ref={(el) => { this.container = el; }} className={className}>
                <div className="ui-messages-wrapper">
                    {closeIcon}
                    <span className={icon}></span>
                    {messages}
                </div>
            </div>
        );

    }
}