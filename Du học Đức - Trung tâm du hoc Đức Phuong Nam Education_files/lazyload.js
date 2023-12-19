ezLazyImageConfig = {
    top: 400,
    left: 200,
}
ezLazyImage = function () {
    var app = this;
    var config = ezLazyImageConfig;
    var resizeBoxTO;
    var defaultImage = window.SASS_CDN + '/cdn/images/:width/:height/default.jpg'
    var errors = [];

    this.count = 0;

    this.createDefaultImage = function (w, h) {
        return defaultImage.replace(':width', w).replace(':height', h)
    }
    this.getOffset = function (el) {
        var w = window, e = { top: 0, left: 0 }, f = el.ownerDocument, de = f.documentElement;
        typeof el.getBoundingClientRect != undefined && (e = el.getBoundingClientRect());

        return { top: e.top + w.pageYOffset - de.clientTop, left: e.left + w.pageXOffset - de.clientLeft };
    }
    this.run = function () {
        var imgs = Array.prototype.filter.call(window.ezLazyImageList, function (item) {
            return item.getClientRects().length > 0 && !item.classList.contains('lazy-loaded') && !item.classList.contains('lazy-loading')
        });
        if (imgs.length) {
            var scrollTop = window.scrollY || window.pageYOffset;
            var allowTop = scrollTop - config.top;
            var allowBottom = scrollTop + window.innerHeight + config.top;
            for (var i = 0; i < imgs.length; i++) {
                var img = imgs[i];
                var offset = app.getOffset(img);
                app.doNew(img, offset, allowTop, allowBottom);
            }
        }
    }
    this.changeDefaultImage = function (img) {
        var src = app.getSrc(img, window.innerWidth), matchs = src.match(/\/([0-9]{2,4})x([0-9]{2,4})\//)
        if (matchs && matchs[1] && matchs[2]) {
            var new_src = app.createDefaultImage(matchs[1], matchs[2])
            if (img.default_image !== new_src) {
                img.src = img.default_image = new_src
                return true
            }
        }
        return false
    }
    this.doNew = function (img, offset, allowTop, allowBottom) {
        var src = app.getSrc(img, window.innerWidth);
        if (errors.indexOf(src) === -1) {
            if ((offset.top < (window.innerHeight + config.top) || (allowTop <= (offset.top + img.height) && offset.top <= allowBottom))) {
                tmp_image = new Image();
                tmp_image.main = img;
                img.classList.add('lazy-loading');
                tmp_image.onload = function (o) {
                    o.target.main.setAttribute('src', o.target.src);
                    o.target.main.classList.remove('lazy-loading');
                    o.target.main.classList.add('lazy-loaded');
                    app.count++;
                }
                tmp_image.onerror = function (o) {
                    o.target.main.classList.remove('lazy-loading');
                    o.target.main.classList.add('lazy-error');
                    var matchs = this.src.match(/\/(\d{1,4})x(\d{1,4})\//)
                    if (matchs && matchs[1] && matchs[2]) {
                        o.target.main.setAttribute('src', app.createDefaultImage(matchs[1], matchs[2]))
                    }
                    errors.push(this.src)
                }
                tmp_image.src = src;
            }
        }
    }
    this.getSrc = function (img, width) {
        if (!img.lazydata) {
            img.lazydata = {}
        }
        if (img.lazydata[width] === undefined) {
            var srcset = img.sourceset_json
            if (srcset) {
                if (width < 370) {
                    img.lazydata[width] = srcset[370] || srcset[480] || srcset[570] || srcset[768] || srcset[992] || srcset[1200] || srcset['_'];
                } else if (width < 480) {
                    img.lazydata[width] = srcset[480] || srcset[570] || srcset[768] || srcset[992] || srcset[1200] || srcset['_'];
                } else if (width < 570) {
                    img.lazydata[width] = srcset[570] || srcset[768] || srcset[992] || srcset[1200] || srcset['_'];
                } else if (width < 768) {
                    img.lazydata[width] = srcset[768] || srcset[992] || srcset[1200] || srcset['_'];
                } else if (width < 992) {
                    img.lazydata[width] = srcset[992] || srcset[1200] || srcset['_'];
                } else if (width < 1200) {
                    img.lazydata[width] = srcset[1200] || srcset['_'];
                } else if (srcset['_']) {
                    img.lazydata[width] = srcset['_'];
                } else {
                    img.lazydata[width] = img.source || '';
                }
            } else {
                img.lazydata[width] = img.source || '';
            }
        }
        return img.lazydata[width]
    }
    this.getScreenWidth = function () {
        var width = window.innerWidth;
        if (width >= 1200) {
            return 1201;
        }
        if (width < 370) {
            return 370;
        }
        if (width < 480) {
            return 480;
        }
        if (width < 570) {
            return 570;
        }
        if (width < 768) {
            return 768;
        }
        if (width < 992) {
            return 992;
        }
        if (width < 1200) {
            return 1200;
        }
    }
    this.init = function () {
        var events = ['touchstart', 'touchend', 'mousedown', 'mouseup'];
        events.forEach(function (eventName) {
            window.addEventListener(eventName, function () {
                app.run();
            });
        });
        window.addEventListener('scroll', function () {
            app.run();
        });
        window.addEventListener('resize', function () {
            clearTimeout(resizeBoxTO);
            resizeBoxTO = setTimeout(function () {
                var imgs = document.querySelectorAll('img.lazy')
                for (var i = 0; i < imgs.length; i++) {
                    var img = imgs[i], result = app.changeDefaultImage(img)
                    if (result && img.classList.contains('lazy-loaded')) {
                        img.classList.remove('lazy-loaded')
                    }
                }
                app.run()
            }, 500)
        });
    }
    this.closest = function (o, class_name) {
        var p = o, d = o.ownerDocument;
        while (p != d) {
            if (p.classList.contains(class_name)) {
                return p;
            }
            p = p.parentNode;
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (!window.ezLazyImageObject) {
        var imgs = window.ezLazyImageList = document.querySelectorAll('img.lazyload');
        var app = window.ezLazyImageObject = new ezLazyImage();
        window.ezFirstImage = imgs[0];
        for (var i = 0; i < imgs.length; i++) {
            var img = imgs[i], json = null;
            img.sourceset = img.getAttribute('data-srcset');
            img.source = img.getAttribute('data-src');
            try {
                json = JSON.parse(img.sourceset);
            } catch (e) {
            }
            img.sourceset_json = json;
            img.removeAttribute('data-srcset');
            img.removeAttribute('data-src');
            var src = app.getSrc(img, window.innerWidth),
                matchs = src.match(/\/([0-9]{2,4})x([0-9]{2,4})\//);
            if (matchs && matchs[1] && matchs[2]) {
                img.src = img.default_image = app.createDefaultImage(matchs[1], matchs[2]);
            } else {
                if (json && json.df) {
                    if (json.df.w && json.df.h) {
                        img.src = img.default_image = app.createDefaultImage(json.df.w, json.df.h);
                    }
                }
            }
        }
        app.init();
        setTimeout(function () {
            app.run();
        }, 1000)
    }
})
