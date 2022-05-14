<template>
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-image">
                <div class="row"></div>
                <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                    <div class="mb-3 font-bold text-2xl">
                    </div>
                    <div class="text-700 text-sm mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
                    <div class="grid">
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-desktop text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Built for Coaches</div>
                            <span class="text-700 text-sm line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-lock text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">End-to-End Management</div>
                            <span class="text-700 text-sm line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-check-circle text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">New UI</div>
                            <span class="text-700 text-sm line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
                        </div>
                        <div class="col-12 md:col-4 mb-4 px-5">
                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                <i class="pi pi-globe text-4xl text-blue-500"></i>
                            </span>
                            <div class="text-900 mb-3 font-medium">Faster Than Ever</div>
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
                            <div class="text-900 mb-3 font-medium">Fully Licensed</div>
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
                        <Button type="button" @click='loadDbData' label="Continue" style="width:20rem" class="mb-2" />
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

        <Dialog v-model:visible="coachDialog" :style="{width: '800px'}" header="New Coach Details" :modal="true" class="p-fluid">
            <div class='formgrid grid'>
                <div class="field col">
                    <label >First Name</label>
                    <InputText id="name" v-model='firstName' required="true" autofocus :class="{'p-invalid': submitted && !coach.firstName}" />
                    <small class="p-invalid" v-if="submitted && !coach.firstName">First Name is required.</small>
                </div>
                <div class="field col">
                    <label>Last Name</label>
                    <InputText id="name" v-model="lastName" required="true" autofocus :class="{'p-invalid': submitted && !coach.lastName}" />
                    <small class="p-invalid" v-if="submitted && !coach.lastName">Last Name is required.</small>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label>Age</label>
                    <InputNumber id="age" v-model="age" required="true" autofocus :class="{'p-invalid': submitted && !coach.age}" />
                    <small class="p-invalid" v-if="submitted && !coach.age">Age is required.</small>
                </div>

                <div class="field col">
                    <label>Playing Experience</label>
                    <Dropdown id="inventoryStatus" v-model='coach.exp' @change='updateExp' :options="statuses" optionLabel="label" placeholder="Past playing experience...">
                        <template>
                            <div>{{statuses.label}}</div>
                        </template>
                    </Dropdown>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <a href='/#/dashboard'><Button label="Create" icon="pi pi-check" class="p-button-text" @click="initGameData" /></a>
            </template>
        </Dialog>

        <Dialog v-model:visible="continueDialog" :style="{width: '800px'}" header="Continue previous save..." :modal="true" class="p-fluid bg-white">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-1" v-for='save in existing_db_names'>
                    <div class="p-fluid">
                        <h5>{{ save }}</h5>
                        <div class="field grid">
                            <label class="col-12 mb-2 md:col-2 md:mb-0">Week</label>
                            <div class="col-12 md:col-10">
                                <InputText id="name3" type="text" disabled/>
                            </div>
                        </div>
                        <div class="field grid">
                            <label class="col-12 mb-2 md:col-2 md:mb-0">Year</label>
                            <div class="col-12 md:col-10">
                                <InputText id="email3" type="text" disabled/>
                            </div>
                        </div>
                        <div class="field grid">
                            <label class="col-12 mb-2 md:col-2 md:mb-0"> </label>
                            <div class="col-12 md:col-10">
                                <Button type="button" to='/dashboard' @click='loadSelectedCareer(save)' :label="save" class="mb-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </Dialog>

        <Dialog v-model:visible="loadingDialog" :style="{width: '800px'}" :modal="true" class='p-fluid bg-white'>
            <div class="card justify-content-center">
                <h5>Loading...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="true"> Percent Complete: {{value1}}% </ProgressBar>
                    </div>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script>
import { Dexie } from 'dexie';
import { InitNewCareer, initStoragePersistence, isStoragePersisted } from "@/data/db";

export default {
    data() {
        return {
            coachDialog: false,
            continueDialog: false,
            loadingDialog: false,
            coach: {},
            existing_db_names: [],
            value1: 0,
            interval: null,
            loading: false,
            statuses: [
                {label: 'None', value: 0 },
                {label: 'High School', value: 1 },
                {label: 'College', value: 2 },
                {label: 'Professional', value: 3 },
                {label: 'Hall Of Fame', value: 4 }
            ]
        }
    },
    watch: {
        value1() {
            let obj = this
            if(obj.value1 == 100) {
                obj.loadingDialog = false
                obj.endProgress();
                console.log("Loading over")
                obj.$router.push('dashboard')
            }
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
        },
        teams: {
            /* By default get() is used */
            get() {
                return this.$store.state.sTeams
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateTeams', value)
            }
        },
        players: {
            /* By default get() is used */
            get() {
                return this.$store.state.sPlayers
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updatePlayers', value)
            }
        },
        user: {
            /* By default get() is used */
            get() {
                return this.$store.state.sUser
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateUser', value)
            }
        },
        world: {
            /* By default get() is used */
            get() {
                return this.$store.state.sWorld
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateWorld', value)
            }
        },
    },
    methods: {
        openNew() {
            this.coach = {};
            this.submitted = false;
            this.coachDialog = true;
        },
        openContinue() {
            this.coach = {};
            this.submitted = false;
            this.continueDialog = true;
        },
        hideDialog() {
            this.coachDialog = false;
            this.continueDialog = false;
            this.submitted = false;
        },
        updateExp() {
            this.exp = this.coach.exp;
        },
        async initGameData() {
            console.log("Initializing game data....")
            let obj = this
            let databases = await Dexie.getDatabaseNames();

            let player = {
                _first: obj.firstName,
                _last: obj.lastName,
                _age: obj.age,
                _exp: obj.coach.exp.label
            }

            if(databases.length < 3) {
                try {
                    let dbName = obj.firstName + " " + obj.lastName
                    InitNewCareer(dbName, player)
                } catch (error) {
                    console.error('' + error);
                } finally {
                    console.log('Career created')
                }
            } else {
                console.log('too many saves')
            }
        },
        async loadDbData() {
            let obj = this
            obj.existing_db_names = []
            this.openContinue()
            console.log("Dumping Databases");
            console.log("=================");
            await Dexie.getDatabaseNames(function (databaseNames) {
                if (databaseNames.length === 0) {
                    // No databases at this origin as we know of.
                    console.log("Could not find databases on current origin.");
                } else {
                    // At least one database to dump
                    dump(databaseNames);
                    console.log("Dumping data...");
                }

                function dump(databaseNames) {
                    if (databaseNames.length > 0) {
                        obj.data = new Dexie(databaseNames[0]);
                        // Now, open database without specifying any version. This will make the database open any existing database and read its schema automatically.
                        obj.data.open().then(function () {
                            obj.existing_db_names.push(obj.data.name)
                            obj.data.tables.forEach(function (table, i) {
                                var primKeyAndIndexes = [table.schema.primKey].concat(table.schema.indexes);
                                var schemaSyntax = primKeyAndIndexes.map(function (index) { return index.src; }).join(',');
                            });
                        }).finally(function () {
                            obj.data.close();
                            dump(databaseNames.slice(1));
                        });;
                    } else {
                        console.log("Finished dumping databases");
                    }
                }
            });
        },
        async loadSelectedCareer(name) {
            let obj = this
            let db_name = name;

            obj.continueDialog = false
            obj.loadingDialog = true;
            obj.restartTimer();

            console.log("DB: " + db_name)
            const db = new Dexie(db_name);
            if (!(await Dexie.exists(db.name))) {
                console.log("Db does not exist");
                db.version(1).stores({});
            }
            await db.open()
            console.log("Loaded: " + db.name);

            // if(!isStoragePersisted())
            // {
            //     initStoragePersistence();
            // }

            obj.teams = await db.table('teams').toArray();
            obj.players = await db.table('players').toArray();
            obj.user = await db.table('user').toArray();
            obj.world = await db.table('world').toArray();

            obj.user = obj.user[0];
            obj.firstName = obj.user.first;
            obj.lastName = obj.user.last;
            obj.world = obj.world[0];

            // try {
            //     const blob = await exportDB(db);
            //     download(blob, "dexie-export.json", "application/json");
            //     console.log('Success');
            // } catch (error) {
            //     console.error(''+error);
            // }

        },
        restartTimer() {
            clearInterval(this.interval);
            this.value1 = 0;
            setTimeout(() => {
                this.startProgress();
            }, 500);
        },
        startProgress() {
            let obj = this
            obj.interval = setInterval(() => {
                let newValue = obj.value1 + Math.floor(Math.random() * 20) + 1;
                if (newValue >= 100) {
                    obj.value1 = 100;
                    return;
                }
                this.value1 = newValue;
            }, 1000);
        },
        endProgress() {
            console.log('ending loading')
            let obj = this
            clearInterval(obj.interval);
            obj.interval = null;
        }
    }
}
</script>
