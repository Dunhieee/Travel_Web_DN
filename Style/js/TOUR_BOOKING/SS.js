var tmp;
fetch('http://localhost:3000/tour')
    .then(function (response) {
        // Xử lý dữ liệu trả về từ API trong đối tượng Response
        return response.json();
    })
    .then(function (data) {
        // Lưu danh sách khách hàng vào một mảng
        var tour = data[5];
        // Duyệt qua mảng khách hàng và hiểtour.forEach(function (tours) {
        var time = document.getElementById('start');
        var id = document.getElementById('id');
        var adult = document.getElementById('adult');
        var old = document.getElementById('oldster');
        var child = document.getElementById('child');
        var baby = document.getElementById('baby');
        var departure = document.getElementById('departure');
        var remain = document.getElementById('remain');
        var adult_price = document.getElementById('adult_price');
        var old_price = document.getElementById('old_price');
        var child_price = document.getElementById('child_price');
        var baby_price = document.getElementById('baby_price');

        time.innerHTML = tour.start;
        id.innerHTML = tour.tour_name;
        adult.innerHTML = tour.adult;
        old.innerHTML = tour.oldster;
        child.innerHTML = tour.child;
        baby.innerHTML = tour.baby;
        departure.innerHTML = tour.departure;
        remain.innerHTML = tour.remain;
        tmp = tour.remain;
        adult_price.innerHTML = tour.adult_price;
        old_price.innerHTML = tour.old_price;
        child_price.innerHTML = tour.child_price;
        baby_price.innerHTML = tour.baby_price;
    })
    .catch(function (error) {
        // Xử lý lỗi nếu có
        console.log(error);
    });

// GỬI THANH TOÁN (NÚT THANH TOÁN)

function sendForm() {
    var k = document.getElementsByClassName('quantity_passenger');
    var sum = 0;
    for (i = 0; i < 4; i++) {
        sum = sum + +k[i].innerHTML;
    }
    var i;
    var x = document.getElementsByClassName('value');
    var a = document.getElementsByClassName('title');
    var check = 1;
    if (tmp == 0) {
        check = 0;
        alert('Tour này đã hết mất rồi. Bạn hãy chọn 1 tour khác hoặc đợi lần sau nhé! ');
        window.location.href = '/HTML/HOME/main.html';
    } else
        for (i = 0; i < x.length; i++) {
            var str = a[i].innerHTML;
            if (x[i].value == '') {
                alert('Bạn chưa nhập thông tin ' + str.slice(0, str.indexOf('<b>*</b>')));
                check = 0;
                break;
            }
        }
    if (tmp < sum) {
        alert('Bạn không thể đặt số vé lớn hơn số vé còn lại');
        check = 0;
    }
    if (check == 1) {
        // Lấy đối tượng nút từ DOM bằng id
        const button = document.getElementById('myButton');
        // Đăng ký sự kiện nhấp chuột vào nút
        button.addEventListener('click', function () {
            const URL = 'http://localhost:3000/tour/6';

            fetch(URL)
                .then((res) => res.json())
                .then((tour) => {
                    console.log('tour Before:', tour);

                    let tmp = tour.remain;
                    tour.remain = tmp - sum;
                    tour.sold = tour.sold + sum;

                    // Thực hiện yêu cầu PUT để cập nhật thông tin mới
                    return fetch(URL, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(tour),
                    });
                })
                .then((res) => res.json())
                .then((tour) => {
                    console.log('tour After:', tour);
                    window.location.href = '/HTML/RESULT/result.html'; // Chuyển hướng đến trang khác
                })
                .catch((error) => console.log(error));
        });
    }
}
