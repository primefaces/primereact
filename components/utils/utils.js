export const switchTheme = (currentTheme, newTheme, linkElementId, callback) => {
    const linkElement = document.getElementById(linkElementId);
    const cloneLinkElement = linkElement.cloneNode(true);
    const newThemeUrl = linkElement.getAttribute('href').replace(currentTheme, newTheme);

    cloneLinkElement.setAttribute('id', linkElementId + '-clone');
    cloneLinkElement.setAttribute('href', newThemeUrl);
    cloneLinkElement.addEventListener('load', () => {
        linkElement.remove();
        cloneLinkElement.setAttribute('id', linkElementId);

        if (callback) {
            callback();
        }
    });
    linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);
};

export const getStorage = (stateStorageProp) => {
    switch (stateStorageProp) {
        case 'local':
            return window.localStorage;

        case 'session':
            return window.sessionStorage;

        case 'custom':
            return null;

        default:
            throw new Error(stateStorageProp + ' is not a valid value for the state storage, supported values are "local", "session" and "custom".');
    }
};
