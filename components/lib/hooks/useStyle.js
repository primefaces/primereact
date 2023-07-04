import { useEffect, useRef, useState } from 'react';
import { DomHandler, ObjectUtils } from "../utils/Utils";

let _id = 0;

export const useStyle = (css = {}, options = {}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const cssRef = useRef(null);
    const defaultDocument = DomHandler.isClient() ? window.document : undefined;
    const { document = defaultDocument, immediate = true, manual = false, name = `primereact_style_${++_id}`, media } = options;

    useEffect(() => {
        cssRef.current = css;
    }, [css]);

    const load = () => {
        if (!document) return;

        const el = document.querySelector(`[data-pc-name="${name}"]`) || document.createElement('style');

        if (ObjectUtils.isNotEmpty(el) || !el.isConnected) {
            el.type = 'text/css';
            el.setAttribute('data-pc-name', name);
            if (media) el.media = media;
            document.head.appendChild(el);
        }

        if (isLoaded) return;

        el.textContent = cssRef.current;
        setIsLoaded(true);
    };

    const unload = () => {
        if (!document || !isLoaded) return;
        const node = document.querySelector(`[data-pc-name="${name}"]`);

        if (node && node.isConnected) {
            document.head.removeChild(node);
            setIsLoaded(false);
        }
    };

    useEffect(() => {
        if (immediate && !manual) load();

        return () => unload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [immediate, manual]);

    return {
        name,
        css: cssRef,
        unload,
        load,
        isLoaded
    };
}
