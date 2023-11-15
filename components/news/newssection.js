import React, { useEffect, useRef } from 'react';
import AnnouncementData from '../../data/news.json';

export default function NewsSection(props) {
    const storageKey = 'primereact-news';
    const announcement = useRef(AnnouncementData);

    useEffect(() => {
        const itemString = localStorage.getItem(storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (item.hiddenNews && item.hiddenNews !== announcement.current.id) {
                props.setNewsActive(true);
            }
        } else {
            props.setNewsActive(true);
        }
    }, []);

    const onNewsClose = () => {
        props.setNewsActive(false);

        const item = {
            hiddenNews: announcement.current.id
        };

        localStorage.setItem(storageKey, JSON.stringify(item));
    };

    return (
        <>
            {props.newsActive && announcement.current && (
                <>
                    <div className="layout-news">
                        <div className="layout-news-container">
                            <i></i>
                            <div className="layout-news-content">
                                <span className="layout-news-text" title={announcement.current.content}>
                                    {announcement.current.content}
                                </span>
                                <a className="layout-news-link" href={announcement.current.linkHref}>
                                    {announcement.current.linkText}
                                </a>
                            </div>
                            <a className="layout-news-close" onClick={onNewsClose}>
                                <span className="pi pi-times"></span>
                            </a>
                        </div>
                    </div>
                    <style jsx>{`
                        .layout-news {
                            ${announcement.current.backgroundStyle}
                        }

                        .layout-news-text {
                            ${announcement.current.textStyle}
                        }

                        .layout-news-close {
                            ${announcement.current.textStyle}
                        }

                        .layout-news-link,
                        .layout-news-link:visited,
                        .layout-news-link:active {
                            ${announcement.current.linkStyle}
                        }

                        .layout-news-link:hover {
                            ${announcement.current.linkHoverStyle}
                        }
                    `}</style>
                </>
            )}
        </>
    );
}
