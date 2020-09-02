<template>
<div class="details">
    <div class="container">
        <div class="row">
            <div class="col-md-12" v-for="(product,index) in products" :key="index">
                <div v-if="proId == product.productId">
                    <h1>{{product.productTitle}}</h1>
                    <img :src="product.image" class="img-fluid" />

                    <p>{{product.desc}}</p>
                    <p>{{product.price}} MT</p>

                    <v-text-field v-model="cellphone" label="Number" required placeholder="849535157"></v-text-field>

                    <button class="btn btn-primary" @click="order(product)">Encomenda</button>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    set_paymentData
} from '@/services/Mpesa'

export default {
    name: "details",
    data() {
        return {
            proId: this.$route.params.id,
            title: "details",
            cellphone: "",
            products: [{
                    productTitle: "ABCN",
                    image: require("assets/images/product1.png"),
                    desc: "ABCN",
                    productId: 1,
                    price: 10,
                },
                {
                    productTitle: "KARMA",
                    image: require("assets/images/product2.png"),
                    desc: "KARMA",
                    productId: 2,
                    price: 5,
                },
                {
                    productTitle: "Tino",
                    image: require("assets/images/product3.png"),
                    desc: "Tino",
                    productId: 3,
                    price: 2,
                },
                {
                    productTitle: "EFG",
                    image: require("assets/images/product4.png"),
                    desc: "Eu amo isto",
                    productId: 4,
                    price: 3,
                },
                {
                    productTitle: "MLI",
                    image: require("assets/images/product5.png"),
                    desc: "Eu amo isto",
                    productId: 5,
                    price: 8,
                },
                {
                    productTitle: "Banans",
                    image: require("assets/images/product6.png"),
                    desc: "Come tu",
                    productId: 6,
                    price: 1,
                },
            ],
        };
    },
    methods: {
        order: async function (product) {

            const a = await set_paymentData(this.cellphone, '11114', 'T12344CC', product.price);

            alert('Sucess!')
        },
    },
};
</script>
