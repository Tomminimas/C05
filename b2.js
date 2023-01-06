const readline = require('readline-sync')

function nhapTenDangNhap() {
    let ten 
    do {
        ten = readline.question('Nhap ten: ')
        if (ten.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (ten.length == 0)
    return ten
}
function nhapMatKhau() {
    let matKhau
    do {
        matKhau = readline.question('Nhap mat khau: ')
        if (matKhau.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (matKhau.length == 0)
    return matKhau
}
function nhapEmail() {
    let email
    do {
        email = readline.question('Nhap email: ')
        if (email.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (email.length == 0)
    return email
}
function nhapSDT() {
    let sdt
    do {
        sdt = readline.question('Nhap so dien thoai: ')
        if (sdt.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (sdt.length == 0)
    return sdt
}
const user = {
    ten : '',
    matKhau: '',
    email: '', 
    sdt: '',
}
function nhapThongTin(user) {
    user.ten = nhapTenDangNhap()
    user.matKhau = nhapMatKhau()
    user.email = nhapEmail()
    user.sdt = nhapSDT()
}
function demNutSDT(numbr) {
    let tong = 0;
    for(let i = 0;i < numbr.length;++i)
    {
        tong +=Number(numbr[i]);
    }
    console.log('Tong so nut của SDT ban la: ',tong)
}
function main() {
    nhapThongTin(user)
    demNutSDT()
}
main()