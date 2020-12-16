import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        slug: "1",
        name: "Silver Ring",
        image: [
          "https://i.imgur.com/LIi5RFF.jpeg",
          "https://i.imgur.com/XjkR17X.jpeg",
          "https://i.imgur.com/LIi5RFF.jpeg",
        ], 
        description: "Silver rings have a multitude of meanings and symbolism behind them. A single ring has that meaning and significance behind it.",
        price: 340,        
        details: [{size: 1, weight: 15, metal: "silver",inStock: 80,},
                  {size: 2, weight: 18, metal: "silver",inStock: 85,},
                  {size: 3, weight: 20, metal: "silver",inStock: 5,},
        ]
      },

      {
        id: 2,
        slug: "2",
        name: "Leaf ring",
        image: [
          "https://i.imgur.com/XjkR17X.jpeg",
          "https://i.imgur.com/LIi5RFF.jpeg",
          "https://i.imgur.com/XjkR17X.jpeg",
        ],
        price: 500,
        inStock: 50,
        description: "Pure silver is very soft, making it a poor choice for an everyday ring, such as an engagement ring or wedding band. The addition of copper makes silver strong.",
        details: [{size: 1, weight: 15, metal: "silver",inStock: 80,},
        {size: 2, weight: 18, metal: "silver",inStock: 85,},
        {size: 3, weight: 20, metal: "silver",inStock: 5,},
      ]
    },
    
    {
      id: 3,
      slug: "3",
      name: "Necklace",
      image: [ 
        "https://i.imgur.com/phyo8lT.jpeg",
        "https://i.imgur.com/XjkR17X.jpeg",
        "https://i.imgur.com/phyo8lT.jpeg",
      ],
      price: 600,
      description: "A necklace is an article of jewellery that is worn around the neck. Necklaces may have been one of the earliest types of adornment worn by humans.",
      inStock: 50,
      details: [{size: 1, weight: 15, metal: "silver",inStock: 80,},
                  {size: 2, weight: 18, metal: "silver",inStock: 85,},
                  {size: 3, weight: 20, metal: "silver",inStock: 5,},
        ]
      },
    ],

    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.StoreCart,
  },

  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
      console.log(state.StoreCart)
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    },
    REMOVE_All(state) {
      state.StoreCart.splice(0, state.StoreCart.length)
    },
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    },
    empty(context) {
      context.commit("REMOVE_All")
    }
  },
  modules: {},
});