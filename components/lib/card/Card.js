import * as React from 'react';
import { ObjectUtils, mergeProps } from '../utils/Utils';
import { CardBase } from './CardBase';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const Card = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = CardBase.getProps(inProps, context);

    const elementRef = React.useRef(ref);

    const { ptm, cx, isUnstyled } = CardBase.setMetaData({
        props
    });

    useHandleStyle(CardBase.css.styles, isUnstyled, { name: 'card' });

    const createHeader = () => {
        const headerProps = mergeProps(
            [
                {
                    className: cx('header')
                },
                ptm('header')
            ],
            { useTailwind: context.useTailwind }
        );

        if (props.header) {
            return <div {...headerProps}>{ObjectUtils.getJSXElement(props.header, props)}</div>;
        }

        return null;
    };

    const createBody = () => {
        const titleProps = mergeProps(
            [
                {
                    className: cx('title')
                },
                ptm('title')
            ],
            { useTailwind: context.useTailwind }
        );

        const title = props.title && <div {...titleProps}>{ObjectUtils.getJSXElement(props.title, props)}</div>;

        const subTitleProps = mergeProps(
            [
                {
                    className: cx('subTitle')
                },
                ptm('subTitle')
            ],
            { useTailwind: context.useTailwind }
        );

        const subTitle = props.subTitle && <div {...subTitleProps}>{ObjectUtils.getJSXElement(props.subTitle, props)}</div>;

        const contentProps = mergeProps(
            [
                {
                    className: cx('content')
                },
                ptm('content')
            ],
            { useTailwind: context.useTailwind }
        );

        const children = props.children && <div {...contentProps}>{props.children}</div>;

        const footerProps = mergeProps(
            [
                {
                    className: cx('footer')
                },
                ptm('footer')
            ],
            { useTailwind: context.useTailwind }
        );

        const footer = props.footer && <div {...footerProps}>{ObjectUtils.getJSXElement(props.footer, props)}</div>;

        const bodyProps = mergeProps(
            [
                {
                    className: cx('body')
                },
                ptm('body')
            ],
            { useTailwind: context.useTailwind }
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
        [
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className: cx('root')
            },
            CardBase.getOtherProps(props),
            ptm('root')
        ],
        { useTailwind: context.useTailwind }
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
