import News from '@/assets/data/news.json';
import { useApp } from '@/hooks/useApp';
import * as React from 'react';

export interface Announcement {
    id: number | string;
    content?: string;
    linkText?: string;
    linkHref?: string;
    target?: string;
    backgroundStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
}

const announcement = News as Announcement;

export default function AppNews() {
    const app = useApp();

    const onClose = () => {};

    React.useEffect(() => {
        const itemString = app.storageKey ? localStorage.getItem(app.storageKey) : null;

        if (itemString) {
            const item = JSON.parse(itemString);

            app.setNewsActive(!item.hiddenNews || item.hiddenNews !== announcement.id);
        } else {
            app.setNewsActive(true);
        }
    }, [app]);

    if (!app.isNewsActive) {
        return null;
    }

    return (
        <div className="layout-news" style={announcement.backgroundStyle}>
            <div className="layout-news-container">
                <i></i>
                <div className="layout-news-content">
                    <span className="layout-news-text" style={announcement.textStyle}>
                        {announcement.content}
                    </span>
                    <a className="layout-news-link" href={announcement.linkHref} target={announcement.target} rel="noopener noreferrer">
                        {announcement.linkText}
                    </a>
                </div>
                <a className="layout-news-close" style={announcement.textStyle} onClick={onClose}>
                    <span className="pi pi-times"></span>
                </a>
            </div>
        </div>
    );
}
