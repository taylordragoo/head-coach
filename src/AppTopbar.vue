<template>
    <div class="layout-topbar">
        <div class="topbar-left">

            <router-link to="/" class="horizontal-logo">
                <img id="logo-horizontal" class="horizontal-logo" src="layout/images/logo-white.svg" alt="diamond-layout" />
            </router-link>

            <div v-if='user != null' class="layout-breadcrumb viewname" style="text-transform: uppercase">
                <template v-if="$route.meta.breadcrumb">
                    <span>{{ $route.name + " | " + user.full_name + " | " + world.date }}</span>
                </template>
            </div>

            <div v-else  class="layout-breadcrumb viewname" style="text-transform: uppercase">

            </div>

            <img id="logo-mobile" class="mobile-logo" src="layout/images/logo-dark.svg" alt="diamond-layout" />
        </div>

        <AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" :mobileMenuActive="staticMenuMobileActive" @menu-click="onMenuClick" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>

        <div class="layout-mask modal-in"></div>

        <div class="topbar-right">
            <ul class="topbar-menu">

                <li class="search-item">
                    <a tabindex="0" @click="onSearchClick">
                        <i class="pi pi-search"></i>
                    </a>
                </li>

                <li class="notifications-item" :class="{ 'active-menuitem ': topbarNotificationMenuActive }">
                    <a href="#" tabindex="0" @click="onTopbarNotificationMenuButtonClick">
                        <i class="pi pi-bell"></i>
                        <span class="topbar-badge">5</span>
                    </a>
                    <ul class="notifications-menu fade-in-up">
                        <li role="menuitem">
                            <a href="#" tabindex="0">
                                <i class="pi pi-shopping-cart"></i>
                                <div class="notification-item">
                                    <div class="notification-summary">New Order</div>
                                    <div class="notification-detail">You have <strong>3</strong> new orders.</div>
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" tabindex="0">
                                <i class="pi pi-check-square"></i>
                                <div class="notification-item">
                                    <div class="notification-summary">Withdrawn Completed</div>
                                    <div class="notification-detail">Funds are on their way.</div>
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" tabindex="0">
                                <i class="pi pi-chart-line"></i>
                                <div class="notification-item">
                                    <div class="notification-summary">Monthly Reports</div>
                                    <div class="notification-detail">New reports are ready.</div>
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" tabindex="0">
                                <i class="pi pi-comments"></i>
                                <div class="notification-item">
                                    <div class="notification-summary">Comments</div>
                                    <div class="notification-detail"><strong>2</strong> new comments.</div>
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="#" tabindex="0">
                                <i class="pi pi-exclamation-circle"></i>
                                <div class="notification-item">
                                    <div class="notification-summary">Chargeback Request</div>
                                    <div class="notification-detail"><strong>1</strong> to review.</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="notifications-item" :class="{ 'active-menuitem ': topbarSecondNotificationMenuActive }">
                    <a href="#" tabindex="0" @click="onTopbarSecondNotificationMenuButtonClick">
                        <i class="pi pi-globe"></i>
                    </a>
                    <ul class="notifications-menu fade-in-up">
                        <li>
                            <a>
                                <i class="pi pi-user"></i>
                                <span style='padding-left: 2%'> Profile</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="pi pi-cog"></i>
                                <span style='padding-left: 2%'> Settings</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="pi pi-calendar"></i>
                                <span style='padding-left: 2%'> Load</span>
                            </a>
                        </li>
                        <li>
                            <a @click='onSaveMenuButtonClick'>
                                <i class="pi pi-inbox"></i>
                                <span style='padding-left: 2%'> Save</span>
                            </a>
                        </li>
                        <li>
                            <a @click='onTopbarExitMenuButtonClick'>
                                <i class="pi pi-power-off"></i>
                                <span style='padding-left: 2%'> Exit</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="profile-item" :class="{ 'active-menuitem fadeInDown': topbarContMenuActive }">
                    <a @click="onTopbarContMenuButtonClick">
                        <span class="profile-name">Continue</span>
                    </a>
                </li>

            </ul>
        </div>

        <Dialog mode='indeterminate' :closable='false' v-model:visible="loadingDialog" :style="{width: '800px'}" :modal="true" class='p-fluid bg-white'>
            <div class="justify-content-center">
                <h5>Loading...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="false"> Percent Complete: {{value1}}% </ProgressBar>
                    </div>
                </div>
            </div>
        </Dialog>
        <Dialog mode='indeterminate' :closable='false' v-model:visible="savingDialog" :style="{width: '800px'}" :modal="true" class='p-fluid bg-white'>
            <div class="justify-content-center">
                <h5>Saving...</h5>
                <div class="grid">
                    <div class="col">
                        <ProgressBar :value="value1" show-progress variant="success" mode="determinate" :showValue="false"> Percent Complete: {{value1}}% </ProgressBar>
                    </div>
                </div>
            </div>
        </Dialog>
        <Dialog mode='indeterminate' :closable='false' v-model:visible="exitDialog" :style="{width: '800px'}" :modal="true" class='p-fluid bg-white'>
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
import moment from 'moment';
import AppMenu from "./AppMenu";
import User from '@/models/User';
import Team from '@/models/Team';
import Player from '@/models/Player';
import World from '@/models/World';
import League from '@/models/League';
import Born from '@/models/Born';
import Contract from '@/models/Contract';
import Draft from '@/models/Draft';
import Injury from '@/models/Injury';
import Overalls from '@/models/Overalls';
import Potentials from '@/models/Potentials';
import Salaries from '@/models/Salaries';
import Stats from '@/models/Stats';
import Attributes from '@/models/Attributes';
import Division from '@/models/Division';
import Conference from '@/models/Conference';
import { CareerController } from '@/controllers';

export default {
    name: "AppTopbar",
    emits: ["menu-click", "menuitem-click", "root-menuitem-click", "menu-button-click", "search-click", "topbar-notification", "topbar-second-notification", "topbar-user-menu", "topbar-cont-menu", "right-menubutton-click"],
    props: {
        topbarNotificationMenuActive: Boolean,
        topbarSecondNotificationMenuActive: Boolean,
        topbarUserMenuActive: Boolean,
        topbarContMenuActive: Boolean,
        layoutMode: String,
        menu: Array,
        menuActive: Boolean,
        staticMenuMobileActive: Boolean
    },
    data() {
        return {
            items: [],
            loadingDialog: false,
            savingDialog: false,
            exitDialog: false,
            value1: 0,
            interval: null,
            loading: false,
            exiting: false,
            finish_saving: false,
            save_count: 0
        };
    },
    created() {
        this.careerController = new CareerController()
    },
    watch: {
        value1() {
            let obj = this
            if(obj.value1 == 100) {
                obj.loadingDialog = false
                obj.endProgress();
                console.log("Loading over")
                // obj.$router.push('dashboard')
            }
        }
    },
    components: {
        AppMenu
    },
    methods: {
        getHumanDate: function(date) {
            return moment(date).format('MM/DD/YYYY');
        },
        getTomorrow: function(date) {
            let obj = this
            let new_date = moment(obj.getHumanDate(date)).add(1,'days');
            return new_date;
        },
        continueToTomorrow: function(date) {
            let obj = this
            const new_date = obj.getHumanDate(obj.getTomorrow(date))
            console.log(new_date)
            World.update({
                where: (world) => {
                    return world.id === 0
                },
                data: {
                    date: new_date
                }
            })
        },
        onMenuClick(event) {
            this.$emit("menu-click", event);
        },
        onMenuItemClick(event) {
            this.$emit("menuitem-click", event);
        },
        onRootMenuItemClick(event) {
            this.$emit("root-menuitem-click", event);
        },
        onMenuButtonClick(event) {
            this.$emit("menu-button-click", event);
        },
        onSearchClick(event) {
            this.$emit("search-click", event);
        },
        onTopbarNotificationMenuButtonClick(event) {
            this.$emit("topbar-notification", event);
        },
        onTopbarSecondNotificationMenuButtonClick(event) {
            this.$emit("topbar-second-notification", event);
        },
        onTopbarUserMenuButtonClick(event) {
            this.$emit("topbar-user-menu", event);
        },
        onTopbarContMenuButtonClick(event) {
            let obj = this
            obj.openContinue();
        },
        onTopbarExitMenuButtonClick(event) {
            let obj = this
            obj.exiting = true;
            obj.openExit();
        },
        onSaveMenuButtonClick() {
            let obj = this

            let request = {
                type: "save",
                db: obj.user.first + ' ' + obj.user.last,
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

            this.careerController.update(request);
            obj.openSave()
        },
        onRightMenuClick(event) {
            this.$emit("right-menubutton-click", event);
        },
        isMobile() {
            return window.innerWidth <= 1091;
        },
        restartTimer() {
            clearInterval(this.interval);
            this.value1 = 0;
            setTimeout(() => {
                this.startProgress();
            }, 100);
        },
        startProgress() {
            let obj = this
            obj.interval = setInterval(() => {
                let newValue = obj.value1 + Math.floor(Math.random() * 10) + 1;
                if (newValue >= 100) {
                    if(this.loadingDialog) {
                        this.continueToTomorrow(this.world.date);
                    }
                    newValue = 100;
                }
                this.value1 = newValue;
                console.log(this.value1);
            }, 0);
        },
        endProgress() {
            console.log('ending loading')
            let obj = this
            clearInterval(obj.interval);
            obj.interval = null;
            obj.hideDialog()
        },
        openContinue() {
            this.loadingDialog = true;
            // this.continueToTomorrow(this.world.date);
            this.restartTimer(200);
        },
        openSave() {
            this.savingDialog = true;
            this.restartTimer(200);
        },
        openExit() {
            this.exitDialog = true;
            this.restartTimer(0);
        },
        hideDialog() {

            this.loadingDialog = false;
            this.savingDialog = false;
            this.exitDialog = false;

            if(this.exiting) {
                this.$router.push('/')
                this.exiting = false
            }
        },
    },
    computed: {
        players: {
            /* By default get() is used */
            get() {
                return Player.query().all()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updatePlayers', value)
            }
        },
        teams: {
            /* By default get() is used */
            get() {
                return Team.all()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateTeams', value)
            }
        },
        user: {
            /* By default get() is used */
            get() {
                return User.query().first()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateUser', value)
            }
        },
        league: {
            /* By default get() is used */
            get() {
                return League.all()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateUser', value)
            }
        },
        world: {
            /* By default get() is used */
            get() {
                return World.query().first()
            },
            /* We add a setter */
            set(value) {
                this.$store.commit('updateWorld', value)
            }
        },
    },
};
</script>


