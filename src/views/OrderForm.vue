<template>
  <div >
    <GoBack />
    <div class="md-layout" id="shopping-cart">
    <div class="md-layout-item md-medium-size-40 md-small-size-100">
    <md-card class="md-layout-item  md-small-size-100">
    <md-card-header>
      <div class="md-title">Your Order</div>
    </md-card-header>
    <md-card-content>
    <md-table>
      <md-table-row>      
        <md-table-head>#</md-table-head>
        <md-table-head>Item</md-table-head>
        <md-table-head>Price</md-table-head>                 
        <md-table-head> </md-table-head>                 
      </md-table-row>

      <md-table-row  v-for="(item, index) in cart" :key="index">            
        <md-table-cell>{{ index +1 }}</md-table-cell>
        <md-table-cell>{{ item.name }}</md-table-cell>                    
        <md-table-cell>{{ item.price }}</md-table-cell>
        <md-table-cell>
            <md-button class="md-icon-button md-raised" @click="removeItem(index)"> 
            <span class="material-icons">remove_shopping_cart</span> 
            </md-button>
          </md-table-cell>
      </md-table-row>          
    </md-table>
    </md-card-content>
    </md-card>
    </div>
    <div class="md-layout-item md-medium-size-40 md-small-size-100">
     <form novalidate class="md-layout">
      <md-card class="md-layout-item  md-small-size-100">
        <md-card-header>
          <div class="md-title">Fill the Form</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName"  />              
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName"  />
              </md-field>
            </div>
          <div class="md-layout-item md-small-size-100">
          <md-field >
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
          </md-field>
          </div>  
        </div>
        </md-card-content>
        <md-card-actions>
          <router-link :to= "{name: 'Product'}">
          <md-button type="submit" class="md-primary"  @click="emptyCart()">Checkout</md-button>
          </router-link>
        </md-card-actions>
      </md-card>
    </form>
    </div>
    </div>
  </div>
</template>
<script>
import GoBack from "../components/GoBack"
export default {
  components: {GoBack },
  name: "OrderForm",
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      }
    }),
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
      this.$store.dispatch("removeItem", index);
    },
    emptyCart() {
       this.$store.dispatch("empty");
    }
    
  }
}
</script>


<style lang="scss" scoped>
#shopping-cart {
  display: flex;
  align-items:flex-start;
  justify-content: center;
  width: 100%;
  border: 1px solid rgba(#000, 0.12);
  .md-layout {
    display: flex; 
    flex-direction: column;   
    margin-top: 2%;
    background-color: rgb(255, 255, 255);
    margin: auto;
    border-bottom: 1px solid rgb(126, 126, 126);
  }
  .md-span {
    text-align: right;
    width: 100%;
  }
  .shoppingBody {
    position: fixed;   
    padding-top: 25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

}
</style>

