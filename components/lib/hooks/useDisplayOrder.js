import * as React from 'react';
import { UniqueComponentId } from '../utils/Utils';

const groupToDisplayedElements = {};

export const useDisplayOrder = (group, isVisible = true) => {
    const [uid] = React.useState(() => UniqueComponentId());
    const [displayOrder, setDisplayOrder] = React.useState(0);

    React.useEffect(() => {
        if (isVisible) {
            if (!(group in groupToDisplayedElements)) {
                groupToDisplayedElements[group] = [];
            }

            const newDisplayOrder = groupToDisplayedElements[group].length + 1;

            groupToDisplayedElements[group].push(uid);
            setDisplayOrder(newDisplayOrder);

            return () => {
                delete groupToDisplayedElements[group][newDisplayOrder];
                const lastOrder = groupToDisplayedElements[group].findLastIndex((el) => el !== undefined);

                // Reduce array length, by removing undefined elements at the end of array:
                groupToDisplayedElements[group].splice(lastOrder + 1);

                setDisplayOrder(undefined);
            };
        }
    }, [group, uid, isVisible]);

    return displayOrder;
};
