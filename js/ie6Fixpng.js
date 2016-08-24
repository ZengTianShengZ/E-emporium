// JavaScript Document
DD_belatedPNG.fix('div,ul,ol,li,dt,dd,dl,span,img,a,em,strong,h1,h2,h3,h4,h5,h6,p');
//尽量少偷懒，不要用*，性能是很低的

window.onload=function(){
    for(var i=0; i<aLi.length; i++){
        aLi[i].onmouseover=function(){
            var oSubNav=this.getElementsByTagName('ul')[0];
            if(oSubNav){
                var This=oSubNav;
                clearInterval(This.time);
                This.time=setInterval(function(){
                    This.style.height=This.offsetHeight+16+"px";
                    if(This.offsetHeight>=120)
                        clearInterval(This.time);
                },30)
            }
        }



        aLi[i].onmouseout=function(){
            var oSubNav=this.getElementsByTagName('ul')[0];
            if(oSubNav){
                var This=oSubNav;
                clearInterval(This.time);
                This.time=setInterval(function(){
                    This.style.height=This.offsetHeight-16+"px";
                    if(This.offsetHeight>=120)
                        clearInterval(This.time);
                },30)
            }
        }


    }






        }


    }
}