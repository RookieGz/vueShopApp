<template>
<div id="box">
    <div class="top">
        <h2>订单生成</h2>
        <div class="back" @click="back">
            返回
        </div>
    </div>
    <div id="infor">
        <h1><span>收件人：</span>{{useInformation.name}}</h1>
        <h1><span>收货地址：</span>{{useInformation.address}}</h1>
        <h1><span>手机号：</span>{{useInformation.number}}</h1>
        <hr>
        <div v-for="(n,i) in goods" class="car" :key="i">
            <h2>{{n.name}}</h2>
            <p class="num">数量：{{n.num}}个</p>
            <span>总价：{{n.num*n.price}}元</span>
        </div>
        <hr>
        <div id="zj">总价{{zj}}</div>
    </div>
    <mt-button type="danger" id="pay" @click="pay">支付</mt-button>
</div>    
</template>
<script>
export default {
    data:function(){
        return {

        }
    },
    computed:{
        useInformation(){
            return this.$store.state.user
        },
        goods(){
            return this.$store.state.car
        },
        zj:function(){
            return this.$store.getters.addAll
        }
    },
    methods:{
        pay(){
            alert("支付成功")
            this.$router.push("/")
            this.$store.commit("back","car")
            this.$store.commit("clear")
        },
        back(){
            this.$router.push("/")
            this.$store.commit("back","car")
        }
    }
}
</script>
<style scoped>
#box{
    position: relative;
    padding-top: 2.5rem
}
.top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgb(16, 202, 146);
    color: #1b0101
}
.top .back{
    position: absolute;
    top: .2rem;
    left: .2rem
}
#infor h1{
    text-align: left;
    margin: 1rem
}
#infor h1 span{
    font-size: 1.2rem;
    font-weight: 400;
}
#infor .car{
    height: 5rem
}
#infor .car h2{
    text-align: left
}
#infor .car span{
    float: right
}
#zj{
    float: right;
    margin-right: .5rem
}
#infor::after{
    content:"";
    display: block;
    clear: both
}
#pay{
    margin: 3rem;
    width: 50%;
}
</style>
