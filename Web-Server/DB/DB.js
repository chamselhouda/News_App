var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
class DBController{
    insertDB(title, data, category, id, imagename) {
        var sql ="INSERT INTO news (title, content, category, id, ImageLink) VALUES ('"+title+"','"+data+"','"+category+"','"+id+"','"+imagename+"');";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }
    get_info(callback,i){
      
      var sql = "SELECT * FROM news";

      con.query(sql, function(err, results){
            if (err){ 
              throw err;
            }
            const res = [];
            results.forEach(element => {
              res.push(element);
            });
            return callback(res);
    })
}
}
module.exports = DBController;