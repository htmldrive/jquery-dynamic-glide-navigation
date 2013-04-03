(function(a){
    a.fn.webwidget_menu_glide=function(p){
        var p=p||{};

        var f=p&&p.menu_text_size?p.menu_text_size:"12px";
        var g=p&&p.menu_text_color?p.menu_text_color:"blue";
        var h=p&&p.menu_margin?p.menu_margin:"10px";
        var i=p&&p.menu_width?p.menu_width:"100px";
        var j=p&&p.menu_height?p.menu_height:"20px";
        var k=p&&p.menu_sprite_color?p.menu_sprite_color:"red";
        var l=p&&p.menu_background_color?p.menu_background_color:"black";
        var m=p&&p.sprite_speed?p.sprite_speed:"fast";
        f += "px";
        h += "px";
        i += "px";
        j += "px";
        var n=a(this);
        if(n.children("ul").length==0||n.find("li").length==0){
            n.append("Require menu content");
            return null
            }
            s_m(n.children("ul").children("li"),h,i,j);
        s_m_t_c(n.find("a"),g,j,f);
        n.css("background-color",l);
        if(n.children("ul").children("li").is(".current")){
            var o=n.children("ul").children("li").filter(".current").offset()
            }else{
            var o=n.children("ul").children("li:first").offset()
            }
            var q=o.left+'px';
        s_m_s_c(n.find(".webwidget_menu_glide_sprite"),k,i,j,q);
        n.children("ul").children("li").hover(function(){
            var b=$(this).offset();
            var c=b.left+'px';
            n.find(".webwidget_menu_glide_sprite").stop().animate({
                left:c
            },m)
            },function(){
            n.find(".webwidget_menu_glide_sprite").stop().animate({
                left:q
            },m)
            });
        n.children("ul").children("li").children("ul").children("li").hover(function(){},function(){});
        function s_m_t_c(a,b,c,d){
            a.css("color",b);
            a.css("line-height",c);
            a.css("font-size",d)
            }
            function s_m(a,b,c,d){
            style="margin-right:"+b+"; width: "+c+"; height: "+d+";";
            a.attr("style",style)
            }
            function s_m_s_c(a,b,c,d,e){
            a.css("background-color",b);
            a.css("width",c);
            a.css("height",d);
            a.css("left",e)
            }
        }
})(jQuery);