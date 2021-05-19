export default class ObjectUtils {

    static equals(obj1, obj2, field) {
        if (field && obj1 && typeof obj1 === 'object' && obj2 && typeof obj2 === 'object')
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.deepEquals(obj1, obj2);
    }

    static deepEquals(a, b) {
        if (a === b) return true;

        if (a && b && typeof a == 'object' && typeof b == 'object') {
            let arrA = Array.isArray(a)
                , arrB = Array.isArray(b)
                , i
                , length
                , key;

            if (arrA && arrB) {
                length = a.length;
                if (length !== b.length) return false;
                for (i = length; i-- !== 0;)
                    if (!this.deepEquals(a[i], b[i])) return false;
                return true;
            }

            if (arrA !== arrB) return false;

            let dateA = a instanceof Date
                , dateB = b instanceof Date;
            if (dateA !== dateB) return false;
            if (dateA && dateB) return a.getTime() === b.getTime();

            let regexpA = a instanceof RegExp
                , regexpB = b instanceof RegExp;
            if (regexpA !== regexpB) return false;
            if (regexpA && regexpB) return a.toString() === b.toString();

            let keys = Object.keys(a);
            length = keys.length;

            if (length !== Object.keys(b).length)
                return false;

            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

            for (i = length; i-- !== 0;) {
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
            }
            else if(field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }

    static isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    }

    static findDiffKeys(obj1, obj2) {
        if (!obj1 || !obj2) {
            return {};
        }

        return Object.keys(obj1).filter(key => !obj2.hasOwnProperty(key)).reduce((result, current) => {
            result[current] = obj1[current];
            return result;
        }, {});
    }

    static reorderArray(value, from, to) {
        let target;
        if(value && (from !== to)) {
            if(to >= value.length) {
                target = to - value.length;
                while((target--) + 1) {
                    value.push(undefined);
                }
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }

    static findIndexInList(value, list) {
        let index = -1;

        if(list) {
            for(let i = 0; i < list.length; i++) {
                if(list[i] === value) {
                    index = i;
                    break;
                }
            }
        }

        return index;
    }

    static getJSXElement(obj, ...params) {
        return this.isFunction(obj) ? obj(...params) : obj;
    }

    static removeAccents(str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                    .replace(/[\xC0-\xC5]/g, "A")
                    .replace(/[\xC6]/g, "AE")
                    .replace(/[\xC7]/g, "C")
                    .replace(/[\xC8-\xCB]/g, "E")
                    .replace(/[\xCC-\xCF]/g, "I")
                    .replace(/[\xD0]/g, "D")
                    .replace(/[\xD1]/g, "N")
                    .replace(/[\xD2-\xD6\xD8]/g, "O")
                    .replace(/[\xD9-\xDC]/g, "U")
                    .replace(/[\xDD]/g, "Y")
                    .replace(/[\xDE]/g, "P")
                    .replace(/[\xE0-\xE5]/g, "a")
                    .replace(/[\xE6]/g, "ae")
                    .replace(/[\xE7]/g, "c")
                    .replace(/[\xE8-\xEB]/g, "e")
                    .replace(/[\xEC-\xEF]/g, "i")
                    .replace(/[\xF1]/g, "n")
                    .replace(/[\xF2-\xF6\xF8]/g, "o")
                    .replace(/[\xF9-\xFC]/g, "u")
                    .replace(/[\xFE]/g, "p")
                    .replace(/[\xFD\xFF]/g, "y");
        }

        return str;
    }

    static isEmpty(value) {
        return (
            value === null || value === undefined || value === '' ||
            (Array.isArray(value) && value.length === 0) ||
            (typeof value === 'object' && Object.keys(value).length === 0)
        );
    }

    static isNotEmpty(value) {
        return !this.isEmpty(value);
    }
}
