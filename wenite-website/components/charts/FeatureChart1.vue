<template>
  <vue-echarts :option="option" style="height: 500px" ref="chart" />
</template>

<script>
import { VueEcharts } from "vue3-echarts";

export default {
  name: "Echarts",
  components: {
    VueEcharts,
  },
  computed: {
    option() {
      return {
        fontFamily: "Roboto Condensed",
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            color: ["#cd3e49", "#33849d", "#b9e0e7", "#5f86f7", "#61c6c0"],

            name: "Health",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: true,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },

            data: [
              {
              },
              { value: 735, name: "Mental" },
              { value: 580, name: "Physical" },
              { value: 484, name: "Social" },

            ],
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.chart {
  height: 100vh;
}
.icon_wrapper {
  position: absolute;
  width: 100%;
}
.icon {
  position: absolute;
  margin-top: 217px;
  margin-left: -50px;
  width: 100px;
}
.container {
  position: relative;
  height: 600px;
}
</style>

<style>
body {
  margin: 0;
}
</style>