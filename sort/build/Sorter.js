"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        while (length > 1) {
            for (var i = 0; i < length - 1; i++) {
                this.compare(i) ?
                    this.swap(i) : null;
            }
            length--;
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
