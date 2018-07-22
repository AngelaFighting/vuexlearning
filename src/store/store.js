import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state 类似 data
    //这里面写入数据
    name: '极品粥铺', //店铺名
    minPrice: '20', //起送价格
    deliveryPrice: '4',	// 配送费
    goods: [ //店铺商品
      {
        "id": "0000001",
        "name": "皮蛋瘦肉粥",
        "price": 10,
        "oldPrice": "12",
        "description": "咸粥",
        "sellCount": 229,
        "rating": 100,
        "image": require('../assets/pdsrz.jpg'),
        "num": 0,
        "info": "皮收瘦肉粥是一种营养丰富的粥品，这种粥的主要食材是大米、瘦肉和皮蛋，它们的都含有大量的蛋白质和多种维生素以及适量的脂肪和微量元素，人们食用以后能快速把这些营养吸收，满足身体各器官对不同营养成分的需要。",
      },
      {
        "id": "0000002",
        "name": "红豆薏米美肤粥",
        "price": 8,
        "oldPrice": "10",
        "description": "甜粥",
        "sellCount": 86,
        "rating": 100,
        "image": require('../assets/hdymz.jpg'),
        "num": 0,
        "info": "红豆薏米美肤粥有去湿利水的作用，红豆含有丰富的维生素，可利尿消肿，芡实也有补中益气的效果，以上材料一起煮的五谷杂粮粥，不仅能让你拥有完美身材，还能帮助靓丽容颜，是男女老幼不可多得的养生食谱。",
      },
      {
        "id": "0000003",
        "name": "南瓜粥",
        "price": 9,
        "oldPrice": "12",
        "description": "甜粥",
        "sellCount": 91,
        "rating": 100,
        "image": require('../assets/ngz.jpg'),
        "num": 0,
        "info": "南瓜是非常养胃的一种食材，尤其适合脾胃虚弱、营养不良、食欲不振的朋友食用。南瓜因为营养成分丰富，所以功效也特别多样"
      },
      {
        "id": "0000004",
        "name": "红枣山药糙米粥",
        "price": 10,
        "oldPrice": "12",
        "description": "甜粥",
        "sellCount": 81,
        "rating": 91,
        "image": require('../assets/hzsyz.jpg'),
        "num": 0,
        "info": "山药：强健机体，滋肾益精、益智安神，还预防心脑血管疾病。但便秘者慎用。红枣：益肾暖胃，补中益气，治阴虚。但糖尿病人慎食",
      },
      {
        "id": "0000005",
        "name": "青菜肉丝粥",
        "price": 12,
        "oldPrice": "13",
        "description": "咸粥",
        "sellCount": 86,
        "rating": 100,
        "image": require('../assets/qcrsz.jpg'),
        "num": 0,
        "info": "中医认为青菜性味寒凉、易伤脾胃，少许寒必温缓和寒凉之性。能活血化瘀、散血消肿的作用，可用于孕妇产后淤血腹痛以及治疗疖肿、丹毒",
      },
      {
        "id": "0000006",
        "name": "银耳莲子粥",
        "price": 12,
        "oldPrice": "15",
        "description": "甜粥",
        "sellCount": 362,
        "rating": 100,
        "image": require('../assets/yelzz.jpg'),
        "num": 0,
        "info": "银耳性质平和，味甘、淡，无毒，具有润肺生津、滋阴养胃。益气安神，强心健脑等作用，有“滋阴补肾，润肺止咳。和胃益气之功”，是“润肺滋阴要品”。养生学家甚至认为其滋阴润肺的作用可与燕窝媲美。因其物美价廉，故人人都能享用",
      }
    ]
  },
  getters: {
    // getters 类似 computed
    // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    // Getter 接受 state 作为其第一个参数
    // getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
    totalPrice(state){
      let totalP = 0;
      state.goods.forEach((val, index) => {
        totalP += val.num * val.price;
      });

      if (totalP > 0) {
        totalP = parseFloat(totalP) + parseInt(state.deliveryPrice)
      } else {
        totalP = 0;
      }

      return totalP.toFixed(2);
    },
    totalNum(state){
      let totalN = 0;
      state.goods.forEach((val, index) => {
        totalN += val.num;
      })
      return totalN;
    },
    // getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
    getGoodById: (state) => (index) => {
      return state.goods[index];
    },
  },
  mutations: {
    // mutations 类似methods
    // 写方法对数据做出更改(同步操作)
    goodsReduce(state, index){
      if (state.goods[index].num > 0) {
        state.goods[index].num -= 1;
      }
    },
    goodsAdd(state, index){
      state.goods[index].num += 1;
    },
    insertGood(state, good){
      state.goods.push(good);
    }
  },
  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    insertGood(context, good){
      context.commit('insertGood', good);
    }
    // // 可简写为
    // insertGood({commit},good){
    //   commit('insertGood',good);
    // }
  }
})
