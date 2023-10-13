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
        if (p3) {
            return str.replace(p3, `${p3} class="lazyload" srcset="${loadingImage}" data-srcset="${p2}"`);
        } else {
            return str.replace(">", ` class="lazyload" srcset="${loadingImage}" data-srcset="${p2}">`);
        }
    });
}