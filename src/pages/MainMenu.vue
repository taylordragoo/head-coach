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
                    <div v-if='this.databases.length > 0' class='row'>
                        <Button type="button" @click='openContinue' label="Continue" style="width:20rem" class="mb-2" />
                    </div>
                    <div v-else>

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
                    <InputText id="name" v-model='first_name' required="true" autofocus :class="{'p-invalid': submitted && !first_name}" />
                    <small class="p-invalid" v-if="submitted && !first_name">First Name is required.</small>
                </div>
                <div class="field col">
                    <label>Last Name</label>
                    <InputText id="name" v-model="last_name" required="true" autofocus :class="{'p-invalid': submitted && !last_name}" />
                    <small class="p-invalid" v-if="submitted && !last_name">Last Name is required.</small>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label>Age</label>
                    <InputNumber id="age" v-model="age" required="true" autofocus :class="{'p-invalid': submitted && !age}" />
                    <small class="p-invalid" v-if="submitted && !age">Age is required.</small>
                </div>

                <div class="field col">
                    <label>Playing Experience</label>
                    <Dropdown id="inventoryStatus" v-model='exp' :options="statuses" optionLabel="label" placeholder="Past playing experience...">
                        <template>
                            <div>{{statuses.label}}</div>
                        </template>
                    </Dropdown>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label>Team Selection</label>
                    <Dropdown id="inventoryStatus" v-model='team' :options="teams" optionLabel="name" placeholder="Select a team..."></Dropdown>
                </div>

                <div class="field col">
                    <label>Skillset</label>
                    <Dropdown id="inventoryStatus" v-model='skill' :options="skills" optionLabel="skill" placeholder="Choose your skillset..."></Dropdown>
                </div>
            </div>

            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Create" icon="pi pi-check" class="p-button-text" @click="createNewCareer" />
            </template>
        </Dialog>

        <Dialog v-model:visible="continueDialog" :style="{width: '800px'}" header="Continue previous save..." :modal="true" class="p-fluid bg-white">
            <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-1" v-for='save in this.databases'>
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
                            <div class="col-12 md:col-8">
                                <Button type="button" to='/dashboard' @click='loadSelectedCareer(save)' label="Continue Save" class="mb-2" />
                            </div>
                            <div class="col-12 md:col-2">
                                <Button type="button" to='/dashboard' @click='deleteSelectedCareer(save)' label="Delete" class="mb-2 p-button-danger" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                </div>
            </div>
        </Dialog>

        <Dialog v-model:visible="loadingDialog" :style="{width: '800px'}" :modal="true" class='p-fluid bg-white'>
            <div class="justify-content-center">
                <h5>Loading...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="false"> Percent Complete: {{value1}}% </ProgressBar>
                    </div>
                </div>
            </div>
        </Dialog>

    </div>
</template>

<script>
import { Dexie } from 'dexie';
import User from '@/models/User';
import Team from '@/models/Team';
import Player from '@/models/Player';
import World from '@/models/World';
import League from '@/models/League';
import { UserController, TeamController }  from '@/controllers/index';
import { CareerController } from '@/controllers/index';
import Attributes from '@/models/Attributes';
import Born from '@/models/Born';
import Contract from '@/models/Contract';
import Draft from '@/models/Draft';
import Injury from '@/models/Injury';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';
import Salaries from '@/models/Salaries';
import Stats from '@/models/Stats';
import { WorldController } from '@/controllers';
import Division from '@/models/Division';
import Conference from '@/models/Conference';


export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            age: null,
            exp: '',
            team: null,
            skill: null,
            teams: null,
            value1: 0,
            db: null,
            databases: [],
            existing_db_names: [],
            interval: null,
            loading: false,
            deleting: false,
            creating: false,
            coachDialog: false,
            continueDialog: false,
            loadingDialog: false,
            statuses: [
                {label: 'None', value: 0 },
                {label: 'High School', value: 1 },
                {label: 'College', value: 2 },
                {label: 'Professional', value: 3 },
                {label: 'Hall Of Fame', value: 4 }
            ],
            skills: [
                { value: 0, skill: "Team Builder" },
                { value: 1, skill: "Staff Builder" },
                { value: 2, skill: "Youth Specialist" },
            ],
            userController: null,
            worldController: null,
            leagueController: null,
            teamController: null,
            playerController: null,
            careerController: null
        }
    },
    created() {
        this.userController = new UserController()
        this.teamController = new TeamController()
        this.careerController = new CareerController()
        this.worldController = new WorldController()
    },
    mounted() {
        this.$store.dispatch('resetState')
        this.checkForData()
        this.teams = this.teamController.getTeamsDefault()
    },
    watch: {
        value1() {
            let obj = this
            if(obj.value1 > 100) {
                obj.endProgress();
                console.log("Loading over")
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
            console.log("Hide Dialog")
            this.coachDialog = false;
            this.continueDialog = false;
            this.loadingDialog = false;
            this.submitted = false;

            if(this.loading) {
                console.log("Loading")
                this.$router.push('dashboard')
                this.loading = false
            }

            if(this.creating) {
                console.log("Creating")
                this.$router.push('dashboard')
                this.creating = false
            }

            if(this.deleting) {
                console.log("Deleting")
                this.$router.push('/')
                this.deleting = false
            }
        },
        async checkForData() {
            console.log("Initializing database....")
            let obj = this

            const db = new Dexie('default');

            if (!(await Dexie.exists(db.name))) {
                console.log("Db does not exist");
                this.initDefaultDatabase()
            } else {
                console.log("Default db does exist")
            }

            // get existing databases
            obj.databases = await Dexie.getDatabaseNames();
            let index = obj.databases.indexOf('default')
            obj.databases.splice(index,1)
        },
        createNewCareer() {
            let obj = this
            obj.coachDialog = false
            obj.loadingDialog = true;
            obj.creating = true
            obj.restartTimer();
            setTimeout(() => {
                obj.initNewCareerData()
            }, 2000);
        },
        initDefaultDatabase() {
            console.log("Seeding default database....")
            let obj = this
            try {

                this.worldController.create()

                let db_name = 'default'

                let request = {
                    type: "default",
                    db_name: 'default',
                    world: World.query().first().$toJson(),
                    players: Player.all(),
                    teams: Team.all(),
                    leagues: League.all(),
                    born: Born.all(),
                    contract: Contract.all(),
                    draft: Draft.all(),
                    injury: Injury.all(),
                    overalls: Overalls.all(),
                    potentials: Potentials.all(),
                    salaries: Salaries.all(),
                    stats: Stats.all(),
                    attributes: Attributes.all(),
                    divisions: Division.all(),
                    conferences: Conference.all()
                }

                // Call function that inits database and returns database
                this.careerController.create(request);

            } catch (error) {
                console.error('' + error);
            } finally {
                console.log("Done")
            }
        },
        async initNewCareerData() {
            console.log("Seeding database....")
            let obj = this

            let create_user = {
                id: 0,
                first: obj.first_name,
                last: obj.last_name,
                age: obj.age,
                exp: obj.exp.label,
                skill: obj.skill,
                team_id: obj.team.tid
            }

            this.userController.create(create_user)

            if(obj.databases.length < 3) {
                try {

                    const db = new Dexie('default');

                    if (!(await Dexie.exists(db.name))) {
                        console.log("Db does not exist");
                    } else {
                        console.log("Default db does exist")
                        await db.open().catch (function (err) {
                            console.error('Failed to open db: ' + (err.stack || err));
                        }).finally(function() {
                            console.log(db.tables);
                        });

                        const team = await db.table('teams').toArray();
                        const player = await db.table('players').toArray();
                        const world = await db.table('world').toArray();
                        const league = await db.table('leagues').toArray();
                        const attr = await db.table('attributes').toArray();
                        const born = await db.table('born').toArray();
                        const contract = await db.table('contract').toArray();
                        const draft = await db.table('draft').toArray();
                        const injury = await db.table('injury').toArray();
                        const overalls = await db.table('overalls').toArray();
                        const potentials = await db.table('potentials').toArray();
                        const salaries = await db.table('salaries').toArray();
                        const stats = await db.table('stats').toArray();
                        const conferences = await db.table('conferences').toArray();
                        const divisions = await db.table('divisions').toArray();

                        await Team.insert({ data: team })
                        await Player.insert({ data: player })
                        await League.insert({ data: league })
                        await World.insert({ data: world })
                        await Attributes.insert( { data: attr })
                        await Born.insert( { data: born })
                        await Contract.insert( { data: contract })
                        await Draft.insert( { data: draft })
                        await Injury.insert( { data: injury })
                        await Overalls.insert( { data: overalls })
                        await Potentials.insert( { data: potentials })
                        await Salaries.insert( { data: salaries })
                        await Stats.insert( { data: stats })
                        await Conference.insert({ data: conferences })
                        await Division.insert({ data: divisions })

                        db.close()
                    }

                    let request = {
                        type: "new",
                        db: create_user.first + " " + create_user.last,
                        user: User.query().first().$toJson(),
                        world: World.query().first().$toJson(),
                        players: Player.all(),
                        teams: Team.all(),
                        leagues: League.all(),
                        born: Born.all(),
                        contract: Contract.all(),
                        draft: Draft.all(),
                        injury: Injury.all(),
                        overalls: Overalls.all(),
                        potentials: Potentials.all(),
                        salaries: Salaries.all(),
                        stats: Stats.all(),
                        attributes: Attributes.all(),
                        divisions: Division.all(),
                        conferences: Conference.all()
                    }

                    this.careerController.create(request);

                } catch (error) {
                    console.error('' + error);
                } finally {
                    console.log("Done")
                }
            } else {
                console.log('too many saves')
            }
        },
        async loadSelectedCareer(name) {
            let obj = this
            let db_name = name;
            obj.loading = true
            obj.restartTimer();

            console.log("DB: " + db_name)
            const db = new Dexie(db_name);

            if (!(await Dexie.exists(db.name))) {
                console.log("Db does not exist");
            } else {
                // open database
                await db.open()

                // get data from indexeddb via dexie
                const team = await db.table('teams').toArray();
                const player = await db.table('players').toArray();
                const user = await db.table('user').toArray();
                const world = await db.table('world').toArray();
                const league = await db.table('leagues').toArray();
                const attr = await db.table('attributes').toArray();
                const born = await db.table('born').toArray();
                const contract = await db.table('contract').toArray();
                const draft = await db.table('draft').toArray();
                const injury = await db.table('injury').toArray();
                const overalls = await db.table('overalls').toArray();
                const potentials = await db.table('potentials').toArray();
                const salaries = await db.table('salaries').toArray();
                const stats = await db.table('stats').toArray();
                const conferences = await db.table('conferences').toArray();
                const divisions = await db.table('divisions').toArray();

                // insert data into vuex-orm store
                await Team.insert({ data: team })
                await User.insert({ data: user })
                await Player.insert({ data: player })
                await League.insert({ data: league })
                await World.insert({ data: world })
                await Attributes.insert( { data: attr })
                await Born.insert( { data: born })
                await Contract.insert( { data: contract })
                await Draft.insert( { data: draft })
                await Injury.insert( { data: injury })
                await Overalls.insert( { data: overalls })
                await Potentials.insert( { data: potentials })
                await Salaries.insert( { data: salaries })
                await Stats.insert( { data: stats })
                await Conference.insert({ data: conferences })
                await Division.insert({ data: divisions })
            }

        },
        restartTimer() {
            clearInterval(this.interval);
            this.value1 = 0;
            setTimeout(() => {
                this.startProgress();
            }, 100);
        },
        startProgress() {
            this.continueDialog = false
            this.coachDialog = false
            this.loadingDialog = true
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
                this.value1 = newValue;
                console.log(this.value1);
            }, 500);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
            setTimeout(() => {
                this.hideDialog()
            }, 500);
        },
        deleteSelectedCareer(db) {
            let obj = this
            obj.deleting = true
            obj.restartTimer();
            this.careerController.delete(db);
        }

    }
}
</script>
