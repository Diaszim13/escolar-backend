import { SetupApplication } from "./app";

class Server {
    static start(): void {
        const app = new SetupApplication(3333);
        app.init();
        app.start();
    }
}

Server.start();