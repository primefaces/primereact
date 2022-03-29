import React, { forwardRef, memo, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { localeOption } from '../api/Api';
import { Dialog } from '../dialog/Dialog';
import { Button } from '../button/Button';
import { Portal } from '../portal/Portal';
import { DomHandler, ObjectUtils, classNames, IconUtils } from '../utils/Utils';
import { useUpdateEffect } from '../hooks/Hooks';

export const confirmDialog = (props) => {
    const appendTo = props.appendTo || document.body;

    const confirmDialogWrapper = document.createDocumentFragment();
    DomHandler.appendChild(confirmDialogWrapper, appendTo);

    props = { ...props, ...{ visible: props.visible === undefined ? true : props.visible } };

    const confirmDialogEl = React.createElement(ConfirmDialog, props);
    ReactDOM.render(confirmDialogEl, confirmDialogWrapper);

    const updateConfirmDialog = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(confirmDialogEl, props), confirmDialogWrapper);
    };

    return {
        _destroy: () => {
            ReactDOM.unmountComponentAtNode(confirmDialogWrapper);
        },
        show: () => {
            updateConfirmDialog({
                visible: true, onHide: () => {
                    updateConfirmDialog({ visible: false }); // reset
                }
            });
        },
        hide: () => {
            updateConfirmDialog({ visible: false });
        },
        update: (newProps) => {
            updateConfirmDialog(newProps);
        }
    }
}

export const ConfirmDialog = memo(forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(props.visible);
    const acceptLabel = props.acceptLabel || localeOption('accept');
    const rejectLabel = props.rejectLabel || localeOption('reject');

    const accept = () => {
        props.accept && props.accept();
        hide('accept');
    }

    const reject = () => {
        props.reject && props.reject();
        hide('reject');
    }

    const show = () => {
        setVisibleState(true)
    }

    const hide = (result) => {
        setVisibleState(false);
        props.onHide && props.onHide(result);
    }

    useUpdateEffect(() => {
        setVisibleState(props.visible);
    }, [props.visible]);

    const createFooter = () => {
        const acceptClassName = classNames('p-confirm-dialog-accept', props.acceptClassName);
        const rejectClassName = classNames('p-confirm-dialog-reject', {
            'p-button-text': !props.rejectClassName
        }, props.rejectClassName);
        const content = (
            <>
                <Button label={rejectLabel} icon={props.rejectIcon} className={rejectClassName} onClick={reject} />
                <Button label={acceptLabel} icon={props.acceptIcon} className={acceptClassName} onClick={accept} autoFocus />
            </>
        );

        if (props.footer) {
            const defaultContentOptions = {
                accept: accept,
                reject: reject,
                acceptClassName,
                rejectClassName,
                acceptLabel,
                rejectLabel,
                element: content,
                props
            };

            return ObjectUtils.getJSXElement(props.footer, defaultContentOptions);
        }

        return content;
    }

    const createElement = () => {
        const className = classNames('p-confirm-dialog', props.className);
        const dialogProps = ObjectUtils.findDiffKeys(props, ConfirmDialog.defaultProps);
        const message = ObjectUtils.getJSXElement(props.message, props);
        const icon = IconUtils.getJSXIcon(props.icon, { className: 'p-confirm-dialog-icon' }, { props });
        const footer = createFooter();

        return (
            <Dialog visible={visibleState} {...dialogProps} className={className} footer={footer} onHide={hide} breakpoints={props.breakpoints}>
                {icon}
                <span className="p-confirm-dialog-message">{message}</span>
            </Dialog>
        )
    }

    const element = createElement();

    return <Portal element={element} appendTo={props.appendTo} />
}));

ConfirmDialog.defaultProps = {
    __TYPE: 'ConfirmDialog',
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
    breakpoints: null,
    onHide: null,
    accept: null,
    reject: null
}

ConfirmDialog.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    visible: PropTypes.bool,
    message: PropTypes.any,
    rejectLabel: PropTypes.string,
    acceptLabel: PropTypes.string,
    icon: PropTypes.any,
    rejectIcon: PropTypes.any,
    acceptIcon: PropTypes.any,
    rejectClassName: PropTypes.string,
    acceptClassName: PropTypes.string,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.string,
    footer: PropTypes.any,
    breakpoints: PropTypes.object,
    onHide: PropTypes.func,
    accept: PropTypes.func,
    reject: PropTypes.func
}
