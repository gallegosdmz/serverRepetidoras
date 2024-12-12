"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let shutdownCommand = false;
// Endpint para enviar comando desde Matriz
app.post('/send-shutdown', (req, res) => {
    shutdownCommand = true;
    res.status(200).json({ message: 'Comando de apagado enviado' });
});
// Endpint para que Pinosolo consulte comandos
app.get('/check-command', (req, res) => {
    res.status(200).json({ shutdown: shutdownCommand });
    if (shutdownCommand) {
        shutdownCommand = false;
    }
});
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});
