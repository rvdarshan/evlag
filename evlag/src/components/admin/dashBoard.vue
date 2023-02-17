<template>
    <div class="dashboard">
      <h1>Dashboard</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Sales</div>
            <div class="card-body">
              <canvas id="sales-chart"></canvas>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Top Products</div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Units Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product A</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>Product B</td>
                    <td>800</td>
                  </tr>
                  <tr>
                    <td>Product C</td>
                    <td>600</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js';
  
  export default {
    mounted() {
      // Sales Chart
      const salesData = [1000, 2000, 1500, 3000, 2500, 2000, 1500];
      const salesLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const salesChart = new Chart(document.getElementById('sales-chart'), {
        type: 'line',
        data: {
          labels: salesLabels,
          datasets: [
            {
              label: 'Sales',
              data: salesData,
              borderColor: 'blue',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        },
      });
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    margin: 20px;
  }
  .card {
    margin-bottom: 20px;
  }
  </style>
  