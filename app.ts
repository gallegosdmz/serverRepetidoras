import express, { Request, Response }from 'express';

const app = express();
const port = 3000;

let shutdownCommand = false;

// Endpint para enviar comando desde Matriz
app.post('/send-shutdown', ( req: Request, res: Response ) => {
    shutdownCommand = true; 

    res.status(200).json({ message: 'Comando de apagado enviado' });
});

// Endpint para que Pinosolo consulte comandos
app.get('/check-command', ( req: Request, res: Response ) => {
    res.status(200).json({ shutdown: shutdownCommand });

    if ( shutdownCommand ) {
        shutdownCommand = false;
    }
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});