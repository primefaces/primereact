import * as React from 'react';
import { UniqueComponentId } from '../utils/Utils';

const groupToDisplayedElements = {};

export const useDisplayOrder = (group, isVisible = true) => {
    const [uid] = React.useState(() => UniqueComponentId());
    const [displayOrder, setDisplayOrder] = React.useState(0);

    React.useEffect(() => {
        if (isVisible) {
            if (!groupToDisplayedElements[group]) {
                groupToDisplayedElements[group] = [];
            }

            const newDisplayOrder = groupToDisplayedElements[group].push(uid);

            setDisplayOrder(newDisplayOrder);

            return () => {
                delete groupToDisplayedElements[group][newDisplayOrder - 1];

                // Reduce array length, by removing undefined elements at the end of array:
                const lastIndex = groupToDisplayedElements[group].length - 1;
                const lastOrder = ObjectUtils.findLastIndex(groupToDisplayedElements[group], (el) => el !== undefined);

                if (lastOrder !== lastIndex) groupToDisplayedElements[group].splice(lastOrder + 1);

                setDisplayOrder(undefined);
            };
        }
    }, [group, uid, isVisible]);

    return displayOrder;
};
