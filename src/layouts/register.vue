

<template>
    <div class="register-body">
        <div class="wrapper-body container">
            <h1 style="filter: drop-shadow(10px 7px 10px rgb(234, 255, 1));">Register</h1>
            <form action="">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <div class="input-box">
                            <input type="text" name="name" id="" placeholder="User Name" required>
                            <i class="bi bi-person-fill"></i>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <div class="input-box">
                            <input type="text" name="name" id="" placeholder="Email" required>
                            <i class="bi bi-envelope-fill"></i>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <div class="input-box">
                            <input type="text" name="name" id="" placeholder="Password" required>
                            <i class="bi bi-lock-fill"></i>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-md-6">
                        <div class="input-box">
                            <input type="text" name="name" id="" placeholder="Comfirm Password" required>
                            <i class="bi bi-lock-fill"></i>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn-login">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    
}
</script>