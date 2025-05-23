'use strict'

if (!hexo.config.lazyload || !hexo.config.lazyload.enable) {
    return;
}
hexo.extend.filter.register('after_render:html',  lazyProcess);

function lazyProcess(htmlContent)  {
    let loadingImage = this.config.lazyload.loadingImg || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAABlBMVEXMzMyWlpYU2uzLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==';
    return htmlContent.replace(/<img(\s*?)src="(.*?)"(.*?)>/gi, (str, p1, p2, p3)  =>  {
        if (/data-src/gi.test(str)) {
            return str;
        }
          // 检查是否已经存在<a>标签
        if (/<a\b[^>]*>/gi.test(str)) {
            return str;
        }
        let imgTag;
        if (p3) {
            imgTag= str.replace(p3, `${p3} class="lazyload" srcset="${loadingImage}" data-srcset="${p2}"`);
        } else {
            imgTag= str.replace(">", ` class="lazyload" srcset="${loadingImage}" data-srcset="${p2}">`);
        }

        let aTag = `<a href="${p2}" data-fancybox>`;
        return `${aTag}${imgTag}</a>`;
    });
}