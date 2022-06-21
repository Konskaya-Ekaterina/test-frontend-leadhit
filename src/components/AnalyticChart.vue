<template>
  <div class="chart">
    <h2 class="chart__title">Аналитика по визитам</h2>
    <div class="chart__content" ref="chartdiv"></div>
  </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';

export default {
  name: "AnalyticChart",
  computed: {
    chartData() {
      let data = [...this.$store.getters['getChartData']]
      data.forEach(item => {
        item.date = item.date.split('-').reverse().join('.')
      })
      return data
    }
  },
  mounted() {
    this.addChart()
  },
  methods: {
    addChart() {
      let root = am5.Root.new(this.$refs.chartdiv);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        pinchZoomX: true
      }));

      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);

      let xRenderer = am5xy.AxisRendererX.new(root, {});
      xRenderer.grid.template.set("location", 0.5);
      xRenderer.labels.template.setAll({
        minPosition: 0.1,
        location: 0.5,
        multiLocation: 0.5
      });

      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "date",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      xAxis.data.setAll(this.chartData);

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxPrecision: 0,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));

      let series = chart.series.push(am5xy.LineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        categoryXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
          dy: -5
        })
      }));

      series.strokes.template.setAll({
        strokeWidth: 2
      });

      series.fills.template.setAll({
        visible: true,
        fillOpacity: 0.4,
        templateField: "fillSettings"
      });

      series.bullets.push(function(root) {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 4,
            fill: series.get("fill")
          })
        });
      });

      series.data.setAll(this.chartData);
      series.appear(1000);
    }
  }
}
</script>

<style lang="scss" scoped>

.chart__title {
  margin-bottom: 20px;
  text-align: center;
}

.chart__content {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  cursor: pointer;
}

</style>
