import * as React from 'react';

export const combinedRefs = <I = unknown>(innerRef?: React.Ref<I>, forwardRef?: React.Ref<unknown>) => {
    if (innerRef && forwardRef) {
        if (typeof forwardRef === 'function') {
            forwardRef(innerRef && 'current' in innerRef ? innerRef.current : null);
        } else {
            if ('current' in forwardRef) {
                forwardRef.current = innerRef && 'current' in innerRef ? innerRef.current : null;
            }
        }
    }
};
