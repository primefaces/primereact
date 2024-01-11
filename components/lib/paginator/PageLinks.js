import * as React from 'react';
import { ariaLabel, PrimeReactContext } from '../api/Api';
import { useMergeProps } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { classNames, ObjectUtils } from '../utils/Utils';
import { PageLinksBase } from './PaginatorBase';

export const PageLinks = React.memo((inProps) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = PageLinksBase.getProps(inProps, context);
    const { ptm, cx } = props;

    const getPTOptions = (pageLink, key) => {
        return ptm(key, {
            hostName: props.hostName,
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
                    className: cx('pageButton', { pageLink, startPageInView, endPageInView, page: props.page }),
                    disabled: props.disabled,
                    'aria-label': ariaLabel('pageLabel', { page: pageLink }),
                    'aria-current': pageLink - 1 === props.page ? 'true' : undefined
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
                    ariaLabel: ariaLabel('pageLabel', { page: pageLink }),
                    ariaCurrent: pageLink - 1 === props.page ? 'true' : undefined,
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
            className: cx('pages')
        },
        ptm('pages', { hostName: props.hostName })
    );

    return <span {...pagesProps}>{elements}</span>;
});

PageLinks.displayName = 'PageLinks';
