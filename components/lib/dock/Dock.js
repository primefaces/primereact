import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils, useMergeProps, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { DockBase } from './DockBase';

export const Dock = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const [currentIndexState, setCurrentIndexState] = React.useState(-3);
        const context = React.useContext(PrimeReactContext);
        const props = DockBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const { ptm, cx, isUnstyled } = DockBase.setMetaData({
            props,
            state: {
                id: idState,
                currentIndex: currentIndexState
            }
        });
        const elementRef = React.useRef(null);

        useHandleStyle(DockBase.css.styles, isUnstyled, { name: 'dock' });

        const getPTOptions = (key, item, index) => {
            return ptm(key, {
                context: {
                    index,
                    item
                }
            });
        };

        const onListMouseLeave = () => {
            setCurrentIndexState(-3);
        };

        const onItemMouseEnter = (index) => {
            setCurrentIndexState(index);
        };

        const onItemClick = (e, item) => {
            if (item.command) {
                item.command({ originalEvent: e, item });
            }

            e.preventDefault();
        };

        const createItem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const { disabled, icon: _icon, label, template, url, target } = item;
            const key = item.id || idState + '_' + index;
            const contentClassName = classNames('p-dock-action', { 'p-disabled': disabled });
            const iconClassName = classNames('p-dock-action-icon', _icon);
            const iconProps = mergeProps(
                {
                    className: cx('icon')
                },
                getPTOptions('icon', item, index)
            );
            const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });
            const actionProps = mergeProps(
                {
                    href: url || '#',
                    role: 'menuitem',
                    className: cx('action', { disabled }),
                    target,
                    'data-pr-tooltip': label,
                    onClick: (e) => onItemClick(e, item)
                },
                getPTOptions('action', item, index)
            );

            let content = (
                <a {...actionProps}>
                    {icon}
                    <Ripple />
                </a>
            );

            if (template) {
                const defaultContentOptions = {
                    onClick: (e) => onItemClick(e, item),
                    className: contentClassName,
                    iconClassName,
                    element: content,
                    props,
                    index
                };

                content = ObjectUtils.getJSXElement(template, item, defaultContentOptions);
            }

            const menuitemProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('menuitem', { currentIndexState, index }),
                    role: 'none',
                    onMouseEnter: () => onItemMouseEnter(index)
                },
                getPTOptions('menuitem', item, index)
            );

            return <li {...menuitemProps}>{content}</li>;
        };

        const createItems = () => {
            return props.model ? props.model.map(createItem) : null;
        };

        const createHeader = () => {
            if (props.header) {
                const header = ObjectUtils.getJSXElement(props.header, { props });
                const headerProps = mergeProps(
                    {
                        className: cx('header')
                    },
                    ptm('header')
                );

                return <div {...headerProps}>{header}</div>;
            }

            return null;
        };

        const createList = () => {
            const items = createItems();
            const menuProps = mergeProps(
                {
                    className: cx('menu'),
                    role: 'menu',
                    onMouseLeave: onListMouseLeave
                },
                ptm('menu')
            );

            return <ul {...menuProps}>{items}</ul>;
        };

        const createFooter = () => {
            if (props.footer) {
                const footer = ObjectUtils.getJSXElement(props.footer, { props });
                const footerProps = mergeProps(
                    {
                        className: cx('footer')
                    },
                    ptm('footer')
                );

                return <div {...footerProps}>{footer}</div>;
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

        const header = createHeader();
        const list = createList();
        const footer = createFooter();
        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root')),
                style: props.style
            },
            DockBase.getOtherProps(props),
            ptm('root')
        );

        const containerProps = mergeProps(
            {
                className: cx('container')
            },
            ptm('container')
        );

        return (
            <div id={props.id} ref={elementRef} {...rootProps}>
                <div {...containerProps}>
                    {header}
                    {list}
                    {footer}
                </div>
            </div>
        );
    })
);

Dock.displayName = 'Dock';
