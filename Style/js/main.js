var j = 1;
showDivs(1);
function plusDivs(n) {
    showDivs((j += n));
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    if (n > x.length) {
        j = 1;
    }
    if (n < 1) {
        j = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[j - 1].style.display = 'block';
}

fetch('http://localhost:3000/tour')
    .then(function (response) {
        // Xử lý dữ liệu trả về từ API trong đối tượng Response
        return response.json();
    })
    .then(function (data) {
        // Lưu danh sách khách hàng vào một mảng
        var tours = data;
        // Duyệt qua mảng khách hàng và hiểtour.forEach(function (tours) {
        var price_tour = document.getElementsByClassName('price_item_2');
        var name_tour = document.getElementsByClassName('content_item_2_title');
        var vehicle_tour = document.getElementsByClassName('vehicle');
        var time_tour = document.getElementsByClassName('plan');
        var i = 0;
        tours.forEach(function (tour) {
            var name = tour.name;
            var prices = tour.price;
            var vehicle = tour.vehicle;
            var time = tour.time;
            price_tour[i].innerHTML = prices;
            name_tour[i].innerHTML = name;
            vehicle_tour[i].innerHTML = vehicle;
            time_tour[i].innerHTML = time;
            i++;
        });
    })
    .catch(function (error) {
        // Xử lý lỗi nếu có
        console.log(error);
    });

// THỐNG KÊ SỐ LƯỢNG TOUR BÁN RA

var myData = [];

// Hàm lấy dữ liệu từ API và cập nhật biểu đồ
function loadDataAndDrawChart() {
    // Gọi API để lấy dữ liệu mới nhất
    fetch('http://localhost:3000/tour')
        .then((response) => response.json())
        .then((data) => {
            // Gán dữ liệu mới vào biến myData
            myData = data;

            // Cập nhật biểu đồ với dữ liệu mới
            myChart.data.labels = myData.map((row) => row.destination);
            myChart.data.datasets[0].data = myData.map((row) => row.sold);
            myChart.update();
        });
}
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: 'Số lượng tour đã bán',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
});
document.addEventListener('DOMContentLoaded', loadDataAndDrawChart);
