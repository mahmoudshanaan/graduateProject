document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('patients-chart').getContext('2d');
    var patientsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                label: 'Patients',
                data: [75, 85], // Example data, you should replace this with your actual data
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('profit-income-chart').getContext('2d');
    var profitIncomeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], // Example labels (months)
            datasets: [{
                label: 'Profit',
                data: [2000, 2500, 3000, 2800, 3200, 3500], // Example profit data (replace with your actual data)
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Income',
                data: [4000, 4500, 5000, 4800, 5200, 5500], // Example income data (replace with your actual data)
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('diseases-chart').getContext('2d');
    var diseasesChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Flu', 'Cold', 'Allergies', 'Stomachache', 'Headache'], // Example labels (replace with actual diseases)
            datasets: [{
                label: 'Diseases Percentage',
                data: [20, 15, 10, 25, 30], // Example data (replace with actual percentages)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Most Common Diseases'
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Monthly Sales Data
    var monthlySalesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [10000, 12000, 11000, 13000, 12500, 14000], // Example data (replace with actual data)
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    var monthlySalesCtx = document.getElementById('monthly-sales-chart').getContext('2d');
    var monthlySalesChart = new Chart(monthlySalesCtx, {
        type: 'line',
        data: monthlySalesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Quarterly Sales Data
    var quarterlySalesData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Sales',
            data: [35000, 40000, 38000, 42000], // Example data (replace with actual data)
            backgroundColor: 'rgba(138, 43, 226, 0.5)', // Purple color
            borderColor: 'rgba(138, 43, 226, 1)', // Purple color
            borderWidth: 1
        }]
    };

    var quarterlySalesCtx = document.getElementById('quarterly-sales-chart').getContext('2d');
    var quarterlySalesChart = new Chart(quarterlySalesCtx, {
        type: 'bar',
        data: quarterlySalesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('drug-demand-pie-chart').getContext('2d');
    var drugDemandChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Drug A', 'Drug B', 'Drug C', 'Drug D'], // Example drug names
            datasets: [{
                label: 'Demand',
                data: [30, 25, 20, 25], // Example demand percentages (replace with actual data)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)', // Red
                    'rgba(54, 162, 235, 0.5)', // Blue
                    'rgba(255, 205, 86, 0.5)', // Yellow
                    'rgba(75, 192, 192, 0.5)' // Green
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)', // Red border color
                    'rgba(54, 162, 235, 1)', // Blue border color
                    'rgba(255, 205, 86, 1)', // Yellow border color
                    'rgba(75, 192, 192, 1)' // Green border color
                ],
                borderWidth: 1
            }]
        },
        options: {}
    });
});