<script setup>

import Shipping from '../layouts/shipping.vue';
import Bigsale from '../layouts/big-sale.vue';

</script>
<template>
    <div class="container pt-5" style="position: absolute;top: 100px;left: 50%;transform: translateX(-50%);">
        <div class="row" style="">
            <div class=" banner pt-5 text-center text-break">
                <span>A Few Words</span>
                <div class="pt-1 fw-bold">
                    <p class="text-uppercase color-white home-text-top2 lh-1 font-family-Roboto-Condensed">
                        About
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="container-hiddent">
        </div>
        <div class="row pt-5">
            <div class="col-lg-6 col-sm-6 pt-5">
                <h5 class="font-family-Kaushan-Script color-red home-text-top ">
                    Our Story
                </h5>
                <div class="pt-4 fw-bold text-4">
                    <p class="text-uppercase lh-1 color-red text-break">
                        OUR STORY IS ONE OF <samp class="color-white">PASSION, PERSEVERANCE, AND COMMITMENT</samp></p>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 text-5 pt-5">
                <h3 class="">OUR JOURNEY BEGAN WHEN A GROUP OF DEDICATED INDIVIDUALS, FUELED BY A SHARED LOVE FOR
                    EXCEPTIONAL DEALS AND UNMATCHED SAVINGS, CAME TOGETHER TO CREATE A SHOPPING EXPERIENCE LIKE NO OTHER
                </h3>
                <p class="text-align-justify pt-4">Founded in 2008, BlackFridayShop set out with a simple mission – to make
                    Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips.
                    Over the years, we've dedicated ourselves to curating the finest selection of products, from electronics
                    and fashion to home essentials and more, all with one goal in mind: providing you with the ultimate
                    shopping experience.</p>
                <p>What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the
                    finest products, establishing partnerships with trusted brands that share our commitment to excellence.
                    This dedication ensures that every item you find at BlackFridayShop meets the highest standards of
                    quality.</p>
            </div>
        </div>
        <div class="row pt-5">
            <div class="about-1 pm-5 ">
                <div class=" banner-1 pt-5 text-center  text-break ">
                    <div>
                        <h5 class="font-family-Kaushan-Script color-red home-text-top ">
                            Limited-Time Offer
                        </h5>
                    </div>
                    <div class="pt-4 fw-bold">
                        <p class=" color-red home-text-top2 lh-1 font-family-Roboto-Condensed">
                            <spam style="color: rgb(255, 255, 255); font-size: 90px;">SAVE BIG: UP TO</spam>
                            60% OFF
                            <spam style="color: rgb(255, 255, 255); font-size: 90px;">ON ALL HEADPHONES</spam>
                        </p>
                    </div>
                    <div class="text-set pt-5 fw-bold">
                        <button class="text-uppercase " style="border: none;">set reminder</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-lg-6 col-sm-12 pt-5">
                <h5 class="font-family-Kaushan-Script color-red home-text-top ">
                    Our Story
                </h5>
                <div class=" text-5 ">
                    <h3 class="" style="font-size: 60px;">OUR VALUES ARE AT THE HEART OF EVERYTHING WE DO</h3>
                    <p>Our values are the foundation upon which BlackFridayShop is built. They’re not just words on a page;
                        they’re the principles that drive our everyday actions and decisions. We are dedicated to upholding
                        these values and ensuring that they shine through in every aspect of your experience with us.</p>
                        <p>Thank you for choosing BlackFridayShop, where our values meet your expectations.</p>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 pt-5">
                <img src="../assets/image/about-03.jpg" alt="" width="100%">
            </div>
        </div>
    </div>
    <Shipping />
<Bigsale /></template>