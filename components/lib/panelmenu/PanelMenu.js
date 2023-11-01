import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { ChevronRightIcon } from '../icons/chevronright';
import { IconUtils, ObjectUtils, UniqueComponentId, classNames, useMergeProps } from '../utils/Utils';
import { PanelMenuBase } from './PanelMenuBase';
import { PanelMenuSub } from './PanelMenuSub';

export const PanelMenu = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = PanelMenuBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeItemState, setActiveItemState] = React.useState(null);
        const [animationDisabled, setAnimationDisabled] = React.useState(false);
        const elementRef = React.useRef(null);
        const headerId = idState + '_header';
        const contentId = idState + '_content';

        const { ptm, cx, isUnstyled } = PanelMenuBase.setMetaData({
            props,
            state: {
                id: idState,
                activeItem: activeItemState,
                animationDisabled: animationDisabled
            }
        });

        useHandleStyle(PanelMenuBase.css.styles, isUnstyled, { name: 'panelmenu' });

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
            if (item.disabled || !item.items) {
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

        const getPTOptions = (item, key) => {
            return ptm(key, {
                context: {
                    active: isItemActive(item)
                }
            });
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

            const key = item.id || idState + '_' + index;
            const active = isItemActive(item);
            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const headerIconProps = mergeProps(
                {
                    className: cx('headerIcon', { item })
                },
                getPTOptions(item, 'headerIcon')
            );
            const icon = IconUtils.getJSXIcon(item.icon, { ...headerIconProps }, { props });
            const submenuIconClassName = 'p-panelmenu-icon';
            const headerSubmenuIconProps = mergeProps(
                {
                    className: cx('headerSubmenuIcon')
                },
                getPTOptions(item, 'headerSubmenuIcon')
            );
            const submenuIcon = item.items && IconUtils.getJSXIcon(active ? props.submenuIcon || <ChevronDownIcon {...headerSubmenuIconProps} /> : props.submenuIcon || <ChevronRightIcon {...headerSubmenuIconProps} />);
            const headerLabelProps = mergeProps(
                {
                    className: cx('headerLabel')
                },
                getPTOptions(item, 'headerLabel')
            );
            const label = item.label && <span {...headerLabelProps}>{item.label}</span>;
            const menuContentRef = React.createRef();
            const headerActionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('headerAction'),
                    onClick: (e) => onItemClick(e, item),
                    'aria-expanded': active,
                    id: headerId,
                    'aria-controls': contentId,
                    'aria-disabled': item.disabled
                },
                getPTOptions(item, 'headerAction')
            );
            let content = (
                <a {...headerActionProps}>
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

            const panelProps = mergeProps(
                {
                    key: key,
                    className: cx('panel', { item }),
                    style: item.style
                },
                getPTOptions(item, 'panel')
            );

            const headerProps = mergeProps(
                {
                    className: cx('header', { active, item }),
                    style: item.style
                },
                getPTOptions(item, 'header')
            );

            const menuContentProps = mergeProps(
                {
                    className: cx('menuContent')
                },
                getPTOptions(item, 'menuContent')
            );

            const toggleableContentProps = mergeProps(
                {
                    className: cx('toggleableContent', { active }),
                    role: 'region',
                    'aria-labelledby': headerId
                },
                getPTOptions(item, 'toggleableContent')
            );

            const transitionProps = mergeProps(
                {
                    classNames: cx('transition'),
                    timeout: { enter: 1000, exit: 450 },
                    onEnter: onEnter,
                    disabled: animationDisabled,
                    in: active,
                    unmountOnExit: true,
                    options: props.transitionOptions
                },
                getPTOptions(item, 'transition')
            );

            return (
                <div {...panelProps}>
                    <div {...headerProps}>{content}</div>
                    <CSSTransition nodeRef={menuContentRef} {...transitionProps}>
                        <div id={contentId} ref={menuContentRef} {...toggleableContentProps}>
                            <div {...menuContentProps}>
                                <PanelMenuSub hostName="PanelMenu" id={key} menuProps={props} model={item.items} className="p-panelmenu-root-submenu" multiple={props.multiple} submenuIcon={props.submenuIcon} root ptm={ptm} cx={cx} />
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            );
        };

        const createPanels = () => {
            return props.model ? props.model.map(createPanel) : null;
        };

        const panels = createPanels();
        const rootProps = mergeProps(
            {
                className: cx('root'),
                style: props.style
            },
            PanelMenuBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div id={props.id} ref={elementRef} {...rootProps}>
                {panels}
            </div>
        );
    })
);

PanelMenu.displayName = 'PanelMenu';
