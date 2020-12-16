<template>
<div> 
        <GoBack />
    <div class="md-layout">
    <div class="md-layout-item md-xsmall-size-100">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{product.name}}</div>
        </md-card-header-text>
      </md-card-header>
      <md-card-content class="md-layout">
        <md-card-media md-medium class=" md-layout-item md-large-size-45 md-medium-size-45 md-xsmall-size-100">
            <carousel perPage="1">
                <slide v-for="(i, index) in product.image" :key="index">
                     <img :src="i" :alt="product.name">
                </slide>
            </carousel>
        </md-card-media>
        <div class="md-layout-item md-large-size-45 md-medium-size-45 md-xsmall-size-100">

          <md-steppers >
            <md-step md-done id="first" md-label="Description">
              {{product.description}}
              <div class="md-subheading">Price  ${{product.price}}</div>
            </md-step>

            <md-step id="second" md-label="Details">
              <md-table>
                    <md-table-row>      
                      <md-table-head>Size</md-table-head>
                      <md-table-head>Weight</md-table-head>
                      <md-table-head>Material</md-table-head>
                      <md-table-head>In stock</md-table-head>
                    </md-table-row>

                    <md-table-row v-for="detail in product.details" :key="detail.size">            
                      <md-table-cell>{{detail.size}}</md-table-cell>
                      <md-table-cell>{{detail.weight}}</md-table-cell>
                      <md-table-cell>{{detail.metal}}</md-table-cell>
                      <md-table-cell>{{detail.inStock}}</md-table-cell>
                    </md-table-row>          
                </md-table>
            </md-step>
          </md-steppers> 
          <md-button class="md-primary" @click="addItem(product.id, product.price)">Add to Cart</md-button>
        </div>     
      </md-card-content>
    </md-card>
    </div>
    </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import GoBack from "../components/GoBack"
export default {
    components: {
        GoBack,
        Carousel,
        Slide},
    props: {
        slug: {
        type: String,
        required: true
        }
    },
    computed: { 
        product() { 
            return this.$store.getters.products.find(d => { return d.slug == this.slug})
        }
    },
    methods: {
      addItem(id) {
            this.$store.dispatch("addItem", id);
    }
  },
}
</script>

<style lang="scss" scoped>
  .td{
    text-align: center
  }
  .md-layout {
    justify-content: space-around;
    .md-subheading {
      text-align: right;
    }
  }
</style>