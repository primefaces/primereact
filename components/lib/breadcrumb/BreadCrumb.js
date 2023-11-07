import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect } from '../hooks/Hooks';
import { ChevronRightIcon } from '../icons/chevronright';
import { IconUtils, mergeProps, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { BreadCrumbBase } from './BreadCrumbBase';

export const BreadCrumb = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = BreadCrumbBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const elementRef = React.useRef(null);
        const { ptm, cx, isUnstyled } = BreadCrumbBase.setMetaData({
            props,
            state: {
                id: idState
            }
        });

        useHandleStyle(BreadCrumbBase.css.styles, isUnstyled, { name: 'breadcrumb' });

        const itemClick = (event, item) => {
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
                    item
                });
            }
        };

        const createHome = (index) => {
            const home = props.home;

            if (home) {
                if (home.visible === false) {
                    return null;
                }

                const { icon: _icon, target, url, disabled, style, className: _className, template, label: _label } = home;
                const iconProps = mergeProps(
                    {
                        className: cx('icon')
                    },
                    ptm('icon')
                );
                const icon = IconUtils.getJSXIcon(_icon, { ...iconProps }, { props });
                const actionProps = mergeProps(
                    {
                        href: url || '#',
                        className: cx('action'),
                        'aria-disabled': disabled,
                        target,
                        onClick: (event) => itemClick(event, home)
                    },
                    ptm('action')
                );

                const labelProps = mergeProps(
                    {
                        className: cx('label')
                    },
                    ptm('label')
                );
                const label = _label && <span {...labelProps}>{_label}</span>;
                let content = (
                    <a {...actionProps}>
                        {icon}
                        {label}
                    </a>
                );

                if (template) {
                    const defaultContentOptions = {
                        onClick: (event) => itemClick(event, home),
                        className: 'p-menuitem-link',
                        labelClassName: 'p-menuitem-text',
                        element: content,
                        props
                    };

                    content = ObjectUtils.getJSXElement(template, home, defaultContentOptions);
                }

                const key = idState + '_home';
                const menuitemProps = mergeProps(
                    {
                        id: key,
                        key,
                        className: cx('home', { _className, disabled }),
                        style
                    },
                    ptm('home')
                );

                return <li {...menuitemProps}>{content}</li>;
            }

            return null;
        };

        const createSeparator = (index) => {
            const key = idState + '_sep_' + index;
            const separatorIconProps = mergeProps(
                {
                    className: cx('separatorIcon')
                },
                ptm('separatorIcon')
            );
            const icon = props.separatorIcon || <ChevronRightIcon {...separatorIconProps} />;
            const separatorIcon = IconUtils.getJSXIcon(icon, { ...separatorIconProps }, { props });
            const separatorProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('separator'),
                    role: 'separator'
                },
                ptm('separator')
            );

            return <li {...separatorProps}>{separatorIcon}</li>;
        };

        const createMenuitem = (item, index) => {
            if (item.visible === false) {
                return null;
            }

            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );
            const label = item.label && <span {...labelProps}>{item.label}</span>;
            const actionProps = mergeProps(
                {
                    href: item.url || '#',
                    className: cx('action'),
                    target: item.target,
                    onClick: (event) => itemClick(event, item),
                    'aria-disabled': item.disabled
                },
                ptm('action')
            );
            let content = <a {...actionProps}>{label}</a>;

            if (item.template) {
                const defaultContentOptions = {
                    onClick: (event) => itemClick(event, item),
                    className: 'p-menuitem-link',
                    labelClassName: 'p-menuitem-text',
                    element: content,
                    props
                };

                content = ObjectUtils.getJSXElement(item.template, item, defaultContentOptions);
            }

            const key = item.id || idState + '_' + index;
            const menuitemProps = mergeProps(
                {
                    id: key,
                    key,
                    className: cx('menuitem', { item }),
                    style: item.style
                },
                ptm('menuitem')
            );

            return <li {...menuitemProps}>{content}</li>;
        };

        const createMenuitems = () => {
            if (props.model) {
                const items = props.model.map((item, index) => {
                    if (item.visible === false) {
                        return null;
                    }

                    const menuitem = createMenuitem(item, index);
                    const separator = index === props.model.length - 1 ? null : createSeparator(index);
                    const key = idState + '_' + index;

                    return (
                        <React.Fragment key={key}>
                            {menuitem}
                            {separator}
                        </React.Fragment>
                    );
                });

                return items;
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

        const home = createHome();
        const items = createMenuitems();
        const separator = createSeparator('home');
        const menuProps = mergeProps(
            {
                className: cx('menu')
            },
            ptm('menu')
        );
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: cx('root'),
                style: props.style,
                'aria-label': 'Breadcrumb'
            },
            BreadCrumbBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <nav {...rootProps}>
                <ul {...menuProps}>
                    {home}
                    {separator}
                    {items}
                </ul>
            </nav>
        );
    })
);

BreadCrumb.displayName = 'BreadCrumb';
