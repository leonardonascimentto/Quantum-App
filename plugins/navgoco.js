!function(n){"use strict";var i=function(t,i,r){return this.el=t,this.$el=n(t),this.options=i,this.uuid=this.$el.attr("id")?this.$el.attr("id"):r,this.state={},this.init(),this},t;i.prototype={init:function(){var t=this,i,r;t._load();t.$el.find("ul").each(function(i){var r=n(this);r.attr("data-index",i);t.options.save&&t.state.hasOwnProperty(i)?(r.parent().addClass(t.options.openClass),r.show()):r.parent().hasClass(t.options.openClass)?(r.show(),t.state[i]=1):r.hide()});i=n("<span><\/span>").prepend(t.options.caretHtml);r=t.$el.find("li > a");t._trigger(i,!1);t._trigger(r,!0);t.$el.find("li:has(ul) > a").prepend(i)},_trigger:function(t,i){var r=this;t.on("click",function(t){var u,e,f,o;t.stopPropagation();u=i?n(this).next():n(this).parent().next();e=!1;i&&(f=n(this).attr("href"),e=void 0===f||""===f||"#"===f);(u=u.length>0?u:!1,r.options.onClickBefore.call(this,t,u),!i||u&&e)?(t.preventDefault(),r._toggle(u,u.is(":hidden")),r._save()):r.options.accordion&&(o=r.state=r._parents(n(this)),r.$el.find("ul").filter(":visible").each(function(){var t=n(this),i=t.attr("data-index");o.hasOwnProperty(i)||r._toggle(t,!1)}),r._save());r.options.onClickAfter.call(this,t,u)})},_toggle:function(t,i){var r=this,u=t.attr("data-index"),e=t.parent(),f;(r.options.onToggleBefore.call(this,t,i),i)?(e.addClass(r.options.openClass),t.slideDown(r.options.slide),r.state[u]=1,r.options.accordion)&&(f=r.state=r._parents(t),f[u]=r.state[u]=1,r.$el.find("ul").filter(":visible").each(function(){var t=n(this),i=t.attr("data-index");f.hasOwnProperty(i)||r._toggle(t,!1)})):(e.removeClass(r.options.openClass),t.slideUp(r.options.slide),r.state[u]=0);r.options.onToggleAfter.call(this,t,i)},_parents:function(t,i){var r={},u=t.parent(),f=u.parents("ul");return f.each(function(){var t=n(this),u=t.attr("data-index");return u?void(r[u]=i?t:1):!1}),r},_save:function(){var i,r;if(this.options.save){i={};for(r in this.state)1===this.state[r]&&(i[r]=1);t[this.uuid]=this.state=i;n.cookie(this.options.cookie.name,JSON.stringify(t),this.options.cookie)}},_load:function(){if(this.options.save){if(null===t){var i=n.cookie(this.options.cookie.name);t=i?JSON.parse(i):{}}this.state=t.hasOwnProperty(this.uuid)?t[this.uuid]:{}}},toggle:function(t){var i=this,s=arguments.length,u,r,c,f,e,h,o;if(1>=s)i.$el.find("ul").each(function(){var r=n(this);i._toggle(r,t)});else{for(r={},c=Array.prototype.slice.call(arguments,1),s--,f=0;s>f;f++)if(u=c[f],e=i.$el.find('ul[data-index="'+u+'"]').first(),e&&(r[u]=e,t)){h=i._parents(e,!0);for(o in h)r.hasOwnProperty(o)||(r[o]=h[o])}for(u in r)i._toggle(r[u],t)}i._save()},destroy:function(){n.removeData(this.$el);this.$el.find("li:has(ul) > a").unbind("click");this.$el.find("li:has(ul) > a > span").unbind("click")}};n.fn.navgoco=function(t){if("string"==typeof t&&"_"!==t.charAt(0)&&"init"!==t)var r=!0,u=Array.prototype.slice.call(arguments,1);else t=n.extend({},n.fn.navgoco.defaults,t||{}),n.cookie||(t.save=!1);return this.each(function(f){var o=n(this),e=o.data("navgoco");e||(e=new i(this,r?n.fn.navgoco.defaults:t,f),o.data("navgoco",e));r&&e[t].apply(e,u)})};t=null;n.fn.navgoco.defaults={caretHtml:"",accordion:!1,openClass:"open",save:!0,cookie:{name:"navgoco",expires:!1,path:"/"},slide:{duration:400,easing:"swing"},onClickBefore:n.noop,onClickAfter:n.noop,onToggleBefore:n.noop,onToggleAfter:n.noop}}(jQuery)