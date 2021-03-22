import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';

export class Chip extends Component {

    static defaultProps = {
        label: null,
        icon: null,
        image: null,
        removable: false,
        removeIcon: 'pi pi-times-circle',
        className: null,
        style: null,
        template: null,
        imageAlt: 'chip',
        onImageError: null,
        onRemove: null
    };

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        image: PropTypes.string,
        removable: PropTypes.bool,
        removeIcon: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        template: PropTypes.any,
        imageAlt: PropTypes.string,
        onImageError: PropTypes.func,
        onRemove: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.close = this.close.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.keyCode === 13) { // enter
            this.close(event);
        }
    }

    close(event) {
        event.persist();

        this.setState({ visible: false }, () => {
            if (this.props.onRemove) {
                this.props.onRemove(event);
            }
        });
    }

    renderContent() {
        let content = [];

        if (this.props.image) {
            const onError = (e) => {
                if (this.props.onImageError) {
                    this.props.onImageError(e);
                }
            };

            content.push(<img key="image" src={this.props.image} alt={this.props.imageAlt} onError={onError}></img>);
        }
        else if (this.props.icon) {
            const iconClassName = classNames('p-chip-icon', this.props.icon);
            content.push(<span key="icon" className={iconClassName}></span>);
        }

        if (this.props.label) {
            content.push(<span key="label" className="p-chip-text">{this.props.label}</span>);
        }

        if (this.props.removable) {
            const removableIconClassName = classNames('p-chip-remove-icon', this.props.removeIcon);
            content.push(<span key="removeIcon" tabIndex={0} className={removableIconClassName} onClick={this.close} onKeyDown={this.onKeyDown}></span>);
        }

        return content;
    }

    renderElement() {
        const containerClassName = classNames('p-chip p-component', {
            'p-chip-image': this.props.image != null
        }, this.props.className);

        const content = this.props.template ? ObjectUtils.getJSXElement(this.props.template, this.props) : this.renderContent();

        return (
            <div className={containerClassName} style={this.props.style}>
                {content}
            </div>
        );
    }

    render() {
        return this.state.visible && this.renderElement();
    }
}
