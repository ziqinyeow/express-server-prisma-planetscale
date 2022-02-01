"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./api/routes"));
const cors_1 = __importDefault(require("./api/middlewares/cors"));
const jwt_1 = __importDefault(require("./api/middlewares/jwt"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Middleware
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(cors_1.default);
app.use(jwt_1.default);
// Route
app.use("/user", routes_1.default.user);
app.use("/task", routes_1.default.task);
app.use("/detail", routes_1.default.detail);
app.use("/news", routes_1.default.news);
app.get("/", (_, res) => {
    res.status(200).send("Ok");
});
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map