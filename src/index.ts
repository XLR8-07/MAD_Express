import express, { Request, Response } from 'express';
import { connection } from './database/connection';
import cors from "cors";

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    connection.getConnection((err , conn)=>{
        conn.query("SELECT * FROM USER" , (err, result)=>{
            conn.release()
            res.status(200).send({
                message: 'OK',
                result: result
            });
            
        })
    })
    
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});