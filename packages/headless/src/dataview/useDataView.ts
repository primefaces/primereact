import { withHeadless } from '@primereact/core/headless';
import { localeComparator, resolveFieldData } from '@primeuix/utils/object';
import { defaultProps } from './useDataView.props';

export const useDataView = withHeadless({
    name: 'useDataView',
    defaultProps,
    setup: () => {
        const sort = (value: unknown[] | null, sortField: string, sortOrder: number) => {
            if (value) {
                const _value = [...value];
                const comparer = localeComparator();

                _value.sort((data1, data2) => {
                    const value1 = resolveFieldData(data1, sortField);
                    const value2 = resolveFieldData(data2, sortField);
                    const cmp = comparer ? comparer(value1, value2) : value1 > value2 ? 1 : value1 < value2 ? -1 : 0;

                    return cmp * sortOrder;
                });

                return _value;
            }

            return null;
        };

        return {
            // methods
            sort
        };
    }
});
