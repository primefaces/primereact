import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

export class PageLinks extends Component {

    static defaultProps = {
        value: null,
        page: null,
        rows: null,
        pageCount: null,
        links: null,
        template: null
    }

    static propTypes = {
        value: PropTypes.array,
        page: PropTypes.number,
        rows: PropTypes.number,
        pageCount: PropTypes.number,
        onClick: PropTypes.func,
        template: PropTypes.any
    }

    onPageLinkClick(event, pageLink) {
        if (this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: pageLink
            });
        }

        event.preventDefault();
    }

    render() {
        let elements;

        if (this.props.value) {
            let startPageInView = this.props.value[0];
            let endPageInView = this.props.value[this.props.value.length - 1];

            elements = this.props.value.map((pageLink, i) => {
                const className = classNames('p-paginator-page p-paginator-element p-link', {
                    'p-paginator-page-start': pageLink === startPageInView,
                    'p-paginator-page-end': pageLink === endPageInView,
                    'p-highlight': ((pageLink - 1) === this.props.page)
                });

                let element = (
                    <button type="button" className={className} onClick={(e) => this.onPageLinkClick(e, pageLink)}>
                        {pageLink}
                        <Ripple />
                    </button>
                );

                if (this.props.template) {
                    const defaultOptions = {
                        onClick: (e) => this.onPageLinkClick(e, pageLink),
                        className,
                        view: {
                            startPage: startPageInView - 1,
                            endPage: endPageInView - 1
                        },
                        page: (pageLink - 1),
                        currentPage: this.props.page,
                        totalPages: this.props.pageCount,
                        element,
                        props: this.props
                    };

                    element = ObjectUtils.getJSXElement(this.props.template, defaultOptions);
                }

                return (
                    <React.Fragment key={pageLink}>
                        {element}
                    </React.Fragment>
                )
            });
        }

        return <span className="p-paginator-pages">{elements}</span>;
    }
}
