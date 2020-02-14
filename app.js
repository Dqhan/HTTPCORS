const Koa = require("koa");
const Router = require("koa-router");
let app = new Koa();
let router = new Router();

router.get("/", async ctx => {
  ctx.body = "首页";
});

router.post("/httppost", async ctx => {
  // ctx.set("Access-Control-Allow-Origin", ctx.headers.origin);
  // ctx.set("Access-Control-Allow-Headers", "content-type");
  // ctx.set("Access-Control-Allow-Methods", "OPTIONS,GET,HEAD,PUT,DELETES,PATCH");
  ctx.response.status = 200;
  ctx.response.type = "json";
  ctx.response.body = {
    message: "http post data."
  };
});

router.get('/jsonp', async ctx => {
  var data = { 'data': 'post data' };
  ctx.response.body = ctx.query.callback + '(' + JSON.stringify(data) + ');';
})

router.post('/nginxrequest', async ctx => {
  ctx.response.status = 200;
  ctx.response.type = "json";
  ctx.response.body = {
    message: "http post data."
  };
})

app.use(router.routes(), router.allowedMethods());

app.listen(1111, () => {
  console.log("listen 1111.");
});
