import { useContext } from 'react';
import { PrimeReactContext } from '../api/Api';
import { mergeProps } from '../utils/Utils';

/**
 * Hook to merge properties including custom merge function for things like Tailwind merge.
 */
export const useMergeProps = () => {
    const context = useContext(PrimeReactContext);

    return (...props) => {
        return mergeProps(props, context?.ptOptions);
    };
};
