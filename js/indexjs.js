var id1,id2,id3,old=0,now=0,controlnumber;
var x = 5;
var sudu = true,radiob = true,xc = true;//线程控制
var b_checkbox,imgMove,radio,radiop;


function startSet(){
	//准备
	imgMove = document.getElementById("bodyer_one_1_img").getElementsByTagName("img");
	b_checkbox = document.getElementById("b_checkbox");
	radio = document.getElementById("b_checkbox").getElementsByTagName("input");
	radiop = document.getElementById("b_checkbox").getElementsByTagName("p");
	cleanWhitespace(b_checkbox);
	
	//进入论坛图标onmouseover
	document.getElementById("one_bg").onmouseover = function(){
		var one_bg = document.getElementById("one_bg");
		one_bg.style.backgroundImage = "url('imgs/bg-header_top2.jpg')";
		one_bg.style.cursor = "pointer";
		}
	//离开论坛图标onmouseout
	document.getElementById("one_bg").onmouseout = function(){
		var one_bg = document.getElementById("one_bg");
		one_bg.style.backgroundImage = "url('imgs/bg-header_top.jpg')";
		}
	
	//光标事件,谷歌下有默认样式
	document.getElementById("t_text1").onfocus = function(){
		this.style.border = "none";
		}
	
	//赛事预告
	var three_container = document.getElementById("three_container_bottom");
	cleanWhitespace(three_container);
	for(i=0;i<three_container.firstChild.childNodes.length;i++){
		if(i%2 != 0)three_container.firstChild.childNodes.item(i).style.backgroundColor = "#222E47";
		else three_container.firstChild.childNodes.item(i).style.backgroundColor = "#1C273F";
	}

	
	
	//进入专题的onmouseover
	document.getElementById("c_bottom").onmouseover = function(){
		this.style.cursor = "pointer";
		cleanWhitespace(this);
		var c_text = this.childNodes.item(0);
		c_text.style.filter = "Alpha(opacity=100)";
		c_text.style.opacity = 1;
		}
	//离开专题的onmouseover
	document.getElementById("c_bottom").onmouseout = function(){
		cleanWhitespace(this);
		var c_text = this.childNodes.item(0);
		c_text.style.filter = "Alpha(opacity=70)";
		c_text.style.opacity = 0.7;
		}
		
	//开始轮播图片
	for(var i = 0;i<radiop.length;i++){
	//使用闭包
	(function(){
		var temp = i;
		radiop[i].onclick = function(){
			clearInterval(id2);
			radiop[now].style.backgroundColor = "gray";
			radiop[temp].style.backgroundColor = "red";
			radio[temp].checked = "checked";
			controlnumber = temp;
			sudu = false;
			radiob = false;
			tihuan();
			//清除id2的延迟，然后再次调用tihuan
			setTimeout(agian,5000);
			}
		imgMove[i].onmouseover = function(){
			clearInterval(id1);
			clearInterval(id2);
			}
		imgMove[i].onmouseout = function(){
			move();
			}
		})(i);
	}

//初始化图片图层
for(var i=0;i<imgMove.length;i++){
	i == 0? imgMove[i].style.zIndex = 10 : imgMove[i].style.zIndex = 1;
	radio[0].checked = "checked";
	radiop[0].style.backgroundColor = "red";
	}
  setTimeout(tihuan,2000);
		
		
		
		//论坛热帖
		var text_top = document.getElementById("text_top");
		cleanWhitespace(text_top);
		text_top.firstChild.childNodes.item(0).style.borderBottom = "2px solid #00a786";
		text_top.firstChild.childNodes.item(0).firstChild.style.color = "black";
		
		for(i=0;i<text_top.firstChild.childNodes.length;i++){
			text_top.firstChild.childNodes.item(i).onmouseover = function(){
				for(k=0;k<text_top.firstChild.childNodes.length;k++){
					text_top.firstChild.childNodes.item(k).style.borderBottom = "1px solid #bec0c2";
					text_top.firstChild.childNodes.item(k).firstChild.style.color = "gray";
					}
				this.style.borderBottom = "2px solid #00a786";
				this.firstChild.style.color = "black";
				}
			text_top.firstChild.childNodes.item(i).onmouseout = function(){
				}
			}
		
		//版本
		var one_3_bottom_menu = document.getElementById("one_3_bottom_menu");
		cleanWhitespace(one_3_bottom_menu);
		one_3_bottom_menu.firstChild.childNodes.item(0).style.borderBottom = "2px solid #00a786";
		one_3_bottom_menu.firstChild.childNodes.item(0).firstChild.style.color = "black";
		
		for(i=0;i<text_top.firstChild.childNodes.length;i++){
			one_3_bottom_menu.firstChild.childNodes.item(i).onmouseover = function(){
				for(k=0;k<one_3_bottom_menu.firstChild.childNodes.length;k++){
					one_3_bottom_menu.firstChild.childNodes.item(k).style.borderBottom = "1px solid #bec0c2";
					one_3_bottom_menu.firstChild.childNodes.item(k).firstChild.style.color = "gray";
					}
				this.style.borderBottom = "2px solid #00a786";
				this.firstChild.style.color = "black";
				}
			one_3_bottom_menu.firstChild.childNodes.item(i).onmouseout = function(){
				}
			}
		
		//精美图集
		var six_menu = document.getElementById("six_menu");
		cleanWhitespace(six_menu);
		   //默认样式
		six_menu.firstChild.childNodes.item(0).style.backgroundColor = "#00a786";
		six_menu.firstChild.childNodes.item(0).firstChild.style.color = "white";
		
		for(i=0;i<six_menu.firstChild.childNodes.length;i++){
			six_menu.firstChild.childNodes.item(i).onmouseover = function(){
				for(k=0;k<six_menu.firstChild.childNodes.length;k++){
					six_menu.firstChild.childNodes.item(k).style.backgroundColor = "white";
					six_menu.firstChild.childNodes.item(k).firstChild.style.color = "black";
					}
					this.style.backgroundColor = "#00a786";
					this.firstChild.style.color = "white";
				}
			}
		//精美图集 图片下面的P的字体滑动
		var six_menu_img = document.getElementById("six_bottom_container");
		cleanWhitespace(six_menu_img);
		var s1 = six_menu_img.childNodes;
		    //over
		six_menu_img.childNodes.item(0).onmouseover = function(){
			s1.item(0).firstChild.style.display = "block";
			}
		six_menu_img.childNodes.item(1).childNodes.item(0).onmouseover = function(){
			s1.item(1).childNodes.item(0).firstChild.style.display = "block";
			}
		six_menu_img.childNodes.item(1).childNodes.item(1).onmouseover = function(){
			s1.item(1).childNodes.item(1).firstChild.style.display = "block";
			}
		six_menu_img.childNodes.item(2).childNodes.item(0).onmouseover = function(){
			s1.item(2).childNodes.item(0).firstChild.style.display = "block";
			}
		six_menu_img.childNodes.item(2).childNodes.item(1).onmouseover = function(){
			s1.item(2).childNodes.item(1).firstChild.style.display = "block";
			}
		    //out
		six_menu_img.childNodes.item(0).onmouseout = function(){
			s1.item(0).firstChild.style.display = "none";
			}
		six_menu_img.childNodes.item(1).childNodes.item(0).onmouseout = function(){
			s1.item(1).childNodes.item(0).firstChild.style.display = "none";
			}
		six_menu_img.childNodes.item(1).childNodes.item(1).onmouseout = function(){
			s1.item(1).childNodes.item(1).firstChild.style.display = "none";
			}
		six_menu_img.childNodes.item(2).childNodes.item(0).onmouseout = function(){
			s1.item(2).childNodes.item(0).firstChild.style.display = "none";
			}
		six_menu_img.childNodes.item(2).childNodes.item(1).onmouseout = function(){
			s1.item(2).childNodes.item(1).firstChild.style.display = "none";
			}
		
		
		//加载iframe1
		var one_menu = document.getElementById("one_2_bottom_menu");
		var iframe1 = document.getElementById("iframe1");
		cleanWhitespace(one_menu);
		   //默认样式
		one_menu.firstChild.childNodes.item(0).style.backgroundColor = "#00a786";
		one_menu.firstChild.childNodes.item(0).firstChild.style.color = "white";
		iframe1.src = "html/t1.html";
		
		for(i=0;i<one_menu.firstChild.childNodes.length;i++){
			(function(){
			var temp = i+1;
			one_menu.firstChild.childNodes.item(i).onmouseover = function(){
				for(k=0;k<one_menu.firstChild.childNodes.length;k++){
					one_menu.firstChild.childNodes.item(k).style.backgroundColor = "#eaeaea";
					one_menu.firstChild.childNodes.item(k).firstChild.style.color = "gray";
					}
					this.style.backgroundColor = "#00a786";
					this.firstChild.style.color = "white";
					iframe1.src = "html/t"+temp+".html";
				}
			})(i);
		}
			
			
			//加载iframe2
		var two_menu = document.getElementById("two_t_2_menu");
		var iframe2 = document.getElementById("iframe2");
		cleanWhitespace(two_menu);
		   //默认样式
		two_menu.firstChild.childNodes.item(0).style.backgroundColor = "#00a786";
		two_menu.firstChild.childNodes.item(0).firstChild.style.color = "white";
		iframe2.src = "html/s1.html";
		for(i=0;i<two_menu.firstChild.childNodes.length;i++){
			(function(){
			var temp = i+1;
			two_menu.firstChild.childNodes.item(i).onmouseover = function(){
				for(k=0;k<two_menu.firstChild.childNodes.length;k++){
					two_menu.firstChild.childNodes.item(k).style.backgroundColor = "#eaeaea";
					two_menu.firstChild.childNodes.item(k).firstChild.style.color = "black";
					}
				  this.style.backgroundColor = "#00a786";
					this.firstChild.style.color = "white";
					iframe2.src = "html/s"+temp+".html";
				 }
				})(i);
			}
			
			
			//加载iframe3
		var five_menu = document.getElementById("bodyer_five_bottom_l_con");
		var iframe3 = document.getElementById("iframe3");
		cleanWhitespace(five_menu);
		   //默认样式
		five_menu.childNodes.item(0).style.borderColor = "#00a786";
		five_menu.childNodes.item(0).style.fontSize = "20px";
		five_menu.childNodes.item(0).style.backgroundColor = "white";
		five_menu.childNodes.item(0).firstChild.style.color = "#00a786";
		iframe3.src = "html/hero1.html";
		for(i=0;i<five_menu.childNodes.length;i++){
			(function(){
			var temp = i+1;
			five_menu.childNodes.item(i).onmouseover = function(){
				for(k=0;k<five_menu.childNodes.length;k++){
					five_menu.childNodes.item(k).style.backgroundColor = "#eaeaea";
					five_menu.childNodes.item(k).style.borderColor = "white";
					five_menu.childNodes.item(k).style.fontSize = "14px";
					five_menu.childNodes.item(k).firstChild.style.color = "gray";
					}
				  this.style.backgroundColor = "white";
				  this.style.borderColor = "#00a786";
				  this.style.fontSize = "20px";
					this.firstChild.style.color = "#00a786";
					iframe3.src = "html/hero"+temp+".html";
				 }
				})(i);
				}
	}





//图片轮播
function tihuan(){
clearInterval(id2);
if(now != controlnumber && xc == true){
old = now;
now++;
//判断now是否溢出
if(now >= imgMove.length) now = 0;
//把now的zIndex提升
imgMove[now].style.zIndex = 10;
//把属于now的按钮checked
if(radiob == true){
 radio[now].checked = "checked";
 radiop[old].style.backgroundColor = "gray";
 radiop[now].style.backgroundColor = "red";}
//那now出现在下方
imgMove[now].style.top = 300 + "px";
move();
 }
}

function move(){
//先判断Now的left是否为0
if(imgMove[now].offsetTop > 0){
	clearInterval(id1);
	xc = false;
	if(sudu)x = 20;
	else x = 50;
	imgMove[old].style.top = imgMove[old].offsetTop - x + "px";
	imgMove[now].style.top = imgMove[now].offsetTop - x + "px";
	id1 = setInterval(move,30);
}
else{
	xc = true;
	if(sudu){
		clearInterval(id1);
		imgMove[now].style.zIndex = 9;
		id2 = setInterval(tihuan,2000);
		}else{
			clearInterval(id1);
		  imgMove[now].style.zIndex = 9;
		  id2 = setInterval(tihuan,1);
			}
	}
}

function agian(){
	controlnumber = -1;
	sudu = true;
	radiob = true;
	tihuan();
	}
	
	
//ff下清除空白节点函数
function cleanWhitespace(node) {
	  //正则 非空格
    var notWhitespace = /\S/;
    for (var i=0; i < node.childNodes.length; i++) {
    var childNode = node.childNodes[i];
    if ((childNode.nodeType == 3)&&(!notWhitespace.test(childNode.nodeValue))) {
    node.removeChild(node.childNodes[i]);
    i--;
     }
    if (childNode.nodeType == 1) {
    cleanWhitespace(childNode);
      }
     }
  } 

window.onload = startSet;