import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Message extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        text: null,
        severity: 'info'
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        severity: PropTypes.string
    };

    render() {
        let className = classNames('p-message p-component', {
            'p-message-info': this.props.severity === 'info',
            'p-message-warn': this.props.severity === 'warn',
            'p-message-error': this.props.severity === 'error',
            'p-message-success': this.props.severity === 'success',
            'p-message-icon-only': !this.props.text
        }, this.props.className);

        let icon = classNames('p-message-icon pi pi-fw', {
            'pi-info-circle': this.props.severity === 'info',
            'pi-exclamation-triangle': this.props.severity === 'warn',
            'pi-times': this.props.severity === 'error',
            'pi-check': this.props.severity === 'success',
        });

        return <div id={this.props.id} aria-live="polite" className={className} style={this.props.style} role="alert">
            <span className={icon}></span>
            <span className="p-message-text">{this.props.text}</span>
        </div>;
    }
}
