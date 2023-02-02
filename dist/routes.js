"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Router_1 = __importDefault(require("./modules/files/Router"));
class Routes {
    static define(router) {
        router.use('/test', Router_1.default);
        return router;
    }
}
exports.default = Routes.define((0, express_1.Router)());
;
//# sourceMappingURL=routes.js.map