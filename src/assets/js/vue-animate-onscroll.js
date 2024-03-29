var ScrollAnimate = () => {
    const e = e => "string" == typeof e,
        t = (e, t, n = "") => e.className = `${t} ${n}`.trim();
    return {
        isInView: ({
                       top: e,
                       bottom: t
                   }) => e < (() => document.documentElement.clientHeight)() && t > 0,
        run(n, {
            value: i,
            modifiers: r
        }, {
                isUpwards: s,
                previousClassName: o = ""
            }) {
            if (!this.isInView(n.getBoundingClientRect())) return r.repeat && e(i) ? t(n, o) : void 0;
            if (e(i)) return t(n, o, i);
            if (r.repeat || (e => e.down && e.up)(i) || !((e = "", t = "") => e.trim() !== t.trim())(n.className, o)) {
                const e = s ? i.up : i.down;
                return t(n, o, e)
            }
            return (({
                         params: e,
                         isUpwards: t,
                         repeat: n
                     }) => n && (t && e.down || !t && e.up))({
                params: i,
                isUpwards: s,
                ...r
            }) ? t(n, o) : void 0
        }
    }
};
var index = {
    ScrollAnimate: ScrollAnimate,
    install(e) {
        e.directive("animate-onscroll", {
            inserted(e, t) {
                const n = ScrollAnimate(Date.now()),
                    i = e.className;
                let r = window.pageYOffset;
                window.addEventListener("scroll", function () {
                    let s = window.pageYOffset || document.documentElement.scrollTop;
                    const o = s < r;
                    n.run(e, t, {
                        isUpwards: o,
                        previousClassName: i
                    }), r = s <= 0 ? 0 : s
                }, !1)
            }
        })
    }
};
export default index;