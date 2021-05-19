import PrimeReact from '../api/PrimeReact';

function handler() {
    let zIndexes = [];

    const generateZIndex = (key, baseZIndex) => {
        baseZIndex = baseZIndex || getBaseZIndex(key);

        let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
        let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 1;

        zIndexes.push({ key, value: newZIndex });
        return newZIndex;
    }

    const revertZIndex = (zIndex) => {
        zIndexes = zIndexes.filter(obj => obj.value !== zIndex);
    }

    const getBaseZIndex = (key) => {
        return PrimeReact.zIndex[key] || 999;
    }

    const getCurrentZIndex = () => {
        return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
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
        getCurrent: () => getCurrentZIndex()
    };
}

export const ZIndexUtils = handler();
