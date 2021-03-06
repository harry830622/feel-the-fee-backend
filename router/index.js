const Router = require('@koa/router');

const apiRouter = require('./api');

const router = new Router();

router.use('/api', apiRouter.routes());

module.exports = router;
