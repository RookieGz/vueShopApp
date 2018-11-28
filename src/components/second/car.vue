<template>
    <div id="box">
        <p v-if="chuan.length == 0">你还没有添加商品。</p>
        <div v-for="(n,i) in chuan" class="car" :key="i">
            <img :src="n.imgName" alt="">
            <h2>{{n.name}}</h2>
            <p class="num">数量：
                <input type="button" value=" - " @click="minus(i)">
                <input type="text" :value="n.num" @input="change">
                <input type="button" value=" + " @click="add(i)">
                个
            </p>
            <div class="del" @click="del(n.id)">删除</div>
            <span>总价：{{n.num*n.price}}元</span>
        </div>
        <div style="height:45px"></div>
        <div class="submit">
            <mt-button @click="che">
                结算：{{zj}}元
            </mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            car:"",
            dis:true
        }
    },
    mounted:function(){
        
    },
    computed:{
        chuan:function(){
            return this.$store.getters.clearUp
        },
        zj:function(){
            return this.$store.getters.addAll
        }
    },
    watch:{
        
    },
    methods:{
        minus(g){
            this.$store.commit("min",g)
        },
        add(g){
            this.$store.commit("add",g)
        },
        change(e){
            e.target.value <=1 ? e.target.value =1 : e.target.value
            var op = document.querySelectorAll('.car');
            var index = [].indexOf.call(op, e.target.parentNode.parentNode);
            var g = {
                        ind:index,
                        value:e.target.value
                    }
            this.$store.commit('change', g)
        },
        del(i){
            this.$store.commit('del', i)
        },
        che(){
            if(this.$store.state.isLogin){
                if(this.$store.state.car.length>0){
                    this.$router.push("/order")
                    
                }else{
                    alert("你还未添加商品")
                }
            }else{
                this.$emit("chuan","people")
            }
        }
    }
}
</script>
<style scoped>
#box{
    position: relative;
}
.car{
    position:relative;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px #22eaf8
}
.car>*{
    float: left;
}
.car::after{
    content: "";
    display: block;
    clear: both;
}
.car img{
    float: left;
    width: 10rem;
    height: 10rem
}
.car .num input[type="text"]{
    text-align: right;
    width: 1rem;
}
.car .num input[type="button"]{
    border-radius: 50%
}
.car .num{
    position: absolute;
    bottom: 5rem;
    right: 2rem
}
.car span{
    position: absolute;
    bottom: 2rem;
    right: 2rem
}
.del{
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
}
.submit{
    width: 100%;
    height: 50px;
    position: fixed;
    background: rgb(27, 227, 241);
    bottom: 55px;
}
.mint-button{
    position: absolute;
    right: 0px;
    top: 10%;
    width: 12rem;
    background: rgb(218, 69, 24);
    color: black
} 
</style>