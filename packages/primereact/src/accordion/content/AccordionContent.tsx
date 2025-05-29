'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './AccordionContent.props';

export const AccordionContent = withComponent({
    defaultProps,
    render: (instance) => {
        const { props, ptmi, getParent } = instance;
        const accordion = getParent('Accordion');
        const accordionpanel = getParent('AccordionPanel');

        const isItemActive = accordion?.isItemActive(accordionpanel?.props.value);

        const containerProps = mergeProps(
            {
                className: 'p-accordioncontent',
                role: 'region',
                'data-p-active': isItemActive,
                'aria-labelledby': `${accordion?.id}_accordionheader_${accordionpanel?.props.value}`
            },
            accordion?.ptm('accordioncontent'),
            ptmi('root')
        );

        const createContentElement = () => {
            const contentProps = mergeProps(
                {
                    className: 'p-accordioncontent-content'
                },
                accordion?.ptm('content')
            );

            return <div {...contentProps}>{props.children}</div>;
        };

        const content = createContentElement();

        return (
            <Component as={props.as || 'div'} {...containerProps}>
                {isItemActive ? content : null}
            </Component>
        );
    }
});
