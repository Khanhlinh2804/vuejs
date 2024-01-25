<script setup>
import Shipping from '../layouts/shipping.vue';
import Bigsale from '../layouts/big-sale.vue';

</script>

<template>
    <div class="container pt-5" style="position: absolute;top: 100px;left: 50%;transform: translateX(-50%);">
        <div class="row">
            <div class=" banner pt-5 text-center text-break">
                <div>
                    <h5 class="font-family-Kaushan-Script color-red home-text-top ">
                        Hurry, Black Friday is Almost Here!
                    </h5>
                </div>
                <div class="pt-4 fw-bold">
                    <p class="text-uppercase color-red home-text-top2 lh-1 font-family-Roboto-Condensed">
                        <span style="color: rgb(255, 255, 255);">TIME LEFT UNTIL OUR</span>
                        BIGGEST SALE OF THE YEAR BEGINS
                    </p>
                </div>
                <div class="text-set pt-5 fw-bold">
                    <button class="text-uppercase " style="border: none; ">set reminder</button>
                </div>
            </div>
        </div>
    </div>
    <div class="background-black">
        <div class="container pt-10">
            <div class="row pb-5">
                <div class="col-sm-3 ">
                    <div class="text-center border-text">
                        <p id="day">0</p>
                        <h5 class="text-time">Date </h5>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="text-center border-text">
                        <p id="hours">0</p>
                        <h5 class="text-time">House </h5>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="text-center border-text">
                        <p id="minutes">0</p>
                        <h5 class="text-time">Minutes </h5>
                    </div>
                </div>
                <div class="col-sm-3 ">
                    <div class="text-center border-text">
                        <p id="seconds">0</p>
                        <h5 class="text-time">Seconds</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-5 pb-5 ">
            <div class="row pt-5 pb-5 home-background-image ">
                <div class="col-lg-1"></div>
                <div class="col-sm-5">
                    <div class="home-text-main">
                        <samp>Up To 50% Off</samp>
                        <h1>GRAB YOUR FAVORITES BEFORE THEY'RE GONE</h1>
                        <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this
                            limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
                        <a href="#" class=" link-underline link-underline-opacity-0" style="font-size: 20px;">
                            SHOP NOW
                        </a>
                    </div>
                </div>
                <div class="col-sm-5">
                    <img src="../assets/image/headphone.png" alt="" width="90%" height="100%">
                </div>
                <div class="col-lg-1"></div>
                <div class="home-top-image">
                </div>
            </div>
        </div>
        <div class="container pt-5 pb-5 lih">
            <div class="row">
                <div class="col-sm-5"></div>
                <div class="col-sm-2">
                    <img src="../assets/image/pro1.1.jpg" alt="" srcset="" width="150px" height="150px">
                </div>
                <div class="col-sm-5"></div>
            </div>
            <div class="row">
                <div class="col-sm-5">
                    <div class="home-text-main">
                        <samp>Up To 50% Off</samp>
                        <h1>UP TO 75% OFF <span>UP TO 75% OFF</span>ON HEADPHONES</h1>
                        <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this
                            limited-time opportunity to upgrade your audio game. Grab your perfect pair now!</p>
                        <a href="#" class="link-offset-2 link-underline link-underline-opacity-0">
                            SHOP NOW
                        </a>
                    </div>
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-6">
                    <img src="../assets/image/pro1.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="container pt-5">
            <div class="row background-background pm-5 ">
                <div class=" banner pt-5 text-center  text-break ">
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
        <div class="container pt-5">
            <div class="pt-5 text-center text-main2 pb-5">
                <h5>Unbelievable Discounts Await You</h5>
                <h3>
                    BLACK FRIDAY MADNESS IS HERE!
                </h3>
            </div>
            <div class="row pt-5">
                <div class="col-lg-3">
                    <router-link to="/detail" class=" link-underline link-underline-opacity-0 ">
                        <div class="container_card">
                            <img src="https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg" alt="" width="100%" height="400px">
                            <div class="overlay">
                                <div class="items"></div>
                                <div class="items head">
                                    <p>Flower Embroidery Hoop Art</p>
                                    <hr>
                                </div>
                                <div class="items price">
                                    <p class="old">$699</p>
                                    <p class="new">$345</p>
                                </div>
                                <div class="items cart">
                                    <button type="submit" class="fa fa-shopping-cart"></button>
                                
                                </div>
                            </div>
                        </div>
                    </router-link> 
                    
                </div>
            </div>
        </div>
        <Shipping />
        <div class="containers pt-5 pb-5">
            <div class="containers second">
                <div class="container">
                    <div class="text-main2">
                        <h5>What Our Clients Say</h5>
                        <h3>CUSTOMER TESTIMONIALS</h3>
                    </div>
                    <div class="row pt-5">
                        <div class="col-lg-1"></div>
                        <div class="col-sm-12 col-lg-5 left-0">
                            <div class="text-star ">
                                <div class="d-flex justify-content-start pb-4">
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                </div>
                                <p>I couldn't be happier with my Black Friday Shop experience. The deals were incredible,
                                    and the quality of the products I purchased exceeded my expectations. I was particularly
                                    impressed with the seamless shopping process and the quick, hassle-free delivery.</p>
                                <h6>James Oliver</h6>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-5 left-0">
                            <div class="text-star ">
                                <div class="d-flex justify-content-start pb-4">
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                    <span class="fa fa-star star"></span>
                                </div>
                                <p>Absolutely thrilled with my experience at this online store! The selection is fantastic,
                                    the prices are unbeatable, and the customer service is top-notch. I recently purchased a
                                    camera, and not only did it arrive quickly, but the quality exceeded my expectations.
                                    Highly recommended!</p>
                                <h6>Daniel Taylor</h6>
                            </div>
                        </div>
                        <div class="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </div>
        <Bigsale />
    </div>
</template>

<style scoped>
.border-text {
    margin: 20px 0 40px 0;
    height: 90%;
    width: 100%;
    border: 5px rgb(255, 255, 255) solid;
    color: white;
}

.border-text p {
    font-size: 200px;
}

.border-text spam {
    font-size: 50px;
}
</style>