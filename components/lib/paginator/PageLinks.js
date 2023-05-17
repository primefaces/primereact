import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { PageLinksBase } from './PaginatorBase';

export const PageLinks = React.memo((inProps) => {
    const props = PageLinksBase.getProps(inProps);

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

            let element = (
                <button type="button" className={className} onClick={(e) => onPageLinkClick(e, pageLink)} aria-label={`${ariaLabel('pageLabel')} ${pageLink + 1}`}>
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

    return <span className="p-paginator-pages">{elements}</span>;
});

PageLinks.displayName = 'PageLinks';
