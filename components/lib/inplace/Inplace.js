import * as React from 'react';
import { localeOption, PrimeReactContext } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useUpdateEffect } from '../hooks/Hooks';
import { TimesIcon } from '../icons/times';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { InplaceBase } from './InplaceBase';

export const InplaceDisplay = (props) => props.children;
export const InplaceContent = (props) => props.children;

export const Inplace = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = InplaceBase.getProps(inProps, context);

    const [activeState, setActiveState] = React.useState(props.active);
    const elementRef = React.useRef(null);
    const active = props.onToggle ? props.active : activeState;
    const metaData = {
        props,
        state: {
            active: activeState
        }
    };
    const { ptm, cx, isUnstyled } = InplaceBase.setMetaData(metaData);

    useHandleStyle(InplaceBase.css.styles, isUnstyled, { name: 'inplace' });

    const open = (event) => {
        if (props.disabled) {
            return;
        }

        props.onOpen && props.onOpen(event);

        if (props.onToggle) {
            props.onToggle({
                originalEvent: event,
                value: true
            });
        } else {
            setActiveState(true);
        }
    };

    const close = (event) => {
        if (props.disabled) {
            return;
        }

        props.onClose && props.onClose(event);

        if (props.onToggle) {
            props.onToggle({
                originalEvent: event,
                value: false
            });
        } else {
            setActiveState(false);
        }
    };

    const onDisplayKeyDown = (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
            open(event);
            event.preventDefault();
        }
    };

    const createDisplay = (content) => {
        const displayProps = mergeProps(
            {
                onClick: open,
                className: cx('display'),
                onKeyDown: onDisplayKeyDown,
                tabIndex: props.tabIndex || '0',
                role: 'button',
                'aria-label': props.ariaLabel
            },
            ptm('display')
        );

        return <div {...displayProps}>{content}</div>;
    };

    const createCloseButton = () => {
        const icon = props.closeIcon || <TimesIcon />;
        const closeIcon = IconUtils.getJSXIcon(icon, undefined, { props });
        const closeAriaLabel = localeOption('aria') ? localeOption('aria').close : undefined;

        if (props.closable) {
            const closeButtonProps = mergeProps({
                className: cx('closeButton'),
                icon: closeIcon,
                type: 'button',
                onClick: close,
                'aria-label': closeAriaLabel,
                pt: ptm('closeButton'),
                __parentMetadata: {
                    parent: metaData
                }
            });

            return <Button {...closeButtonProps}></Button>;
        }

        return null;
    };

    const createContent = (content) => {
        const closeButton = createCloseButton();

        const contentProps = mergeProps(
            {
                className: cx('content')
            },
            ptm('content')
        );

        return (
            <div {...contentProps}>
                {content}
                {closeButton}
            </div>
        );
    };

    const createChildren = () => {
        const validChildTypes = ['InplaceContent', 'InplaceDisplay'];

        return React.Children.map(props.children, (child) => {
            if (active && ObjectUtils.isValidChild(child, 'InplaceContent', validChildTypes)) {
                return createContent(child);
            } else if (!active && ObjectUtils.isValidChild(child, 'InplaceDisplay', validChildTypes)) {
                return createDisplay(child);
            }
        });
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    useUpdateEffect(() => {
        props.active ? open(null) : close(null);
    }, [props.active]);

    const children = createChildren();

    const rootProps = mergeProps(
        {
            ref: elementRef,
            className: classNames(props.className, cx('root')),
            'aria-live': 'polite'
        },
        InplaceBase.getOtherProps(props),
        ptm('root')
    );

    return <div {...rootProps}>{children}</div>;
});

InplaceDisplay.displayName = 'InplaceDisplay';

InplaceContent.displayName = 'InplaceContent';

Inplace.displayName = 'Inplace';
