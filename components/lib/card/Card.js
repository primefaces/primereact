import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils } from '../utils/Utils';
import { CardBase } from './CardBase';

export const Card = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = CardBase.getProps(inProps, context);

    const elementRef = React.useRef(ref);

    const { ptm, cx, isUnstyled } = CardBase.setMetaData({
        props
    });

    useHandleStyle(CardBase.css.styles, isUnstyled, { name: 'card' });

    const createHeader = () => {
        const headerProps = mergeProps(
            {
                className: cx('header')
            },
            ptm('header')
        );

        if (props.header) {
            return <div {...headerProps}>{ObjectUtils.getJSXElement(props.header, props)}</div>;
        }

        return null;
    };

    const createBody = () => {
        const titleProps = mergeProps(
            {
                className: cx('title')
            },
            ptm('title')
        );

        const title = props.title && <div {...titleProps}>{ObjectUtils.getJSXElement(props.title, props)}</div>;

        const subTitleProps = mergeProps(
            {
                className: cx('subTitle')
            },
            ptm('subTitle')
        );

        const subTitle = props.subTitle && <div {...subTitleProps}>{ObjectUtils.getJSXElement(props.subTitle, props)}</div>;

        const contentProps = mergeProps(
            {
                className: cx('content')
            },
            ptm('content')
        );

        const children = props.children && <div {...contentProps}>{props.children}</div>;

        const footerProps = mergeProps(
            {
                className: cx('footer')
            },
            ptm('footer')
        );

        const footer = props.footer && <div {...footerProps}>{ObjectUtils.getJSXElement(props.footer, props)}</div>;

        const bodyProps = mergeProps(
            {
                className: cx('body')
            },
            ptm('body')
        );

        return (
            <div {...bodyProps}>
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        );
    };

    React.useEffect(() => {
        ObjectUtils.combinedRefs(elementRef, ref);
    }, [elementRef, ref]);

    const rootProps = mergeProps(
        {
            id: props.id,
            ref: elementRef,
            style: props.style,
            className: cx('root')
        },
        CardBase.getOtherProps(props),
        ptm('root')
    );

    const header = createHeader();
    const body = createBody();

    return (
        <div {...rootProps}>
            {header}
            {body}
        </div>
    );
});

Card.displayName = 'Card';
