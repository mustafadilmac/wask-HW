<template>
  <div>
    <div style="background-color: #FFF5F5">
      <apexchart height="450" type="area" :options="chartOptions" :series="computedSeries"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'wask-chart',
  props: ['data', 'active'],
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    computedSeries: function () {
      let data = [];
      let dates = [];
      let series = {
        name: this.active,
        data: []
      }
      if(this.data) {
        this.data['data'].forEach(( item )=>{
          item[this.active] ? series.data.push( item[this.active] ) : series.data.push( 0 );
          dates.push(item['date_end']);
        })
      }
      data.push(series);
      this.chartOptions.xaxis.categories = dates;
      return data
    }
  },
  data() {
    return {
      chartOptions: {
        fill: {
          type: "gradient",
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            colorStops: [
              {
                offset: 1,
                color: "#D80082",
                opacity: 0.4
              },

              {
                offset: 100,
                color: "#D80082",
                opacity: 0
              }
            ]
          }
        },
        colors: ["#8B0157"],
        chart: {
          type: 'area',
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          labels: {
            show: false
          }
        },
        xaxis: {
          categories: [],
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          },
        },
        grid: {
          show: false,
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: -8
          },
        }
      },
    }
  }
}
</script>
