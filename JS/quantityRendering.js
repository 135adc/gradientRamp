//导入颜色的数据
import * as model from "./color.js"
//将数据存进colorarray数组
let colorarray = model.colorarray
let mainbox = document.querySelectorAll('.mainbox')
console.log(mainbox);

//列表渲染
function colorrender() {
    for (let i = 0; i < colorarray.length; i++) {
        //创建div元素
        let box = document.createElement('div')
        //为创建的div元素添加类名,classList.add不会修改原有的类名
        box.classList.add("colorbox")
        //为div元素加上内容
        box.innerHTML =
            ` 
        <div class="top">
        <p>${colorarray[i].id} &nbsp${colorarray[i].name}</p>
        <p class="downloadimg">Download IMG</p>
        </div>
        <div class="middle">
        <div class="colordata" style="${colorarray[i].color};"></div>
        </div>
        <div class="bottom">
        <p>${colorarray[i].colordata}</p>
        <p class="copycss">Copy Css</p>
        </div>
        `
        //在page元素前插入元素div
        // main.insertBefore(box,page)
        for (let i = 0; i < mainbox.length; i++) {
            mainbox[i].appendChild(box)
        }

    }

}
colorrender()

//复制样式
let copycss = document.querySelectorAll('.copycss')
for (let j = 0; j < copycss.length; j++) {
    copycss[j].onclick = function () {
        //将颜色数据中的颜色值存储到copyValue中
        let copyValue = colorarray[j].color
        // copyValue.select()
        //将颜色值复制到粘贴板
        navigator.clipboard.writeText(copyValue);
        // alert("复制的文本为: " + copyValue);

        this.innerHTML = 'Success!'
        this.style.color = 'orange'
        let time = 2
        let timer = setInterval(() => {
            time = time - 1
            if (time < 0) {
                // console.log('你好');
                this.innerHTML = 'Copy Css'
                this.style.color = ''
                clearInterval(timer)
            }
        }, 1000);

    }
}
let body = document.querySelector('body')
let html = document.querySelector('html')
//获取颜色球元素
let colordata = document.querySelectorAll('.colordata')
let bool = false
for (let i = 0; i < colordata.length; i++) {
    colordata[i].addEventListener('click', () => {
        bool = !bool
        if (bool) {
            //为颜色球设置类名,该方法会将原有的类名移除
            colordata[i].setAttribute('class', 'addclass')
            body.setAttribute('class', 'addclassmax')
            html.setAttribute('class', 'addclassmax')

        }
        else {
            colordata[i].classList.remove('addclass')
            colordata[i].classList.add('colordata')
            body.classList.remove('addclassmax')
            html.classList.remove('addclassmax')
        }
    })


}

// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.onscroll = function () { scrollFunction() };

let btn = document.querySelector('.btn')
function scrollFunction() {
    // console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// 点击按钮，返回顶部
btn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}