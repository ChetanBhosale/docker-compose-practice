"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const db_1 = require("./db");
(0, db_1.connectDB)();
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield db_1.user.find();
    res.send(users);
}));
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.user.create({
        name: Math.random().toString(36).substring(2, 15),
        email: Math.random().toString(36).substring(2, 15) + '@gmail.com'
    });
    res.send('User created');
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
