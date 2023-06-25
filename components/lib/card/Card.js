import * as React from 'react';
import { classNames, ObjectUtils, mergeProps } from '../utils/Utils';
import { CardBase } from './CardBase';
import { PrimeReactContext } from '../api/Api';

export const Card = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = CardBase.getProps(inProps, context);

    const elementRef = React.useRef(ref);

    const { ptm } = CardBase.setMetaData({
        props
    });

    const createHeader = () => {
        const headerProps = mergeProps(
            {
                className: 'p-card-header'
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
                className: 'p-card-title'
            },
            ptm('title')
        );

        const title = props.title && <div {...titleProps}>{ObjectUtils.getJSXElement(props.title, props)}</div>;

        const subTitleProps = mergeProps(
            {
                className: 'p-card-subtitle'
            },
            ptm('subTitle')
        );

        const subTitle = props.subTitle && <div {...subTitleProps}>{ObjectUtils.getJSXElement(props.subTitle, props)}</div>;

        const contentProps = mergeProps(
            {
                className: 'p-card-content'
            },
            ptm('content')
        );

        const children = props.children && <div {...contentProps}>{props.children}</div>;

        const footerProps = mergeProps(
            {
                className: 'p-card-footer'
            },
            ptm('footer')
        );

        const footer = props.footer && <div {...footerProps}>{ObjectUtils.getJSXElement(props.footer, props)}</div>;

        const bodyProps = mergeProps(
            {
                className: 'p-card-body'
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
            className: classNames('p-card p-component', props.className)
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
