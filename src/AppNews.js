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
                    this.props.newsActive && (
                        <div className="layout-news">
                            <div className="layout-news-container">
                                <a href="https://www.primefaces.org/store" target="_blank" rel="noopener noreferrer" tabIndex="-1" style={{textDecoration: 'none'}}>
                                    <img className="layouts-news-mockup-image" src="showcase/images/news/topbar-freya-device.png" alt="News" />
                                </a>
                                <a href="https://www.primefaces.org/store" target="_blank" rel="noopener noreferrer" tabIndex="-1" style={{textDecoration: 'none'}} className="layout-news-button">
                                    LEARN MORE
                                </a>
                                <button type="button" className="p-link layout-news-close" onClick={this.props.onHideNews}>
                                    <i className="pi pi-times"></i>
                                </button>
                            </div>
                        </div>
                    )
                }
            </>
        );
    }
}

export default AppNews;
