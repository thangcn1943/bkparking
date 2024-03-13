// pop xóa cuối
// shift xóa đầu
// splice cắt splice(vị trí đặt trỏ, xóa bao nhiêu phần tử từ vị trí trỏ)
// splice(1,1, 'Dart') xóa ở vị trí thứ 1 và thêm Dart vào thay
// concat ghép mảng
// slice cắt giống python slice(a,b) a: vị trí đặt trỏ, b: vị trí kết thúc
// alert("dit me link dc")


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const options = $$('.option-item')
const searchs = $$('.search-form')
options.forEach((option, index) => {
    const search = searchs[index]
    option.onclick = function () {
        $('.option-item.active').classList.remove('active')
        $('.search-form.active').classList.remove('active')

        this.classList.add('active')
        search.classList.add('active')
    }
});