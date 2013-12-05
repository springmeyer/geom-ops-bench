var geos =  require('geos');
var assert = require('assert');
var wkt_reader = new geos.WKTReader()
var wkt_writer = new geos.WKTWriter()

var iterations = parseInt(process.argv[2],10);
assert.ok(iterations);

console.time('c++: wkt read/buffer '+iterations);
for (var i=0;i<iterations;++i) {
    var pt = wkt_reader.read('POINT(0 0)');
    var poly = pt.buffer(10,16);
    var new_wkt  = wkt_writer.write(poly);
}
console.timeEnd('c++: wkt read/buffer '+iterations);
