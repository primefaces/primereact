export const getCurrentInstance = (firstInstance?: any, secondInstance?: any) => {
    const mergedInstance = {
        ...secondInstance,
        ...firstInstance
    };

    return mergedInstance;
};
