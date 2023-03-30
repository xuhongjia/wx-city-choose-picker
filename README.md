# wx-city-choose-picker

# 


#page
&nbsp; var city = require("/city.js");<br>
&nbsp; Page({<br>
&nbsp;&nbsp;data:{},<br>
&nbsp;&nbsp;onLoad: function () {<br>
&nbsp;&nbsp;&nbsp;console.log('onLoad');<br>
&nbsp;&nbsp;&nbsp;var that = this;<br>
&nbsp;&nbsp;&nbsp;city.init(that);<br>
&nbsp;&nbsp;}<br>
&nbsp;});
