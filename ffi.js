var lgeos =  require('shapely');
var ref =  require('ref');
var assert = require('assert');

var iterations = parseInt(process.argv[2],10);
assert.ok(iterations);

console.time('ffi: wkt read/buffer '+iterations);
for (var i=0;i<iterations;++i) {
    var ptWKT = ref.allocCString("POINT(0 0)");
    var pt = lgeos.GEOSWKTReader_read(lgeos.wkt_reader,ptWKT);
    var poly = lgeos.GEOSBuffer(pt, 10, 16);
    var new_wkt = ref.readCString(lgeos.GEOSWKTWriter_write(lgeos.wkt_writer,poly));
}
console.timeEnd('ffi: wkt read/buffer '+iterations);
