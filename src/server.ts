import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { logger } from "./config/logs";
import "./database";

/*  Os mais utilizados
get     => Buscar informação
post    => Inserir informação (criar)
put     => Alterar uma informação
delete  => Remover
patch   => Alterar uma informação específica
*/

const app = express();

app.use(express.json());

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        let error = {
            error: err.message,
        };

        if (err instanceof Error) {
            logger.info("400", error);
            return response.status(400).json({
                error: err.message,
            });
        }

        logger.info("500", error);
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
);

//http://localhost:3000
app.listen(3000, () => console.log("server is running"));
