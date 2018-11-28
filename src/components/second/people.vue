<template>
    <div id="box">
        <div v-if="!isLogin" class="check">
            <input type="text" v-model="use">
            <input type="password" v-model="pwd">
            <div class="login">
                    <mt-button type="primary" size="normal" @click="login">登陆</mt-button>
            </div>
            <div class="reg">
                <router-link to="/reg">
                    注册
                </router-link>
            </div>
        </div>
        <div v-else class="peo">
            <h1>{{user.name}}</h1>
            <h2>收货地址：{{user.address}}</h2>
            <h2>联系电话：{{user.number}}</h2>
            <mt-button type="danger" @click="logout">退出登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tit:"This is peopleComponent",
            use:"",
            pwd:""
        }
    },
    computed:{
        isLogin:function(){
            return this.$store.state.isLogin
        },
        user:function(){
            return this.$store.state.user
        }
    },
    methods:{
        login(){
            var a = this.$store.state.user
            var swi = 0
            for(var i in a){
                if(a.use == this.use && a.password == this.pwd){
                    this.$store.state.isLogin = true
                    swi = 1
                    break
                }
            }
            swi == 0 ? alert("账号或者密码错误") : 1
        },
        logout(){
            this.$store.state.isLogin = false
        }
    }
}
</script>
<style scoped>
#box{
    position: relative
}
#box .check{
    margin-top: 10rem;
}
#box input{
    display: block;
    width: 18rem;
    height: 2rem;
    margin: 20px auto;
    font-size: 1.8rem;
    line-height: 1.8rem;
    border: 1px solid #a5a1a1
}
#box .login{
    margin-bottom: 1.5rem
}
.peo>*{
    margin-bottom: 5rem
}
</style>