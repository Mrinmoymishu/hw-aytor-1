let crossBtn = document.querySelector('.cross-btn')
let searchBtn = document.querySelector('.search_btn')
let searchBox = document.querySelector('.search-box')



searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    // alert('shv');
    searchBox.classList.add('active_search')
})
 
searchBtn.addEventListener('click',function(e){
    e.preventDefault();
    searchBox.classList.remove('active_search')
})



$(function(){
    //*jquery start*//

    $('.bannerslider') .slick({
        arrows: false,
        dots: true,
        dotsClass: 'aytorDots container'
    })
})
