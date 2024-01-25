<script>


export default {
    data() {
        return {
            activeImageSrc: 'https://img.freepik.com/photos-premium/photographe-voyage-femme-ville-appareil-photo-capturer-souvenirs-vacances-femme-professionnelle-fille-equipement-photographie-exterieur-prise-vue-vacances-photos-voyage_590464-183910.jpg',
            smallImages: [
                'https://img.freepik.com/photos-premium/photographe-voyage-femme-ville-appareil-photo-capturer-souvenirs-vacances-femme-professionnelle-fille-equipement-photographie-exterieur-prise-vue-vacances-photos-voyage_590464-183910.jpg',
                'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
                'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
                'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            ],
        };
    },
    methods: {
        changeImage(image) {
            this.activeImageSrc = image;
        },
    },
};
</script>
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
            <div class="pb-5 Image_active">
              <img
                :src="activeImageSrc"
                id="imageActive"
                class="pb-1 img-fluid"
                width="100%"
                height="1000px"
              />
              <div class="small-img-group">
                <div v-for="(image, index) in smallImages" :key="index" class="small-img-col">
                  <img :src="image" alt="" width="100%" class="small-img" @click="changeImage(image)" />
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-lg-1"></div> -->
          <div class="col-lg-7 pl-4">
            <p>Category / Haha </p>
          </div>
        </div>
      </div>
</template>