const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const users = require('./routes/users');
const files = require('./routes/files');

const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);


app.use('/users', users); 
app.use('/files', files); 

module.exports = app.listen(port, () => console.log(`Server started on port ${port}`));
