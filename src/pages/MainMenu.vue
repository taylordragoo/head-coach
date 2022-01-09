<template>
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-image">
                <div class="row"></div>
                <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div class="mb-3 font-bold text-2xl">
                        <h1>Head Coach 2022</h1>
                        <span class="text-900">One Coach, </span>
                        <span class="text-blue-600">Many Teams</span>
                    </div>
                    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
                    <div class="grid">
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-desktop text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Built for Developers</div>
                            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-lock text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">End-to-End Encryption</div>
                            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Easy to Use</div>
                            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-globe text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Fast & Global Support</div>
                            <span class="text-700 text-sm line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-github text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Open Source</div>
                            <span class="text-700 text-sm line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
                        </div>
                        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-shield text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Trusted Securitty</div>
                            <span class="text-700 text-sm line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
                        </div>
                    </div>
                </div>
                <div class="row"></div>
            </div>
            <div class="login-panel">
                <div class="row"></div>
                <div class="col-sm-12">
                    <div class='row'>
                        <a href='/#/dashboard'><Button type="button" label="Continue" style="width:20rem" class="mb-2" /></a>
                    </div>
                    <div class='row'>
                        <Button type="button" @click="openNew" label="New" style="width:20rem" class="mb-2"/>
                    </div>
                    <div class='row'>
                        <Button type="button" label="Editor" style="width:20rem" class="mb-2"/>
                    </div>
                    <div class='row'>
                        <Button type="button" label="Settings" style="width:20rem" class="mb-2"/>
                    </div>
                    <div class='row'>
                        <Button type="button" label="Quit" style="width:20rem" class="mb-2"/>
                    </div>
                </div>
                <div class="row"></div>
            </div>
        </div>

        <Dialog v-model:visible="coachDialog" :style="{width: '800px'}" header="Coach Details" :modal="true" class="p-fluid">
            <div class='formgrid grid'>
                <div class="field col">
                    <label for="fname">First Name</label>
                    <InputText id="name" v-model='firstName' required="true" autofocus :class="{'p-invalid': submitted && !coach.firstName}" />
                    <small class="p-invalid" v-if="submitted && !coach.firstName">First Name is required.</small>
                </div>
                <div class="field col">
                    <label for="lname">Last Name</label>
                    <InputText id="name" v-model="lastName" required="true" autofocus :class="{'p-invalid': submitted && !coach.lastName}" />
                    <small class="p-invalid" v-if="submitted && !coach.lastName">Last Name is required.</small>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="age">Age</label>
                    <InputNumber id="age" v-model="age" required="true" autofocus :class="{'p-invalid': submitted && !coach.age}" />
                    <small class="p-invalid" v-if="submitted && !coach.age">Age is required.</small>
                </div>

                <div class="field col">
                    <label for="exp">Playing Experience</label>
                    <Dropdown id="inventoryStatus" v-model='coach.exp' @change='updateExp' :options="statuses" optionLabel="label" placeholder="Past playing experience...">
                        <template>
                            <div>{{statuses.label}}</div>
                        </template>
                    </Dropdown>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Create" icon="pi pi-check" class="p-button-text" @click="saveCoach" />
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            coachDialog: false,
            coach: {},
            statuses: [
                {label: 'None', value: 0 },
                {label: 'High School', value: 1 },
                {label: 'College', value: 2 },
                {label: 'Professional', value: 3 },
                {label: 'Hall Of Fame', value: 4 }
            ]
        }
    },
    computed: {
        firstName: {
            /* By default get() is used */
            get() {
                return this.$store.state.sFirstName
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateFirstName', value)
            }
        },
        lastName: {
            /* By default get() is used */
            get() {
                return this.$store.state.sLastName
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateLastName', value)
            }
        },
        age: {
            /* By default get() is used */
            get() {
                return this.$store.state.sAge
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateAge', value)
            }
        },
        exp: {
            /* By default get() is used */
            get() {
                return this.$store.state.sExperience
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateExp', value)
            }
        }
    },
    methods: {
        openNew() {
            this.coach = {};
            this.submitted = false;
            this.coachDialog = true;
        },
        hideDialog() {
            this.coachDialog = false;
            this.submitted = false;
        },
        updateExp() {
            this.exp = this.coach.exp;
        },
        saveCoach() {

        }
    }
}
</script>
