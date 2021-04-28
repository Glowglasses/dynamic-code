let code = document.getElementsByClassName("code")[0]
let style = document.querySelector("#style")
let str = 
`/* 你好，我是一名前端学习者，
 * 现在通过一个项目
 * 来展示我的前端学习情况
 * 首先准备一个边框有点粗的正方形
 **/
.taichi{
    width: 210px;
    height: 210px;
    border: 5px solid black;
}
/* 接下来，我要把这个正方形
* 变成一个边框有点粗的圆形
**/
.taichi{
    border-radius: 50%;
}

/**
 * 接下来该画里面内容了
 * 太极由一阴一阳组成
 * 左升右降
 * */
.taichi{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}

/* 然后画中间的两个圆
**/

.taichi::after{
  width: 100px;
  height: 100px;
  transform: translateX(50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
.taichi::before{
  width: 100px;
  height: 100px;
  transform: translate(50%, 100%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

/**
 * 画完了！！！
 * 是不是和太极图一样！！！ZZ
 **/

`
let htmlString = ''
let styleString = ''
let index = 0;



function fn(index){
        setTimeout(function(){step(index)}, 30)
}
function step(x){
            if(x < str.length){
                styleString += str[x]
                if(str[x] === '\n'){
                    htmlString += '<br>'
                }else if(str[x] === ' '){
                    htmlString += '&nbsp;'
                }else{
                    htmlString += str[x]
                }
                style.innerHTML = styleString
                code.innerHTML = htmlString
                window.scrollTo(0, 99999)
                code.scrollTo(0, 99999)
                x++;
                fn(x)
            }else{
                return;
            }
        }
fn(index)
