const express = require('express');
const app = express();
const PORT = 4040;
const router = express.Router();
const nodesData=require('./nodes.json')
const edgesData=require('./edges.json')


app.use('/', router);

router.get('/api/v1/nodes', (request, response) => {
    response.json(nodesData);
});

router.get('/api/v1/edges', (request, response) => {
    response.json(edgesData);
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
