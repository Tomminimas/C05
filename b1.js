const readline = require('readline-sync')

function nhapChieuDai() {
    chieuDai = Number(readline.question('Nhap chieu dai: '))
    if (chieuDai <= 0) {
        console.log('Vui long nhap lai chieu dai');
    }
    return chieuDai
}
function nhapChieuRong() {
    chieuRong = Number(readline.question('Nhap chieu dai: '))
    if (chieuRong <= 0) {
        console.log('Vui long nhap lai chieu rong');
    }
    return chieuRong
}
const hinhChuNhat = {
    chieuDai : 0,
    chieuRong : 0,
}
function nhapThongTin(hinhChuNhat) {
    hinhChuNhat.chieuDai = nhapChieuDai()
    hinhChuNhat.chieuRong = nhapChieuRong()
}
function main() {
    nhapThongTin(hinhChuNhat)
    s = hinhChuNhat.chieuDai * hinhChuNhat.chieuRong
    console.log('Dien tich HCN la: ',s)
}
main()