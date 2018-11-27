<template>
    <div id="box">
        <mt-navbar v-model="selected" fixed class="shopTop">
            <mt-tab-item id="0" class="bar">首页</mt-tab-item>
            <mt-tab-item id="1">食品</mt-tab-item>
            <mt-tab-item id="2">电子产品</mt-tab-item>
            <mt-tab-item id="3">家电</mt-tab-item>
            <mt-tab-item id="4">婴儿</mt-tab-item>
            <mt-tab-item id="5">酒水</mt-tab-item>
        </mt-navbar>

<!-- tab-container -->
        <mt-tab-container v-model="selected" class="shopBody">
            <mt-tab-container-item id="0">
                <div v-for="n in goods" :title="n.name" class="cf">
                    <img :src="n.imgName">                    
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="1">
                <div v-for="n in food" :title="n.name" class="cf">
                    <img :src="n.imgName" width="100" height="100">
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div v-for="n in electronics" :title="n.name" class="cf">
                    <img :src="n.imgName" width="100" height="100">
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div v-for="n in appliances" :title="n.name" class="cf">
                    <img :src="n.imgName" width="100" height="100">
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div v-for="n in child" :title="n.name" class="cf">
                    <img :src="n.imgName" width="100" height="100">
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div v-for="n in drink" :title="n.name" class="cf">
                    <img :src="n.imgName" width="100" height="100">
                    <span>{{n.name}}</span>
                    <p>单价：{{n.price}} 元</p>
                    <mt-button @click.native="add(n.id)"></mt-button>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import shop from './json/shop.js'
export default {
    data(){
        return {
            name:"This is shopComponent",
            selected:"0",
            goods:"",
            food:[],
            electronics:[],
            appliances:[],
            child:[],
            drink:[]
        }
    },
    mounted:function(){
        this.goods = shop
        puSh(this.food,"food")
        puSh(this.electronics,"electronics")
        puSh(this.appliances,"appliances")
        puSh(this.child,"child")
        puSh(this.drink,"drink")
        function puSh(arr,type){
            for (var i in shop) {
                if (shop[i].type == type) {
                    arr.push(shop[i])
                }
            }
        }
    },
    methods:{
        add(n){
            for(var i in this.goods){
                if(n == this.goods[i].id){
                    var g = this.goods[i]
                    break
                }
            }
            this.$store.commit("addCar",g)
            //console.log(this.$store.getters.clearUp)
        }
    }
}
</script>
<style>
.shopTop{
    overflow: auto;
    height: 50px;
}
.shopTop::-webkit-scrollbar{
    background: #fff;
}
.shopTop .mint-tab-item-label{
    width: 5rem;
}
.shopBody{
    padding-top: 30px;
}
.shopBody img{
    float: left;
    width: 9rem;
    height: 9rem;
    border-radius: 5px
}
.shopBody span{
    float: left;
    margin: 10px 12px;
    font-weight: 700;
}
.shopBody p{
    float: left;
    bottom: 0px;
    position: absolute;
    left: 10.5rem;
}
.shopBody .cf{
    position: relative;
    margin-bottom:5px;
    box-shadow: 0 2px 4px #22eaf8  
}
.shopBody .cf::after{
    display: block;
    content: "";
    clear: both
}
.shopBody .mint-button{
    position: absolute;
    right: 0px;
    width: 45px;
    height: 45px;
    margin: 2rem 0.5rem;
    background-color: rgba(12, 206, 206, 0.74);
    background-image:url("../../assets/car2.png");
    background-size: contain
}
</style>
