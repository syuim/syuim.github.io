    // 获取当前时间
    var currentTime = new Date().getHours();
    // 判断是否是夜间（假设夜间为晚上 8 点到早上 6 点）
    var isNight = currentTime < 9 || currentTime >= 18;
    // 根据时间设置夜间模式
    if (isNight) {

        document.documentElement.style.setProperty('--color-background', '#1d1f21');
        document.documentElement.style.setProperty('--color-footer-mobile-1', '#212326');
        document.documentElement.style.setProperty('--color-footer-mobile-2', '#323539');
        document.documentElement.style.setProperty('--color-background-code', '#212326');
        document.documentElement.style.setProperty('--color-border', '#908d8d');
        document.documentElement.style.setProperty('--color-scrollbar', '#999');
        document.documentElement.style.setProperty('--color-scrollbar-dd', '#7a7a7a');
        document.documentElement.style.setProperty('--color-meta', '#908d8d');
        document.documentElement.style.setProperty('--color-meta-dd', '#747070');
        document.documentElement.style.setProperty('--color-meta-20', '#a6a4a4');
        document.documentElement.style.setProperty('--color-meta-code-20', '#b1afaf');
        document.documentElement.style.setProperty('--color-link', 'rgba(212, 128, 170, 1)');
        document.documentElement.style.setProperty('--color-text', '#c9cacc');
        document.documentElement.style.setProperty('--color-accent-3', '#cccccc');
        document.documentElement.style.setProperty('--color-accent-2', '#eeeeee');
        document.documentElement.style.setProperty('--color-accent-1', '#2bbc8a');
        document.documentElement.style.setProperty('--color-quote', '#ccffb6'); 
        document.documentElement.style.setProperty('--highlight', '\'@import "_highlight/rainbow"\'');
    } else {
        document.documentElement.style.removeProperty('--color-background')
        document.documentElement.style.removeProperty('--color-footer-mobile-1');
        document.documentElement.style.removeProperty('--color-footer-mobile-2');
        document.documentElement.style.removeProperty('--color-background-code');
        document.documentElement.style.removeProperty('--color-border');
        document.documentElement.style.removeProperty('--color-scrollbar');
        document.documentElement.style.removeProperty('--color-scrollbar-dd');
        document.documentElement.style.removeProperty('--color-meta');
        document.documentElement.style.removeProperty('--color-meta-dd');
        document.documentElement.style.removeProperty('--color-meta-20');
        document.documentElement.style.removeProperty('--color-meta-code-20');
        document.documentElement.style.removeProperty('--color-link');
        document.documentElement.style.removeProperty('--color-text');
        document.documentElement.style.removeProperty('--color-accent-3');
        document.documentElement.style.removeProperty('--color-accent-2');
        document.documentElement.style.removeProperty('--color-accent-1');
        document.documentElement.style.removeProperty('--color-quote'); 
        document.documentElement.style.removeProperty('--highlight');
    }
   
//     html
//   margin: 0
//   padding: 0
//   height: 100%
//   border-top: 2px solid var(--color-text)
//   -webkit-text-size-adjust: 100%
//   -ms-text-size-adjust: 100%