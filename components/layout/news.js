import React from 'react';
import getConfig from 'next/config';

export default function News(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    
    return (
        <>
            {
                props.active && (
                    <div className="layout-news">
                        <div className="layout-news-container">
                            <a href="https://www.primefaces.org/primeblocks-react" target="_blank" rel="noopener noreferrer" tabIndex="-1" style={{textDecoration: 'none'}}>
                                <img className="layouts-news-mockup-image" src={`${contextPath}/images/news/topbar-primeblocks-device.png`} alt="News" />
                            </a>
                            <a href="https://www.primefaces.org/primeblocks-react" target="_blank" rel="noopener noreferrer" tabIndex="-1" style={{textDecoration: 'none'}} className="layout-news-button">
                                LEARN MORE
                                <i className="pi pi-angle-right"></i>
                            </a>
                            <button type="button" className="p-link layout-news-close" onClick={props.onHide}>
                                <i className="pi pi-times"></i>
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    );

}
