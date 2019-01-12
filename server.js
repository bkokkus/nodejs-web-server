var express = require("express");
var middleware = require("./middleware");

//expresi çalıştır. daha doğrusu instence si var.
var app = express();
var PORT = process.env.PORT || 3000;

//sayfaya get metodu ne gelirse gelsin. karşıla
//buradaki function bir callbak gibi 

// app.get("/", function(req, res){
//     res.send("Merhaba Express");
// })

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication , function(req, res){
    res.send("Hakkında Sayfası");
})

//static bir sayfa kullan
    app.use(express.static(__dirname + '/public'));

// __dirname bulunduğumuz klasörün yolunu verir.
    //console.log(__dirname);

//port numarası ile çalış. portu dinle,
app.listen(PORT, function(){
    console.log("Express server "+ PORT + " nolu portta çalışıyor ...");
});