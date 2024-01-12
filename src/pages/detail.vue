<template>
    <div class="container pt-5" style="position: absolute;top: 100px;left: 50%;transform: translateX(-50%);">
        <div class="row">
            <div class=" banner pt-5 text-center text-break">
                <div class="pt-4 fw-bold">
                    <p class="text-uppercase color-white home-text-top2 lh-1 font-family-Roboto-Condensed">
                        SHOP</p>
                </div>
                <nav class="breadcrumns-nav ">
                    <ol class="breadcrumb">
                        <li class="">
                            <router-link to="/" class="color-red link-underline link-underline-opacity-0">Home</router-link>
                        </li>
                        <li class="active-nav"> <i class="bi bi-chevron-double-right" style="font-size: 10px;"></i> </li>
                        <li class="active-nav active"> Product</li>
                        <li class="active-nav"> <i class="bi bi-chevron-double-right" style="font-size: 10px;"></i> </li>
                        <li class="active-nav active"> Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-sm-12">
                    <div class="zoom">
                        <img src="../assets/image/pro1.1.jpg" width="100%" height="600px" >
                        <img src="../assets/image/pro1.1.jpg" id="proZoom">
                    </div>
            </div>
        </div>
    </div>
</template>