<template>
    <Layout>
        <div v-if="this.$page.gcms.product" class="product_layout" >
        <h1>รายการเครื่องแต่งกาย</h1>
        <div class="typeManu">
        <button class="typeButt" v-on:click="displayShirt()">เสื้อ T-shirt</button>
        <button class="typeButt" v-on:click="displayTrouser()">กางเกง</button>
        <button class="typeButt" v-on:click="displaySuit()">สูท</button>
      </div>
            <li v-for="Products in Products" :key="Products.name" class="food_li">
          <div v-if="Shirt">
              <div @click="goTo(Products.name)" class="containers">
                <img :src="Products.image[0].url" class="img" />
                <p class="info">{{ Products.name }} {{ Products.price }}</p>
              </div>
          </div>
          <div v-if="Trouser">
              <div @click="goTo(Products.name)" class="containers">
                <img :src="Products.image[0].url" class="img" />
                <p class="info">{{ Products.name }} {{ Products.price }}</p>
              </div>
          </div>
          <div v-if="Suit">
              <div @click="goTo(Products.name)" class="containers">
                <img :src="Products.image[0].url" class="img" />
                <p class="info">{{ Products.name }} {{ Products.price }}</p>
              </div>
          </div>
        </li>
        </div>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            product: {
                name: '',
                description: {
                    markdown: ''
                },
                images: [{
                    url: ''
                }]
            }
        
        }
    },
    created(){
        this.product = this.$page.gcms.product
        console.log('Product here', this.product)
    }
}  
</script>
<page-query>
query GetProduct($id: ID) {
    gcms {
        product(where: {id: $id}) {
                id
            name
            description{
                markdown
            }
            price
            color
            images{
                url
            }
        }
    }
}
</page-query>
<style scoped>
    .img{
        width: 300px;
    }
    .product_layout{
        display: flex;
        flex-wrap: wrap;

        justify-content: space-between;
        margin-top: 2rem;
    }
</style>
<page-query>
  {
       product{
        id
        name
        price
        color
        image{
          url
        }
      }
}
</page-query>