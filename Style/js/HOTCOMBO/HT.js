fetch('http://localhost:3000/tour')
    .then(function (response) {
        // Xử lý dữ liệu trả về từ API trong đối tượng Response
        return response.json();
    })
    .then(function (data) {
        // Lưu danh sách khách hàng vào một mảng
        var tour = data[2];
        // Duyệt qua mảng khách hàng và hiểtour.forEach(function (tours) {
        var time = document.getElementById('time');
        var id = document.getElementById('id');
        var adult = document.getElementById('adult');
        var old = document.getElementById('old');
        var child = document.getElementById('child');
        var seat = document.getElementsByClassName('remain_num');

        seat[0].innerHTML = tour.remain;
        time.innerHTML = tour.start;
        id.innerHTML = tour.tour_name;
        adult.innerHTML = tour.adult;
        old.innerHTML = tour.oldster;
        child.innerHTML = tour.child;
        var price = document.getElementsByClassName('price');
        price[0].innerHTML = tour.adult;
    })
    .catch(function (error) {
        // Xử lý lỗi nếu có
        console.log(error);
    });
