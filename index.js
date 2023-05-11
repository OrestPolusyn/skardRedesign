!(function () {
  function e(e) {
    var t = !0,
      s = !1,
      i = null,
      a = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        'datetime-local': !0,
      }
    function n(e) {
      return !!(
        e &&
        e !== document &&
        'HTML' !== e.nodeName &&
        'BODY' !== e.nodeName &&
        'classList' in e &&
        'contains' in e.classList
      )
    }
    function r(e) {
      e.classList.contains('focus-visible') ||
        (e.classList.add('focus-visible'),
        e.setAttribute('data-focus-visible-added', ''))
    }
    function l(e) {
      t = !1
    }
    function o() {
      document.addEventListener('mousemove', d),
        document.addEventListener('mousedown', d),
        document.addEventListener('mouseup', d),
        document.addEventListener('pointermove', d),
        document.addEventListener('pointerdown', d),
        document.addEventListener('pointerup', d),
        document.addEventListener('touchmove', d),
        document.addEventListener('touchstart', d),
        document.addEventListener('touchend', d)
    }
    function d(e) {
      ;(e.target.nodeName && 'html' === e.target.nodeName.toLowerCase()) ||
        ((t = !1),
        document.removeEventListener('mousemove', d),
        document.removeEventListener('mousedown', d),
        document.removeEventListener('mouseup', d),
        document.removeEventListener('pointermove', d),
        document.removeEventListener('pointerdown', d),
        document.removeEventListener('pointerup', d),
        document.removeEventListener('touchmove', d),
        document.removeEventListener('touchstart', d),
        document.removeEventListener('touchend', d))
    }
    document.addEventListener(
      'keydown',
      function (s) {
        s.metaKey ||
          s.altKey ||
          s.ctrlKey ||
          (n(e.activeElement) && r(e.activeElement), (t = !0))
      },
      !0
    ),
      document.addEventListener('mousedown', l, !0),
      document.addEventListener('pointerdown', l, !0),
      document.addEventListener('touchstart', l, !0),
      document.addEventListener(
        'visibilitychange',
        function (e) {
          'hidden' === document.visibilityState && (s && (t = !0), o())
        },
        !0
      ),
      o(),
      e.addEventListener(
        'focus',
        function (e) {
          var s, i, l
          n(e.target) &&
            (t ||
              ((s = e.target),
              (i = s.type),
              ('INPUT' === (l = s.tagName) && a[i] && !s.readOnly) ||
                ('TEXTAREA' === l && !s.readOnly) ||
                s.isContentEditable)) &&
            r(e.target)
        },
        !0
      ),
      e.addEventListener(
        'blur',
        function (e) {
          var t
          n(e.target) &&
            (e.target.classList.contains('focus-visible') ||
              e.target.hasAttribute('data-focus-visible-added')) &&
            ((s = !0),
            window.clearTimeout(i),
            (i = window.setTimeout(function () {
              s = !1
            }, 100)),
            (t = e.target).hasAttribute('data-focus-visible-added') &&
              (t.classList.remove('focus-visible'),
              t.removeAttribute('data-focus-visible-added')))
        },
        !0
      ),
      e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
        ? e.host.setAttribute('data-js-focus-visible', '')
        : e.nodeType === Node.DOCUMENT_NODE &&
          (document.documentElement.classList.add('js-focus-visible'),
          document.documentElement.setAttribute('data-js-focus-visible', ''))
  }
  if ('undefined' != typeof window && 'undefined' != typeof document) {
    var t
    window.applyFocusVisiblePolyfill = e
    try {
      t = new CustomEvent('focus-visible-polyfill-ready')
    } catch (e) {
      ;(t = document.createEvent('CustomEvent')).initCustomEvent(
        'focus-visible-polyfill-ready',
        !1,
        !1,
        {}
      )
    }
    window.dispatchEvent(t)
  }
  'undefined' != typeof document && e(document)
  const s = 'classList',
    i = 'querySelector',
    a = (e, t) => {
      document[i](e)?.[s].add(t)
    },
    n = (e, t) => {
      document[i](e)?.[s].remove(t)
    }
  let r,
    l,
    o = parseFloat(
      document.documentElement.style.getPropertyValue('--header-height')
    )
  const d = () => {
    ;(r = window.scrollY),
      a('.header', 'scroll'),
      o - 50 < r && r > l
        ? (a('.header', 'hide'), a('.header', 'scroll'))
        : l > r && n('.header', 'hide'),
      r < o && n('.header', 'scroll'),
      (l = r)
  }
  window.addEventListener('scroll', e => {
    d()
  }),
    d()
  function c(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'constructor' in e &&
      e.constructor === Object
    )
  }
  function p(e = {}, t = {}) {
    Object.keys(t).forEach(s => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : c(t[s]) && c(e[s]) && Object.keys(t[s]).length > 0 && p(e[s], t[s])
    })
  }
  document.querySelector('.nav').addEventListener('click', function (e) {
    if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger'))
      return
    ~this.matches('.opened') &&
      (this.classList.toggle('opened'), this.classList.add('closed'))
  })
  const u = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  }
  function m() {
    const e = 'undefined' != typeof document ? document : {}
    return p(e, u), e
  }
  const f = {
    document: u,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: e =>
      'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      'undefined' != typeof setTimeout && clearTimeout(e)
    },
  }
  function h() {
    const e = 'undefined' != typeof window ? window : {}
    return p(e, f), e
  }
  function v(e) {
    const t = e
    Object.keys(t).forEach(e => {
      try {
        t[e] = null
      } catch (e) {}
      try {
        delete t[e]
      } catch (e) {}
    })
  }
  function g(e, t = 0) {
    return setTimeout(e, t)
  }
  function w() {
    return Date.now()
  }
  function b(e, t = 'x') {
    const s = h()
    let i, a, n
    const r = (function (e) {
      const t = h()
      let s
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      )
    })(e)
    return (
      s.WebKitCSSMatrix
        ? ((a = r.transform || r.webkitTransform),
          a.split(',').length > 6 &&
            (a = a
              .split(', ')
              .map(e => e.replace(',', '.'))
              .join(', ')),
          (n = new s.WebKitCSSMatrix('none' === a ? '' : a)))
        : ((n =
            r.MozTransform ||
            r.OTransform ||
            r.MsTransform ||
            r.msTransform ||
            r.transform ||
            r
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,')),
          (i = n.toString().split(','))),
      'x' === t &&
        (a = s.WebKitCSSMatrix
          ? n.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      'y' === t &&
        (a = s.WebKitCSSMatrix
          ? n.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      a || 0
    )
  }
  function S(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      e.constructor &&
      'Object' === Object.prototype.toString.call(e).slice(8, -1)
    )
  }
  function E(...e) {
    const t = Object(e[0]),
      s = ['__proto__', 'constructor', 'prototype']
    for (let a = 1; a < e.length; a += 1) {
      const n = e[a]
      if (
        null != n &&
        ((i = n),
        !('undefined' != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(n)).filter(e => s.indexOf(e) < 0)
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            a = Object.getOwnPropertyDescriptor(n, i)
          void 0 !== a &&
            a.enumerable &&
            (S(t[i]) && S(n[i])
              ? n[i].__swiper__
                ? (t[i] = n[i])
                : E(t[i], n[i])
              : !S(t[i]) && S(n[i])
              ? ((t[i] = {}), n[i].__swiper__ ? (t[i] = n[i]) : E(t[i], n[i]))
              : (t[i] = n[i]))
        }
      }
    }
    var i
    return t
  }
  function T(e, t, s) {
    e.style.setProperty(t, s)
  }
  function y({ swiper: e, targetPosition: t, side: s }) {
    const i = h(),
      a = -e.translate
    let n,
      r = null
    const l = e.params.speed
    ;(e.wrapperEl.style.scrollSnapType = 'none'),
      i.cancelAnimationFrame(e.cssModeFrameID)
    const o = t > a ? 'next' : 'prev',
      d = (e, t) => ('next' === o && e >= t) || ('prev' === o && e <= t),
      c = () => {
        ;(n = new Date().getTime()), null === r && (r = n)
        const o = Math.max(Math.min((n - r) / l, 1), 0),
          p = 0.5 - Math.cos(o * Math.PI) / 2
        let u = a + p * (t - a)
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
          return (
            (e.wrapperEl.style.overflow = 'hidden'),
            (e.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              ;(e.wrapperEl.style.overflow = ''),
                e.wrapperEl.scrollTo({ [s]: u })
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          )
        e.cssModeFrameID = i.requestAnimationFrame(c)
      }
    c()
  }
  function x(e) {
    return (
      e.querySelector('.swiper-slide-transform') ||
      (e.shadowEl && e.shadowEl.querySelector('.swiper-slide-transform')) ||
      e
    )
  }
  function C(e, t = '') {
    return [...e.children].filter(e => e.matches(t))
  }
  function M(e, t = []) {
    const s = document.createElement(e)
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s
  }
  function L(e, t) {
    const s = []
    for (; e.previousElementSibling; ) {
      const i = e.previousElementSibling
      t ? i.matches(t) && s.push(i) : s.push(i), (e = i)
    }
    return s
  }
  function P(e, t) {
    const s = []
    for (; e.nextElementSibling; ) {
      const i = e.nextElementSibling
      t ? i.matches(t) && s.push(i) : s.push(i), (e = i)
    }
    return s
  }
  function k(e, t) {
    return h().getComputedStyle(e, null).getPropertyValue(t)
  }
  function I(e) {
    let t,
      s = e
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1)
      return t
    }
  }
  function O(e, t) {
    const s = []
    let i = e.parentElement
    for (; i; ) t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement)
    return s
  }
  function A(e, t) {
    t &&
      e.addEventListener('transitionend', function s(i) {
        i.target === e &&
          (t.call(e, i), e.removeEventListener('transitionend', s))
      })
  }
  function z(e, t, s) {
    const i = h()
    return s
      ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue('width' === t ? 'margin-right' : 'margin-top')
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom')
          )
      : e.offsetWidth
  }
  let G, $, _
  function B() {
    return (
      G ||
        (G = (function () {
          const e = h(),
            t = m()
          return {
            smoothScroll:
              t.documentElement && 'scrollBehavior' in t.documentElement.style,
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          }
        })()),
      G
    )
  }
  function D(e = {}) {
    return (
      $ ||
        ($ = (function ({ userAgent: e } = {}) {
          const t = B(),
            s = h(),
            i = s.navigator.platform,
            a = e || s.navigator.userAgent,
            n = { ios: !1, android: !1 },
            r = s.screen.width,
            l = s.screen.height,
            o = a.match(/(Android);?[\s\/]+([\d.]+)?/)
          let d = a.match(/(iPad).*OS\s([\d_]+)/)
          const c = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !d && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = 'Win32' === i
          let m = 'MacIntel' === i
          return (
            !d &&
              m &&
              t.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].indexOf(`${r}x${l}`) >= 0 &&
              ((d = a.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, '13_0_0']),
              (m = !1)),
            o && !u && ((n.os = 'android'), (n.android = !0)),
            (d || p || c) && ((n.os = 'ios'), (n.ios = !0)),
            n
          )
        })(e)),
      $
    )
  }
  function N() {
    return (
      _ ||
        (_ = (function () {
          const e = h()
          let t = !1
          function s() {
            const t = e.navigator.userAgent.toLowerCase()
            return (
              t.indexOf('safari') >= 0 &&
              t.indexOf('chrome') < 0 &&
              t.indexOf('android') < 0
            )
          }
          if (s()) {
            const s = String(e.navigator.userAgent)
            if (s.includes('Version/')) {
              const [e, i] = s
                .split('Version/')[1]
                .split(' ')[0]
                .split('.')
                .map(e => Number(e))
              t = e < 16 || (16 === e && i < 2)
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          }
        })()),
      _
    )
  }
  const F = (e, t) => {
      if (!e || e.destroyed || !e.params) return
      const s = t.closest(
        e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`
      )
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`)
        t && t.remove()
      }
    },
    V = (e, t) => {
      if (!e.slides[t]) return
      const s = e.slides[t].querySelector('[loading="lazy"]')
      s && s.removeAttribute('loading')
    },
    H = e => {
      if (!e || e.destroyed || !e.params) return
      let t = e.params.lazyPreloadPrevNext
      const s = e.slides.length
      if (!s || !t || t < 0) return
      t = Math.min(t, s)
      const i =
          'auto' === e.params.slidesPerView
            ? e.slidesPerViewDynamic()
            : Math.ceil(e.params.slidesPerView),
        a = e.activeIndex,
        n = a + i - 1
      if (e.params.rewind)
        for (let i = a - t; i <= n + t; i += 1) {
          const t = ((i % s) + s) % s
          t !== a && t > n && V(e, t)
        }
      else
        for (let i = Math.max(n - t, 0); i <= Math.min(n + t, s - 1); i += 1)
          i !== a && i > n && V(e, i)
    }
  function j({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: a, previousIndex: n } = e
    let r = s
    if (
      (r || (r = a > n ? 'next' : a < n ? 'prev' : 'reset'),
      e.emit(`transition${i}`),
      t && a !== n)
    ) {
      if ('reset' === r) return void e.emit(`slideResetTransition${i}`)
      e.emit(`slideChangeTransition${i}`),
        'next' === r
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`)
    }
  }
  function R(e) {
    const t = this,
      s = m(),
      i = h(),
      a = t.touchEventsData
    a.evCache.push(e)
    const { params: n, touches: r, enabled: l } = t
    if (!l) return
    if (!n.simulateTouch && 'mouse' === e.pointerType) return
    if (t.animating && n.preventInteractionOnTransition) return
    !t.animating && n.cssMode && n.loop && t.loopFix()
    let o = e
    o.originalEvent && (o = o.originalEvent)
    let d = o.target
    if ('wrapper' === n.touchEventsTarget && !t.wrapperEl.contains(d)) return
    if ('which' in o && 3 === o.which) return
    if ('button' in o && o.button > 0) return
    if (a.isTouched && a.isMoved) return
    const c = !!n.noSwipingClass && '' !== n.noSwipingClass,
      p = e.composedPath ? e.composedPath() : e.path
    c && o.target && o.target.shadowRoot && p && (d = p[0])
    const u = n.noSwipingSelector
        ? n.noSwipingSelector
        : `.${n.noSwipingClass}`,
      f = !(!o.target || !o.target.shadowRoot)
    if (
      n.noSwiping &&
      (f
        ? (function (e, t = this) {
            return (function t(s) {
              if (!s || s === m() || s === h()) return null
              s.assignedSlot && (s = s.assignedSlot)
              const i = s.closest(e)
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            })(t)
          })(u, d)
        : d.closest(u))
    )
      return void (t.allowClick = !0)
    if (n.swipeHandler && !d.closest(n.swipeHandler)) return
    ;(r.currentX = o.pageX), (r.currentY = o.pageY)
    const v = r.currentX,
      g = r.currentY,
      b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
      S = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold
    if (b && (v <= S || v >= i.innerWidth - S)) {
      if ('prevent' !== b) return
      e.preventDefault()
    }
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (r.startX = v),
      (r.startY = g),
      (a.touchStartTime = w()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      n.threshold > 0 && (a.allowThresholdMove = !1)
    let E = !0
    d.matches(a.focusableElements) &&
      ((E = !1), 'SELECT' === d.nodeName && (a.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(a.focusableElements) &&
        s.activeElement !== d &&
        s.activeElement.blur()
    const T = E && t.allowTouchMove && n.touchStartPreventDefault
    ;(!n.touchStartForcePreventDefault && !T) ||
      d.isContentEditable ||
      o.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !n.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit('touchStart', o)
  }
  function q(e) {
    const t = m(),
      s = this,
      i = s.touchEventsData,
      { params: a, touches: n, rtlTranslate: r, enabled: l } = s
    if (!l) return
    if (!a.simulateTouch && 'mouse' === e.pointerType) return
    let o = e
    if ((o.originalEvent && (o = o.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit('touchMoveOpposite', o)
      )
    const d = i.evCache.findIndex(e => e.pointerId === o.pointerId)
    d >= 0 && (i.evCache[d] = o)
    const c = i.evCache.length > 1 ? i.evCache[0] : o,
      p = c.pageX,
      u = c.pageY
    if (o.preventedByNestedSwiper) return (n.startX = p), void (n.startY = u)
    if (!s.allowTouchMove)
      return (
        o.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, {
            startX: p,
            startY: u,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: p,
            currentY: u,
          }),
          (i.touchStartTime = w()))
        )
      )
    if (a.touchReleaseOnEdges && !a.loop)
      if (s.isVertical()) {
        if (
          (u < n.startY && s.translate <= s.maxTranslate()) ||
          (u > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1)
      } else if (
        (p < n.startX && s.translate <= s.maxTranslate()) ||
        (p > n.startX && s.translate >= s.minTranslate())
      )
        return
    if (
      t.activeElement &&
      o.target === t.activeElement &&
      o.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1)
    if (
      (i.allowTouchCallbacks && s.emit('touchMove', o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return
    ;(n.currentX = p), (n.currentY = u)
    const f = n.currentX - n.startX,
      h = n.currentY - n.startY
    if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold)
      return
    if (void 0 === i.isScrolling) {
      let e
      ;(s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > a.touchAngle
            : 90 - e > a.touchAngle))
    }
    if (
      (i.isScrolling && s.emit('touchMoveOpposite', o),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1)
    if (!i.startMoving) return
    ;(s.allowClick = !1),
      !a.cssMode && o.cancelable && o.preventDefault(),
      a.touchMoveStopPropagation && !a.nested && o.stopPropagation()
    let v = s.isHorizontal() ? f : h,
      g = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY
    a.oneWayMovement &&
      ((v = Math.abs(v) * (r ? 1 : -1)), (g = Math.abs(g) * (r ? 1 : -1))),
      (n.diff = v),
      (v *= a.touchRatio),
      r && ((v = -v), (g = -g))
    const b = s.touchesDirection
    ;(s.swipeDirection = v > 0 ? 'prev' : 'next'),
      (s.touchesDirection = g > 0 ? 'prev' : 'next')
    const S = s.params.loop && !a.cssMode
    if (!i.isMoved) {
      if (
        (S && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent('transitionend', {
          bubbles: !0,
          cancelable: !0,
        })
        s.wrapperEl.dispatchEvent(e)
      }
      ;(i.allowMomentumBounce = !1),
        !a.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit('sliderFirstMove', o)
    }
    let E
    i.isMoved &&
      b !== s.touchesDirection &&
      S &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (E = !0)),
      s.emit('sliderMove', o),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate)
    let T = !0,
      y = a.resistanceRatio
    if (
      (a.touchReleaseOnEdges && (y = 0),
      v > 0
        ? (S &&
            !E &&
            i.currentTranslate >
              (a.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: 'prev',
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((T = !1),
            a.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** y)))
        : v < 0 &&
          (S &&
            !E &&
            i.currentTranslate <
              (a.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: 'next',
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ('auto' === a.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(a.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((T = !1),
            a.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** y))),
      T && (o.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        'next' === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        'prev' === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      a.threshold > 0)
    ) {
      if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate)
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        )
    }
    a.followFinger &&
      !a.cssMode &&
      (((a.freeMode && a.freeMode.enabled && s.freeMode) ||
        a.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        a.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate))
  }
  function W(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex(t => t.pointerId === e.pointerId)
    if (
      (i >= 0 && s.evCache.splice(i, 1),
      ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type))
    ) {
      if (
        !(
          'pointercancel' === e.type &&
          (t.browser.isSafari || t.browser.isWebView)
        )
      )
        return
    }
    const {
      params: a,
      touches: n,
      rtlTranslate: r,
      slidesGrid: l,
      enabled: o,
    } = t
    if (!o) return
    if (!a.simulateTouch && 'mouse' === e.pointerType) return
    let d = e
    if (
      (d.originalEvent && (d = d.originalEvent),
      s.allowTouchCallbacks && t.emit('touchEnd', d),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      )
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1)
    const c = w(),
      p = c - s.touchStartTime
    if (t.allowClick) {
      const e = d.path || (d.composedPath && d.composedPath())
      t.updateClickedSlide((e && e[0]) || d.target),
        t.emit('tap click', d),
        p < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', d)
    }
    if (
      ((s.lastClickTime = w()),
      g(() => {
        t.destroyed || (t.allowClick = !0)
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
    let u
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u })
    let m = 0,
      f = t.slidesSizesGrid[0]
    for (
      let e = 0;
      e < l.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
      void 0 !== l[e + t]
        ? u >= l[e] && u < l[e + t] && ((m = e), (f = l[e + t] - l[e]))
        : u >= l[e] && ((m = e), (f = l[l.length - 1] - l[l.length - 2]))
    }
    let h = null,
      v = null
    a.rewind &&
      (t.isBeginning
        ? (v =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (h = 0))
    const b = (u - l[m]) / f,
      S = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup
    if (p > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex)
      'next' === t.swipeDirection &&
        (b >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? h : m + S)
          : t.slideTo(m)),
        'prev' === t.swipeDirection &&
          (b > 1 - a.longSwipesRatio
            ? t.slideTo(m + S)
            : null !== v && b < 0 && Math.abs(b) > a.longSwipesRatio
            ? t.slideTo(v)
            : t.slideTo(m))
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex)
      t.navigation &&
      (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
        ? d.target === t.navigation.nextEl
          ? t.slideTo(m + S)
          : t.slideTo(m)
        : ('next' === t.swipeDirection && t.slideTo(null !== h ? h : m + S),
          'prev' === t.swipeDirection && t.slideTo(null !== v ? v : m))
    }
  }
  function Y() {
    const e = this,
      { params: t, el: s } = e
    if (s && 0 === s.offsetWidth) return
    t.breakpoints && e.setBreakpoint()
    const { allowSlideNext: i, allowSlidePrev: a, snapGrid: n } = e,
      r = e.virtual && e.params.virtual.enabled
    ;(e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses()
    const l = r && t.loop
    !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !r
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(e.autoplay.resizeTimeout),
        (e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume()
        }, 500))),
      (e.allowSlidePrev = a),
      (e.allowSlideNext = i),
      e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
  }
  function X(e) {
    const t = this
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())))
  }
  function U() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e
    if (!i) return
    let a
    ;(e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses()
    const n = e.maxTranslate() - e.minTranslate()
    ;(a = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
      a !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1)
  }
  function K(e) {
    F(this, e.target), this.update()
  }
  let J = !1
  function Q() {}
  const Z = (e, t) => {
    const s = m(),
      { params: i, el: a, wrapperEl: n, device: r } = e,
      l = !!i.nested,
      o = 'on' === t ? 'addEventListener' : 'removeEventListener',
      d = t
    a[o]('pointerdown', e.onTouchStart, { passive: !1 }),
      s[o]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
      s[o]('pointerup', e.onTouchEnd, { passive: !0 }),
      s[o]('pointercancel', e.onTouchEnd, { passive: !0 }),
      s[o]('pointerout', e.onTouchEnd, { passive: !0 }),
      s[o]('pointerleave', e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        a[o]('click', e.onClick, !0),
      i.cssMode && n[o]('scroll', e.onScroll),
      i.updateOnWindowResize
        ? e[d](
            r.ios || r.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            Y,
            !0
          )
        : e[d]('observerUpdate', Y, !0),
      a[o]('load', e.onLoad, { capture: !0 })
  }
  const ee = (e, t) => e.grid && t.grid && t.grid.rows > 1
  var te = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
  function se(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        a = s[i]
      'object' == typeof a && null !== a
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && 'enabled' in a
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              'object' != typeof e[i] ||
                'enabled' in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              E(t, s))
            : E(t, s))
        : E(t, s)
    }
  }
  const ie = {
      eventsEmitter: {
        on(e, t, s) {
          const i = this
          if (!i.eventsListeners || i.destroyed) return i
          if ('function' != typeof t) return i
          const a = s ? 'unshift' : 'push'
          return (
            e.split(' ').forEach(e => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][a](t)
            }),
            i
          )
        },
        once(e, t, s) {
          const i = this
          if (!i.eventsListeners || i.destroyed) return i
          if ('function' != typeof t) return i
          function a(...s) {
            i.off(e, a),
              a.__emitterProxy && delete a.__emitterProxy,
              t.apply(i, s)
          }
          return (a.__emitterProxy = t), i.on(e, a, s)
        },
        onAny(e, t) {
          const s = this
          if (!s.eventsListeners || s.destroyed) return s
          if ('function' != typeof e) return s
          const i = t ? 'unshift' : 'push'
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          )
        },
        offAny(e) {
          const t = this
          if (!t.eventsListeners || t.destroyed) return t
          if (!t.eventsAnyListeners) return t
          const s = t.eventsAnyListeners.indexOf(e)
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
          const s = this
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(' ').forEach(e => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, a) => {
                      ;(i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(a, 1)
                    })
              }),
              s)
            : s
        },
        emit(...e) {
          const t = this
          if (!t.eventsListeners || t.destroyed) return t
          if (!t.eventsListeners) return t
          let s, i, a
          'string' == typeof e[0] || Array.isArray(e[0])
            ? ((s = e[0]), (i = e.slice(1, e.length)), (a = t))
            : ((s = e[0].events), (i = e[0].data), (a = e[0].context || t)),
            i.unshift(a)
          return (
            (Array.isArray(s) ? s : s.split(' ')).forEach(e => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach(t => {
                  t.apply(a, [e, ...i])
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach(e => {
                    e.apply(a, i)
                  })
            }),
            t
          )
        },
      },
      update: {
        updateSize: function () {
          const e = this
          let t, s
          const i = e.el
          ;(t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i.clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(k(i, 'padding-left') || 0, 10) -
                parseInt(k(i, 'padding-right') || 0, 10)),
              (s =
                s -
                parseInt(k(i, 'padding-top') || 0, 10) -
                parseInt(k(i, 'padding-bottom') || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }))
        },
        updateSlides: function () {
          const e = this
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
                }[t]
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0)
          }
          const i = e.params,
            {
              wrapperEl: a,
              slidesEl: n,
              size: r,
              rtlTranslate: l,
              wrongRTL: o,
            } = e,
            d = e.virtual && i.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = C(n, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length
          let m = []
          const f = [],
            h = []
          let v = i.slidesOffsetBefore
          'function' == typeof v && (v = i.slidesOffsetBefore.call(e))
          let g = i.slidesOffsetAfter
          'function' == typeof g && (g = i.slidesOffsetAfter.call(e))
          const w = e.snapGrid.length,
            b = e.slidesGrid.length
          let S = i.spaceBetween,
            E = -v,
            y = 0,
            x = 0
          if (void 0 === r) return
          'string' == typeof S &&
            S.indexOf('%') >= 0 &&
            (S = (parseFloat(S.replace('%', '')) / 100) * r),
            (e.virtualSize = -S),
            p.forEach(e => {
              l ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                (e.style.marginBottom = ''),
                (e.style.marginTop = '')
            }),
            i.centeredSlides &&
              i.cssMode &&
              (T(a, '--swiper-centered-offset-before', ''),
              T(a, '--swiper-centered-offset-after', ''))
          const M = i.grid && i.grid.rows > 1 && e.grid
          let L
          M && e.grid.initSlides(u)
          const P =
            'auto' === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              e => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0
          for (let a = 0; a < u; a += 1) {
            let n
            if (
              ((L = 0),
              p[a] && (n = p[a]),
              M && e.grid.updateSlide(a, n, u, t),
              !p[a] || 'none' !== k(n, 'display'))
            ) {
              if ('auto' === i.slidesPerView) {
                P && (p[a].style[t('width')] = '')
                const r = getComputedStyle(n),
                  l = n.style.transform,
                  o = n.style.webkitTransform
                if (
                  (l && (n.style.transform = 'none'),
                  o && (n.style.webkitTransform = 'none'),
                  i.roundLengths)
                )
                  L = e.isHorizontal() ? z(n, 'width', !0) : z(n, 'height', !0)
                else {
                  const e = s(r, 'width'),
                    t = s(r, 'padding-left'),
                    i = s(r, 'padding-right'),
                    a = s(r, 'margin-left'),
                    l = s(r, 'margin-right'),
                    o = r.getPropertyValue('box-sizing')
                  if (o && 'border-box' === o) L = e + a + l
                  else {
                    const { clientWidth: s, offsetWidth: r } = n
                    L = e + t + i + a + l + (r - s)
                  }
                }
                l && (n.style.transform = l),
                  o && (n.style.webkitTransform = o),
                  i.roundLengths && (L = Math.floor(L))
              } else
                (L = (r - (i.slidesPerView - 1) * S) / i.slidesPerView),
                  i.roundLengths && (L = Math.floor(L)),
                  p[a] && (p[a].style[t('width')] = `${L}px`)
              p[a] && (p[a].swiperSlideSize = L),
                h.push(L),
                i.centeredSlides
                  ? ((E = E + L / 2 + y / 2 + S),
                    0 === y && 0 !== a && (E = E - r / 2 - S),
                    0 === a && (E = E - r / 2 - S),
                    Math.abs(E) < 0.001 && (E = 0),
                    i.roundLengths && (E = Math.floor(E)),
                    x % i.slidesPerGroup == 0 && m.push(E),
                    f.push(E))
                  : (i.roundLengths && (E = Math.floor(E)),
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                      e.params.slidesPerGroup ==
                      0 && m.push(E),
                    f.push(E),
                    (E = E + L + S)),
                (e.virtualSize += L + S),
                (y = L),
                (x += 1)
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + g),
            l &&
              o &&
              ('slide' === i.effect || 'coverflow' === i.effect) &&
              (a.style.width = `${e.virtualSize + i.spaceBetween}px`),
            i.setWrapperSize &&
              (a.style[t('width')] = `${e.virtualSize + i.spaceBetween}px`),
            M && e.grid.updateWrapperSize(L, m, t),
            !i.centeredSlides)
          ) {
            const t = []
            for (let s = 0; s < m.length; s += 1) {
              let a = m[s]
              i.roundLengths && (a = Math.floor(a)),
                m[s] <= e.virtualSize - r && t.push(a)
            }
            ;(m = t),
              Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 &&
                m.push(e.virtualSize - r)
          }
          if (d && i.loop) {
            const t = h[0] + S
            if (i.slidesPerGroup > 1) {
              const s = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    i.slidesPerGroup
                ),
                a = t * i.slidesPerGroup
              for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + a)
            }
            for (
              let s = 0;
              s < e.virtual.slidesBefore + e.virtual.slidesAfter;
              s += 1
            )
              1 === i.slidesPerGroup && m.push(m[m.length - 1] + t),
                f.push(f[f.length - 1] + t),
                (e.virtualSize += t)
          }
          if ((0 === m.length && (m = [0]), 0 !== i.spaceBetween)) {
            const s = e.isHorizontal() && l ? 'marginLeft' : t('marginRight')
            p.filter(
              (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
            ).forEach(e => {
              e.style[s] = `${S}px`
            })
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0
            h.forEach(t => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0)
            }),
              (e -= i.spaceBetween)
            const t = e - r
            m = m.map(e => (e < 0 ? -v : e > t ? t + g : e))
          }
          if (i.centerInsufficientSlides) {
            let e = 0
            if (
              (h.forEach(t => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0)
              }),
              (e -= i.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2
              m.forEach((e, s) => {
                m[s] = e - t
              }),
                f.forEach((e, s) => {
                  f[s] = e + t
                })
            }
          }
          if (
            (Object.assign(e, {
              slides: p,
              snapGrid: m,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            T(a, '--swiper-centered-offset-before', -m[0] + 'px'),
              T(
                a,
                '--swiper-centered-offset-after',
                e.size / 2 - h[h.length - 1] / 2 + 'px'
              )
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0]
            ;(e.snapGrid = e.snapGrid.map(e => e + t)),
              (e.slidesGrid = e.slidesGrid.map(e => e + s))
          }
          if (
            (u !== c && e.emit('slidesLengthChange'),
            m.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit('snapGridLengthChange')),
            f.length !== b && e.emit('slidesGridLengthChange'),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(d || i.cssMode || ('slide' !== i.effect && 'fade' !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              s = e.el.classList.contains(t)
            u <= i.maxBackfaceHiddenSlides
              ? s || e.el.classList.add(t)
              : s && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled
          let a,
            n = 0
          'number' == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed)
          const r = e => (i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e])
          if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach(e => {
                s.push(e)
              })
            else
              for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const e = t.activeIndex + a
                if (e > t.slides.length && !i) break
                s.push(r(e))
              }
          else s.push(r(t.activeIndex))
          for (a = 0; a < s.length; a += 1)
            if (void 0 !== s[a]) {
              const e = s[a].offsetHeight
              n = e > n ? e : n
            }
          ;(n || 0 === n) && (t.wrapperEl.style.height = `${n}px`)
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            s = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset =
              (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
              s -
              e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: a, snapGrid: n } = t
          if (0 === i.length) return
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset()
          let r = -e
          a && (r = e),
            i.forEach(e => {
              e.classList.remove(s.slideVisibleClass)
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = [])
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e]
            let o = l.swiperSlideOffset
            s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset)
            const d =
                (r + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                (l.swiperSlideSize + s.spaceBetween),
              c =
                (r - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
                (l.swiperSlideSize + s.spaceBetween),
              p = -(r - o),
              u = p + t.slidesSizesGrid[e]
            ;((p >= 0 && p < t.size - 1) ||
              (u > 1 && u <= t.size) ||
              (p <= 0 && u >= t.size)) &&
              (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(e),
              i[e].classList.add(s.slideVisibleClass)),
              (l.progress = a ? -d : d),
              (l.originalProgress = a ? -c : c)
          }
        },
        updateProgress: function (e) {
          const t = this
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1
            e = (t && t.translate && t.translate * s) || 0
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate()
          let { progress: a, isBeginning: n, isEnd: r, progressLoop: l } = t
          const o = n,
            d = r
          if (0 === i) (a = 0), (n = !0), (r = !0)
          else {
            a = (e - t.minTranslate()) / i
            const s = Math.abs(e - t.minTranslate()) < 1,
              l = Math.abs(e - t.maxTranslate()) < 1
            ;(n = s || a <= 0), (r = l || a >= 1), s && (a = 0), l && (a = 1)
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              a = t.slidesGrid[s],
              n = t.slidesGrid[i],
              r = t.slidesGrid[t.slidesGrid.length - 1],
              o = Math.abs(e)
            ;(l = o >= a ? (o - a) / r : (o + r - n) / r), l > 1 && (l -= 1)
          }
          Object.assign(t, {
            progress: a,
            progressLoop: l,
            isBeginning: n,
            isEnd: r,
          }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !o && t.emit('reachBeginning toEdge'),
            r && !d && t.emit('reachEnd toEdge'),
            ((o && !n) || (d && !r)) && t.emit('fromEdge'),
            t.emit('progress', a)
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: s, slidesEl: i, activeIndex: a } = e,
            n = e.virtual && s.virtual.enabled,
            r = e => C(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0]
          let l
          if (
            (t.forEach(e => {
              e.classList.remove(
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
              )
            }),
            n)
          )
            if (s.loop) {
              let t = a - e.virtual.slidesBefore
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (l = r(`[data-swiper-slide-index="${t}"]`))
            } else l = r(`[data-swiper-slide-index="${a}"]`)
          else l = t[a]
          if (l) {
            l.classList.add(s.slideActiveClass)
            let e = P(l, `.${s.slideClass}, swiper-slide`)[0]
            s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass)
            let i = L(l, `.${s.slideClass}, swiper-slide`)[0]
            s.loop, i && i.classList.add(s.slidePrevClass)
          }
          e.emitSlidesClasses()
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: a,
              activeIndex: n,
              realIndex: r,
              snapIndex: l,
            } = t
          let o,
            d = e
          const c = e => {
            let s = e - t.virtual.slidesBefore
            return (
              s < 0 && (s = t.virtual.slides.length + s),
              s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
              s
            )
          }
          if (
            (void 0 === d &&
              (d = (function (e) {
                const { slidesGrid: t, params: s } = e,
                  i = e.rtlTranslate ? e.translate : -e.translate
                let a
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (a = e)
                      : i >= t[e] && i < t[e + 1] && (a = e + 1)
                    : i >= t[e] && (a = e)
                return (
                  s.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a
                )
              })(t)),
            i.indexOf(s) >= 0)
          )
            o = i.indexOf(s)
          else {
            const e = Math.min(a.slidesPerGroupSkip, d)
            o = e + Math.floor((d - e) / a.slidesPerGroup)
          }
          if ((o >= i.length && (o = i.length - 1), d === n))
            return (
              o !== l && ((t.snapIndex = o), t.emit('snapIndexChange')),
              void (
                t.params.loop &&
                t.virtual &&
                t.params.virtual.enabled &&
                (t.realIndex = c(d))
              )
            )
          let p
          ;(p =
            t.virtual && a.virtual.enabled && a.loop
              ? c(d)
              : t.slides[d]
              ? parseInt(
                  t.slides[d].getAttribute('data-swiper-slide-index') || d,
                  10
                )
              : d),
            Object.assign(t, {
              previousSnapIndex: l,
              snapIndex: o,
              previousRealIndex: r,
              realIndex: p,
              previousIndex: n,
              activeIndex: d,
            }),
            t.initialized && H(t),
            t.emit('activeIndexChange'),
            t.emit('snapIndexChange'),
            r !== p && t.emit('realIndexChange'),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit('slideChange')
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = e.closest(`.${s.slideClass}, swiper-slide`)
          let a,
            n = !1
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                ;(n = !0), (a = e)
                break
              }
          if (!i || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0)
          ;(t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  i.getAttribute('data-swiper-slide-index'),
                  10
                ))
              : (t.clickedIndex = a),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide()
        },
      },
      translate: {
        getTranslate: function (e = this.isHorizontal() ? 'x' : 'y') {
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            wrapperEl: a,
          } = this
          if (t.virtualTranslate) return s ? -i : i
          if (t.cssMode) return i
          let n = b(a, e)
          return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0
        },
        setTranslate: function (e, t) {
          const s = this,
            { rtlTranslate: i, params: a, wrapperEl: n, progress: r } = s
          let l,
            o = 0,
            d = 0
          s.isHorizontal() ? (o = i ? -e : e) : (d = e),
            a.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? o : d),
            a.cssMode
              ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  s.isHorizontal() ? -o : -d)
              : a.virtualTranslate ||
                (s.isHorizontal()
                  ? (o -= s.cssOverflowAdjustment())
                  : (d -= s.cssOverflowAdjustment()),
                (n.style.transform = `translate3d(${o}px, ${d}px, 0px)`))
          const c = s.maxTranslate() - s.minTranslate()
          ;(l = 0 === c ? 0 : (e - s.minTranslate()) / c),
            l !== r && s.updateProgress(e),
            s.emit('setTranslate', s.translate, t)
        },
        minTranslate: function () {
          return -this.snapGrid[0]
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          s = !0,
          i = !0,
          a
        ) {
          const n = this,
            { params: r, wrapperEl: l } = n
          if (n.animating && r.preventInteractionOnTransition) return !1
          const o = n.minTranslate(),
            d = n.maxTranslate()
          let c
          if (
            ((c = i && e > o ? o : i && e < d ? d : e),
            n.updateProgress(c),
            r.cssMode)
          ) {
            const e = n.isHorizontal()
            if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c
            else {
              if (!n.support.smoothScroll)
                return (
                  y({
                    swiper: n,
                    targetPosition: -c,
                    side: e ? 'left' : 'top',
                  }),
                  !0
                )
              l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' })
            }
            return !0
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(c),
                s &&
                  (n.emit('beforeTransitionStart', t, a),
                  n.emit('transitionEnd')))
              : (n.setTransition(t),
                n.setTranslate(c),
                s &&
                  (n.emit('beforeTransitionStart', t, a),
                  n.emit('transitionStart')),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.wrapperEl.removeEventListener(
                          'transitionend',
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        s && n.emit('transitionEnd'))
                    }),
                  n.wrapperEl.addEventListener(
                    'transitionend',
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          )
        },
      },
      transition: {
        setTransition: function (e, t) {
          const s = this
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
            s.emit('setTransition', e, t)
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            j({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }))
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s
          ;(s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              j({ swiper: s, runCallbacks: e, direction: t, step: 'End' }))
        },
      },
      slide: {
        slideTo: function (e = 0, t = this.params.speed, s = !0, i, a) {
          'string' == typeof e && (e = parseInt(e, 10))
          const n = this
          let r = e
          r < 0 && (r = 0)
          const {
            params: l,
            snapGrid: o,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: m,
            enabled: f,
          } = n
          if (
            (n.animating && l.preventInteractionOnTransition) ||
            (!f && !i && !a)
          )
            return !1
          const h = Math.min(n.params.slidesPerGroupSkip, r)
          let v = h + Math.floor((r - h) / n.params.slidesPerGroup)
          v >= o.length && (v = o.length - 1)
          const g = -o[v]
          if (l.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * g),
                s = Math.floor(100 * d[e]),
                i = Math.floor(100 * d[e + 1])
              void 0 !== d[e + 1]
                ? t >= s && t < i - (i - s) / 2
                  ? (r = e)
                  : t >= s && t < i && (r = e + 1)
                : t >= s && (r = e)
            }
          if (n.initialized && r !== p) {
            if (!n.allowSlideNext && g < n.translate && g < n.minTranslate())
              return !1
            if (
              !n.allowSlidePrev &&
              g > n.translate &&
              g > n.maxTranslate() &&
              (p || 0) !== r
            )
              return !1
          }
          let w
          if (
            (r !== (c || 0) && s && n.emit('beforeSlideChangeStart'),
            n.updateProgress(g),
            (w = r > p ? 'next' : r < p ? 'prev' : 'reset'),
            (u && -g === n.translate) || (!u && g === n.translate))
          )
            return (
              n.updateActiveIndex(r),
              l.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              'slide' !== l.effect && n.setTranslate(g),
              'reset' !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)),
              !1
            )
          if (l.cssMode) {
            const e = n.isHorizontal(),
              s = u ? g : -g
            if (0 === t) {
              const t = n.virtual && n.params.virtual.enabled
              t &&
                ((n.wrapperEl.style.scrollSnapType = 'none'),
                (n._immediateVirtual = !0)),
                t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                  ? ((n._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      m[e ? 'scrollLeft' : 'scrollTop'] = s
                    }))
                  : (m[e ? 'scrollLeft' : 'scrollTop'] = s),
                t &&
                  requestAnimationFrame(() => {
                    ;(n.wrapperEl.style.scrollSnapType = ''),
                      (n._immediateVirtual = !1)
                  })
            } else {
              if (!n.support.smoothScroll)
                return (
                  y({ swiper: n, targetPosition: s, side: e ? 'left' : 'top' }),
                  !0
                )
              m.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' })
            }
            return !0
          }
          return (
            n.setTransition(t),
            n.setTranslate(g),
            n.updateActiveIndex(r),
            n.updateSlidesClasses(),
            n.emit('beforeTransitionStart', t, i),
            n.transitionStart(s, w),
            0 === t
              ? n.transitionEnd(s, w)
              : n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        'transitionend',
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(s, w))
                  }),
                n.wrapperEl.addEventListener(
                  'transitionend',
                  n.onSlideToWrapperTransitionEnd
                )),
            !0
          )
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
          if ('string' == typeof e) {
            e = parseInt(e, 10)
          }
          const a = this
          let n = e
          return (
            a.params.loop &&
              (a.virtual && a.params.virtual.enabled
                ? (n += a.virtual.slidesBefore)
                : (n = a.getSlideIndexByData(n))),
            a.slideTo(n, t, s, i)
          )
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const i = this,
            { enabled: a, params: n, animating: r } = i
          if (!a) return i
          let l = n.slidesPerGroup
          'auto' === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            (l = Math.max(i.slidesPerViewDynamic('current', !0), 1))
          const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l,
            d = i.virtual && n.virtual.enabled
          if (n.loop) {
            if (r && !d && n.loopPreventsSliding) return !1
            i.loopFix({ direction: 'next' }),
              (i._clientLeft = i.wrapperEl.clientLeft)
          }
          return n.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + o, e, t, s)
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const i = this,
            {
              params: a,
              snapGrid: n,
              slidesGrid: r,
              rtlTranslate: l,
              enabled: o,
              animating: d,
            } = i
          if (!o) return i
          const c = i.virtual && a.virtual.enabled
          if (a.loop) {
            if (d && !c && a.loopPreventsSliding) return !1
            i.loopFix({ direction: 'prev' }),
              (i._clientLeft = i.wrapperEl.clientLeft)
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
          }
          const u = p(l ? i.translate : -i.translate),
            m = n.map(e => p(e))
          let f = n[m.indexOf(u) - 1]
          if (void 0 === f && a.cssMode) {
            let e
            n.forEach((t, s) => {
              u >= t && (e = s)
            }),
              void 0 !== e && (f = n[e > 0 ? e - 1 : e])
          }
          let h = 0
          if (
            (void 0 !== f &&
              ((h = r.indexOf(f)),
              h < 0 && (h = i.activeIndex - 1),
              'auto' === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic('previous', !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && i.isBeginning)
          ) {
            const a =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1
            return i.slideTo(a, e, t, s)
          }
          return i.slideTo(h, e, t, s)
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
          const a = this
          let n = a.activeIndex
          const r = Math.min(a.params.slidesPerGroupSkip, n),
            l = r + Math.floor((n - r) / a.params.slidesPerGroup),
            o = a.rtlTranslate ? a.translate : -a.translate
          if (o >= a.snapGrid[l]) {
            const e = a.snapGrid[l]
            o - e > (a.snapGrid[l + 1] - e) * i &&
              (n += a.params.slidesPerGroup)
          } else {
            const e = a.snapGrid[l - 1]
            o - e <= (a.snapGrid[l] - e) * i && (n -= a.params.slidesPerGroup)
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, a.slidesGrid.length - 1)),
            a.slideTo(n, e, t, s)
          )
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, slidesEl: s } = e,
            i =
              'auto' === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView
          let a,
            n = e.clickedIndex
          const r = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
          if (t.loop) {
            if (e.animating) return
            ;(a = parseInt(
              e.clickedSlide.getAttribute('data-swiper-slide-index'),
              10
            )),
              t.centeredSlides
                ? n < e.loopedSlides - i / 2 ||
                  n > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (n = e.getSlideIndex(
                      C(s, `${r}[data-swiper-slide-index="${a}"]`)[0]
                    )),
                    g(() => {
                      e.slideTo(n)
                    }))
                  : e.slideTo(n)
                : n > e.slides.length - i
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    C(s, `${r}[data-swiper-slide-index="${a}"]`)[0]
                  )),
                  g(() => {
                    e.slideTo(n)
                  }))
                : e.slideTo(n)
          } else e.slideTo(n)
        },
      },
      loop: {
        loopCreate: function (e) {
          const t = this,
            { params: s, slidesEl: i } = t
          if (!s.loop || (t.virtual && t.params.virtual.enabled)) return
          C(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute('data-swiper-slide-index', t)
          }),
            t.loopFix({
              slideRealIndex: e,
              direction: s.centeredSlides ? void 0 : 'next',
            })
        },
        loopFix: function ({
          slideRealIndex: e,
          slideTo: t = !0,
          direction: s,
          setTranslate: i,
          activeSlideIndex: a,
          byController: n,
          byMousewheel: r,
        } = {}) {
          const l = this
          if (!l.params.loop) return
          l.emit('beforeLoopFix')
          const {
            slides: o,
            allowSlidePrev: d,
            allowSlideNext: c,
            slidesEl: p,
            params: u,
          } = l
          if (
            ((l.allowSlidePrev = !0),
            (l.allowSlideNext = !0),
            l.virtual && u.virtual.enabled)
          )
            return (
              t &&
                (u.centeredSlides || 0 !== l.snapIndex
                  ? u.centeredSlides && l.snapIndex < u.slidesPerView
                    ? l.slideTo(
                        l.virtual.slides.length + l.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : l.snapIndex === l.snapGrid.length - 1 &&
                      l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                  : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
              (l.allowSlidePrev = d),
              (l.allowSlideNext = c),
              void l.emit('loopFix')
            )
          const m =
            'auto' === u.slidesPerView
              ? l.slidesPerViewDynamic()
              : Math.ceil(parseFloat(u.slidesPerView, 10))
          let f = u.loopedSlides || m
          f % u.slidesPerGroup != 0 &&
            (f += u.slidesPerGroup - (f % u.slidesPerGroup)),
            (l.loopedSlides = f)
          const h = [],
            v = []
          let g = l.activeIndex
          void 0 === a
            ? (a = l.getSlideIndex(
                l.slides.filter(e =>
                  e.classList.contains(u.slideActiveClass)
                )[0]
              ))
            : (g = a)
          const w = 'next' === s || !s,
            b = 'prev' === s || !s
          let S = 0,
            E = 0
          if (a < f) {
            S = Math.max(f - a, u.slidesPerGroup)
            for (let e = 0; e < f - a; e += 1) {
              const t = e - Math.floor(e / o.length) * o.length
              h.push(o.length - t - 1)
            }
          } else if (a > l.slides.length - 2 * f) {
            E = Math.max(a - (l.slides.length - 2 * f), u.slidesPerGroup)
            for (let e = 0; e < E; e += 1) {
              const t = e - Math.floor(e / o.length) * o.length
              v.push(t)
            }
          }
          if (
            (b &&
              h.forEach(e => {
                p.prepend(l.slides[e])
              }),
            w &&
              v.forEach(e => {
                p.append(l.slides[e])
              }),
            l.recalcSlides(),
            'auto' === u.slidesPerView && l.updateSlides(),
            u.watchSlidesProgress && l.updateSlidesOffset(),
            t)
          )
            if (h.length > 0 && b)
              if (void 0 === e) {
                const e = l.slidesGrid[g],
                  t = l.slidesGrid[g + S] - e
                r
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(g + S, 0, !1, !0),
                    i &&
                      (l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t))
              } else i && l.slideToLoop(e, 0, !1, !0)
            else if (v.length > 0 && w)
              if (void 0 === e) {
                const e = l.slidesGrid[g],
                  t = l.slidesGrid[g - E] - e
                r
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(g - E, 0, !1, !0),
                    i &&
                      (l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t))
              } else l.slideToLoop(e, 0, !1, !0)
          if (
            ((l.allowSlidePrev = d),
            (l.allowSlideNext = c),
            l.controller && l.controller.control && !n)
          ) {
            const t = {
              slideRealIndex: e,
              slideTo: !1,
              direction: s,
              setTranslate: i,
              activeSlideIndex: a,
              byController: !0,
            }
            Array.isArray(l.controller.control)
              ? l.controller.control.forEach(e => {
                  !e.destroyed && e.params.loop && e.loopFix(t)
                })
              : l.controller.control instanceof l.constructor &&
                l.controller.control.params.loop &&
                l.controller.control.loopFix(t)
          }
          l.emit('loopFix')
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: s } = e
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
          e.recalcSlides()
          const i = []
          e.slides.forEach(e => {
            const t =
              void 0 === e.swiperSlideIndex
                ? 1 * e.getAttribute('data-swiper-slide-index')
                : e.swiperSlideIndex
            i[t] = e
          }),
            e.slides.forEach(e => {
              e.removeAttribute('data-swiper-slide-index')
            }),
            i.forEach(e => {
              s.append(e)
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0)
        },
      },
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return
          const s =
            'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl
          t.isElement && (t.__preventObserver__ = !0),
            (s.style.cursor = 'move'),
            (s.style.cursor = e ? 'grabbing' : 'grab'),
            t.isElement &&
              requestAnimationFrame(() => {
                t.__preventObserver__ = !1
              })
        },
        unsetGrabCursor: function () {
          const e = this
          ;(e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e.isElement && (e.__preventObserver__ = !0),
            (e[
              'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = ''),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1
              }))
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = m(),
            { params: s } = e
          ;(e.onTouchStart = R.bind(e)),
            (e.onTouchMove = q.bind(e)),
            (e.onTouchEnd = W.bind(e)),
            s.cssMode && (e.onScroll = U.bind(e)),
            (e.onClick = X.bind(e)),
            (e.onLoad = K.bind(e)),
            J || (t.addEventListener('touchstart', Q), (J = !0)),
            Z(e, 'on')
        },
        detachEvents: function () {
          Z(this, 'off')
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: a } = e,
            n = i.breakpoints
          if (!n || (n && 0 === Object.keys(n).length)) return
          const r = e.getBreakpoint(n, e.params.breakpointsBase, e.el)
          if (!r || e.currentBreakpoint === r) return
          const l = (r in n ? n[r] : void 0) || e.originalParams,
            o = ee(e, i),
            d = ee(e, l),
            c = i.enabled
          o && !d
            ? (a.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !o &&
              d &&
              (a.classList.add(`${i.containerModifierClass}grid`),
              ((l.grid.fill && 'column' === l.grid.fill) ||
                (!l.grid.fill && 'column' === i.grid.fill)) &&
                a.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ['navigation', 'pagination', 'scrollbar'].forEach(t => {
              const s = i[t] && i[t].enabled,
                a = l[t] && l[t].enabled
              s && !a && e[t].disable(), !s && a && e[t].enable()
            })
          const p = l.direction && l.direction !== i.direction,
            u = i.loop && (l.slidesPerView !== i.slidesPerView || p)
          p && s && e.changeDirection(), E(e.params, l)
          const m = e.params.enabled
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !m ? e.disable() : !c && m && e.enable(),
            (e.currentBreakpoint = r),
            e.emit('_beforeBreakpoint', l),
            u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit('breakpoint', l)
        },
        getBreakpoint: function (e, t = 'window', s) {
          if (!e || ('container' === t && !s)) return
          let i = !1
          const a = h(),
            n = 'window' === t ? a.innerHeight : s.clientHeight,
            r = Object.keys(e).map(e => {
              if ('string' == typeof e && 0 === e.indexOf('@')) {
                const t = parseFloat(e.substr(1))
                return { value: n * t, point: e }
              }
              return { value: e, point: e }
            })
          r.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10))
          for (let e = 0; e < r.length; e += 1) {
            const { point: n, value: l } = r[e]
            'window' === t
              ? a.matchMedia(`(min-width: ${l}px)`).matches && (i = n)
              : l <= s.clientWidth && (i = n)
          }
          return i || 'max'
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i
            e.isLocked = e.size > s
          } else e.isLocked = 1 === e.snapGrid.length
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: a, device: n } = e,
            r = (function (e, t) {
              const s = []
              return (
                e.forEach(e => {
                  'object' == typeof e
                    ? Object.keys(e).forEach(i => {
                        e[i] && s.push(t + i)
                      })
                    : 'string' == typeof e && s.push(t + e)
                }),
                s
              )
            })(
              [
                'initialized',
                s.direction,
                { 'free-mode': e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  'grid-column':
                    s.grid && s.grid.rows > 1 && 'column' === s.grid.fill,
                },
                { android: n.android },
                { ios: n.ios },
                { 'css-mode': s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { 'watch-progress': s.watchSlidesProgress },
              ],
              s.containerModifierClass
            )
          t.push(...r), a.classList.add(...t), e.emitContainerClasses()
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this
          e.classList.remove(...t), this.emitContainerClasses()
        },
      },
    },
    ae = {}
  class ne {
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        i = I(C(t, `.${s.slideClass}, swiper-slide`)[0])
      return I(e) - i
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          t => 1 * t.getAttribute('data-swiper-slide-index') === e
        )[0]
      )
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this
      this.slides = C(e, `.${t.slideClass}, swiper-slide`)
    }
    enable() {
      const e = this
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit('enable'))
    }
    disable() {
      const e = this
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit('disable'))
    }
    setProgress(e, t) {
      const s = this
      e = Math.min(Math.max(e, 0), 1)
      const i = s.minTranslate(),
        a = (s.maxTranslate() - i) * e + i
      s.translateTo(a, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses()
    }
    emitContainerClasses() {
      const e = this
      if (!e.params._emitClasses || !e.el) return
      const t = e.el.className
        .split(' ')
        .filter(
          t =>
            0 === t.indexOf('swiper') ||
            0 === t.indexOf(e.params.containerModifierClass)
        )
      e.emit('_containerClasses', t.join(' '))
    }
    getSlideClasses(e) {
      const t = this
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter(
              e =>
                0 === e.indexOf('swiper-slide') ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(' ')
    }
    emitSlidesClasses() {
      const e = this
      if (!e.params._emitClasses || !e.el) return
      const t = []
      e.slides.forEach(s => {
        const i = e.getSlideClasses(s)
        t.push({ slideEl: s, classNames: i }), e.emit('_slideClass', s, i)
      }),
        e.emit('_slideClasses', t)
    }
    slidesPerViewDynamic(e = 'current', t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: a,
        slidesSizesGrid: n,
        size: r,
        activeIndex: l,
      } = this
      let o = 1
      if (s.centeredSlides) {
        let e,
          t = i[l].swiperSlideSize
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0))
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > r && (e = !0))
      } else if ('current' === e)
        for (let e = l + 1; e < i.length; e += 1) {
          ;(t ? a[e] + n[e] - a[l] < r : a[e] - a[l] < r) && (o += 1)
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          a[l] - a[e] < r && (o += 1)
        }
      return o
    }
    update() {
      const e = this
      if (!e || e.destroyed) return
      const { snapGrid: t, params: s } = e
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate())
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
      }
      let a
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
          t.complete && F(e, t)
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled)
      )
        i(), e.params.autoHeight && e.updateAutoHeight()
      else {
        if (
          ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
        ) {
          const t =
            e.virtual && e.params.virtual.enabled ? e.virtual.slides : e.slides
          a = e.slideTo(t.length - 1, 0, !1, !0)
        } else a = e.slideTo(e.activeIndex, 0, !1, !0)
        a || i()
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update')
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction
      return (
        e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
        e === i ||
          ('horizontal' !== e && 'vertical' !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach(t => {
            'vertical' === e ? (t.style.width = '') : (t.style.height = '')
          }),
          s.emit('changeDirection'),
          t && s.update()),
        s
      )
    }
    changeLanguageDirection(e) {
      const t = this
      ;(t.rtl && 'rtl' === e) ||
        (!t.rtl && 'ltr' === e) ||
        ((t.rtl = 'rtl' === e),
        (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = 'rtl'))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = 'ltr')),
        t.update())
    }
    mount(e) {
      const t = this
      if (t.mounted) return !0
      let s = e || t.params.el
      if (('string' == typeof s && (s = document.querySelector(s)), !s))
        return !1
      ;(s.swiper = t), s.shadowEl && (t.isElement = !0)
      const i = () =>
        `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`
      let a = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i())
        }
        return C(s, i())[0]
      })()
      return (
        !a &&
          t.params.createElements &&
          ((a = M('div', t.params.wrapperClass)),
          s.append(a),
          C(s, `.${t.params.slideClass}`).forEach(e => {
            a.append(e)
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: a,
          slidesEl: t.isElement ? s : a,
          mounted: !0,
          rtl: 'rtl' === s.dir.toLowerCase() || 'rtl' === k(s, 'direction'),
          rtlTranslate:
            'horizontal' === t.params.direction &&
            ('rtl' === s.dir.toLowerCase() || 'rtl' === k(s, 'direction')),
          wrongRTL: '-webkit-box' === k(a, 'display'),
        }),
        !0
      )
    }
    init(e) {
      const t = this
      if (t.initialized) return t
      return (
        !1 === t.mount(e) ||
          (t.emit('beforeInit'),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
            e.complete
              ? F(t, e)
              : e.addEventListener('load', e => {
                  F(t, e.target)
                })
          }),
          H(t),
          (t.initialized = !0),
          H(t),
          t.emit('init'),
          t.emit('afterInit')),
        t
      )
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, el: a, wrapperEl: n, slides: r } = s
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit('beforeDestroy'),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            a.removeAttribute('style'),
            n.removeAttribute('style'),
            r &&
              r.length &&
              r.forEach(e => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute('style'),
                  e.removeAttribute('data-swiper-slide-index')
              })),
          s.emit('destroy'),
          Object.keys(s.eventsListeners).forEach(e => {
            s.off(e)
          }),
          !1 !== e && ((s.el.swiper = null), v(s)),
          (s.destroyed = !0)),
        null
      )
    }
    static extendDefaults(e) {
      E(ae, e)
    }
    static get extendedDefaults() {
      return ae
    }
    static get defaults() {
      return te
    }
    static installModule(e) {
      ne.prototype.__modules__ || (ne.prototype.__modules__ = [])
      const t = ne.prototype.__modules__
      'function' == typeof e && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach(e => ne.installModule(e)), ne)
        : (ne.installModule(e), ne)
    }
    constructor(...e) {
      let t, s
      1 === e.length &&
      e[0].constructor &&
      'Object' === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (s = e[0])
        : ([t, s] = e),
        s || (s = {}),
        (s = E({}, s)),
        t && !s.el && (s.el = t)
      const i = m()
      if (
        s.el &&
        'string' == typeof s.el &&
        i.querySelectorAll(s.el).length > 1
      ) {
        const e = []
        return (
          i.querySelectorAll(s.el).forEach(t => {
            const i = E({}, s, { el: t })
            e.push(new ne(i))
          }),
          e
        )
      }
      const a = this
      ;(a.__swiper__ = !0),
        (a.support = B()),
        (a.device = D({ userAgent: s.userAgent })),
        (a.browser = N()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules)
      const n = {}
      a.modules.forEach(e => {
        e({
          params: s,
          swiper: a,
          extendParams: se(s, n),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        })
      })
      const r = E({}, te, n)
      return (
        (a.params = E({}, r, ae, s)),
        (a.originalParams = E({}, a.params)),
        (a.passedParams = E({}, s)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach(e => {
            a.on(e, a.params.on[e])
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === a.params.direction,
          isVertical: () => 'vertical' === a.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit('_swiper'),
        a.params.init && a.init(),
        a
      )
    }
  }
  Object.keys(ie).forEach(e => {
    Object.keys(ie[e]).forEach(t => {
      ne.prototype[t] = ie[e][t]
    })
  }),
    ne.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = h()
        let a = null,
          n = null
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s('beforeResize'), s('resize'))
          },
          l = () => {
            e && !e.destroyed && e.initialized && s('orientationchange')
          }
        t('init', () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((a = new ResizeObserver(t => {
                n = i.requestAnimationFrame(() => {
                  const { width: s, height: i } = e
                  let a = s,
                    n = i
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      ;(i && i !== e.el) ||
                        ((a = s ? s.width : (t[0] || t).inlineSize),
                        (n = s ? s.height : (t[0] || t).blockSize))
                    }
                  ),
                    (a === s && n === i) || r()
                })
              })),
              a.observe(e.el))
            : (i.addEventListener('resize', r),
              i.addEventListener('orientationchange', l))
        }),
          t('destroy', () => {
            n && i.cancelAnimationFrame(n),
              a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
              i.removeEventListener('resize', r),
              i.removeEventListener('orientationchange', l)
          })
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const a = [],
          n = h(),
          r = (t, s = {}) => {
            const r = new (n.MutationObserver || n.WebkitMutationObserver)(
              t => {
                if (e.__preventObserver__) return
                if (1 === t.length) return void i('observerUpdate', t[0])
                const s = function () {
                  i('observerUpdate', t[0])
                }
                n.requestAnimationFrame
                  ? n.requestAnimationFrame(s)
                  : n.setTimeout(s, 0)
              }
            )
            r.observe(t, {
              attributes: void 0 === s.attributes || s.attributes,
              childList: void 0 === s.childList || s.childList,
              characterData: void 0 === s.characterData || s.characterData,
            }),
              a.push(r)
          }
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s('init', () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = O(e.el)
                for (let e = 0; e < t.length; e += 1) r(t[e])
              }
              r(e.el, { childList: e.params.observeSlideChildren }),
                r(e.wrapperEl, { attributes: !1 })
            }
          }),
          s('destroy', () => {
            a.forEach(e => {
              e.disconnect()
            }),
              a.splice(0, a.length)
          })
      },
    ])
  var re = ne
  function le(e, t, s, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach(a => {
          if (!s[a] && !0 === s.auto) {
            let n = C(e.el, `.${i[a]}`)[0]
            n || ((n = M('div', i[a])), (n.className = i[a]), e.el.append(n)),
              (s[a] = n),
              (t[a] = n)
          }
        }),
      s
    )
  }
  function oe(e = '') {
    return `.${e
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  }
  function de(e) {
    const {
      effect: t,
      swiper: s,
      on: i,
      setTranslate: a,
      setTransition: n,
      overwriteParams: r,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e
    let c
    i('beforeInit', () => {
      if (s.params.effect !== t) return
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`)
      const e = r ? r() : {}
      Object.assign(s.params, e), Object.assign(s.originalParams, e)
    }),
      i('setTranslate', () => {
        s.params.effect === t && a()
      }),
      i('setTransition', (e, i) => {
        s.params.effect === t && n(i)
      }),
      i('transitionEnd', () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return
          s.slides.forEach(e => {
            e.querySelectorAll(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            ).forEach(e => e.remove())
          }),
            o()
        }
      }),
      i('virtualUpdate', () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (a(), (c = !1))
          }))
      })
  }
  function ce(e, t) {
    const s = x(t)
    return (
      s !== t &&
        ((s.style.backfaceVisibility = 'hidden'),
        (s.style['-webkit-backface-visibility'] = 'hidden')),
      s
    )
  }
  function pe({ swiper: e, duration: t, transformElements: s, allSlides: i }) {
    const { activeIndex: a } = e
    if (e.params.virtualTranslate && 0 !== t) {
      let t,
        n = !1
      ;(t = i
        ? s
        : s.filter(t => {
            const s = t.classList.contains('swiper-slide-transform')
              ? (t => {
                  if (!t.parentElement)
                    return e.slides.filter(
                      e => e.shadowEl && e.shadowEl === t.parentNode
                    )[0]
                  return t.parentElement
                })(t)
              : t
            return e.getSlideIndex(s) === a
          })),
        t.forEach(t => {
          A(t, () => {
            if (n) return
            if (!e || e.destroyed) return
            ;(n = !0), (e.animating = !1)
            const t = new window.CustomEvent('transitionend', {
              bubbles: !0,
              cancelable: !0,
            })
            e.wrapperEl.dispatchEvent(t)
          })
        })
    }
  }
  new re('.mission__line', {
    modules: [
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const a = 'swiper-pagination'
        let n
        t({
          pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${a}-bullet`,
            bulletActiveClass: `${a}-bullet-active`,
            modifierClass: `${a}-`,
            currentClass: `${a}-current`,
            totalClass: `${a}-total`,
            hiddenClass: `${a}-hidden`,
            progressbarFillClass: `${a}-progressbar-fill`,
            progressbarOppositeClass: `${a}-progressbar-opposite`,
            clickableClass: `${a}-clickable`,
            lockClass: `${a}-lock`,
            horizontalClass: `${a}-horizontal`,
            verticalClass: `${a}-vertical`,
            paginationDisabledClass: `${a}-disabled`,
          },
        }),
          (e.pagination = { el: null, bullets: [] })
        let r = 0
        const l = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e)
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
          )
        }
        function d(t, s) {
          const { bulletActiveClass: i } = e.params.pagination
          t &&
            (t = t[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
            (t.classList.add(`${i}-${s}`),
            (t = t[('prev' === s ? 'previous' : 'next') + 'ElementSibling']) &&
              t.classList.add(`${i}-${s}-${s}`))
        }
        function c(t) {
          const s = t.target.closest(oe(e.params.pagination.bulletClass))
          if (!s) return
          t.preventDefault()
          const i = I(s) * e.params.slidesPerGroup
          if (e.params.loop) {
            if (e.realIndex === i) return
            const t = e.getSlideIndexByData(i),
              s = e.getSlideIndexByData(e.realIndex)
            t > e.slides.length - e.loopedSlides &&
              e.loopFix({
                direction: t > s ? 'next' : 'prev',
                activeSlideIndex: t,
                slideTo: !1,
              }),
              e.slideToLoop(i)
          } else e.slideTo(i)
        }
        function p() {
          const t = e.rtl,
            s = e.params.pagination
          if (o()) return
          let a,
            c,
            p = e.pagination.el
          p = l(p)
          const u =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            m = e.params.loop
              ? Math.ceil(u / e.params.slidesPerGroup)
              : e.snapGrid.length
          if (
            (e.params.loop
              ? ((c = e.previousRealIndex || 0),
                (a =
                  e.params.slidesPerGroup > 1
                    ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                    : e.realIndex))
              : void 0 !== e.snapIndex
              ? ((a = e.snapIndex), (c = e.previousSnapIndex))
              : ((c = e.previousIndex || 0), (a = e.activeIndex || 0)),
            'bullets' === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets
            let l, o, u
            if (
              (s.dynamicBullets &&
                ((n = z(i[0], e.isHorizontal() ? 'width' : 'height', !0)),
                p.forEach(t => {
                  t.style[e.isHorizontal() ? 'width' : 'height'] =
                    n * (s.dynamicMainBullets + 4) + 'px'
                }),
                s.dynamicMainBullets > 1 &&
                  void 0 !== c &&
                  ((r += a - (c || 0)),
                  r > s.dynamicMainBullets - 1
                    ? (r = s.dynamicMainBullets - 1)
                    : r < 0 && (r = 0)),
                (l = Math.max(a - r, 0)),
                (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (u = (o + l) / 2)),
              i.forEach(e => {
                const t = [
                  ...[
                    '',
                    '-next',
                    '-next-next',
                    '-prev',
                    '-prev-prev',
                    '-main',
                  ].map(e => `${s.bulletActiveClass}${e}`),
                ]
                  .map(e =>
                    'string' == typeof e && e.includes(' ') ? e.split(' ') : e
                  )
                  .flat()
                e.classList.remove(...t)
              }),
              p.length > 1)
            )
              i.forEach(e => {
                const t = I(e)
                t === a && e.classList.add(...s.bulletActiveClass.split(' ')),
                  s.dynamicBullets &&
                    (t >= l &&
                      t <= o &&
                      e.classList.add(
                        ...`${s.bulletActiveClass}-main`.split(' ')
                      ),
                    t === l && d(e, 'prev'),
                    t === o && d(e, 'next'))
              })
            else {
              const e = i[a]
              if (
                (e && e.classList.add(...s.bulletActiveClass.split(' ')),
                s.dynamicBullets)
              ) {
                const e = i[l],
                  t = i[o]
                for (let e = l; e <= o; e += 1)
                  i[e] &&
                    i[e].classList.add(
                      ...`${s.bulletActiveClass}-main`.split(' ')
                    )
                d(e, 'prev'), d(t, 'next')
              }
            }
            if (s.dynamicBullets) {
              const a = Math.min(i.length, s.dynamicMainBullets + 4),
                r = (n * a - n) / 2 - u * n,
                l = t ? 'right' : 'left'
              i.forEach(t => {
                t.style[e.isHorizontal() ? l : 'top'] = `${r}px`
              })
            }
          }
          p.forEach((t, n) => {
            if (
              ('fraction' === s.type &&
                (t.querySelectorAll(oe(s.currentClass)).forEach(e => {
                  e.textContent = s.formatFractionCurrent(a + 1)
                }),
                t.querySelectorAll(oe(s.totalClass)).forEach(e => {
                  e.textContent = s.formatFractionTotal(m)
                })),
              'progressbar' === s.type)
            ) {
              let i
              i = s.progressbarOpposite
                ? e.isHorizontal()
                  ? 'vertical'
                  : 'horizontal'
                : e.isHorizontal()
                ? 'horizontal'
                : 'vertical'
              const n = (a + 1) / m
              let r = 1,
                l = 1
              'horizontal' === i ? (r = n) : (l = n),
                t.querySelectorAll(oe(s.progressbarFillClass)).forEach(t => {
                  ;(t.style.transform = `translate3d(0,0,0) scaleX(${r}) scaleY(${l})`),
                    (t.style.transitionDuration = `${e.params.speed}ms`)
                })
            }
            'custom' === s.type && s.renderCustom
              ? ((t.innerHTML = s.renderCustom(e, a + 1, m)),
                0 === n && i('paginationRender', t))
              : (0 === n && i('paginationRender', t), i('paginationUpdate', t)),
              e.params.watchOverflow &&
                e.enabled &&
                t.classList[e.isLocked ? 'add' : 'remove'](s.lockClass)
          })
        }
        function u() {
          const t = e.params.pagination
          if (o()) return
          const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length
          let a = e.pagination.el
          a = l(a)
          let n = ''
          if ('bullets' === t.type) {
            let i = e.params.loop
              ? Math.ceil(s / e.params.slidesPerGroup)
              : e.snapGrid.length
            e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s)
            for (let s = 0; s < i; s += 1)
              t.renderBullet
                ? (n += t.renderBullet.call(e, s, t.bulletClass))
                : (n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`)
          }
          'fraction' === t.type &&
            (n = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            'progressbar' === t.type &&
              (n = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
            (e.pagination.bullets = []),
            a.forEach(s => {
              'custom' !== t.type && (s.innerHTML = n || ''),
                'bullets' === t.type &&
                  e.pagination.bullets.push(
                    ...s.querySelectorAll(oe(t.bulletClass))
                  )
            }),
            'custom' !== t.type && i('paginationRender', a[0])
        }
        function m() {
          e.params.pagination = le(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: 'swiper-pagination' }
          )
          const t = e.params.pagination
          if (!t.el) return
          let s
          'string' == typeof t.el &&
            e.isElement &&
            (s = e.el.shadowRoot.querySelector(t.el)),
            s ||
              'string' != typeof t.el ||
              (s = [...document.querySelectorAll(t.el)]),
            s || (s = t.el),
            s &&
              0 !== s.length &&
              (e.params.uniqueNavElements &&
                'string' == typeof t.el &&
                Array.isArray(s) &&
                s.length > 1 &&
                ((s = [...e.el.querySelectorAll(t.el)]),
                s.length > 1 &&
                  (s = s.filter(t => O(t, '.swiper')[0] === e.el)[0])),
              Array.isArray(s) && 1 === s.length && (s = s[0]),
              Object.assign(e.pagination, { el: s }),
              (s = l(s)),
              s.forEach(s => {
                'bullets' === t.type &&
                  t.clickable &&
                  s.classList.add(t.clickableClass),
                  s.classList.add(t.modifierClass + t.type),
                  s.classList.add(
                    e.isHorizontal() ? t.horizontalClass : t.verticalClass
                  ),
                  'bullets' === t.type &&
                    t.dynamicBullets &&
                    (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (r = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  'progressbar' === t.type &&
                    t.progressbarOpposite &&
                    s.classList.add(t.progressbarOppositeClass),
                  t.clickable && s.addEventListener('click', c),
                  e.enabled || s.classList.add(t.lockClass)
              }))
        }
        function f() {
          const t = e.params.pagination
          if (o()) return
          let s = e.pagination.el
          s &&
            ((s = l(s)),
            s.forEach(s => {
              s.classList.remove(t.hiddenClass),
                s.classList.remove(t.modifierClass + t.type),
                s.classList.remove(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                t.clickable && s.removeEventListener('click', c)
            })),
            e.pagination.bullets &&
              e.pagination.bullets.forEach(e =>
                e.classList.remove(...t.bulletActiveClass.split(' '))
              )
        }
        s('changeDirection', () => {
          if (!e.pagination || !e.pagination.el) return
          const t = e.params.pagination
          let { el: s } = e.pagination
          ;(s = l(s)),
            s.forEach(s => {
              s.classList.remove(t.horizontalClass, t.verticalClass),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                )
            })
        }),
          s('init', () => {
            !1 === e.params.pagination.enabled ? h() : (m(), u(), p())
          }),
          s('activeIndexChange', () => {
            void 0 === e.snapIndex && p()
          }),
          s('snapIndexChange', () => {
            p()
          }),
          s('snapGridLengthChange', () => {
            u(), p()
          }),
          s('destroy', () => {
            f()
          }),
          s('enable disable', () => {
            let { el: t } = e.pagination
            t &&
              ((t = l(t)),
              t.forEach(t =>
                t.classList[e.enabled ? 'remove' : 'add'](
                  e.params.pagination.lockClass
                )
              ))
          }),
          s('lock unlock', () => {
            p()
          }),
          s('click', (t, s) => {
            const a = s.target
            let { el: n } = e.pagination
            if (
              (Array.isArray(n) || (n = [n].filter(e => !!e)),
              e.params.pagination.el &&
                e.params.pagination.hideOnClick &&
                n &&
                n.length > 0 &&
                !a.classList.contains(e.params.pagination.bulletClass))
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && a === e.navigation.nextEl) ||
                  (e.navigation.prevEl && a === e.navigation.prevEl))
              )
                return
              const t = n[0].classList.contains(e.params.pagination.hiddenClass)
              i(!0 === t ? 'paginationShow' : 'paginationHide'),
                n.forEach(t =>
                  t.classList.toggle(e.params.pagination.hiddenClass)
                )
            }
          })
        const h = () => {
          e.el.classList.add(e.params.pagination.paginationDisabledClass)
          let { el: t } = e.pagination
          t &&
            ((t = l(t)),
            t.forEach(t =>
              t.classList.add(e.params.pagination.paginationDisabledClass)
            )),
            f()
        }
        Object.assign(e.pagination, {
          enable: () => {
            e.el.classList.remove(e.params.pagination.paginationDisabledClass)
            let { el: t } = e.pagination
            t &&
              ((t = l(t)),
              t.forEach(t =>
                t.classList.remove(e.params.pagination.paginationDisabledClass)
              )),
              m(),
              u(),
              p()
          },
          disable: h,
          render: u,
          update: p,
          init: m,
          destroy: f,
        })
      },
    ],
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: { el: '.dots', clickable: !0 },
    breakpoints: {
      475: { slidesPerView: 'auto', centeredSlides: !1 },
      768: { slidesPerView: 2.3, centeredSlides: !1 },
      1280: { slidesPerView: 3.2 },
    },
  }),
    new re('.products__slider', {
      modules: [
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          t({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock',
              navigationDisabledClass: 'swiper-navigation-disabled',
            },
          }),
            (e.navigation = { nextEl: null, prevEl: null })
          const a = e => (Array.isArray(e) || (e = [e].filter(e => !!e)), e)
          function n(t) {
            let s
            return t &&
              'string' == typeof t &&
              e.isElement &&
              ((s = e.el.shadowRoot.querySelector(t)), s)
              ? s
              : (t &&
                  ('string' == typeof t &&
                    (s = [...document.querySelectorAll(t)]),
                  e.params.uniqueNavElements &&
                    'string' == typeof t &&
                    s.length > 1 &&
                    1 === e.el.querySelectorAll(t).length &&
                    (s = e.el.querySelector(t))),
                t && !s ? t : s)
          }
          function r(t, s) {
            const i = e.params.navigation
            ;(t = a(t)).forEach(t => {
              t &&
                (t.classList[s ? 'add' : 'remove'](
                  ...i.disabledClass.split(' ')
                ),
                'BUTTON' === t.tagName && (t.disabled = s),
                e.params.watchOverflow &&
                  e.enabled &&
                  t.classList[e.isLocked ? 'add' : 'remove'](i.lockClass))
            })
          }
          function l() {
            const { nextEl: t, prevEl: s } = e.navigation
            if (e.params.loop) return r(s, !1), void r(t, !1)
            r(s, e.isBeginning && !e.params.rewind),
              r(t, e.isEnd && !e.params.rewind)
          }
          function o(t) {
            t.preventDefault(),
              (!e.isBeginning || e.params.loop || e.params.rewind) &&
                (e.slidePrev(), i('navigationPrev'))
          }
          function d(t) {
            t.preventDefault(),
              (!e.isEnd || e.params.loop || e.params.rewind) &&
                (e.slideNext(), i('navigationNext'))
          }
          function c() {
            const t = e.params.navigation
            if (
              ((e.params.navigation = le(
                e,
                e.originalParams.navigation,
                e.params.navigation,
                { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
              )),
              !t.nextEl && !t.prevEl)
            )
              return
            let s = n(t.nextEl),
              i = n(t.prevEl)
            Object.assign(e.navigation, { nextEl: s, prevEl: i }),
              (s = a(s)),
              (i = a(i))
            const r = (s, i) => {
              s && s.addEventListener('click', 'next' === i ? d : o),
                !e.enabled && s && s.classList.add(...t.lockClass.split(' '))
            }
            s.forEach(e => r(e, 'next')), i.forEach(e => r(e, 'prev'))
          }
          function p() {
            let { nextEl: t, prevEl: s } = e.navigation
            ;(t = a(t)), (s = a(s))
            const i = (t, s) => {
              t.removeEventListener('click', 'next' === s ? d : o),
                t.classList.remove(
                  ...e.params.navigation.disabledClass.split(' ')
                )
            }
            t.forEach(e => i(e, 'next')), s.forEach(e => i(e, 'prev'))
          }
          s('init', () => {
            !1 === e.params.navigation.enabled ? u() : (c(), l())
          }),
            s('toEdge fromEdge lock unlock', () => {
              l()
            }),
            s('destroy', () => {
              p()
            }),
            s('enable disable', () => {
              let { nextEl: t, prevEl: s } = e.navigation
              ;(t = a(t)),
                (s = a(s)),
                [...t, ...s]
                  .filter(e => !!e)
                  .forEach(t =>
                    t.classList[e.enabled ? 'remove' : 'add'](
                      e.params.navigation.lockClass
                    )
                  )
            }),
            s('click', (t, s) => {
              let { nextEl: n, prevEl: r } = e.navigation
              ;(n = a(n)), (r = a(r))
              const l = s.target
              if (
                e.params.navigation.hideOnClick &&
                !r.includes(l) &&
                !n.includes(l)
              ) {
                if (
                  e.pagination &&
                  e.params.pagination &&
                  e.params.pagination.clickable &&
                  (e.pagination.el === l || e.pagination.el.contains(l))
                )
                  return
                let t
                n.length
                  ? (t = n[0].classList.contains(
                      e.params.navigation.hiddenClass
                    ))
                  : r.length &&
                    (t = r[0].classList.contains(
                      e.params.navigation.hiddenClass
                    )),
                  i(!0 === t ? 'navigationShow' : 'navigationHide'),
                  [...n, ...r]
                    .filter(e => !!e)
                    .forEach(t =>
                      t.classList.toggle(e.params.navigation.hiddenClass)
                    )
              }
            })
          const u = () => {
            e.el.classList.add(
              ...e.params.navigation.navigationDisabledClass.split(' ')
            ),
              p()
          }
          Object.assign(e.navigation, {
            enable: () => {
              e.el.classList.remove(
                ...e.params.navigation.navigationDisabledClass.split(' ')
              ),
                c(),
                l()
            },
            disable: u,
            update: l,
            init: c,
            destroy: p,
          })
        },
        function ({ swiper: e, extendParams: t, on: s }) {
          t({ fadeEffect: { crossFade: !1 } }),
            de({
              effect: 'fade',
              swiper: e,
              on: s,
              setTranslate: () => {
                const { slides: t } = e
                e.params.fadeEffect
                for (let s = 0; s < t.length; s += 1) {
                  const t = e.slides[s]
                  let i = -t.swiperSlideOffset
                  e.params.virtualTranslate || (i -= e.translate)
                  let a = 0
                  e.isHorizontal() || ((a = i), (i = 0))
                  const n = e.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(t.progress), 0)
                      : 1 + Math.min(Math.max(t.progress, -1), 0),
                    r = ce(0, t)
                  ;(r.style.opacity = n),
                    (r.style.transform = `translate3d(${i}px, ${a}px, 0px)`)
                }
              },
              setTransition: t => {
                const s = e.slides.map(e => x(e))
                s.forEach(e => {
                  e.style.transitionDuration = `${t}ms`
                }),
                  pe({
                    swiper: e,
                    duration: t,
                    transformElements: s,
                    allSlides: !0,
                  })
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode,
              }),
            })
        },
      ],
      effect: 'fade',
      noSwiping: !0,
      navigation: { prevEl: '.prev', nextEl: '.next' },
    })
  const ue = new IntersectionObserver(e => {
    e.forEach(e => {
      e.intersectionRatio > 0 &&
        e.target.classList.add('title-animation', e.isIntersecting)
    })
  })
  document.querySelectorAll('h1,h2, h3').forEach(e => {
    ue.observe(e)
  })
  const me = new IntersectionObserver(e => {
    e.forEach(e => {
      e.intersectionRatio > 0 &&
        e.target.classList.add('btn-animation', e.isIntersecting)
    })
  })
  document.querySelectorAll('button, a').forEach(e => {
    me.observe(e)
  })
  const fe = new IntersectionObserver(e => {
    e.forEach(e => {
      e.intersectionRatio > 0 &&
        e.target.classList.add('text-animation', e.isIntersecting)
    })
  })
  document.querySelectorAll('p').forEach(e => {
    fe.observe(e)
  })
  const he = new IntersectionObserver(e => {
    e.forEach(e => {
      e.intersectionRatio > 0 &&
        e.target.classList.add('img-animation', e.isIntersecting)
    })
  })
  document
    .querySelectorAll('img:not(.footer__logo img, .partners__image)')
    .forEach(e => {
      he.observe(e)
    })
})()
