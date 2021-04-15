import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { Ripple } from '../ripple/Ripple';

class UIMessageComponent extends Component {

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
                <button type="button" className="p-message-close p-link" onClick={this.onClose}>
                    <i className="p-message-close-icon pi pi-times"></i>
                    <Ripple />
                </button>
            );
        }

        return null;
    }

    renderMessage() {
        if (this.props.message) {
            const { severity, content, summary, detail } = this.props.message;
            const icon = classNames('p-message-icon pi ', {
                'pi-info-circle': severity === 'info',
                'pi-check': severity === 'success',
                'pi-exclamation-triangle': severity === 'warn',
                'pi-times-circle': severity === 'error'
            });

            return content || (
                <>
                    <span className={icon}></span>
                    <span className="p-message-summary">{summary}</span>
                    <span className="p-message-detail">{detail}</span>
                </>
            );
        }

        return null;
    }

    render() {
        const severity = this.props.message.severity;
        let className = 'p-message p-component p-message-' + severity;
        let closeIcon = this.renderCloseIcon();
        let message = this.renderMessage();

        return (
            <div ref={this.props.forwardRef} className={className} onClick={this.onClick}>
                <div className="p-message-wrapper">
                    {message}
                    {closeIcon}
                </div>
            </div>
        );
    }
}

export const UIMessage = React.forwardRef((props, ref) => <UIMessageComponent forwardRef={ref} {...props} />);
