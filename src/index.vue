<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
    <div class="img-background" >
        <img src="./assets/image/main.jpg" alt="" srcset="" width="100%">
    </div>
        <Header />
        <div style="background-color:var(--color-black);">
            <router-view></router-view>
            <Footer />
        </div>
</template>

<script scoped >


export default {
    components: {
        Header,
        Footer
    
    }
}

</script>