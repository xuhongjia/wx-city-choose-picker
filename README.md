# wx-city-choose-picker
封装微信小程序的三级联动地址选择器
# 界面使用
在wxml文件中有范例

#page页调用
&nbsp; var city = require("/city.js");<br>
&nbsp; Page({<br>
&nbsp;&nbsp;data:{},<br>
&nbsp;&nbsp;onLoad: function () {<br>
&nbsp;&nbsp;&nbsp;console.log('onLoad');<br>
&nbsp;&nbsp;&nbsp;var that = this;<br>
&nbsp;&nbsp;&nbsp;city.init(that);<br>
&nbsp;&nbsp;}<br>
&nbsp;});
