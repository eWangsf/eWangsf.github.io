// amd
// define(function (require, exports, module) {
//     // console.log(require, exports, module)
//     console.log("require main.js ...");
//     var mod1 = require("mod1");
//     mod1.print();
//     var mod2 = require("mod2");
//     mod2.print();
//     return {
//         print: function () {
//             console.log("print main")
//         }
//     }
// })


// cmd
define(function (mod1, mod2) {
    console.log("require main.js ...");
    var mod1 = require("mod1");
    mod1.print();
    var mod2 = require("mod2");
    mod2.print();
    return {
        print: function () {
            console.log("print main")
        }
    }
})