import * as React from 'react';
import { localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { TimesIcon } from '../icons/times';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { InplaceBase } from './InplaceBase';
import { PrimeReactContext } from '../api/Api';

export const InplaceDisplay = (props) => props.children;
export const InplaceContent = (props) => props.children;

export const Inplace = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = InplaceBase.getProps(inProps, context);

    const [activeState, setActiveState] = React.useState(props.active);
    const elementRef = React.useRef(null);
    const active = props.onToggle ? props.active : activeState;

    const { ptm } = InplaceBase.setMetaData({
        props,
        state: {
            active: activeState
        }
    });

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
        if (event.key === 'Enter') {
            open(event);
            event.preventDefault();
        }
    };

    const createDisplay = (content) => {
        const className = classNames('p-inplace-display', {
            'p-disabled': props.disabled
        });

        const displayProps = mergeProps(
            {
                onClick: open,
                className,
                onKeyDown: onDisplayKeyDown,
                tabIndex: props.tabIndex,
                'aria-label': props.ariaLabel
            },
            ptm('display')
        );

        return <div {...displayProps}>{content}</div>;
    };

    const createCloseButton = () => {
        const icon = props.closeIcon || <TimesIcon />;
        const closeIcon = IconUtils.getJSXIcon(icon, undefined, { props });
        const ariaLabel = localeOption('close');

        if (props.closable) {
            const closeButtonProps = mergeProps({
                className: 'p-inplace-content-close',
                icon: closeIcon,
                type: 'button',
                onClick: close,
                'aria-label': ariaLabel,
                pt: ptm('closeButton')
            });

            return <Button {...closeButtonProps}></Button>;
        }

        return null;
    };

    const createContent = (content) => {
        const closeButton = createCloseButton();

        const contentProps = mergeProps(
            {
                className: 'p-inplace-content'
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

    const children = createChildren();
    const className = classNames(
        'p-inplace p-component',
        {
            'p-inplace-closable': props.closable
        },
        props.className
    );

    const rootProps = mergeProps(
        {
            ref: elementRef,
            className
        },
        InplaceBase.getOtherProps(props),
        ptm('root')
    );

    return <div {...rootProps}>{children}</div>;
});

InplaceDisplay.displayName = 'InplaceDisplay';

InplaceContent.displayName = 'InplaceContent';

Inplace.displayName = 'Inplace';
