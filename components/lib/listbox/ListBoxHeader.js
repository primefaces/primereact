import * as React from 'react';
import { SearchIcon } from '../icons/search';
import { InputText } from '../inputtext/InputText';
import { PrimeReactContext } from '../api/Api';
import { IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';

export const ListBoxHeader = React.memo((props) => {
    const {
        ptCallbacks: { ptm, cx }
    } = props;
    const context = React.useContext(PrimeReactContext);

    const getPTOptions = (key, options) => {
        return ptm(key, {
            hostName: props.hostName,
            ...options
        });
    };

    const filterOptions = {
        filter: (e) => onFilter(e),
        reset: () => props.resetFilter()
    };

    const onFilter = (event) => {
        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                value: event.target.value
            });
        }
    };

    const createHeader = () => {
        const filterIconProps = mergeProps(
            [
                {
                    className: cx('filterIcon')
                },
                getPTOptions('filterIcon')
            ],
            { useTailwind: context.useTailwind }
        );

        const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
        const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

        const headerProps = mergeProps(
            [
                {
                    className: cx('header')
                },
                getPTOptions('header')
            ],
            { useTailwind: context.useTailwind }
        );

        const filterContainerProps = mergeProps(
            [
                {
                    className: cx('filterContainer')
                },
                getPTOptions('filterContainer')
            ],
            { useTailwind: context.useTailwind }
        );

        let content = (
            <div {...filterContainerProps}>
                <InputText
                    type="text"
                    value={props.filter}
                    onChange={onFilter}
                    className={cx('filterInput')}
                    disabled={props.disabled}
                    placeholder={props.filterPlaceholder}
                    {...props.filterInputProps}
                    pt={ptm('filterInput')}
                    unstyled={props.unstyled}
                    __parentMetadata={{ parent: props.metaData }}
                />
                {filterIcon}
            </div>
        );

        if (props.filterTemplate) {
            const defaultContentOptions = {
                className: 'p-listbox-filter-container',
                element: content,
                filterOptions: filterOptions,
                filterInputChange: onFilter,
                filterIconClassName: 'p-dropdown-filter-icon',
                props
            };

            content = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
        }

        return <div {...headerProps}>{content}</div>;
    };

    const content = createHeader();

    return <>{content}</>;
});

ListBoxHeader.displayName = 'ListBoxHeader';
