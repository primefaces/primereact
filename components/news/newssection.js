import React from 'react';

export default function NewsSection(props) {
    return (
        <>
            <div className="layout-news">
                <i></i>
                <div className="layout-news-content">
                    <span className="layout-news-text" title={props.announcement.content}>
                        {props.announcement.content}
                    </span>
                    <a className="layout-news-link" href={props.announcement.linkHref}>
                        {props.announcement.linkText}
                    </a>
                </div>
                <a className="layout-news-close" onClick={props.onClose}>
                    <span className="pi pi-times"></span>
                </a>
            </div>
            <style jsx>{`
                .layout-news {
                    ${props.announcement.backgroundStyle}
                }

                .layout-news-text {
                    ${props.announcement.textStyle}
                }

                .layout-news-close {
                    ${props.announcement.textStyle}
                }

                .layout-news-link,
                .layout-news-link:visited,
                .layout-news-link:active {
                    ${props.announcement.linkStyle}
                }

                .layout-news-link:hover {
                    ${props.announcement.linkHoverStyle}
                }
            `}</style>
        </>
    );
}
