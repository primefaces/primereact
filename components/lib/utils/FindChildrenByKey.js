export const findChildrenByKey = (data, key) => {
    for (const item of data) {
        if (item.key === key) {
            return item.children || [];
        } else if (item.children) {
            const result = findChildrenByKey(item.children, key);

            if (result.length > 0) {
                return result;
            }
        }
    }

    return [];
};
