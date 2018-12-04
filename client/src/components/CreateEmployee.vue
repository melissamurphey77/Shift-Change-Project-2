<template>
    <div>
        <h1>Register</h1>
        <form
            name="create-employee-form"
            autocomplete="off">
            <input 
                type="email"
                name="email"
                autocomplete="new-password"
                v-model="email"
                placeholder="email" />
            <input 
                type="password"
                name="password"
                v-model="password"
                placeholder="password" />
            <div v-html="error" class="error" />
        </form>
            <b-btn @click="register">Register</b-btn>
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
            async register() {
                try {
                    const response = await AuthenticationService.create({
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