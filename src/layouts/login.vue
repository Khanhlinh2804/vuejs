<template>
    <div class="login-body">
        <div class="wrapper" > 
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="email" name="name" id="" placeholder="Email" required >
                    <i class="bi bi-envelope-fill"></i>
                </div>
                <div class="input-box">
                    <input type="text" name="password" id="" placeholder="Password" required >
                    <i class="bi bi-lock-fill"></i>
                </div>
                <div class="remember-forgot">
                    <label for=""><input type="checkbox" name="" id="">Remember me</label>
                    <router-link to="#"  style="color: #fff; text-decoration: none;"> Forgot password?</router-link>
                </div>
                <button type="submit" class="btn-login">Login</button>
                <div class="register-link">
                    <p>Don't have an account?
                        <router-link to="/register" style="color: #fff; text-decoration: none; font-weight: 600;">Register</router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>