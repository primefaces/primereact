import * as React from 'react';

const TYPE_MAP = {
    ico: 'image/x-icon',
    png: 'image/png',
    svg: 'image/svg+xml',
    gif: 'image/gif'
};

export const useFavicon = (newIcon = '', rel = 'shortcut icon') => {
    React.useLayoutEffect(() => {
        if (newIcon) {
            const linkElements = document.querySelectorAll(`link[rel*='icon']`);

            linkElements.forEach((linkEl) => {
                document.head.removeChild(linkEl);
            });

            const link = document.createElement('link');

            link.setAttribute('type', TYPE_MAP[newIcon.split('.').pop()]);
            link.setAttribute('rel', rel);
            link.setAttribute('href', newIcon);
            document.head.appendChild(link);
        }
    }, [newIcon, rel]);
};
