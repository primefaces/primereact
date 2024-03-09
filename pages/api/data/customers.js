import path from 'path';
import url from 'url';
import { promises as fs } from 'fs-extra';

function getSlice(queryObject, customers) {
    if (queryObject.first != null && queryObject.rows != null) {
        let first = parseInt(queryObject.first);
        let rows = parseInt(queryObject.rows);

        return customers.slice(first, first + rows);
    } else {
        return customers;
    }
}

function sort(queryObject, customers) {
    customers.sort((data1, data2) => {
        let value1 = resolveFieldData(data1, queryObject.sortField);
        let value2 = resolveFieldData(data2, queryObject.sortField);
        let result = null;

        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

        return queryObject.sortOrder * result;
    });

    return customers;
}

const filters = {
    startsWith: (value, filter) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = removeAccents(filter.toString()).toLocaleLowerCase();
        let stringValue = removeAccents(value.toString()).toLocaleLowerCase();

        return stringValue.slice(0, filterValue.length) === filterValue;
    },

    contains: (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = removeAccents(filter.toString()).toLocaleLowerCase();
        let stringValue = removeAccents(value.toString()).toLocaleLowerCase();

        return stringValue.indexOf(filterValue) !== -1;
    },

    notContains: (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = removeAccents(filter.toString()).toLocaleLowerCase();
        let stringValue = removeAccents(value.toString()).toLocaleLowerCase();

        return stringValue.indexOf(filterValue) === -1;
    },

    endsWith: (value, filter) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        let filterValue = removeAccents(filter.toString()).toLocaleLowerCase();
        let stringValue = removeAccents(value.toString()).toLocaleLowerCase();

        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },

    equals: (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
        else return removeAccents(value.toString()).toLocaleLowerCase() == removeAccents(filter.toString()).toLocaleLowerCase();
    },

    notEquals: (value, filter) => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }

        if (value === undefined || value === null) {
            return true;
        }

        if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
        else return removeAccents(value.toString()).toLocaleLowerCase() != removeAccents(filter.toString()).toLocaleLowerCase();
    },

    in: (value, filter) => {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }

        for (let i = 0; i < filter.length; i++) {
            if (equals(value, filter[i])) {
                return true;
            }
        }

        return false;
    }
};

function filter(value, field, filterValue, filterMatchMode) {
    let filteredItems = [];

    if (value) {
        for (let item of value) {
            let fieldValue = resolveFieldData(item, field);

            if (filters[filterMatchMode](fieldValue, filterValue)) {
                filteredItems.push(item);
            }
        }
    }

    return filteredItems;
}

function equals(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
        let i, length, key;

        let keys = Object.keys(obj1);

        length = keys.length;

        if (length !== Object.keys(obj2).length) return false;

        for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;

        for (i = length; i-- !== 0; ) {
            key = keys[i];
            if (!equals(obj1[key], obj2[key])) return false;
        }

        return true;
    }

    return obj1 !== obj1 && obj2 !== obj2;
}

function removeAccents(str) {
    if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str
            .replace(/[\xC0-\xC5]/g, 'A')
            .replace(/[\xC6]/g, 'AE')
            .replace(/[\xC7]/g, 'C')
            .replace(/[\xC8-\xCB]/g, 'E')
            .replace(/[\xCC-\xCF]/g, 'I')
            .replace(/[\xD0]/g, 'D')
            .replace(/[\xD1]/g, 'N')
            .replace(/[\xD2-\xD6\xD8]/g, 'O')
            .replace(/[\xD9-\xDC]/g, 'U')
            .replace(/[\xDD]/g, 'Y')
            .replace(/[\xDE]/g, 'P')
            .replace(/[\xE0-\xE5]/g, 'a')
            .replace(/[\xE6]/g, 'ae')
            .replace(/[\xE7]/g, 'c')
            .replace(/[\xE8-\xEB]/g, 'e')
            .replace(/[\xEC-\xEF]/g, 'i')
            .replace(/[\xF1]/g, 'n')
            .replace(/[\xF2-\xF6\xF8]/g, 'o')
            .replace(/[\xF9-\xFC]/g, 'u')
            .replace(/[\xFE]/g, 'p')
            .replace(/[\xFD\xFF]/g, 'y');
    }

    return str;
}

function resolveFieldData(data, field) {
    if (data && field) {
        if (field.indexOf('.') == -1) {
            return data[field];
        } else {
            let fields = field.split('.');
            let value = data;

            for (let i = 0, len = fields.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }

                value = value[fields[i]];
            }

            return value;
        }
    } else {
        return null;
    }
}

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(), 'public', 'data/customers-large.json');

    try {
        const content = await fs.readFile(filePath, 'utf-8');
        let customers = JSON.parse(content).data;

        // get query params
        const query = url.parse(req.url, true).query.lazyEvent ? JSON.parse(url.parse(req.url, true).query.lazyEvent) : url.parse(req.url, true).query;

        // sort
        if (query.sortField && query.sortOrder) {
            customers = sort(query, customers);
        }

        // filter
        if (query.filters) {
            for (let fieldName in query.filters) {
                if (query.filters[fieldName].value !== null) {
                    customers = filter(customers, fieldName, query.filters[fieldName].value, query.filters[fieldName].matchMode);
                }
            }
        }

        res.status(200).json({ customers: getSlice(query, customers), totalRecords: customers.length });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
