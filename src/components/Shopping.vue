<template>
  <div id="shopping-cart">
    <div class="md-layout-item">Total {{ orderSum }}</div>
    <md-button class="md-accent md-raised" @click="showList()" id="show">{{ cartCount }}</md-button>

    <div id="shoppingList" class="shoppingBody hidden" v-if="cartCount" >
      <div class="md-layout" v-for="(item, index) in cart" :key="index">
        <div class="md-layout-item">{{ item.name }}</div>
        <div class="md-layout-item">
          <img :src="item.image[0]" alt />
        </div>
        <div class="md-layout-item">{{ '$' + item.price }}</div>
        <div class="md-layout-item">
          <md-button class="md-primary" @click="removeItem(index, item.id)">Remove</md-button>
        </div>
      </div>
      <div class="md-layout" >
        <div class="md-layout-item">          
            <md-button class="md-primary" @click="showList()">Back to shopping</md-button>
            <router-link :to= "{name: 'OrderForm'}"><md-button class="md-accent" @click="showList()">
              Buy Now
            </md-button> </router-link>          
        </div>
      </div>
    </div> 
    <div id="shoppingList" class="shoppingBody hidden" v-else>
      <div class="md-layout">
          <div class="md-layout-item">Go buy stuff</div>
          <div class="md-layout-item">
            <md-button class="md-primary" @click="showList()">Back to shopping</md-button>      
          </div>
      </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "Shopping",
  computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },    
    cart() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id;
        });
      });
    },
    orderSum() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id;
        })
      }).reduce((a, b) => a + (b.price || 0), 0);      
    }
  },
  methods: {
    removeItem(index) {
      console.log(this.cart[index].id)   
      this.$store.dispatch("removeItem", [index, this.cart[index].id]);   
    },
    showList() {
      var modal = document.getElementById("shoppingList");
        modal.classList.toggle("hidden");
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.classList.toggle("hidden");
        }
      };
    }
  }
};
</script>



<style lang="scss" scoped>
#shopping-cart {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
  .md-layout {
    display: flex;    
    margin-top: 2%;
    width: 70%;
    background-color: rgb(255, 255, 255);
    margin: auto;
    z-index: 9999999;
    padding: 20px;
    border-bottom: 1px solid rgb(126, 126, 126);
    .md-layout-item {
      margin-top: 2%;
      img {
        width: 25%;
      }
    }
  }
  .md-span {
    text-align: right;
    width: 100%;
  }
  .shoppingBody {
    position: fixed;
    z-index: 9999999;
    padding-top: 25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
  .hidden{
    display: none
  }
}
</style>

