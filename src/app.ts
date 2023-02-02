import { Server } from "http";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

export class SetupApplication {
  private server?: Server;

  constructor(private port = 3333, public app = express()) {}

  public init() {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(routes);
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
