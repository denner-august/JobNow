"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.UpdateJob = void 0;
var fs = require("fs");
var jobs = "./teste.json";
var encodig = "utf-8";
function UpdateJob(_a) {
    var job = _a.job;
    var dataAtual = fs.readFileSync(jobs, encodig);
    var dataObject = JSON.parse(dataAtual);
    var vagasAtuais = dataObject.vagas;
    var newVagas = { vagas: __spreadArray(__spreadArray([], vagasAtuais, true), [job], false) };
    fs.writeFile(jobs, JSON.stringify(newVagas, null, 2), encodig, function (e) {
        if (e) {
            console.log(e);
            return;
        }
    });
}
exports.UpdateJob = UpdateJob;
