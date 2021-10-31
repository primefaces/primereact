import PrimeReact from '../api/Api';

function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex) => {
        baseZIndex = baseZIndex || getBaseZIndex(key);

        const lastZIndex = getLastZIndex(key, baseZIndex);
        const newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });
        return newZIndex;
    }

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
    }

    const getBaseZIndex = (key) => {
        return PrimeReact.zIndex[key] || 999;
    }

    const getCurrentZIndex = (key) => {
        return getLastZIndex(key).value;
    }

    const getLastZIndex = (key, baseZIndex = 0) => {
        return (zIndexes || []).reverse().find(obj => (PrimeReact.autoZIndex ? true : obj.key === key)) || { key, value: baseZIndex };
    }

    return {
        get: (el) => el ? parseInt(el.style.zIndex, 10) || 0 : 0,
        set: (key, el, baseZIndex) => {
            if (el) {
                el.style.zIndex = String(generateZIndex(key, baseZIndex));
            }
        },
        clear: (el) => {
            if (el) {
                revertZIndex(ZIndexUtils.get(el));
                el.style.zIndex = '';
            }
        },
        getBase: (key) => getBaseZIndex(key),
        getCurrent: (key) => getCurrentZIndex(key)
    };
}

export const ZIndexUtils = handler();
