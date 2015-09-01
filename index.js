var _else = {identifier: 'else'};
var _if = function(cond1, lambda1, cond2, lambda2) {
    if (arguments.length % 2 !== 0) {
        throw new Error('if called with an odd number of arguments');
    }
    var i = 0;
    for (var i = 0; i < arguments.length; i += 2) {
        var condition = arguments[i];
        if (condition != null && condition !== false) {
            return arguments[i + 1].call(undefined);
        }
    }
};

var _while = function(conditionLambda, bodyLambda) {
    while (conditionLambda.call(undefined)) {
        bodyLambda.call(undefined);
    }
}

var fs = require("fs");
var path = require("path");
var process = global.process;
var console = global.console;
var Math = global.Math;
var this_program_filename = path.basename(__filename);
var this_program_regex = new RegExp((this_program_filename + "$"));
var exe_index = process.argv.map((function(arg) {
return this_program_regex.test(arg);
})).indexOf(true);
var args = process.argv.slice((exe_index + 1));
var auditors = _if((args.length !== 0), (function(_it) {
return args;
}), _else, (function(_it) {
var lines = fs.readFileSync("auditors.txt", {
encoding: "utf8"
});
return lines.split(/[\n\r]+/).filter((function(a) {
return a;
}));
}));
console.log("picking from: ", auditors.join(" "));
var index = Math.floor((Math.random() * auditors.length));
console.log(index, auditors);
console.log(auditors[index]);
