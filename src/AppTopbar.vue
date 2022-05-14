<template>
    <div class="layout-topbar">
        <div class="topbar-left">

            <router-link to="/" class="horizontal-logo">
                <img id="logo-horizontal" class="horizontal-logo" src="layout/images/logo-white.svg" alt="diamond-layout" />
            </router-link>

            <div class="layout-breadcrumb viewname" style="text-transform: uppercase">
                <template v-if="$route.meta.breadcrumb">
                    <span>{{$route.meta.breadcrumb[0].label}}</span>
                </template>
            </div>

            <img id="logo-mobile" class="mobile-logo" src="layout/images/logo-dark.svg" alt="diamond-layout" />
        </div>

        <AppMenu :model="menu" :layoutMode="layoutMode" :active="menuActive" :mobileMenuActive="staticMenuMobileActive"
            @menu-click="onMenuClick" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>

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
                    <a href="#" tabindex="0" @click="onTopbarNotificationMenuButtonClick">
                        <i class="pi pi-globe"></i>
                    </a>
                    <ul class="notifications-menu fade-in-up">
                        <li>
                            <a href="#">
                                <i class="pi pi-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pi pi-cog"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pi pi-calendar"></i>
                                <span>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="pi pi-inbox"></i>
                                <span>Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#/">
                                <i class="pi pi-power-off"></i>
                                <span>Exit</span>
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
    </div>
</template>

<script>
import moment from 'moment';
import AppMenu from "./AppMenu";
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
        };
    },
    components: {
        AppMenu
    },
    unmounted() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    },
    methods: {
        getHumanDate: function(date) {
            return moment(date).format('MM/DD/YYYY');
        },
        getTomorrow: function(date) {
            let obj = this
            return moment(obj.getHumanDate(date)).add(1,'days');
        },
        continueToTomorrow: function(date) {
            let obj = this
            obj.world.date = obj.getTomorrow(date)
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
            obj.continueToTomorrow(obj.world.date)
        },
        onRightMenuClick(event) {
            this.$emit("right-menubutton-click", event);
        },
        isMobile() {
            return window.innerWidth <= 1091;
        }
    },
    computed: {
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
};
</script>
