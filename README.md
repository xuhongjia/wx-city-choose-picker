# wx-city-choose-picker
封装微信小程序的三级联动地址选择器
# 界面使用
<!--
  <!template is="addressPicker" data="{{provinceIndex:city.provinceIndex,cityIndex:city.cityIndex,districtIndex:city.districtIndex,province:city.province,city:city.city[city.selectedProvince],district:city.district[city.selectedCity]}}"/>
  -->

#page页调用
  var city = require("/city.js");<br>
  Page({<br>
     data:{},<br>
     onLoad: function () {<br>
        console.log('onLoad');<br>
        var that = this;<br>
        city.init(that);<br>
     }<br>
  });
