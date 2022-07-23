import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { Button } from '../button/Button';
import { classNames, ObjectUtils } from '../utils/Utils';

export const PageLinks = React.memo((props) => {

    const onPageLinkClick = (event, pageLink) => {
        if (props.onClick) {
            props.onClick({
                originalEvent: event,
                value: pageLink
            });
        }

        event.preventDefault();
    }

    let elements;

    if (props.value) {
        const startPageInView = props.value[0];
        const endPageInView = props.value[props.value.length - 1];

        elements = props.value.map((pageLink) => {
            const className = classNames('p-paginator-page p-paginator-element p-link', {
                'p-paginator-page-start': pageLink === startPageInView,
                'p-paginator-page-end': pageLink === endPageInView,
                'p-highlight': ((pageLink - 1) === props.page)
            });

            let element = (
                <Button type='button' className={className} onClick={(e) => onPageLinkClick(e, pageLink)} aria-label={`${ariaLabel('pageLabel')} ${pageLink + 1}`}>
                    {pageLink}
                </Button>
            );

            if (props.template) {
                const defaultOptions = {
                    onClick: (e) => onPageLinkClick(e, pageLink),
                    className,
                    view: {
                        startPage: startPageInView - 1,
                        endPage: endPageInView - 1
                    },
                    page: (pageLink - 1),
                    currentPage: props.page,
                    totalPages: props.pageCount,
                    element,
                    props
                };

                element = ObjectUtils.getJSXElement(props.template, defaultOptions);
            }

            return (
                <React.Fragment key={pageLink}>
                    {element}
                </React.Fragment>
            )
        });
    }

    return <span className="p-paginator-pages">{elements}</span>
});

PageLinks.displayName = 'PageLinks';
PageLinks.defaultProps = {
    __TYPE: 'PageLinks',
    value: null,
    page: null,
    rows: null,
    pageCount: null,
    links: null,
    template: null
}
