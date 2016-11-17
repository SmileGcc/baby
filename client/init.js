//const Async = require('./libs/async.min.js');

var init = function (app) {

    wx.getStorageInfo({
        success: function (res) {
            console.log(res.keys)
            console.log(res.currentSize)
            console.log(res.limitSize)
        }
    })
}



module.exports = init;


    // Async.parallel({
    //     location: generator('getLocation'),
    //     network: generator('getNetworkType'),
    //     systemInfo: generator('getSystemInfo')
    // },
    //     function (err, results) {
    //         if(err){

    //         }else{
    //             results.systemInfo.error
    //         }
    //     });

//     var generator = function (method) {
//     var params = {}
//     return function (callback) {
//         params.success = function (res) {
//             callback(null, { error: null, res: res })
//         };
//         params.fail = function (err, res) {
//             callback(null, { error: err, res: res })
//         }
//         wx[method](params);
//     }
// }