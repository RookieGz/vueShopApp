<template>
    <div id="box">
        <div id="top">
            <h2>注册</h2>
            <div id="back" @click="back">
                返回
            </div>
        </div>
        <ul>
            <li>昵称：<input type="text" v-model="name"></li>
            <li>账号：<input type="text" v-model="use"></li>
            <li>密码：<input type="password" v-model="password"></li>
            <li>收货地址：<input type="text" v-model="address"></li>
            <li>手机号：<input type="text" v-model="number"></li>

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
            name:"去嚯嚯",
            use:"123",
            password:"",
            address:"你猜",
            number:"13xxxxxxxxx"
        }
    },
    methods:{
        submit(){
            if(this.name == "" || this.use == "" || this.password == ""){
                alert("前三项任一不能为空")
            }else{
                var g = {
                    name:this.name,
                    use:this.use,
                    password:this.password,
                    address:this.address,
                    number:this.number
                }
                this.$store.commit("reg",g)
                this.$store.commit("back","people")
                this.$router.go(-1)
            }  
        },
        back(){
            this.$router.go(-1)
            this.$store.commit("back","people")
        }
    }
}
</script>
<style scoped>
#top{
    position: fixed;
    top: 0px;
    left: 0px;
    background: rgb(13, 188, 211);
    width: 100%;
    color: white;
    padding-top: 1rem;
    padding-bottom: .5rem;
    padding-left: .5rem
}
#top h1{
    font-weight: 200;
}
#top #back{
    position: fixed;
    top: 1rem;
}
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
