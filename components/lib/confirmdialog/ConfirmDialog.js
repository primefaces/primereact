import * as React from 'react';
import { PrimeReactContext, localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { Dialog } from '../dialog/Dialog';
import { useMergeProps, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { ConfirmDialogBase } from './ConfirmDialogBase';

export const confirmDialog = (props = {}) => {
    props = { ...props, ...{ visible: props.visible === undefined ? true : props.visible } };
    props.visible && OverlayService.emit('confirm-dialog', props);

    const show = (updatedProps = {}) => {
        OverlayService.emit('confirm-dialog', { ...props, ...updatedProps, ...{ visible: true } });
    };

    const hide = () => {
        OverlayService.emit('confirm-dialog', { visible: false });
    };

    return { show, hide };
};

export const ConfirmDialog = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ConfirmDialogBase.getProps(inProps, context);

        const [visibleState, setVisibleState] = React.useState(props.visible);
        const [reshowState, setReshowState] = React.useState(false);
        const confirmProps = React.useRef(null);
        const isCallbackExecuting = React.useRef(false);
        const focusElementOnHide = React.useRef(null);

        const getCurrentProps = () => {
            let group = props.group;

            if (confirmProps.current) {
                group = confirmProps.current.group;
            }

            return Object.assign({}, props, confirmProps.current, { group });
        };

        const getPropValue = (key) => getCurrentProps()[key];
        const callbackFromProp = (key, ...param) => ObjectUtils.getPropValue(getPropValue(key), param);

        const acceptLabel = getPropValue('acceptLabel') || localeOption('accept');
        const rejectLabel = getPropValue('rejectLabel') || localeOption('reject');

        const metaData = {
            props,
            state: {
                visible: visibleState
            }
        };
        const { ptm, cx, isUnstyled } = ConfirmDialogBase.setMetaData(metaData);

        useHandleStyle(ConfirmDialogBase.css.styles, isUnstyled, { name: 'confirmdialog' });

        const accept = () => {
            if (!isCallbackExecuting.current) {
                isCallbackExecuting.current = true;
                callbackFromProp('accept');
                hide('accept');
            }
        };

        const reject = () => {
            if (!isCallbackExecuting.current) {
                isCallbackExecuting.current = true;
                callbackFromProp('reject');
                hide('reject');
            }
        };

        const show = () => {
            const currentProps = getCurrentProps();

            if (currentProps.group === props.group) {
                setVisibleState(true);
                isCallbackExecuting.current = false;

                // Remember the focused element before we opened the dialog
                // so we can return focus to it once we close the dialog.
                focusElementOnHide.current = document.activeElement;
            }
        };

        const hide = (result = 'cancel') => {
            setVisibleState(false);
            callbackFromProp('onHide', { result });
            DomHandler.focus(focusElementOnHide.current);
            focusElementOnHide.current = null;
        };

        const confirm = (updatedProps) => {
            if (updatedProps.tagKey === props.tagKey) {
                const isVisibleChanged = visibleState !== updatedProps.visible;
                const targetChanged = getPropValue('target') !== updatedProps.target;

                if (targetChanged && !props.target) {
                    hide();
                    confirmProps.current = updatedProps;
                    setReshowState(true);
                } else if (isVisibleChanged) {
                    confirmProps.current = updatedProps;
                    updatedProps.visible ? show() : hide();
                }
            }
        };

        React.useEffect(() => {
            props.visible ? show() : hide();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.visible]);

        React.useEffect(() => {
            if (!props.target && !props.message) {
                OverlayService.on('confirm-dialog', confirm);
            }

            return () => {
                OverlayService.off('confirm-dialog', confirm);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.target]);

        useUpdateEffect(() => {
            reshowState && show();
        }, [reshowState]);

        useUnmountEffect(() => {
            OverlayService.off('confirm-dialog', confirm);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            confirm
        }));

        const createFooter = () => {
            const defaultFocus = getPropValue('defaultFocus');
            const acceptClassName = classNames('p-confirm-dialog-accept', getPropValue('acceptClassName'));
            const rejectClassName = classNames(
                'p-confirm-dialog-reject',
                {
                    'p-button-text': !getPropValue('rejectClassName')
                },
                getPropValue('rejectClassName')
            );

            const rejectButtonProps = {
                label: rejectLabel,
                autoFocus: defaultFocus === 'reject',
                icon: getPropValue('rejectIcon'),
                className: classNames(getPropValue('rejectClassName'), cx('rejectButton', { getPropValue })),
                onClick: reject,
                pt: ptm('rejectButton'),
                unstyled: props.unstyled,
                __parentMetadata: {
                    parent: metaData
                }
            };

            const acceptButtonProps = mergeProps(
                {
                    label: acceptLabel,
                    autoFocus: defaultFocus === undefined || defaultFocus === 'accept',
                    icon: getPropValue('acceptIcon'),
                    className: classNames(getPropValue('acceptClassName'), cx('acceptButton')),
                    onClick: accept,
                    pt: ptm('acceptButton'),
                    unstyled: props.unstyled,
                    __parentMetadata: {
                        parent: metaData
                    }
                },
                ptm('acceptButton')
            );

            const content = (
                <>
                    <Button {...rejectButtonProps} />
                    <Button {...acceptButtonProps} />
                </>
            );

            if (getPropValue('footer')) {
                const defaultContentOptions = {
                    accept,
                    reject,
                    acceptClassName,
                    rejectClassName,
                    acceptLabel,
                    rejectLabel,
                    element: content,
                    props: getCurrentProps()
                };

                return ObjectUtils.getJSXElement(getPropValue('footer'), defaultContentOptions);
            }

            return content;
        };

        const createElement = () => {
            const currentProps = getCurrentProps();
            const message = ObjectUtils.getJSXElement(getPropValue('message'), currentProps);

            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                ptm('icon')
            );

            const icon = IconUtils.getJSXIcon(getPropValue('icon'), { ...iconProps }, { props: currentProps });
            const footer = createFooter();

            const messageProps = mergeProps(
                {
                    className: cx('message')
                },
                ptm('message')
            );

            const rootProps = mergeProps(
                {
                    visible: visibleState,
                    className: classNames(getPropValue('className'), cx('root')),
                    footer,
                    onHide: hide,
                    breakpoints: getPropValue('breakpoints'),
                    pt: currentProps.pt,
                    unstyled: props.unstyled,
                    appendTo: getPropValue('appendTo'),
                    __parentMetadata: {
                        parent: metaData
                    }
                },
                ConfirmDialogBase.getOtherProps(currentProps)
            );

            return (
                <Dialog {...rootProps} content={inProps?.content}>
                    {icon}
                    <span {...messageProps}>{message}</span>
                </Dialog>
            );
        };

        const element = createElement();

        return <Portal element={element} appendTo={getPropValue('appendTo')} />;
    })
);

ConfirmDialog.displayName = 'ConfirmDialog';
