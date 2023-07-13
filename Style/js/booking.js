// GIẢM SỐ LƯỢNG VÉ
var amount = 0;

function decrease(n) {
    let i;
    var a = document.getElementsByClassName('quantity_passenger');
    for (i = 0; i < 4; i++) {
        if (i == n) {
            var x = +a[i].innerHTML;
            if (x != 0) {
                a[i].innerHTML = x - 1;
                var k = document.getElementsByClassName('total_2');
                var sum = amount;
                var unit_price = document.getElementsByClassName('price');
                for (i = 0; i < 4; i++) {
                    if (i == n) {
                        var y = +unit_price[i].innerHTML;
                        sum -= y;
                    }
                }
                k[0].innerHTML = sum.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
                amount = sum;
            }
            break;
        }
    }

    var b = document.getElementsByClassName('quanity');
    for (i = 0; i < 4; i++) {
        if (i == n) {
            var x = +a[i].innerHTML;
            b[i].innerHTML = +a[i].innerHTML;
        }
    }
}
// TĂNG SỐ LƯỢNG VÉ
function increase(n) {
    let i;
    var a = document.getElementsByClassName('quantity_passenger');
    for (i = 0; i < 4; i++) {
        if (i == n) {
            var x = +a[i].innerHTML;
            a[i].innerHTML = x + 1;
        }
    }

    var b = document.getElementsByClassName('quanity');
    for (i = 0; i <= 4; i++) {
        if (i == n) {
            var x = +a[i].innerHTML;
            b[i].innerHTML = x;
        }
    }

    var k = document.getElementsByClassName('total_2');
    var sum = amount;
    var unit_price = document.getElementsByClassName('price');
    for (i = 0; i < 4; i++) {
        if (i == n) {
            var y = +unit_price[i].innerHTML;
            sum += y;
        }
    }
    k[0].innerHTML = sum.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    amount = sum;
}

// THÊM THÔNG TIN KHÁCH HÀNG CÓ VÉ

// // TẠO THÊM DÒNG NHẬP THÔNG TIN KHÁCH HÀNG
var count = 0;
var addButton = document.getElementsByClassName('add_icon');
var formContainer;
for (let j = 0; j < addButton.length; j++) {
    addButton[j].addEventListener('click', function () {
        let index = j + 1;
        formContainer = document.getElementById('form-container-' + index);
        // Tạo một element form và thêm 3 input vào bên trong
        const form = document.createElement('div');
        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        const input1 = document.createElement('input');
        input1.type = 'text';
        input1.placeholder = ' Vui lòng nhập Họ và tên';
        div1.appendChild(input1);

        const select = document.createElement('select');
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        const option3 = document.createElement('option');
        option1.value = 'option1';
        option1.textContent = 'Giới tính';
        option2.value = 'option2';
        option2.textContent = 'Nam';
        option3.value = 'option3';
        option3.textContent = 'Nữ';
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        div2.appendChild(select);

        const input3 = document.createElement('input');
        input3.setAttribute('type', 'date');
        div3.appendChild(input3);

        form.appendChild(div1);
        form.appendChild(div2);
        form.appendChild(div3);

        // Thêm form mới tạo vào div chứa form

        formContainer.appendChild(form);
    });
}

// XÓA THÔNG TIN KHÁCH HÀNG CÓ VÉ
// // XÓA DÒNG NHẬP THÔNG TIN KHÁCH HÀNG
var subButton = document.getElementsByClassName('sub_icon');
for (let j = 0; j < subButton.length; j++) {
    subButton[j].addEventListener('click', function () {
        let index = j + 1;
        elem = document.getElementById('form-container-' + index);
        var deleted = elem.childNodes[0];
        elem.removeChild(deleted);
    });
}
