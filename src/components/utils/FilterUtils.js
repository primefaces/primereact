import ObjectUtils from './ObjectUtils';

export default class FilterUtils {

    static filter(value, fields, filterValue, filterMatchMode, filterLocale) {
        let filteredItems  = [];
        let filterText = ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(filterLocale);

        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLocaleLowerCase(filterLocale);

                    if (FilterUtils[filterMatchMode](fieldValue,filterText, filterLocale)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
    }

    static startsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.slice(0, filterValue.length) === filterValue;
    }

    static contains(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.indexOf(filterValue) !== -1;
    }

    static endsWith(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);

        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }

    static equals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) === ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }

    static notEquals(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }

        if (value === undefined || value === null) {
            return true;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) !== ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    }

    static in(value, filter, filterLocale) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        for (let i = 0; i < filter.length; i++) {
            if (ObjectUtils.equals(value, filter[i])) {
                return true;
            }
        }

        return false;
    }

    static lt(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < parseFloat(filter);
    }

    static lte(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= parseFloat(filter);
    }

    static gt(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > parseFloat(filter);
    }

    static gte(value, filter, filterLocale) {
        if (filter === undefined || filter === null || (filter.trim && filter.trim().length === 0)) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= parseFloat(filter);
    }

}
