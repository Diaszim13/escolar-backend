import { Router } from "express";
import filesRouter from './modules/files/Router';
class Routes {
    static define(router: Router): Router {
        router.use('/test', filesRouter);

        return router;
    }
}

export default Routes.define(Router());;