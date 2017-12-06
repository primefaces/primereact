import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class PageLinks extends Component {

    static defaultProps = {
        value: null,
        page: null,
        links: null
    }

    static propsTypes = {
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
                            let pageClassName = classNames('ui-paginator-page ui-paginator-element ui-state-default ui-corner-all', {
                                'ui-state-active': ((pageLink - 1) === this.props.page)
                            });

                            return <a key={pageLink} className={pageClassName} onClick={(e) => this.onPageLinkClick(e, pageLink)}>{pageLink}</a>;
                        });

        return <span className="ui-paginator-pages">{elements}</span>;
    }
}