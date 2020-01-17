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
            <React.Fragment>
                {
                    this.props.newsActive && <div className="layout-news">
                        <div className="layout-news-container">
                            <img src="showcase/resources/images/news/asset-1-endofyear-2019.png" alt="New Year" />
                            <span className="layout-news-details">
                                <span className="helper-text">NEW YEAR SALE</span> SAVE UP TO <span className="rate">60%</span> AT PRIMESTORE
                            </span>
                            <a href="https://www.primefaces.org/store" target="_blank" rel="noopener noreferrer" className="layout-news-button">
                                SHOP NOW<i className="pi pi-angle-right"></i>
                            </a>
                            <button type="button" className="p-link layout-news-close" onClick={this.props.onHideNews}>
                                <i className="pi pi-times"></i>
                            </button>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default AppNews;
