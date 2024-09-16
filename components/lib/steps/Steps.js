import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, classNames } from '../utils/Utils';
import { StepsBase } from './StepsBase';

export const Steps = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = StepsBase.getProps(inProps, context);

        const [idState, setIdState] = React.useState(props.id);
        const [activeIndexState, setActiveIndexState] = React.useState(props.activeIndex);
        const elementRef = React.useRef(null);
        const listRef = React.useRef(null);
        const count = React.Children.count(props.children);

        const metaData = {
            props,
            state: {
                id: idState,
                activeIndex: activeIndexState
            }
        };

        const { ptm, ptmo, cx, isUnstyled } = StepsBase.setMetaData({
            ...metaData
        });

        useHandleStyle(StepsBase.css.styles, isUnstyled, { name: 'steps' });

        const getStepPT = (step, key, index) => {
            const stepMetaData = {
                // props: step.props,
                parent: metaData,
                context: {
                    index,
                    count,
                    first: index === 0,
                    last: index === count - 1,
                    active: index === activeIndexState,
                    disabled: getStepProp(step, 'disabled')
                }
            };

            return mergeProps(ptm(`step.${key}`, { step: stepMetaData }), ptm(`steps.${key}`, { steps: stepMetaData }), ptm(`steps.${key}`, stepMetaData), ptmo(getStepProp(step, 'pt'), key, stepMetaData));
        };

        const getStepProp = (step, name) => StepsBase.getCProp(step, name);

        const itemClick = (event, item, index) => {
            if (props.readOnly || item.disabled) {
                event.preventDefault();

                return;
            }

            if (props.onSelect) {
                props.onSelect({
                    originalEvent: event,
                    item,
                    index
                });
            }

            if (item.command) {
                item.command({
                    originalEvent: event,
                    item,
                    index
                });
            }

            setActiveIndexState(index);

            if (!item.url) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        const onItemKeyDown = (event, item, index) => {
            if (props.readOnly) {
                return;
            }

            switch (event.code) {
                case 'ArrowRight':
                    navigateToNextItem(event.target);
                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    navigateToPrevItem(event.target);
                    event.preventDefault();
                    break;

                case 'Home':
                    navigateToFirstItem(event.target);
                    event.preventDefault();
                    break;

                case 'End':
                    navigateToLastItem(event.target);
                    event.preventDefault();
                    break;

                case 'Tab':
                    //no op
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    itemClick(event, item, index);
                    event.preventDefault();
                    break;

                default:
                    break;
            }
        };

        const navigateToNextItem = (target) => {
            const nextItem = findNextItem(target);

            nextItem && setFocusToMenuitem(target, nextItem);
        };

        const navigateToPrevItem = (target) => {
            const prevItem = findPrevItem(target);

            prevItem && setFocusToMenuitem(target, prevItem);
        };

        const navigateToFirstItem = (target) => {
            const firstItem = findFirstItem(target);

            firstItem && setFocusToMenuitem(target, firstItem);
        };

        const navigateToLastItem = (target) => {
            const lastItem = findLastItem(target);

            lastItem && setFocusToMenuitem(target, lastItem);
        };

        const findNextItem = (item) => {
            const nextItem = item.parentElement.nextElementSibling;

            return nextItem ? nextItem.children[0] : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.parentElement.previousElementSibling;

            return prevItem ? prevItem.children[0] : null;
        };

        const findFirstItem = () => {
            const firstSibling = DomHandler.findSingle(listRef.current, '[data-pc-section="menuitem"]');

            return firstSibling ? firstSibling.children[0] : null;
        };

        const findLastItem = () => {
            const siblings = DomHandler.find(listRef.current, '[data-pc-section="menuitem"]');

            return siblings ? siblings[siblings.length - 1].children[0] : null;
        };

        const setFocusToMenuitem = (target, focusableItem) => {
            target.tabIndex = '-1';
            focusableItem.tabIndex = '0';

            setTimeout(() => focusableItem.focus(), 0);
        };

        const setFocusToFirstItem = () => {
            const firstItem = findFirstItem();

            firstItem.tabIndex = '0';
            firstItem.focus();
        };

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const key = item.id || idState + '_' + index;
            const active = index === activeIndexState;
            const disabled = item.disabled || (index !== activeIndexState && props.readOnly);

            const iconClassName = classNames('p-menuitem-icon', item.icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon', { item })
                },
                getStepPT(item, 'icon', index)
            );

            const icon = IconUtils.getJSXIcon(item.icon, { ...iconProps }, { props });

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                getStepPT(item, 'label', index)
            );

            const label = item.label && <span {...labelProps}>{item.label}</span>;

            const stepProps = mergeProps(
                {
                    className: cx('step')
                },
                getStepPT(item, 'step', index)
            );

            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action'),
                    tabIndex: '-1',
                    onFocus: (event) => event.stopPropagation(),
                    target: item.target,
                    onKeyDown: (event) => onItemKeyDown(event, item, index),
                    onClick: (event) => itemClick(event, item, index)
                },
                getStepPT(item, 'action', index)
            );

            let content = (
                <a {...actionProps}>
                    <span {...stepProps}>{index + 1}</span>
                    {icon}
                    {label}
                </a>
            );

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, item, index),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-steps-title',
                    numberClassName: 'p-steps-number',
                    iconClassName,
                    'aria-current': active,
                    element: content,
                    props,
                    active,
                    disabled
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const menuItemProps = mergeProps(
                {
                    id: key,
                    className: cx('menuitem', { active, disabled, item }),
                    style: item.style
                },
                ptm('menuitem')
            );

            return (
                <li {...menuItemProps} key={key}>
                    {content}
                </li>
            );
        };

        const createItems = () => {
            const menuProps = mergeProps(
                {
                    ref: listRef,
                    tabIndex: props.readOnly ? null : '0',
                    onFocus: () => {
                        if (!props.readOnly) {
                            setFocusToFirstItem();
                        }
                    },
                    onBlur: () => setFocusToFirstItem
                },
                ptm('menu')
            );

            if (props.model) {
                const items = props.model.map(createItem);

                return <ol {...menuProps}>{items}</ol>;
            }

            return null;
        };

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root')),
                style: props.style
            },
            StepsBase.getOtherProps(props),
            ptm('root')
        );

        const items = createItems();

        return <nav {...rootProps}>{items}</nav>;
    })
);

Steps.displayName = 'Steps';
