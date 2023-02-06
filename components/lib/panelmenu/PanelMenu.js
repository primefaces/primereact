import * as React from 'react';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { classNames, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { PanelMenuBase } from './PanelMenuBase';
import { PanelMenuSub } from './PanelMenuSub';

export const PanelMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = PanelMenuBase.getProps(inProps);

        const [idState, setIdState] = React.useState(props.id);
        const [activeItemState, setActiveItemState] = React.useState(null);
        const [animationDisabled, setAnimationDisabled] = React.useState(false);
        const elementRef = React.useRef(null);
        const headerId = idState + '_header';
        const contentId = idState + '_content';

        const findActiveItem = () => {
            if (props.model) {
                if (props.multiple) {
                    return props.model.filter((item) => item.expanded);
                } else {
                    let activeItem = null;

                    props.model.forEach((item) => {
                        if (item.expanded) {
                            if (!activeItem) activeItem = item;
                            else item.expanded = false;
                        }
                    });

                    return activeItem;
                }
            }

            return null;
        };

        const onItemClick = (event, item) => {
            if (item.disabled) {
                event.preventDefault();

                return;
            }

            if (!item.url) {
                event.preventDefault();
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item: item
                });
            }

            let activeItem = activeItemState;
            let active = isItemActive(item);

            if (active) {
                item.expanded = false;
                setActiveItemState(props.multiple ? activeItem.filter((a_item) => a_item !== item) : null);
            } else {
                if (!props.multiple && activeItem) {
                    activeItem.expanded = false;
                }

                item.expanded = true;
                setActiveItemState(props.multiple ? [...(activeItem || []), item] : item);
            }
        };

        const isItemActive = (item) => {
            return activeItemState && (props.multiple ? activeItemState.indexOf(item) > -1 : activeItemState === item);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }

            setActiveItemState(findActiveItem());
        });

        useUpdateEffect(() => {
            setAnimationDisabled(true);
            setActiveItemState(findActiveItem());
        }, [props.model]);

        const onEnter = () => {
            setAnimationDisabled(false);
        };

        const createPanel = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const key = item.label + '_' + index;
            const active = isItemActive(item);
            const className = classNames('p-panelmenu-panel', item.className);
            const headerClassName = classNames('p-component p-panelmenu-header', { 'p-highlight': active, 'p-disabled': item.disabled });
            const submenuIconClassName = classNames('p-panelmenu-icon pi', { 'pi-chevron-right': !active, ' pi-chevron-down': active });
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const icon = IconUtils.getJSXIcon(item.icon, { className: 'p-menuitem-icon' }, { props });
            const submenuIcon = item.items && <span className={submenuIconClassName}></span>;
            const label = item.label && <span className="p-menuitem-text">{item.label}</span>;
            const contentWrapperClassName = classNames('p-toggleable-content', { 'p-toggleable-content-collapsed': !active });
            const menuContentRef = React.createRef();
            let content = (
                <a href={item.url || '#'} className="p-panelmenu-header-link" onClick={(e) => onItemClick(e, item)} aria-expanded={active} id={headerId} aria-controls={contentId} aria-disabled={item.disabled}>
                    {submenuIcon}
                    {icon}
                    {label}
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => onItemClick(event, item),
                    className: 'p-panelmenu-header-link',
                    labelClassName: 'p-menuitem-text',
                    submenuIconClassName,
                    iconClassName,
                    element: content,
                    props,
                    leaf: !item.items,
                    active
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            return (
                <div key={key} className={className} style={item.style}>
                    <div className={headerClassName} style={item.style}>
                        {content}
                    </div>
                    <CSSTransition nodeRef={menuContentRef} classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} onEnter={onEnter} disabled={animationDisabled} in={active} unmountOnExit options={props.transitionOptions}>
                        <div ref={menuContentRef} className={contentWrapperClassName} role="region" id={contentId} aria-labelledby={headerId}>
                            <div className="p-panelmenu-content">
                                <PanelMenuSub menuProps={props} model={item.items} className="p-panelmenu-root-submenu" multiple={props.multiple} />
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            );
        };

        const createPanels = () => {
            return props.model ? props.model.map(createPanel) : null;
        };

        const otherProps = PanelMenuBase.getOtherProps(props);
        const className = classNames('p-panelmenu p-component', props.className);
        const panels = createPanels();

        return (
            <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps}>
                {panels}
            </div>
        );
    })
);

PanelMenu.displayName = 'PanelMenu';
