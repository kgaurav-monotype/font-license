<script>
import { ref } from 'vue';
import successImage from '../assets/success.jpg';
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import dayjs from 'dayjs';
import 'dayjs/locale/en';

dayjs.locale('en');
const dateValue = ref([])
const formatter = ref({
  date: 'MMM DD, YYYY',
  month: 'MMM',
})
import vClickOutside from 'click-outside-vue3'
import ExpandableBar from './ExpandableBar.vue';
import DataTable from './DataTable.vue';
import LearnMoreAboutFonts from './LearnMoreAboutFonts.vue';
import { Data1, Data2, TableHeadings1, TableHeadings2, imageThumbnails, HelveticaNowMT } from '@/data/data.js';
import { MtTypography, MtButton, MtIconClose, MtIconArrowLong, MtIconMonotype, MtIconProductionStroke, MtIconAdd, MtIconDownload, MtIconArrowCaret, MtIconSearch } from '@antiqua-design-system/vue-components';

import eventBus from '../lib/eventBus';

const options = { year: 'numeric', month: 'short', day: 'numeric' };

export default {
    directives: {
        clickOutside: vClickOutside.directive
    },
    components: {
        MtTypography,
        MtButton,
        MtIconProductionStroke,
        MtIconAdd,
        MtIconDownload,
        MtIconArrowCaret,
        MtIconSearch,
        ExpandableBar,
        DataTable,
        LearnMoreAboutFonts,
        MtIconClose,
        MtIconMonotype,
        MtIconArrowLong,
        VueTailwindDatepicker,
    },
    props: {
        activeTab: {
            type: String,
            required: true,
        },
        activeLink: {
            type: String,
            required: true,
        },
        pageSize: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            showBottomBar: false,
            selectedRow: null,
            isAcceptFontModalOpen: false,
            isSuccessfullyAdded: false,
            isSuccessfullyRemoved: false,
            isDenyFontModalOpen: false,
            isShowConfirmSubmitModal: false,
            isConformFontListSubmitted: false,
            successImage,
            isModalOpen: false,
            isSidebarOpen: false,
            isInnerSidebarOpen: false,
            isFontConfirmed: false,
            isSubmitModalOpen: false,
            tabs: ['Licence dashboard', 'Fonts for review', 'Confirmed production fonts'],
            activeTab: 'Confirmed production fonts',
            imageThumbnails,
            // Confirmed production fonts data
            Data1,
            TableHeadings1,
            // Font in review data
            Data2,
            TableHeadings2,
            HelveticaNowMT,
            selectedFonts: [],
            dateValue: null,
            formatter: {
                date: 'MMM DD, YYYY',
                month: 'MMM',
            },
            currentDate: new Date().toLocaleDateString('en-US', options),
            isSwitchTrueModalOpen: false,
            isSwitchTrueActivated: false,
            isSwitchFalseModalOpen: false,
            isSwitchFalseActivated: false,
            switchRow: null,
        };
    },
    methods: {
        selectTab(tab) {
            this.activeTab = tab;
            this.$emit('tab-active', tab);
        },
        openSidebar() {
            this.isSidebarOpen = true;
        },
        closeSidebar() {
            this.isSidebarOpen = false;
            this.isInnerSidebarOpen = false;
            this.isModalOpen = false;
            this.showBottomBar = false;
        },
        clickOnHelveticaNowMT() {
            this.isInnerSidebarOpen = true;
            this.HelveticaNowMT.forEach(item => (item.checked = false));
        },
        handleItemClick(index) {
            this.HelveticaNowMT[index].checked = !this.HelveticaNowMT[index].checked;
            this.showBottomBar = this.HelveticaNowMT.some(item => item.checked);
        },
        cancelSelection() {
            this.HelveticaNowMT.forEach(item => (item.checked = false));
            this.showBottomBar = false;
        },
        makeSelectedForProduction() {
            this.selectedFonts = this.HelveticaNowMT
                .filter(item => item.checked)
                .map(item => ({
                    font_style: { value: `${item.label} <span class="tag">New</span>`, type: 'text' },
                    accepted_by: { value: 'Tony', type: 'text' },
                    end_date: { value: this.currentDate, type: 'text' },
                    source: { value: 'User', type: 'text' },
                    in_production: { isOn: true, type: 'switch' }
                }));
                this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        closeSubmitModal() {
            this.isSubmitModalOpen = false;
        },
        confirmSelection() {
            this.selectedFonts.forEach(font => {
                font.end_date.value = this.dateValue.endDate || this.currentDate;
            });
            this.Data1.unshift(...this.selectedFonts);
            this.isFontConfirmed = true;
            this.showBottomBar = false;
            this.isSidebarOpen = false;
        },
        onSuccessfullAdd() {
            this.isModalOpen = false;
            this.isFontConfirmed = false;
            this.isConformFontListSubmitted = false;
            eventBus.emit('updateNotification', {
                heading: 'Confirmed production font list is not submitted.',
                message: 'Additional text if needed',
                status: 'warning'
            });
        },
        submitFontList() {
            this.isSubmitModalOpen = true;
            this.isConformFontListSubmitted = false;
            this.isShowConfirmSubmitModal = true;
        },
        confirmSubmitList() {
            this.isConformFontListSubmitted = false;
            this.isShowConfirmSubmitModal = false;
        },
        onSubmitListDone() {
            this.isSubmitModalOpen = false;
            this.isConformFontListSubmitted = true;
            this.isShowConfirmSubmitModal = false;
            // Emit an event with the notification content and status
            eventBus.emit('updateNotification', {
                heading: 'Thank you for submitting your quarterly report',
                message: 'Your font list has been successfully submitted.',
                status: 'success'
            })
        },
        openAcceptModal(row) {
            this.isAcceptFontModalOpen = true;
            this.isSuccessfullyAdded = true;
            this.selectedRow = row;
        },
        openDenyModal(row) {
            this.isDenyFontModalOpen = true;
            this.isSuccessfullyRemoved = true;
            this.selectedRow = row;
        },
        confirmAccept() {
            this.isAcceptFontModalOpen = true;
            this.isSuccessfullyAdded = false;
        },
        onAcceptDone() {
            this.isAcceptFontModalOpen = false;
            this.isSuccessfullyAdded = false;
            this.Data1.unshift({
                    font_style: { value: `${this.selectedRow.font_style.value} <span class="tag">New</span>`, type: 'text' },
                    accepted_by: { value: 'Tony', type: 'text' },
                    end_date: { value: this.currentDate, type: 'text' },
                    source: { value: 'User', type: 'text' },
                    in_production: { isOn: true, type: 'switch' }
                });
            const index = this.Data2.findIndex((item) => item.font_style.value === this.selectedRow.font_style.value);
            if (index > -1) {
                this.Data2.splice(index, 1);
            }
            this.isConformFontListSubmitted = false;
            eventBus.emit('updateNotification', {
                heading: 'Confirmed production font list is not submitted.',
                message: 'Additional text if needed',
                status: 'warning'
            });
        },
        onContinueManage() {
            this.isAcceptFontModalOpen = false;
            this.isSuccessfullyAdded = false;
        },
        closeAcceptModal() {
            this.isAcceptFontModalOpen = false;
            this.isSuccessfullyAdded = false;
        },
        closeDenyModal() {
            this.isDenyFontModalOpen = false;
            this.isSuccessfullyRemoved = false;
        },
        confirmDeny() {
            this.isDenyFontModalOpen = true;
            this.isSuccessfullyRemoved = false;
        },
        onDenyDone() {
            this.isDenyFontModalOpen = false;
            this.isSuccessfullyRemoved = false;
            const index = this.Data2.findIndex((item) => item.font_style.value === this.selectedRow.font_style.value);
            if (index > -1) {
                this.Data2.splice(index, 1);
            }
            this.isConformFontListSubmitted = false;
        },
        handleSwitch(row) {
            this.switchRow = row;
            if (this.switchRow.in_production.isOn === true) {
                this.isSwitchTrueModalOpen = true;
                this.isSwitchTrueActivated = true;
            } else {
                this.isSwitchFalseModalOpen = true;
                this.isSwitchFalseActivated = true;
            }
        },
        confirmActivate(row) {
            this.isSwitchTrueModalOpen = true;
            this.isSwitchTrueActivated = false;
            this.isConformFontListSubmitted = false;
            eventBus.emit('updateNotification', {
                heading: 'Confirmed production font list is not submitted.',
                message: 'Additional text if needed',
                status: 'warning'
            });
        },
        confirmDeactivate() {
            this.isSwitchFalseModalOpen = true;
            this.isSwitchFalseActivated = false;
            this.isConformFontListSubmitted = false;
            eventBus.emit('updateNotification', {
                heading: 'Confirmed production font list is not submitted.',
                message: 'Additional text if needed',
                status: 'warning'
            });
        },
        closeSwitchTrueModal() {
            this.isSwitchTrueModalOpen = false;
            this.isSwitchTrueActivated = false;
        },
        closeSwitchFalseModal() {
            this.isSwitchFalseModalOpen = false;
            this.isSwitchFalseActivated = false;
        },
        exportList() {
            const link = document.createElement("a");
            link.href = 'https://kgaurav-monotype.github.io/font-license/assets/SampleReport.xlsx';
            link.setAttribute("download", "SampleReport.xlsx");
            link.setAttribute("target", "_blank");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

    },
    mounted() {
        this.$watch('isSidebarOpen', (newValue) => {
            if (newValue) {
                document.body.classList.add('sidebar-open');
            } else {
                document.body.classList.remove('sidebar-open');
            }
        });
    },
    created() {
        eventBus.on('switch-clicked', (payload) => {
            this.handleSwitchClick(payload.row);
        });
    },
};
</script>


<template>
    <div v-if="activeLink === 'Font licensing'">
        <div class="heading-wrapper flex items-center justify-between">
            <div class="flex gap-5 items-center">
                <MtIconProductionStroke size="md"></MtIconProductionStroke>
                <MtTypography v-bind="{ tag: 'h2', variant: 'heading6--medium' }">Font licensing</MtTypography>
            </div>
            <div class="flex gap-4 items-center" v-if="activeTab === 'Confirmed production fonts'">
                <MtTypography v-if="!isConformFontListSubmitted" v-bind="{ tag: 'p', variant: 'body2--medium', color: 'red-babe--500' }">Please verify your confirmed production font list by: 31.07.2024</MtTypography>
                <MtTypography v-if="isConformFontListSubmitted" v-bind="{ tag: 'p', variant: 'body2--medium', color: 'turtle-green--500' }">Confirmed production fonts last submitted on: Today</MtTypography>
                <MtButton @handleclick="submitFontList" v-click-outside="closeSubmitModal" v-bind="{disabled:this.isConformFontListSubmitted}">Submit production font list</MtButton>
            </div>
            <div class="flex gap-4 items-center" v-if="activeTab === 'Fonts for review'">
                <MtTypography v-bind="{ tag: 'p', variant: 'body2--medium', color: 'spirits--950' }">Confirmed
                    List was last updated: 12.07.2024</MtTypography>
            </div>
        </div>
        <div class="tab-wrapper">
            <a v-for="tab in tabs" :key="tab" href="#" class="tab mx-5 py-4"
                :class="{ 'tab--active': activeTab === tab }" @click="selectTab(tab)">
                <MtTypography v-bind="{ tag: 'span', variant: 'body1--regular' }">{{ tab }} <span v-if="tab === 'Confirmed production fonts'">({{ this.Data1.length }})</span></MtTypography>
            </a>
        </div>
        <div class="content" v-if="activeTab === 'Confirmed production fonts'">
            <div class="search-bar flex justify-between items-center p-4">
                <div class="relative flex flex-1 items-center search">
                    <MtIconSearch class="absolute px-4" size="sm"></MtIconSearch>
                    <input id="search" type="text" placeholder="Search..." class="py-4 px-5 pl-12" />
                </div>
                <div class="flex">
                    <MtButton class="combobox" square="true" color="darkgrey" variant="ghost">
                        <MtIconArrowCaret slot="icon-end" rotate="down"></MtIconArrowCaret>
                        Quarter
                    </MtButton>
                    <MtButton class="combobox" square="true" color="darkgrey" variant="ghost">
                        <MtIconArrowCaret slot="icon-end" rotate="down"></MtIconArrowCaret>
                        In production
                    </MtButton>
                    <MtButton class="combobox" @handleclick="exportList" square="true" color="darkgrey" variant="ghost">
                        <MtIconDownload slot="icon-start" color="blue-duck--500"></MtIconDownload>
                        Export List
                    </MtButton>
                    <MtButton @click="openSidebar" v-click-outside="closeSidebar" class="combobox" square="true"
                        color="magenta" variant="ghost">
                        <MtIconAdd slot="icon-start" color="magneton--500"></MtIconAdd>
                        Add new production font
                    </MtButton>
                </div>
            </div>
            <ExpandableBar
                title="This list contains all approved production fonts that are currently in use by your team members. You can validate them by font style, remove or add new production font to the list."
                additionalText="Use this list for upcoming winter collection project. This list contains all approved production fonts that are currently in use by your team members. You can validate them by font style, remove or add new production font to the list.This list contains all approved production fonts that are currently in use by your team members. You can validate them by font style, remove or add new production font to the list."
                :images="imageThumbnails" />
            <DataTable :data="Data1" :tableHeadings="TableHeadings1" @switch-clicked="handleSwitch" />
            <LearnMoreAboutFonts />
        </div>
        <div v-else-if="activeTab === 'Fonts for review'" class="content">
            <div class="search-bar flex justify-between items-center p-4">
                    <MtButton class="combobox no-border" square="true" color="darkgrey" variant="ghost">
                        <MtIconDownload slot="icon-start" color="blue-duck--500"></MtIconDownload>
                        Export List
                    </MtButton>
            </div>
            <ExpandableBar
                title="This list contains all fonts for which there is a record of activity - including fonts synced and/or downloaded from Monotype Fonts, fonts for which web page views have been registered, fonts flagged by users, and fonts identified by Monotype's research team."
                additionalText="Use this list for upcoming winter collection project. This list contains all approved production fonts that are currently in use by your team members. You can validate them by font style, remove or add new production font to the list.This list contains all approved production fonts that are currently in use by your team members. You can validate them by font style, remove or add new production font to the list."
                :images="imageThumbnails" />
            <DataTable :data="Data2" :tableHeadings="TableHeadings2" @accept-clicked="openAcceptModal" @deny-clicked="openDenyModal" />
            <LearnMoreAboutFonts />
        </div>
    </div>
    <div v-else="activeLink !== 'Font licensing'" class="p-8">
        <MtTypography v-bind="{ tag: 'h2', variant: 'heading6--medium' }"></MtTypography>
    </div>

    <!-- Sidebar start ======================================== -->


    <div class="sidebar-overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>
    <div class="sidebar" v-if="isSidebarOpen" @click.stop :class="isSidebarOpen ? 'open' : 'close'">
        <div class="sidebar-content" v-if="!isInnerSidebarOpen">
            <div class="sidebar-header p-6 flex justify-between border-b">
                <MtTypography v-bind="{ tag: 'p', variant: 'heading7--medium' }">Add new production font</MtTypography>
                <MtIconClose class="cursor-pointer" @click="closeSidebar"></MtIconClose>
            </div>
            <div class="relative flex flex-1 items-center border-b">
                <MtIconSearch class="absolute px-4" size="sm"></MtIconSearch>
                <input id="search" type="text" placeholder="Search font" class="py-3 px-5 pl-12" />
            </div>
            <div class="sidebar-body">
                <ul>
                    <li class="sidebar-item p-6 border-b cursor-pointer" @click="clickOnHelveticaNowMT">
                        <div class="flex gap-2 items-center mb-2">
                            <MtIconMonotype></MtIconMonotype>
                            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">Helvetica Now MT
                            </MtTypography>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);  font-family: 'HelveticaNowMTTextRegular'; ">
                            Helvetica Now MT</p>
                    </li>
                    <li class="sidebar-item p-6 border-b cursor-pointer">
                        <div class="flex gap-2 items-center mb-2">
                            <MtIconMonotype></MtIconMonotype>
                            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">Monarda</MtTypography>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);  font-family: 'MonardaRegular'; ">Monarda</p>
                    </li>
                    <li class="sidebar-item p-6 border-b cursor-pointer">
                        <div class="flex gap-2 items-center mb-2">
                            <MtIconMonotype></MtIconMonotype>
                            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">La Luxes Script
                            </MtTypography>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);  font-family: 'LaLuxesScript'; ">La Luxes Script
                        </p>
                    </li>
                    <li class="sidebar-item p-6 border-b cursor-pointer">
                        <div class="flex gap-2 items-center mb-2">
                            <MtIconMonotype></MtIconMonotype>
                            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">TT Travels Next
                            </MtTypography>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);  font-family: 'TTTravelsNextBold'; ">TT Travels
                            Next</p>
                    </li>
                    <li class="sidebar-item p-6 border-b cursor-pointer">
                        <div class="flex gap-2 items-center mb-2">
                            <MtIconMonotype></MtIconMonotype>
                            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">Cotford</MtTypography>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);  font-family: 'CotfordDisplayBold'; ">Cotford</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Inner Sidebar start ========================================= -->

        <div class="sidebar-content" v-if="isInnerSidebarOpen">
            <div class="sidebar-header p-6 flex justify-between border-b">
                <div class="flex gap-4 items-center">
                    <MtIconArrowLong class="cursor-pointer" rotate="left"
                        @click="this.isInnerSidebarOpen = !isInnerSidebarOpen"></MtIconArrowLong>
                    <MtTypography v-bind="{ tag: 'p', variant: 'heading7--medium' }">Helvetica Now MT</MtTypography>
                </div>
                <MtIconClose class="cursor-pointer" @click="closeSidebar"></MtIconClose>
            </div>
            <div class="relative flex flex-1 py-3 px-6 items-center border-b">
                <MtTypography v-bind="{ tag: 'p', variant: 'body2--medium', color: 'spirits--600' }">Showing 5 results
                </MtTypography>
            </div>
            <div class="sidebar-body h-max">
                <ul class="">
                    <li v-for="(row,index) in HelveticaNowMT" :key="index" class="sidebar-item p-6 border-b cursor-pointer" @click="handleItemClick(index)">
                        <div class="flex gap-2 items-center justify-between mb-2">
                            <div class="flex gap-4 items-center">
                                <input id="default-checkbox" type="checkbox" value="" v-model="row.checked"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <div class="flex gap-2 items-center checkbox-text">
                                    <MtIconMonotype></MtIconMonotype>
                                    <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">{{ row.label }}</MtTypography>
                                </div>
                            </div>
                            <MtButton variant="bordered" size="small">
                                <MtIconProductionStroke></MtIconProductionStroke>
                            </MtButton>
                        </div>
                        <p style="font-size: var(--mt-font-size--2xl);" :style="{ fontFamily: row.font_family }">
                            {{ row.label }}</p>
                    </li>
                </ul>
            </div>
            <div v-if="!showBottomBar" class="sidebar-footer w-full flex flex-col gap-3 fixed bottom-0 left-0 px-6 py-4 border-t" style="background-color: white;">
                <MtTypography v-bind="{ tag: 'span', variant: 'body1--medium' }"> Want to explore more?</MtTypography>
                <div class="flex gap-4">
                    <MtButton class="flex-1" color="darkgrey" variant="bordered">Go to Library...</MtButton>
                    <MtButton class="flex-1" color="purple">Browse fonts</MtButton>
                </div>
            </div>
            <div v-if="showBottomBar" class="sidebar-footer w-full flex flex-col gap-3 fixed bottom-0 left-0 px-6 py-6 border-t" style="background-color: white;">
                <div class="flex gap-4">
                    <MtButton @click="cancelSelection" class="flex-1" color="darkgrey" variant="ghost">Cancel</MtButton>
                    <MtButton @click="makeSelectedForProduction" v-click-outside="closeModal" class="flex-1" >Make Selected for Production</MtButton>
                </div>
            </div>
        </div>
    </div>

    <!-- Sidebar end ======================================== -->

    <!-- Modal start ======================================== -->


    <div class="modal-overlay" v-if="isModalOpen" @click="closeModal"></div>
    <div v-if="isModalOpen" class="modal">
      <div v-if="!isFontConfirmed" class="modal-content p-8" @click.stop>
        <span class="close" @click="closeModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">You are confirming these fonts as production fonts.</MtTypography>
        <MtTypography class="mb-5" v-bind="{ tag: 'p', variant: 'body1--regular' }">By doing so, you are validating that your organization is using this font as a Production Font under the terms of your licensing agreement. If you are not sure what a production font is, please follow this <a href="#">link</a>.</MtTypography>
        <div class="flex flex-col gap-3 mb-6">
            <MtTypography v-bind="{ tag: 'p', variant: 'heading7--medium', color: 'spirits--700' }">Add details (optional):</MtTypography>
            <VueTailwindDatepicker class="datepicker" placeholder="Start Date - End Date" separator=" - " v-model="dateValue" :shortcuts="false" :formatter="formatter" />
        </div>
        <div class="flex gap-3">
            <MtButton @click="closeModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmSelection" >Confirm</MtButton>
        </div>
      </div>
      <div v-if="isFontConfirmed" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully added!</MtTypography>
            <MtTypography class="mb-5" v-bind="{ tag: 'p', variant: 'body1--regular' }">You have successfully added production font to your list.</MtTypography>
            <MtButton @click="onSuccessfullAdd" >Done</MtButton>
      </div>
    </div>

    <!-- Modal end ======================================== -->

    <!-- Submit Modal start ======================================== -->


    <div class="modal-overlay" v-if="isSubmitModalOpen" @click="closeSubmitModal"></div>
    <div v-if="isSubmitModalOpen" class="modal">
      <div v-if="isShowConfirmSubmitModal" class="submit-modal-content p-8" @click.stop>
        <span class="close" @click="closeSubmitModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">You are about to submit the report</MtTypography>
        <MtTypography class="mb-5" v-bind="{ tag: 'p', variant: 'body1--regular' }">This is a summary of all Production Fonts that your organization is using. You are contractually obligated to submit this list to Monotype each quarter.</MtTypography>
        <div class="flex flex-row gap-3 mb-6 items-center">
            <MtTypography v-bind="{ tag: 'span', variant: 'body1--regular' }">Total number of production fonts:</MtTypography>
            <MtTypography v-bind="{ tag: 'span', variant: 'body1--medium' }">{{ this.Data1.length }} production fonts used</MtTypography>
        </div>
        <div class="flex gap-3">
            <MtButton @click="closeSubmitModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmSubmitList" >Submit list</MtButton>
        </div>
      </div>
      <div v-if="!isShowConfirmSubmitModal" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeSubmitModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully submitted!</MtTypography>
            <MtTypography class="mb-5" v-bind="{ tag: 'p', variant: 'body1--regular' }">You have successfully submitted your quarterly report.</MtTypography>
            <MtButton @click="onSubmitListDone" >Done</MtButton>
      </div>
    </div>

    <!-- Submit Modal end ======================================== -->

    <!-- Font Accept Modal start ======================================== 
        isAcceptFontModalOpen: false,
        isSuccessfullyAdded: false,
        function - closeAcceptModal, confirmAccept, onAcceptDone, onContinueManage
    
    -->


    <div class="modal-overlay" v-if="isAcceptFontModalOpen" @click="closeAcceptModal"></div>
    <div v-if="isAcceptFontModalOpen" class="modal">
      <div v-if="isSuccessfullyAdded" class="submit-modal-content p-8" @click.stop>
        <span class="close" @click="closeAcceptModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Are you sure this is a Production Font?</MtTypography>
        <MtTypography class="mb-6" v-bind="{ tag: 'p', variant: 'body1--regular' }">By approving this font, it will be added to your Confirmed Production Font list.</MtTypography>
        <div class="flex gap-3">
            <MtButton @click="closeAcceptModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmAccept" >Accept</MtButton>
        </div>
      </div>
      <div v-if="!isSuccessfullyAdded" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeAcceptModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully added font as production font.</MtTypography>
            <MtTypography class="mb-5" v-bind="{ tag: 'p', variant: 'body1--regular' }">You have successfully submitted your quarterly report.</MtTypography>
            <div class="flex gap-3">
                <MtButton @click="onContinueManage" color="lightgrey">Continue managing fonts</MtButton>
                <MtButton @click="onAcceptDone" >Proceed</MtButton>
            </div>
      </div>
    </div>

    <!-- Font Accept Modal end ======================================== -->


    <!-- Font Deny Modal start ========================================
    isDenyFontModalOpen: false,
        isSuccessfullyRemoved: false,
        function - closeDenyModal, confirmDeny, onDenyDone
    
    -->


    <div class="modal-overlay" v-if="isDenyFontModalOpen" @click="closeDenyModal"></div>
    <div v-if="isDenyFontModalOpen" class="modal">
      <div v-if="isSuccessfullyRemoved" class="submit-modal-content p-8" @click.stop>
        <span class="close" @click="closeDenyModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Are you sure this is not a Production Font?</MtTypography>
        <MtTypography class="mb-6" v-bind="{ tag: 'p', variant: 'body1--regular' }">By denying this font from the list, you are verifying that it should not be considered a Production Font under the terms of your license.</MtTypography>
        
        <div class="flex gap-3">
            <MtButton @click="closeDenyModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmDeny" >Deny</MtButton>
        </div>
      </div>
      <div v-if="!isSuccessfullyRemoved" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeDenyModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-6 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully removed from the list.</MtTypography>
            <MtButton @click="onDenyDone" >Close</MtButton>
      </div>
    </div>

    <!-- Font Deny Modal end ======================================== -->

    <!-- Switch true Modal start ========================================
    isSwitchTrueModalOpen: false,
            isSwitchTrueActivated: false,
            isSwitchFalseModalOpen: false,
            isSwitchFalseActivated: false, 
    -->


    <div class="modal-overlay" v-if="isSwitchTrueModalOpen" @click="closeSwitchTrueModal"></div>
    <div v-if="isSwitchTrueModalOpen" class="modal">
      <div v-if="isSwitchTrueActivated" class="submit-modal-content p-8" @click.stop>
        <span class="close" @click="closeSwitchTrueModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Are you sure this font is used in production?</MtTypography>
        <MtTypography class="mb-6" v-bind="{ tag: 'p', variant: 'body1--regular' }">By activating this font, it means that this font is used in production. </MtTypography>
        
        <div class="flex gap-3">
            <MtButton @click="closeSwitchTrueModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmActivate" >Activate</MtButton>
        </div>
      </div>
      <div v-if="!isSwitchTrueActivated" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeSwitchTrueModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-6 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully activated font as production font.</MtTypography>
            <MtButton @click="closeSwitchTrueModal" >Continue</MtButton>
      </div>
    </div>

    <!-- Switch true Modal end ======================================== -->

    <!-- Switch false Modal start ======================================== -->


    <div class="modal-overlay" v-if="isSwitchFalseModalOpen" @click="closeSwitchFalseModal"></div>
    <div v-if="isSwitchFalseModalOpen" class="modal">
      <div v-if="isSwitchFalseActivated" class="submit-modal-content p-8" @click.stop>
        <span class="close" @click="closeSwitchFalseModal"><MtIconClose></MtIconClose></span>
        <MtTypography class="mb-5 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Are you sure this font is not used in production?</MtTypography>
        <MtTypography class="mb-6" v-bind="{ tag: 'p', variant: 'body1--regular' }">If you are deactivating this font, it means that this font is not used currently in production.</MtTypography>
        
        <div class="flex gap-3">
            <MtButton @click="closeSwitchFalseModal" color="lightgrey">Cancel</MtButton>
            <MtButton @click="confirmDeactivate" >Deactivate</MtButton>
        </div>
      </div>
      <div v-if="!isSwitchFalseActivated" class="modal-content p-8" @click.stop>
            <span class="close" @click="closeSwitchFalseModal"><MtIconClose></MtIconClose></span>
            <img :src="successImage" alt="Success" class="mb-5" />
            <MtTypography class="mb-6 pr-20" v-bind="{ tag: 'p', variant: 'heading5--medium' }">Successfully deactivated font as production font.</MtTypography>
            <MtButton @click="closeSwitchFalseModal" >Continue</MtButton>
      </div>
    </div>

    <!-- Switch false Modal end ======================================== -->


</template>

<style scoped>
.heading-wrapper {
    height: 88px;
    padding: var(--mt-spacing-unit--lg);
    border-bottom: 1px solid var(--mt-color--spirits--300);
}

.tab-wrapper {
    border-bottom: 1px solid var(--mt-color--spirits--300);
}

.search-bar {
    height: 56px;
    border-bottom: 1px solid var(--mt-color--spirits--300);
}

.sidebar-item {
    user-select: none;
}

.sidebar-item:hover {
    background-color: var(--mt-color--spirits--50);
}

#search {
    width: 100%;
}

.tab {
    position: relative;
    display: inline-block;

    mt-typography::part(mt-typography) {
        color: var(--mt-color--spirits--700);
    }

    &.tab--active {
        border-bottom: 2px solid var(--mt-color--blue-duck--500);

        mt-typography::part(mt-typography) {
            color: var(--mt-color--spirits--900);
            font-family: 'HelveticaNowMTTextMedium';
        }
    }
}

.combobox::part(mt-button) {
    --mt-btn-top-bottom-padding: 20px;
    --mt-btn-left-right-padding: 24px;
    --mt-btn-md-height: 56px;
    border-left: 1px solid var(--mt-color--spirits--300);
}

.combobox.no-border::part(mt-button) {
    border-left: 0;
}

.combobox::part(mt-button):hover {
    background-color: transparent;
}

.search {
    flex-basis: 300px;
}

@keyframes sidebar-open {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 520px;
    background-color: white;
    border-left: 1px solid var(--mt-color--spirits--300);
    transform: translateX(100%);
    z-index: 1000;
}

.sidebar.open {
    transform: translateX(0%);
    animation: sidebar-open 0.3s ease-out;
}

.sidebar-overlay, .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 900;
    overflow: hidden;
}

.sidebar-footer {
    background-color: white;
    box-shadow: 0px -12px 48px 0px rgba(0, 0, 0, 0.08);
}

.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content, .submit-modal-content {
  background-color: #fefefe;
  border-radius: 16px;
  margin: 15% auto;
  width: 730px;
  /* height: 400px; */
  position: relative;
}

.submit-modal-content {
  width: 600px;
}

.close {
    position: absolute;
    top: 12px;
    right: 24px;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

</style>