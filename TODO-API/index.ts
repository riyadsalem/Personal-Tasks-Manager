import express, {
  Express,
  Request,
  Response,
} from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

const app: Express = express();
dotenv.config();

// Create Database Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  synchronize: true,
});

const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    // Start listenting to the requests on the defined port
    app.listen(port, () =>
      console.log(`SERVER IS RUNNING ON PORT ${port}`),
    );
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });

app.get('/', (req: Request, res: Response) =>
  res.send('Express + TypeScript Server'),
);
