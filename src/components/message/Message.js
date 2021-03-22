import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Message extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        text: null,
        severity: 'info',
        content: null
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        severity: PropTypes.string,
        content: PropTypes.any
    };

    getContent() {
        if (this.props.content) {
            return ObjectUtils.getJSXElement(this.props.content, this.props);
        }

        const icon = classNames('p-inline-message-icon pi', {
            'pi-info-circle': this.props.severity === 'info',
            'pi-exclamation-triangle': this.props.severity === 'warn',
            'pi-times-circle': this.props.severity === 'error',
            'pi-check': this.props.severity === 'success',
        });

        return (
            <>
                <span className={icon}></span>
                <span className="p-inline-message-text">{this.props.text}</span>
            </>
        );
    }

    render() {
        const className = classNames('p-inline-message p-component', {
            'p-inline-message-info': this.props.severity === 'info',
            'p-inline-message-warn': this.props.severity === 'warn',
            'p-inline-message-error': this.props.severity === 'error',
            'p-inline-message-success': this.props.severity === 'success',
            'p-inline-message-icon-only': !this.props.text
        }, this.props.className);

        const content = this.getContent();

        return (
            <div id={this.props.id} aria-live="polite" className={className} style={this.props.style} role="alert">
                { content }
            </div>
        );
    }
}
