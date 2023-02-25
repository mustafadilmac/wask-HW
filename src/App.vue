<template>
  <div class="section-holder">
    <div class="container-fluid">
      <div class="row text-center">
        <div class="col-lg-2 d-none d-lg-table-cell">
          <slider :key="0" :reverse="false"></slider>
        </div>
        <div class="col-lg-8">
          <div class="integration-head">
            <h1>Marketing Integrations</h1>
            <h2>Trust WASK's smart optimization features</h2>
          </div>

          <div class="action-buttons" v-if="accounts.length > 0">
            <div class="action-btn-group">
              <div class="action-btn-header">
                <span>Select Ad Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div class="button-list">
                <button class="wask-btn" v-for="(account, index) in accounts" :key="'account-btn-' + index" :class="selectedAccount.id === account.id ? 'active':''" @click="selectedAccount = account">{{ account.name }}</button>
              </div>
            </div>
            <div class="action-btn-group">
              <div class="action-btn-header">
                <span>Select Metric</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div class="button-list">
                <button class="wask-btn" :class="selectedMetric === 'clicks' ? 'active':''" @click="selectedMetric = 'clicks'">Click</button>
                <button class="wask-btn" :class="selectedMetric === 'impressions' ? 'active':''" @click="selectedMetric = 'impressions'">Impression</button>
                <button class="wask-btn" :class="selectedMetric === 'spend' ? 'active':''" @click="selectedMetric = 'spend'">Spend</button>
              </div>
            </div>
          </div>

          <div class="chart-holder" v-if="accounts.length > 0">
            <chart :data="selectedAccount['insights']" :active="selectedMetric"></chart>
          </div>
        </div>
        <div class="col-lg-2 d-none d-lg-table-cell">
          <slider :key="1" :reverse="true"></slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from './components/slider.vue'
import Chart from './components/chart.vue'
import axios from 'axios'

export default {
  components: {
    Slider,
    Chart
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      accounts: [],
      selectedAccount: {},
      selectedMetric: 'clicks'
    }
  },
  methods: {
    fetchData: async function () {
      let { data } = await axios.get('demo/myaccounts');
      this.accounts = data.accounts;
      this.selectedAccount = this.accounts[0];
    }
  }
}
</script>

<style>
.section-holder {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.chart-holder {
  background-color: var(--soft-bg);
  border-radius: var(--radius);
  padding: 40px;
}
.integration-head {
  margin-bottom: 100px;
}
.action-buttons {
  margin-bottom: 70px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  overflow: hidden;
}
.action-btn-group {
  display: flex;
  align-items: center;
  border-left: 1px solid var(--soft);
  margin-left: -2px;
  padding-left: 16px;
}
.action-btn-header {
  min-width: fit-content;
}
.action-btn-group svg {
  width: 18px;
  margin-left: 16px;
  margin-right: 30px;
}
.action-btn-group span {
  color: var(--dark);
  font-weight: 600;
  font-size: 12px;
}
.integration-head h1 {
  font-weight: 600;
  color: var(--dark);
  font-size: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 22px;
}
.integration-head h2 {
  font-weight: 600;
  font-size: 30px;
  color: var(--soft);
}
.wask-btn {
  width: max-content;
  border: none;
  font-size: 14px;
  color: var(--soft);
  padding: 10px 18px;
  border-radius: 200px;
  background-color: var(--soft-bg);
  text-transform: capitalize;
  margin-left: 16px;
}
.wask-btn.active {
  background-color: var(--dark);
  color: #FFFFFF;
}
.button-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
@media (max-width: 800px) {
  .integration-head h1 {
    font-size: 1.8rem;
  }
  .integration-head h2 {
    font-size: 1.2rem;
  }
}
</style>
