import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isLogin:false,
        car:[],
        Mes:{},
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
        addCar:function(state,g){
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
        min:function(state,g){
            state.car[g].num <= 1 ? state.car[g].num = 1 : state.car[g].num--
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        add:function(state,g){
            state.car[g].num++
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        change:function(state,g){
            state.car[g.ind].num = g.value
            state.car.push({})//强制触发state的数据监听
            state.car.pop()
        },
        del:function(state,g){
            for(var i in state.car){
                if(state.car[i].id == g){
                    //console.log(state.car[i])
                    state.car.splice(i,1)
                    break
                }
            }
            
        },
        lookGoods:function(state,g){
            state.Mes = g
        }
    }
})