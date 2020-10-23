import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class AppNews extends Component {

    static defaultProps = {
        newsActive: true
    };

    static propTypes = {
        newsActive: PropTypes.bool
    };

    render() {
        return (
            <>
                {
                    this.props.newsActive && <div className="layout-news" onClick={() => window.open('https://www.primefaces.org/store', '_blank')}>
                        <div className="layout-news-container">
                            <img src="showcase/images/news/topbar-easter-2020-text.png" className="layout-news-text" alt="New Year" />
                            <img src="showcase/images/news/topbar-easter-2020-ultima.png" className="layout-news-helper-image" alt="New Year" />

                            <button type="button" className="p-link layout-news-close" onClick={this.props.onHideNews}>
                                <i className="pi pi-times"></i>
                            </button>
                        </div>
                    </div>
                }
            </>
        );
    }
}

export default AppNews;
