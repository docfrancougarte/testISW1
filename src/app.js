const express = require('express');
const logger = require('./utils/logger');

const app = express();

app.route('/').get((req, res)=>{
    logger.info("INFO");
    logger.warn("WARNING");
    logger.error("ERROR");
    logger.debug("DEBUG");
    logger.log("error", "LOG");
    res.send(200);
});

app.listen(3000, ()=> logger.info('Server running'));
