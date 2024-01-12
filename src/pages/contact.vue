<script setup>

import Bigsale from '../layouts/big-sale.vue';

</script>
<template>
    <div class="container pt-5" style="position: absolute;top: 100px;left: 50%;transform: translateX(-50%);">
        <div class="row" style="">
            <div class=" banner pt-5 text-center text-break">
                <span>Let's talk</span>
                <div class="pt-1 fw-bold">
                    <p class="text-uppercase color-white home-text-top2 lh-1 font-family-Roboto-Condensed">
                        contact us
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row pt-5 pb-5">
            <div class="col-lg-5 col-sm-6 pt-5 pb-5">
                <h5 class="text-uppercase color-white home-text-top2 lh-1 font-family-Roboto-Condensed "
                    style="font-size: 80px;">
                    Get in touch
                </h5>
                <p>Have questions or need assistance? Click the 'Contact Us' icon to get in touch with our friendly and
                    responsive customer support team</p>
                <div class="group-text-icon">
                    <div class="item-icon">
                        <span>
                            <i class="bi bi-geo-alt-fill"></i>
                        </span>
                        <h4 class="text-uppercase pt-2"> Address</h4>
                    </div>
                    <address>2972 Westheimer Rd. Santa Ana, Illinois 85486</address>
                    <hr>
                </div>
                <div class="group-text-icon">
                    <div class="item-icon">
                        <span>
                            <i class="bi bi-telephone-fill"></i>
                        </span>
                        <h4 class="text-uppercase pt-2"> phone</h4>
                    </div>
                    <address>0986797018</address>
                    <hr>
                </div>
                <div class="group-text-icon">
                    <div class="item-icon">
                        <span>
                            <i class="bi bi-envelope-fill"></i>
                        </span>
                        <h4 class="text-uppercase pt-2"> Email</h4>
                    </div>
                    <address>khanhlinh6863@gmail.com</address>
                    <hr>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-6 col-sm-6 text-5 pt-5">
                <form action="" method="" class="pt-4">
                    <div class="row">
                        <div class="form-group col-lg-6 col-sm-12">
                            <label for="" class="">Name <span style="color: red;">*</span></label>
                            <input type="text" name="" id="" required>
                            <p>First</p>
                        </div>
                        <div class="col-lg-6 col-sm-12 pt-4 col-mb-6 form-group">
                            <label for=""></label>
                            <input type="text" name="" id="" class="" required>
                            <p>Last</p>
                        </div>
                        <div class="col-lg-12 col-sm-6 form-group pt-4">
                            <label for="" class="">Email <span style="color: red;">*</span></label>
                            <input type="text" required>
                        </div>
                        <div class="col-lg-12 col-sm-6 form-group-textarea pt-4">
                            <label for="" class="">Message <span style="color: red;">*</span></label>
                            <textarea type="text" cols="3"></textarea>
                        </div>
                        <div class="text-set pt-5 fw-bold">
                    <button class="text-uppercase " type="submit" style="border: none;font-size: 1em;">Send</button>
                </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Bigsale />
</template>