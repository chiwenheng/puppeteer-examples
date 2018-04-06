/**
 * Created by play on 2018/4/6.
 */

var async2=require("async")

async2.parallel([
    function (callback) {
        console.log('one')
        callback()
    },
    function (callback) {
        console.log('two')
        callback()
    }

],
    function (err, result) {
        console.log('finished')
    }
)