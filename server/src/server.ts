import { createServer, Server } from "http";
import * as express from "express";
import * as socketIo from "socket.io";

import { Message } from "./model/message.model";

export class ChatServer
{
    public static readonly PORT: number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;

    constructor()
    {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    public getApp = () => this.app;

    private createApp()
    {
        this.app = express();
    }

    private createServer()
    {
        this.server = createServer(this.app);
    }

    private config()
    {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets()
    {
        this.io = socketIo(this.server);
    }

    private listen()
    {
        this.server.listen(this.port, () => console.log("Running server on port %s.", this.port));

        this.io.on("connect", socket =>
        {
            console.log("Connected client on port %s.", this.port);

            socket.on("message", (m: Message) =>
            {
                console.log("[server](message): %s", JSON.stringify(m));
                this.io.emit("message", m);
            });

            socket.on("disconnect", () => console.log("Client disconnected"));
        });
    }
}