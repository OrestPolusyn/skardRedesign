var e =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  i = {},
  t = {},
  s = e.parcelRequire46ec;
null == s &&
  (((s = function (e) {
    if (e in i) return i[e].exports;
    if (e in t) {
      var s = t[e];
      delete t[e];
      var o = { id: e, exports: {} };
      return (i[e] = o), s.call(o.exports, o, o.exports), o.exports;
    }
    var n = new Error("Cannot find module '" + e + "'");
    throw ((n.code = 'MODULE_NOT_FOUND'), n);
  }).register = function (e, i) {
    t[e] = i;
  }),
  (e.parcelRequire46ec = s));
const o = 'classList',
  n = 'querySelector',
  r = (e, i) => {
    document[n](e)?.[o].add(i);
  },
  l = (e, i) => {
    document[n](e)?.[o].remove(i);
  };
let a,
  d,
  c = parseFloat(
    document.documentElement.style.getPropertyValue('--header-height')
  );
const p = (function (e, i = 1e3) {
  let t,
    s = !1;
  const o = () => {
    null == t ? (s = !1) : (e(...t), (t = null), setTimeout(o, i));
  };
  return (...n) => {
    s ? (t = n) : (e(...n), (s = !0), setTimeout(o, i));
  };
})(() => {
  (a = window.scrollY),
    r('.header', 'scroll'),
    c - 50 < a && a > d
      ? (r('.header', 'hide'), r('.header', 'scroll'))
      : d > a && l('.header', 'hide'),
    a < c && l('.header', 'scroll'),
    (d = a);
}, 250);
window.addEventListener('scroll', p), p();
const u = document.querySelector('.nav'),
  h = document.querySelector('.page');
u.addEventListener('click', function (e) {
  if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger'))
    return;
  this.classList.remove('closed'),
    h.classList.add('open'),
    this.matches('.opened') &&
      (this.classList.add('closed'),
      h.classList.remove('open'),
      setTimeout(() => {
        this.classList.remove('opened');
      }, 1500));
  this.classList.add('opened');
});
const f = new IntersectionObserver(e => {
  e.forEach(e => {
    e.intersectionRatio <= 0 ||
      (('h1' !== e.target.nodeName.toLowerCase() &&
        'h2' !== e.target.nodeName.toLowerCase()) ||
        e.target.classList.add('title-animation', e.isIntersecting),
      ('button' === e.target.nodeName.toLowerCase() ||
        ('a' === e.target.nodeName.toLowerCase() &&
          !e.target.classList.contains('partners__link'))) &&
        e.target.classList.add('btn-animation', e.isIntersecting),
      ('p' === e.target.nodeName.toLowerCase() ||
        'h3' === e.target.nodeName.toLowerCase() ||
        e.target.classList.contains('advantages__item')) &&
        e.target.classList.add('text-animation', e.isIntersecting),
      e.target.classList.contains('partners__image') &&
        e.target.classList.add('image-animation', e.isIntersecting),
      e.target.classList.contains('data__image') &&
        e.target.classList.add('icons-animation', e.isIntersecting));
  });
});
[
  document.querySelectorAll('h1,h2'),
  document.querySelectorAll(
    '.btn:not(.missions__btns .btn, .missions__list .btn, .header .btn, .modal .btn)'
  ),
  document.querySelectorAll(
    'p:not(.missions__desc > *, .parallax__title p, .advantages__item, .modal  p) '
  ),
  document.querySelectorAll('h3:not(.missions__desc > *,.modal__title)'),
  document.querySelectorAll('.data__image'),
].forEach(e => {
  e.forEach(e => {
    f.observe(e);
  });
}),
  document.querySelectorAll('.partners__link img').forEach((e, i) => {
    setInterval(() => {
      f.observe(e);
    }, 300 * i + 1);
  });
const v = [...document.querySelectorAll('.parallax')];
if (window.innerWidth <= 768) {
  window.addEventListener('scroll', function () {
    const e = window.pageYOffset,
      i = window.innerHeight;
    v.forEach(t => {
      const s = t.offsetTop,
        o = s - e - i;
      t.style.backgroundPosition =
        s > i && s
          ? 'center  ' + (0.5 * o + 'px')
          : 'center  ' + (0.5 * -e + 'px');
    });
  });
}
const k = document.querySelector('.products__slider'),
  w = document.querySelector('.products__wrapper'),
  g = [...document.querySelectorAll('.products__slide')];
let y = 0;
function m() {
  const e = w?.querySelector('.slide-active');
  g.forEach(e => {
    e?.classList.remove('slide-hide');
  }),
    setTimeout(() => {
      w.children[y].classList.add('slide-active'),
        e.classList.remove('slide-active');
    }, 600),
    e.classList.add('slide-hide');
}
k?.addEventListener('click', function (e) {
  if (!e.target.matches('.clicks__btn')) return;
  e.target.matches('.next') && ((y += 1), y === g.length && (y = 0), m());
  e.target.matches('.prev') && ((y -= 1), y <= 0 && (y = g.length - 1), m());
}),
  g[0]?.classList.add('slide-active');
var S;
(S = function (e) {
  var i,
    t = window.Slick || {};
  (i = 0),
    ((t = function (t, s) {
      var o,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(t),
        appendDots: e(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (i, t) {
          return e('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        e.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = e(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (o = e(t).data('slick') || {}),
        (n.options = e.extend({}, n.defaults, s, o)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = e.proxy(n.autoPlay, n)),
        (n.autoPlayClear = e.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = e.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = e.proxy(n.changeSlide, n)),
        (n.clickHandler = e.proxy(n.clickHandler, n)),
        (n.selectHandler = e.proxy(n.selectHandler, n)),
        (n.setPosition = e.proxy(n.setPosition, n)),
        (n.swipeHandler = e.proxy(n.swipeHandler, n)),
        (n.dragHandler = e.proxy(n.dragHandler, n)),
        (n.keyHandler = e.proxy(n.keyHandler, n)),
        (n.instanceUid = i++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }).prototype.activateADA = function () {
      this.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
    (t.prototype.addSlide = t.prototype.slickAdd =
      function (i, t, s) {
        var o = this;
        if ('boolean' == typeof t) (s = t), (t = null);
        else if (t < 0 || t >= o.slideCount) return !1;
        o.unload(),
          'number' == typeof t
            ? 0 === t && 0 === o.$slides.length
              ? e(i).appendTo(o.$slideTrack)
              : s
              ? e(i).insertBefore(o.$slides.eq(t))
              : e(i).insertAfter(o.$slides.eq(t))
            : !0 === s
            ? e(i).prependTo(o.$slideTrack)
            : e(i).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (i, t) {
            e(t).attr('data-slick-index', i);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (t.prototype.animateHeight = function () {
      var e = this;
      if (
        1 === e.options.slidesToShow &&
        !0 === e.options.adaptiveHeight &&
        !1 === e.options.vertical
      ) {
        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({ height: i }, e.options.speed);
      }
    }),
    (t.prototype.animateSlide = function (i, t) {
      var s = {},
        o = this;
      o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (i = -i),
        !1 === o.transformsEnabled
          ? !1 === o.options.vertical
            ? o.$slideTrack.animate(
                { left: i },
                o.options.speed,
                o.options.easing,
                t
              )
            : o.$slideTrack.animate(
                { top: i },
                o.options.speed,
                o.options.easing,
                t
              )
          : !1 === o.cssTransitions
          ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
            e({ animStart: o.currentLeft }).animate(
              { animStart: i },
              {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (e) {
                  (e = Math.ceil(e)),
                    !1 === o.options.vertical
                      ? ((s[o.animType] = 'translate(' + e + 'px, 0px)'),
                        o.$slideTrack.css(s))
                      : ((s[o.animType] = 'translate(0px,' + e + 'px)'),
                        o.$slideTrack.css(s));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (o.applyTransition(),
            (i = Math.ceil(i)),
            !1 === o.options.vertical
              ? (s[o.animType] = 'translate3d(' + i + 'px, 0px, 0px)')
              : (s[o.animType] = 'translate3d(0px,' + i + 'px, 0px)'),
            o.$slideTrack.css(s),
            t &&
              setTimeout(function () {
                o.disableTransition(), t.call();
              }, o.options.speed));
    }),
    (t.prototype.getNavTarget = function () {
      var i = this.options.asNavFor;
      return i && null !== i && (i = e(i).not(this.$slider)), i;
    }),
    (t.prototype.asNavFor = function (i) {
      var t = this.getNavTarget();
      null !== t &&
        'object' == typeof t &&
        t.each(function () {
          var t = e(this).slick('getSlick');
          t.unslicked || t.slideHandler(i, !0);
        });
    }),
    (t.prototype.applyTransition = function (e) {
      var i = this,
        t = {};
      !1 === i.options.fade
        ? (t[i.transitionType] =
            i.transformType + ' ' + i.options.speed + 'ms ' + i.options.cssEase)
        : (t[i.transitionType] =
            'opacity ' + i.options.speed + 'ms ' + i.options.cssEase),
        !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t);
    }),
    (t.prototype.autoPlay = function () {
      var e = this;
      e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow &&
          (e.autoPlayTimer = setInterval(
            e.autoPlayIterator,
            e.options.autoplaySpeed
          ));
    }),
    (t.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (t.prototype.autoPlayIterator = function () {
      var e = this,
        i = e.currentSlide + e.options.slidesToScroll;
      e.paused ||
        e.interrupted ||
        e.focussed ||
        (!1 === e.options.infinite &&
          (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
            ? (e.direction = 0)
            : 0 === e.direction &&
              ((i = e.currentSlide - e.options.slidesToScroll),
              e.currentSlide - 1 == 0 && (e.direction = 1))),
        e.slideHandler(i));
    }),
    (t.prototype.buildArrows = function () {
      var i = this;
      !0 === i.options.arrows &&
        ((i.$prevArrow = e(i.options.prevArrow).addClass('slick-arrow')),
        (i.$nextArrow = e(i.options.nextArrow).addClass('slick-arrow')),
        i.slideCount > i.options.slidesToShow
          ? (i.$prevArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            i.$nextArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            i.htmlExpr.test(i.options.prevArrow) &&
              i.$prevArrow.prependTo(i.options.appendArrows),
            i.htmlExpr.test(i.options.nextArrow) &&
              i.$nextArrow.appendTo(i.options.appendArrows),
            !0 !== i.options.infinite &&
              i.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'))
          : i.$prevArrow
              .add(i.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
    }),
    (t.prototype.buildDots = function () {
      var i,
        t,
        s = this;
      if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
        for (
          s.$slider.addClass('slick-dotted'),
            t = e('<ul />').addClass(s.options.dotsClass),
            i = 0;
          i <= s.getDotCount();
          i += 1
        )
          t.append(e('<li />').append(s.options.customPaging.call(this, s, i)));
        (s.$dots = t.appendTo(s.options.appendDots)),
          s.$dots.find('li').first().addClass('slick-active');
      }
    }),
    (t.prototype.buildOut = function () {
      var i = this;
      (i.$slides = i.$slider
        .children(i.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide')),
        (i.slideCount = i.$slides.length),
        i.$slides.each(function (i, t) {
          e(t)
            .attr('data-slick-index', i)
            .data('originalStyling', e(t).attr('style') || '');
        }),
        i.$slider.addClass('slick-slider'),
        (i.$slideTrack =
          0 === i.slideCount
            ? e('<div class="slick-track"/>').appendTo(i.$slider)
            : i.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        i.$slideTrack.css('opacity', 0),
        (!0 !== i.options.centerMode && !0 !== i.options.swipeToSlide) ||
          (i.options.slidesToScroll = 1),
        e('img[data-lazy]', i.$slider).not('[src]').addClass('slick-loading'),
        i.setupInfinite(),
        i.buildArrows(),
        i.buildDots(),
        i.updateDots(),
        i.setSlideClasses(
          'number' == typeof i.currentSlide ? i.currentSlide : 0
        ),
        !0 === i.options.draggable && i.$list.addClass('draggable');
    }),
    (t.prototype.buildRows = function () {
      var e,
        i,
        t,
        s,
        o,
        n,
        r,
        l = this;
      if (
        ((s = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            o = Math.ceil(n.length / r),
            e = 0;
          e < o;
          e++
        ) {
          var a = document.createElement('div');
          for (i = 0; i < l.options.rows; i++) {
            var d = document.createElement('div');
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = e * r + (i * l.options.slidesPerRow + t);
              n.get(c) && d.appendChild(n.get(c));
            }
            a.appendChild(d);
          }
          s.appendChild(a);
        }
        l.$slider.empty().append(s),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + '%',
              display: 'inline-block',
            });
      }
    }),
    (t.prototype.checkResponsive = function (i, t) {
      var s,
        o,
        n,
        r = this,
        l = !1,
        a = r.$slider.width(),
        d = window.innerWidth || e(window).width();
      if (
        ('window' === r.respondTo
          ? (n = d)
          : 'slider' === r.respondTo
          ? (n = a)
          : 'min' === r.respondTo && (n = Math.min(d, a)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        for (s in ((o = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(s) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[s] && (o = r.breakpoints[s])
              : n > r.breakpoints[s] && (o = r.breakpoints[s]));
        null !== o
          ? null !== r.activeBreakpoint
            ? (o !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = o),
              'unslick' === r.breakpointSettings[o]
                ? r.unslick(o)
                : ((r.options = e.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[o]
                  )),
                  !0 === i && (r.currentSlide = r.options.initialSlide),
                  r.refresh(i)),
              (l = o))
            : ((r.activeBreakpoint = o),
              'unslick' === r.breakpointSettings[o]
                ? r.unslick(o)
                : ((r.options = e.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[o]
                  )),
                  !0 === i && (r.currentSlide = r.options.initialSlide),
                  r.refresh(i)),
              (l = o))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === i && (r.currentSlide = r.options.initialSlide),
            r.refresh(i),
            (l = o)),
          i || !1 === l || r.$slider.trigger('breakpoint', [r, l]);
      }
    }),
    (t.prototype.changeSlide = function (i, t) {
      var s,
        o,
        n = this,
        r = e(i.currentTarget);
      switch (
        (r.is('a') && i.preventDefault(),
        r.is('li') || (r = r.closest('li')),
        (s =
          n.slideCount % n.options.slidesToScroll != 0
            ? 0
            : (n.slideCount - n.currentSlide) % n.options.slidesToScroll),
        i.data.message)
      ) {
        case 'previous':
          (o = 0 === s ? n.options.slidesToScroll : n.options.slidesToShow - s),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide - o, !1, t);
          break;
        case 'next':
          (o = 0 === s ? n.options.slidesToScroll : s),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide + o, !1, t);
          break;
        case 'index':
          var l =
            0 === i.data.index
              ? 0
              : i.data.index || r.index() * n.options.slidesToScroll;
          n.slideHandler(n.checkNavigable(l), !1, t),
            r.children().trigger('focus');
          break;
        default:
          return;
      }
    }),
    (t.prototype.checkNavigable = function (e) {
      var i, t;
      if (((t = 0), e > (i = this.getNavigableIndexes())[i.length - 1]))
        e = i[i.length - 1];
      else
        for (var s in i) {
          if (e < i[s]) {
            e = t;
            break;
          }
          t = i[s];
        }
      return e;
    }),
    (t.prototype.cleanUpEvents = function () {
      var i = this;
      i.options.dots &&
        null !== i.$dots &&
        (e('li', i.$dots)
          .off('click.slick', i.changeSlide)
          .off('mouseenter.slick', e.proxy(i.interrupt, i, !0))
          .off('mouseleave.slick', e.proxy(i.interrupt, i, !1)),
        !0 === i.options.accessibility &&
          i.$dots.off('keydown.slick', i.keyHandler)),
        i.$slider.off('focus.slick blur.slick'),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          (i.$prevArrow && i.$prevArrow.off('click.slick', i.changeSlide),
          i.$nextArrow && i.$nextArrow.off('click.slick', i.changeSlide),
          !0 === i.options.accessibility &&
            (i.$prevArrow && i.$prevArrow.off('keydown.slick', i.keyHandler),
            i.$nextArrow && i.$nextArrow.off('keydown.slick', i.keyHandler))),
        i.$list.off('touchstart.slick mousedown.slick', i.swipeHandler),
        i.$list.off('touchmove.slick mousemove.slick', i.swipeHandler),
        i.$list.off('touchend.slick mouseup.slick', i.swipeHandler),
        i.$list.off('touchcancel.slick mouseleave.slick', i.swipeHandler),
        i.$list.off('click.slick', i.clickHandler),
        e(document).off(i.visibilityChange, i.visibility),
        i.cleanUpSlideEvents(),
        !0 === i.options.accessibility &&
          i.$list.off('keydown.slick', i.keyHandler),
        !0 === i.options.focusOnSelect &&
          e(i.$slideTrack).children().off('click.slick', i.selectHandler),
        e(window).off(
          'orientationchange.slick.slick-' + i.instanceUid,
          i.orientationChange
        ),
        e(window).off('resize.slick.slick-' + i.instanceUid, i.resize),
        e('[draggable!=true]', i.$slideTrack).off(
          'dragstart',
          i.preventDefault
        ),
        e(window).off('load.slick.slick-' + i.instanceUid, i.setPosition);
    }),
    (t.prototype.cleanUpSlideEvents = function () {
      var i = this;
      i.$list.off('mouseenter.slick', e.proxy(i.interrupt, i, !0)),
        i.$list.off('mouseleave.slick', e.proxy(i.interrupt, i, !1));
    }),
    (t.prototype.cleanUpRows = function () {
      var e,
        i = this;
      i.options.rows > 0 &&
        ((e = i.$slides.children().children()).removeAttr('style'),
        i.$slider.empty().append(e));
    }),
    (t.prototype.clickHandler = function (e) {
      !1 === this.shouldClick &&
        (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }),
    (t.prototype.destroy = function (i) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        e('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              'slick-slide slick-active slick-center slick-visible slick-current'
            )
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
              e(this).attr('style', e(this).data('originalStyling'));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        i || t.$slider.trigger('destroy', [t]);
    }),
    (t.prototype.disableTransition = function (e) {
      var i = this,
        t = {};
      (t[i.transitionType] = ''),
        !1 === i.options.fade ? i.$slideTrack.css(t) : i.$slides.eq(e).css(t);
    }),
    (t.prototype.fadeSlide = function (e, i) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(e).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(e)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, i))
        : (t.applyTransition(e),
          t.$slides.eq(e).css({ opacity: 1, zIndex: t.options.zIndex }),
          i &&
            setTimeout(function () {
              t.disableTransition(e), i.call();
            }, t.options.speed));
    }),
    (t.prototype.fadeSlideOut = function (e) {
      var i = this;
      !1 === i.cssTransitions
        ? i.$slides
            .eq(e)
            .animate(
              { opacity: 0, zIndex: i.options.zIndex - 2 },
              i.options.speed,
              i.options.easing
            )
        : (i.applyTransition(e),
          i.$slides.eq(e).css({ opacity: 0, zIndex: i.options.zIndex - 2 }));
    }),
    (t.prototype.filterSlides = t.prototype.slickFilter =
      function (e) {
        var i = this;
        null !== e &&
          ((i.$slidesCache = i.$slides),
          i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.filter(e).appendTo(i.$slideTrack),
          i.reinit());
      }),
    (t.prototype.focusHandler = function () {
      var i = this;
      i.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick blur.slick', '*', function (t) {
          t.stopImmediatePropagation();
          var s = e(this);
          setTimeout(function () {
            i.options.pauseOnFocus &&
              ((i.focussed = s.is(':focus')), i.autoPlay());
          }, 0);
        });
    }),
    (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (t.prototype.getDotCount = function () {
      var e = this,
        i = 0,
        t = 0,
        s = 0;
      if (!0 === e.options.infinite)
        if (e.slideCount <= e.options.slidesToShow) ++s;
        else
          for (; i < e.slideCount; )
            ++s,
              (i = t + e.options.slidesToScroll),
              (t +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
      else if (!0 === e.options.centerMode) s = e.slideCount;
      else if (e.options.asNavFor)
        for (; i < e.slideCount; )
          ++s,
            (i = t + e.options.slidesToScroll),
            (t +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
      else
        s =
          1 +
          Math.ceil(
            (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
          );
      return s - 1;
    }),
    (t.prototype.getLeft = function (e) {
      var i,
        t,
        s,
        o,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (o = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (o = -1.5)
                  : 1 === n.options.slidesToShow && (o = -2)),
              (r = t * n.options.slidesToShow * o)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              e + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (e > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (e - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (e - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : e + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (e + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (e + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (i =
          !1 === n.options.vertical
            ? e * n.slideWidth * -1 + n.slideOffset
            : e * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((s =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children('.slick-slide').eq(e)
              : n.$slideTrack
                  .children('.slick-slide')
                  .eq(e + n.options.slidesToShow)),
          (i =
            !0 === n.options.rtl
              ? s[0]
                ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                : 0
              : s[0]
              ? -1 * s[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((s =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children('.slick-slide').eq(e)
                : n.$slideTrack
                    .children('.slick-slide')
                    .eq(e + n.options.slidesToShow + 1)),
            (i =
              !0 === n.options.rtl
                ? s[0]
                  ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                  : 0
                : s[0]
                ? -1 * s[0].offsetLeft
                : 0),
            (i += (n.$list.width() - s.outerWidth()) / 2))),
        i
      );
    }),
    (t.prototype.getOption = t.prototype.slickGetOption =
      function (e) {
        return this.options[e];
      }),
    (t.prototype.getNavigableIndexes = function () {
      var e,
        i = this,
        t = 0,
        s = 0,
        o = [];
      for (
        !1 === i.options.infinite
          ? (e = i.slideCount)
          : ((t = -1 * i.options.slidesToScroll),
            (s = -1 * i.options.slidesToScroll),
            (e = 2 * i.slideCount));
        t < e;

      )
        o.push(t),
          (t = s + i.options.slidesToScroll),
          (s +=
            i.options.slidesToScroll <= i.options.slidesToShow
              ? i.options.slidesToScroll
              : i.options.slidesToShow);
      return o;
    }),
    (t.prototype.getSlick = function () {
      return this;
    }),
    (t.prototype.getSlideCount = function () {
      var i,
        t,
        s = this;
      return (
        (t =
          !0 === s.options.centerMode
            ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
            : 0),
        !0 === s.options.swipeToSlide
          ? (s.$slideTrack.find('.slick-slide').each(function (o, n) {
              if (n.offsetLeft - t + e(n).outerWidth() / 2 > -1 * s.swipeLeft)
                return (i = n), !1;
            }),
            Math.abs(e(i).attr('data-slick-index') - s.currentSlide) || 1)
          : s.options.slidesToScroll
      );
    }),
    (t.prototype.goTo = t.prototype.slickGoTo =
      function (e, i) {
        this.changeSlide({ data: { message: 'index', index: parseInt(e) } }, i);
      }),
    (t.prototype.init = function (i) {
      var t = this;
      e(t.$slider).hasClass('slick-initialized') ||
        (e(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        i && t.$slider.trigger('init', [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (t.prototype.initADA = function () {
      var i = this,
        t = Math.ceil(i.slideCount / i.options.slidesToShow),
        s = i.getNavigableIndexes().filter(function (e) {
          return e >= 0 && e < i.slideCount;
        });
      i.$slides
        .add(i.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== i.$dots &&
          (i.$slides
            .not(i.$slideTrack.find('.slick-cloned'))
            .each(function (t) {
              var o = s.indexOf(t);
              if (
                (e(this).attr({
                  role: 'tabpanel',
                  id: 'slick-slide' + i.instanceUid + t,
                  tabindex: -1,
                }),
                -1 !== o)
              ) {
                var n = 'slick-slide-control' + i.instanceUid + o;
                e('#' + n).length && e(this).attr({ 'aria-describedby': n });
              }
            }),
          i.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function (o) {
              var n = s[o];
              e(this).attr({ role: 'presentation' }),
                e(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + i.instanceUid + o,
                    'aria-controls': 'slick-slide' + i.instanceUid + n,
                    'aria-label': o + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  });
            })
            .eq(i.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end());
      for (var o = i.currentSlide, n = o + i.options.slidesToShow; o < n; o++)
        i.options.focusOnChange
          ? i.$slides.eq(o).attr({ tabindex: '0' })
          : i.$slides.eq(o).removeAttr('tabindex');
      i.activateADA();
    }),
    (t.prototype.initArrowEvents = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow
          .off('click.slick')
          .on('click.slick', { message: 'previous' }, e.changeSlide),
        e.$nextArrow
          .off('click.slick')
          .on('click.slick', { message: 'next' }, e.changeSlide),
        !0 === e.options.accessibility &&
          (e.$prevArrow.on('keydown.slick', e.keyHandler),
          e.$nextArrow.on('keydown.slick', e.keyHandler)));
    }),
    (t.prototype.initDotEvents = function () {
      var i = this;
      !0 === i.options.dots &&
        i.slideCount > i.options.slidesToShow &&
        (e('li', i.$dots).on(
          'click.slick',
          { message: 'index' },
          i.changeSlide
        ),
        !0 === i.options.accessibility &&
          i.$dots.on('keydown.slick', i.keyHandler)),
        !0 === i.options.dots &&
          !0 === i.options.pauseOnDotsHover &&
          i.slideCount > i.options.slidesToShow &&
          e('li', i.$dots)
            .on('mouseenter.slick', e.proxy(i.interrupt, i, !0))
            .on('mouseleave.slick', e.proxy(i.interrupt, i, !1));
    }),
    (t.prototype.initSlideEvents = function () {
      var i = this;
      i.options.pauseOnHover &&
        (i.$list.on('mouseenter.slick', e.proxy(i.interrupt, i, !0)),
        i.$list.on('mouseleave.slick', e.proxy(i.interrupt, i, !1)));
    }),
    (t.prototype.initializeEvents = function () {
      var i = this;
      i.initArrowEvents(),
        i.initDotEvents(),
        i.initSlideEvents(),
        i.$list.on(
          'touchstart.slick mousedown.slick',
          { action: 'start' },
          i.swipeHandler
        ),
        i.$list.on(
          'touchmove.slick mousemove.slick',
          { action: 'move' },
          i.swipeHandler
        ),
        i.$list.on(
          'touchend.slick mouseup.slick',
          { action: 'end' },
          i.swipeHandler
        ),
        i.$list.on(
          'touchcancel.slick mouseleave.slick',
          { action: 'end' },
          i.swipeHandler
        ),
        i.$list.on('click.slick', i.clickHandler),
        e(document).on(i.visibilityChange, e.proxy(i.visibility, i)),
        !0 === i.options.accessibility &&
          i.$list.on('keydown.slick', i.keyHandler),
        !0 === i.options.focusOnSelect &&
          e(i.$slideTrack).children().on('click.slick', i.selectHandler),
        e(window).on(
          'orientationchange.slick.slick-' + i.instanceUid,
          e.proxy(i.orientationChange, i)
        ),
        e(window).on(
          'resize.slick.slick-' + i.instanceUid,
          e.proxy(i.resize, i)
        ),
        e('[draggable!=true]', i.$slideTrack).on('dragstart', i.preventDefault),
        e(window).on('load.slick.slick-' + i.instanceUid, i.setPosition),
        e(i.setPosition);
    }),
    (t.prototype.initUI = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.show(), e.$nextArrow.show()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.show();
    }),
    (t.prototype.keyHandler = function (e) {
      var i = this;
      e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === e.keyCode && !0 === i.options.accessibility
          ? i.changeSlide({
              data: { message: !0 === i.options.rtl ? 'next' : 'previous' },
            })
          : 39 === e.keyCode &&
            !0 === i.options.accessibility &&
            i.changeSlide({
              data: { message: !0 === i.options.rtl ? 'previous' : 'next' },
            }));
    }),
    (t.prototype.lazyLoad = function () {
      var i,
        t,
        s,
        o = this;
      function n(i) {
        e('img[data-lazy]', i).each(function () {
          var i = e(this),
            t = e(this).attr('data-lazy'),
            s = e(this).attr('data-srcset'),
            n = e(this).attr('data-sizes') || o.$slider.attr('data-sizes'),
            r = document.createElement('img');
          (r.onload = function () {
            i.animate({ opacity: 0 }, 100, function () {
              s && (i.attr('srcset', s), n && i.attr('sizes', n)),
                i.attr('src', t).animate({ opacity: 1 }, 200, function () {
                  i.removeAttr('data-lazy data-srcset data-sizes').removeClass(
                    'slick-loading'
                  );
                }),
                o.$slider.trigger('lazyLoaded', [o, i, t]);
            });
          }),
            (r.onerror = function () {
              i
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                o.$slider.trigger('lazyLoadError', [o, i, t]);
            }),
            (r.src = t);
        });
      }
      if (
        (!0 === o.options.centerMode
          ? !0 === o.options.infinite
            ? (s =
                (t = o.currentSlide + (o.options.slidesToShow / 2 + 1)) +
                o.options.slidesToShow +
                2)
            : ((t = Math.max(
                0,
                o.currentSlide - (o.options.slidesToShow / 2 + 1)
              )),
              (s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
          : ((t = o.options.infinite
              ? o.options.slidesToShow + o.currentSlide
              : o.currentSlide),
            (s = Math.ceil(t + o.options.slidesToShow)),
            !0 === o.options.fade && (t > 0 && t--, s <= o.slideCount && s++)),
        (i = o.$slider.find('.slick-slide').slice(t, s)),
        'anticipated' === o.options.lazyLoad)
      )
        for (
          var r = t - 1, l = s, a = o.$slider.find('.slick-slide'), d = 0;
          d < o.options.slidesToScroll;
          d++
        )
          r < 0 && (r = o.slideCount - 1),
            (i = (i = i.add(a.eq(r))).add(a.eq(l))),
            r--,
            l++;
      n(i),
        o.slideCount <= o.options.slidesToShow
          ? n(o.$slider.find('.slick-slide'))
          : o.currentSlide >= o.slideCount - o.options.slidesToShow
          ? n(o.$slider.find('.slick-cloned').slice(0, o.options.slidesToShow))
          : 0 === o.currentSlide &&
            n(
              o.$slider.find('.slick-cloned').slice(-1 * o.options.slidesToShow)
            );
    }),
    (t.prototype.loadSlider = function () {
      var e = this;
      e.setPosition(),
        e.$slideTrack.css({ opacity: 1 }),
        e.$slider.removeClass('slick-loading'),
        e.initUI(),
        'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
    }),
    (t.prototype.next = t.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: 'next' } });
      }),
    (t.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (t.prototype.pause = t.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (t.prototype.play = t.prototype.slickPlay =
      function () {
        var e = this;
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1);
      }),
    (t.prototype.postSlide = function (i) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger('afterChange', [t, i]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            e(t.$slides.get(t.currentSlide)).attr('tabindex', 0).focus()));
    }),
    (t.prototype.prev = t.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: 'previous' } });
      }),
    (t.prototype.preventDefault = function (e) {
      e.preventDefault();
    }),
    (t.prototype.progressiveLazyLoad = function (i) {
      i = i || 1;
      var t,
        s,
        o,
        n,
        r,
        l = this,
        a = e('img[data-lazy]', l.$slider);
      a.length
        ? ((t = a.first()),
          (s = t.attr('data-lazy')),
          (o = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          ((r = document.createElement('img')).onload = function () {
            o && (t.attr('srcset', o), n && t.attr('sizes', n)),
              t
                .attr('src', s)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, s]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            i < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(i + 1);
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, s]),
                l.progressiveLazyLoad());
          }),
          (r.src = s))
        : l.$slider.trigger('allImagesLoaded', [l]);
    }),
    (t.prototype.refresh = function (i) {
      var t,
        s,
        o = this;
      (s = o.slideCount - o.options.slidesToShow),
        !o.options.infinite && o.currentSlide > s && (o.currentSlide = s),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        (t = o.currentSlide),
        o.destroy(!0),
        e.extend(o, o.initials, { currentSlide: t }),
        o.init(),
        i || o.changeSlide({ data: { message: 'index', index: t } }, !1);
    }),
    (t.prototype.registerBreakpoints = function () {
      var i,
        t,
        s,
        o = this,
        n = o.options.responsive || null;
      if ('array' === e.type(n) && n.length) {
        for (i in ((o.respondTo = o.options.respondTo || 'window'), n))
          if (((s = o.breakpoints.length - 1), n.hasOwnProperty(i))) {
            for (t = n[i].breakpoint; s >= 0; )
              o.breakpoints[s] &&
                o.breakpoints[s] === t &&
                o.breakpoints.splice(s, 1),
                s--;
            o.breakpoints.push(t), (o.breakpointSettings[t] = n[i].settings);
          }
        o.breakpoints.sort(function (e, i) {
          return o.options.mobileFirst ? e - i : i - e;
        });
      }
    }),
    (t.prototype.reinit = function () {
      var i = this;
      (i.$slides = i.$slideTrack
        .children(i.options.slide)
        .addClass('slick-slide')),
        (i.slideCount = i.$slides.length),
        i.currentSlide >= i.slideCount &&
          0 !== i.currentSlide &&
          (i.currentSlide = i.currentSlide - i.options.slidesToScroll),
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
        i.registerBreakpoints(),
        i.setProps(),
        i.setupInfinite(),
        i.buildArrows(),
        i.updateArrows(),
        i.initArrowEvents(),
        i.buildDots(),
        i.updateDots(),
        i.initDotEvents(),
        i.cleanUpSlideEvents(),
        i.initSlideEvents(),
        i.checkResponsive(!1, !0),
        !0 === i.options.focusOnSelect &&
          e(i.$slideTrack).children().on('click.slick', i.selectHandler),
        i.setSlideClasses(
          'number' == typeof i.currentSlide ? i.currentSlide : 0
        ),
        i.setPosition(),
        i.focusHandler(),
        (i.paused = !i.options.autoplay),
        i.autoPlay(),
        i.$slider.trigger('reInit', [i]);
    }),
    (t.prototype.resize = function () {
      var i = this;
      e(window).width() !== i.windowWidth &&
        (clearTimeout(i.windowDelay),
        (i.windowDelay = window.setTimeout(function () {
          (i.windowWidth = e(window).width()),
            i.checkResponsive(),
            i.unslicked || i.setPosition();
        }, 50)));
    }),
    (t.prototype.removeSlide = t.prototype.slickRemove =
      function (e, i, t) {
        var s = this;
        if (
          ((e =
            'boolean' == typeof e
              ? !0 === (i = e)
                ? 0
                : s.slideCount - 1
              : !0 === i
              ? --e
              : e),
          s.slideCount < 1 || e < 0 || e > s.slideCount - 1)
        )
          return !1;
        s.unload(),
          !0 === t
            ? s.$slideTrack.children().remove()
            : s.$slideTrack.children(this.options.slide).eq(e).remove(),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (t.prototype.setCSS = function (e) {
      var i,
        t,
        s = this,
        o = {};
      !0 === s.options.rtl && (e = -e),
        (i = 'left' == s.positionProp ? Math.ceil(e) + 'px' : '0px'),
        (t = 'top' == s.positionProp ? Math.ceil(e) + 'px' : '0px'),
        (o[s.positionProp] = e),
        !1 === s.transformsEnabled
          ? s.$slideTrack.css(o)
          : ((o = {}),
            !1 === s.cssTransitions
              ? ((o[s.animType] = 'translate(' + i + ', ' + t + ')'),
                s.$slideTrack.css(o))
              : ((o[s.animType] = 'translate3d(' + i + ', ' + t + ', 0px)'),
                s.$slideTrack.css(o)));
    }),
    (t.prototype.setDimensions = function () {
      var e = this;
      !1 === e.options.vertical
        ? !0 === e.options.centerMode &&
          e.$list.css({ padding: '0px ' + e.options.centerPadding })
        : (e.$list.height(
            e.$slides.first().outerHeight(!0) * e.options.slidesToShow
          ),
          !0 === e.options.centerMode &&
            e.$list.css({ padding: e.options.centerPadding + ' 0px' })),
        (e.listWidth = e.$list.width()),
        (e.listHeight = e.$list.height()),
        !1 === e.options.vertical && !1 === e.options.variableWidth
          ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
            e.$slideTrack.width(
              Math.ceil(
                e.slideWidth * e.$slideTrack.children('.slick-slide').length
              )
            ))
          : !0 === e.options.variableWidth
          ? e.$slideTrack.width(5e3 * e.slideCount)
          : ((e.slideWidth = Math.ceil(e.listWidth)),
            e.$slideTrack.height(
              Math.ceil(
                e.$slides.first().outerHeight(!0) *
                  e.$slideTrack.children('.slick-slide').length
              )
            ));
      var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth &&
        e.$slideTrack.children('.slick-slide').width(e.slideWidth - i);
    }),
    (t.prototype.setFade = function () {
      var i,
        t = this;
      t.$slides.each(function (s, o) {
        (i = t.slideWidth * s * -1),
          !0 === t.options.rtl
            ? e(o).css({
                position: 'relative',
                right: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : e(o).css({
                position: 'relative',
                left: i,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (t.prototype.setHeight = function () {
      var e = this;
      if (
        1 === e.options.slidesToShow &&
        !0 === e.options.adaptiveHeight &&
        !1 === e.options.vertical
      ) {
        var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css('height', i);
      }
    }),
    (t.prototype.setOption = t.prototype.slickSetOption =
      function () {
        var i,
          t,
          s,
          o,
          n,
          r = this,
          l = !1;
        if (
          ('object' === e.type(arguments[0])
            ? ((s = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === e.type(arguments[0]) &&
              ((s = arguments[0]),
              (o = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === e.type(arguments[1])
                ? (n = 'responsive')
                : void 0 !== arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[s] = o;
        else if ('multiple' === n)
          e.each(s, function (e, i) {
            r.options[e] = i;
          });
        else if ('responsive' === n)
          for (t in o)
            if ('array' !== e.type(r.options.responsive))
              r.options.responsive = [o[t]];
            else {
              for (i = r.options.responsive.length - 1; i >= 0; )
                r.options.responsive[i].breakpoint === o[t].breakpoint &&
                  r.options.responsive.splice(i, 1),
                  i--;
              r.options.responsive.push(o[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (t.prototype.setPosition = function () {
      var e = this;
      e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade
          ? e.setCSS(e.getLeft(e.currentSlide))
          : e.setFade(),
        e.$slider.trigger('setPosition', [e]);
    }),
    (t.prototype.setProps = function () {
      var e = this,
        i = document.body.style;
      (e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
        'top' === e.positionProp
          ? e.$slider.addClass('slick-vertical')
          : e.$slider.removeClass('slick-vertical'),
        (void 0 === i.WebkitTransition &&
          void 0 === i.MozTransition &&
          void 0 === i.msTransition) ||
          (!0 === e.options.useCSS && (e.cssTransitions = !0)),
        e.options.fade &&
          ('number' == typeof e.options.zIndex
            ? e.options.zIndex < 3 && (e.options.zIndex = 3)
            : (e.options.zIndex = e.defaults.zIndex)),
        void 0 !== i.OTransform &&
          ((e.animType = 'OTransform'),
          (e.transformType = '-o-transform'),
          (e.transitionType = 'OTransition'),
          void 0 === i.perspectiveProperty &&
            void 0 === i.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== i.MozTransform &&
          ((e.animType = 'MozTransform'),
          (e.transformType = '-moz-transform'),
          (e.transitionType = 'MozTransition'),
          void 0 === i.perspectiveProperty &&
            void 0 === i.MozPerspective &&
            (e.animType = !1)),
        void 0 !== i.webkitTransform &&
          ((e.animType = 'webkitTransform'),
          (e.transformType = '-webkit-transform'),
          (e.transitionType = 'webkitTransition'),
          void 0 === i.perspectiveProperty &&
            void 0 === i.webkitPerspective &&
            (e.animType = !1)),
        void 0 !== i.msTransform &&
          ((e.animType = 'msTransform'),
          (e.transformType = '-ms-transform'),
          (e.transitionType = 'msTransition'),
          void 0 === i.msTransform && (e.animType = !1)),
        void 0 !== i.transform &&
          !1 !== e.animType &&
          ((e.animType = 'transform'),
          (e.transformType = 'transform'),
          (e.transitionType = 'transition')),
        (e.transformsEnabled =
          e.options.useTransform && null !== e.animType && !1 !== e.animType);
    }),
    (t.prototype.setSlideClasses = function (e) {
      var i,
        t,
        s,
        o,
        n = this;
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(e).addClass('slick-current'),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (i = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (e >= i && e <= n.slideCount - 1 - i
              ? n.$slides
                  .slice(e - i + r, e + i + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((s = n.options.slidesToShow + e),
                t
                  .slice(s - i + 1 + r, s + i + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === e
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass('slick-center')
              : e === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(e).addClass('slick-center');
      } else
        e >= 0 && e <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(e, e + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((o = n.slideCount % n.options.slidesToShow),
            (s = !0 === n.options.infinite ? n.options.slidesToShow + e : e),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - e < n.options.slidesToShow
              ? t
                  .slice(s - (n.options.slidesToShow - o), s + o)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(s, s + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'));
      ('ondemand' !== n.options.lazyLoad &&
        'anticipated' !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (t.prototype.setupInfinite = function () {
      var i,
        t,
        s,
        o = this;
      if (
        (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite &&
          !1 === o.options.fade &&
          ((t = null), o.slideCount > o.options.slidesToShow))
      ) {
        for (
          s =
            !0 === o.options.centerMode
              ? o.options.slidesToShow + 1
              : o.options.slidesToShow,
            i = o.slideCount;
          i > o.slideCount - s;
          i -= 1
        )
          (t = i - 1),
            e(o.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - o.slideCount)
              .prependTo(o.$slideTrack)
              .addClass('slick-cloned');
        for (i = 0; i < s + o.slideCount; i += 1)
          (t = i),
            e(o.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + o.slideCount)
              .appendTo(o.$slideTrack)
              .addClass('slick-cloned');
        o.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            e(this).attr('id', '');
          });
      }
    }),
    (t.prototype.interrupt = function (e) {
      e || this.autoPlay(), (this.interrupted = e);
    }),
    (t.prototype.selectHandler = function (i) {
      var t = this,
        s = e(i.target).is('.slick-slide')
          ? e(i.target)
          : e(i.target).parents('.slick-slide'),
        o = parseInt(s.attr('data-slick-index'));
      o || (o = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(o, !1, !0)
          : t.slideHandler(o);
    }),
    (t.prototype.slideHandler = function (e, i, t) {
      var s,
        o,
        n,
        r,
        l,
        a,
        d = this;
      if (
        ((i = i || !1),
        !(
          (!0 === d.animating && !0 === d.options.waitForAnimate) ||
          (!0 === d.options.fade && d.currentSlide === e)
        ))
      )
        if (
          (!1 === i && d.asNavFor(e),
          (s = e),
          (l = d.getLeft(s)),
          (r = d.getLeft(d.currentSlide)),
          (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft),
          !1 === d.options.infinite &&
            !1 === d.options.centerMode &&
            (e < 0 || e > d.getDotCount() * d.options.slidesToScroll))
        )
          !1 === d.options.fade &&
            ((s = d.currentSlide),
            !0 !== t && d.slideCount > d.options.slidesToShow
              ? d.animateSlide(r, function () {
                  d.postSlide(s);
                })
              : d.postSlide(s));
        else if (
          !1 === d.options.infinite &&
          !0 === d.options.centerMode &&
          (e < 0 || e > d.slideCount - d.options.slidesToScroll)
        )
          !1 === d.options.fade &&
            ((s = d.currentSlide),
            !0 !== t && d.slideCount > d.options.slidesToShow
              ? d.animateSlide(r, function () {
                  d.postSlide(s);
                })
              : d.postSlide(s));
        else {
          if (
            (d.options.autoplay && clearInterval(d.autoPlayTimer),
            (o =
              s < 0
                ? d.slideCount % d.options.slidesToScroll != 0
                  ? d.slideCount - (d.slideCount % d.options.slidesToScroll)
                  : d.slideCount + s
                : s >= d.slideCount
                ? d.slideCount % d.options.slidesToScroll != 0
                  ? 0
                  : s - d.slideCount
                : s),
            (d.animating = !0),
            d.$slider.trigger('beforeChange', [d, d.currentSlide, o]),
            (n = d.currentSlide),
            (d.currentSlide = o),
            d.setSlideClasses(d.currentSlide),
            d.options.asNavFor &&
              (a = (a = d.getNavTarget()).slick('getSlick')).slideCount <=
                a.options.slidesToShow &&
              a.setSlideClasses(d.currentSlide),
            d.updateDots(),
            d.updateArrows(),
            !0 === d.options.fade)
          )
            return (
              !0 !== t
                ? (d.fadeSlideOut(n),
                  d.fadeSlide(o, function () {
                    d.postSlide(o);
                  }))
                : d.postSlide(o),
              void d.animateHeight()
            );
          !0 !== t && d.slideCount > d.options.slidesToShow
            ? d.animateSlide(l, function () {
                d.postSlide(o);
              })
            : d.postSlide(o);
        }
    }),
    (t.prototype.startLoad = function () {
      var e = this;
      !0 === e.options.arrows &&
        e.slideCount > e.options.slidesToShow &&
        (e.$prevArrow.hide(), e.$nextArrow.hide()),
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          e.$dots.hide(),
        e.$slider.addClass('slick-loading');
    }),
    (t.prototype.swipeDirection = function () {
      var e,
        i,
        t,
        s,
        o = this;
      return (
        (e = o.touchObject.startX - o.touchObject.curX),
        (i = o.touchObject.startY - o.touchObject.curY),
        (t = Math.atan2(i, e)),
        (s = Math.round((180 * t) / Math.PI)) < 0 && (s = 360 - Math.abs(s)),
        (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
          ? !1 === o.options.rtl
            ? 'left'
            : 'right'
          : s >= 135 && s <= 225
          ? !1 === o.options.rtl
            ? 'right'
            : 'left'
          : !0 === o.options.verticalSwiping
          ? s >= 35 && s <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      );
    }),
    (t.prototype.swipeEnd = function (e) {
      var i,
        t,
        s = this;
      if (((s.dragging = !1), (s.swiping = !1), s.scrolling))
        return (s.scrolling = !1), !1;
      if (
        ((s.interrupted = !1),
        (s.shouldClick = !(s.touchObject.swipeLength > 10)),
        void 0 === s.touchObject.curX)
      )
        return !1;
      if (
        (!0 === s.touchObject.edgeHit &&
          s.$slider.trigger('edge', [s, s.swipeDirection()]),
        s.touchObject.swipeLength >= s.touchObject.minSwipe)
      ) {
        switch ((t = s.swipeDirection())) {
          case 'left':
          case 'down':
            (i = s.options.swipeToSlide
              ? s.checkNavigable(s.currentSlide + s.getSlideCount())
              : s.currentSlide + s.getSlideCount()),
              (s.currentDirection = 0);
            break;
          case 'right':
          case 'up':
            (i = s.options.swipeToSlide
              ? s.checkNavigable(s.currentSlide - s.getSlideCount())
              : s.currentSlide - s.getSlideCount()),
              (s.currentDirection = 1);
        }
        'vertical' != t &&
          (s.slideHandler(i),
          (s.touchObject = {}),
          s.$slider.trigger('swipe', [s, t]));
      } else
        s.touchObject.startX !== s.touchObject.curX &&
          (s.slideHandler(s.currentSlide), (s.touchObject = {}));
    }),
    (t.prototype.swipeHandler = function (e) {
      var i = this;
      if (
        !(
          !1 === i.options.swipe ||
          ('ontouchend' in document && !1 === i.options.swipe) ||
          (!1 === i.options.draggable && -1 !== e.type.indexOf('mouse'))
        )
      )
        switch (
          ((i.touchObject.fingerCount =
            e.originalEvent && void 0 !== e.originalEvent.touches
              ? e.originalEvent.touches.length
              : 1),
          (i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold),
          !0 === i.options.verticalSwiping &&
            (i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold),
          e.data.action)
        ) {
          case 'start':
            i.swipeStart(e);
            break;
          case 'move':
            i.swipeMove(e);
            break;
          case 'end':
            i.swipeEnd(e);
        }
    }),
    (t.prototype.swipeMove = function (e) {
      var i,
        t,
        s,
        o,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((i = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== e.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), e.preventDefault()),
              (o =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (o = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (s = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && 'right' === t) ||
                  (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((s = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = i + s * o)
                : (l.swipeLeft = i + s * (l.$list.height() / l.listWidth) * o),
              !0 === l.options.verticalSwiping && (l.swipeLeft = i + s * o),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (t.prototype.swipeStart = function (e) {
      var i,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== e.originalEvent &&
        void 0 !== e.originalEvent.touches &&
        (i = e.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== i ? i.pageX : e.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== i ? i.pageY : e.clientY),
        (t.dragging = !0);
    }),
    (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
      function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
    (t.prototype.unload = function () {
      var i = this;
      e('.slick-cloned', i.$slider).remove(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow &&
          i.htmlExpr.test(i.options.prevArrow) &&
          i.$prevArrow.remove(),
        i.$nextArrow &&
          i.htmlExpr.test(i.options.nextArrow) &&
          i.$nextArrow.remove(),
        i.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');
    }),
    (t.prototype.unslick = function (e) {
      var i = this;
      i.$slider.trigger('unslick', [i, e]), i.destroy();
    }),
    (t.prototype.updateArrows = function () {
      var e = this;
      Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          e.$nextArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$nextArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode) ||
                (e.currentSlide >= e.slideCount - 1 &&
                  !0 === e.options.centerMode)) &&
              (e.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false')));
    }),
    (t.prototype.updateDots = function () {
      var e = this;
      null !== e.$dots &&
        (e.$dots.find('li').removeClass('slick-active').end(),
        e.$dots
          .find('li')
          .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
          .addClass('slick-active'));
    }),
    (t.prototype.visibility = function () {
      var e = this;
      e.options.autoplay &&
        (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
    }),
    (e.fn.slick = function () {
      var e,
        i,
        s = this,
        o = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = s.length;
      for (e = 0; e < r; e++)
        if (
          ('object' == typeof o || void 0 === o
            ? (s[e].slick = new t(s[e], o))
            : (i = s[e].slick[o].apply(s[e].slick, n)),
          void 0 !== i)
        )
          return i;
      return s;
    });
}),
  'function' == typeof define && define.amd
    ? define(['jquery'], S)
    : S(s('aLafJ'));
$('.mission__line').slick({
  infinite: !0,
  arrows: !1,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 700,
  dots: !0,
  slidesToScroll: 1,
  accessibility: !0,
  focusOnSelect: !0,
  variableWidth: !0,
  responsive: [
    { breakpoint: 576, settings: { slidesToShow: 1, variableWidth: !1 } },
    { breakpoint: 320, settings: { slidesToShow: 1 } },
  ],
}),
  $('.data-slider').slick({
    slidesToShow: 3,
    prevArrow:
      ' <button class="clicks__btn prev" type="button"><span class="sr-only">Previous product</span></button>',
    nextArrow:
      '<button class="clicks__btn next" type="button"><span class="sr-only">Next product</span></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: !0,
          centerMode: !0,
          variableWidth: !0,
          arrows: !0,
        },
      },
    ],
  });
function T(e, i) {
  if ('true' === e?.dataset?.complete?.toLowerCase()) return;
  bodymovin
    .loadAnimation({
      container: e.querySelector('.missions__image'),
      loop: !1,
      autoplay: !0,
      path: `./animations/${i}.json`,
    })
    .addEventListener('complete', function () {
      e.setAttribute('data-complete', 'true');
    });
}
function b(e) {
  [
    ...e.querySelectorAll('.missions__desc > *'),
    ...e.querySelectorAll('.missions__btns  .btn'),
  ].forEach(e => {
    setTimeout(() => {
      f.observe(e);
    }, 1200);
  });
}
window.addEventListener('load', () => {
  if (!window.location.hash) return;
  const e = window.location.hash.slice(1),
    i = document.querySelector(`#${e}`);
  document.querySelector('.missions__list').classList.add('hide'),
    document.querySelector('.missions__content').classList.add('active'),
    i.classList.add('active'),
    window.scrollTo({
      top: i.closest('.missions').offsetTop + 50,
      behavior: 'smooth',
    }),
    b(document),
    setTimeout(() => {
      T(i, e);
    }, 3000);
});
new (class {
  _getRefs(e) {
    const i = {};
    return (
      (i.controls = document.querySelector(`${e} [data-controls]`)),
      (i.panes = document.querySelector(`${e} [data-panes]`)),
      (i.back = document.querySelectorAll(`${e} .missions__btns`)),
      i
    );
  }
  _bindEvents() {
    this._refs.controls?.addEventListener(
      'click',
      this._onControlClick.bind(this)
    ),
      this._refs.back?.forEach(e => {
        e.addEventListener('click', this._backBtnClick.bind(this));
      });
  }
  _onControlClick(e) {
    if ((e.preventDefault(), !e.target.classList.contains('btn'))) return;
    this._removeActiveClassLink(), this._removeActiveClassPane();
    const i = e.target,
      t = i.getAttribute('href').slice(1),
      s = this._refs.panes.querySelector(`#${t}`);
    this._addActiveClassLink(i),
      this._addActiveClassPane(s),
      this._addActiveClassPaneList(s),
      T(s, t);
  }
  _addActiveClassLink(e) {
    e.closest('.missions__item').classList.add('active'),
      e.closest('.missions__list').classList.add('hide'),
      this._hideUnClickedControl();
  }
  _hideUnClickedControl() {
    [
      ...this._refs.controls.querySelectorAll('.missions__item:not(.active)'),
    ].forEach(e => {
      e.classList.add('hide');
    });
  }
  _showControl() {
    [...this._refs.controls.querySelectorAll('.missions__item')].forEach(e => {
      e.classList.remove('hide', 'active');
    });
  }
  _addActiveClassPane(e) {
    e.classList.add('active');
  }
  _addActiveClassPaneList(e) {
    e.closest('.missions__content').classList.add('active'), b(e);
  }
  _removeActiveClassLink() {
    this._refs.controls
      .querySelector(`.${this._activeControlClass}`)
      ?.classList.remove('active');
  }
  _removeActiveClassPane() {
    this._refs.panes
      .querySelector(`.${this._activeControlClass}`)
      ?.classList.remove('active');
  }
  _backBtnClick(e) {
    e.target.closest('li').classList.remove('active'),
      document.querySelector('.missions__list').classList.remove('hide'),
      this._showControl(),
      setTimeout(() => {
        window.scrollTo({
          top: document.querySelector('.missions').offsetTop - 100,
          behavior: 'smooth',
        });
      }, 1e3);
  }
  constructor({ rootSelector: e, activeControlClass: i = 'active' }) {
    (this._refs = this._getRefs(e)),
      this._bindEvents(),
      (this._activeControlClass = i);
  }
})({ rootSelector: '[data-missions]' });
const C = document.querySelector('dialog');
[...document.querySelectorAll('.modal__close')].forEach(e => {
  e.addEventListener('click', e => {
    C.classList.add('hide'),
      C.addEventListener(
        'webkitAnimationEnd',
        function () {
          C.classList.remove('hide'),
            C.close(),
            C.removeEventListener('webkitAnimationEnd', arguments.callee, !1);
        },
        !1
      );
  });
});
