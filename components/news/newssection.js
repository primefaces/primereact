import AppContentContext from '@/components/layout/appcontentcontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import News from '@/data/news.json';
import { useContext } from 'react';

export default function NewsSection() {
    const { newsActive, announcement, showNews, hideNews } = useContext(AppContentContext);
    const storageKey = 'primereact-news';

    useMountEffect(() => {
        const itemString = localStorage.getItem(storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (!item.hiddenNews || item.hiddenNews !== News.id) {
                showNews(News);
            } else {
                hideNews();
            }
        } else {
            showNews(News);
        }
    });

    const close = () => {
        hideNews();
        const item = {
            hiddenNews: announcement.id
        };

        localStorage.setItem(storageKey, JSON.stringify(item));
    };

    if (!newsActive) return null;

    return (
        <div className="layout-news">
            <div className="layout-news-container">
                <i></i>
                <div className="layout-news-content">
                    <span className="layout-news-text">{announcement.content}</span>
                    <a className="layout-news-link" href={announcement.linkHref}>
                        {announcement.linkText}
                    </a>
                </div>
                <a className="layout-news-close" onClick={close}>
                    <span className="pi pi-times"></span>
                </a>
            </div>
        </div>
    );
}
