    // 获取当前时间
    var currentTime = new Date().getHours();
    // 判断是否是夜间（假设夜间为晚上 8 点到早上 6 点）
    var isNight = currentTime < 9 || currentTime >= 18;
    // 根据时间设置夜间模式
    if (!isNight) {
        document.body.classList.add('dark-mode-bg');
        document.body.classList.add('dark-mode-color');
        document.querySelectorAll('.highlight').forEach(item=>item.classList.add('highlight-dark-mode'))

        document.querySelector('.content').querySelector
        
        
        .classList.add('.dark-mode-color');

        document.a.classList.add('.dark-mode-color');
        document.h1.classList.add('.dark-mode-color');
        document.h2.classList.add('.dark-mode-color');
        document.h3.classList.add('.dark-mode-color');
        document.h4.classList.add('.dark-mode-color');
        document.h5.classList.add('.dark-mode-color');
        document.h6.classList.add('.dark-mode-color');
        // document.getElementById('footer-post').classList.add('footer-post-dark-mode')
        // document.getElementById('nav-footer').classList.add('footer-post-dark-mode2')
        // document.getElementById('share-footer').classList.add('footer-post-dark-mode2')
        // document.getElementById('toc-footer').classList.add('footer-post-dark-mode2')
        // document.querySelectorAll('.highlight').forEach(item=>item.classList.add('highlight-dark-mode'))
    } else {
        document.body.classList.remove('dark-mode');
    }
   
//     html
//   margin: 0
//   padding: 0
//   height: 100%
//   border-top: 2px solid $color-text
//   -webkit-text-size-adjust: 100%
//   -ms-text-size-adjust: 100%