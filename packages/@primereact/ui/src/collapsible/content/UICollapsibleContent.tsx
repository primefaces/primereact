'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CollapsibleContentInstance } from '@primereact/types/shared/collapsible';
import { mergeProps } from '@primeuix/utils';
import { CollapsibleContent, defaultContentProps } from 'primereact/collapsible';
import * as React from 'react';

export const UICollapsibleContent = withComponent({
    name: 'Collapsible.Content',
    defaultProps: defaultContentProps,
    render(instance) {
        const { props, inProps: rootProps } = instance;

        return (
            <CollapsibleContent {...rootProps}>
                {(inInstance: CollapsibleContentInstance) => {
                    const { ptm: inPtm, collapsible } = inInstance;

                    const contentOuterProps = mergeProps(
                        {
                            className: collapsible?.cx('outer')
                        },
                        inPtm('outer'),
                        collapsible?.ptm('outer')
                    );

                    const contentInnerProps = mergeProps(
                        {
                            className: collapsible?.cx('inner')
                        },
                        inPtm('inner'),
                        collapsible?.ptm('inner')
                    );

                    return (
                        <div {...contentOuterProps}>
                            <div {...contentInnerProps}>
                                <Component as={React.Fragment} instance={inInstance} children={props.children} />
                            </div>
                        </div>
                    );
                }}
            </CollapsibleContent>
        );
    }
});
