/**
 * Created by BJF on 2016/3/17.
 */
var path = require('path');
var url = require('url');
var fs= require('fs');
var http = require('http');
var express = require('express');   //加载express模块
var app=express();                  //获取配置对象

// 存放所有用户信息的数组
var users=[];
// 提供用户方法的对象；
var user={};
//用户id
var id=0;

app.listen("8080");


app.get('/', function(req,res){
    var rs = fs.createReadStream('proxy.html');
    rs.setEncoding('utf8');
    var html ='';
    rs.on('data',function(data){
        html+=data;
    });
    rs.on('end',function(){
        res.send(html);
    })
    rs.on('error',function(){
        res.send('访问成功，读取文件失败！');
    });
});

app.get('/user/:username',function(req,res){
    user.list(req,res)
});

user={
    list:function(req,resp){
        var options= {
            host : 'localhost',
            port : '8080',
            path : '/user/'+req.params.username,
            method : 'GET'
        };
        var str="";
        var requestclient = http.request(options, function(res) {
            //console.log("res:"+res);
            res.on('data', function(data) {
                //console.log("data"+data);
                str+=data;
            });
            res.on('end',function(){
                console.log(str);
                resp.send(JSON.parse(str));
            })
        });
        requestclient.end();
    }
}