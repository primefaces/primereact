import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class GrowlMessage extends Component {

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

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    componentDidMount() {
        if (!this.props.message.sticky) {
            this.timeout = setTimeout(() => {
                this.onClose(null);
            }, this.props.message.life||3000);
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
                <button type="button" className="p-growl-icon-close p-link" onClick={this.onClose}>
                    <span className="p-growl-icon-close-icon pi pi-times"></span>
                </button>
            );
        }
        else {
            return null;
        }
    }

    render() {
        let className = classNames('p-growl-item-container p-highlight', {
            'p-growl-message-info': this.props.message.severity === 'info',
            'p-growl-message-warn': this.props.message.severity === 'warn',
            'p-growl-message-error': this.props.message.severity === 'error',
            'p-growl-message-success': this.props.message.severity === 'success'
        });

        let iconClassName = classNames('p-growl-image pi', {
            'pi-info-circle': this.props.message.severity === 'info',
            'pi-exclamation-triangle': this.props.message.severity === 'warn',
            'pi-times': this.props.message.severity === 'error',
            'pi-check': this.props.message.severity === 'success'
        });

        let closeIcon = this.renderCloseIcon();

        return (
            <div ref={(el) => { this.element = el; }} className={className} aria-live="polite" onClick={this.onClick}>
                <div className="p-growl-item" role="alert" aria-live="assertive" aria-atomic="true">
                    {closeIcon}
                    <span className={iconClassName}></span>
                    <div className="p-growl-message">
                        <span className="p-growl-title">{this.props.message.summary}</span>
                        { this.props.message.detail && <div className="p-growl-details">{this.props.message.detail}</div> }
                    </div>
                </div>
            </div>
        );
    }
}
