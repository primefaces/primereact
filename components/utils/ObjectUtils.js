'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectUtils = function () {
    function ObjectUtils() {
        _classCallCheck(this, ObjectUtils);
    }

    _createClass(ObjectUtils, null, [{
        key: 'equals',
        value: function equals(obj1, obj2, field) {
            if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.equalsByValue(obj1, obj2);
        }
    }, {
        key: 'equalsByValue',
        value: function equalsByValue(obj1, obj2) {
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

            if ((typeof obj1 === 'undefined' ? 'undefined' : _typeof(obj1)) === 'object' && (typeof obj2 === 'undefined' ? 'undefined' : _typeof(obj2)) === 'object') {
                obj1._$visited = true;
                for (var p in obj1) {
                    if (p === "_$visited") continue;
                    if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
                        return false;
                    }

                    switch (_typeof(obj1[p])) {
                        case 'object':
                            if (obj1[p] && obj1[p]._$visited || !this.equals(obj1[p], obj2[p])) return false;
                            break;

                        case 'function':
                            if (typeof obj2[p] === 'undefined' || p !== 'compare' && obj1[p].toString() !== obj2[p].toString()) return false;
                            break;

                        default:
                            if (obj1[p] !== obj2[p]) return false;
                            break;
                    }
                }

                for (var pp in obj2) {
                    if (typeof obj1[pp] === 'undefined') return false;
                }

                delete obj1._$visited;
                return true;
            }

            return false;
        }
    }, {
        key: 'resolveFieldData',
        value: function resolveFieldData(data, field) {
            if (data && field) {
                if (field.indexOf('.') === -1) {
                    return data[field];
                } else {
                    var fields = field.split('.');
                    var value = data;
                    for (var i = 0, len = fields.length; i < len; ++i) {
                        value = value[fields[i]];
                    }
                    return value;
                }
            } else {
                return null;
            }
        }
    }]);

    return ObjectUtils;
}();

exports.default = ObjectUtils;