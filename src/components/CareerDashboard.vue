<template>
    <div class="layout-dashboard">
        <div class="grid">
            <div class="col-12 md:col-6 xl:col-3">
                <div class="card grid-nogutter widget-overview-box widget-overview-box-1">
                    <span class="overview-icon">
                        <i class="pi pi-calendar-times"></i>
                    </span>
                    <span class="overview-title">Season Status: {{ world.phase }}</span>
                    <div class="grid overview-detail">
                        <div class="col-4">
<!--                            <div class="overview-number" type='text'>{{ this.$moment([world.year, world.month, world.day]) }}</div>-->
                            <div class="overview-subtext">Month</div>
                        </div>
                        <div class="col-4">
                            <div class="overview-number">{{ world.day }}</div>
                            <div class="overview-subtext">Day</div>
                        </div>
                        <div class="col-4">
                            <div class="overview-number">{{ world.year }}</div>
                            <div class="overview-subtext">Year</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
                <div class="card grid-nogutter widget-overview-box widget-overview-box-2">
                    <span class="overview-icon">
                        <i class="pi pi-dollar"></i>
                    </span>
                    <span class="overview-title">Revenue</span>
                    <div class="grid overview-detail">
                        <div class="col-6">
                            <div class="overview-number">$2,100</div>
                            <div class="overview-subtext">Expenses</div>
                        </div>
                        <div class="col-6">
                            <div class="overview-number">$9,640</div>
                            <div class="overview-subtext">Income</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
                <div class="card grid-nogutter widget-overview-box widget-overview-box-3">
                    <span class="overview-icon">
                        <i class="pi pi-users"></i>
                    </span>
                    <span class="overview-title">Customers</span>
                    <div class="grid overview-detail">
                        <div class="col-6">
                            <div class="overview-number">8272</div>
                            <div class="overview-subtext">Active</div>
                        </div>
                        <div class="col-6">
                            <div class="overview-number">25402</div>
                            <div class="overview-subtext">Registered</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-6 xl:col-3">
                <div class="card grid-nogutter widget-overview-box widget-overview-box-4">
                    <span class="overview-icon">
                        <i class="pi pi-comment"></i>
                    </span>
                    <span class="overview-title">Comments</span>
                    <div class="grid overview-detail">
                        <div class="col-6">
                            <div class="overview-number">12</div>
                            <div class="overview-subtext">New</div>
                        </div>
                        <div class="col-6">
                            <div class="overview-number">85</div>
                            <div class="overview-subtext">Responded</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 xl:col-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Players</h4>
                        <Dropdown :options="orderWeek" v-model="selectedOrderWeek" optionLabel="name" @change="recentSales($event)" class="dashbard-demo-dropdown"></Dropdown>
                    </div>

                    <p>Your sales activity over time.</p>

                    <DataTable :value="players" :paginator="true" :rows="20" responsiveLayout="scroll">
                        <Column field="firstName" header="First Name" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">First Name</span>
                                {{ slotProps.data.firstName }}
                            </template>
                        </Column>
                        <Column field="lastName" header="Last Name" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Last Name</span>
                                {{ slotProps.data.lastName }}
                            </template>
                        </Column>
                        <Column field="position" header="Position" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Position</span>
                                {{ slotProps.data.pos }}
                            </template>
                        </Column>
                        <Column field="height" header="Height" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Height</span>
                                {{ slotProps.data.height }}
                            </template>
                        </Column>
                        <Column field="weight" header="Weight" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Weight</span>
                                {{ slotProps.data.weight }}
                            </template>
                        </Column>
                        <Column field="weight" header="Weight" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Weight</span>
                                {{ slotProps.data.weight }}
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedOrderWeek: null,
            products: null,
            productsThisWeek: null,
            productsLastWeek: null,
            productService: null,
            cols: [
                { field: 'vin', header: 'Vin' },
                { field: 'year', header: 'Year' },
                { field: 'brand', header: 'Brand' },
                { field: 'color', header: 'Color' },
            ],
            items: [
                {
                    label: 'Shipments',
                    items: [
                        { label: 'Tracker', icon: 'pi pi-compass' },
                        { label: 'Map', icon: 'pi pi-map-marker' },
                        { label: 'Manage', icon: 'pi pi-pencil' },
                    ],
                },
            ],
            ordersChart: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'New',
                        data: [2, 7, 20, 9, 16, 9, 5],
                        backgroundColor: ['rgba(100, 181, 246, 0.2)'],
                        borderColor: ['#64B5F6'],
                        borderWidth: 3,
                        fill: true,
                        tension: .4
                    },
                ],
            },
            ordersChartOptions: {
                plugins: {
                    legend: {
                        display: true,
                    }
                },
                responsive: true,
                hover: {
                    mode: 'index',
                },
                scales: {
                    y: {
                        min: 0,
                        max: 20
                    }
                }
            },
            orderWeek: [
                { name: 'This Week', code: '0' },
                { name: 'Last Week', code: '1' },
            ],
            revenueChart: {
                labels: ['Direct', 'Promoted', 'Affiliate'],
                datasets: [
                    {
                        data: [40, 35, 25],
                        backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC'],
                    },
                ],
            }
        };
    },
    created() {
    },
    mounted() {
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
        }
    },
    methods: {
        changeDataset(event) {
            const dataSet = [
                [2, 7, 20, 9, 16, 9, 5],
                [2, 4, 9, 20, 16, 12, 20],
                [2, 17, 7, 15, 4, 20, 8],
                [2, 2, 20, 4, 17, 16, 20],
            ];

            this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
            this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
            this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');
        },

        recentSales($event) {
            if ($event.value.code === '0') {
                this.products = this.productsThisWeek;
            } else {
                this.products = this.productsLastWeek;
            }
        },

        shuffle() {
            for (let i = this.products.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
            }
            return this.products;
        },

        menuToggle($event) {
            this.$refs.menu.toggle($event);
        },

        refreshDataset($event) {
            this.$refs.chart.reinit($event);
        },

        formatCurrency(value) {
            return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
    },
};
</script>


<style lang="scss" scoped>
.layout-dashboard {
    .orders {
        h4 {
            margin-bottom: 20px;
        }

        .p-button {
            margin-top: -20px;
        }

        .order-tabs {
            margin-bottom: 1rem;

            .order-tab {
                padding: 1rem 2rem 2rem 1rem;
                position: relative;
                transition: box-shadow 0.2s;

                &:hover {
                    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }

                i {
                    font-size: 1rem;
                    vertical-align: middle;
                }

                .order-label {
                    margin-left: 0.25rem;
                    vertical-align: middle;
                }

                .stat-detail-icon {
                    position: absolute;
                    right: 1rem;
                    top: 2.25rem;
                    height: 1rem;
                    width: 1rem;
                }

                img {
                    position: absolute;
                    bottom: 0;
                    left: 5%;
                    width: 90%;
                }
            }
        }
    }

    .overview-chart {
        overflow: auto;
    }

    .dashbard-demo-dropdown {
        min-width: 8rem;
        margin-left: auto;
    }

    .product-badge {
        border-radius: 2px;
        padding: 0.25em 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.3px;

        &.status-instock {
            background: #c8e6c9;
            color: #256029;
        }

        &.status-outofstock {
            background: #ffcdd2;
            color: #c63737;
        }

        &.status-lowstock {
            background: #feedaf;
            color: #8a5340;
        }
    }
}
</style>