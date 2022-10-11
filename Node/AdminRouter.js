const express = require("express");
const router = express.Router();
router.get("/", (req, resp) => {
  resp.send("admin");
});
const DB = require("./DataBase");

router.get("/login", (req, res) => {
  //获取 客户端发过来的UserName Password 参数
  const { UserName, Password } = req.query;
  console.log(UserName, Password);
  const sql = `select * from account where UserName ='${UserName}' and Password='${Password}' `;
  console.log('准备执行的sql:'+sql);
  //Sql
  DB.query(sql, (error, result) => {

    if (error) {
      return console.log(error);
    } else if (result.length === 0) {
    res.send({
      status:200,
      message:'error',
      data:result
    });
    } else {
      console.log('success');
        res.send({
          status:200,
          message:'success',
          data:result
        });//发送给客户端
    }
  });
});


router.get('/datacard',(req,res)=>{
  const {UserName}=req.query;
  const sql=`select * from datacard where UserName='${UserName}'`;
  console.log('准备执行的sql:'+sql);
  DB.query(sql,(err,result)=>{
    if(err){
    res.send("error");
    return console.log(err);
    }
    else{
    let newResult = JSON.parse(JSON.stringify(result)); 
     res.send({
      status:200,
      message:'success',
      data:newResult
     });//发送给客户端
    }
  })
})

router.get('/OrderData',(req,res)=>{
  const sql="select * from  orderdata";
  DB.query(sql,(err,result)=>{
    if(err){
      res.send("error");
      return console.log(err);
    }
    else{
      res.send({
        status:200,
        message:'success',
        data:result
       });
    }
  })
})
module.exports = router;
