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

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
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
            event.stopPropagation();
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
                <button type="button" className="p-messages-close p-link" onClick={this.onClose}>
                    <i className="p-messages-close-icon pi pi-times"></i>
                </button>
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
                        <span className="p-messages-summary">{this.props.message.summary}</span>
                        <span className="p-messages-detail">{this.props.message.detail}</span>
                    </li>
                </ul>
            )
        }
        else {
            return null;
        }
    }

    render() {
        let className = 'p-messages p-component p-messages-' + this.props.message.severity;
        let icon = classNames('p-messages-icon pi ', {
            'pi-info-circle': this.props.message.severity === 'info',
            'pi-exclamation-triangle': this.props.message.severity === 'warn',
            'pi-times': this.props.message.severity === 'error',
            'pi-check': this.props.message.severity === 'success',
        });
        let closeIcon = this.renderCloseIcon();
        let messages = this.renderMessages();

        return (
            <div ref={(el) => { this.container = el; }} className={className} onClick={this.onClick}>
                <div className="p-messages-wrapper">
                    {closeIcon}
                    <span className={icon}></span>
                    {messages}
                </div>
            </div>
        );

    }
}
