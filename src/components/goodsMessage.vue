<template>
    <div>
        <mt-header :title="goods.name">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div id="goodsImg">
            <img :src="goods.imgName" alt="" width="100%">
        </div>
        <h1>{{goods.name}}</h1>
        <p>价格：{{goods.price}}元</p>
        <mt-button class="btn" type="primary" size="normal" @click="add()">添加到购物车</mt-button>
    </div>
</template>
<script>
export default {
    computed:{
        goods(){
            console.log(this.$store.state.Mes)
            return this.$store.state.Mes
        }
    },
    methods:{
        add(){
            this.$store.commit("addCar",this.goods)
        }
    }
}
</script>
<style scoped>
h1{
    text-align: left
}
p{
    text-align: right
}
.btn{
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
}
</style>
