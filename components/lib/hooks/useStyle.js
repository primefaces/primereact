import { useEffect, useRef, useState } from 'react';
import { DomHandler } from '../utils/Utils';

let _id = 0;

export const useStyle = (css, options = {}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const styleRef = useRef(null);

    const defaultDocument = DomHandler.isClient() ? window.document : undefined;
    const { document = defaultDocument, immediate = true, manual = false, name = `style_${++_id}`, id = undefined, media = undefined } = options;

    const update = (newCSS) => {
        isLoaded && css !== newCSS && (styleRef.current.textContent = newCSS);
    };

    const load = () => {
        if (!document) return;

        styleRef.current = document.querySelector(`style[data-primereact-style-id="${name}"]`) || document.getElementById(id) || document.createElement('style');

        if (!styleRef.current.isConnected) {
            styleRef.current.type = 'text/css';
            id && (styleRef.current.id = id);
            media && (styleRef.current.media = media);
            document.head.appendChild(styleRef.current);
            name && styleRef.current.setAttribute('data-primereact-style-id', name);
        }

        if (isLoaded) return;

        styleRef.current.textContent = css;

        setIsLoaded(true);
    };

    const unload = () => {
        if (!document || !isLoaded) return;

        DomHandler.isExist(styleRef.current) && document.head.removeChild(styleRef.current);
        setIsLoaded(false);
    };

    useEffect(() => {
        if (immediate && !manual) load();

        return () => unload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [immediate, manual]);

    return {
        id,
        name,
        update,
        unload,
        load,
        isLoaded
    };
};
