import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect, useStyle } from '../hooks/Hooks';
import { MinusIcon } from '../icons/minus';
import { PlusIcon } from '../icons/plus';
import { Ripple } from '../ripple/Ripple';
import { IconUtils, UniqueComponentId, mergeProps } from '../utils/Utils';
import { FieldsetBase } from './FieldsetBase';

export const Fieldset = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = FieldsetBase.getProps(inProps, context);
    const [idState, setIdState] = React.useState(props.id);
    const [collapsedState, setCollapsedState] = React.useState(props.collapsed);
    const collapsed = props.toggleable ? (props.onToggle ? props.collapsed : collapsedState) : false;
    const elementRef = React.useRef(null);
    const contentRef = React.useRef(null);
    const headerId = idState + '_header';
    const contentId = idState + '_content';

    useStyle(FieldsetBase.css.styles, { name: 'primereact_fieldset_style' });

    const { ptm, cx } = FieldsetBase.setMetaData({
        props,
        state: {
            id: idState,
            collapsed: collapsed
        }
    });

    const toggle = (event) => {
        if (props.toggleable) {
            collapsed ? expand(event) : collapse(event);

            if (props.onToggle) {
                props.onToggle({
                    originalEvent: event,
                    value: !collapsed
                });
            }
        }

        event.preventDefault();
    };

    const expand = (event) => {
        if (!props.onToggle) {
            setCollapsedState(false);
        }

        props.onExpand && props.onExpand(event);
    };

    const collapse = (event) => {
        if (!props.onToggle) {
            setCollapsedState(true);
        }

        props.onCollapse && props.onCollapse(event);
    };

    useMountEffect(() => {
        if (!props.id) {
            setIdState(UniqueComponentId());
        }
    });

    const createContent = () => {
        const contentProps = mergeProps(
            {
                className: cx('content')
            },
            ptm('content')
        );

        const toggleableProps = mergeProps(
            {
                ref: contentRef,
                id: contentId,
                'aria-hidden': collapsed,
                role: 'region',
                'aria-labelledby': headerId,
                className: cx('toggleableContent')
            },
            ptm('toggleableContent')
        );

        return (
            <CSSTransition nodeRef={contentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={!collapsed} unmountOnExit options={props.transitionOptions}>
                <div {...toggleableProps}>
                    <div {...contentProps}>{props.children}</div>
                </div>
            </CSSTransition>
        );
    };

    const createToggleIcon = () => {
        if (props.toggleable) {
            const togglerIconProps = mergeProps(
                {
                    className: cx('togglericon')
                },
                ptm('togglericon')
            );

            const icon = collapsed ? props.expandIcon || <PlusIcon {...togglerIconProps} /> : props.collapseIcon || <MinusIcon {...togglerIconProps} />;
            const toggleIcon = IconUtils.getJSXIcon(icon, togglerIconProps, { props });

            return toggleIcon;
        }

        return null;
    };

    const createLegendContent = () => {
        const legendTextProps = mergeProps(
            {
                className: cx('legendTitle')
            },
            ptm('legendTitle')
        );

        const togglerProps = mergeProps(
            {
                id: headerId,
                'aria-expanded': !collapsed,
                'aria-controls': contentId,
                href: '#' + contentId,
                tabIndex: props.toggleable ? null : -1
            },
            ptm('toggler')
        );

        if (props.toggleable) {
            const toggleIcon = createToggleIcon();

            return (
                <a {...togglerProps}>
                    {toggleIcon}
                    <span {...legendTextProps}>{props.legend}</span>
                    <Ripple />
                </a>
            );
        }

        return (
            <span {...legendTextProps} id={headerId}>
                {props.legend}
            </span>
        );
    };

    const createLegend = () => {
        const legendProps = mergeProps(
            {
                className: cx('legend'),
                onClick: toggle
            },

            ptm('legend')
        );

        if (props.legend != null || props.toggleable) {
            const legendContent = createLegendContent();

            return <legend {...legendProps}>{legendContent}</legend>;
        }
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current,
        getContent: () => contentRef.current
    }));

    const rootProps = mergeProps(
        {
            id: idState,
            ref: elementRef,
            style: props.style,
            className: cx('root'),
            onClick: props.onClick
        },
        FieldsetBase.getOtherProps(props),
        ptm('root')
    );

    const legend = createLegend();
    const content = createContent();

    return (
        <fieldset {...rootProps}>
            {legend}
            {content}
        </fieldset>
    );
});

Fieldset.displayName = 'Fieldset';
