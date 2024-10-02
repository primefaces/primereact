import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { useAppConfig } from '@/components/context/AppConfigContext';
import News from '@/data/news.json';

export default function NewsSection() {
    const {
        announcement,
        hideNews,
        newsActive
        // showNews,
    } = useAppConfig();
    const storageKey = 'primereact-news';

    useMountEffect(() => {
        const itemString = localStorage.getItem(storageKey);

        if (itemString) {
            const item = JSON.parse(itemString);

            if (!item.hiddenNews || item.hiddenNews !== News.id) {
                // showNews(News);
            } else {
                hideNews();
            }
        } else {
            // showNews(News);
        }
    });

    const close = () => {
        hideNews();
        const item = {
            hiddenNews: announcement.id
        };

        localStorage.setItem(storageKey, JSON.stringify(item));
    };

    if (!newsActive) {
        return null;
    }

    return (
        <div className="layout-news">
            <div className="layout-news-container">
                <i />
                <div className="layout-news-content">
                    <span className="layout-news-text">{announcement.content}</span>
                    <a className="layout-news-link" href={announcement.linkHref}>
                        {announcement.linkText}
                    </a>
                </div>
                <a className="layout-news-close" onClick={close}>
                    <span className="pi pi-times" />
                </a>
            </div>
        </div>
    );
}
