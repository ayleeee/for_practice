var express = require('express');
var {index} = require("../Models/indexModel");
var router = express.Router();

const todoLists=[];

// 배열에다가 To do list 넣기
router.post('/add_list',(req,res)=>{
  /*
  1. 입력된 정보를 받아온다.
  2. 배열에다가 넣는다.
  3. 콘솔창에 해당 내용을 찍는다.
  4. 화면에다가 해당 내용을 띄운다.
  */
    const newContent = req.body.content;
    todoLists.push(newContent);
    console.log(newContent);
    return res.send(todoLists);
})

// 배열의 마지막 원소를 지우기

router.patch('/delete_list',(req,res)=>{
  todoLists.pop();
  console.log(todoLists);
  return res.send(todoLists);
})

module.exports = router;
