

// 页面加载调用
window.addEventListener('load',function(){
    // 调用JS的初始化函数初始化swiper
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项 
    autoplay: {
        delay: 3000, //间隔时间 
        stopOnLastSlide: false, //在最后一张是否要停止  如果开启loop模式无效
        disableOnInteraction: false, // 是否要当(交互的时候)滑动的时候禁用自动轮播图
    },
  

    pagination: {
        el: '.swiper-pagination',
    },

})
})  