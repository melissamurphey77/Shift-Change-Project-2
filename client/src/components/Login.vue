<template>
    <div>
        <h1>Login</h1>

        <input 
            type="email"
            name="email"
            v-model="email"
            placeholder="email" />
        <input 
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
        <div v-html="error" class="error" />
        <b-btn @click="login">Login</b-btn>
    </div>
</template>

<script>
    import AuthenticationService from '@/services/AuthenticationService'
    export default {
        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            async login() {
                try {
                    const response = await AuthenticationService.login({
                        email: this.email,
                        password: this.password
                    })
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        }
    }
</script>

<style scoped>
.error {
    color: red;
}
</style>