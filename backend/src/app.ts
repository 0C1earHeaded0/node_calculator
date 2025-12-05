import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import * as math from 'mathjs';

const app = express();
const port: Number = 4000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true,}))

app.post('/api/count', (req: Request, res: Response) => {
    let result: any;

    if (!req.body || !req.body.expression) {
        return res.status(400).send('Wrong expression sended or empty!');
    }
    
    try {
        console.log(req.body.expression);
        result = math.parse(req.body.expression).evaluate();
    } catch (err) {
        return res.status(400).send('Cant parse expression: ' + err);
    }

    return res.send({
        result: result,
    });
});

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`);
});

