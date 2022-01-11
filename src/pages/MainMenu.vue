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

        <Dialog v-model:visible="continueDialog" :style="{width: '800px'}" header="Continue previous save..." :modal="true" class="p-fluid">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-1" v-for='save in existing_db_names'>
                    <div class="card p-fluid">
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
    </div>
</template>

<script>
import { Dexie } from 'dexie';
import { InitNewCareer } from "@/data/db";

export default {
    data() {
        return {
            coachDialog: false,
            continueDialog: false,
            coach: {},
            existing_db_names: [],
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
        }
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
                _exp: obj.exp
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
                    console.log("Was your database created without using Dexie? Try the [Add database] button above!");
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
                            console.log("var db = new Dexie('" + obj.data.name + "');");
                            obj.existing_db_names.push(obj.data.name)
                            console.log("db.version(" + obj.data.verno + ").stores({");
                            obj.data.tables.forEach(function (table, i) {
                                var primKeyAndIndexes = [table.schema.primKey].concat(table.schema.indexes);
                                var schemaSyntax = primKeyAndIndexes.map(function (index) { return index.src; }).join(',');
                                console.log("    " + table.name + ": " + "'" + schemaSyntax + "'" + (i < obj.data.tables.length - 1 ? "," : ""));
                                // Note: We could also dump the objects here if we'd like to:
                                 table.each(function (object) {
                                     console.log(JSON.stringify(object));
                                 });
                            });
                            console.log("});\n");
                        }).finally(function () {
                            // obj.data.close();
                            dump(databaseNames.slice(1));
                        });;
                    } else {
                        console.log("Finished dumping databases");
                        console.log("==========================");
                        console.log("Hint: Is your DB not listed? Try using the [Add database] button above!");
                    }
                }
            });
        },
        async loadSelectedCareer(name) {
            let obj = this
            let db_name = name;
            console.log(db_name)
            const db = new Dexie(db_name);
            if (!(await Dexie.exists(db.name))) {
                console.log("Db does not exist");
                db.version(1).stores({});
            }
            await db.open()

            this.teams = await db.table('teams').toArray();
            this.players = await db.table('players').toArray();
            this.user = await db.table('user').toArray();
            this.user = this.user[0];
            this.firstName = this.user.first;
            this.lastName = this.user.last;
            this.age = this.user.age;
            this.exp = this.user.exp;
            this.world = await db.table('world').toArray();
            this.world = this.world[0]

            console.log("Could open DB")
            obj.$router.push('dashboard')
        }
    }
}
</script>
