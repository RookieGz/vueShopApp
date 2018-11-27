<template>
    <div id="box">
        <div v-if="!isLogin" class="check">
            <input type="text">
            <input type="password">
            <div class="login">
                    <mt-button type="primary" size="normal" @click="login">登陆</mt-button>
            </div>
            <div class="reg">
                <router-link to="/reg">
                    注册
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tit:"This is peopleComponent"
        }
    },
    computed:{
        isLogin:function(){
            return this.$store.state.isLogin
        }
    },
    methods:{
        login(){
            this.$store.state.isLogin = true
            alert("登陆成功")
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
</style>