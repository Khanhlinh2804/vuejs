<script setup>
import { ref } from 'vue';



</script>
<template>
  <div class="container pt-2" id="header" style="position: absolute;top: 0px;left: 50%;transform: translateX(-50%);">
    <div class="container-fulid" style="color: beige; ">
        <nav class="navbar row ">
          <!-- <div class="d-flex"> -->
            <div class="col-sm-3">
              <a class="navbar-brand" href="#">
                  <img src="../assets/logo-me.svg" alt="" srcset="">
              </a>
            </div>
            <div class="col-sm-6">
              <div class="navbar-collapse de-flex">
                  <div class="nav-item">
                    <router-link to="/" class="nav-link text-uppercase">Home</router-link>
                    
                    <!-- <a class="nav-link text-uppercase"  href="#">Home</a> -->
                  </div>
                  <div class="nav-item">
                    <router-link to="/shop" class="nav-link text-uppercase">Shop</router-link>
                    <!-- <a class="nav-link text-uppercase" href="#">Shop</a> -->
                  </div>
                  <div class="nav-item">
                    <router-link to="/about" class="nav-link text-uppercase" >About</router-link>
                  </div>
                  <div class="nav-item">
                    <router-link to="/contact" class="nav-link text-uppercase" >Contact</router-link>
                  </div>
              </div>
            </div>
            <div class="col-lg-3 ">
              <div class="d-flex justify-content-end">
                <router-link  to="/login" class="btn flex-row-reverse">
                    <div class="nav-icon">
                      <i class="bi bi-people-fill"></i>
                    </div>
                </router-link>
                <a href="" class="btn flex-row-reverse">
                  <div class="nav-icon">
                    <i class="bi bi-basket3-fill"></i>

                  </div>
                  <span class="position-absolute  start-70 translate-start badge rounded-pill bg-danger">
                    2 
                  </span>
                </a>
              </div>
              
            </div>
        </nav>
    </div>
    <hr style="color: antiquewhite;">
  </div>
  

</template>
