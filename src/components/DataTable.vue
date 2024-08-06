<script>
import { MtTypography, MtButton, MtIconSort, MtIconArrowCaret, MtIconTypeWeb, MtIconTypeList, MtIconTypeAd } from '@antiqua-design-system/vue-components';
import Switch from './Switch.vue';

import {Data1, Data2} from '../data/data.js';

export default {
  components: {
    MtTypography,
    MtButton,
    MtIconSort,
    Switch,
    MtIconArrowCaret,
    MtIconTypeWeb,
    MtIconTypeList,
    MtIconTypeAd
  },
  data() {
    return {
      sortKey: '',
      sortDirection: 'asc',
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40, 50],
      Data1,
      Data2,
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    tableHeadings: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedData() {
      return [...this.data].sort((a, b) => {
        let result = 0;
        if (a[this.sortKey] < b[this.sortKey]) result = -1;
        if (a[this.sortKey] > b[this.sortKey]) result = 1;
        return this.sortDirection === 'asc' ? result : -result;
      });
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.sortedData.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    pages() {
      return Array.from({ length: this.totalPages }, (v, i) => i + 1);
    },
  },
  watch: {
    pageSize() {
      this.currentPage = 1;
    },
  },
  methods: {
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortDirection = 'asc';
      }
    },
    toggleRow(index) {
      const actualIndex = (this.currentPage - 1) * this.pageSize + index;
      this.$set(this.data[actualIndex], 'expanded', !this.data[actualIndex].expanded);
    },
    getSortIcon(key) {
      if (this.sortKey === key) {
        return this.sortDirection === 'asc' ? 'down' : 'up';
      }
      return '';
    },
    goToPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    handleAccept(row) {
      this.$emit('accept-clicked', row);
    },
    handleDeny(row) {
      this.$emit('deny-clicked', row);
    },
    handleSwitchClick(row) {
      this.$emit('switch-clicked', row);
    },
    exportReport() {
            const link = document.createElement("a");
            link.href = 'https://kgaurav-monotype.github.io/font-license/assets/SampleReport.xlsx';
            link.setAttribute("download", "SampleReport.xlsx");
            link.setAttribute("target", "_blank");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
  },
};
</script>

<template>
  <div class="relative data-table overflow-x-auto px-6 py-8">
    <table class="w-full mb-8">
      <thead style="background-color: var(--mt-color--spirits--50);">
        <tr class="flex flex-row">
          <th v-for="(row, index) in tableHeadings" :key="index"
            class="py-3 px-4 flex flex-1 items-center justify-between cursor-pointer" @click="sortTable(row.key)">
            <MtTypography v-bind="{ tag: 'span', variant: 'body2--medium' }">{{ row.label }}</MtTypography>
            <MtIconSort v-if="row.sort" :rotate="getSortIcon(row.key)"></MtIconSort>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="flex flex-row" v-for="(row, index) in paginatedData" :key="index">
          <td v-for="(heading, index) in tableHeadings" :key="index" class="p-4 flex items-center flex-1">
            <template v-if="row[heading.key].type === 'text'">
              <MtTypography v-bind="{ tag: 'span', variant: index === 0 ? 'body2--medium' : 'body2--regular' }"><span v-html="row[heading.key].value"></span></MtTypography>
            </template>
            <template v-if="row[heading.key].type === 'link'">
              <MtTypography @click="exportReport" class="cursor-pointer" v-bind="{ tag: 'span', variant: 'body2--medium', color: 'blue-duck--500' }">Export report</MtTypography>
            </template>
            <template v-else-if="row[heading.key].type === 'icon'">
              <div class="flex items-end gap-2">
                <MtIconTypeList color="spirits--600"></MtIconTypeList>
                <MtIconTypeWeb color="spirits--600"></MtIconTypeWeb>
                <MtIconTypeAd size="md" color="spirits--600"></MtIconTypeAd>
              </div>
            </template>
            <template v-else-if="row[heading.key].type === 'button'">
              <div class="flex items-end gap-2">
                <MtButton @click="handleDeny(row)"
                  v-bind="{ color: 'lightgrey', size: 'small' }">Deny</MtButton>
                <MtButton @click="handleAccept(row)" v-bind="{ size: 'small' }">Accept</MtButton>
              </div>
            </template>
            <template v-else-if="row[heading.key].type === 'switch'">
              <Switch :isOn="row[heading.key].isOn" @click="handleSwitchClick(row)" @updateSwitch="row[heading.key].isOn = !row[heading.key].isOn;" />
            </template>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex items-center justify-between">
      <div class="results-per-page">
        <label for="results-per-page">
          <MtTypography v-bind="{ tag: 'span', variant: 'body1--regular', color: 'spirits--700' }">Show</MtTypography>
        </label>
        <select id="results-per-page" v-model="pageSize">
          <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
        </select>
        <label for="results-per-page">
          <MtTypography v-bind="{ tag: 'span', variant: 'body1--regular', color: 'spirits--700' }">results per page
          </MtTypography>
        </label>
      </div>
      <div class="flex gap-2">
        <MtButton v-bind="{ color: 'lightgrey' }" @click="prevPage" :disabled="currentPage === 1">
          <MtIconArrowCaret color="spitits-900" rotate="left" size="md"></MtIconArrowCaret>
        </MtButton>
        <!-- <span>Page {{ currentPage }} of {{ totalPages }}</span> -->

        <MtButton v-bind="{ color: 'lightgrey' }" v-for="page in pages" :key="page" @click="goToPage(page)"
          :class="{ active: currentPage === page }">
          {{ page }}
        </MtButton>


        <MtButton v-bind="{ color: 'lightgrey' }" @click="nextPage" :disabled="currentPage === totalPages">
          <MtIconArrowCaret color="spitits-900" rotate="right" size="md"></MtIconArrowCaret>
        </MtButton>
      </div>
    </div>
  </div>
</template>



<style scoped>
.data-table {
  background-color: white;
}

.data-table table tr th,
.data-table table tr td,
.data-table table {
  border-collapse: collapse;
  border: .5px solid var(--mt-border-grey);
}

#results-per-page {
  margin: 0 8px;
  padding: 4px 6px;
  border: 1px solid var(--mt-color--spirits--300);
  border-radius: 4px;
  color: #000;
}

.active::part(mt-button) {
  background-color: var(--mt-color--spirits--700);
  color: var(--mt-color--spirits--100);
}
</style>