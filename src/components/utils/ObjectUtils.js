export default class ObjectUtils {
    
    static equals(obj1, obj2, field) {
        if(field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.equalsByValue(obj1, obj2);
    }
    
    static equalsByValue(obj1, obj2) {
        if (obj1 === null && obj2 === null) {
            return true;
        }
        if (obj1 === null || obj2 === null) {
            return false;
        }

        if (obj1 === obj2) {
            delete obj1._$visited;
            return true;
        }

        if (typeof obj1 === 'object' && typeof obj2 === 'object') {
            obj1._$visited = true;
            for (var p in obj1) {
                if (p === "_$visited") continue;
                if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                    return false;
                }

                switch (typeof (obj1[p])) {
                    case 'object':
                        if ((obj1[p] && obj1[p]._$visited) || !this.equals(obj1[p], obj2[p])) return false;
                        break;

                    case 'function':
                        if (typeof (obj2[p]) === 'undefined' || (p !== 'compare' && obj1[p].toString() !== obj2[p].toString())) return false;
                        break;

                    default:
                        if (obj1[p] !== obj2[p]) return false;
                        break;
                }
            }

            for (var pp in obj2) {
                if (typeof (obj1[pp]) === 'undefined') return false;
            }

            delete obj1._$visited;
            return true;
        }

        return false;
    }
    
    static resolveFieldData(data, field) {
        if(data && field) {
            if(field.indexOf('.') === -1) {
                return data[field];
            }
            else {
                let fields = field.split('.');
                let value = data;
                for(var i = 0, len = fields.length; i < len; ++i) {
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    }
    static filter(value, fields, filterValue) {
        var filteredItems=[];

        if(value) {
            for(let item of value) {
                for(let field of fields) {
                    if(String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }

        return filteredItems;
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

}