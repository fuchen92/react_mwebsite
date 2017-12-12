var express = require("express")
var app = express()
var router = express.Router()

var newsList = require("./newslist.json")
var newsList2 = require("./newslist2.json")

var article = require("./article2.json");

router.get("/", function (req, res) {
	// res.header("Access-Control-Allow-Origin", "*");
	res.send("hello world")
})

//对所有新闻的get进行mock
router.get('/api/news', function (req, res, next) {
	//响应mock数据
	res.json(newsList);
});

router.get("/api/news2", function (req, res, next) {
	res.json(newsList2);
});

router.get("/api/article", function (req, res, next) {
	res.json(article);
});

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(router)

app.listen(3001, function () {
	console.log("server listenning on port 3001")
})
