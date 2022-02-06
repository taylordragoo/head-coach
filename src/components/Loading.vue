<template>
    <div class="grid">
        <div class="col-6">
            <div class="card justify-content-center">
                <h5>Loading...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value" :showValue="false"></ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['route'],
    data() {
        return {
            value: 0,
            route: this.route
        }
    },
    interval: null,
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 5000) {
                    newValue = 5000;
                    this.endProgress();
                }
                this.value = newValue;
            }, 0);
        },
        endProgress() {
            console.log('ended')
            clearInterval(this.interval);
            this.interval = null;
            this.$router.push('/dashboard')
        }
    },
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    }
}
</script>

<style scoped>

</style>
