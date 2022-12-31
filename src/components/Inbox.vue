<template>
    <div class="grid panel-demo">
        <div class="col-12">
            <div class="card">
                <Splitter style="height: 800px" class="mb-1">
                    <SplitterPanel :size="25" :minSize="10" style="overflow: scroll">
                        <Accordion  :activeIndex="0" style="padding: 0rem">
                            <AccordionTab header="Monday July 2nd 2022">
                                <div class="w-full">
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer border-primary">
                                        <div class="p-radiobutton p-component mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="0">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8">
                                            <div class="font-medium mb-1">Basic</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-50 text-600 bg-primary-reverse"></div>
                                    </div>
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer surface-border">
                                        <div class="p-radiobutton p-component p-radiobutton-checked mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="1">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8"><div class="font-medium mb-1">Premium</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-border"></div>
                                    </div>
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer surface-border">
                                        <div class="p-radiobutton p-component mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="2">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8">
                                            <div class="font-medium mb-1">Enterprise</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-50 text-600 surface-border"></div>
                                    </div>
                                </div>
                            </AccordionTab>
                            <AccordionTab header="Sunday July 1st 2022">
                                <div class="w-full">
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer surface-border">
                                        <div class="p-radiobutton p-component mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="0">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8">
                                            <div class="font-medium mb-1">Basic</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-50 text-600 surface-border"></div>
                                    </div>
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer surface-border">
                                        <div class="p-radiobutton p-component p-radiobutton-checked mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="1">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8"><div class="font-medium mb-1">Premium</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-border"></div>
                                    </div>
                                    <div class="surface-card border-1 p-3 flex align-items-center cursor-pointer surface-border">
                                        <div class="p-radiobutton p-component mr-3">
                                            <div class="p-hidden-accessible">
                                                <input type="radio" class="" name="tier1" value="2">
                                            </div>
                                        </div>
                                        <div class="mr-4 md:mr-8">
                                            <div class="font-medium mb-1">Enterprise</div>
                                            <span class="text-sm">Quam nulla porttitor massa.</span>
                                        </div>
                                        <div class="border-round border-1 p-1 ml-auto flex flex-nowrap surface-50 text-600 surface-border"></div>
                                    </div>
                                </div>
                            </AccordionTab>
                        </Accordion>
                    </SplitterPanel>
                    <SplitterPanel :size="75" style="overflow: scroll">
                        <Splitter layout="vertical">
                            <SplitterPanel :size="100" style="overflow: scroll">
                                <p class="col">
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                                    id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                                    est eligendi optio cumque nihil impedit quo minus.
                                </p>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toolbarItems: [
                {
                    label: 'Save',
                    icon: 'pi pi-check'
                },
                {
                    label: 'Update',
                    icon: 'pi pi-upload'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash'
                },
                {
                    label: 'Home Page',
                    icon: 'pi pi-home'
                },
            ],
            cardMenu:  [
                { label: 'Save', icon: 'pi pi-fw pi-check' },
                { label: 'Update', icon: 'pi pi-fw pi-refresh' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
            ]
        }
    },
    methods: {
        toggle() {
            // this.$refs.menu.toggle(event);
        }
    }
}
</script>

<style scoped lang="scss">
p {
    line-height: 1.5;
    margin: 0;
}
::v-deep(.p-card .p-card-title) {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 0;
}
::v-deep(button) {
    margin-right: .25em;
    margin-left: .25em;
}
::v-deep(.p-splitbutton button) {
    margin-right: 0;
    margin-left: 0;
}
@media screen and (max-width: 960px) {
    .panel-demo {
        .toolbar-demo.card {
            overflow: auto;
        }
    }
}
.tabview-custom {
    i, span {
        vertical-align: middle;
    }

    span {
        margin: 0 .5rem;
    }
}

.p-tabview p {
    line-height: 1.5;
    margin: 0;
}
</style>
