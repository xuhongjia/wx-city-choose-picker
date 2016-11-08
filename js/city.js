var city={
    province:['-请选择-','广东省'],
    city:{'-请选择-':['-请选择-'],'广东省':['广州市','中山市','肇庆市']},
    district:{'-请选择-':['-请选择-'],'广州市':['番禺区','天河区'],'肇庆市':['端州区','鼎湖区']},
    provinceIndex: 0,
    cityIndex: 0,
    districtIndex: 0,
    selectedProvince:'-请选择-',
    selectedCity:'-请选择-',
    selectedDistrct:'-请选择-'
};

function init(that){
    that.setData( { 
        'city': city 
    }); 
    var bindProvinceChange = function(e){
        var city=that.data.city;
        that.setData({
            'city.provinceIndex': e.detail.value,
            'city.selectedProvince':
                city.province[e.detail.value],
            'city.selectedCity':
                city.city[city.province[e.detail.value]][0],
            'city.selectedDistrct':
                city.district[city.city[city.province[e.detail.value]][0]][0],
            'city.cityIndex':0,
            'city.districtIndex':0
        });
    };
    var bindCityChange = function(e){
        var city=that.data.city;
        that.setData({
            'city.cityIndex': 
                e.detail.value,
            'city.selectedCity':
                city.city[city.selectedProvince][e.detail.value],
            'city.districtIndex':0,
            'city.selectedDistrct':
                city.district[city.city[city.selectedProvince][e.detail.value]][0]
        });
    };
    var bindDistrictChange = function(e){
        var city=that.data.city;
        that.setData({
            'city.districtIndex': e.detail.value,
            'city.selectedDistrct':city.district[city.selectedCity][e.detail.value]
        });
    };
    that['bindProvinceChange']=bindProvinceChange;
    that['bindCityChange'] = bindCityChange;
    that['bindDistrictChange'] = bindDistrictChange;
}

module.exports={
    init:init
}
