import React from 'react';
import getConfig from 'next/config';

export default function News(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const redirect = () => {
        window.open('https://www.primefaces.org/store/', '_blank');
    }

    return (
        <>
            {
                props.active && (
                    <div className="layout-news">
                        <div className="layout-news-container">
                            <img onClick={redirect} className="layout-news-logo p-ml-2" src={`${contextPath}/images/news/topbar-newyear-logo.svg`}/>
                            <h3 onClick={redirect} className="layout-news-header p-px-2"><span>DISCOUNT UP TO 50% </span><span>ON EVERYTHING AT PRIMESTORE</span></h3>
                            <a href="https://www.primefaces.org/store/" target="_blank" rel="noopener noreferrer" tabIndex="-1" style={{ textDecoration: 'none' }} className="layout-news-button">
                                Read More
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
