'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useCard } from '@primereact/headless/card';
import { styles } from '@primereact/styles/card';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { CardBody } from './body/CardBody';
import { CardCaption } from './caption/CardCaption';
import { CardProvider } from './Card.context';
import { defaultProps } from './Card.props';
import { CardContent } from './content/CardContent';
import { CardFooter } from './footer/CardFooter';
import { CardHeader } from './header/CardHeader';
import { CardSubtitle } from './subtitle/CardSubtitle';
import { CardTitle } from './title/CardTitle';

export const Card = withComponent({
    name: 'Card',
    defaultProps,
    styles,
    setup(instance) {
        const card = useCard(instance.inProps);

        return card;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <CardProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </CardProvider>
        );
    },
    components: {
        Title: CardTitle,
        Header: CardHeader,
        Content: CardContent,
        Subtitle: CardSubtitle,
        Footer: CardFooter,
        Caption: CardCaption,
        Body: CardBody
    }
});
