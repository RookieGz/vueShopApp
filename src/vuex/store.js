import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogin:false,
        car:[],
        Mes:{},
        user:[],
        back:"shop"
    },
    getters:{
        clearUp:function(state){
            return state.car
        },
        addAll:function(state){
            var sum = 0
            for(var i in state.car){
                sum += state.car[i].num*state.car[i].price
            }
            return sum
        }
    },
    mutations:{
        addCar:function(state,g){//添加购物车并查重
            var swi = -1
            for(var i in state.car){
                if(state.car[i].id == g.id){
                    swi = i
                    break
                }
            }
            //console.log(swi)
            if (swi != -1){
                state.car[swi].num ++
            }else{
                g.num = 1
                state.car.unshift(g)
            }
            //console.log(state.car)
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        min:function(state,g){//防止商品数量小于一
            state.car[g].num <= 1 ? state.car[g].num = 1 : state.car[g].num--
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        add:function(state,g){//增加商品数量按钮
            state.car[g].num++
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        change:function(state,g){//获取用户输入个数
            state.car[g.ind].num = g.value
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        del:function(state,g){//删除购物车商品
            for(var i in state.car){
                if(state.car[i].id == g){
                    //console.log(state.car[i])
                    state.car.splice(i,1)
                    break
                }
            }
            
        },
        lookGoods:function(state,g){//商品详情信息
            state.Mes = g
        },
        clear:function(state){//支付后清空购物车
            state.car = []
        },
        reg:function(state,g){//注册用户
            state.user = g
        },
        back:function(state,g){//返回首页用户页
            state.back = g
            //console.log(state.back)
        }
    }
})