Dynamic glide navigation jQuery plugin
=======================

[![Dynamic glide navigation jQuery plugin](http://www.htmldrive.net/media/2010/6/29/1277785631.jpg "Dynamic glide navigation jQuery plugin")](http://www.htmldrive.net/items/demo/71/Dynamic-glide-navigation-with-jQuery-plugin "Dynamic glide navigation jQuery plugin")

[**Demo**](http://www.htmldrive.net/items/demo/71/Dynamic-glide-navigation-with-jQuery-plugin "Dynamic glide navigation jQuery plugin")

##Usage
**Include js and css files.**

    <link href="css/webwidget_menu_glide.css" rel="stylesheet" type="text/css"></link>
    <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/webwidget_menu_glide.js"></script>  

**Add html.**

    <div id="webwidget_menu_glide" class="webwidget_menu_glide">
        <div class="webwidget_menu_glide_sprite"></div>
        <ul>
            <li><a href="http://www.htmldrive.net/">Home</a></li>
            <li><a href="http://www.htmldrive.net/">News</a></li>
            <li class="current"><a href="http://www.htmldrive.net/">About</a></li>
            <li><a href="http://www.htmldrive.net/">Contact</a></li>
            <li><a href="http://www.htmldrive.net/">More...</a></li>
        </ul>
        <div style="clear: both"></div>
    </div>

        
**Add startup script.**

    <script language="javascript" type="text/javascript">
        $(function() {
            $("#webwidget_menu_glide").webwidget_menu_glide(
            {
                menu_width:"100", 
                menu_height:"30", 
                menu_text_size:"15", 
                menu_text_color:"#CCC", 
                menu_sprite_color:"#666", 
                menu_background_color:"#000", 
                menu_margin:"5", 
                sprite_speed:"normal", 
                container:"webwidget_menu_glide" 
            });
        });
    </script>