import express from 'express';
import sum from './sum.js';

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.semd("api is working fine");
});

app.get("/getSum/:a/:b", async (req,res) => {
    const {a,b} = req.params;

    res.json({
        ans: sum(parseInt(a),parseInt(b))
    })
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});