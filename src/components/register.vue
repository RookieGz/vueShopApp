<template>
    <div id="box">
        <mt-header title="注册">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <ul>
            <li>昵称：<input type="text" v-model="name"></li>
            <li>账号：<input type="text" v-model="use"></li>
            <li>密码：<input type="password" v-model="password"></li>
            <li>
                <mt-button type="primary" size="normal" @click="submit">
                    提交
                </mt-button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            name:"",
            use:"",
            password:""
        }
    },
    methods:{
        submit(){
            
        }
    }
}
</script>
<style scoped>
#box ul li{
    font-size: 1.8rem;
    margin: 5rem auto;
}
#box ul li input{
    display: inline-block;
    height: 2rem;
    width: 15rem;
    border: 1px solid #a5a1a1
}
</style>
