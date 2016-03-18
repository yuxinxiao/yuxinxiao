/**
 * Created by YuXinxiao on 2016/3/18.
 */
var path = require('path');
var url = require('url');
var fs= require('fs');
var express = require('express');   //加载express模块
var apps=express();                  //获取配置对象

// 存放所有用户信息的数组
var users=[];
// 提供用户方法的对象；
var user={};
//用户id
var id=0;

apps.listen("8888");


apps.get('/', function(req,res){
    var rs = fs.createReadStream('index.html');
    rs.setEncoding('utf8');
    var html ='';
    rs.on('data',function(data){
        html+=data;
    });
    rs.on('end',function(){
        res.send(html);
    })
    rs.on('error',function(){
        res.send('访问成功，文件读取失败！！');
    });
});

//add someone information
apps.post('/user',function(req,res){
    user.add(req,res);
});
//search all user information
apps.get('/user/:username',function(req,res){
    user.list(req,res)
});
//delete someone user
apps.delete('/user/:id',function(req,res){
    user.delete(req,res)
});
//edit someone information
apps.put('/user',function(req,res){
    user.put(req,res)
});

user={
    add:function(req,res){
        console.log('开始添加');
        var str = '';
        req.on('data',function(data){
            str+=data.toString();
        });
        req.on('end',function(){
            id+=1;
            str='{"id":"'+id+'",'+str.substring(1);
            users.push(JSON.parse(str));
            res.end(str);
        });
    },
    list:function(req,res){
        console.log('开始查询');
        var str = req.params.username;
        for(var i = 0 ; i<users.length;i++){
            if(users[i].username == str){
                res.send(JSON.stringify(users[i]));
                return false;
            }
        }
    },
    delete:function(req,res){
        console.log('开始删除');
        var str = req.params.id;
        for(var i = 0 ; i<users.length;i++){
            if(users[i].id == str){
                users.splice(i);
                res.send("success");
                return false;
            }
        }
    },
    put:function(req,res){

    }
}






