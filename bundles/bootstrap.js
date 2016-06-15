if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (n) { "use strict"; var t = n.fn.jquery.split(" ")[0].split("."); if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"); }(jQuery); +function (n) { "use strict"; function t() { var i = document.createElement("bootstrap"), t = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, n; for (n in t) if (void 0 !== i.style[n]) return { end: t[n] }; return !1 } n.fn.emulateTransitionEnd = function (t) { var i = !1, u = this, r; n(this).one("bsTransitionEnd", function () { i = !0 }); return r = function () { i || n(u).trigger(n.support.transition.end) }, setTimeout(r, t), this }; n(function () { n.support.transition = t(); n.support.transition && (n.event.special.bsTransitionEnd = { bindType: n.support.transition.end, delegateType: n.support.transition.end, handle: function (t) { if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } }) }) }(jQuery); +function (n) { "use strict"; function u(i) { return this.each(function () { var r = n(this), u = r.data("bs.alert"); u || r.data("bs.alert", u = new t(this)); "string" == typeof i && u[i].call(r) }) } var i = '[data-dismiss="alert"]', t = function (t) { n(t).on("click", i, this.close) }, r; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 150; t.prototype.close = function (i) { function e() { r.detach().trigger("closed.bs.alert").remove() } var f = n(this), u = f.attr("data-target"), r; u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")); r = n(u); i && i.preventDefault(); r.length || (r = f.closest(".alert")); r.trigger(i = n.Event("close.bs.alert")); i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e()) }; r = n.fn.alert; n.fn.alert = u; n.fn.alert.Constructor = t; n.fn.alert.noConflict = function () { return n.fn.alert = r, this }; n(document).on("click.bs.alert.data-api", i, t.prototype.close) }(jQuery); +function (n) { "use strict"; function i(i) { return this.each(function () { var u = n(this), r = u.data("bs.button"), f = "object" == typeof i && i; r || u.data("bs.button", r = new t(this, f)); "toggle" == i ? r.toggle() : i && r.setState(i) }) } var t = function (i, r) { this.$element = n(i); this.options = n.extend({}, t.DEFAULTS, r); this.isLoading = !1 }, r; t.VERSION = "3.3.2"; t.DEFAULTS = { loadingText: "loading..." }; t.prototype.setState = function (t) { var r = "disabled", i = this.$element, f = i.is("input") ? "val" : "html", u = i.data(); t += "Text"; null == u.resetText && i.data("resetText", i[f]()); setTimeout(n.proxy(function () { i[f](null == u[t] ? this.options[t] : u[t]); "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r)) }, this), 0) }; t.prototype.toggle = function () { var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n; i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : i.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")) : this.$element.attr("aria-pressed", !this.$element.hasClass("active")); t && this.$element.toggleClass("active") }; r = n.fn.button; n.fn.button = i; n.fn.button.Constructor = t; n.fn.button.noConflict = function () { return n.fn.button = r, this }; n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) { var r = n(t.target); r.hasClass("btn") || (r = r.closest(".btn")); i.call(r, "toggle"); t.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) { n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type)) }) }(jQuery); +function (n) { "use strict"; function i(i) { return this.each(function () { var u = n(this), r = u.data("bs.carousel"), f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i), e = "string" == typeof i ? i : f.slide; r || u.data("bs.carousel", r = new t(this, f)); "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle() }) } var t = function (t, i) { this.$element = n(t); this.$indicators = this.$element.find(".carousel-indicators"); this.options = i; this.paused = this.sliding = this.interval = this.$active = this.$items = null; this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this)); "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this)) }, u, r; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 600; t.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }; t.prototype.keydown = function (n) { if (!/input|textarea/i.test(n.target.tagName)) { switch (n.which) { case 37: this.prev(); break; case 39: this.next(); break; default: return } n.preventDefault() } }; t.prototype.cycle = function (t) { return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this }; t.prototype.getItemIndex = function (n) { return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active) }; t.prototype.getItemForDirection = function (n, t) { var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u; return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u)) }; t.prototype.to = function (n) { var i = this, t = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(n > this.$items.length - 1) && !(0 > n)) return this.sliding ? this.$element.one("slid.bs.carousel", function () { i.to(n) }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n)) }; t.prototype.pause = function (t) { return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }; t.prototype.next = function () { if (!this.sliding) return this.slide("next") }; t.prototype.prev = function () { if (!this.sliding) return this.slide("prev") }; t.prototype.slide = function (i, r) { var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c; return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", { relatedTarget: o, direction: f }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", { relatedTarget: o, direction: f }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function () { u.removeClass([i, f].join(" ")).addClass("active"); e.removeClass(["active", f].join(" ")); a.sliding = !1; setTimeout(function () { a.$element.trigger(c) }, 0) }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0) }; u = n.fn.carousel; n.fn.carousel = i; n.fn.carousel.Constructor = t; n.fn.carousel.noConflict = function () { return n.fn.carousel = u, this }; r = function (t) { var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f; u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault()) }; n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r); n(window).on("load", function () { n('[data-ride="carousel"]').each(function () { var t = n(this); i.call(t, t.data()) }) }) }(jQuery); +function (n) { "use strict"; function r(t) { var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""); return n(r) } function i(i) { return this.each(function () { var u = n(this), r = u.data("bs.collapse"), f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i); !r && f.toggle && "show" == i && (f.toggle = !1); r || u.data("bs.collapse", r = new t(this, f)); "string" == typeof i && r[i]() }) } var t = function (i, r) { this.$element = n(i); this.options = n.extend({}, t.DEFAULTS, r); this.$trigger = n(this.options.trigger).filter('[href="#' + i.id + '"], [data-target="#' + i.id + '"]'); this.transitioning = null; this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger); this.options.toggle && this.toggle() }, u; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 350; t.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }; t.prototype.dimension = function () { var n = this.$element.hasClass("width"); return n ? "width" : "height" }; t.prototype.show = function () { var f, r, e, u, o, s; if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) { if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function () { this.$element.removeClass("collapsing").addClass("collapse in")[u](""); this.transitioning = 0; this.$element.trigger("shown.bs.collapse") }, !n.support.transition) return o.call(this); s = n.camelCase(["scroll", u].join("-")); this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s]) } }; t.prototype.hide = function () { var r, i, u; if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function () { this.transitioning = 0; this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this) }; t.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }; t.prototype.getParent = function () { return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) { var u = n(i); this.addAriaAndCollapsedClass(r(u), u) }, this)).end() }; t.prototype.addAriaAndCollapsedClass = function (n, t) { var i = n.hasClass("in"); n.attr("aria-expanded", i); t.toggleClass("collapsed", !i).attr("aria-expanded", i) }; u = n.fn.collapse; n.fn.collapse = i; n.fn.collapse.Constructor = t; n.fn.collapse.noConflict = function () { return n.fn.collapse = u, this }; n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) { var u = n(this); u.attr("data-target") || t.preventDefault(); var f = r(u), e = f.data("bs.collapse"), o = e ? "toggle" : n.extend({}, u.data(), { trigger: this }); i.call(f, o) }) }(jQuery); +function (n) { "use strict"; function r(t) { t && 3 === t.which || (n(o).remove(), n(i).each(function () { var r = n(this), i = u(r), f = { relatedTarget: this }; i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f))) })) } function u(t) { var i = t.attr("data-target"), r; return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent() } function e(i) { return this.each(function () { var r = n(this), u = r.data("bs.dropdown"); u || r.data("bs.dropdown", u = new t(this)); "string" == typeof i && u[i].call(r) }) } var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function (t) { n(t).on("click.bs.dropdown", this.toggle) }, f; t.VERSION = "3.3.2"; t.prototype.toggle = function (t) { var f = n(this), i, o, e; if (!f.is(".disabled, :disabled")) { if (i = u(f), o = i.hasClass("open"), r(), !o) { if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), e = { relatedTarget: this }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return; f.trigger("focus").attr("aria-expanded", "true"); i.toggleClass("open").trigger("shown.bs.dropdown", e) } return !1 } }; t.prototype.keydown = function (t) { var e, o, s, h, f, r; if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) { if (o = u(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click"); h = " li:not(.divider):visible a"; f = o.find('[role="menu"]' + h + ', [role="listbox"]' + h); f.length && (r = f.index(t.target), 38 == t.which && r > 0 && r--, 40 == t.which && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus")) } }; f = n.fn.dropdown; n.fn.dropdown = e; n.fn.dropdown.Constructor = t; n.fn.dropdown.noConflict = function () { return n.fn.dropdown = f, this }; n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function (n) { n.stopPropagation() }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', t.prototype.keydown) }(jQuery); +function (n) { "use strict"; function i(i, r) { return this.each(function () { var f = n(this), u = f.data("bs.modal"), e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i); u || f.data("bs.modal", u = new t(this, e)); "string" == typeof i ? u[i](r) : e.show && u.show(r) }) } var t = function (t, i) { this.options = i; this.$body = n(document.body); this.$element = n(t); this.$backdrop = this.isShown = null; this.scrollbarWidth = 0; this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }, r; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 300; t.BACKDROP_TRANSITION_DURATION = 150; t.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }; t.prototype.toggle = function (n) { return this.isShown ? this.hide() : this.show(n) }; t.prototype.show = function (i) { var r = this, u = n.Event("show.bs.modal", { relatedTarget: i }); this.$element.trigger(u); this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function () { var f = n.support.transition && r.$element.hasClass("fade"), u; r.$element.parent().length || r.$element.appendTo(r.$body); r.$element.show().scrollTop(0); r.options.backdrop && r.adjustBackdrop(); r.adjustDialog(); f && r.$element[0].offsetWidth; r.$element.addClass("in").attr("aria-hidden", !1); r.enforceFocus(); u = n.Event("shown.bs.modal", { relatedTarget: i }); f ? r.$element.find(".modal-dialog").one("bsTransitionEnd", function () { r.$element.trigger("focus").trigger(u) }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u) })) }; t.prototype.hide = function (i) { i && i.preventDefault(); i = n.Event("hide.bs.modal"); this.$element.trigger(i); this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal()) }; t.prototype.enforceFocus = function () { n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) { this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus") }, this)) }; t.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) { 27 == n.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }; t.prototype.resize = function () { this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal") }; t.prototype.hideModal = function () { var n = this; this.$element.hide(); this.backdrop(function () { n.$body.removeClass("modal-open"); n.resetAdjustments(); n.resetScrollbar(); n.$element.trigger("hidden.bs.modal") }) }; t.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(); this.$backdrop = null }; t.prototype.backdrop = function (i) { var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u; if (this.isShown && this.options.backdrop) { if (r = n.support.transition && f, this.$backdrop = n('<div class="modal-backdrop ' + f + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", n.proxy(function (n) { n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return; r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i() } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function () { e.removeBackdrop(); i && i() }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i() }; t.prototype.handleUpdate = function () { this.options.backdrop && this.adjustBackdrop(); this.adjustDialog() }; t.prototype.adjustBackdrop = function () { this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight) }; t.prototype.adjustDialog = function () { var n = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : "" }) }; t.prototype.resetAdjustments = function () { this.$element.css({ paddingLeft: "", paddingRight: "" }) }; t.prototype.checkScrollbar = function () { this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight; this.scrollbarWidth = this.measureScrollbar() }; t.prototype.setScrollbar = function () { var n = parseInt(this.$body.css("padding-right") || 0, 10); this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth) }; t.prototype.resetScrollbar = function () { this.$body.css("padding-right", "") }; t.prototype.measureScrollbar = function () { var n = document.createElement("div"), t; return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t }; r = n.fn.modal; n.fn.modal = i; n.fn.modal.Constructor = t; n.fn.modal.noConflict = function () { return n.fn.modal = r, this }; n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) { var r = n(this), f = r.attr("href"), u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")), e = u.data("bs.modal") ? "toggle" : n.extend({ remote: !/#/.test(f) && f }, u.data(), r.data()); r.is("a") && t.preventDefault(); u.one("show.bs.modal", function (n) { n.isDefaultPrevented() || u.one("hidden.bs.modal", function () { r.is(":visible") && r.trigger("focus") }) }); i.call(u, e, this) }) }(jQuery); +function (n) { "use strict"; function r(i) { return this.each(function () { var u = n(this), r = u.data("bs.tooltip"), f = "object" == typeof i && i; (r || "destroy" != i) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]()) }) } var t = function (n, t) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null; this.init("tooltip", n, t) }, i; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 150; t.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }; t.prototype.init = function (t, i, r) { var f, e, u, o, s; for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(this.options.viewport.selector || this.options.viewport), f = this.options.trigger.split(" "), e = f.length; e--;) if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this)); else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))); this.options.selector ? this._options = n.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }; t.prototype.getDefaults = function () { return t.DEFAULTS }; t.prototype.getOptions = function (t) { return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t }; t.prototype.getDelegateOptions = function () { var t = {}, i = this.getDefaults(); return this._options && n.each(this._options, function (n, r) { i[n] != r && (t[n] = r) }), t }; t.prototype.enter = function (t) { var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type); return i && i.$tip && i.$tip.is(":visible") ? void (i.hoverState = "in") : (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }; t.prototype.leave = function (t) { var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type); return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide() }; t.prototype.show = function () { var c = n.Event("show.bs." + this.type), l, p, h; if (this.hasContent() && this.enabled) { if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return; var u = this, r = this.tip(), a = this.getUID(this.type); this.setContent(); r.attr("id", a); this.$element.attr("aria-describedby", a); this.options.animation && r.addClass("fade"); var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement, v = /\s?auto?\s?/i, y = v.test(i); y && (i = i.replace(v, "") || "top"); r.detach().css({ top: 0, left: 0, display: "block" }).addClass(i).data("bs." + this.type, this); this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element); var f = this.getPosition(), o = r[0].offsetWidth, s = r[0].offsetHeight; if (y) { var w = i, b = this.options.container ? n(this.options.container) : this.$element.parent(), e = this.getPosition(b); i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i; r.removeClass(w).addClass(i) } p = this.getCalculatedOffset(i, f, o, s); this.applyPlacement(p, i); h = function () { var n = u.hoverState; u.$element.trigger("shown.bs." + u.type); u.hoverState = null; "out" == n && u.leave(u) }; n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h() } }; t.prototype.applyPlacement = function (t, i) { var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u; isNaN(o) && (o = 0); isNaN(s) && (s = 0); t.top = t.top + o; t.left = t.left + s; n.offset.setOffset(r[0], n.extend({ using: function (n) { r.css({ top: Math.round(n.top), left: Math.round(n.left) }) } }, t), 0); r.addClass("in"); h = r[0].offsetWidth; f = r[0].offsetHeight; "top" == i && f != e && (t.top = t.top + e - f); u = this.getViewportAdjustedDelta(i, t, h, f); u.left ? t.left += u.left : t.top += u.top; var c = /top|bottom/.test(i), a = c ? 2 * u.left - l + h : 2 * u.top - e + f, v = c ? "offsetWidth" : "offsetHeight"; r.offset(t); this.replaceArrow(a, r[0][v], c) }; t.prototype.replaceArrow = function (n, t, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "") }; t.prototype.setContent = function () { var n = this.tip(), t = this.getTitle(); n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t); n.removeClass("fade in top bottom left right") }; t.prototype.hide = function (i) { function f() { "in" != r.hoverState && u.detach(); r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type); i && i() } var r = this, u = this.tip(), e = n.Event("hide.bs." + this.type); return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (u.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this) }; t.prototype.fixTitle = function () { var n = this.$element; (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "") }; t.prototype.hasContent = function () { return this.getTitle() }; t.prototype.getPosition = function (t) { t = t || this.$element; var u = t[0], r = "BODY" == u.tagName, i = u.getBoundingClientRect(); null == i.width && (i = n.extend({}, i, { width: i.right - i.left, height: i.bottom - i.top })); var f = r ? { top: 0, left: 0 } : t.offset(), e = { scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() }, o = r ? { width: n(window).width(), height: n(window).height() } : null; return n.extend({}, i, e, o, f) }; t.prototype.getCalculatedOffset = function (n, t, i, r) { return "bottom" == n ? { top: t.top + t.height, left: t.left + t.width / 2 - i / 2 } : "top" == n ? { top: t.top - r, left: t.left + t.width / 2 - i / 2 } : "left" == n ? { top: t.top + t.height / 2 - r / 2, left: t.left - i } : { top: t.top + t.height / 2 - r / 2, left: t.left + t.width } }; t.prototype.getViewportAdjustedDelta = function (n, t, i, r) { var f = { top: 0, left: 0 }, e, u, o, s, h, c; return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.width && (f.left = u.left + u.width - c)), f) : f }; t.prototype.getTitle = function () { var t = this.$element, n = this.options; return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title) }; t.prototype.getUID = function (n) { do n += ~~(1e6 * Math.random()); while (document.getElementById(n)); return n }; t.prototype.tip = function () { return this.$tip = this.$tip || n(this.options.template) }; t.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }; t.prototype.enable = function () { this.enabled = !0 }; t.prototype.disable = function () { this.enabled = !1 }; t.prototype.toggleEnabled = function () { this.enabled = !this.enabled }; t.prototype.toggle = function (t) { var i = this; t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i))); i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }; t.prototype.destroy = function () { var n = this; clearTimeout(this.timeout); this.hide(function () { n.$element.off("." + n.type).removeData("bs." + n.type) }) }; i = n.fn.tooltip; n.fn.tooltip = r; n.fn.tooltip.Constructor = t; n.fn.tooltip.noConflict = function () { return n.fn.tooltip = i, this } }(jQuery); +function (n) { "use strict"; function r(i) { return this.each(function () { var u = n(this), r = u.data("bs.popover"), f = "object" == typeof i && i; (r || "destroy" != i) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]()) }) } var t = function (n, t) { this.init("popover", n, t) }, i; if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js"); t.VERSION = "3.3.2"; t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>' }); t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype); t.prototype.constructor = t; t.prototype.getDefaults = function () { return t.DEFAULTS }; t.prototype.setContent = function () { var n = this.tip(), i = this.getTitle(), t = this.getContent(); n.find(".popover-title")[this.options.html ? "html" : "text"](i); n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t); n.removeClass("fade top bottom left right in"); n.find(".popover-title").html() || n.find(".popover-title").hide() }; t.prototype.hasContent = function () { return this.getTitle() || this.getContent() }; t.prototype.getContent = function () { var t = this.$element, n = this.options; return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content) }; t.prototype.arrow = function () { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; t.prototype.tip = function () { return this.$tip || (this.$tip = n(this.options.template)), this.$tip }; i = n.fn.popover; n.fn.popover = r; n.fn.popover.Constructor = t; n.fn.popover.noConflict = function () { return n.fn.popover = i, this } }(jQuery); +function (n) { "use strict"; function t(i, r) { var u = n.proxy(this.process, this); this.$body = n("body"); this.$scrollElement = n(n(i).is("body") ? window : i); this.options = n.extend({}, t.DEFAULTS, r); this.selector = (this.options.target || "") + " .nav li > a"; this.offsets = []; this.targets = []; this.activeTarget = null; this.scrollHeight = 0; this.$scrollElement.on("scroll.bs.scrollspy", u); this.refresh(); this.process() } function i(i) { return this.each(function () { var u = n(this), r = u.data("bs.scrollspy"), f = "object" == typeof i && i; r || u.data("bs.scrollspy", r = new t(this, f)); "string" == typeof i && r[i]() }) } t.VERSION = "3.3.2"; t.DEFAULTS = { offset: 10 }; t.prototype.getScrollHeight = function () { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }; t.prototype.refresh = function () { var i = "offset", r = 0, t; n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop()); this.offsets = []; this.targets = []; this.scrollHeight = this.getScrollHeight(); t = this; this.$body.find(this.selector).map(function () { var f = n(this), u = f.data("target") || f.attr("href"), t = /^#./.test(u) && n(u); return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null }).sort(function (n, t) { return n[0] - t[0] }).each(function () { t.offsets.push(this[0]); t.targets.push(this[1]) }) }; t.prototype.process = function () { var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget; if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n); if (u && i < t[0]) return this.activeTarget = null, this.clear(); for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n]) }; t.prototype.activate = function (t) { this.activeTarget = t; this.clear(); var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', i = n(r).parents("li").addClass("active"); i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")); i.trigger("activate.bs.scrollspy") }; t.prototype.clear = function () { n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var r = n.fn.scrollspy; n.fn.scrollspy = i; n.fn.scrollspy.Constructor = t; n.fn.scrollspy.noConflict = function () { return n.fn.scrollspy = r, this }; n(window).on("load.bs.scrollspy.data-api", function () { n('[data-spy="scroll"]').each(function () { var t = n(this); i.call(t, t.data()) }) }) }(jQuery); +function (n) { "use strict"; function r(i) { return this.each(function () { var u = n(this), r = u.data("bs.tab"); r || u.data("bs.tab", r = new t(this)); "string" == typeof i && r[i]() }) } var t = function (t) { this.element = n(t) }, u, i; t.VERSION = "3.3.2"; t.TRANSITION_DURATION = 150; t.prototype.show = function () { var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u; if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) { var r = f.find(".active:last a"), e = n.Event("hide.bs.tab", { relatedTarget: t[0] }), o = n.Event("show.bs.tab", { relatedTarget: r[0] }); (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function () { r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }); t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] }) })) } }; t.prototype.activate = function (i, r, u) { function e() { f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1); i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0); o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"); i.parent(".dropdown-menu") && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0); u && u() } var f = r.find("> .active"), o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length); f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(); f.removeClass("in") }; u = n.fn.tab; n.fn.tab = r; n.fn.tab.Constructor = t; n.fn.tab.noConflict = function () { return n.fn.tab = u, this }; i = function (t) { t.preventDefault(); r.call(n(this), "show") }; n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i) }(jQuery); +function (n) { "use strict"; function i(i) { return this.each(function () { var u = n(this), r = u.data("bs.affix"), f = "object" == typeof i && i; r || u.data("bs.affix", r = new t(this, f)); "string" == typeof i && r[i]() }) } var t = function (i, r) { this.options = n.extend({}, t.DEFAULTS, r); this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)); this.$element = n(i); this.affixed = this.unpin = this.pinnedOffset = null; this.checkPosition() }, r; t.VERSION = "3.3.2"; t.RESET = "affix affix-top affix-bottom"; t.DEFAULTS = { offset: 0, target: window }; t.prototype.getState = function (n, t, i, r) { var u = this.$target.scrollTop(), f = this.$element.offset(), e = this.$target.height(); if (null != i && "top" == this.affixed) return i > u ? "top" : !1; if ("bottom" == this.affixed) return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom"; var o = null == this.affixed, s = o ? u : f.top, h = o ? e : t; return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1 }; t.prototype.getPinnedOffset = function () { if (this.pinnedOffset) return this.pinnedOffset; this.$element.removeClass(t.RESET).addClass("affix"); var n = this.$target.scrollTop(), i = this.$element.offset(); return this.pinnedOffset = i.top - n }; t.prototype.checkPositionWithEventLoop = function () { setTimeout(n.proxy(this.checkPosition, this), 1) }; t.prototype.checkPosition = function () { var i, e, o; if (this.$element.is(":visible")) { var s = this.$element.height(), r = this.options.offset, f = r.top, u = r.bottom, h = n("body").height(); if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) { if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return; this.affixed = i; this.unpin = "bottom" == i ? this.getPinnedOffset() : null; this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix") } "bottom" == i && this.$element.offset({ top: h - s - u }) } }; r = n.fn.affix; n.fn.affix = i; n.fn.affix.Constructor = t; n.fn.affix.noConflict = function () { return n.fn.affix = r, this }; n(window).on("load", function () { n('[data-spy="affix"]').each(function () { var r = n(this), t = r.data(); t.offset = t.offset || {}; null != t.offsetBottom && (t.offset.bottom = t.offsetBottom); null != t.offsetTop && (t.offset.top = t.offsetTop); i.call(r, t) }) }) }(jQuery)