const bufferModule = require('buffer');
if (typeof bufferModule.SlowBuffer === 'undefined') {
    bufferModule.SlowBuffer = class SlowBuffer extends bufferModule.Buffer {};
}
