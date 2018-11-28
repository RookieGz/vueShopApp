<template>
    <div id="box">
        <ul id="tit">
            <li v-for="(n,i) in tit" @click="show(i)">{{n}}</li>
        </ul>
        <div id="text">
            <ul v-for="n in news" :class="n.swi">
                <h2>{{n.tit}}</h2>
                <li v-for="a in n.text">{{a}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tit:["新闻类一","新闻类二","新闻类三","新闻类四","新闻类五"],
            news:[{
                tit:"新闻类一",
                text:["新闻一","新闻二","新闻三","新闻四","新闻五","新闻六"],
                swi:"show"
            },{
                tit:"新闻类二",
                text:["新闻一","新闻二","新闻三","新闻四","新闻五","新闻六"],
                swi:""
            },{
                tit:"新闻类三",
                text:["新闻一","新闻二","新闻三","新闻四","新闻五","新闻六"],
                swi:""
            },{
                tit:"新闻类四",
                text:["新闻一","新闻二","新闻三","新闻四","新闻五","新闻六"],
                swi:""
            },{
                tit:"新闻类五",
                text:["新闻一","新闻二","新闻三","新闻四","新闻五","新闻六"],
                swi:""
            }]
        }
    },
    methods:{
        show(g){
            for(var i in this.news){
                this.news[i].swi = ""
            }
            this.news[g].swi = "show"
        }
    }
}
</script>
<style scoped>
#box{
    position: relative
}
#tit{
    width: 20%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: #ccc;
}
#tit li{
    padding: 1rem 0;
}
#text ul{
    display: none;
}
#text .show{
    display: block
}
#text .show li{
    padding: 20px 0
}
</style>