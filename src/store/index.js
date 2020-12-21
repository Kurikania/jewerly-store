import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        slug: "1",
        inStock: 2,
        name: "Silver Ring",
        price: 500,       
        image: [
          "https://i.imgur.com/LIi5RFF.jpeg",
          "https://i.imgur.com/XjkR17X.jpeg",
          "https://i.imgur.com/LIi5RFF.jpeg",
        ], 
        description: "Silver rings have a multitude of meanings and symbolism behind them. A single ring has that meaning and significance behind it.",        
        details: [{size: 1, weight: 15, metal: "silver",probe: 925,},
                  {size: 2, weight: 18, metal: "silver",probe: 925,},
                  {size: 3, weight: 20, metal: "silver",iprobe: 925,},
        ]
      },

      {
        id: 2,
        slug: "2",
        inStock: 4,
        name: "Leaf ring",
        
        image: [
          "https://i.imgur.com/XjkR17X.jpeg",
          "https://i.imgur.com/LIi5RFF.jpeg",
          "https://i.imgur.com/XjkR17X.jpeg",
        ],
        price: 500,        
        description: "Pure silver is very soft, making it a poor choice for an everyday ring, such as an engagement ring or wedding band. The addition of copper makes silver strong.",
        details: [{size: 1, weight: 15, metal: "silver",probe: 925,},
        {size: 2, weight: 18, metal: "silver",probe: 925,},
        {size: 3, weight: 20, metal: "silver",probe: 925,},
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
      inStock: 5,      
      description: "A necklace is an article of jewellery that is worn around the neck. Necklaces may have been one of the earliest types of adornment worn by humans.",
      details: [{size: 1, weight: 15, metal: "silver", probe: 925 },
                  {size: 2, weight: 18, metal: "silver", probe: 925},
                  {size: 3, weight: 20, metal: "silver", probe: 925},
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
      console.log(state.products[id-1])
      state.products[id-1].inStock--
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index[0], 1);       
      state.products[index[1]-1].inStock++
      
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
