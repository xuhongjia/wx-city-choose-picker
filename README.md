# wx-city-choose-picker
封装微信小程序的三级联动地址选择器
# 界面使用
<template is="addressPicker" data="{{provinceIndex:city.provinceIndex,cityIndex:city.cityIndex,districtIndex:city.districtIndex,province:city.province,city:city.city[city.selectedProvince],district:city.district[city.selectedCity]}}"/>

#page页调用
var city = require("/city.js");
Page({
  data:{},
  onLoad: function () {
      console.log('onLoad');
      var that = this;
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
          userInfo:userInfo
        })
      });
      city.init(that);
    }
});
