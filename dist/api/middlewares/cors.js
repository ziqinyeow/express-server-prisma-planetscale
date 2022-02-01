"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const allow_domain = ["https://www.example.com"];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allow_domain.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
exports.default = (0, cors_1.default)(corsOptionsDelegate);
//# sourceMappingURL=cors.js.map