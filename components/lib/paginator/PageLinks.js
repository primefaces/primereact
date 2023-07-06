import * as React from 'react';
import { ariaLabel, PrimeReactContext } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, mergeProps, ObjectUtils } from '../utils/Utils';
import { PageLinksBase } from './PaginatorBase';

export const PageLinks = React.memo((inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = PageLinksBase.getProps(inProps, context);

    const getPTOptions = (pageLink, key) => {
        return props.ptm(key, {
            context: {
                active: pageLink - 1 === props.page
            }
        });
    };

    const onPageLinkClick = (event, pageLink) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                value: pageLink
            });
        }

        event.preventDefault();
    };

    let elements;

    if (props.value) {
        const startPageInView = props.value[0];
        const endPageInView = props.value[props.value.length - 1];

        elements = props.value.map((pageLink) => {
            const className = classNames('p-paginator-page p-paginator-element p-link', {
                'p-paginator-page-start': pageLink === startPageInView,
                'p-paginator-page-end': pageLink === endPageInView,
                'p-highlight': pageLink - 1 === props.page
            });

            const pageButtonProps = mergeProps(
                {
                    type: 'button',
                    onClick: (e) => onPageLinkClick(e, pageLink),
                    className,
                    disabled: props.disabled,
                    'aria-label': ariaLabel('pageLabel', { page: pageLink })
                },
                getPTOptions(pageLink, 'pageButton')
            );

            let element = (
                <button {...pageButtonProps}>
                    {pageLink}
                    <Ripple />
                </button>
            );

            if (props.template) {
                const defaultOptions = {
                    onClick: (e) => onPageLinkClick(e, pageLink),
                    className,
                    view: {
                        startPage: startPageInView - 1,
                        endPage: endPageInView - 1
                    },
                    page: pageLink - 1,
                    currentPage: props.page,
                    totalPages: props.pageCount,
                    element,
                    props
                };

                element = ObjectUtils.getJSXElement(props.template, defaultOptions);
            }

            return <React.Fragment key={pageLink}>{element}</React.Fragment>;
        });
    }

    const pagesProps = mergeProps(
        {
            className: 'p-paginator-pages'
        },
        props.ptm('pages')
    );

    return <span {...pagesProps}>{elements}</span>;
});

PageLinks.displayName = 'PageLinks';
