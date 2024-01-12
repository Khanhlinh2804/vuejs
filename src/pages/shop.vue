<script>
export default {
    
}
</script>
<template>
    <div class="container pt-5" style="position: absolute;top: 100px;left: 50%;transform: translateX(-50%);">
        <div class="row">
            <div class=" banner pt-5 text-center text-break">
                <div class="pt-4 fw-bold">
                    <p class="text-uppercase color-white home-text-top2 lh-1 font-family-Roboto-Condensed">
                    SHOP</p>
                </div>

                <nav class="breadcrumn-nav ">
                    <ol class="breadcrumb">
                        <li class="">
                            <router-link to="/" class="color-red link-underline link-underline-opacity-0">Home</router-link>
                        </li>
                        <li class="active-nav"> <i class="bi bi-chevron-double-right" style="font-size: 10px;"></i> </li>
                        <li class="active-nav active"> Library</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="container-fluid ">
        <div class="row pt-4">
            <div class="col-lg-3 col-sm-0">
                <table class="table-dark table-striped ">
                    <thead>
                        <tr>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ban</td>
                        </tr>
                        <tr>
                            <td>abd</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-9 col-sm-12">
                <div class="row">
                    <div class="col-lg-6">
                        <p style="font-size: 20px;">Have 16 products</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="shop-select-product">
                            <select class="">
                                <option selected>Open this select menu</option>
                                <option >One</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row pt-5 pb-5">
                    <div class="col-lg-4 col-sm-6 pt-5">
                        <div class="shop-item-product">
                            <div class="product-img">
                                <img src="../assets/image/pro1.jpg" alt="" style="width: 100%; height: 400px;">
                            </div>
                            <div class="d-flex">
                                <h6 class="hover">
                                    <p> - {{discount}}%</p>   
                                </h6>
                                <a href="" class="shop-icon-bag">
                                    <i class="bi bi-basket2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="card-text-product pt-3">
                            <h5 >Name</h5>
                            <div class="card-star d-flex">
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        
                            <div class="card-price-product d-flex">
                                <span class="text-decoration-line-through">$50</span>
                                <p>$</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <div class="row">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-items">
                                <a class="page-paginate" href="#">
                                    <i class="bi bi-arrow-left-short"></i>
                                </a>
                            </li>
                            <li class="page-items">
                                <a class="page-paginate pl-1 pr-1" href="#">1</a>
                            </li>
                            
                            <li class="page-items">
                                <a class="page-paginate" href="#">
                                    <i class="bi bi-arrow-right-short"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    
</template>