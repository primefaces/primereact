import * as React from 'react';
import { localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { Dialog } from '../dialog/Dialog';
import { useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { IconUtils, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { ConfirmDialogBase } from './ConfirmDialogBase';
import { PrimeReactContext } from '../api/Api';

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
        const context = React.useContext(PrimeReactContext);
        const props = ConfirmDialogBase.getProps(inProps, context);

        const [visibleState, setVisibleState] = React.useState(props.visible);
        const [reshowState, setReshowState] = React.useState(false);
        const confirmProps = React.useRef(null);
        const isCallbackExecuting = React.useRef(false);
        const getCurrentProps = () => confirmProps.current || props;
        const getPropValue = (key) => (confirmProps.current || props)[key];
        const callbackFromProp = (key, ...param) => ObjectUtils.getPropValue(getPropValue(key), param);

        const acceptLabel = getPropValue('acceptLabel') || localeOption('accept');
        const rejectLabel = getPropValue('rejectLabel') || localeOption('reject');

        const { ptm } = ConfirmDialogBase.setMetaData({
            props,
            state: {
                visible: visibleState
            }
        });

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
            setVisibleState(true);
            isCallbackExecuting.current = false;
        };

        const hide = (result = 'cancel') => {
            setVisibleState(false);
            callbackFromProp('onHide', { result });
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
            const acceptClassName = classNames('p-confirm-dialog-accept', getPropValue('acceptClassName'));
            const rejectClassName = classNames(
                'p-confirm-dialog-reject',
                {
                    'p-button-text': !getPropValue('rejectClassName')
                },
                getPropValue('rejectClassName')
            );

            const rejectButtonProps = mergeProps(
                {
                    label: rejectLabel,
                    icon: getPropValue('rejectIcon'),
                    className: rejectClassName,
                    onClick: reject
                },
                ptm('rejectButton')
            );

            const acceptButtonProps = mergeProps(
                {
                    label: acceptLabel,
                    icon: getPropValue('acceptIcon'),
                    className: acceptClassName,
                    onClick: accept
                },
                ptm('acceptButton')
            );

            const content = (
                <>
                    <Button {...rejectButtonProps} />
                    <Button {...acceptButtonProps} autoFocus />
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
            const className = classNames('p-confirm-dialog', getPropValue('className'));
            const message = ObjectUtils.getJSXElement(getPropValue('message'), currentProps);

            const iconProps = mergeProps(
                {
                    className: 'p-confirm-dialog-icon'
                },
                ptm('icon')
            );

            const icon = IconUtils.getJSXIcon(getPropValue('icon'), { ...iconProps }, { props: currentProps });
            const footer = createFooter();

            const messageProps = mergeProps(
                {
                    className: 'p-confirm-dialog-message'
                },
                ptm('message')
            );

            const rootProps = mergeProps(
                {
                    visible: visibleState,
                    className,
                    footer,
                    onHide: hide,
                    breakpoints: getPropValue('breakpoints'),
                    pt: currentProps.pt
                },
                ConfirmDialogBase.getOtherProps(currentProps)
            );

            return (
                <Dialog {...rootProps}>
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
