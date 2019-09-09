<template>
  <div class="container">
    <div class="row mt-5">
      <div id="chart--visitors--by--country"></div>
    </div>
    <hr>
    <div class="row mt-5">
      <div id="chart--product--category--sales"></div>
    </div>
    <hr>
    <div class="row mt-5">
      <div id="chart--monthly--product--sales"></div>
    </div>
  </div>
</template>

<script>

  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";

  export default {
    name: "Dashboard",

    mounted() {
      this.visitorsByCountryChart();
      this.monthlyProductSalesChart();
      this.productCategorySales();
    },

    methods: {
      visitorsByCountryChart() {
        let chart = am4core.create("chart--visitors--by--country", am4charts.PieChart3D);

        let title = chart.titles.create();
        title.text = "Visitors by country";
        title.fontSize = 25;
        title.marginBottom = 30;

        chart.data = require('../json/visitorsByCountry.json');

        let pieSeries = chart.series.push(new am4charts.PieSeries3D());
        pieSeries.dataFields.value = "visits";
        pieSeries.dataFields.category = "country";
      },

      monthlyProductSalesChart() {
        let chart = am4core.create("chart--monthly--product--sales", am4charts.XYChart);

        let title = chart.titles.create();
        title.text = "Product sales by month";
        title.fontSize = 25;
        title.marginBottom = 30;

        chart.data = require('../json/productSales.json');
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.title.text = "Months";
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 200;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Products";

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "products";
        series.dataFields.categoryX = "month";
        series.name = "Research";
      },

      productCategorySales() {
        let chart = am4core.create("chart--product--category--sales", am4charts.RadarChart);

        let title = chart.titles.create();
        title.text = "Product sales by category";
        title.fontSize = 25;
        title.marginBottom = 30;

        chart.data = require('../json/productCategorySales');

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "category";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());


        let series = chart.series.push(new am4charts.RadarSeries());
        series.dataFields.valueY = "sales";
        series.dataFields.categoryX = "category";
      }
    }
  }
</script>

<style scoped>
  #chart--visitors--by--country {
    height: 300px;
    width: 100%;

  }
  #chart--monthly--product--sales {
    height: 300px;
    width: 100%;

  }
  #chart--product--category--sales {
    height: 600px;
    width: 100%;

  }
</style>
