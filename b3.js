const readline = require('readline-sync')

function nhapTenMay() {
    let ten 
    do {
        ten = readline.question('Nhap ten may: ')
        if (ten.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (ten.length == 0)
    return ten
}
function nhapNamSanXuat() {
    let namSX
    namSX = Number(readline.question('Nhap nam san xuat: '))
    return namSX
}
function tuoi() {
    let tuoi 
    tuoi = 2023 - nhapNamSanXuat()
    console.log('So tuoi cua may ban la:',tuoi)
    return tuoi
}

function ram() {
    let ram
    ram = Number(readline.question('Nhap RAM cua may: '))
    return ram
} 
function hdd() {
    let hdd
    hdd = Number(readline.question('Nhap HDD cua may: '))
    return hdd
}
function kichThuocManHinh() {
    const kichThuocManHinh = {
        chieuNgang : Number(readline.question('Nhap chieu ngang: ')),
        chieuDoc : Number(readline.question('Nhap chieu doc: '))
    }
}
function cauHinh() {
    ram()
    hdd()
    kichThuocManHinh()
    return cauHinh()
}
function diemCuaMay() {
    let numbr = kichThuocManHinh()
    let diem = 0;
    diem = (3*ram() + 2*hdd())/5
    console.log('Diem cua may ban la: ',diem) 
}
function nhapThongTinMay() {
    nhapTenMay()
    nhapNamSanXuat()
    cauHinh()
}
function main() {
    nhapThongTinMay()
    tuoi()
    diemCuaMay()
}
main()