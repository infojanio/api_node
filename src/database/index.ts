import { Connection, createConnection, getConnectionOptions } from "typeorm";

//verifica se o yarn vai apontar para jest test ou desenvolvimento, com variáveis de ambiente
export default async(): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();   //teremos todas as informações do ormconfig 


    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' 
            ? "./src/database/database.test.sqlite" 
            : defaultOptions.database 
        })
    );
}