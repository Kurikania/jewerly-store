<template>
<div class="md-layout">
    <div class="md-layout-item md-medium-size-30 md-small-size-30 md-xsmall-size-100"       
      v-for="product  in  products"
      :key="product.id" >
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ product.name }}</div>
          </md-card-header-text>
        </md-card-header>
        <md-card-content>
          <md-card-media>
            <img :src="product.image[0]" height="250" />
          </md-card-media>
          <span>{{ "$" + product.price }}</span>
        </md-card-content>
         
        <md-button class="md-primary" @click="addItem(product.id, product.price)">Add to Cart</md-button>
        <router-link :to= "{name: 'ProductDisplay', params: {slug: product.slug}}">
        <md-button class="md-primary">More Details</md-button>
        </router-link>
        
      </md-card>
    </div>
</div>
</template>

<script>
export default {
  name: "product",
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    }
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="scss" scoped>
  .md-layout {
    justify-content: space-between
  }
</style>