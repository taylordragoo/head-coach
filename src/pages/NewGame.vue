<template>
    <div class="layout-content grid">
        <div class='col-2'></div>
        <div class="col-8">
            <div class="card card-w-title">
                <h5>Steps</h5>
                <p>Steps and TabMenu are integrated with the same child routes.</p>
                <Steps :model="nestedRouteItems" :readonly="false" />
                <router-view/>
                <div class="form-grid grid">
                    <div class="field col">
                        <label for="name2">Name</label>
                        <InputText id="name2" type="text" />
                    </div>
                    <div class="field col">
                        <label for="email2">Email</label>
                        <InputText id="email2" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div class='col-2'></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nestedRouteItems: [
                {
                    label: 'Personal',
                    to: '/new'
                },
                {
                    label: 'Appearance',
                    to: '/new'
                },
                {
                    label: 'Attributes',
                    to: '/new'
                },
                {
                    label: 'Confirmation',
                    to: '/new'
                }
            ],
        }
    }
}
</script>

<style scoped>

</style>
