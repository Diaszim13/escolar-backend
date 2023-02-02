"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storage_1 = __importDefault(require("../../multer/storage"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
});
router.post("/uploadFile", storage_1.default.single('file'), async (req, res, next) => {
    console.log(req.file);
    const file = req.file;
    console.log('file: ' + file);
    if (!file) {
        const err = new Error('Faltou a file');
        err.status = 400;
        return next(err);
    }
    res.send(file);
});
exports.default = router;
//# sourceMappingURL=Router.js.map