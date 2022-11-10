export default class ObjectUtils {
    static equals(obj1, obj2, field) {
        if (field && obj1 && typeof obj1 === 'object' && obj2 && typeof obj2 === 'object') return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
        else return this.deepEquals(obj1, obj2);
    }

    static deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            let arrA = Array.isArray(a),
                arrB = Array.isArray(b),
                i,
                length,
                key;

            if (arrA && arrB) {
                length = a.length;
                if (length !== b.length) return false;
                for (i = length; i-- !== 0; ) if (!this.deepEquals(a[i], b[i])) return false;

                return true;
            }

            if (arrA !== arrB) return false;

            let dateA = a instanceof Date,
                dateB = b instanceof Date;

            if (dateA !== dateB) return false;
            if (dateA && dateB) return a.getTime() === b.getTime();

            let regexpA = a instanceof RegExp,
                regexpB = b instanceof RegExp;

            if (regexpA !== regexpB) return false;
            if (regexpA && regexpB) return a.toString() === b.toString();

            let keys = Object.keys(a);

            length = keys.length;

            if (length !== Object.keys(b).length) return false;

            for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0; ) {
                key = keys[i];
                if (!this.deepEquals(a[key], b[key])) return false;
            }

            return true;
        }

        /*eslint no-self-compare: "off"*/
        return a !== a && b !== b;
    }

    static resolveFieldData(data, field) {
        if (data && Object.keys(data).length && field) {
            if (this.isFunction(field)) {
                return field(data);
            } else if (ObjectUtils.isNotEmpty(data[field])) {
                return data[field];
            } else if (field.indexOf('.') === -1) {
                return data[field];
            } else {
                let fields = field.split('.');
                let value = data;

                for (var i = 0, len = fields.length; i < len; ++i) {
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

    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    static isLetter(char) {
        return char && (char.toUpperCase() != char.toLowerCase() || char.codePointAt(0) > 127);
    }

    static findDiffKeys(obj1, obj2) {
        if (!obj1 || !obj2) {
            return {};
        }

        return Object.keys(obj1)
            .filter((key) => !obj2.hasOwnProperty(key))
            .reduce((result, current) => {
                result[current] = obj1[current];

                return result;
            }, {});
    }

    /**
     * Removes keys from a JSON object that start with a string such as "data" to get all "data-id" type properties.
     *
     * @param {any} obj the JSON object to reduce
     * @param {string[]} startsWiths the string(s) to check if the property starts with this key
     * @returns the JSON object containing only the key/values that match the startsWith string
     */
    static reduceKeys(obj, startsWiths) {
        const result = {};

        if (!obj || !startsWiths || startsWiths.length === 0) {
            return result;
        }

        Object.keys(obj)
            .filter((key) => startsWiths.some((value) => key.startsWith(value)))
            .forEach(function (key) {
                result[key] = obj[key];
                delete obj[key];
            });

        return result;
    }

    static reorderArray(value, from, to) {
        let target;

        if (value && from !== to) {
            if (to >= value.length) {
                target = to - value.length;

                while (target-- + 1) {
                    value.push(undefined);
                }
            }

            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }

    static findIndexInList(value, list, dataKey) {
        if (list) {
            return dataKey ? list.findIndex((item) => this.equals(item, value, dataKey)) : list.findIndex((item) => item === value);
        }

        return -1;
    }

    static getJSXElement(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    }

    static getPropValue(obj, ...params) {
        let methodParams = params;

        if (params && params.length === 1) {
            methodParams = params[0];
        }

        return this.isFunction(obj) ? obj(...methodParams) : obj;
    }

    static getRefElement(ref) {
        if (ref) {
            return typeof ref === 'object' && ref.hasOwnProperty('current') ? ref.current : ref;
        }

        return null;
    }

    static combinedRefs(innerRef, forwardRef) {
        if (innerRef && forwardRef) {
            if (typeof forwardRef === 'function') {
                forwardRef(innerRef.current);
            } else {
                forwardRef.current = innerRef.current;
            }
        }
    }

    static removeAccents(str) {
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

    static isEmpty(value) {
        return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0) || (!(value instanceof Date) && typeof value === 'object' && Object.keys(value).length === 0);
    }

    static isNotEmpty(value) {
        return !this.isEmpty(value);
    }

    static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
        const result = ObjectUtils.compare(value1, value2, locale, order);
        // nullSortOrder == 1 means Excel like sort nulls at bottom
        const finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;

        return finalSortOrder * result;
    }

    static compare(value1, value2, locale, order = 1) {
        let result = -1;
        const emptyValue1 = this.isEmpty(value1);
        const emptyValue2 = this.isEmpty(value2);

        if (emptyValue1 && emptyValue2) result = 0;
        else if (emptyValue1) result = order;
        else if (emptyValue2) result = -order;
        else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, locale, { numeric: true });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

        return result;
    }
}
