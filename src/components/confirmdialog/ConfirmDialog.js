import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { Dialog } from '../dialog/Dialog';
import { Button } from '../button/Button';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { localeOption } from '../api/Locale';

export function confirmDialog(props) {
    let appendTo = props.appendTo || document.body;

    let confirmDialogWrapper = document.createDocumentFragment();
    DomHandler.appendChild(confirmDialogWrapper, appendTo);

    props = {...props, ...{visible: props.visible === undefined ? true : props.visible}};

    let confirmDialogEl = React.createElement(ConfirmDialog, props);
    ReactDOM.render(confirmDialogEl, confirmDialogWrapper);

    let updateConfirmDialog = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(confirmDialogEl, props), confirmDialogWrapper);
    };

    return {
        _destroy: () => {
            ReactDOM.unmountComponentAtNode(confirmDialogWrapper);
        },
        show: () => {
            updateConfirmDialog({ visible: true, onHide: () => {
                updateConfirmDialog({ visible: false }); // reset
            }});
        },
        hide: () => {
            updateConfirmDialog({ visible: false });
        },
        update: (newProps) => {
            updateConfirmDialog(newProps);
        }
    }
}

export class ConfirmDialog extends Component {

    static defaultProps = {
        visible: false,
        message: null,
        rejectLabel: null,
        acceptLabel: null,
        icon: null,
        rejectIcon: null,
        acceptIcon: null,
        rejectClassName: null,
        acceptClassName: null,
        className: null,
        appendTo: null,
        footer: null,
        onHide: null,
        accept: null,
        reject: null
    }

    static propTypes = {
        visible: PropTypes.bool,
        message: PropTypes.any,
        rejectLabel: PropTypes.string,
        acceptLabel: PropTypes.string,
        icon: PropTypes.string,
        rejectIcon: PropTypes.string,
        acceptIcon: PropTypes.string,
        rejectClassName: PropTypes.string,
        acceptClassName: PropTypes.string,
        appendTo: PropTypes.any,
        className: PropTypes.string,
        footer: PropTypes.any,
        onHide: PropTypes.func,
        accept: PropTypes.func,
        reject: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            visible: props.visible
        };

        this.appendTo = props.appendTo || document.body;

        this.reject = this.reject.bind(this);
        this.accept = this.accept.bind(this);
        this.hide = this.hide.bind(this);
    }

    acceptLabel() {
        return this.props.acceptLabel || localeOption('accept');
    }

    rejectLabel() {
        return this.props.rejectLabel || localeOption('reject');
    }

    accept() {
        if (this.props.accept) {
            this.props.accept();
        }

        this.hide('accept');
    }

    reject() {
        if (this.props.reject) {
            this.props.reject();
        }

        this.hide('reject');
    }

    show() {
        this.setState({ visible: true });
    }

    hide(result) {
        this.setState({ visible: false }, () => {
            if (this.props.onHide) {
                this.props.onHide(result);
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visible !== this.props.visible) {
            this.setState({ visible: this.props.visible });
        }
    }

    renderFooter() {
        const acceptClassName = classNames('p-confirm-dialog-accept', this.props.acceptClassName);
        const rejectClassName = classNames('p-confirm-dialog-reject', {
            'p-button-text': !this.props.rejectClassName
        }, this.props.rejectClassName);

        return this.props.footer ? ObjectUtils.getJSXElement(this.props.footer, this.props) : (
            <>
                <Button label={this.rejectLabel()} icon={this.props.rejectIcon} className={rejectClassName} onClick={this.reject} />
                <Button label={this.acceptLabel()} icon={this.props.acceptIcon} className={acceptClassName} onClick={this.accept} autoFocus />
            </>
        )
    }

    renderElement() {
        const className = classNames('p-confirm-dialog', this.props.className);
        const iconClassName = classNames('p-confirm-dialog-icon', this.props.icon);

        const dialogProps = ObjectUtils.findDiffKeys(this.props, ConfirmDialog.defaultProps);
        const message = ObjectUtils.getJSXElement(this.props.message, this.props);
        const footer = this.renderFooter();

        return (
            <Dialog visible={this.state.visible} {...dialogProps} className={className} footer={footer} onHide={this.hide}>
                <i className={iconClassName} />
                <span className="p-confirm-dialog-message">{message}</span>
            </Dialog>
        );
    }

    render() {
        const element = this.renderElement();

        return ReactDOM.createPortal(element, this.appendTo);
    }
}
