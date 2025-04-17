'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCard } from '@primereact/headless/card';
import { styles } from '@primereact/styles/card';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CardBody } from './body';
import { CardCaption } from './caption';
import { defaultProps } from './Card.props';
import { CardContent } from './content';
import { CardFooter } from './footer';
import { CardHeader } from './header';
import { CardSubtitle } from './subtitle';
import { CardTitle } from './title';

export const Card = withComponent({
    defaultProps,
    styles,
    setup: (instance) => {
        const card = useCard(instance.inProps);

        return card;
    },
    render: (instance) => {
        const {
            id,
            props,
            ptmi,
            cx,
            // element refs
            elementRef
        } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                {props.children}
            </Component>
        );
    },
    components: {
        Body: CardBody,
        Caption: CardCaption,
        Content: CardContent,
        Footer: CardFooter,
        Header: CardHeader,
        Subtitle: CardSubtitle,
        Title: CardTitle
    }
});
