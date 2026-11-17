import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { app } from './app.js';
import { env } from './config/env.js';


const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: env.CLIENT_ORIGIN } });

io.on('connection', (socket) => {
  console.log('client connected', socket.id);
});

httpServer.listen(env.PORT, () => {
  console.log(`Server on http://localhost:${env.PORT}`);
});