import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Product",
    component: Product,
  },
  {
    path: '/ProductDisplay/:slug',
    name: 'ProductDisplay',
    props: true, 
    component: () => import('../views/ProductDisplay'),
  },
  {
    path: '/OrderForm',
    name: 'OrderForm',
    props: true, 
    component: () => import('../views/OrderForm'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
