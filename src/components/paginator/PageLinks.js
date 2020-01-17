import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PageLinks extends Component {

    static defaultProps = {
        value: null,
        page: null,
        links: null
    }

    static propTypes = {
        value: PropTypes.array,
        page: PropTypes.number,
        onClick: PropTypes.func
    }

    onPageLinkClick(event, pageLink) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                value: pageLink
            });
        }

        event.preventDefault();
    }

    render() {
        let elements = this.props.value.map((pageLink, i) => {
            let pageClassName = classNames('p-paginator-page p-paginator-element p-link', {
                'p-highlight': ((pageLink - 1) === this.props.page)
            });

            return (
                <button type="button" key={pageLink} className={pageClassName} onClick={(e) => this.onPageLinkClick(e, pageLink)}>{pageLink}</button>
            );
        });

        return <span className="p-paginator-pages">{elements}</span>;
    }
}
