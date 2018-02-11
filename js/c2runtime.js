'use strict';
var ba, ca, da, fa, ha, ia, ka, la, ma, na, oa, sa, ta, ua, va, z, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, G, Ha, Ia, Ja, Ka, La, M, Na, Oa, Pa, Qa, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab, bb, cb, db, eb, fb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, gc, hc, ic, jc, kc, lc, mc, nc, oc = {},
    pc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(f) {
    return f.__proto__
} : function(f) {
    return f.constructor.prototype
});
(function() {
    function f(a, b, d, g) {
        this.set(a, b, d, g)
    }

    function p() {
        this.rb = this.qb = this.tb = this.sb = this.Db = this.Cb = this.ab = this.$a = 0
    }

    function n(a, b, d, g) {
        a < b ? d < g ? (t = a < d ? a : d, Q = b > g ? b : g) : (t = a < g ? a : g, Q = b > d ? b : d) : d < g ? (t = b < d ? b : d, Q = a > g ? a : g) : (t = b < g ? b : g, Q = a > d ? a : d)
    }

    function h() {
        this.items = this.ff = null;
        this.Ok = 0;
        I && (this.ff = new Set);
        this.Ij = [];
        this.vg = !0
    }

    function l(a) {
        D[x++] = a
    }

    function c() {
        this.na = this.bp = this.y = this.fk = 0
    }

    function e(a) {
        this.Va = [];
        this.Gm = this.Im = this.Jm = this.Hm = 0;
        this.Fl(a)
    }

    function b(a, b) {
        this.Ub = a;
        this.ec = b;
        this.cells = {}
    }

    function r(a, b) {
        this.Ub = a;
        this.ec = b;
        this.cells = {}
    }

    function d(a, b, d) {
        var g;
        return E.length ? (g = E.pop(), g.Tq = a, g.x = b, g.y = d, g) : new ca(a, b, d)
    }

    function a(a, b, d) {
        this.Tq = a;
        this.x = b;
        this.y = d;
        this.mc = new da
    }

    function g(a, b, d) {
        var g;
        return F.length ? (g = F.pop(), g.Tq = a, g.x = b, g.y = d, g) : new fa(a, b, d)
    }

    function m(a, b, d) {
        this.Tq = a;
        this.x = b;
        this.y = d;
        this.mc = [];
        this.Wi = !0;
        this.cf = new da;
        this.ck = !1
    }

    function k(a, b) {
        return a.Ie - b.Ie
    }
    ha = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ia = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ba = function(a) {
        return a
    };
    ka = function(a) {
        return "undefined" === typeof a
    };
    la = function(a) {
        return "number" === typeof a
    };
    ma = function(a) {
        return "string" === typeof a
    };
    na = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    oa = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    sa = function(a) {
        return 0 > a ? -a : a
    };
    ta = function(a, b) {
        return a > b ? a : b
    };
    ua = function(a, b) {
        return a < b ? a : b
    };
    va = Math.PI;
    z = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    wa = function(a) {
        var b = a | 0;
        return b === a ? b : b + 1
    };
    xa = function(a, b, d, g, c, e, m, k) {
        var r, y, t, q;
        a < d ? (y = a, r = d) : (y = d, r = a);
        c < m ? (q = c, t = m) : (q = m, t = c);
        if (r < q || y > t) return !1;
        b < g ? (y = b, r = g) : (y = g, r = b);
        e < k ? (q = e, t = k) : (q = k, t = e);
        if (r < q || y > t) return !1;
        r = c - a + m - d;
        y = e - b + k - g;
        a = d - a;
        b = g - b;
        c = m - c;
        e = k - e;
        k = sa(b * c - e * a);
        return sa(c * y - e * r) > k ? !1 : sa(a * y - b * r) <= k
    };
    f.prototype.set = function(a, b, d, g) {
        this.left = a;
        this.top = b;
        this.right = d;
        this.bottom = g
    };
    f.prototype.vi = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    f.prototype.width = function() {
        return this.right - this.left
    };
    f.prototype.height = function() {
        return this.bottom - this.top
    };
    f.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    f.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    f.prototype.yF = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    f.prototype.zF = function(a, b, d) {
        return !(a.right + b < this.left || a.bottom + d < this.top || a.left + b > this.right || a.top + d > this.bottom)
    };
    f.prototype.qc = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    f.prototype.pk = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    ya = f;
    p.prototype.Aj = function(a) {
        this.$a = a.left;
        this.ab = a.top;
        this.Cb = a.right;
        this.Db = a.top;
        this.sb = a.right;
        this.tb = a.bottom;
        this.qb = a.left;
        this.rb = a.bottom
    };
    p.prototype.Rx = function(a, b) {
        if (0 === b) this.Aj(a);
        else {
            var d = Math.sin(b),
                g = Math.cos(b),
                c = a.left * d,
                e = a.top * d,
                m = a.right * d,
                d = a.bottom * d,
                k = a.left * g,
                r = a.top * g,
                y = a.right * g,
                g = a.bottom * g;
            this.$a = k - e;
            this.ab = r + c;
            this.Cb = y - e;
            this.Db = r + m;
            this.sb = y - d;
            this.tb = g + m;
            this.qb = k - d;
            this.rb = g + c
        }
    };
    p.prototype.offset = function(a, b) {
        this.$a += a;
        this.ab += b;
        this.Cb += a;
        this.Db += b;
        this.sb += a;
        this.tb += b;
        this.qb += a;
        this.rb += b;
        return this
    };
    var t = 0,
        Q = 0;
    p.prototype.Uu = function(a) {
        n(this.$a, this.Cb, this.sb, this.qb);
        a.left = t;
        a.right = Q;
        n(this.ab, this.Db, this.tb, this.rb);
        a.top = t;
        a.bottom = Q
    };
    p.prototype.qc = function(a, b) {
        var d = this.$a,
            g = this.ab,
            c = this.Cb - d,
            e = this.Db - g,
            m = this.sb - d,
            k = this.tb - g,
            r = a - d,
            y = b - g,
            t = c * c + e * e,
            q = c * m + e * k,
            e = c * r + e * y,
            v = m * m + k * k,
            f = m * r + k * y,
            u = 1 / (t * v - q * q),
            c = (v * e - q * f) * u,
            t = (t * f - q * e) * u;
        if (0 <= c && 0 < t && 1 > c + t) return !0;
        c = this.qb - d;
        e = this.rb - g;
        t = c * c + e * e;
        q = c * m + e * k;
        e = c * r + e * y;
        u = 1 / (t * v - q * q);
        c = (v * e - q * f) * u;
        t = (t * f - q * e) * u;
        return 0 <= c && 0 < t && 1 > c + t
    };
    p.prototype.tg = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.$a;
            case 1:
                return this.Cb;
            case 2:
                return this.sb;
            case 3:
                return this.qb;
            case 4:
                return this.$a;
            default:
                return this.$a
        } else switch (a) {
            case 0:
                return this.ab;
            case 1:
                return this.Db;
            case 2:
                return this.tb;
            case 3:
                return this.rb;
            case 4:
                return this.ab;
            default:
                return this.ab
        }
    };
    p.prototype.Jw = function() {
        return (this.$a + this.Cb + this.sb + this.qb) / 4
    };
    p.prototype.Kw = function() {
        return (this.ab + this.Db + this.tb + this.rb) / 4
    };
    p.prototype.Qv = function(a) {
        var b = a.Jw(),
            d = a.Kw();
        if (this.qc(b, d)) return !0;
        b = this.Jw();
        d = this.Kw();
        if (a.qc(b, d)) return !0;
        var g, c, e, m, k, r, y, t;
        for (y = 0; 4 > y; y++)
            for (t = 0; 4 > t; t++)
                if (b =
                    this.tg(y, !0), d = this.tg(y, !1), g = this.tg(y + 1, !0), c = this.tg(y + 1, !1), e = a.tg(t, !0), m = a.tg(t, !1), k = a.tg(t + 1, !0), r = a.tg(t + 1, !1), xa(b, d, g, c, e, m, k, r)) return !0;
        return !1
    };
    za = p;
    Aa = function(a, b, d) {
        return Math.max(Math.min(a, 255), 0) | Math.max(Math.min(b, 255), 0) << 8 | Math.max(Math.min(d, 255), 0) << 16
    };
    Ba = function(a) {
        return a & 255
    };
    Ca = function(a) {
        return (a & 65280) >> 8
    };
    Da = function(a) {
        return (a & 16711680) >> 16
    };
    Ea = function(a, b) {
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        return a
    };
    Fa = function(a, b) {
        var d, g;
        b = z(b);
        if (!(0 > b || b >= a.length)) {
            d = b;
            for (g = a.length - 1; d < g; d++) a[d] = a[d + 1];
            Ga(a, g)
        }
    };
    Ga = function(a, b) {
        a.length = b
    };
    G = function(a) {
        Ga(a, 0)
    };
    Ha = function(a, b) {
        G(a);
        var d, g;
        d = 0;
        for (g = b.length; d < g; ++d) a[d] = b[d]
    };
    Ia = function(a, b) {
        a.push.apply(a, b)
    };
    Ja = function(a, b) {
        var d, g;
        d = 0;
        for (g = a.length; d < g; ++d)
            if (a[d] === b) return d;
        return -1
    };
    Ka = function(a, b) {
        var d = Ja(a, b); - 1 !== d && Fa(a, d)
    };
    La = function(a, b, d) {
        return a < b ? b : a > d ? d : a
    };
    M = function(a) {
        return a / (180 / va)
    };
    Na = function(a) {
        return 180 / va * a
    };
    Oa = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    Pa = function(a) {
        a %= 2 * va;
        0 > a && (a += 2 * va);
        return a
    };
    Qa = function(a) {
        return Oa(Na(a))
    };
    Sa = function(a) {
        return Pa(M(a))
    };
    Ta = function(a, b, d, g) {
        return Math.atan2(g - b, d - a)
    };
    Ua = function(a, b) {
        if (a === b) return 0;
        var d = Math.sin(a),
            g = Math.cos(a),
            c = Math.sin(b),
            e = Math.cos(b),
            d = d * c + g * e;
        return 1 <= d ? 0 : -1 >= d ? va : Math.acos(d)
    };
    Va = function(a, b, d) {
        var g = Math.sin(a),
            c = Math.cos(a),
            e = Math.sin(b),
            m = Math.cos(b);
        return Math.acos(g * e + c * m) > d ? 0 < c * e - g * m ? Pa(a + d) : Pa(a - d) : Pa(b)
    };
    Wa = function(a, b) {
        var d = Math.sin(a),
            g = Math.cos(a),
            c = Math.sin(b),
            e = Math.cos(b);
        return 0 >= g * c - d * e
    };
    Xa = function(a, b, d, g, c, e) {
        if (0 === d) return e ? a : b;
        var m = Math.sin(d);
        d = Math.cos(d);
        a -= g;
        b -= c;
        var k = a * m;
        a = a * d - b * m;
        b = b * d + k;
        return e ? a + g : b + c
    };
    Ya = function(a, b, d, g) {
        a = d - a;
        b = g - b;
        return Math.sqrt(a * a + b * b)
    };
    Za = function(a, b) {
        return !a !== !b
    };
    $a = function(a, b, d) {
        return a + (b - a) * d
    };
    ab = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    bb = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var C = +new Date;
    cb = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - C
    };
    var q = !1,
        v = q = !1,
        u = !1;
    "undefined" !== typeof window && (q = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), q = !q && /safari/i.test(navigator.userAgent), v = /(iphone|ipod|ipad)/i.test(navigator.userAgent), u = window.c2ejecta);
    var I = !q && !u && !v && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    h.prototype.contains = function(a) {
        return this.If() ? !1 : I ? this.ff.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    h.prototype.add = function(a) {
        if (I) this.ff.has(a) || (this.ff.add(a), this.vg = !1);
        else {
            var b = a.toString(),
                d = this.items;
            d ? d.hasOwnProperty(b) || (d[b] = a, this.Ok++, this.vg = !1) : (this.items = {}, this.items[b] = a, this.Ok = 1, this.vg = !1)
        }
    };
    h.prototype.remove = function(a) {
        if (!this.If())
            if (I) this.ff.has(a) && (this.ff["delete"](a), this.vg = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.Ok--, this.vg = !1)
        }
    };
    h.prototype.clear = function() {
        this.If() || (I ? this.ff.clear() : (this.items = null, this.Ok = 0), G(this.Ij), this.vg = !0)
    };
    h.prototype.If = function() {
        return 0 === this.count()
    };
    h.prototype.count = function() {
        return I ? this.ff.size : this.Ok
    };
    var D = null,
        x = 0;
    h.prototype.rH = function() {
        if (!this.vg) {
            if (I) G(this.Ij), D = this.Ij, x = 0, this.ff.forEach(l), D = null, x = 0;
            else {
                var a = this.Ij;
                G(a);
                var b, d = 0,
                    g = this.items;
                if (g)
                    for (b in g) g.hasOwnProperty(b) && (a[d++] = g[b])
            }
            this.vg = !0
        }
    };
    h.prototype.Yg = function() {
        this.rH();
        return this.Ij
    };
    da = h;
    new da;
    db = function(a, b) {
        I ? eb(a, b.ff) : fb(a, b.Yg())
    };
    eb = function(a, b) {
        var d, g, c, e;
        g = d = 0;
        for (c = a.length; d < c; ++d) e = a[d], b.has(e) || (a[g++] = e);
        Ga(a, g)
    };
    fb = function(a, b) {
        var d, g, c, e;
        g = d = 0;
        for (c = a.length; d < c; ++d) e = a[d], -1 === Ja(b, e) && (a[g++] = e);
        Ga(a, g)
    };
    c.prototype.add = function(a) {
        this.y = a - this.fk;
        this.bp = this.na + this.y;
        this.fk = this.bp - this.na - this.y;
        this.na = this.bp
    };
    c.prototype.reset = function() {
        this.na = this.bp = this.y = this.fk = 0
    };
    ib = c;
    jb = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    e.prototype.Fl = function(a) {
        this.wx = a;
        this.Ad = a.length / 2;
        this.Va.length = a.length;
        this.Mm = this.Nm = -1;
        this.Xu = 0
    };
    e.prototype.Ti = function() {
        return !this.wx.length
    };
    e.prototype.Pa = function() {
        for (var a = this.Va, b = a[0], d = b, g = a[1], c = g, e, m, k = 1, r = this.Ad; k < r; ++k) m = 2 * k, e = a[m], m = a[m + 1], e < b && (b = e), e > d && (d = e), m < g && (g = m), m > c && (c = m);
        this.Hm = b;
        this.Im = d;
        this.Jm = g;
        this.Gm = c
    };
    e.prototype.Aj = function(a, b, d) {
        this.Va.length = 8;
        this.Ad = 4;
        var g = this.Va;
        g[0] = a.left - b;
        g[1] = a.top - d;
        g[2] = a.right - b;
        g[3] = a.top - d;
        g[4] = a.right - b;
        g[5] = a.bottom - d;
        g[6] = a.left - b;
        g[7] = a.bottom - d;
        this.Nm = a.right - a.left;
        this.Mm = a.bottom - a.top;
        this.Pa()
    };
    e.prototype.zj = function(a, b, d, g, c) {
        this.Va.length = 8;
        this.Ad = 4;
        var e = this.Va;
        e[0] = a.$a - b;
        e[1] = a.ab - d;
        e[2] = a.Cb - b;
        e[3] = a.Db - d;
        e[4] = a.sb - b;
        e[5] = a.tb - d;
        e[6] = a.qb - b;
        e[7] = a.rb - d;
        this.Nm = g;
        this.Mm = c;
        this.Pa()
    };
    e.prototype.Qx = function(a) {
        this.Ad = a.Ad;
        Ha(this.Va, a.Va);
        this.Hm = a.Hm;
        this.Jm - a.Jm;
        this.Im = a.Im;
        this.Gm = a.Gm
    };
    e.prototype.fh = function(a, b, d) {
        if (this.Nm !== a || this.Mm !== b || this.Xu !== d) {
            this.Nm = a;
            this.Mm = b;
            this.Xu = d;
            var g, c, e, m, k, r = 0,
                y = 1,
                t = this.wx,
                q = this.Va;
            0 !== d && (r = Math.sin(d), y = Math.cos(d));
            d = 0;
            for (e = this.Ad; d < e; d++) g = 2 * d, c = g + 1, m = t[g] * a, k = t[c] * b, q[g] = m * y - k * r, q[c] = k * y + m * r;
            this.Pa()
        }
    };
    e.prototype.qc = function(a, b) {
        var d = this.Va;
        if (a === d[0] && b === d[1]) return !0;
        var g, c, e, m = this.Ad,
            k = this.Hm - 110,
            r = this.Jm - 101,
            y = this.Im + 131,
            t = this.Gm + 120,
            q, v, f = 0,
            u = 0;
        for (g = 0; g < m; g++) c = 2 * g, e = (g + 1) % m * 2, q = d[c], c = d[c + 1], v = d[e], e = d[e + 1], xa(k, r, a, b, q, c, v, e) && f++, xa(y, t, a, b, q, c, v, e) && u++;
        return 1 === f % 2 || 1 === u % 2
    };
    e.prototype.Ek = function(a, b, d) {
        var g = a.Va,
            c = this.Va;
        if (this.qc(g[0] + b, g[1] + d) || a.qc(c[0] - b, c[1] - d)) return !0;
        var e, m, k, r, y, t, q, v, f, u, h, C;
        e = 0;
        for (r = this.Ad; e < r; e++)
            for (m = 2 * e, k = (e + 1) % r * 2, v = c[m], m = c[m + 1], f = c[k], u = c[k + 1], k = 0, q = a.Ad; k < q; k++)
                if (y = 2 * k, t = (k + 1) % q * 2, h = g[y] + b, y = g[y + 1] + d, C = g[t] + b, t = g[t + 1] + d, xa(v, m, f, u, h, y, C, t)) return !0;
        return !1
    };
    e.prototype.cG = function(a) {
        var b, d, g;
        b = 0;
        for (d = this.Ad; b < d; ++b) g = 2 * b, this.Va[g] = 2 * a - this.Va[g]
    };
    e.prototype.JE = function(a) {
        var b, d, g;
        b = 0;
        for (d = this.Ad; b < d; ++b) g = 2 * b + 1, this.Va[g] = 2 * a - this.Va[g]
    };
    e.prototype.yD = function() {
        var a, b, d, g, c;
        a = 0;
        for (b = this.Ad; a < b; ++a) d = 2 * a, g = d + 1, c = this.Va[d], this.Va[d] = this.Va[g], this.Va[g] = c
    };
    kb = e;
    b.prototype.Eg = function(a, b, g) {
        var c;
        c = this.cells[a];
        return c ? (c = c[b]) ? c : g ? (c = d(this, a, b), this.cells[a][b] = c) : null : g ? (c = d(this, a, b), this.cells[a] = {}, this.cells[a][b] = c) : null
    };
    b.prototype.Yc = function(a) {
        return z(a / this.Ub)
    };
    b.prototype.Zc = function(a) {
        return z(a / this.ec)
    };
    b.prototype.update = function(a, b, d) {
        var g, c, e, m, k;
        if (b)
            for (g = b.left, c = b.right; g <= c; ++g)
                for (e = b.top, m = b.bottom; e <= m; ++e)
                    if (!d || !d.qc(g, e))
                        if (k = this.Eg(g, e, !1)) k.remove(a), k.If() && (k.mc.clear(), 1E3 > E.length && E.push(k), this.cells[g][e] = null);
        if (d)
            for (g = d.left, c = d.right; g <= c; ++g)
                for (e = d.top, m = d.bottom; e <= m; ++e) b && b.qc(g, e) || this.Eg(g, e, !0).er(a)
    };
    b.prototype.Go = function(a, b) {
        var d, g, c, e, m, k;
        d = this.Yc(a.left);
        c = this.Zc(a.top);
        g = this.Yc(a.right);
        for (m = this.Zc(a.bottom); d <= g; ++d)
            for (e = c; e <= m; ++e)(k = this.Eg(d, e, !1)) && k.dump(b)
    };
    lb = b;
    r.prototype.Eg = function(a, b, d) {
        var c;
        c = this.cells[a];
        return c ? (c = c[b]) ? c : d ? (c = g(this, a, b), this.cells[a][b] = c) : null : d ? (c = g(this, a, b), this.cells[a] = {}, this.cells[a][b] = c) : null
    };
    r.prototype.Yc = function(a) {
        return z(a / this.Ub)
    };
    r.prototype.Zc = function(a) {
        return z(a / this.ec)
    };
    r.prototype.update = function(a, b, d) {
        var g, c, e, m, k;
        if (b)
            for (g = b.left, c = b.right; g <= c; ++g)
                for (e = b.top, m = b.bottom; e <= m; ++e)
                    if (!d || !d.qc(g, e))
                        if (k = this.Eg(g, e, !1)) k.remove(a), k.If() && (k.reset(), 1E3 > F.length && F.push(k), this.cells[g][e] = null);
        if (d)
            for (g = d.left, c = d.right; g <= c; ++g)
                for (e = d.top, m = d.bottom; e <= m; ++e) b && b.qc(g, e) || this.Eg(g, e, !0).er(a)
    };
    r.prototype.Go = function(a, b, d, g, c) {
        var e, m;
        a = this.Yc(a);
        b = this.Zc(b);
        d = this.Yc(d);
        for (e = this.Zc(g); a <= d; ++a)
            for (g = b; g <= e; ++g)(m = this.Eg(a, g, !1)) && m.dump(c)
    };
    r.prototype.ZF = function(a) {
        var b, d, g, c, e;
        b = a.left;
        g = a.top;
        d = a.right;
        for (c = a.bottom; b <= d; ++b)
            for (a = g; a <= c; ++a)
                if (e = this.Eg(b, a, !1)) e.Wi = !1
    };
    mb = r;
    var E = [];
    a.prototype.If = function() {
        return this.mc.If()
    };
    a.prototype.er = function(a) {
        this.mc.add(a)
    };
    a.prototype.remove = function(a) {
        this.mc.remove(a)
    };
    a.prototype.dump = function(a) {
        Ia(a, this.mc.Yg())
    };
    ca = a;
    var F = [];
    m.prototype.If = function() {
        if (!this.mc.length) return !0;
        if (this.mc.length > this.cf.count()) return !1;
        this.Bq();
        return !0
    };
    m.prototype.er = function(a) {
        this.cf.contains(a) ? (this.cf.remove(a), this.cf.If() && (this.ck = !1)) : this.mc.length ? (this.mc[this.mc.length - 1].Te() > a.Te() && (this.Wi = !1), this.mc.push(a)) : (this.mc.push(a), this.Wi = !0)
    };
    m.prototype.remove = function(a) {
        this.cf.add(a);
        this.ck = !0;
        30 <= this.cf.count() && this.Bq()
    };
    m.prototype.Bq = function() {
        this.ck && (this.cf.count() === this.mc.length ? this.reset() : (db(this.mc, this.cf), this.cf.clear(), this.ck = !1))
    };
    m.prototype.aE = function() {
        this.Wi || (this.mc.sort(k), this.Wi = !0)
    };
    m.prototype.reset = function() {
        G(this.mc);
        this.Wi = !0;
        this.cf.clear();
        this.ck = !1
    };
    m.prototype.dump = function(a) {
        this.Bq();
        this.aE();
        this.mc.length && a.push(this.mc)
    };
    fa = m;
    var S = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    nb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : S[a - 1]
    };
    ob = function(a, b, d) {
        if (d) switch (a.Lc = d.ONE, a.Gc = d.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.Lc = d.ONE;
                a.Gc = d.ONE;
                break;
            case 3:
                a.Lc = d.ONE;
                a.Gc = d.ZERO;
                break;
            case 4:
                a.Lc = d.ONE_MINUS_DST_ALPHA;
                a.Gc = d.ONE;
                break;
            case 5:
                a.Lc = d.DST_ALPHA;
                a.Gc = d.ZERO;
                break;
            case 6:
                a.Lc = d.ZERO;
                a.Gc = d.SRC_ALPHA;
                break;
            case 7:
                a.Lc = d.ONE_MINUS_DST_ALPHA;
                a.Gc = d.ZERO;
                break;
            case 8:
                a.Lc = d.ZERO;
                a.Gc = d.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.Lc = d.DST_ALPHA;
                a.Gc = d.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.Lc = d.ONE_MINUS_DST_ALPHA, a.Gc = d.SRC_ALPHA
        }
    };
    pb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    qb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    rb = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || qb(a.tagName, "canvas") ? !0 : !1
    }
})();
var qc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function rc(f) {
    var p = new qc(3);
    f && (p[0] = f[0], p[1] = f[1], p[2] = f[2]);
    return p
}

function sc(f) {
    var p = new qc(16);
    f && (p[0] = f[0], p[1] = f[1], p[2] = f[2], p[3] = f[3], p[4] = f[4], p[5] = f[5], p[6] = f[6], p[7] = f[7], p[8] = f[8], p[9] = f[9], p[10] = f[10], p[11] = f[11], p[12] = f[12], p[13] = f[13], p[14] = f[14], p[15] = f[15]);
    return p
}

function tc(f, p) {
    p[0] = f[0];
    p[1] = f[1];
    p[2] = f[2];
    p[3] = f[3];
    p[4] = f[4];
    p[5] = f[5];
    p[6] = f[6];
    p[7] = f[7];
    p[8] = f[8];
    p[9] = f[9];
    p[10] = f[10];
    p[11] = f[11];
    p[12] = f[12];
    p[13] = f[13];
    p[14] = f[14];
    p[15] = f[15]
}

function uc(f, p) {
    var n = p[0],
        h = p[1];
    p = p[2];
    f[0] *= n;
    f[1] *= n;
    f[2] *= n;
    f[3] *= n;
    f[4] *= h;
    f[5] *= h;
    f[6] *= h;
    f[7] *= h;
    f[8] *= p;
    f[9] *= p;
    f[10] *= p;
    f[11] *= p
}

function vc(f, p, n, h) {
        h || (h = sc());
        var l, c, e, b, r, d, a, g, m = f[0],
            k = f[1];
        f = f[2];
        c = n[0];
        e = n[1];
        l = n[2];
        n = p[1];
        d = p[2];
        m === p[0] && k === n && f === d ? (f = h, f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 0, f[4] = 0, f[5] = 1, f[6] = 0, f[7] = 0, f[8] = 0, f[9] = 0, f[10] = 1, f[11] = 0, f[12] = 0, f[13] = 0, f[14] = 0, f[15] = 1) : (n = m - p[0], d = k - p[1], a = f - p[2], g = 1 / Math.sqrt(n * n + d * d + a * a), n *= g, d *= g, a *= g, p = e * a - l * d, l = l * n - c * a, c = c * d - e * n, (g = Math.sqrt(p * p + l * l + c * c)) ? (g = 1 / g, p *= g, l *= g, c *= g) : c = l = p = 0, e = d * c - a * l, b = a * p - n * c, r = n * l - d * p, (g = Math.sqrt(e * e + b * b + r * r)) ? (g = 1 / g, e *= g, b *= g, r *= g) : r = b = e = 0, h[0] = p, h[1] = e, h[2] = n, h[3] = 0, h[4] = l, h[5] = b, h[6] = d, h[7] = 0, h[8] = c, h[9] = r, h[10] = a, h[11] = 0, h[12] = -(p * m + l * k + c * f), h[13] = -(e * m + b * k + r * f), h[14] = -(n * m + d * k + a * f), h[15] = 1)
    }
    (function() {
        function f(b, c, d) {
            this.Jf = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
            this.height = this.width = 0;
            this.Ta = !!d;
            this.Mn = this.Gk = !1;
            this.Zm = 0;
            this.tp = 1;
            this.tt = 1E3;
            this.FH = (this.tt - this.tp) / 32768;
            this.aq = rc([0, 0, 100]);
            this.rw = rc([0, 0, 0]);
            this.uy = rc([0, 1, 0]);
            this.fm = rc([1, 1, 1]);
            this.ov = !0;
            this.fo = sc();
            this.Kd = sc();
            this.tr = sc();
            this.mq = sc();
            this.S = b;
            this.version = 0 === this.S.getParameter(this.S.VERSION).indexOf("WebGL 2") ? 2 : 1;
            this.Mv()
        }

        function p(b, c, d) {
            this.S = b;
            this.Gl =
                c;
            this.name = d;
            this.$d = b.getAttribLocation(c, "aPos");
            this.Mg = b.getAttribLocation(c, "aTex");
            this.pw = b.getUniformLocation(c, "matP");
            this.ao = b.getUniformLocation(c, "matMV");
            this.hj = b.getUniformLocation(c, "opacity");
            this.Kr = b.getUniformLocation(c, "colorFill");
            this.qw = b.getUniformLocation(c, "samplerFront");
            this.Zk = b.getUniformLocation(c, "samplerBack");
            this.Ph = b.getUniformLocation(c, "destStart");
            this.Oh = b.getUniformLocation(c, "destEnd");
            this.al = b.getUniformLocation(c, "seconds");
            this.Mr = b.getUniformLocation(c, "pixelWidth");
            this.Lr = b.getUniformLocation(c, "pixelHeight");
            this.Yk = b.getUniformLocation(c, "layerScale");
            this.Xk = b.getUniformLocation(c, "layerAngle");
            this.bl = b.getUniformLocation(c, "viewOrigin");
            this.$k = b.getUniformLocation(c, "scrollPos");
            this.tF = !!(this.Mr || this.Lr || this.al || this.Zk || this.Ph || this.Oh || this.Yk || this.Xk || this.bl || this.$k);
            this.Aw = this.Bw = -999;
            this.eo = 1;
            this.ww = this.vw = 0;
            this.yw = this.uw = this.sw = 1;
            this.Ew = this.Dw = this.Cw = this.Gw = this.Fw = this.xw = 0;
            this.sr = [];
            this.zw = sc();
            this.hj && b.uniform1f(this.hj, 1);
            this.Kr && b.uniform4f(this.Kr, 1, 1, 1, 1);
            this.qw && b.uniform1i(this.qw, 0);
            this.Zk && b.uniform1i(this.Zk, 1);
            this.Ph && b.uniform2f(this.Ph, 0, 0);
            this.Oh && b.uniform2f(this.Oh, 1, 1);
            this.Yk && b.uniform1f(this.Yk, 1);
            this.Xk && b.uniform1f(this.Xk, 0);
            this.bl && b.uniform2f(this.bl, 0, 0);
            this.$k && b.uniform2f(this.$k, 0, 0);
            this.al && b.uniform1f(this.al, 0);
            this.xh = !1
        }

        function n(b, c) {
            return b[0] === c[0] && b[1] === c[1] && b[2] === c[2] && b[3] === c[3] && b[4] === c[4] && b[5] === c[5] && b[6] === c[6] && b[7] === c[7] && b[8] === c[8] && b[9] === c[9] && b[10] === c[10] && b[11] === c[11] && b[12] === c[12] && b[13] === c[13] && b[14] === c[14] && b[15] === c[15]
        }

        function h(b, c) {
            this.type = b;
            this.H = c;
            this.S = c.S;
            this.cd = this.Bc = this.bx = 0;
            this.ta = this.ge = null;
            this.Sx = []
        }
        var l = sc();
        f.prototype.Mv = function() {
            var b = this.S,
                c;
            this.bw = 1;
            this.Hh = this.Jg = null;
            this.Ym = 1;
            b.clearColor(0, 0, 0, 0);
            b.clear(b.COLOR_BUFFER_BIT);
            b.enable(b.BLEND);
            b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
            b.disable(b.CULL_FACE);
            b.disable(b.STENCIL_TEST);
            b.disable(b.DITHER);
            this.Ta ? (b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST);
            this.gw = b.ONE;
            this.$v = b.ONE_MINUS_SRC_ALPHA;
            this.Yl = new Float32Array(8E3 * (this.Ta ? 3 : 2));
            this.Nl = new Float32Array(16E3);
            this.ss = new Float32Array(32E3);
            this.rs = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, this.rs);
            b.bufferData(b.ARRAY_BUFFER, this.ss.byteLength, b.DYNAMIC_DRAW);
            this.Xl = Array(4);
            this.Ml = Array(4);
            for (c = 0; 4 > c; c++) this.Xl[c] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Xl[c]), b.bufferData(b.ARRAY_BUFFER, this.Yl.byteLength, b.DYNAMIC_DRAW), this.Ml[c] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Ml[c]), b.bufferData(b.ARRAY_BUFFER, this.Nl.byteLength, b.DYNAMIC_DRAW);
            this.wf = 0;
            this.wF = b.createBuffer();
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.wF);
            for (var d = new Uint16Array(12E3), a = c = 0; 12E3 > c;) d[c++] = a, d[c++] = a + 1, d[c++] = a + 2, d[c++] = a, d[c++] = a + 2, d[c++] = a + 3, a += 4;
            b.bufferData(b.ELEMENT_ARRAY_BUFFER, d, b.STATIC_DRAW);
            this.tj = this.Ug = this.ie = 0;
            this.ob = [];
            c = this.Ta ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
            d = this.kk({
                src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
            }, c, "<default>");
            this.ob.push(d);
            d = this.kk({
                src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
            }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
            this.ob.push(d);
            d = this.kk({
                src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
            }, c, "<earlyz>");
            this.ob.push(d);
            d = this.kk({
                src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
            }, c, "<fill>");
            this.ob.push(d);
            for (var g in wc) wc.hasOwnProperty(g) && this.ob.push(this.kk(wc[g], c, g));
            b.activeTexture(b.TEXTURE0);
            b.bindTexture(b.TEXTURE_2D, null);
            this.me = [];
            this.Td = 0;
            this.wc = this.Xb = !1;
            this.dv = this.Rk = -1;
            this.wi = null;
            this.zq = b.createFramebuffer();
            this.cn = this.Ho = null;
            this.Pu = !1;
            this.Ta && (this.cn = b.createRenderbuffer());
            this.Xg = rc([0, 0, 0]);
            b = b.getParameter(b.ALIASED_POINT_SIZE_RANGE);
            this.bG = b[0];
            this.Pr = b[1];
            2048 < this.Pr && (this.Pr = 2048);
            this.md(0)
        };
        p.prototype.jt = function(b) {
            n(this.zw, b) || (tc(b, this.zw), this.S.uniformMatrix4fv(this.ao, !1, b))
        };
        f.prototype.kk = function(b, c, d) {
            var a = this.S,
                g = a.createShader(a.FRAGMENT_SHADER);
            a.shaderSource(g, b.src);
            a.compileShader(g);
            if (!a.getShaderParameter(g, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(g), a.deleteShader(g), Error("error compiling fragment shader: " + b);
            var e = a.createShader(a.VERTEX_SHADER);
            a.shaderSource(e, c);
            a.compileShader(e);
            if (!a.getShaderParameter(e, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(e), a.deleteShader(g), a.deleteShader(e), Error("error compiling vertex shader: " + b);
            c = a.createProgram();
            a.attachShader(c, g);
            a.attachShader(c, e);
            a.linkProgram(c);
            if (!a.getProgramParameter(c, a.LINK_STATUS)) throw b = a.getProgramInfoLog(c), a.deleteShader(g), a.deleteShader(e), a.deleteProgram(c), Error("error linking shader program: " + b);
            a.useProgram(c);
            a.deleteShader(g);
            a.deleteShader(e);
            g = new p(a, c, d);
            g.xq = b.xq || 0;
            g.yq = b.yq || 0;
            g.cv = !!b.cv;
            g.ze = !!b.ze;
            g.Mu = !!b.Mu;
            g.la = b.la || [];
            b = 0;
            for (e = g.la.length; b < e; b++) g.la[b][1] = a.getUniformLocation(c, g.la[b][0]), g.sr.push(0), a.uniform1f(g.la[b][1], 0);
            return g
        };
        f.prototype.Pq = function(b) {
            var c, d;
            c = 0;
            for (d = this.ob.length; c < d; c++)
                if (this.ob[c].name === b) return c;
            return -1
        };
        f.prototype.vx = function(b, c, d) {
            var a = this.Kd,
                g = this.fo,
                e = [0, 0, 0, 0, 0, 0, 0, 0];
            e[0] = a[0] * b + a[4] * c + a[12];
            e[1] = a[1] * b + a[5] * c + a[13];
            e[2] = a[2] * b + a[6] * c + a[14];
            e[3] = a[3] * b + a[7] * c + a[15];
            e[4] = g[0] * e[0] + g[4] * e[1] + g[8] * e[2] + g[12] * e[3];
            e[5] = g[1] * e[0] + g[5] * e[1] + g[9] * e[2] + g[13] * e[3];
            e[6] = g[2] * e[0] + g[6] * e[1] + g[10] * e[2] + g[14] * e[3];
            e[7] = -e[2];
            0 !== e[7] && (e[7] = 1 /
                e[7], e[4] *= e[7], e[5] *= e[7], e[6] *= e[7], d[0] = (.5 * e[4] + .5) * this.width, d[1] = (.5 * e[5] + .5) * this.height)
        };
        f.prototype.Yh = function(b, c, d) {
            if (this.width !== b || this.height !== c || d) {
                this.Ne();
                d = this.S;
                this.width = b;
                this.height = c;
                d.viewport(0, 0, b, c);
                vc(this.aq, this.rw, this.uy, this.Kd);
                if (this.Ta) {
                    var a = -b / 2;
                    b = b / 2;
                    var g = c / 2;
                    c = -c / 2;
                    var e = this.tp,
                        k = this.tt,
                        t = this.fo;
                    t || (t = sc());
                    var f = b - a,
                        h = c - g,
                        q = k - e;
                    t[0] = 2 / f;
                    t[1] = 0;
                    t[2] = 0;
                    t[3] = 0;
                    t[4] = 0;
                    t[5] = 2 / h;
                    t[6] = 0;
                    t[7] = 0;
                    t[8] = 0;
                    t[9] = 0;
                    t[10] = -2 / q;
                    t[11] = 0;
                    t[12] = -(a + b) / f;
                    t[13] = -(c +
                        g) / h;
                    t[14] = -(k + e) / q;
                    t[15] = 1;
                    this.fm[0] = 1;
                    this.fm[1] = 1
                } else c = b / c, a = this.tp, b = this.tt, t = this.fo, k = a * Math.tan(45 * Math.PI / 360), c *= k, g = -c, e = -k, t || (t = sc()), f = c - g, h = k - e, q = b - a, t[0] = 2 * a / f, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * a / h, t[6] = 0, t[7] = 0, t[8] = (c + g) / f, t[9] = (k + e) / h, t[10] = -(b + a) / q, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = -(b * a * 2) / q, t[15] = 0, a = [0, 0], b = [0, 0], this.vx(0, 0, a), this.vx(1, 1, b), this.fm[0] = 1 / (b[0] - a[0]), this.fm[1] = -1 / (b[1] - a[1]);
                a = 0;
                for (b = this.ob.length; a < b; a++) g = this.ob[a], g.xh = !1, g.pw && (d.useProgram(g.Gl),
                    d.uniformMatrix4fv(g.pw, !1, this.fo));
                d.useProgram(this.ob[this.Rk].Gl);
                d.bindTexture(d.TEXTURE_2D, null);
                d.activeTexture(d.TEXTURE1);
                d.bindTexture(d.TEXTURE_2D, null);
                d.activeTexture(d.TEXTURE0);
                this.Hh = this.Jg = null;
                this.cn && (d.bindFramebuffer(d.FRAMEBUFFER, this.zq), d.bindRenderbuffer(d.RENDERBUFFER, this.cn), d.renderbufferStorage(d.RENDERBUFFER, d.DEPTH_COMPONENT16, this.width, this.height), this.Pu || (d.framebufferRenderbuffer(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.RENDERBUFFER, this.cn), this.Pu = !0), d.bindRenderbuffer(d.RENDERBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, null), this.Ho = null)
            }
        };
        f.prototype.be = function() {
            vc(this.aq, this.rw, this.uy, this.Kd);
            uc(this.Kd, this.fm)
        };
        f.prototype.translate = function(b, c) {
            if (0 !== b || 0 !== c) {
                this.Xg[0] = b;
                this.Xg[1] = c;
                this.Xg[2] = 0;
                var d = this.Kd,
                    a = this.Xg,
                    g = a[0],
                    e = a[1],
                    a = a[2];
                d[12] = d[0] * g + d[4] * e + d[8] * a + d[12];
                d[13] = d[1] * g + d[5] * e + d[9] * a + d[13];
                d[14] = d[2] * g + d[6] * e + d[10] * a + d[14];
                d[15] = d[3] * g + d[7] * e + d[11] * a + d[15]
            }
        };
        f.prototype.scale = function(b, c) {
            if (1 !== b || 1 !== c) this.Xg[0] = b, this.Xg[1] = c, this.Xg[2] = 1, uc(this.Kd, this.Xg)
        };
        f.prototype.Jo = function(b) {
            if (0 !== b) {
                var c = this.Kd,
                    d, a = Math.sin(b);
                b = Math.cos(b);
                var g = c[0],
                    e = c[1],
                    k = c[2],
                    t = c[3],
                    f = c[4],
                    h = c[5],
                    q = c[6],
                    v = c[7];
                d ? c !== d && (d[8] = c[8], d[9] = c[9], d[10] = c[10], d[11] = c[11], d[12] = c[12], d[13] = c[13], d[14] = c[14], d[15] = c[15]) : d = c;
                d[0] = g * b + f * a;
                d[1] = e * b + h * a;
                d[2] = k * b + q * a;
                d[3] = t * b + v * a;
                d[4] = g * -a + f * b;
                d[5] = e * -a + h * b;
                d[6] = k * -a + q * b;
                d[7] = t * -a + v * b
            }
        };
        f.prototype.Qd = function() {
            if (!n(this.tr, this.Kd)) {
                var b = this.Vc();
                b.type = 5;
                b.ta ? tc(this.Kd, b.ta) : b.ta = sc(this.Kd);
                tc(this.Kd, this.tr);
                this.wc = this.Xb = !1
            }
        };
        f.prototype.Oo = function(b) {
            this.Ta && (32760 < b && (b = 32760), this.Zm = this.aq[2] - this.tp - b * this.FH)
        };
        h.prototype.LD = function() {
            var b = this.S,
                c = this.H;
            0 !== this.Bc ? (b.depthMask(!0), b.colorMask(!1, !1, !1, !1), b.disable(b.BLEND), b.bindFramebuffer(b.FRAMEBUFFER, c.zq), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.clear(b.DEPTH_BUFFER_BIT), b.bindFramebuffer(b.FRAMEBUFFER, null), c.Mn = !0) : (b.depthMask(!1), b.colorMask(!0, !0, !0, !0), b.enable(b.BLEND), c.Mn = !1)
        };
        h.prototype.PD = function() {
            this.S.bindTexture(this.S.TEXTURE_2D, this.ge)
        };
        h.prototype.QD = function() {
            var b = this.S;
            b.activeTexture(b.TEXTURE1);
            b.bindTexture(b.TEXTURE_2D, this.ge);
            b.activeTexture(b.TEXTURE0)
        };
        h.prototype.MD = function() {
            var b = this.bx,
                c = this.H;
            c.Ym = b;
            c = c.wi;
            c.hj && c.eo !== b && (c.eo = b, this.S.uniform1f(c.hj, b))
        };
        h.prototype.FD = function() {
            this.S.drawElements(this.S.TRIANGLES, this.cd, this.S.UNSIGNED_SHORT, this.Bc)
        };
        h.prototype.ID = function() {
            this.S.blendFunc(this.Bc, this.cd)
        };
        h.prototype.SD = function() {
            var b, c, d, a = this.H.ob,
                g = this.H.dv;
            b = 0;
            for (c = a.length; b < c; b++) d = a[b], b === g && d.ao ? (d.jt(this.ta), d.xh = !0) : d.xh = !1;
            tc(this.ta, this.H.mq)
        };
        h.prototype.GD = function() {
            var b = this.S,
                c = this.H;
            this.ge ? (c.Hh === this.ge && (b.activeTexture(b.TEXTURE1), b.bindTexture(b.TEXTURE_2D, null), c.Hh = null, b.activeTexture(b.TEXTURE0)), b.bindFramebuffer(b.FRAMEBUFFER, c.zq), c.Mn || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.ge, 0)) : (c.Ta || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.bindFramebuffer(b.FRAMEBUFFER, null))
        };
        h.prototype.CD = function() {
            var b = this.S,
                c = this.Bc;
            0 === c ? (b.clearColor(this.ta[0], this.ta[1], this.ta[2], this.ta[3]), b.clear(b.COLOR_BUFFER_BIT)) : 1 === c ? (b.enable(b.SCISSOR_TEST), b.scissor(this.ta[0], this.ta[1], this.ta[2], this.ta[3]), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.disable(b.SCISSOR_TEST)) : b.clear(b.DEPTH_BUFFER_BIT)
        };
        h.prototype.KD = function() {
            var b = this.S;
            0 !== this.Bc ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
        };
        h.prototype.ED = function() {
            var b = this.S,
                c = this.H;
            c.Ta && b.disable(b.DEPTH_TEST);
            var d = c.ob[1];
            b.useProgram(d.Gl);
            !d.xh && d.ao && (d.jt(c.mq), d.xh = !0);
            b.enableVertexAttribArray(d.$d);
            b.bindBuffer(b.ARRAY_BUFFER, c.rs);
            b.vertexAttribPointer(d.$d, 4, b.FLOAT, !1, 0, 0);
            b.drawArrays(b.POINTS, this.Bc / 4, this.cd);
            d = c.wi;
            b.useProgram(d.Gl);
            0 <= d.$d && (b.enableVertexAttribArray(d.$d), b.bindBuffer(b.ARRAY_BUFFER, c.Xl[c.wf]), b.vertexAttribPointer(d.$d, c.Ta ? 3 : 2, b.FLOAT, !1, 0, 0));
            0 <= d.Mg && (b.enableVertexAttribArray(d.Mg), b.bindBuffer(b.ARRAY_BUFFER, c.Ml[c.wf]), b.vertexAttribPointer(d.Mg, 2, b.FLOAT, !1, 0, 0));
            c.Ta && b.enable(b.DEPTH_TEST)
        };
        h.prototype.ND = function() {
            var b = this.S,
                c = this.H,
                d = c.ob[this.Bc];
            c.dv = this.Bc;
            c.wi = d;
            b.useProgram(d.Gl);
            !d.xh && d.ao && (d.jt(c.mq), d.xh = !0);
            d.hj && d.eo !== c.Ym && (d.eo = c.Ym, b.uniform1f(d.hj, c.Ym));
            0 <= d.$d && (b.enableVertexAttribArray(d.$d), b.bindBuffer(b.ARRAY_BUFFER, c.Xl[c.wf]), b.vertexAttribPointer(d.$d, c.Ta ? 3 : 2, b.FLOAT, !1, 0, 0));
            0 <= d.Mg && (b.enableVertexAttribArray(d.Mg), b.bindBuffer(b.ARRAY_BUFFER, c.Ml[c.wf]), b.vertexAttribPointer(d.Mg, 2, b.FLOAT, !1, 0, 0))
        };
        h.prototype.JD = function() {
            var b = this.ta;
            this.S.uniform4f(this.H.wi.Kr, b[0], b[1], b[2], b[3])
        };
        h.prototype.OD = function() {
            var b, c, d = this.H.wi,
                a = this.S;
            b = this.ta;
            d.Zk && this.H.Hh !== this.ge && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.ge), this.H.Hh = this.ge, a.activeTexture(a.TEXTURE0));
            var g = b[0];
            d.Mr && g !== d.Bw && (d.Bw = g, a.uniform1f(d.Mr, g));
            g = b[1];
            d.Lr && g !== d.Aw && (d.Aw = g, a.uniform1f(d.Lr, g));
            g = b[2];
            c = b[3];
            !d.Ph || g === d.vw && c === d.ww || (d.vw = g, d.ww = c, a.uniform2f(d.Ph, g, c));
            g = b[4];
            c = b[5];
            !d.Oh || g === d.sw && c === d.uw || (d.sw = g, d.uw = c, a.uniform2f(d.Oh, g, c));
            g = b[6];
            d.Yk && g !== d.yw && (d.yw = g, a.uniform1f(d.Yk, g));
            g = b[7];
            d.Xk && g !== d.xw && (d.xw = g, a.uniform1f(d.Xk, g));
            g = b[8];
            c = b[9];
            !d.bl || g === d.Fw && c === d.Gw || (d.Fw = g, d.Gw = c, a.uniform2f(d.bl, g, c));
            g = b[10];
            c = b[11];
            !d.$k || g === d.Cw && c === d.Dw || (d.Cw = g, d.Dw = c, a.uniform2f(d.$k, g, c));
            g = b[12];
            d.al && g !== d.Ew && (d.Ew = g, a.uniform1f(d.al, g));
            if (d.la.length)
                for (b = 0, c = d.la.length; b < c; b++) g = this.Sx[b], g !== d.sr[b] && (d.sr[b] = g, a.uniform1f(d.la[b][1], g))
        };
        f.prototype.Vc = function() {
            this.Td === this.me.length && this.me.push(new h(0, this));
            return this.me[this.Td++]
        };
        f.prototype.Ne = function() {
            if (0 !== this.Td && !this.S.isContextLost()) {
                var b = this.S;
                0 < this.tj && (b.bindBuffer(b.ARRAY_BUFFER, this.rs), b.bufferSubData(b.ARRAY_BUFFER, 0, this.ss.subarray(0, this.tj)), c && 0 <= c.$d && "<point>" === c.name && b.vertexAttribPointer(c.$d, 4, b.FLOAT, !1, 0, 0));
                if (0 < this.ie) {
                    var c = this.wi;
                    b.bindBuffer(b.ARRAY_BUFFER, this.Xl[this.wf]);
                    b.bufferSubData(b.ARRAY_BUFFER, 0, this.Yl.subarray(0, this.ie));
                    c && 0 <= c.$d && "<point>" !== c.name && b.vertexAttribPointer(c.$d, this.Ta ? 3 : 2, b.FLOAT, !1, 0, 0);
                    b.bindBuffer(b.ARRAY_BUFFER, this.Ml[this.wf]);
                    b.bufferSubData(b.ARRAY_BUFFER, 0, this.Nl.subarray(0, this.Ug));
                    c && 0 <= c.Mg && "<point>" !== c.name && b.vertexAttribPointer(c.Mg, 2, b.FLOAT, !1, 0, 0)
                }
                for (var d, b = 0, c = this.Td; b < c; b++) switch (d = this.me[b], d.type) {
                    case 1:
                        d.FD();
                        break;
                    case 2:
                        d.PD();
                        break;
                    case 3:
                        d.MD();
                        break;
                    case 4:
                        d.ID();
                        break;
                    case 5:
                        d.SD();
                        break;
                    case 6:
                        d.GD();
                        break;
                    case 7:
                        d.CD();
                        break;
                    case 8:
                        d.ED();
                        break;
                    case 9:
                        d.ND();
                        break;
                    case 10:
                        d.OD();
                        break;
                    case 11:
                        d.QD();
                        break;
                    case 12:
                        d.JD();
                        break;
                    case 13:
                        d.KD();
                        break;
                    case 14:
                        d.LD()
                }
                this.tj = this.Ug = this.ie = this.Td = 0;
                this.Mn = this.wc = this.Xb = !1;
                this.wf++;
                4 <= this.wf && (this.wf = 0)
            }
        };
        f.prototype.De = function(b) {
            if (b !== this.bw && !this.Gk) {
                var c = this.Vc();
                c.type = 3;
                this.bw = c.bx = b;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.pc = function(b) {
            if (b !== this.Jg) {
                var c = this.Vc();
                c.type = 2;
                this.Jg = c.ge = b;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.Sg = function(b, c) {
            if ((b !== this.gw || c !== this.$v) && !this.Gk) {
                var d = this.Vc();
                d.type = 4;
                d.Bc = b;
                d.cd = c;
                this.gw = b;
                this.$v = c;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.Gx = function() {
            this.Sg(this.S.ONE, this.S.ONE_MINUS_SRC_ALPHA)
        };
        f.prototype.vj = function(b, c, d, a, g, e, k, t) {
            15992 <= this.ie && this.Ne();
            var f = this.ie,
                h = this.Ug,
                q = this.Yl,
                v = this.Nl,
                u = this.Zm;
            if (this.Xb) this.me[this.Td - 1].cd += 6;
            else {
                var l = this.Vc();
                l.type = 1;
                l.Bc = this.Ta ? f : f / 2 * 3;
                l.cd = 6;
                this.Xb = !0;
                this.wc = !1
            }
            this.Ta ? (q[f++] = b, q[f++] = c, q[f++] = u, q[f++] = d, q[f++] = a, q[f++] = u, q[f++] = g, q[f++] = e, q[f++] = u, q[f++] = k, q[f++] = t, q[f++] = u) : (q[f++] = b, q[f++] = c, q[f++] = d, q[f++] = a, q[f++] = g, q[f++] = e, q[f++] = k, q[f++] = t);
            v[h++] = 0;
            v[h++] = 0;
            v[h++] = 1;
            v[h++] = 0;
            v[h++] = 1;
            v[h++] = 1;
            v[h++] = 0;
            v[h++] = 1;
            this.ie = f;
            this.Ug = h
        };
        f.prototype.Cd = function(b, c, d, a, g, e, k, t, f) {
            15992 <= this.ie && this.Ne();
            var h = this.ie,
                q = this.Ug,
                v = this.Yl,
                u = this.Nl,
                l = this.Zm;
            if (this.Xb) this.me[this.Td - 1].cd += 6;
            else {
                var D = this.Vc();
                D.type = 1;
                D.Bc = this.Ta ? h : h / 2 * 3;
                D.cd = 6;
                this.Xb = !0;
                this.wc = !1
            }
            var D = f.left,
                x = f.top,
                E = f.right;
            f = f.bottom;
            this.Ta ? (v[h++] = b, v[h++] = c, v[h++] = l, v[h++] = d, v[h++] = a, v[h++] = l, v[h++] = g, v[h++] = e, v[h++] = l, v[h++] = k, v[h++] = t, v[h++] = l) : (v[h++] = b, v[h++] = c, v[h++] = d, v[h++] = a, v[h++] = g, v[h++] = e, v[h++] = k, v[h++] = t);
            u[q++] = D;
            u[q++] = x;
            u[q++] = E;
            u[q++] = x;
            u[q++] = E;
            u[q++] = f;
            u[q++] = D;
            u[q++] = f;
            this.ie = h;
            this.Ug = q
        };
        f.prototype.FG = function(b, c, d, a, g, e, k, t, f, h, q, v, u, l, D, x) {
            15992 <= this.ie && this.Ne();
            var E = this.ie,
                p = this.Ug,
                n = this.Yl,
                w = this.Nl,
                K = this.Zm;
            if (this.Xb) this.me[this.Td - 1].cd += 6;
            else {
                var P = this.Vc();
                P.type = 1;
                P.Bc = this.Ta ? E : E / 2 * 3;
                P.cd = 6;
                this.Xb = !0;
                this.wc = !1
            }
            this.Ta ? (n[E++] = b, n[E++] = c, n[E++] = K, n[E++] = d, n[E++] = a, n[E++] = K, n[E++] = g, n[E++] = e, n[E++] = K, n[E++] = k, n[E++] = t, n[E++] = K) : (n[E++] = b, n[E++] = c, n[E++] = d, n[E++] = a, n[E++] = g, n[E++] = e, n[E++] = k, n[E++] = t);
            w[p++] = f;
            w[p++] = h;
            w[p++] = q;
            w[p++] = v;
            w[p++] = u;
            w[p++] = l;
            w[p++] = D;
            w[p++] = x;
            this.ie = E;
            this.Ug = p
        };
        f.prototype.uG = function(b, c, d, a) {
            7996 <= this.tj && this.Ne();
            var g = this.tj,
                e = this.ss;
            if (this.wc) this.me[this.Td - 1].cd++;
            else {
                var k = this.Vc();
                k.type = 8;
                k.Bc = g;
                k.cd = 1;
                this.wc = !0;
                this.Xb = !1
            }
            e[g++] = b;
            e[g++] = c;
            e[g++] = d;
            e[g++] = a;
            this.tj = g
        };
        f.prototype.md = function(b) {
            if (this.Rk !== b) {
                if (!this.ob[b]) {
                    if (0 === this.Rk) return;
                    b = 0
                }
                var c = this.Vc();
                c.type = 9;
                this.Rk = c.Bc = b;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.rl = function(b) {
            b = this.ob[b];
            return !(!b.Ph && !b.Oh)
        };
        f.prototype.vs = function(b) {
            b = this.ob[b];
            return !!(b.Ph || b.Oh || b.cv)
        };
        f.prototype.us = function(b) {
            return this.ob[b].ze
        };
        f.prototype.CG = function(b) {
            b = this.ob[b];
            return 0 !== b.xq || 0 !== b.yq
        };
        f.prototype.YE = function(b) {
            return this.ob[b].xq
        };
        f.prototype.ZE = function(b) {
            return this.ob[b].yq
        };
        f.prototype.$E = function(b, c) {
            return this.ob[b].la[c][2]
        };
        f.prototype.Do = function(b) {
            return this.ob[b].Mu
        };
        f.prototype.yj = function(b, c, d, a, g, e, k, t, f, h, q, v, u, l, p) {
            var x = this.ob[this.Rk],
                E, n;
            if (x.tF || p.length) {
                E = this.Vc();
                E.type = 10;
                E.ta ? tc(this.Kd, E.ta) : E.ta = sc();
                n = E.ta;
                n[0] = c;
                n[1] = d;
                n[2] = a;
                n[3] = g;
                n[4] = e;
                n[5] = k;
                n[6] = t;
                n[7] = f;
                n[8] = h;
                n[9] = q;
                n[10] = v;
                n[11] = u;
                n[12] = l;
                x.Zk ? E.ge = b : E.ge = null;
                if (p.length)
                    for (d = E.Sx, d.length = p.length, b = 0, c = p.length; b < c; b++) d[b] = p[b];
                this.wc = this.Xb = !1
            }
        };
        f.prototype.clear = function(b, c, d, a) {
            var g = this.Vc();
            g.type = 7;
            g.Bc = 0;
            g.ta || (g.ta = sc());
            g.ta[0] = b;
            g.ta[1] = c;
            g.ta[2] = d;
            g.ta[3] = a;
            this.wc = this.Xb = !1
        };
        f.prototype.clearRect = function(b, c, d, a) {
            if (!(0 > d || 0 > a)) {
                var g = this.Vc();
                g.type = 7;
                g.Bc = 1;
                g.ta || (g.ta = sc());
                g.ta[0] = b;
                g.ta[1] = c;
                g.ta[2] = d;
                g.ta[3] = a;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.Kx = function(b) {
            if (this.Ta && (b = !!b, this.Gk !== b)) {
                var c = this.Vc();
                c.type = 14;
                c.Bc = b ? 1 : 0;
                this.wc = this.Xb = !1;
                this.Gk = b;
                this.Ho = null;
                this.Gk ? this.md(2) : this.md(0)
            }
        };
        f.prototype.Ix = function(b) {
            if (this.Ta) {
                var c = this.Vc();
                c.type = 13;
                c.Bc = b ? 1 : 0;
                this.wc = this.Xb = !1
            }
        };
        f.prototype.wv = function() {
            tc(this.tr, l);
            this.be();
            this.Qd();
            var b = this.width / 2,
                c = this.height / 2;
            this.vj(-b, c, b, c, b, -c, -b, -c);
            tc(l, this.Kd);
            this.Qd()
        };
        f.prototype.Hx = function(b, c, d) {
            this.md(3);
            var a = this.Vc();
            a.type = 12;
            a.ta || (a.ta = sc());
            a.ta[0] = b;
            a.ta[1] = c;
            a.ta[2] = d;
            a.ta[3] = 1;
            this.wc = this.Xb = !1
        };
        f.prototype.eH = function() {
            this.md(0)
        };
        f.prototype.LG = function() {
            this.md(2)
        };
        f.prototype.BG = function() {
            this.Ne();
            this.S.flush()
        };
        var c = [],
            e = {};
        f.prototype.pD = function() {
            G(c);
            e = {}
        };
        f.prototype.ed = function(b, f, d, a, g) {
            f = !!f;
            d = !!d;
            var m = b.src + "," + f + "," + d + (f ? "," + g : ""),
                k = null;
            if ("undefined" !== typeof b.src && e.hasOwnProperty(m)) return k = e[m], k.Lm++, k;
            this.Ne();
            var t = this.S,
                h = na(b.width) && na(b.height),
                k = t.createTexture();
            t.bindTexture(t.TEXTURE_2D, k);
            t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var C = t.RGBA,
                q = t.RGBA,
                v = t.UNSIGNED_BYTE;
            if (a && !this.Jf) switch (a) {
                case 1:
                    q = C = t.RGB;
                    break;
                case 2:
                    v = t.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    v = t.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    q = C = t.RGB, v = t.UNSIGNED_SHORT_5_6_5
            }
            if (1 === this.version && !h && f) {
                a = document.createElement("canvas");
                a.width = oa(b.width);
                a.height = oa(b.height);
                var u = a.getContext("2d");
                "undefined" !== typeof u.imageSmoothingEnabled ? u.imageSmoothingEnabled = d : (u.webkitImageSmoothingEnabled = d, u.mozImageSmoothingEnabled = d, u.msImageSmoothingEnabled = d);
                u.drawImage(b, 0, 0, b.width, b.height, 0, 0, a.width, a.height);
                t.texImage2D(t.TEXTURE_2D, 0, C, q, v, a)
            } else t.texImage2D(t.TEXTURE_2D, 0, C, q, v, b);
            f ? "repeat-x" === g ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)) : ("repeat-y" === g ? t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE));
            d ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), (h || 2 <= this.version) && this.ov ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR), t.generateMipmap(t.TEXTURE_2D)) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST));
            t.bindTexture(t.TEXTURE_2D, null);
            this.Jg = null;
            k.pe = b.width;
            k.oe = b.height;
            k.Lm = 1;
            k.Wu = m;
            c.push(k);
            return e[m] = k
        };
        f.prototype.sd = function(b, e, d, a, g) {
            this.Ne();
            var m = this.S;
            this.Jf && (a = !1);
            var k = m.createTexture();
            m.bindTexture(m.TEXTURE_2D, k);
            m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, b, e, 0, m.RGBA, a ? m.UNSIGNED_SHORT_4_4_4_4 : m.UNSIGNED_BYTE, null);
            g ? (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.REPEAT), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.REPEAT)) : (m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE));
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, d ? m.LINEAR : m.NEAREST);
            m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, d ? m.LINEAR : m.NEAREST);
            m.bindTexture(m.TEXTURE_2D, null);
            this.Jg = null;
            k.pe = b;
            k.oe = e;
            c.push(k);
            return k
        };
        f.prototype.Ey = function(b, c, d) {
            this.Ne();
            var a = this.S;
            this.Jf && (d = !1);
            a.bindTexture(a.TEXTURE_2D, c);
            a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, d ? a.UNSIGNED_SHORT_4_4_4_4 : a.UNSIGNED_BYTE, b)
            } catch (g) {
                console && console.error && console.error("Error updating WebGL texture: ", g)
            }
            a.bindTexture(a.TEXTURE_2D, null);
            this.Jg = null
        };
        f.prototype.deleteTexture = function(b) {
            b && ("undefined" !== typeof b.Lm && 1 < b.Lm ? b.Lm-- : (this.Ne(), b === this.Jg && (this.S.bindTexture(this.S.TEXTURE_2D, null), this.Jg = null), b === this.Hh && (this.S.activeTexture(this.S.TEXTURE1), this.S.bindTexture(this.S.TEXTURE_2D, null), this.S.activeTexture(this.S.TEXTURE0), this.Hh = null), Ka(c, b), "undefined" !== typeof b.Wu && delete e[b.Wu], this.S.deleteTexture(b)))
        };
        f.prototype.de = function(b) {
            if (b !== this.Ho) {
                var c = this.Vc();
                c.type = 6;
                this.Ho = c.ge = b;
                this.wc = this.Xb = !1
            }
        };
        sb = f
    })();
(function() {
    function f(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Sc = (this.Fk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.hc = !!a.dc;
            this.Rv = "undefined" !== typeof window.AppMobi || this.hc;
            this.dd = !!window.c2cocoonjs;
            this.Yd = !!window.c2ejecta;
            this.dd && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Yd && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.ba = this.hc || this.dd || this.Yd;
            this.Kk = /edge\//i.test(navigator.userAgent);
            this.Jf = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Kk;
            this.nr = /tizen/i.test(navigator.userAgent);
            this.gc = /android/i.test(navigator.userAgent) && !this.nr && !this.Jf && !this.Kk;
            this.Vv = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Jf && !this.Kk;
            this.NF = /ipad/i.test(navigator.userAgent);
            this.Jb = this.Vv || this.NF || this.Yd;
            this.hr = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Jf && !this.Kk;
            this.Kn = /amazonwebappplatform/i.test(navigator.userAgent);
            this.DF = /firefox/i.test(navigator.userAgent);
            this.IF = /safari/i.test(navigator.userAgent) && !this.hr && !this.Jf && !this.Kk;
            this.JF = /windows/i.test(navigator.userAgent);
            this.Nn = this.Pi = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.BF = "undefined" !== typeof window.is_scirra_arcade;
            this.Si = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.LF = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Jc = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.We = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.Qn = !!window.cr_windows10;
            this.Pn = this.Si || this.LF || this.We || this.Qn;
            this.Oi = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.Ln = this.gc && !this.hr && !this.Fk && !this.DF && !this.Kn && !this.ba;
            this.devicePixelRatio = 1;
            this.Kf = this.Sc || this.Fk || this.Rv || this.dd || this.gc || this.Jb || this.Jc || this.We || this.Oi || this.nr || this.Yd;
            this.Kf || (this.Kf = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.On = !!(this.Jb && this.Sc && window.webkit);
            "undefined" === typeof cr_is_preview || this.Pi || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Pi = !0);
            this.Sv = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
            this.canvas = a;
            this.Om = document.getElementById("c2canvasdiv");
            this.H = this.S = null;
            this.Sq = "(unavailable)";
            this.Ta = !1;
            this.nh = 0;
            this.Sa = null;
            this.sn = !1;
            this.Tw = this.Uw = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.hc && (window.c2runtime = this);
            this.Pi && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.Ln && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.aa = this.width;
            this.Z = this.height;
            this.Wm = this.width;
            this.mk = this.height;
            this.cj = window.innerWidth;
            this.bj = window.innerHeight;
            this.W = !0;
            this.Lk = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.P = [];
            this.jb = [];
            this.Fr = {};
            this.se = [];
            this.wq = {};
            this.Cf = [];
            this.Mj = [];
            this.lp = [];
            this.bD = [];
            this.cD = [];
            this.Xv = this.Zx = null;
            this.kh = {};
            this.jr = this.Gg = !1;
            this.Id = 0;
            this.ir = this.mr = !1;
            this.qe = [];
            this.Ik = !1;
            this.Yn = this.Is = "";
            this.$b = null;
            this.Nf = "";
            this.Kl = this.Vx = !1;
            this.rn = [];
            this.mh = this.Bg = 0;
            this.Lw = 30;
            this.hq = this.cl = 0;
            this.Wg = 1;
            this.kc = new ib;
            this.jg = new ib;
            this.lo = this.yn = this.rh = this.Pd = this.Jh = this.Cq = this.Vn = 0;
            this.gh = null;
            this.gn = [];
            this.vq = [];
            this.kn = -1;
            this.Nr = [
                []
            ];
            this.ct = this.bo = 0;
            this.Eo(null);
            this.dl = [];
            this.el = -1;
            this.Ow = this.jl = 0;
            this.Er = !0;
            this.sk = 0;
            this.Ll = [];
            this.Ys = this.zs = -1;
            this.Yi = !0;
            this.gj = 0;
            this.Ve = !1;
            this.jH = 0;
            this.qi = null;
            this.yb = this.Gn = !1;
            this.Sw = new da;
            this.Zr = new da;
            this.$r = new da;
            this.xl = [];
            this.Ee = new kb([]);
            this.Ts = new kb([]);
            this.rg = [];
            this.zk = {};
            this.yg = {};
            this.pg = {};
            this.Jj = {};
            this.Ru = {};
            this.mw = this.Xn = this.Kb = this.Zb = this.lw = this.Wn = this.ma = null;
            this.Hj = this.or = !1;
            this.Eq = [null, null];
            this.Ff = 0;
            this.qn = "";
            this.Sf = {};
            this.Il = this.Kg = null;
            this.Xx = "";
            this.ko = [];
            this.KG()
        }
    }

    function p(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function n() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function h(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function l(a, b, c, d) {
        try {
            var g = indexedDB.open("_C2SaveStates");
            g.onupgradeneeded = h;
            g.onerror = d;
            g.onsuccess = function(g) {
                g = g.target.result;
                g.onerror = d;
                g.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = c
            }
        } catch (e) {
            d(e)
        }
    }

    function c(a, b, c) {
        try {
            var d = indexedDB.open("_C2SaveStates");
            d.onupgradeneeded = h;
            d.onerror = c;
            d.onsuccess = function(d) {
                d = d.target.result;
                d.onerror = c;
                var g = d.transaction(["saves"]).objectStore("saves").get(a);
                g.onsuccess = function() {
                    g.result ? b(g.result.data) : b(null)
                }
            }
        } catch (g) {
            c(g)
        }
    }

    function e() {
        ha("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function b(a) {
        var b, c = {};
        for (b in a)!a.hasOwnProperty(b) || a[b] instanceof da || a[b] && "undefined" !== typeof a[b].cI || "spriteCreatedDestroyCallback" !== b && (c[b] = a[b]);
        return c
    }
    var r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    f.prototype.KG = function() {
        var a = this;
        if (this.On) this.GE(function(b) {
            a.Wk(JSON.parse(b))
        }, function() {
            alert("Error fetching data.js")
        });
        else {
            var b;
            this.Jc ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var c = "./js/data.js";
            if (this.Si || this.Jc || this.We || this.Qn) c = "data.json";
            b.open("GET", c, !0);
            var d = !1;
            if (!this.ba && "response" in b && "responseType" in b) try {
                b.responseType = "json", d = "json" === b.responseType
            } catch (g) {
                d = !1
            }
            if (!d && "responseType" in b) try {
                b.responseType = "text"
            } catch (e) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (k) {}
            this.Jc ? b.onreadystatechange = function() {
                4 === b.readyState && a.Wk(JSON.parse(b.responseText))
            } : (b.onload = function() {
                if (d) a.Wk(b.response);
                else if (a.Yd) {
                    var c = b.responseText,
                        c = c.substr(c.indexOf("{"));
                    a.Wk(JSON.parse(c))
                } else a.Wk(JSON.parse(b.responseText))
            }, b.onerror = function(a) {
                ia("Error requesting " + c + ":");
                ia(a)
            });
            b.send()
        }
    };
    f.prototype.xF = function() {
        var a = this,
            b, c, d, g, e, k, m, t, q;
        this.Ch = (!this.ba || this.Yd || this.Sc) && this.sH && !this.Ln;
        0 === this.Qc && this.Jb && (this.Ch = !1);
        this.devicePixelRatio = this.Ch ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Cc();
        0 < this.Qc && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(b) {
            b.preventDefault();
            a.hG();
            ha("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.H.Mv();
            a.H.Yh(a.H.width, a.H.height, !0);
            a.Zb = null;
            a.Kb = null;
            a.Eq[0] = null;
            a.Eq[1] = null;
            a.iG();
            a.W = !0;
            ha("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.nv && (this.dd || this.Yd || !this.ba) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.S = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (f) {}
        if (this.S) {
            if (b = this.S.getExtension("WEBGL_debug_renderer_info")) this.Sq = this.S.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.S.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Ta && (this.Sq += " [front-to-back enabled]");
            this.ba || (this.yc = document.createElement("canvas"), jQuery(this.yc).appendTo(this.canvas.parentNode), this.yc.oncontextmenu = function() {
                return !1
            }, this.yc.onselectstart = function() {
                return !1
            }, this.yc.width = Math.round(this.Wm * this.devicePixelRatio), this.yc.height = Math.round(this.mk * this.devicePixelRatio), jQuery(this.yc).css({
                width: this.Wm + "px",
                height: this.mk + "px"
            }), this.tx(), this.ls = this.yc.getContext("2d"));
            this.H = new sb(this.S, this.Kf, this.Ta);
            this.H.Yh(this.canvas.width, this.canvas.height);
            this.H.ov = 0 !== this.TD;
            this.Sa = null;
            b = 0;
            for (c = this.P.length; b < c; b++)
                for (e = this.P[b], d = 0, g = e.ja.length; d < g; d++) m = e.ja[d], m.Rb = this.H.Pq(m.id), m.ze = this.H.us(m.Rb), this.Hj = this.Hj || this.H.rl(m.Rb);
            b = 0;
            for (c = this.se.length; b < c; b++) {
                t = this.se[b];
                d = 0;
                for (g = t.ja.length; d < g; d++) m = t.ja[d], m.Rb = this.H.Pq(m.id), m.ze = this.H.us(m.Rb);
                t.He();
                d = 0;
                for (g = t.ra.length; d < g; d++) {
                    q = t.ra[d];
                    e = 0;
                    for (k = q.ja.length; e < k; e++) m = q.ja[e], m.Rb = this.H.Pq(m.id), m.ze = this.H.us(m.Rb), this.Hj = this.Hj || this.H.rl(m.Rb);
                    q.He()
                }
            }
        } else {
            if (0 < this.Qc && this.hc) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Sa = AppMobi.canvas.getContext("2d");
                try {
                    this.Sa.samplingMode = this.Ha ? "smooth" : "sharp", this.Sa.globalScale = 1, this.Sa.HTML5CompatibilityMode = !0, this.Sa.imageSmoothingEnabled = this.Ha
                } catch (h) {}
                0 !== this.width && 0 !== this.height && (this.Sa.width = this.width, this.Sa.height = this.height)
            }
            this.Sa || (this.dd ? (b = {
                antialias: !!this.Ha,
                alpha: !0
            }, this.Sa = this.canvas.getContext("2d", b)) : (b = {
                alpha: !0
            }, this.Sa = this.canvas.getContext("2d", b)), this.No(this.Sa, this.Ha));
            this.ls = this.yc = null
        }
        this.fy = function(b) {
            a.Ra(!1, b)
        };
        window == window.top || this.ba || this.Pn || this.Jc || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.dd && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ha("Reloading for continuous preview"), this.Yn = "__c2_continuouspreview", this.Kl = !0), this.sG && !this.Kf && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.Tf()
        });
        this.ba || (b = function(a) {
            if (rb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.Qc && this.Ch && 1 < this.devicePixelRatio && this.setSize(this.Mb, this.Lb, !0);
        this.ry();
        this.qF();
        this.go();
        this.T = {}
    };
    f.prototype.setSize = function(a, b, c) {
        var d = 0,
            g = 0,
            e = 0,
            k = 0,
            k = 0;
        if (this.cj !== a || this.bj !== b || c) {
            this.cj = a;
            this.bj = b;
            var m = this.Qc;
            if ((e = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Ve) && !this.Sc) || 0 !== this.Qc || c) e && 0 < this.Ff && (m = this.Ff), c = this.devicePixelRatio, 4 <= m ? (e = this.Mb /
                    this.Lb, a / b > e ? (e *= b, 5 === m ? (k = e * c / this.Mb, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), e = this.Mb * k / c, k = this.Lb * k / c, d = (a - e) / 2, g = (b - k) / 2, a = e, b = k) : (d = (a - e) / 2, a = e)) : (k = a / e, 5 === m ? (k = k * c / this.Lb, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), e = this.Mb * k / c, k = this.Lb * k / c, d = (a - e) / 2, g = (b - k) / 2, a = e) : g = (b - k) / 2, b = k)) : this.Pi && this.Ve && 0 === this.xv && (d = Math.floor((a - this.Mb) / 2), g = Math.floor((b - this.Lb) / 2), a = this.Mb, b = this.Lb), 2 > m && (this.ek = c), this.Wm = Math.round(a), this.mk = Math.round(b), this.width = Math.round(a * c),
                this.height = Math.round(b * c), this.W = !0, this.Fy ? (this.aa = this.width, this.Z = this.height, this.Fd = !0) : this.width < this.Mb && this.height < this.Lb || 1 === m ? (this.aa = this.width, this.Z = this.height, this.Fd = !0) : (this.aa = this.Mb, this.Z = this.Lb, this.Fd = !1, 2 === m ? (e = this.Mb / this.Lb, m = this.cj / this.bj, m < e ? this.aa = this.Z * m : m > e && (this.Z = this.aa / m)) : 3 === m && (e = this.Mb / this.Lb, m = this.cj / this.bj, m > e ? this.aa = this.Z * m : m < e && (this.Z = this.aa / m))), this.Om && !this.ba && (jQuery(this.Om).css({
                    width: Math.round(a) + "px",
                    height: Math.round(b) + "px",
                    "margin-left": Math.floor(d) + "px",
                    "margin-top": Math.floor(g) + "px"
                }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                    width: Math.round(a) + "px",
                    height: Math.round(b) + "px"
                })), this.canvas && (this.canvas.width = Math.round(a * c), this.canvas.height = Math.round(b * c), this.Yd ? (this.canvas.style.left = Math.floor(d) + "px", this.canvas.style.top = Math.floor(g) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.Ch && !this.ba && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.yc && (this.yc.width = Math.round(a * c), this.yc.height = Math.round(b * c), this.yc.style.width = this.Wm + "px", this.yc.style.height = this.mk + "px"), this.H && this.H.Yh(Math.round(a * c), Math.round(b * c)), this.hc && this.Sa && (this.Sa.width = Math.round(a), this.Sa.height = Math.round(b)), this.Sa && this.No(this.Sa, this.Ha), this.ry(), this.Vv && !this.Sc && window.scrollTo(0, 0)
        }
    };
    f.prototype.ry = function() {
        if (this.gD && 0 !== this.ks) {
            var a = "portrait";
            2 === this.ks && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    f.prototype.hG = function() {
        this.H.pD();
        this.or = !0;
        var a, b, c;
        a = 0;
        for (b = this.P.length; a < b; a++) c = this.P[a], c.Ng && c.Ng()
    };
    f.prototype.iG = function() {
        this.or = !1;
        var a, b, c;
        a = 0;
        for (b = this.P.length; a < b; a++) c = this.P[a], c.Vh && c.Vh()
    };
    f.prototype.tx = function() {
        if (!this.ba) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Ve) && !this.Sc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.yc).css(a)
        }
    };
    var d = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    f.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Lk)
            for (ha("[Construct 2] Suspending"), this.Lk = !0, -1 !== this.zs && d && d(this.zs), -1 !== this.Ys && clearTimeout(this.Ys), a = 0, b = this.Ll.length; a < b; a++) this.Ll[a](!0);
        else if (!a && this.Lk) {
            ha("[Construct 2] Resuming");
            this.Lk = !1;
            this.Vn = cb();
            this.Jh = cb();
            a = this.cl = this.yn = 0;
            for (b = this.Ll.length; a < b; a++) this.Ll[a](!1);
            this.Ra(!1)
        }
    };
    f.prototype.Vp = function(a) {
        this.Ll.push(a)
    };
    f.prototype.lg = function(a) {
        return this.ko[a]
    };
    f.prototype.Wk = function(a) {
        a && a.project || ia("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.vv = a[1];
        this.Qc = a[12];
        this.xv = a[12];
        this.Mb = a[10];
        this.Lb = a[11];
        this.mx = this.Mb / 2;
        this.nx = this.Lb / 2;
        this.ba && !this.Yd && (4 <= a[12] || 0 === a[12]) && (ha("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.xv = this.Qc = 3);
        this.nt = a[18];
        this.Lg = a[19];
        if (0 === this.Lg) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.Mx(b, "loading-logo.png");
            this.Kg = {
                co: b
            }
        } else if (4 === this.Lg) {
            b = new Image;
            b.src = "";
            var c = new Image;
            c.src = "";
            var d = new Image;
            d.src = "";
            var g = new Image;
            g.src = "";
            var e = new Image;
            e.src = "";
            var k = new Image;
            k.src = "";
            var m = new Image;
            m.src = "";
            var t = new Image;
            t.src = "";
            var q = new Image;
            q.src = "";
            var f = new Image;
            f.src = "";
            var h = new Image;
            h.src = "";
            var v = new Image;
            v.src = "";
            this.Kg = {
                co: [b, c, d, g],
                yG: [e, k, m, t],
                AH: [q, f, h, v]
            }
        }
        this.jl = a[21];
        this.ko = xc();
        this.hf = new V(this);
        b = 0;
        for (c = a[2].length; b < c; b++) m = a[2][b], d = this.lg(m[0]), tb(m, d.prototype), t = new d(this), t.To = m[1], t.Ig = m[2], t.MF = m[5], t.Nw = m[9], t.J && t.J(), this.plugins.push(t);
        this.ko = xc();
        b = 0;
        for (c = a[3].length; b < c; b++) {
            m = a[3][b];
            e = this.lg(m[1]);
            t = null;
            d = 0;
            for (g = this.plugins.length; d < g; d++)
                if (this.plugins[d] instanceof e) {
                    t = this.plugins[d];
                    break
                }
            q = new t.N(t);
            q.name = m[0];
            q.R = m[2];
            q.fr = m[3].slice(0);
            q.uH = m[3].length;
            q.hD = m[4];
            q.LE = m[5];
            q.za = m[11];
            q.R ? (q.kj = [], q.Df = this.sk++, q.ib = null) : (q.kj = null, q.Df = -1, q.ib = []);
            q.nn = null;
            q.Ei = null;
            q.pv = null;
            q.ic = !1;
            q.rd = null;
            m[6] ? (q.ci = m[6][0], q.Ej = m[6][1], q.kf = m[6][2]) : (q.ci = null, q.Ej = 0, q.kf = 0);
            m[7] ? q.od = m[7] : q.od = null;
            q.index = b;
            q.q = [];
            q.an = [];
            q.dg = [new ub(q)];
            q.Me = 0;
            q.Wd = null;
            q.vD = 0;
            q.Cj = !0;
            q.mp = vb;
            q.Dv = wb;
            q.WE = xb;
            q.V = yb;
            q.sl = Eb;
            q.Qg = Fb;
            q.ye = Gb;
            q.An = Hb;
            q.Hq = Ib;
            q.Lq = Jb;
            q.ad = Kb;
            q.Mq = Lb;
            q.hk = new lb(this.Mb, this.Lb);
            q.Dm = !0;
            q.Em = !1;
            q.T = {};
            q.toString = Mb;
            q.jb = [];
            d = 0;
            for (g = m[8].length; d < g; d++) {
                f = m[8][d];
                h = this.lg(f[1]);
                v = null;
                e = 0;
                for (k = this.jb.length; e < k; e++)
                    if (this.jb[e] instanceof h) {
                        v = this.jb[e];
                        break
                    }
                v || (v = new h(this), v.ho = [], v.Wr = new da, v.J && v.J(), this.jb.push(v), yc && v instanceof yc && (this.Zx = v), pc.PF && v instanceof pc.PF && (this.Xv = v)); - 1 === v.ho.indexOf(q) && v.ho.push(q);
                e = new v.N(v, q);
                e.name = f[0];
                e.za = f[2];
                e.J();
                q.jb.push(e)
            }
            q.global = m[9];
            q.lr = m[10];
            q.ja = [];
            d = 0;
            for (g = m[12].length; d < g; d++) q.ja.push({
                id: m[12][d][0],
                name: m[12][d][1],
                Rb: -1,
                ze: !1,
                eb: !0,
                index: d
            });
            q.fp = m[13];
            this.nt && !q.R && !q.lr && t.Ig || q.J();
            q.name && (this.types[q.name] = q);
            this.P.push(q);
            t.To && (d = new t.K(q), d.uid = this.jl++, d.xx = this.Ow++, d.Ah = 0, d.xk = Nb, d.toString = Ob, d.B = m[14], d.J(), q.q.push(d), this.Sf[d.uid.toString()] = d)
        }
        b = 0;
        for (c = a[4].length; b < c; b++)
            for (e = a[4][b], k = this.P[e[0]], d = 1, g = e.length; d < g; d++) m = this.P[e[d]], m.ib.push(k), k.kj.push(m);
        b = 0;
        for (c = a[28].length; b < c; b++) {
            e = a[28][b];
            k = [];
            d = 0;
            for (g = e.length; d < g; d++) k.push(this.P[e[d]]);
            d = 0;
            for (g = k.length; d < g; d++) k[d].ic = !0, k[d].rd = k
        }
        if (0 < this.sk)
            for (b = 0, c = this.P.length; b < c; b++)
                if (m = this.P[b], !m.R && m.ib.length) {
                    m.nn = Array(this.sk);
                    m.Ei = Array(this.sk);
                    m.pv = Array(this.sk);
                    q = [];
                    d = v = h = f = 0;
                    for (g = m.ib.length; d < g; d++)
                        for (t = m.ib[d], m.nn[t.Df] = f, f += t.uH, m.Ei[t.Df] = h, h += t.hD, m.pv[t.Df] = v, v += t.LE, e = 0, k = t.ja.length; e < k; e++) q.push(Ea({}, t.ja[e]));
                    m.ja = q.concat(m.ja);
                    d = 0;
                    for (g = m.ja.length; d < g; d++) m.ja[d].index = d
                }
        b = 0;
        for (c = a[5].length; b < c; b++) m = a[5][b], d = new Pb(this, m), this.Fr[d.name] = d, this.se.push(d);
        b = 0;
        for (c = a[6].length; b < c; b++) m = a[6][b], d = new Qb(this, m), this.wq[d.name] = d, this.Cf.push(d);
        b = 0;
        for (c = this.Cf.length; b < c; b++) this.Cf[b].Bb();
        b = 0;
        for (c = this.Cf.length; b < c; b++) this.Cf[b].ht();
        b = 0;
        for (c = this.lp.length; b < c; b++) this.lp[b].Bb();
        G(this.lp);
        this.fD = a[7];
        this.qn = a[8];
        this.oc = a[9];
        this.ek = 1;
        this.nv = a[13];
        this.Ha = a[14];
        this.$u = a[15];
        this.vH = a[16];
        this.sH = a[17];
        this.ks = a[20];
        this.gD = 0 < this.ks;
        this.sG = a[22];
        this.Fd = this.Fy = a[23];
        this.TD = a[24];
        this.zG = a[25];
        this.Ta = a[27] && !this.Jf;
        this.Yo = Date.now();
        G(this.ko);
        this.xF()
    };
    var a = !1,
        g = 0,
        m = [];
    f.prototype.GG = function(a, b) {
        function d() {
            g--;
            c.Hw()
        }
        var c = this;
        a.addEventListener("load", d);
        a.addEventListener("error", d);
        m.push([a, b]);
        this.Hw()
    };
    f.prototype.Hw = function() {
        for (var a; m.length && 100 > g;) g++, a = m.shift(), this.Mx(a[0], a[1])
    };
    f.prototype.Kj = function(b, d) {
        b.cocoonLazyLoad = !0;
        b.onerror = function(d) {
            a = b.Vu = !0;
            console && console.error && console.error("Error loading image '" + b.src + "': ", d)
        };
        this.Yd ? b.src = d : b.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(d, function(a) {
            b.src = a
        }, function(c) {
            a = b.Vu = !0;
            console && console.error && console.error("Error extracting image '" + d + "' from expansion file: ", c)
        }) : (b.crossOrigin = "anonymous", this.GG(b, d)));
        this.Mj.push(b)
    };
    f.prototype.IE = function(a) {
        var b, d;
        b = 0;
        for (d = this.Mj.length; b < d; b++)
            if (this.Mj[b].qD === a) return this.Mj[b];
        return null
    };
    var k = 0,
        t = !1;
    f.prototype.qF = function() {
        this.qi && (k = this.qi.cH(this.fD))
    };
    f.prototype.Ou = function() {
        var a = k,
            b = 0,
            d = 0,
            c = !0,
            g, e, d = 0;
        for (g = this.Mj.length; d < g; d++) {
            e = this.Mj[d];
            var m = e.jk;
            if (!m || 0 >= m) m = 5E4;
            a += m;
            e.src && (e.complete || e.loaded) && !e.Vu ? b += m : c = !1
        }
        c && this.zG && this.qi && (t || (this.qi.kH(), t = !0), d = this.qi.XE(), b += d, d < k && (c = !1));
        this.jd = 0 == a ? 1 : b / a;
        return c
    };
    var Q = !1;
    f.prototype.go = function() {
        if (this.Sa || this.H) {
            var b = this.Sa || this.ls;
            this.yc && this.tx();
            var d = window.innerWidth,
                c = window.innerHeight;
            this.cj === d && this.bj === c || this.setSize(d, c);
            this.jd = 0;
            this.kw = -1;
            var g = this;
            if (this.Ou() && (4 !== this.Lg || Q)) this.rF();
            else {
                c = Date.now() - this.Yo;
                if (b) {
                    var e = this.width,
                        k = this.height,
                        d = this.devicePixelRatio;
                    if (3 > this.Lg && (this.dd || 500 <= c && this.kw != this.jd)) {
                        b.clearRect(0, 0, e, k);
                        var c = e / 2,
                            k = k / 2,
                            e = 0 === this.Lg && this.Kg.co.complete,
                            m = 40 * d,
                            q = 0,
                            t = 80 * d,
                            f;
                        if (e) {
                            var h = this.Kg.co,
                                t = h.width * d;
                            f = h.height * d;
                            m = t / 2;
                            q = f / 2;
                            b.drawImage(h, z(c - m), z(k - q), t, f)
                        }
                        1 >= this.Lg ? (c = z(c - m) + .5, k = z(k + (q + (e ? 12 * d : 0))) + .5, b.fillStyle = a ? "red" : "DodgerBlue", b.fillRect(c, k, Math.floor(t * this.jd), 6 * d), b.strokeStyle = "black", b.strokeRect(c, k, t, 6 * d), b.strokeStyle = "white", b.strokeRect(c - 1 * d, k - 1 * d, t + 2 * d, 8 * d)) : 2 === this.Lg && (b.font = this.Yd ? "12pt ArialMT" : "12pt Arial", b.fillStyle = a ? "#f00" : "#999", b.xI = "middle", d = Math.round(100 * this.jd) + "%", e = b.measureText ? b.measureText(d) : null, b.fillText(d, c - (e ? e.width : 0) / 2, k));
                        this.kw = this.jd
                    } else if (4 === this.Lg) {
                        this.YD(b);
                        r ? r(function() {
                            g.go()
                        }) : setTimeout(function() {
                                g.go()
                            },
                            16);
                        return
                    }
                }
                setTimeout(function() {
                    g.go()
                }, this.dd ? 10 : 100)
            }
        }
    };
    var C = -1,
        q = "undefined" === typeof cr_is_preview ? 200 : 0,
        v = !0,
        u = !1,
        I = 0,
        D = 0,
        x = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        E = null,
        F = null,
        S = 0;
    f.prototype.YD = function(b) {
        if (!Q) {
            for (var d = Math.ceil(this.width), c = Math.ceil(this.height), g = this.Kg.co, e = this.Kg.yG, k = this.Kg.AH, m = 0; 4 > m; ++m)
                if (!g[m].complete || !e[m].complete || !k[m].complete) return;
            0 === S && (C = Date.now());
            var m = Date.now(),
                t = !1,
                f = b,
                h, r;
            v || u ? (b.clearRect(0, 0, d, c), E && E.width === d && E.height === c || (E = document.createElement("canvas"), E.width = d, E.height = c, F = E.getContext("2d")), f = F, t = !0, v && 1 === S && (C = Date.now())) : b.globalAlpha = 1;
            f.fillStyle = "#333333";
            f.fillRect(0, 0, d, c);
            256 < this.mk ? (h = La(.22 * c, 105, .6 * d), r = .25 * h, f.drawImage(p(e, h), .5 * d - h / 2, .2 * c - r / 2, h, r), r = h = Math.min(.395 * c, .95 * d), f.drawImage(p(g, h), .5 * d - h / 2, .485 * c - r / 2, h, r), h = La(.22 * c, 105, .6 * d), r = .25 * h, f.drawImage(p(k, h), .5 * d - h / 2, .868 * c - r / 2, h, r), f.fillStyle = "#3C3C3C", h = d, r = Math.max(.005 * c, 2), f.fillRect(0, .8 * c - r / 2, h, r), f.fillStyle = a ? "red" : "#E0FF65", h = d * this.jd, f.fillRect(.5 * d - h / 2, .8 * c - r / 2, h, r)) : (r = h = .55 * c, f.drawImage(p(g, h), .5 * d - h / 2, .45 * c - r / 2, h, r), f.fillStyle = "#3C3C3C", h = d, r = Math.max(.005 * c, 2), f.fillRect(0, .85 * c - r / 2, h, r), f.fillStyle = a ? "red" : "#E0FF65", h = d * this.jd, f.fillRect(.5 * d - h / 2, .85 * c - r / 2, h, r));
            t && (v ? b.globalAlpha = 0 === S ? 0 : Math.min((m - C) / 300, 1) : u && (b.globalAlpha = Math.max(1 - (m - D) / 300, 0)), b.drawImage(E, 0, 0, d, c));
            v && 300 <= m - C && 2 <= S && (v = !1, I = m);
            !v && m - I >= x && !u && 1 <= this.jd && (u = !0, D = m);
            if (u && m - D >= 300 + q || "undefined" !== typeof cr_is_preview && 1 <= this.jd &&
                500 > Date.now() - C) Q = !0, u = v = !1, this.Kg = F = E = null;
            ++S
        }
    };
    f.prototype.rF = function() {
        this.yc && (this.canvas.parentNode.removeChild(this.yc), this.yc = this.ls = null);
        this.Yo = Date.now();
        this.Jh = cb();
        var a, b, d;
        if (this.nt)
            for (a = 0, b = this.P.length; a < b; a++) d = this.P[a], d.R || d.lr || !d.X.Ig || d.J();
        else this.Yi = !1;
        a = 0;
        for (b = this.se.length; a < b; a++) this.se[a].rD();
        2 <= this.Qc && (a = this.Mb / this.Lb, b = this.width / this.height, this.ek = 2 !== this.Qc && b > a || 2 === this.Qc && b < a ? this.height / this.Lb : this.width / this.Mb);
        this.vv ? this.Fr[this.vv].Rs() : this.se[0].Rs();
        this.nt || (this.gj = 1, this.trigger(V.prototype.k.du, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.P.length; a < b; a++) d = this.P[a], d.Vw && d.Vw();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.Ra(!1);
        this.hc && AppMobi.webview.execute("onGameReady();")
    };
    f.prototype.Ra = function(a, b, d) {
        if (this.ma) {
            var c = cb();
            if (d || !this.Lk || a) {
                a || (r ? this.zs = r(this.fy) : this.Ys = setTimeout(this.fy, this.Kf ? 1 : 16));
                b = b || c;
                var g = this.Qc;
                ((d = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Sc) || this.Ve) && 0 < this.Ff && (g = this.Ff);
                if (0 < g) {
                    var g = window.innerWidth,
                        e = window.innerHeight;
                    this.cj === g && this.bj === e || this.setSize(g, e)
                }
                this.ba || (d ? this.sn || (this.sn = !0) : this.sn ? (this.sn = !1, 0 === this.Qc && this.setSize(Math.round(this.Uw / this.devicePixelRatio), Math.round(this.Tw / this.devicePixelRatio), !0)) : (this.Uw = this.width, this.Tw = this.height));
                this.Yi && (d = this.Ou(), this.gj = this.jd, d && (this.Yi = !1, this.jd = 1, this.trigger(V.prototype.k.du, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.XF(b);
                !this.W && !this.dd || this.or || this.Kl || a || (this.W = !1, this.H ? this.Za() : this.xb(), this.Il && (this.canvas && this.canvas.toDataURL && (this.Xx = this.canvas.toDataURL(this.Il[0], this.Il[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Xx), this.trigger(V.prototype.k.pA, null)), this.Il = null));
                this.fI || (this.Pd++, this.rh++, this.yn++);
                this.cl += cb() - c
            }
        }
    };
    f.prototype.XF = function(a) {
        var b, d, c, g, e, k, m, q;
        1E3 <= a - this.Jh && (this.Jh += 1E3, 1E3 <= a - this.Jh && (this.Jh = a), this.Cq = this.yn, this.yn = 0, this.hq = this.cl, this.cl = 0);
        b = 0;
        0 !== this.Vn && (b = a - this.Vn, 0 > b && (b = 0), this.mh = b /= 1E3, .5 < this.mh ? this.mh = 0 : this.mh > 1 / this.Lw && (this.mh = 1 / this.Lw));
        this.Vn = a;
        this.Bg = this.mh * this.Wg;
        this.kc.add(this.Bg);
        this.jg.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Ve) && !this.Sc;
        2 <= this.Qc || a && 0 < this.Ff ? (b = this.Mb / this.Lb, d = this.width / this.height, c = this.Qc, a && 0 < this.Ff && (c = this.Ff), this.ek = 2 !== c && d > b || 2 === c && d < b ? this.height / this.Lb : this.width / this.Mb, this.ma && (this.ma.Js(this.ma.scrollX), this.ma.Ks(this.ma.scrollY))) : this.ek = this.Ch ? this.devicePixelRatio : 1;
        this.Cc();
        this.Id++;
        this.hf.QG();
        this.Id--;
        this.Cc();
        this.Id++;
        d = this.Sw.Yg();
        a = 0;
        for (b = d.length; a < b; a++) d[a].sI();
        a = 0;
        for (b = this.P.length; a < b; a++)
            if (k = this.P[a], !k.R && (k.jb.length || k.ib.length))
                for (d = 0, c = k.q.length; d < c; d++)
                    for (m = k.q[d], g = 0, e = m.fa.length; g < e; g++) m.fa[g].Ra();
        a = 0;
        for (b = this.P.length; a < b; a++)
            if (k = this.P[a], !k.R && (k.jb.length || k.ib.length))
                for (d = 0, c = k.q.length; d < c; d++)
                    for (m = k.q[d], g = 0, e = m.fa.length; g < e; g++) q = m.fa[g], q.ux && q.ux();
        d = this.Zr.Yg();
        a = 0;
        for (b = d.length; a < b; a++) d[a].Ra();
        this.Id--;
        this.sF();
        for (a = 0; this.gh && 10 > a++;) this.lv(this.gh);
        a = 0;
        for (b = this.Cf.length; a < b; a++) this.Cf[a].Xq = !1;
        this.ma.ph && this.ma.ph.Qb();
        G(this.xl);
        this.Er = !1;
        this.Id++;
        a = 0;
        for (b = this.P.length; a < b; a++)
            if (k = this.P[a], !k.R && (k.jb.length || k.ib.length))
                for (d = 0, c = k.q.length; d < c; d++)
                    for (m = k.q[d], g = 0, e = m.fa.length; g < e; g++) q = m.fa[g], q.ep && q.ep();
        d = this.$r.Yg();
        a = 0;
        for (b = d.length; a < b; a++) d[a].ep();
        this.Id--
    };
    f.prototype.Tf = function() {
        var a, b, d, c, g, e, k, m, q;
        a = 0;
        for (b = this.P.length; a < b; a++)
            if (k = this.P[a], !k.R)
                for (d = 0, c = k.q.length; d < c; d++)
                    if (m = k.q[d], m.Tf && m.Tf(), m.fa)
                        for (g = 0, e = m.fa.length; g < e; g++) q = m.fa[g], q.Tf && q.Tf()
    };
    f.prototype.lv = function(a) {
        var b = this.ma;
        this.ma.lH();
        var d, c, g;
        if (this.H)
            for (d = 0, c = this.P.length; d < c; d++) g = this.P[d], g.R || !g.ei || g.global && 0 !== g.q.length || -1 !== a.Dk.indexOf(g) || g.ei();
        b == a && G(this.hf.nd);
        G(this.xl);
        this.Dx(!0);
        a.Rs();
        this.Dx(!1);
        this.Er = this.W = !0;
        this.Cc()
    };
    f.prototype.Dx = function(a) {
        var b, d, c, g, e, k, m, q, t;
        b = 0;
        for (d = this.jb.length; b < d; b++) c = this.jb[b], a ? c.kl && c.kl() : c.ol && c.ol();
        b = 0;
        for (d = this.P.length; b < d; b++)
            if (c = this.P[b], c.global || c.X.To)
                for (g = 0, e = c.q.length; g < e; g++)
                    if (k = c.q[g], a ? k.kl && k.kl() : k.ol && k.ol(), k.fa)
                        for (m = 0, q = k.fa.length; m < q; m++) t = k.fa[m], a ? t.kl && t.kl() : t.ol && t.ol()
    };
    f.prototype.Vg = function(a) {
        this.Zr.add(a)
    };
    f.prototype.qH = function(a) {
        this.$r.add(a)
    };
    f.prototype.Gf = function(a) {
        return a && -1 !== a.il ? this.mh * a.il : this.Bg
    };
    f.prototype.xb = function() {
        this.ma.xb(this.Sa);
        this.hc && this.Sa.present()
    };
    f.prototype.Za = function() {
        this.Ta && (this.nh = 1, this.ma.Af(this.H));
        this.ma.Za(this.H);
        this.H.BG()
    };
    f.prototype.Am = function(a) {
        a && this.gn.push(a)
    };
    f.prototype.Ax = function(a) {
        Ka(this.gn, a)
    };
    f.prototype.wh = function(a) {
        a = a.toString();
        return this.Sf.hasOwnProperty(a) ? this.Sf[a] : null
    };
    var w = [];
    f.prototype.pf = function(a) {
        var b, d;
        b = a.type.name;
        var c = null;
        if (this.kh.hasOwnProperty(b)) {
            if (c = this.kh[b], c.contains(a)) return
        } else c = w.length ? w.pop() : new da, this.kh[b] = c;
        c.add(a);
        this.Gg = !0;
        if (a.ic)
            for (b = 0, d = a.siblings.length; b < d; b++) this.pf(a.siblings[b]);
        this.jr && c.Ij.push(a);
        this.ir || (this.Id++, this.trigger(Object.getPrototypeOf(a.type.X).k.rA, a), this.Id--)
    };
    f.prototype.Cc = function() {
        if (this.Gg) {
            var a, b, d, c, g, e;
            this.jr = !0;
            d = 0;
            for (g = this.qe.length; d < g; ++d)
                for (a = this.qe[d], b = a.type, b.q.push(a), c = 0, e = b.ib.length; c < e; ++c) b.ib[c].q.push(a), b.ib[c].Cj = !0;
            G(this.qe);
            this.Tz();
            bb(this.kh);
            this.Gg = this.jr = !1
        }
    };
    f.prototype.Tz = function() {
        for (var a in this.kh) this.kh.hasOwnProperty(a) && this.Uy(this.kh[a])
    };
    f.prototype.Uy = function(a) {
        var b = a.Yg(),
            d = b[0].type,
            c, g, e, k, m, q;
        db(d.q, a);
        d.Cj = !0;
        0 === d.q.length && (d.Em = !1);
        c = 0;
        for (g = d.ib.length; c < g; ++c) q = d.ib[c], db(q.q, a), q.Cj = !0;
        c = 0;
        for (g = this.hf.nd.length; c < g; ++c)
            if (m = this.hf.nd[c], m.Wc.hasOwnProperty(d.index) && db(m.Wc[d.index].Hf, a), !d.R)
                for (e = 0, k = d.ib.length; e < k; ++e) q = d.ib[e], m.Wc.hasOwnProperty(q.index) && db(m.Wc[q.index].Hf, a);
        if (m = b[0].C) {
            if (m.Rd)
                for (e = m.q, c = 0, g = e.length; c < g; ++c) k = e[c], a.contains(k) && (k.Pa(), m.Ac.update(k, k.kd, null), k.kd.set(0, 0, -1, -1));
            db(m.q, a);
            m.Dl(0)
        }
        for (c = 0; c < b.length; ++c) this.Ty(b[c], d);
        a.clear();
        w.push(a);
        this.W = !0
    };
    f.prototype.Ty = function(a, b) {
        var d, c, g;
        d = 0;
        for (c = this.gn.length; d < c; ++d) this.gn[d](a);
        a.Ud && b.hk.update(a, a.Ud, null);
        (d = a.C) && d.wj(a, !0);
        if (a.fa)
            for (d = 0, c = a.fa.length; d < c; ++d) g = a.fa[d], g.Uc && g.Uc(), g.behavior.Wr.remove(a);
        this.Sw.remove(a);
        this.Zr.remove(a);
        this.$r.remove(a);
        a.Uc && a.Uc();
        this.Sf.hasOwnProperty(a.uid.toString()) && delete this.Sf[a.uid.toString()];
        this.lo--;
        100 > b.an.length && b.an.push(a)
    };
    f.prototype.Vm = function(a, b, d, c) {
        if (a.R) {
            var g = z(Math.random() * a.kj.length);
            return this.Vm(a.kj[g], b, d, c)
        }
        return a.Wd ? this.zg(a.Wd, b, !1, d, c, !1) : null
    };
    var K = [];
    f.prototype.zg = function(a, b, d, c, g, e) {
        var k, m, q, t;
        if (!a) return null;
        var f = this.P[a[1]],
            h = f.X.Ig;
        if (this.Yi && h && !f.lr || h && !this.H && 11 === a[0][11]) return null;
        var v = b;
        h || (b = null);
        var u;
        f.an.length ? (u = f.an.pop(), u.ac = !0, f.X.K.call(u, f)) : (u = new f.X.K(f), u.ac = !1);
        !d || e || this.Sf.hasOwnProperty(a[2].toString()) ? u.uid = this.jl++ : u.uid = a[2];
        this.Sf[u.uid.toString()] = u;
        u.xx = this.Ow++;
        u.Ah = f.q.length;
        k = 0;
        for (m = this.qe.length; k < m; ++k) this.qe[k].type === f && u.Ah++;
        u.xk = Nb;
        u.toString = Ob;
        q = a[3];
        if (u.ac) bb(u.T);
        else {
            u.T = {};
            if ("undefined" !== typeof cr_is_preview)
                for (u.Pv = [], u.Pv.length = q.length, k = 0, m = q.length; k < m; k++) u.Pv[k] = q[k][1];
            u.Yb = [];
            u.Yb.length = q.length
        }
        k = 0;
        for (m = q.length; k < m; k++) u.Yb[k] = q[k][0];
        if (h) {
            var r = a[0];
            u.x = ka(c) ? r[0] : c;
            u.y = ka(g) ? r[1] : g;
            u.z = r[2];
            u.width = r[3];
            u.height = r[4];
            u.depth = r[5];
            u.A = r[6];
            u.opacity = r[7];
            u.Hc = r[8];
            u.Ic = r[9];
            u.Ec = r[10];
            k = r[11];
            !this.H && f.ja.length && (u.Ec = k);
            u.ik = nb(u.Ec);
            this.S && ob(u, u.Ec, this.S);
            if (u.ac) {
                k = 0;
                for (m = r[12].length; k < m; k++)
                    for (q = 0, t = r[12][k].length; q < t; q++) u.kb[k][q] = r[12][k][q];
                u.Xa.set(0, 0, 0, 0);
                u.Ud.set(0, 0, -1, -1);
                u.kd.set(0, 0, -1, -1);
                u.cc.Aj(u.Xa);
                G(u.Zp)
            } else {
                u.kb = r[12].slice(0);
                k = 0;
                for (m = u.kb.length; k < m; k++) u.kb[k] = r[12][k].slice(0);
                u.Ga = [];
                u.ng = [];
                u.ng.length = f.ja.length;
                u.Xa = new ya(0, 0, 0, 0);
                u.Ud = new ya(0, 0, -1, -1);
                u.kd = new ya(0, 0, -1, -1);
                u.cc = new za;
                u.Zp = [];
                u.L = Sb;
                u.aD = Tb;
                u.qc = Ub;
                u.Pa = Vb;
                u.By = Wb;
                u.mt = Xb;
                u.Te = Yb
            }
            u.Fj = !1;
            u.jy = 0;
            u.iy = 0;
            u.hy = null;
            14 === r.length && (u.Fj = !0, u.jy = r[13][0], u.iy = r[13][1], u.hy = r[13][2]);
            k = 0;
            for (m = f.ja.length; k < m; k++) u.ng[k] = !0;
            u.Zf = !0;
            u.He = Zb;
            u.He();
            u.Cy = !!u.Ga.length;
            u.Km = !0;
            u.dq = !0;
            f.Dm = !0;
            u.visible = !0;
            u.il = -1;
            u.C = b;
            u.Ie = b.q.length;
            u.nh = 0;
            "undefined" === typeof u.Ka && (u.Ka = null);
            this.W = u.Ed = !0
        }
        var x;
        G(K);
        k = 0;
        for (m = f.ib.length; k < m; k++) K.push.apply(K, f.ib[k].jb);
        K.push.apply(K, f.jb);
        if (u.ac)
            for (k = 0, m = K.length; k < m; k++) {
                var C = K[k];
                x = u.fa[k];
                x.ac = !0;
                C.behavior.K.call(x, C, u);
                r = a[4][k];
                q = 0;
                for (t = r.length; q < t; q++) x.B[q] = r[q];
                x.J();
                C.behavior.Wr.add(u)
            } else
                for (u.fa = [], k = 0, m = K.length; k < m; k++) C = K[k], x = new C.behavior.K(C, u), x.ac = !1, x.B = a[4][k].slice(0), x.J(), u.fa.push(x), C.behavior.Wr.add(u);
        r = a[5];
        if (u.ac)
            for (k = 0, m = r.length; k < m; k++) u.B[k] = r[k];
        else u.B = r.slice(0);
        this.qe.push(u);
        this.Gg = !0;
        b && (b.dk(u, !0), 1 !== b.gd || 1 !== b.hd) && (f.Em = !0);
        this.lo++;
        if (f.ic) {
            if (u.ic = !0, u.ac ? G(u.siblings) : u.siblings = [], !d && !e) {
                k = 0;
                for (m = f.rd.length; k < m; k++)
                    if (f.rd[k] !== f) {
                        if (!f.rd[k].Wd) return null;
                        u.siblings.push(this.zg(f.rd[k].Wd, v, !1, h ? u.x : c, h ? u.y : g, !0))
                    }
                k = 0;
                for (m = u.siblings.length; k < m; k++)
                    for (u.siblings[k].siblings.push(u), q = 0; q < m; q++) k !== q && u.siblings[k].siblings.push(u.siblings[q])
            }
        } else u.ic = !1, u.siblings = null;
        u.J();
        k = 0;
        for (m = u.fa.length; k < m; k++) u.fa[k].xG && u.fa[k].xG();
        return u
    };
    f.prototype.Ii = function(a) {
        var b, d;
        b = 0;
        for (d = this.ma.ra.length; b < d; b++) {
            var c = this.ma.ra[b];
            if (qb(c.name, a)) return c
        }
        return null
    };
    f.prototype.Se = function(a) {
        a = z(a);
        0 > a && (a = 0);
        a >= this.ma.ra.length && (a = this.ma.ra.length - 1);
        return this.ma.ra[a]
    };
    f.prototype.Hi = function(a) {
        return la(a) ? this.Se(a) : this.Ii(a.toString())
    };
    f.prototype.fq = function(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) a[b].V().Y = !0
    };
    f.prototype.sl = function(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) a[b].sl()
    };
    f.prototype.Qg = function(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) a[b].Qg()
    };
    f.prototype.ye = function(a) {
        var b, d;
        b = 0;
        for (d = a.length; b < d; b++) a[b].ye()
    };
    f.prototype.wy = function(a) {
        if (a.Dm) {
            var b, d, c = a.q;
            b = 0;
            for (d = c.length; b < d; ++b) c[b].mt();
            c = this.qe;
            b = 0;
            for (d = c.length; b < d; ++b) c[b].type === a && c[b].mt();
            a.Dm = !1
        }
    };
    f.prototype.Jq = function(a, b, d, c) {
        var g, e, k = a ? 1 !== a.gd || 1 !== a.hd : !1;
        if (b.R)
            for (a = 0, g = b.kj.length; a < g; ++a) e = b.kj[a], k || e.Em ? Ia(c, e.q) : (this.wy(e), e.hk.Go(d, c));
        else k || b.Em ? Ia(c, b.q) : (this.wy(b), b.hk.Go(d, c))
    };
    f.prototype.Hv = function(a, b, d, c) {
        var g, e;
        g = 0;
        for (e = b.length; g < e; ++g) this.Jq(a, b[g], d, c)
    };
    f.prototype.aF = function(a, b, d) {
        var c = this.Zx;
        c && this.Hv(a, c.ho, b, d)
    };
    f.prototype.UE = function(a, b, d) {
        var c = this.Xv;
        c && this.Hv(a, c.ho, b, d)
    };
    f.prototype.Dj = function(a, b, d, c) {
        var g = a.V(),
            e, k, m, q, t = this.fb().hb.Ld,
            f, u, h;
        if (g.Y)
            for (c || (g.Y = !1, G(g.q)), e = 0, q = a.q.length; e < q; e++)
                if (m = a.q[e], m.Pa(), f = m.C.ub(b, d, !0), u = m.C.ub(b, d, !1), m.qc(f, u)) {
                    if (c) return !1;
                    g.q.push(m)
                } else t && g.ka.push(m);
        else {
            k = 0;
            h = t ? g.ka : g.q;
            e = 0;
            for (q = h.length; e < q; e++)
                if (m = h[e], m.Pa(), f = m.C.ub(b, d, !0), u = m.C.ub(b, d, !1), m.qc(f, u)) {
                    if (c) return !1;
                    t ? g.q.push(m) : (g.q[k] = g.q[e], k++)
                }
            c || (h.length = k)
        }
        a.ad();
        return c ? !0 : g.Wq()
    };
    f.prototype.Mc = function(a, b) {
        if (!(a && b && a !== b && a.Ed && b.Ed)) return !1;
        a.Pa();
        b.Pa();
        var d = a.C,
            c = b.C,
            g, e, k, m, q, t, f, u;
        if (d === c || d.gd === c.gd && c.hd === c.hd && d.scale === c.scale && d.A === c.A && d.Oc === c.Oc) {
            if (!a.Xa.yF(b.Xa) || !a.cc.Qv(b.cc) || a.Fj && b.Fj) return !1;
            if (a.Fj) return this.cy(a, b);
            if (b.Fj) return this.cy(b, a);
            f = a.Ka && !a.Ka.Ti();
            g = b.Ka && !b.Ka.Ti();
            if (!f && !g) return !0;
            f ? (a.Ka.fh(a.width, a.height, a.A), f = a.Ka) : (this.Ee.zj(a.cc, a.x, a.y, a.width, a.height), f = this.Ee);
            g ? (b.Ka.fh(b.width, b.height, b.A), u = b.Ka) : (this.Ee.zj(b.cc, b.x, b.y, b.width, b.height), u = this.Ee);
            return f.Ek(u, b.x - a.x, b.y - a.y)
        }
        f = a.Ka && !a.Ka.Ti();
        g = b.Ka && !b.Ka.Ti();
        f ? (a.Ka.fh(a.width, a.height, a.A), this.Ee.Qx(a.Ka)) : this.Ee.zj(a.cc, a.x, a.y, a.width, a.height);
        f = this.Ee;
        g ? (b.Ka.fh(b.width, b.height, b.A), this.Ts.Qx(b.Ka)) : this.Ts.zj(b.cc, b.x, b.y, b.width, b.height);
        u = this.Ts;
        g = 0;
        for (e = f.Ad; g < e; g++) k = 2 * g, m = k + 1, q = f.Va[k], t = f.Va[m], f.Va[k] = d.Ua(q +
            a.x, t + a.y, !0), f.Va[m] = d.Ua(q + a.x, t + a.y, !1);
        f.Pa();
        g = 0;
        for (e = u.Ad; g < e; g++) k = 2 * g, m = k + 1, q = u.Va[k], t = u.Va[m], u.Va[k] = c.Ua(q + b.x, t + b.y, !0), u.Va[m] = c.Ua(q + b.x, t + b.y, !1);
        u.Pa();
        return f.Ek(u, 0, 0)
    };
    var P = new za;
    new ya(0, 0, 0, 0);
    var R = [];
    f.prototype.cy = function(a, b) {
        var d, c, g, e, k = b.Xa,
            m = a.x,
            q = a.y;
        a.PE(k, R);
        var t = b.Ka && !b.Ka.Ti();
        d = 0;
        for (c = R.length; d < c; ++d)
            if (g = R[d], e = g.Na, k.zF(e, m, q) && (P.Aj(e), P.offset(m, q), P.Qv(b.cc)))
                if (t)
                    if (b.Ka.fh(b.width, b.height, b.A), g.Vf) {
                        if (g.Vf.Ek(b.Ka, b.x - (m + e.left), b.y - (q + e.top))) return G(R), !0
                    } else {
                        if (this.Ee.zj(P, 0, 0, e.right - e.left, e.bottom - e.top), this.Ee.Ek(b.Ka, b.x, b.y)) return G(R), !0
                    } else if (g.Vf) {
            if (this.Ee.zj(b.cc, 0, 0, b.width, b.height), g.Vf.Ek(this.Ee, -(m + e.left), -(q + e.top))) return G(R), !0
        } else return G(R), !0;
        G(R);
        return !1
    };
    f.prototype.dt = function(a, b) {
        if (!b) return !1;
        var d, c, g, e, k;
        d = 0;
        for (c = a.jb.length; d < c; d++)
            if (a.jb[d].behavior instanceof b) return !0;
        if (!a.R)
            for (d = 0, c = a.ib.length; d < c; d++)
                for (k = a.ib[d], g = 0, e = k.jb.length; g < e; g++)
                    if (k.jb[g].behavior instanceof b) return !0;
        return !1
    };
    f.prototype.et = function(a) {
        return this.dt(a, pc.MH)
    };
    f.prototype.gt = function(a) {
        return this.dt(a, pc.NH)
    };
    var A = [];
    f.prototype.gb = function(a) {
        var b, d, c;
        a.Pa();
        this.aF(a.C, a.Xa, A);
        b = 0;
        for (d = A.length; b < d; ++b)
            if (c = A[b], c.T.solidEnabled && this.Mc(a, c)) return G(A), c;
        G(A);
        return null
    };
    var N = [];
    f.prototype.eg = function(a, b) {
        var d = null;
        b && (d = N, G(d));
        a.Pa();
        this.UE(a.C, a.Xa, A);
        var c, g, e;
        c = 0;
        for (g = A.length; c < g; ++c)
            if (e = A[c], e.T.jumpthruEnabled && this.Mc(a, e))
                if (b) d.push(e);
                else return G(A), e;
        G(A);
        return d
    };
    f.prototype.Bd = function(a, b, d, c, g, e) {
        c = c || 50;
        var k = a.x,
            m = a.y,
            q, t = null,
            f = null;
        for (q = 0; q < c; q++)
            if (a.x = k + b * q, a.y = m + d * q, a.L(), !this.Mc(a, t) && ((t = this.gb(a)) && (f = t), !t && (g && (e ? t = this.Mc(a, e) ? e : null : t = this.eg(a), t && (f = t)), !t))) return f && this.ws(a, b, d, f), !0;
        a.x = k;
        a.y = m;
        a.L();
        return !1
    };
    f.prototype.ws = function(a, b, d, c) {
        var g = 2,
            e, k = !1;
        e = !1;
        for (var m = a.x, q = a.y; 16 >= g;) e = 1 / g, g *= 2, a.x += b * e * (k ? 1 : -1), a.y += d * e * (k ? 1 : -1), a.L(), this.Mc(a, c) ? e = k = !0 : (e = k = !1, m = a.x, q = a.y);
        e && (a.x = m, a.y = q, a.L())
    };
    f.prototype.ys = function(a, b) {
        var d = ka(b) ? 100 : b,
            c = 0,
            g = a.x,
            e = a.y,
            k = 0,
            m = 0,
            q = 0,
            t = this.gb(a);
        if (!t) return !0;
        for (; c <= d;) {
            switch (k) {
                case 0:
                    m = 0;
                    q = -1;
                    c++;
                    break;
                case 1:
                    m = 1;
                    q = -1;
                    break;
                case 2:
                    m = 1;
                    q = 0;
                    break;
                case 3:
                    q = m = 1;
                    break;
                case 4:
                    m = 0;
                    q = 1;
                    break;
                case 5:
                    m = -1;
                    q = 1;
                    break;
                case 6:
                    m = -1;
                    q = 0;
                    break;
                case 7:
                    q = m = -1
            }
            k = (k + 1) % 8;
            a.x = z(g + m * c);
            a.y = z(e + q * c);
            a.L();
            if (!this.Mc(a, t) && (t = this.gb(a), !t)) return !0
        }
        a.x = g;
        a.y = e;
        a.L();
        return !1
    };
    f.prototype.df = function(a, b) {
        a.Ed && b.Ed && this.xl.push([a, b])
    };
    f.prototype.nD = function(a, b) {
        var d, c, g;
        d = 0;
        for (c = this.xl.length; d < c; d++)
            if (g = this.xl[d], g[0] == a && g[1] == b || g[0] == b && g[1] == a) return !0;
        return !1
    };
    f.prototype.kD = function(a, b, d) {
        var c = a.x,
            g = a.y,
            e = ta(10, Ya(b, d, c, g)),
            k = Ta(b, d, c, g),
            m = this.gb(a);
        if (!m) return Pa(k + va);
        var q = m,
            t, f, u, h, v = M(5);
        for (t = 1; 36 > t; t++)
            if (f = k - t * v, a.x = b + Math.cos(f) * e, a.y = d + Math.sin(f) * e, a.L(), !this.Mc(a, q) && (q = this.gb(a), !q)) {
                u = f;
                break
            }
        36 === t && (u = Pa(k + va));
        q = m;
        for (t = 1; 36 > t; t++)
            if (f = k + t * v, a.x = b + Math.cos(f) * e, a.y = d + Math.sin(f) * e, a.L(), !this.Mc(a, q) && (q = this.gb(a), !q)) {
                h = f;
                break
            }
        36 === t && (h = Pa(k + va));
        a.x = c;
        a.y = g;
        a.L();
        if (h === u) return h;
        a = Ua(h, u) / 2;
        a = Wa(h, u) ? Pa(u + a + va) : Pa(h + a);
        u = Math.cos(k);
        k = Math.sin(k);
        h = Math.cos(a);
        a = Math.sin(a);
        b = u * h + k * a;
        return Ta(0, 0, u - 2 * b * h, k - 2 * b * a)
    };
    var L = -1;
    f.prototype.trigger = function(a, b, d) {
        if (!this.ma) return !1;
        var c = this.ma.ph;
        if (!c) return !1;
        var g = !1,
            e, k, m;
        L++;
        var q = c.pq;
        k = 0;
        for (m = q.length; k < m; ++k) e = this.oy(a, b, q[k], d), g = g || e;
        e = this.oy(a, b, c, d);
        L--;
        return g || e
    };
    f.prototype.oy = function(a, b, d, c) {
        var g = !1,
            e, k, m, q;
        if (b)
            for (m = this.bt(a, b, b.type.name, d, c), g = g || m, q = b.type.ib, e = 0, k = q.length; e <
                k; ++e) m = this.bt(a, b, q[e].name, d, c), g = g || m;
        else m = this.bt(a, b, "system", d, c), g = g || m;
        return g
    };
    f.prototype.bt = function(a, b, d, c, g) {
        var e, k = !1,
            m = !1,
            m = "undefined" !== typeof g,
            q = (m ? c.rv : c.qy)[d];
        if (!q) return k;
        var t = null;
        c = 0;
        for (e = q.length; c < e; ++c)
            if (q[c].method == a) {
                t = q[c].qk;
                break
            }
        if (!t) return k;
        var f;
        m ? f = t[g] : f = t;
        if (!f) return null;
        c = 0;
        for (e = f.length; c < e; c++) a = f[c][0], g = f[c][1], m = this.EE(b, d, a, g), k = k || m;
        return k
    };
    f.prototype.EE = function(a, b, d, c) {
        var g, e, k = !1;
        this.ct++;
        var m = this.fb().hb;
        m && this.sl(m.Tg);
        var q = 1 < this.ct;
        this.sl(d.Tg);
        q && this.EG();
        var t = this.Eo(d);
        t.hb = d;
        a && (g = this.types[b].V(), g.Y = !1, G(g.q), g.q[0] = a, this.types[b].ad());
        a = !0;
        if (d.parent) {
            b = t.by;
            for (g = d.parent; g;) b.push(g), g = g.parent;
            b.reverse();
            g = 0;
            for (e = b.length; g < e; g++)
                if (!b[g].TG()) {
                    a = !1;
                    break
                }
        }
        a && (this.rh++, d.Ld ? d.RG(c) : d.Qb(), k = k || t.Ih);
        this.Ao();
        q && this.wG();
        this.ye(d.Tg);
        m && this.ye(m.Tg);
        this.Gg && 0 === this.Id && 0 === L && !this.mr && this.Cc();
        this.ct--;
        return k
    };
    f.prototype.Fg = function() {
        var a = this.fb();
        return a.hb.Vb[a.Eb]
    };
    f.prototype.CF = function() {
        return 0 === this.fb().Eb
    };
    f.prototype.QE = function() {
        var a = this.fb();
        return a.hb.Sd[a.$c]
    };
    f.prototype.EG = function() {
        this.bo++;
        this.bo >= this.Nr.length && this.Nr.push([])
    };
    f.prototype.wG = function() {
        this.bo--
    };
    f.prototype.zv = function() {
        return this.Nr[this.bo]
    };
    f.prototype.Eo = function(a) {
        this.kn++;
        this.kn >= this.vq.length && this.vq.push(new $b);
        var b = this.fb();
        b.reset(a);
        return b
    };
    f.prototype.Ao = function() {
        this.kn--
    };
    f.prototype.fb = function() {
        return this.vq[this.kn]
    };
    f.prototype.xs = function() {
        this.el++;
        this.el >= this.dl.length && this.dl.push(ba({
            name: void 0,
            index: 0,
            pb: !1
        }));
        var a = this.Av();
        a.name = void 0;
        a.index = 0;
        a.pb = !1;
        return a
    };
    f.prototype.ts = function() {
        this.el--
    };
    f.prototype.Av = function() {
        return this.dl[this.el]
    };
    f.prototype.Cv = function(a, b) {
        for (var d, c, g, e, k, m; b;) {
            d = 0;
            for (c = b.fe.length; d < c; d++)
                if (m = b.fe[d], m instanceof ac && qb(a, m.name)) return m;
            b = b.parent
        }
        d = 0;
        for (c = this.Cf.length; d < c; d++)
            for (k = this.Cf[d], g = 0, e = k.Cg.length; g < e; g++)
                if (m = k.Cg[g], m instanceof ac && qb(a, m.name)) return m;
        return null
    };
    f.prototype.Ev = function(a) {
        var b, d;
        b = 0;
        for (d = this.se.length; b < d; b++)
            if (this.se[b].za === a) return this.se[b];
        return null
    };
    f.prototype.Cn = function(a) {
        var b, d;
        b = 0;
        for (d = this.P.length; b < d; b++)
            if (this.P[b].za === a) return this.P[b];
        return null
    };
    f.prototype.RE = function(a) {
        var b, d;
        b = 0;
        for (d = this.rg.length; b < d; b++)
            if (this.rg[b].za === a) return this.rg[b];
        return null
    };
    f.prototype.BD = function(a, b) {
        this.Il = [a, b];
        this.W = !0
    };
    f.prototype.sF = function() {
        var a = this,
            b = this.Is,
            d = this.Nf,
            g = this.Yn,
            k = !1;
        this.Vx && (k = !0, b = "__c2_continuouspreview", this.Vx = !1);
        if (b.length) {
            this.Cc();
            d = this.XG();
            if (n() && !this.dd) l(b, d, function() {
                ha("Saved state to IndexedDB storage (" + d.length + " bytes)");
                a.Nf = d;
                a.trigger(V.prototype.k.Gp, null);
                a.Nf = "";
                k && e()
            }, function(c) {
                try {
                    localStorage.setItem("__c2save_" + b, d), ha("Saved state to WebStorage (" + d.length + " bytes)"), a.Nf = d, a.trigger(V.prototype.k.Gp, null), a.Nf = "", k && e()
                } catch (g) {
                    ha("Failed to save game state: " + c + "; " + g), a.trigger(V.prototype.k.nu, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + b, d), ha("Saved state to WebStorage (" +
                    d.length + " bytes)"), a.Nf = d, this.trigger(V.prototype.k.Gp, null), a.Nf = "", k && e()
            } catch (m) {
                ha("Error saving to WebStorage: " + m), a.trigger(V.prototype.k.nu, null)
            }
            this.Yn = this.Is = "";
            this.$b = null
        }
        if (g.length) {
            if (n() && !this.dd) c(g, function(b) {
                b ? (a.$b = b, ha("Loaded state from IndexedDB storage (" + a.$b.length + " bytes)")) : (a.$b = localStorage.getItem("__c2save_" + g) || "", ha("Loaded state from WebStorage (" + a.$b.length + " bytes)"));
                a.Kl = !1;
                a.$b || (a.$b = null, a.trigger(V.prototype.k.om, null))
            }, function() {
                a.$b = localStorage.getItem("__c2save_" +
                    g) || "";
                ha("Loaded state from WebStorage (" + a.$b.length + " bytes)");
                a.Kl = !1;
                a.$b || (a.$b = null, a.trigger(V.prototype.k.om, null))
            });
            else {
                try {
                    this.$b = localStorage.getItem("__c2save_" + g) || "", ha("Loaded state from WebStorage (" + this.$b.length + " bytes)")
                } catch (q) {
                    this.$b = null
                }
                this.Kl = !1;
                a.$b || (a.$b = null, a.trigger(V.prototype.k.om, null))
            }
            this.Is = this.Yn = ""
        }
        null !== this.$b && (this.Cc(), this.WF(this.$b) ? (this.Nf = this.$b, this.trigger(V.prototype.k.QA, null), this.Nf = "") : a.trigger(V.prototype.k.om, null), this.$b = null)
    };
    f.prototype.XG = function() {
        var a, d, c, g, e, k, m, q = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.kc.na,
                walltime: this.jg.na,
                timescale: this.Wg,
                tickcount: this.Pd,
                execcount: this.rh,
                next_uid: this.jl,
                running_layout: this.ma.za,
                start_time_offset: Date.now() - this.Yo
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (d = this.P.length; a < d; a++)
            if (e = this.P[a], !e.R && !this.et(e)) {
                k = {
                    instances: []
                };
                ab(e.T) && (k.ex = b(e.T));
                c = 0;
                for (g = e.q.length; c < g; c++) k.instances.push(this.Hs(e.q[c]));
                q.types[e.za.toString()] = k
            }
        a = 0;
        for (d = this.se.length; a < d; a++) c = this.se[a], q.layouts[c.za.toString()] = c.Wa();
        g = q.events.groups;
        a = 0;
        for (d = this.rg.length; a < d; a++) c = this.rg[a], g[c.za.toString()] = this.zk[c.yk].Ki;
        d = q.events.cnds;
        for (m in this.yg) this.yg.hasOwnProperty(m) && (a = this.yg[m], ab(a.T) && (d[m] = {
            ex: b(a.T)
        }));
        d = q.events.acts;
        for (m in this.pg) this.pg.hasOwnProperty(m) && (a = this.pg[m], ab(a.T) && (d[m] = {
            ex: b(a.T)
        }));
        d = q.events.vars;
        for (m in this.Jj) this.Jj.hasOwnProperty(m) && (a = this.Jj[m], a.Rn || a.parent && !a.Nk || (d[m] = a.data));
        q.system = this.hf.Wa();
        return JSON.stringify(q)
    };
    f.prototype.zx = function() {
        var a, b, d, c, g, e;
        this.Sf = {};
        a = 0;
        for (b = this.P.length; a < b; a++)
            if (d = this.P[a], !d.R)
                for (c = 0, g = d.q.length; c < g; c++) e = d.q[c], this.Sf[e.uid.toString()] = e
    };
    f.prototype.WF = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch (d) {
            return !1
        }
        if (!b.c2save || 1 < b.version) return !1;
        this.Ik = !0;
        a = b.rt;
        this.kc.reset();
        this.kc.na = a.time;
        this.jg.reset();
        this.jg.na = a.walltime || 0;
        this.Wg = a.timescale;
        this.Pd = a.tickcount;
        this.rh = a.execcount;
        this.Yo = Date.now() - a.start_time_offset;
        var c = a.running_layout;
        if (c !== this.ma.za)
            if (c = this.Ev(c)) this.lv(c);
            else return;
        var g, e, k, m, q, t, f;
        t = b.types;
        for (e in t)
            if (t.hasOwnProperty(e) && (m = this.Cn(parseInt(e, 10))) && !m.R && !this.et(m)) {
                t[e].ex ? m.T = t[e].ex : bb(m.T);
                q = m.q;
                k = t[e].instances;
                c = 0;
                for (g = ua(q.length, k.length); c < g; c++) this.Zn(q[c], k[c]);
                c = k.length;
                for (g = q.length; c < g; c++) this.pf(q[c]);
                c = q.length;
                for (g = k.length; c < g; c++) {
                    q = null;
                    if (m.X.Ig && (q = this.ma.Bn(k[c].w.l), !q)) continue;
                    q = this.zg(m.Wd, q, !1, 0, 0, !0);
                    this.Zn(q, k[c])
                }
                m.Cj = !0
            }
        this.Cc();
        this.zx();
        g = b.layouts;
        for (e in g) g.hasOwnProperty(e) && (c = this.Ev(parseInt(e, 10))) && c.bb(g[e]);
        g = b.events.groups;
        for (e in g) g.hasOwnProperty(e) && (c = this.RE(parseInt(e, 10))) && this.zk[c.yk] && this.zk[c.yk].Lx(g[e]);
        c = b.events.cnds;
        for (e in this.yg) this.yg.hasOwnProperty(e) && (c.hasOwnProperty(e) ? this.yg[e].T = c[e].ex : this.yg[e].T = {});
        c = b.events.acts;
        for (e in this.pg) this.pg.hasOwnProperty(e) && (c.hasOwnProperty(e) ? this.pg[e].T = c[e].ex : this.pg[e].T = {});
        c = b.events.vars;
        for (e in c) c.hasOwnProperty(e) && this.Jj.hasOwnProperty(e) && (this.Jj[e].data = c[e]);
        this.jl = a.next_uid;
        this.Ik = !1;
        c = 0;
        for (g = this.rn.length; c < g; ++c) q = this.rn[c], this.trigger(Object.getPrototypeOf(q.type.X).k.ki, q);
        G(this.rn);
        this.hf.bb(b.system);
        c = 0;
        for (g = this.P.length; c < g; c++)
            if (m = this.P[c], !m.R && !this.et(m))
                for (b = 0, e = m.q.length; b < e; b++) {
                    q = m.q[b];
                    if (m.ic)
                        for (t = q.xk(), G(q.siblings), a = 0, k = m.rd.length; a < k; a++) f = m.rd[a], m !== f && q.siblings.push(f.q[t]);
                    q.je && q.je();
                    if (q.fa)
                        for (a = 0, k = q.fa.length; a < k; a++) t = q.fa[a], t.je && t.je()
                }
            return this.W = !0
    };
    f.prototype.Hs = function(a, d) {
        var c, g, e, k, m;
        k = a.type;
        e = k.X;
        var q = {};
        d ? q.c2 = !0 : q.uid = a.uid;
        ab(a.T) && (q.ex = b(a.T));
        if (a.Yb && a.Yb.length)
            for (q.ivs = {}, c = 0, g = a.Yb.length; c < g; c++) q.ivs[a.type.fr[c].toString()] = a.Yb[c];
        if (e.Ig) {
            e = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.C.za,
                zi: a.Te()
            };
            0 !== a.A && (e.a = a.A);
            1 !== a.opacity && (e.o = a.opacity);.5 !== a.Hc && (e.hX = a.Hc);.5 !== a.Ic && (e.hY = a.Ic);
            0 !== a.Ec && (e.bm = a.Ec);
            a.visible || (e.v = a.visible);
            a.Ed || (e.ce = a.Ed); - 1 !== a.il && (e.mts = a.il);
            if (k.ja.length)
                for (e.fx = [], c = 0, g = k.ja.length; c < g; c++) m = k.ja[c], e.fx.push({
                    name: m.name,
                    active: a.ng[m.index],
                    params: a.kb[m.index]
                });
            q.w = e
        }
        if (a.fa && a.fa.length)
            for (q.behs = {}, c = 0, g = a.fa.length; c < g; c++) k = a.fa[c], k.Wa && (q.behs[k.type.za.toString()] = k.Wa());
        a.Wa && (q.data = a.Wa());
        return q
    };
    f.prototype.TE = function(a, b) {
        var d, c;
        d = 0;
        for (c = a.fr.length; d < c; d++)
            if (a.fr[d] === b) return d;
        return -1
    };
    f.prototype.OE = function(a, b) {
        var d, c;
        d = 0;
        for (c = a.fa.length; d < c; d++)
            if (a.fa[d].type.za === b) return d;
        return -1
    };
    f.prototype.Zn = function(a, b, d) {
        var c, g, e, k, m;
        m = a.type;
        k = m.X;
        if (d) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.T = b.ex : bb(a.T);
        if (g = b.ivs)
            for (c in g) g.hasOwnProperty(c) && (e = this.TE(m, parseInt(c, 10)), 0 > e || e >= a.Yb.length || (a.Yb[e] = g[c]));
        if (k.Ig) {
            e = b.w;
            a.C.za !== e.l && (g = a.C, a.C = this.ma.Bn(e.l), a.C ? (g.wj(a, !0), a.C.dk(a, !0), a.L(), a.C.Dl(0)) : (a.C = g, d || this.pf(a)));
            a.x = e.x;
            a.y = e.y;
            a.width = e.w;
            a.height = e.h;
            a.Ie = e.zi;
            a.A = e.hasOwnProperty("a") ? e.a : 0;
            a.opacity = e.hasOwnProperty("o") ? e.o : 1;
            a.Hc = e.hasOwnProperty("hX") ? e.hX : .5;
            a.Ic = e.hasOwnProperty("hY") ? e.hY : .5;
            a.visible = e.hasOwnProperty("v") ? e.v : !0;
            a.Ed = e.hasOwnProperty("ce") ? e.ce : !0;
            a.il = e.hasOwnProperty("mts") ? e.mts : -1;
            a.Ec = e.hasOwnProperty("bm") ? e.bm : 0;
            a.ik = nb(a.Ec);
            this.S && ob(a, a.Ec, this.S);
            a.L();
            if (e.hasOwnProperty("fx"))
                for (d = 0, g = e.fx.length; d < g; d++) k = m.Lq(e.fx[d].name), 0 > k || (a.ng[k] = e.fx[d].active, a.kb[k] = e.fx[d].params);
            a.He()
        }
        if (m = b.behs)
            for (c in m) m.hasOwnProperty(c) && (d = this.OE(a, parseInt(c, 10)), 0 > d || a.fa[d].bb(m[c]));
        b.data && a.bb(b.data)
    };
    f.prototype.sv = function(a, b, d) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, d)
        }, d)
    };
    f.prototype.GE = function(a, b) {
        this.sv("data.js", function(d) {
            var c = new FileReader;
            c.onload = function(b) {
                a(b.target.result)
            };
            c.onerror = b;
            c.readAsText(d)
        }, b)
    };
    var X = [],
        B = 0;
    f.prototype.Sr = function() {
        if (X.length && !(8 <= B)) {
            B++;
            var a = X.shift();
            this.DD(a.filename, a.nH, a.bE)
        }
    };
    f.prototype.tv = function(a, b, d) {
        var c = this;
        X.push({
            filename: a,
            nH: function(a) {
                B--;
                c.Sr();
                b(a)
            },
            bE: function(a) {
                B--;
                c.Sr();
                d(a)
            }
        });
        this.Sr()
    };
    f.prototype.DD = function(a, b, d) {
        this.sv(a, function(a) {
            var d = new FileReader;
            d.onload = function(a) {
                b(a.target.result)
            };
            d.readAsArrayBuffer(a)
        }, d)
    };
    f.prototype.HE = function(a, b, d) {
        var c = "",
            g = a.toLowerCase(),
            e = g.substr(g.length - 4),
            g = g.substr(g.length - 5);
        ".mp4" === e ? c = "video/mp4" : ".webm" === g ? c = "video/webm" : ".m4a" === e ? c = "audio/mp4" : ".mp3" === e && (c = "audio/mpeg");
        this.tv(a, function(a) {
            a = URL.createObjectURL(new Blob([a], {
                type: c
            }));
            b(a)
        }, d)
    };
    f.prototype.AF = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    f.prototype.Mx = function(a, b) {
        this.On && !this.AF(b) ? this.HE(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    f.prototype.No = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    bc = function(a) {
        return new f(document.getElementById(a))
    };
    cc = function(a, b) {
        return new f({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = bc;
    window.cr_createDCRuntime = cc;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Pk = !0;
        document.body.appendChild(a);
        a = new f(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new f(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var f = document.getElementById("c2canvas");
    return f ? f.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(f, p) {
    var n = window.cr_getC2Runtime();
    n && n.BD(f, p)
};
window.cr_sizeCanvas = function(f, p) {
    if (0 !== f && 0 !== p) {
        var n = window.cr_getC2Runtime();
        n && n.setSize(f, p)
    }
};
window.cr_setSuspended = function(f) {
    var p = window.cr_getC2Runtime();
    p && p.setSuspended(f)
};
(function() {
    function f(a, b) {
        this.b = a;
        this.ph = null;
        this.scrollX = this.b.Mb / 2;
        this.scrollY = this.b.Lb / 2;
        this.scale = 1;
        this.A = 0;
        this.Fi = !0;
        this.name = b[0];
        this.pG = b[1];
        this.oG = b[2];
        this.width = b[1];
        this.height = b[2];
        this.ty = b[3];
        this.Tx = b[4];
        this.za = b[5];
        var d = b[6],
            c, e;
        this.ra = [];
        this.Dk = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var f = new dc(this, d[c]);
            f.Qw = c;
            this.ra.push(f)
        }
        d = b[7];
        this.Hg = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var f = d[c],
                h = this.b.P[f[1]];
            h.Wd || (h.Wd = f);
            this.Hg.push(f); - 1 === this.Dk.indexOf(h) && this.Dk.push(h)
        }
        this.ja = [];
        this.Ga = [];
        this.Zf = !0;
        this.kb = [];
        c = 0;
        for (e = b[8].length; c < e; c++) this.ja.push({
            id: b[8][c][0],
            name: b[8][c][1],
            Rb: -1,
            ze: !1,
            eb: !0,
            index: c
        }), this.kb.push(b[8][c][2].slice(0));
        this.He();
        this.ae = new ya(0, 0, 1, 1);
        this.As = new ya(0, 0, 1, 1);
        this.Og = {}
    }

    function p(a, b) {
        return a.Ie - b.Ie
    }

    function n(a, b) {
        this.lc = a;
        this.b = a.b;
        this.q = [];
        this.scale = 1;
        this.A = 0;
        this.zf = !1;
        this.gg = new ya(0, 0, 0, 0);
        this.ky = new za;
        this.Ca = this.ya = this.Da = this.xa = 0;
        this.fi = !1;
        this.kg = -1;
        this.gq = 0;
        this.name = b[0];
        this.index = b[1];
        this.za = b[2];
        this.visible = b[3];
        this.Dc = b[4];
        this.Ge = b[5];
        this.gd = b[6];
        this.hd = b[7];
        this.opacity = b[8];
        this.xn = b[9];
        this.Rd = b[10];
        this.Oc = b[11];
        this.Ec = b[12];
        this.ZD = b[13];
        this.ik = "source-over";
        this.Gc = this.Lc = 0;
        this.Ac = null;
        this.Of = h();
        this.Ae = !0;
        this.ej = new ya(0, 0, -1, -1);
        this.rc = new ya(0, 0, -1, -1);
        this.Rd && (this.Ac = new mb(this.b.Mb, this.b.Lb));
        this.ef = !1;
        var d = b[14],
            c, e;
        this.$x = [];
        this.Hd = [];
        this.lk = [];
        c = 0;
        for (e = d.length; c < e; c++) {
            var f = d[c],
                r = this.b.P[f[1]];
            r.Wd || (r.Wd = f, r.vD = this.index);
            this.Hd.push(f); - 1 === this.lc.Dk.indexOf(r) && this.lc.Dk.push(r)
        }
        Ha(this.$x, this.Hd);
        this.ja = [];
        this.Ga = [];
        this.Zf = !0;
        this.kb = [];
        c = 0;
        for (e = b[15].length; c < e; c++) this.ja.push({
            id: b[15][c][0],
            name: b[15][c][1],
            Rb: -1,
            ze: !1,
            eb: !0,
            index: c
        }), this.kb.push(b[15][c][2].slice(0));
        this.He();
        this.ae = new ya(0, 0, 1, 1);
        this.As = new ya(0, 0, 1, 1)
    }

    function h() {
        return b.length ? b.pop() : []
    }

    function l(a) {
        G(a);
        b.push(a)
    }
    f.prototype.WG = function(a) {
        var b = a.type.za.toString();
        this.Og.hasOwnProperty(b) || (this.Og[b] = []);
        this.Og[b].push(this.b.Hs(a))
    };
    f.prototype.Iv = function() {
        var a = this.ra[0];
        return !a.Ge && 1 === a.opacity && !a.xn && a.visible
    };
    f.prototype.He = function() {
        G(this.Ga);
        this.Zf = !0;
        var a, b, d;
        a = 0;
        for (b = this.ja.length; a < b; a++) d = this.ja[a], d.eb && (this.Ga.push(d), d.ze || (this.Zf = !1))
    };
    f.prototype.Kq = function(a) {
        var b, d, c;
        b = 0;
        for (d = this.ja.length; b < d; b++)
            if (c = this.ja[b], c.name === a) return c;
        return null
    };
    var c = [],
        e = !0;
    f.prototype.Rs = function() {
        this.Tx && (this.ph = this.b.wq[this.Tx], this.ph.ht());
        this.b.ma = this;
        this.width = this.pG;
        this.height = this.oG;
        this.scrollX = this.b.Mb / 2;
        this.scrollY = this.b.Lb / 2;
        var a, b, d, k, t, f, h;
        a = 0;
        for (d = this.b.P.length; a < d; a++)
            if (b = this.b.P[a], !b.R)
                for (t = b.q, b = 0, k = t.length; b < k; b++)
                    if (f = t[b], f.C) {
                        var q = f.C.Qw;
                        q >= this.ra.length && (q = this.ra.length - 1);
                        f.C = this.ra[q]; - 1 === f.C.q.indexOf(f) && f.C.q.push(f);
                        f.C.fi = !0
                    }
        if (!e)
            for (a = 0, d = this.ra.length; a < d; ++a) this.ra[a].q.sort(p);
        G(c);
        this.Tu();
        a = 0;
        for (d = this.ra.length; a < d; a++) f = this.ra[a], f.sD(), f.np();
        t = !1;
        if (!this.Fi) {
            for (h in this.Og)
                if (this.Og.hasOwnProperty(h) && (b = this.b.Cn(parseInt(h, 10))) && !b.R && this.b.gt(b)) {
                    k = this.Og[h];
                    a = 0;
                    for (d = k.length; a < d; a++) {
                        f = null;
                        if (b.X.Ig && (f = this.Bn(k[a].w.l), !f)) continue;
                        f = this.b.zg(b.Wd, f, !1, 0, 0, !0);
                        this.b.Zn(f, k[a]);
                        t = !0;
                        c.push(f)
                    }
                    G(k)
                }
            a = 0;
            for (d = this.ra.length; a < d; a++) this.ra[a].q.sort(p), this.ra[a].fi = !0
        }
        t && (this.b.Cc(), this.b.zx());
        for (a = 0; a < c.length; a++)
            if (f = c[a], f.type.ic)
                for (d = f.xk(), b = 0, k = f.type.rd.length; b < k; b++) h = f.type.rd[b], f.type !== h && (h.q.length > d ? f.siblings.push(h.q[d]) : h.Wd && (t = this.b.zg(h.Wd, f.C, !0, f.x, f.y, !0), this.b.Cc(), h.mp(), f.siblings.push(t), c.push(t)));
        a = 0;
        for (d = this.Hg.length; a < d; a++) f = this.Hg[a], b = this.b.P[f[1]], b.ic || this.b.zg(this.Hg[a], null, !0);
        this.b.gh = null;
        this.b.Cc();
        if (this.b.Sa && !this.b.ba)
            for (a = 0, d = this.b.P.length; a < d; a++) h = this.b.P[a], !h.R && h.q.length && h.uj && h.uj(this.b.Sa);
        if (this.b.Ik) Ha(this.b.rn, c);
        else
            for (a = 0, d = c.length; a < d; a++) f = c[a], this.b.trigger(Object.getPrototypeOf(f.type.X).k.ki, f);
        G(c);
        this.b.Ik || this.b.trigger(V.prototype.k.bu, null);
        this.Fi = !1
    };
    f.prototype.rD = function() {
        var a, b, d, c, e;
        b = a = 0;
        for (d = this.Hg.length; a < d; a++) c = this.Hg[a], e = this.b.P[c[1]], e.global ? e.ic || this.b.zg(c, null, !0) : (this.Hg[b] = c, b++);
        Ga(this.Hg, b)
    };
    f.prototype.lH = function() {
        this.b.Ik || this.b.trigger(V.prototype.k.PA, null);
        this.b.ir = !0;
        G(this.b.hf.nd);
        var a, b, d, c, f, h;
        if (!this.Fi)
            for (a = 0, b = this.ra.length; a < b; a++)
                for (this.ra[a].lt(), f = this.ra[a].q, d = 0, c = f.length; d < c; d++) h = f[d], h.type.global || this.b.gt(h.type) && this.WG(h);
        a = 0;
        for (b = this.ra.length; a < b; a++) {
            f = this.ra[a].q;
            d = 0;
            for (c = f.length; d < c; d++) h = f[d], h.type.global || this.b.pf(h);
            this.b.Cc();
            G(f);
            this.ra[a].fi = !0
        }
        a = 0;
        for (b = this.b.P.length; a < b; a++)
            if (f = this.b.P[a], !(f.global || f.X.Ig || f.X.To || f.R)) {
                d = 0;
                for (c = f.q.length; d < c; d++) this.b.pf(f.q[d]);
                this.b.Cc()
            }
        e = !1;
        this.b.ir = !1
    };
    new ya(0, 0, 0, 0);
    f.prototype.xb = function(a) {
        var b, d = a,
            c = !1,
            e = !this.b.Fd;
        e && (this.b.Xn || (this.b.Xn = document.createElement("canvas"), b = this.b.Xn, b.width = this.b.aa, b.height = this.b.Z, this.b.mw = b.getContext("2d"), c = !0), b = this.b.Xn, d = this.b.mw, b.width !== this.b.aa && (b.width = this.b.aa, c = !0), b.height !== this.b.Z && (b.height = this.b.Z, c = !0), c && this.b.No(d, this.b.Ha));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.b.$u && !this.Iv() && d.clearRect(0, 0, this.b.aa, this.b.Z);
        var f, h, c = 0;
        for (f = this.ra.length; c < f; c++) h = this.ra[c], h.visible && 0 < h.opacity && 11 !== h.Ec && (h.q.length || !h.Ge) ? h.xb(d) : h.np();
        e && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    f.prototype.Af = function(a) {
        a.Kx(!0);
        this.b.Kb || (this.b.Kb = a.sd(this.b.aa, this.b.Z, this.b.Ha));
        if (this.b.Kb.pe !== this.b.aa || this.b.Kb.oe !== this.b.Z) a.deleteTexture(this.b.Kb), this.b.Kb = a.sd(this.b.aa, this.b.Z, this.b.Ha);
        a.de(this.b.Kb);
        this.b.Fd || a.Yh(this.b.aa, this.b.Z);
        var b, d;
        for (b = this.ra.length - 1; 0 <= b; --b) d = this.ra[b], d.visible && 1 === d.opacity && d.Zf && 0 === d.Ec && (d.q.length || !d.Ge) ? d.Af(a) : d.np();
        a.Kx(!1)
    };
    f.prototype.Za = function(a) {
        var b = 0 < this.Ga.length || this.b.Hj || !this.b.Fd || this.b.Ta;
        if (b) {
            this.b.Kb || (this.b.Kb = a.sd(this.b.aa, this.b.Z, this.b.Ha));
            if (this.b.Kb.pe !== this.b.aa || this.b.Kb.oe !== this.b.Z) a.deleteTexture(this.b.Kb), this.b.Kb = a.sd(this.b.aa, this.b.Z, this.b.Ha);
            a.de(this.b.Kb);
            this.b.Fd || a.Yh(this.b.aa, this.b.Z)
        } else this.b.Kb && (a.de(null), a.deleteTexture(this.b.Kb), this.b.Kb = null);
        this.b.$u && !this.Iv() && a.clear(0, 0, 0, 0);
        var d, c, e;
        d = 0;
        for (c = this.ra.length; d < c; d++) e = this.ra[d], e.visible && 0 < e.opacity && (e.q.length || !e.Ge) ? e.Za(a) : e.np();
        b && (0 === this.Ga.length || 1 === this.Ga.length && this.b.Fd ? (1 === this.Ga.length ? (b = this.Ga[0].index, a.md(this.Ga[0].Rb), a.yj(null, 1 / this.b.aa, 1 / this.b.Z, 0, 0, 1, 1, this.scale, this.A, 0, 0, this.b.aa / 2, this.b.Z / 2, this.b.kc.na, this.kb[b]), a.Do(this.Ga[0].Rb) && (this.b.W = !0)) : a.md(0), this.b.Fd || a.Yh(this.b.width, this.b.height), a.de(null), a.Ix(!1), a.De(1), a.pc(this.b.Kb), a.Gx(), a.be(), a.Qd(), b = this.b.width / 2, d = this.b.height / 2, a.vj(-b, d, b, d, b, -d, -b, -d), a.pc(null), a.Ix(!0)) : this.Bs(a, null, null, null))
    };
    f.prototype.vk = function() {
        return 0 < this.Ga.length || this.b.Hj || !this.b.Fd || this.b.Ta ? this.b.Kb : null
    };
    f.prototype.Fv = function() {
        var a = this.ra[0].Rc(),
            b, d, c;
        b = 1;
        for (d = this.ra.length; b < d; b++) c = this.ra[b], (0 !== c.gd || 0 !== c.hd) && c.Rc() < a && (a = c.Rc());
        return a
    };
    f.prototype.Js = function(a) {
        if (!this.ty) {
            var b = 1 / this.Fv() * this.b.aa / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.W = !0)
    };
    f.prototype.Ks = function(a) {
        if (!this.ty) {
            var b = 1 / this.Fv() * this.b.Z / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.W = !0)
    };
    f.prototype.Tu = function() {
        this.Js(this.scrollX);
        this.Ks(this.scrollY)
    };
    f.prototype.Bs = function(a, b, d, c) {
        var e = d ? d.Ga : b ? b.Ga : this.Ga,
            f = 1,
            h = 0,
            q = 0,
            v = 0,
            u = this.b.aa,
            r = this.b.Z;
        d ? (f = d.C.Rc(), h = d.C.Ib(), q = d.C.xa, v = d.C.ya, u = d.C.Da, r = d.C.Ca) : b && (f = b.Rc(), h = b.Ib(), q = b.xa, v = b.ya, u = b.Da, r = b.Ca);
        var l = this.b.Eq,
            x, E, p, n, w = 0,
            K = 1,
            P, R, A = this.b.aa,
            N = this.b.Z,
            L = A / 2,
            X = N / 2,
            B = b ? b.ae : this.ae,
            y = b ? b.As : this.As,
            O = 0,
            Y = 0,
            H = 0,
            J = 0,
            T = A,
            ea = A,
            U = N,
            pa = N,
            ja = p = 0;
        n = d ? d.C.Ib() : 0;
        if (d) {
            x = 0;
            for (E = e.length; x < E; x++) p += a.YE(e[x].Rb), ja += a.ZE(e[x].Rb);
            J = d.Xa;
            O = b.Ua(J.left, J.top, !0, !0);
            H = b.Ua(J.left, J.top, !1, !0);
            T = b.Ua(J.right, J.bottom, !0, !0);
            U = b.Ua(J.right, J.bottom, !1, !0);
            0 !== n && (x = b.Ua(J.right, J.top, !0, !0), E = b.Ua(J.right, J.top, !1, !0), Y = b.Ua(J.left, J.bottom, !0, !0), J = b.Ua(J.left, J.bottom, !1, !0), n = Math.min(O, T, x, Y), T = Math.max(O, T, x, Y), O = n, n = Math.min(H, U, E, J), U = Math.max(H, U, E, J), H = n);
            O -= p;
            H -= ja;
            T += p;
            U += ja;
            y.left = O / A;
            y.top = 1 - H / N;
            y.right = T / A;
            y.bottom = 1 - U / N;
            Y = O = z(O);
            J = H = z(H);
            ea = T = wa(T);
            pa = U = wa(U);
            Y -= p;
            J -= ja;
            ea += p;
            pa += ja;
            0 > O && (O = 0);
            0 > H && (H = 0);
            T > A && (T = A);
            U > N && (U = N);
            0 > Y && (Y = 0);
            0 > J && (J = 0);
            ea > A && (ea = A);
            pa > N && (pa = N);
            B.left = O / A;
            B.top = 1 - H / N;
            B.right = T / A;
            B.bottom = 1 - U / N
        } else B.left = y.left = 0, B.top = y.top = 0, B.right = y.right = 1, B.bottom = y.bottom = 1;
        ja = d && (a.rl(e[0].Rb) || 0 !== p || 0 !== ja || 1 !== d.opacity || d.type.X.Nw) || b && !d && 1 !== b.opacity;
        a.Gx();
        if (ja) {
            l[w] || (l[w] = a.sd(A, N, this.b.Ha));
            if (l[w].pe !== A || l[w].oe !== N) a.deleteTexture(l[w]), l[w] = a.sd(A, N, this.b.Ha);
            a.md(0);
            a.de(l[w]);
            R = pa - J;
            a.clearRect(Y, N - J - R, ea - Y, R);
            d ? d.Za(a) : (a.pc(this.b.Zb), a.De(b.opacity), a.be(), a.translate(-L, -X), a.Qd(), a.Cd(O, U, T, U, T, H, O, H, B));
            y.left = y.top = 0;
            y.right = y.bottom = 1;
            d && (n = B.top, B.top = B.bottom, B.bottom = n);
            w = 1;
            K = 0
        }
        a.De(1);
        p = e.length - 1;
        var aa = a.vs(e[p].Rb) || !b && !d && !this.b.Fd;
        x = n = 0;
        for (E = e.length; x < E; x++) {
            l[w] || (l[w] = a.sd(A, N, this.b.Ha));
            if (l[w].pe !== A || l[w].oe !== N) a.deleteTexture(l[w]), l[w] = a.sd(A, N, this.b.Ha);
            a.md(e[x].Rb);
            n = e[x].index;
            a.Do(e[x].Rb) && (this.b.W = !0);
            0 != x || ja ? (a.yj(c, 1 / A, 1 / N, y.left, y.top, y.right, y.bottom, f, h, q, v, (q + u) / 2, (v + r) / 2, this.b.kc.na, d ? d.kb[n] : b ? b.kb[n] : this.kb[n]), a.pc(null), x !== p || aa ? (a.de(l[w]), R = pa - J, P = N - J - R, a.clearRect(Y, P, ea - Y, R)) : (d ? a.Sg(d.Lc, d.Gc) : b && a.Sg(b.Lc, b.Gc), a.de(c)), a.pc(l[K]), a.be(), a.translate(-L, -X), a.Qd(), a.Cd(O, U, T, U, T, H, O,
                H, B), x !== p || aa || a.pc(null)) : (a.de(l[w]), R = pa - J, P = N - J - R, a.clearRect(Y, P, ea - Y, R), d ? (d.fc && d.fc.M ? (P = d.fc.M, K = 1 / P.width, P = 1 / P.height) : (K = 1 / d.width, P = 1 / d.height), a.yj(c, K, P, y.left, y.top, y.right, y.bottom, f, h, q, v, (q + u) / 2, (v + r) / 2, this.b.kc.na, d.kb[n]), d.Za(a)) : (a.yj(c, 1 / A, 1 / N, 0, 0, 1, 1, f, h, q, v, (q + u) / 2, (v + r) / 2, this.b.kc.na, b ? b.kb[n] : this.kb[n]), a.pc(b ? this.b.Zb : this.b.Kb), a.be(), a.translate(-L, -X), a.Qd(), a.Cd(O, U, T, U, T, H, O, H, B)), y.left = y.top = 0, y.right = y.bottom = 1, d && !aa && (n = U, U = H, H = n));
            w = 0 === w ? 1 : 0;
            K = 0 === w ? 1 :
                0
        }
        aa && (a.md(0), d ? a.Sg(d.Lc, d.Gc) : b ? a.Sg(b.Lc, b.Gc) : this.b.Fd || (a.Yh(this.b.width, this.b.height), L = this.b.width / 2, X = this.b.height / 2, H = O = 0, T = this.b.width, U = this.b.height), a.de(c), a.pc(l[K]), a.be(), a.translate(-L, -X), a.Qd(), d && 1 === e.length && !ja ? a.Cd(O, H, T, H, T, U, O, U, B) : a.Cd(O, U, T, U, T, H, O, H, B), a.pc(null))
    };
    f.prototype.Bn = function(a) {
        var b, d;
        b = 0;
        for (d = this.ra.length; b < d; b++)
            if (this.ra[b].za === a) return this.ra[b];
        return null
    };
    f.prototype.Wa = function() {
        var a, b, d, c = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.A,
            w: this.width,
            h: this.height,
            fv: this.Fi,
            persist: this.Og,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.ja.length; a < b; a++) d = this.ja[a], c.fx.push({
            name: d.name,
            active: d.eb,
            params: this.kb[d.index]
        });
        a = 0;
        for (b = this.ra.length; a < b; a++) d = this.ra[a], c.layers[d.za.toString()] = d.Wa();
        return c
    };
    f.prototype.bb = function(a) {
        var b, d, c, e;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.A = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Og = a.persist;
        "undefined" !== typeof a.fv && (this.Fi = a.fv);
        var f = a.fx;
        b = 0;
        for (d = f.length; b < d; b++)
            if (c = this.Kq(f[b].name)) c.eb = f[b].active, this.kb[c.index] = f[b].params;
        this.He();
        b = a.layers;
        for (e in b) b.hasOwnProperty(e) && (a = this.Bn(parseInt(e, 10))) && a.bb(b[e])
    };
    Pb = f;
    n.prototype.He = function() {
        G(this.Ga);
        this.Zf = !0;
        var a, b, d;
        a = 0;
        for (b = this.ja.length; a < b; a++) d = this.ja[a], d.eb && (this.Ga.push(d), d.ze || (this.Zf = !1))
    };
    n.prototype.Kq = function(a) {
        var b, d, c;
        b = 0;
        for (d = this.ja.length; b < d; b++)
            if (c = this.ja[b], c.name === a) return c;
        return null
    };
    n.prototype.sD = function() {
        var a, b, d, e, f, h;
        b = a = 0;
        for (d = this.Hd.length; a < d; a++) {
            e = this.Hd[a];
            f = this.b.P[e[1]];
            h = this.b.gt(f);
            f = !0;
            if (!h || this.lc.Fi) {
                e = this.b.zg(e, this, !0);
                if (!e) continue;
                c.push(e);
                e.type.global && (f = !1, this.lk.push(e.uid))
            }
            f && (this.Hd[b] = this.Hd[a], b++)
        }
        this.Hd.length = b;
        this.b.Cc();
        !this.b.H && this.ja.length && (this.Ec = this.ZD);
        this.ik = nb(this.Ec);
        this.b.S && ob(this, this.Ec, this.b.S);
        this.Ae = !0
    };
    n.prototype.wj = function(a, b) {
        var d = Ja(this.q, a);
        0 > d || (b && this.Rd && a.kd && a.kd.right >= a.kd.left && (a.Pa(), this.Ac.update(a, a.kd, null), a.kd.set(0, 0, -1, -1)), d === this.q.length -
            1 ? this.q.pop() : (Fa(this.q, d), this.Dl(d)), this.Ae = !0)
    };
    n.prototype.dk = function(a, b) {
        a.Ie = this.q.length;
        this.q.push(a);
        b && this.Rd && a.kd && a.L();
        this.Ae = !0
    };
    n.prototype.AG = function(a) {
        this.q.unshift(a);
        this.Dl(0)
    };
    n.prototype.eG = function(a, b, d) {
        var c = a.Te();
        b = b.Te();
        Fa(this.q, c);
        c < b && b--;
        d && b++;
        b === this.q.length ? this.q.push(a) : this.q.splice(b, 0, a);
        this.Dl(c < b ? c : b)
    };
    n.prototype.Dl = function(a) {
        -1 === this.kg ? this.kg = a : a < this.kg && (this.kg = a);
        this.Ae = this.fi = !0
    };
    n.prototype.lt = function() {
        if (this.fi) {
            -1 === this.kg && (this.kg = 0);
            var a, b, d;
            if (this.Rd)
                for (a = this.kg, b = this.q.length; a < b; ++a) d = this.q[a], d.Ie = a, this.Ac.ZF(d.kd);
            else
                for (a = this.kg, b = this.q.length; a < b; ++a) this.q[a].Ie = a;
            this.fi = !1;
            this.kg = -1
        }
    };
    n.prototype.Rc = function(a) {
        return this.VE() * (this.b.Fd || a ? this.b.ek : 1)
    };
    n.prototype.VE = function() {
        return (this.scale * this.lc.scale - 1) * this.Oc + 1
    };
    n.prototype.Ib = function() {
        return this.zf ? 0 : Pa(this.lc.A + this.A)
    };
    var b = [],
        r = [],
        d = [];
    n.prototype.Oq = function() {
        this.lt();
        this.Ac.Go(this.xa, this.ya, this.Da, this.Ca, d);
        if (!d.length) return h();
        if (1 === d.length) {
            var a = h();
            Ha(a, d[0]);
            G(d);
            return a
        }
        for (var b = !0; 1 < d.length;) {
            for (var a = d, c = void 0, e = void 0, f = void 0, p = void 0, C = void 0, c = 0, e = a.length; c < e - 1; c += 2) {
                var f = a[c],
                    p = a[c + 1],
                    C = h(),
                    q = f,
                    v = p,
                    u = C,
                    n = 0,
                    D = 0,
                    x = 0,
                    E = q.length,
                    F = v.length,
                    S = void 0,
                    w = void 0;
                for (u.length = E + F; n < E && D < F; ++x) S = q[n], w = v[D], S.Ie < w.Ie ? (u[x] = S, ++n) : (u[x] = w, ++D);
                for (; n < E; ++n, ++x) u[x] = q[n];
                for (; D < F; ++D, ++x) u[x] = v[D];
                b || (l(f), l(p));
                r.push(C)
            }
            1 === e % 2 && (b ? (f = h(), Ha(f, a[e - 1]), r.push(f)) : r.push(a[e - 1]));
            Ha(a, r);
            G(r);
            b = !1
        }
        a = d[0];
        G(d);
        return a
    };
    n.prototype.xb = function(a) {
        this.ef = this.xn || 1 !== this.opacity || 0 !== this.Ec;
        var b = this.b.canvas,
            d = a,
            c = !1;
        this.ef && (this.b.Wn || (this.b.Wn = document.createElement("canvas"), b = this.b.Wn, b.width = this.b.aa, b.height = this.b.Z, this.b.lw = b.getContext("2d"), c = !0), b = this.b.Wn, d = this.b.lw, b.width !== this.b.aa && (b.width = this.b.aa, c = !0), b.height !== this.b.Z && (b.height = this.b.Z, c = !0), c && this.b.No(d, this.b.Ha), this.Ge && d.clearRect(0, 0, this.b.aa, this.b.Z));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.Ge || (d.fillStyle = "rgb(" + this.Dc[0] + "," + this.Dc[1] + "," + this.Dc[2] + ")", d.fillRect(0, 0, this.b.aa, this.b.Z));
        d.save();
        this.zf = !0;
        var c = this.ub(0, 0, !0, !0),
            e = this.ub(0, 0, !1, !0);
        this.zf = !1;
        this.b.oc && (c = Math.round(c), e = Math.round(e));
        this.Io(c, e, d);
        var f = this.Rc();
        d.scale(f, f);
        d.translate(-c, -e);
        this.Rd ? (this.rc.left = this.Ac.Yc(this.xa), this.rc.top = this.Ac.Zc(this.ya), this.rc.right = this.Ac.Yc(this.Da), this.rc.bottom = this.Ac.Zc(this.Ca), this.Ae || !this.rc.pk(this.ej) ? (l(this.Of), c = this.Oq(), this.Ae = !1, this.ej.vi(this.rc)) : c = this.Of) : c = this.q;
        for (var h, q = null, e = 0, f = c.length; e < f; ++e) h = c[e], h !== q && (this.UD(h, d), q = h);
        this.Rd && (this.Of = c);
        d.restore();
        this.ef && (a.globalCompositeOperation = this.ik, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    n.prototype.UD = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Pa();
            var d = a.Xa;
            d.right < this.xa || d.bottom < this.ya || d.left > this.Da || d.top > this.Ca || (b.globalCompositeOperation = a.ik, a.xb(b))
        }
    };
    n.prototype.np = function() {
        this.zf = !0;
        var a = this.ub(0, 0, !0, !0),
            b = this.ub(0, 0, !1, !0);
        this.zf = !1;
        this.b.oc && (a = Math.round(a), b = Math.round(b));
        this.Io(a, b, null)
    };
    n.prototype.Io = function(a, b, d) {
        var c = this.Rc();
        this.xa = a;
        this.ya = b;
        this.Da = a + 1 / c * this.b.aa;
        this.Ca = b + 1 / c * this.b.Z;
        this.xa > this.Da && (a = this.xa, this.xa = this.Da, this.Da = a);
        this.ya > this.Ca && (a = this.ya, this.ya = this.Ca, this.Ca = a);
        a = this.Ib();
        0 !== a && (d && (d.translate(this.b.aa / 2, this.b.Z / 2), d.rotate(-a), d.translate(this.b.aa / -2, this.b.Z / -2)), this.gg.set(this.xa, this.ya, this.Da, this.Ca), this.gg.offset((this.xa + this.Da) / -2, (this.ya + this.Ca) /
            -2), this.ky.Rx(this.gg, a), this.ky.Uu(this.gg), this.gg.offset((this.xa + this.Da) / 2, (this.ya + this.Ca) / 2), this.xa = this.gg.left, this.ya = this.gg.top, this.Da = this.gg.right, this.Ca = this.gg.bottom)
    };
    n.prototype.Af = function(a) {
        if (this.ef = this.xn) {
            this.b.Zb || (this.b.Zb = a.sd(this.b.aa, this.b.Z, this.b.Ha));
            if (this.b.Zb.pe !== this.b.aa || this.b.Zb.oe !== this.b.Z) a.deleteTexture(this.b.Zb), this.b.Zb = a.sd(this.b.aa, this.b.Z, this.b.Ha);
            a.de(this.b.Zb)
        }
        this.zf = !0;
        var b = this.ub(0, 0, !0, !0),
            d = this.ub(0, 0, !1, !0);
        this.zf = !1;
        this.b.oc && (b = Math.round(b), d = Math.round(d));
        this.Io(b, d, null);
        b = this.Rc();
        a.be();
        a.scale(b, b);
        a.Jo(-this.Ib());
        a.translate((this.xa + this.Da) / -2, (this.ya + this.Ca) / -2);
        a.Qd();
        this.Rd ? (this.rc.left = this.Ac.Yc(this.xa), this.rc.top = this.Ac.Zc(this.ya), this.rc.right = this.Ac.Yc(this.Da), this.rc.bottom = this.Ac.Zc(this.Ca), this.Ae || !this.rc.pk(this.ej) ? (l(this.Of), b = this.Oq(), this.Ae = !1, this.ej.vi(this.rc)) : b = this.Of) : b = this.q;
        for (var c, e = null, d = b.length - 1; 0 <= d; --d) c = b[d], c !== e && (this.WD(b[d], a), e = c);
        this.Rd && (this.Of = b);
        this.Ge || (this.gq = this.b.nh++, a.Oo(this.gq), a.Hx(1, 1, 1), a.wv(), a.LG())
    };
    n.prototype.Za = function(a) {
        var b = 0,
            d = 0;
        if (this.ef = this.xn || 1 !== this.opacity || 0 < this.Ga.length || 0 !== this.Ec) {
            this.b.Zb || (this.b.Zb = a.sd(this.b.aa, this.b.Z, this.b.Ha));
            if (this.b.Zb.pe !== this.b.aa || this.b.Zb.oe !== this.b.Z) a.deleteTexture(this.b.Zb), this.b.Zb = a.sd(this.b.aa, this.b.Z, this.b.Ha);
            a.de(this.b.Zb);
            this.Ge && a.clear(0, 0, 0, 0)
        }
        this.Ge || (this.b.Ta ? (a.Oo(this.gq), a.Hx(this.Dc[0] / 255, this.Dc[1] / 255, this.Dc[2] /
            255), a.wv(), a.eH()) : a.clear(this.Dc[0] / 255, this.Dc[1] / 255, this.Dc[2] / 255, 1));
        this.zf = !0;
        var c = this.ub(0, 0, !0, !0),
            b = this.ub(0, 0, !1, !0);
        this.zf = !1;
        this.b.oc && (c = Math.round(c), b = Math.round(b));
        this.Io(c, b, null);
        c = this.Rc();
        a.be();
        a.scale(c, c);
        a.Jo(-this.Ib());
        a.translate((this.xa + this.Da) / -2, (this.ya + this.Ca) / -2);
        a.Qd();
        this.Rd ? (this.rc.left = this.Ac.Yc(this.xa), this.rc.top = this.Ac.Zc(this.ya), this.rc.right = this.Ac.Yc(this.Da), this.rc.bottom = this.Ac.Zc(this.Ca), this.Ae || !this.rc.pk(this.ej) ? (l(this.Of),
            b = this.Oq(), this.Ae = !1, this.ej.vi(this.rc)) : b = this.Of) : b = this.q;
        var e, f, h = null,
            d = 0;
        for (e = b.length; d < e; ++d) f = b[d], f !== h && (this.VD(b[d], a), h = f);
        this.Rd && (this.Of = b);
        this.ef && (b = this.Ga.length ? this.Ga[0].Rb : 0, d = this.Ga.length ? this.Ga[0].index : 0, 0 === this.Ga.length || 1 === this.Ga.length && !a.vs(b) && 1 === this.opacity ? (1 === this.Ga.length ? (a.md(b), a.yj(this.lc.vk(), 1 / this.b.aa, 1 / this.b.Z, 0, 0, 1, 1, c, this.Ib(), this.xa, this.ya, (this.xa + this.Da) / 2, (this.ya + this.Ca) / 2, this.b.kc.na, this.kb[d]), a.Do(b) && (this.b.W = !0)) :
            a.md(0), a.de(this.lc.vk()), a.De(this.opacity), a.pc(this.b.Zb), a.Sg(this.Lc, this.Gc), a.be(), a.Qd(), c = this.b.aa / 2, b = this.b.Z / 2, a.vj(-c, b, c, b, c, -b, -c, -b), a.pc(null)) : this.lc.Bs(a, this, null, this.lc.vk()))
    };
    n.prototype.VD = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Pa();
            var d = a.Xa;
            d.right < this.xa || d.bottom < this.ya || d.left > this.Da || d.top > this.Ca || (b.Oo(a.nh), a.Cy ? this.XD(a, b) : (b.md(0), b.Sg(a.Lc, a.Gc), a.Za(b)))
        }
    };
    n.prototype.WD = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Pa();
            var d = a.Xa;
            d.right < this.xa || d.bottom < this.ya || d.left > this.Da || d.top > this.Ca || (a.nh = this.b.nh++, 0 === a.Ec && 1 === a.opacity && a.Zf && a.Af && (b.Oo(a.nh), a.Af(b)))
        }
    };
    n.prototype.XD = function(a, b) {
        var d = a.Ga[0].Rb,
            c = a.Ga[0].index,
            e = this.Rc();
        if (1 !== a.Ga.length || b.vs(d) || b.CG(d) || (a.A || a.C.Ib()) && b.rl(d) || 1 !== a.opacity || a.type.X.Nw) this.lc.Bs(b, this, a, this.ef ? this.b.Zb : this.lc.vk()), b.be(), b.scale(e, e), b.Jo(-this.Ib()), b.translate((this.xa + this.Da) / -2, (this.ya + this.Ca) / -2), b.Qd();
        else {
            b.md(d);
            b.Sg(a.Lc, a.Gc);
            b.Do(d) &&
                (this.b.W = !0);
            var f = 0,
                h = 0,
                q = 0,
                v = 0;
            b.rl(d) && (v = a.Xa, f = this.Ua(v.left, v.top, !0, !0), h = this.Ua(v.left, v.top, !1, !0), q = this.Ua(v.right, v.bottom, !0, !0), v = this.Ua(v.right, v.bottom, !1, !0), f = f / windowWidth, h = 1 - h / windowHeight, q = q / windowWidth, v = 1 - v / windowHeight);
            var u;
            a.fc && a.fc.M ? (u = a.fc.M, d = 1 / u.width, u = 1 / u.height) : (d = 1 / a.width, u = 1 / a.height);
            b.yj(this.ef ? this.b.Zb : this.lc.vk(), d, u, f, h, q, v, e, this.Ib(), this.xa, this.ya, (this.xa + this.Da) / 2, (this.ya + this.Ca) / 2, this.b.kc.na, a.kb[c]);
            a.Za(b)
        }
    };
    n.prototype.ub = function(a,
        b, d, c) {
        var e = this.b.devicePixelRatio;
        this.b.Ch && (a *= e, b *= e);
        var e = this.b.mx,
            f = this.b.nx,
            e = (this.lc.scrollX - e) * this.gd + e,
            f = (this.lc.scrollY - f) * this.hd + f,
            h = e,
            q = f,
            v = 1 / this.Rc(!c);
        c ? (h -= this.b.aa * v / 2, q -= this.b.Z * v / 2) : (h -= this.b.width * v / 2, q -= this.b.height * v / 2);
        h += a * v;
        q += b * v;
        b = this.Ib();
        0 !== b && (h -= e, q -= f, a = Math.cos(b), b = Math.sin(b), c = h * a - q * b, q = q * a + h * b, h = c + e, q += f);
        return d ? h : q
    };
    n.prototype.Ua = function(a, b, d, c) {
        var e = this.b.mx,
            f = this.b.nx,
            h = (this.lc.scrollX - e) * this.gd + e,
            q = (this.lc.scrollY - f) * this.hd + f,
            f = h,
            e = q,
            v = this.Ib();
        if (0 !== v) {
            a -= h;
            b -= q;
            var u = Math.cos(-v),
                v = Math.sin(-v),
                r = a * u - b * v;
            b = b * u + a * v;
            a = r + h;
            b += q
        }
        h = 1 / this.Rc(!c);
        c ? (f -= this.b.aa * h / 2, e -= this.b.Z * h / 2) : (f -= this.b.width * h / 2, e -= this.b.height * h / 2);
        f = (a - f) / h;
        e = (b - e) / h;
        a = this.b.devicePixelRatio;
        this.b.Ch && !c && (f /= a, e /= a);
        return d ? f : e
    };
    n.prototype.Wa = function() {
        var a, b, d, c = {
            s: this.scale,
            a: this.A,
            vl: this.xa,
            vt: this.ya,
            vr: this.Da,
            vb: this.Ca,
            v: this.visible,
            bc: this.Dc,
            t: this.Ge,
            px: this.gd,
            py: this.hd,
            o: this.opacity,
            zr: this.Oc,
            fx: [],
            cg: this.lk,
            instances: []
        };
        a = 0;
        for (b = this.ja.length; a < b; a++) d = this.ja[a], c.fx.push({
            name: d.name,
            active: d.eb,
            params: this.kb[d.index]
        });
        return c
    };
    n.prototype.bb = function(a) {
        var b, d, c;
        this.scale = a.s;
        this.A = a.a;
        this.xa = a.vl;
        this.ya = a.vt;
        this.Da = a.vr;
        this.Ca = a.vb;
        this.visible = a.v;
        this.Dc = a.bc;
        this.Ge = a.t;
        this.gd = a.px;
        this.hd = a.py;
        this.opacity = a.o;
        this.Oc = a.zr;
        this.lk = a.cg || [];
        Ha(this.Hd, this.$x);
        var e = new da;
        b = 0;
        for (c = this.lk.length; b < c; ++b) e.add(this.lk[b]);
        d = b = 0;
        for (c = this.Hd.length; b < c; ++b) e.contains(this.Hd[b][2]) || (this.Hd[d] = this.Hd[b], ++d);
        Ga(this.Hd, d);
        d = a.fx;
        b = 0;
        for (c = d.length; b < c; b++)
            if (a = this.Kq(d[b].name)) a.eb = d[b].active, this.kb[a.index] = d[b].params;
        this.He();
        this.q.sort(p);
        this.fi = !0
    };
    dc = n
})();
(function() {
    function f(a, b) {
        var d, c = a.length;
        switch (c) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (d = 0; d < c; d++)
                    if (a[d] !== b[d]) return !1;
                return !0
        }
    }

    function p(a, b) {
        return a.index - b.index
    }

    function n(a) {
        var b, d, c, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(p);
        a.length >= t.length && (t.length = a.length + 1);
        t[a.length] || (t[a.length] = []);
        e = t[a.length];
        b = 0;
        for (d = e.length; b < d; b++)
            if (c = e[b], f(a, c)) return c;
        e.push(a);
        return a
    }

    function h(a, b) {
        this.b = a;
        this.qy = {};
        this.rv = {};
        this.Xq = !1;
        this.Lv = new da;
        this.pq = [];
        this.Wp = [];
        this.name = b[0];
        var d = b[1];
        this.Cg = [];
        var c, e;
        c = 0;
        for (e = d.length; c < e; c++) this.Nv(d[c], null, this.Cg)
    }

    function l(a) {
        this.type = a;
        this.q = [];
        this.ka = [];
        this.Y = !0
    }

    function c(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.wa = [];
        this.Tg = [];
        this.Jv = this.hp = this.$s = this.Jn = this.group = this.Qs = !1;
        this.Vb = [];
        this.Sd = [];
        this.fe = [];
        this.yk = "";
        this.Ki = this.Jn = this.group = !1;
        this.Tm = null;
        d[1] && (this.yk = d[1][1].toLowerCase(), this.group = !0, this.Jn = !!d[1][0], this.Tm = [], this.Ki = this.Jn, this.b.rg.push(this), this.b.zk[this.yk] = this);
        this.Ld = d[2];
        this.za = d[4];
        this.group || (this.b.Ru[this.za.toString()] = this);
        var c = d[5];
        a = 0;
        for (b = c.length; a < b; a++) {
            var e = new ec(this, c[a]);
            e.index = a;
            this.Vb.push(e);
            this.Ku(e.type)
        }
        c = d[6];
        a = 0;
        for (b = c.length; a < b; a++) e = new gc(this, c[a]), e.index = a, this.Sd.push(e);
        if (8 === d.length)
            for (d = d[7], a = 0, b = d.length; a < b; a++) this.sheet.Nv(d[a], this, this.fe);
        this.Sn = !1;
        this.Vb.length && (this.Sn = null == this.Vb[0].type && this.Vb[0].tc == V.prototype.k.zt)
    }

    function e(a, b) {
        var d, c, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.ic))
            for (d = 0, c = a.rd.length; d < c; d++) e = a.rd[d], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function b(a, b) {
        this.Dd = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.la = [];
        this.nb = [];
        this.T = {};
        this.index = -1;
        this.bk = !1;
        this.tc = this.b.lg(b[1]);
        this.trigger = 0 < b[3];
        this.qv = 2 === b[3];
        this.ue = b[4];
        this.Ni = b[5];
        this.OF = b[6];
        this.za = b[7];
        this.b.yg[this.za.toString()] = this; - 1 === b[0] ? (this.type = null, this.Qb = this.Gs, this.eh = null, this.ne = -1) : (this.type = this.b.P[b[0]], this.Qb = this.OF ? this.UG : this.Fs, b[2] ? (this.eh = this.type.An(b[2]), this.ne = this.type.Hq(b[2])) : (this.eh = null, this.ne = -1), this.Dd.parent && this.Dd.parent.Qo());
        this.qv && (this.Qb = this.VG);
        if (10 === b.length) {
            var d, c, e = b[9];
            d = 0;
            for (c = e.length; d < c; d++) {
                var g = new hc(this, e[d]);
                this.la.push(g)
            }
            this.nb.length = e.length
        }
    }

    function r(a, b) {
        this.Dd = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.la = [];
        this.nb = [];
        this.T = {};
        this.index = -1;
        this.bk = !1;
        this.tc = this.b.lg(b[1]); - 1 === b[0] ? (this.type = null, this.Qb = this.Gs, this.eh = null, this.ne = -1) : (this.type = this.b.P[b[0]], this.Qb = this.Fs, b[2] ? (this.eh = this.type.An(b[2]), this.ne = this.type.Hq(b[2])) : (this.eh = null, this.ne = -1));
        this.za = b[3];
        this.b.pg[this.za.toString()] = this;
        if (6 === b.length) {
            var d, c, e = b[5];
            d = 0;
            for (c = e.length; d < c; d++) {
                var g = new hc(this, e[d]);
                this.la.push(g)
            }
            this.nb.length = e.length
        }
    }

    function d() {
        C++;
        Q.length === C && Q.push(new ic);
        return Q[C]
    }

    function a(a, b) {
        this.cb = a;
        this.Dd = a.Dd;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Pe = null;
        this.bg = 0;
        this.get = null;
        this.av = 0;
        this.lc = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Ul = this.ai = this.Ul = this.ai = this.uv = this.qh = this.Vl = null;
        this.he = !1;
        var d, c, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.Pe = new jc(this, b[1]);
                this.bg = 0;
                this.get = this.eF;
                break;
            case 1:
                this.Pe = new jc(this, b[1]);
                this.bg = 0;
                this.get = this.fF;
                break;
            case 5:
                this.Pe = new jc(this, b[1]);
                this.bg = 0;
                this.get = this.jF;
                break;
            case 3:
            case 8:
                this.av = b[1];
                this.get = this.cF;
                break;
            case 6:
                this.lc = this.b.Fr[b[1]];
                this.get = this.kF;
                break;
            case 9:
                this.key = b[1];
                this.get = this.iF;
                break;
            case 4:
                this.object = this.b.P[b[1]];
                this.get = this.lF;
                this.Dd.Ku(this.object);
                this.cb instanceof gc ? this.Dd.Qo() : this.Dd.parent && this.Dd.parent.Qo();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.R ? (this.get = this.gF, this.he = !0) : this.get = this.hF;
                break;
            case 11:
                this.Vl = b[1];
                this.qh = null;
                this.get = this.dF;
                break;
            case 2:
            case 12:
                this.uv = b[1];
                this.get = this.bF;
                break;
            case 13:
                for (this.get = this.oF, this.ai = [], this.Ul = [], d = 1, c = b.length; d < c; d++) e = new hc(this.cb, b[d]), this.ai.push(e), this.Ul.push(0)
        }
    }

    function g(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.wa = [];
        this.name = d[1];
        this.op = d[2];
        this.$q = d[3];
        this.Nk = !!d[4];
        this.Rn = !!d[5];
        this.za = d[6];
        this.b.Jj[this.za.toString()] = this;
        this.data = this.$q;
        this.parent ? (this.Qh = this.Nk || this.Rn ? -1 : this.b.jH++, this.b.cD.push(this)) : (this.Qh = -1, this.b.bD.push(this))
    }

    function m(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.wa = [];
        this.Ck = null;
        this.vF = d[1];
        this.eb = !0
    }

    function k() {
        this.by = [];
        this.reset(null)
    }
    var t = [];
    h.prototype.toString = function() {
        return this.name
    };
    h.prototype.Nv = function(a, b, d) {
        switch (a[0]) {
            case 0:
                a = new kc(this, b, a);
                if (a.Ld)
                    for (d.push(a), d = 0, b = a.Vb.length; d < b; d++) a.Vb[d].trigger && this.Ov(a, d);
                else a.Uv() ? this.Ov(a, 0) : d.push(a);
                break;
            case 1:
                a = new ac(this, b, a);
                d.push(a);
                break;
            case 2:
                a = new lc(this, b, a), d.push(a)
        }
    };
    h.prototype.Bb = function() {
        var a, b;
        a = 0;
        for (b = this.Cg.length; a < b; a++) this.Cg[a].Bb(a < b - 1 && this.Cg[a + 1].Sn)
    };
    h.prototype.ht = function() {
        G(this.pq);
        G(this.Wp);
        this.Ju(this);
        G(this.Wp)
    };
    h.prototype.Ju = function(a) {
        var b, d, c, e, g = a.pq,
            k = a.Wp,
            f = this.Lv.Yg();
        b = 0;
        for (d = f.length; b < d; ++b) c = f[b], e = c.Ck, !c.eb || a === e || -1 < k.indexOf(e) || (k.push(e), e.Ju(a), g.push(e))
    };
    h.prototype.Qb = function(a) {
        this.b.vI || (this.Xq = !0, a || (this.b.mr = !0));
        var b, d;
        b = 0;
        for (d = this.Cg.length; b < d; b++) {
            var c = this.Cg[b];
            c.Qb();
            this.b.fq(c.wa);
            this.b.Gg && this.b.Cc()
        }
        a || (this.b.mr = !1)
    };
    h.prototype.Ov = function(a, b) {
        a.Ld || this.b.lp.push(a);
        var d, c, e = a.Vb[b],
            g;
        e.type ? g = e.type.name : g = "system";
        var k = (d = e.qv) ? this.rv : this.qy;
        k[g] || (k[g] = []);
        g = k[g];
        k = e.tc;
        if (d) {
            if (e.la.length && (e = e.la[0], 1 === e.type && 2 === e.Pe.type)) {
                e = e.Pe.value.toLowerCase();
                d = 0;
                for (c = g.length; d < c; d++)
                    if (g[d].method == k) {
                        d = g[d].qk;
                        d[e] ? d[e].push([a, b]) : d[e] = [
                            [a, b]
                        ];
                        return
                    }
                d = {};
                d[e] = [
                    [a, b]
                ];
                g.push({
                    method: k,
                    qk: d
                })
            }
        } else {
            d = 0;
            for (c = g.length; d < c; d++)
                if (g[d].method == k) {
                    g[d].qk.push([a, b]);
                    return
                }
            W && k === W.prototype.k.li ? g.unshift({
                method: k,
                qk: [
                    [a, b]
                ]
            }) : g.push({
                method: k,
                qk: [
                    [a, b]
                ]
            })
        }
    };
    Qb = h;
    l.prototype.Wq = function() {
        return this.Y ? this.type.q.length : this.q.length
    };
    l.prototype.vc = function() {
        return this.Y ? this.type.q : this.q
    };
    l.prototype.sj = function(a) {
        a && (a.b.fb().hb.Ld ? (this.Y && (G(this.q), Ha(this.ka, a.type.q), this.Y = !1), a = this.ka.indexOf(a), -1 !== a && (this.q.push(this.ka[a]), this.ka.splice(a, 1))) : (this.Y = !1, G(this.q), this.q[0] = a))
    };
    ub = l;
    window._c2hh_ = "CB5D77E0042C435966842A795FF518404F9501EC";
    c.prototype.Bb = function(a) {
        var b, d = this.parent;
        if (this.group)
            for (this.hp = !0; d;) {
                if (!d.group) {
                    this.hp = !1;
                    break
                }
                d = d.parent
            }
        this.$s = !this.Uv() && (!this.parent || this.parent.group && this.parent.hp);
        this.Jv = !!a;
        this.Tg = this.wa.slice(0);
        for (d = this.parent; d;) {
            a = 0;
            for (b = d.wa.length; a < b; a++) this.$C(d.wa[a]);
            d = d.parent
        }
        this.wa = n(this.wa);
        this.Tg = n(this.Tg);
        a = 0;
        for (b = this.Vb.length; a < b; a++) this.Vb[a].Bb();
        a = 0;
        for (b = this.Sd.length; a < b; a++) this.Sd[a].Bb();
        a = 0;
        for (b = this.fe.length; a < b; a++) this.fe[a].Bb(a < b - 1 && this.fe[a + 1].Sn)
    };
    c.prototype.Lx = function(a) {
        if (this.Ki !== !!a) {
            this.Ki = !!a;
            var b;
            a = 0;
            for (b = this.Tm.length; a < b; ++a) this.Tm[a].vy();
            0 < b && this.b.ma.ph && this.b.ma.ph.ht()
        }
    };
    c.prototype.Ku = function(a) {
        e(a, this.wa)
    };
    c.prototype.$C = function(a) {
        e(a, this.Tg)
    };
    c.prototype.Qo = function() {
        this.Qs = !0;
        this.parent && this.parent.Qo()
    };
    c.prototype.Uv = function() {
        return this.Vb.length ? this.Vb[0].trigger : !1
    };
    c.prototype.Qb = function() {
        var a, b, d = !1,
            c = this.b,
            e = this.b.fb();
        e.hb = this;
        var g = this.Vb;
        this.Sn || (e.tq = !1);
        if (this.Ld) {
            0 === g.length && (d = !0);
            e.Eb = 0;
            for (a = g.length; e.Eb < a; e.Eb++) b = g[e.Eb], b.trigger || (b = b.Qb()) && (d = !0);
            (e.Ih = d) && this.Ko()
        } else {
            e.Eb = 0;
            for (a = g.length; e.Eb < a; e.Eb++)
                if (b = g[e.Eb].Qb(), !b) {
                    e.Ih = !1;
                    this.$s && c.Gg && c.Cc();
                    return
                }
            e.Ih = !0;
            this.Ko()
        }
        this.$D(e)
    };
    c.prototype.$D = function(a) {
        a.Ih && this.Jv && (a.tq = !0);
        this.$s && this.b.Gg && this.b.Cc()
    };
    c.prototype.RG = function(a) {
        this.b.fb().hb = this;
        this.Vb[a].Qb() && (this.Ko(), this.b.fb().Ih = !0)
    };
    c.prototype.Ko = function() {
        var a = this.b.fb(),
            b;
        a.$c = 0;
        for (b = this.Sd.length; a.$c < b; a.$c++)
            if (this.Sd[a.$c].Qb()) return;
        this.Ex()
    };
    c.prototype.MG = function() {
        var a = this.b.fb(),
            b;
        for (b = this.Sd.length; a.$c < b; a.$c++)
            if (this.Sd[a.$c].Qb()) return;
        this.Ex()
    };
    c.prototype.Ex = function() {
        if (this.fe.length) {
            var a, b, d, c, e = this.fe.length -
                1;
            this.b.Eo(this);
            if (this.Qs)
                for (a = 0, b = this.fe.length; a < b; a++) d = this.fe[a], (c = !this.hp || !this.group && a < e) && this.b.Qg(d.wa), d.Qb(), c ? this.b.ye(d.wa) : this.b.fq(d.wa);
            else
                for (a = 0, b = this.fe.length; a < b; a++) this.fe[a].Qb();
            this.b.Ao()
        }
    };
    c.prototype.TG = function() {
        var a = this.b.fb();
        a.hb = this;
        var b = !1,
            d;
        a.Eb = 0;
        for (d = this.Vb.length; a.Eb < d; a.Eb++)
            if (this.Vb[a.Eb].Qb()) b = !0;
            else if (!this.Ld) return !1;
        return this.Ld ? b : !0
    };
    c.prototype.Rg = function() {
        this.b.rh++;
        var a = this.b.fb().Eb,
            b = this.b.Eo(this);
        if (!this.Ld)
            for (b.Eb = a + 1, a = this.Vb.length; b.Eb < a; b.Eb++)
                if (!this.Vb[b.Eb].Qb()) {
                    this.b.Ao();
                    return
                }
        this.Ko();
        this.b.Ao()
    };
    c.prototype.EF = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Vb[b].type === a.type) return !1;
        return !0
    };
    kc = c;
    b.prototype.Bb = function() {
        var a, b, d;
        a = 0;
        for (b = this.la.length; a < b; a++) d = this.la[a], d.Bb(), d.he && (this.bk = !0)
    };
    b.prototype.VG = function() {
        return !0
    };
    b.prototype.Gs = function() {
        var a, b;
        a = 0;
        for (b = this.la.length; a < b; a++) this.nb[a] = this.la[a].get();
        return Za(this.tc.apply(this.b.hf, this.nb), this.Ni)
    };
    b.prototype.UG = function() {
        var a, b;
        a = 0;
        for (b = this.la.length; a < b; a++) this.nb[a] = this.la[a].get();
        a = this.tc.apply(this.eh ? this.eh : this.type, this.nb);
        this.type.ad();
        return a
    };
    b.prototype.Fs = function() {
        var a, b, d, c, e, g, k, f, m = this.type,
            h = m.V(),
            t = this.Dd.Ld && !this.trigger;
        b = 0;
        var r = m.ic,
            l = m.R,
            p = m.Df,
            n = this.ne,
            C = -1 < n,
            Q = this.bk,
            B = this.la,
            y = this.nb,
            O = this.Ni,
            Y = this.tc,
            H;
        if (Q)
            for (b = 0, e = B.length; b < e; ++b) g = B[b], g.he || (y[b] = g.get(0));
        else
            for (b = 0, e = B.length; b < e; ++b) y[b] = B[b].get(0); if (h.Y) {
            G(h.q);
            G(h.ka);
            H = m.q;
            a = 0;
            for (c = H.length; a < c; ++a) {
                f = H[a];
                if (Q)
                    for (b = 0, e = B.length; b < e; ++b) g = B[b], g.he && (y[b] = g.get(a));
                C ? (b = 0, l && (b = f.type.Ei[p]), b = Y.apply(f.fa[n + b], y)) : b = Y.apply(f, y);
                (k = Za(b, O)) ? h.q.push(f): t && h.ka.push(f)
            }
            m.finish && m.finish(!0);
            h.Y = !1;
            m.ad();
            return h.Wq()
        }
        d = 0;
        H = (k = t && !this.Dd.EF(this)) ? h.ka : h.q;
        var J = !1;
        a = 0;
        for (c = H.length; a < c; ++a) {
            f = H[a];
            if (Q)
                for (b = 0, e = B.length; b < e; ++b) g = B[b], g.he && (y[b] = g.get(a));
            C ? (b = 0, l && (b = f.type.Ei[p]), b = Y.apply(f.fa[n + b], y)) : b = Y.apply(f, y);
            if (Za(b, O))
                if (J = !0, k) {
                    if (h.q.push(f), r)
                        for (b = 0, e = f.siblings.length; b < e; b++) g = f.siblings[b], g.type.V().q.push(g)
                } else {
                    H[d] = f;
                    if (r)
                        for (b = 0, e = f.siblings.length; b < e; b++) g = f.siblings[b], g.type.V().q[d] = g;
                    d++
                } else if (k) {
                H[d] = f;
                if (r)
                    for (b = 0, e = f.siblings.length; b < e; b++) g = f.siblings[b], g.type.V().ka[d] = g;
                d++
            } else if (t && (h.ka.push(f), r))
                for (b = 0, e = f.siblings.length; b < e; b++) g = f.siblings[b], g.type.V().ka.push(g)
        }
        Ga(H, d);
        if (r)
            for (l = m.rd, a = 0, c = l.length; a < c; a++) f = l[a].V(), k ? Ga(f.ka, d) : Ga(f.q, d);
        d = J;
        if (k && !J)
            for (a = 0, c = h.q.length; a < c; a++) {
                f = h.q[a];
                if (Q)
                    for (b = 0, e = B.length; b < e; b++) g = B[b], g.he && (y[b] = g.get(a));
                b = C ? Y.apply(f.fa[n], y) : Y.apply(f, y);
                if (Za(b, O)) {
                    J = !0;
                    break
                }
            }
        m.finish && m.finish(d || t);
        return t ? J : h.Wq()
    };
    ec = b;
    r.prototype.Bb = function() {
        var a, b, d;
        a = 0;
        for (b = this.la.length; a < b; a++) d = this.la[a], d.Bb(), d.he && (this.bk = !0)
    };
    r.prototype.Gs = function() {
        var a = this.b,
            b, d, c = this.la,
            e = this.nb;
        b = 0;
        for (d = c.length; b < d; ++b) e[b] = c[b].get();
        return this.tc.apply(a.hf, e)
    };
    r.prototype.Fs = function() {
        var a = this.type,
            b = this.ne,
            d = a.Df,
            c = this.bk,
            e = this.la,
            g = this.nb,
            k = this.tc,
            f = a.V().vc(),
            a = a.R,
            m = -1 < b,
            h, t, r, l, p, n;
        if (c)
            for (t = 0, l = e.length; t < l; ++t) p = e[t], p.he || (g[t] = p.get(0));
        else
            for (t = 0, l = e.length; t < l; ++t) g[t] = e[t].get(0);
        h = 0;
        for (r = f.length; h < r; ++h) {
            n = f[h];
            if (c)
                for (t = 0, l = e.length; t < l; ++t) p = e[t], p.he && (g[t] = p.get(h));
            m ? (t = 0, a && (t = n.type.Ei[d]), k.apply(n.fa[b + t], g)) : k.apply(n, g)
        }
        return !1
    };
    gc = r;
    var Q = [],
        C = -1;
    a.prototype.Bb = function() {
        var a, b;
        if (11 === this.type) this.qh = this.b.Cv(this.Vl, this.Dd.parent);
        else if (13 === this.type)
            for (a = 0, b = this.ai.length; a < b; a++) this.ai[a].Bb();
        this.Pe && this.Pe.Bb()
    };
    a.prototype.aG = function(a) {
        this.he || !a || a.X.To || (this.he = !0)
    };
    a.prototype.Px = function() {
        this.he = !0
    };
    a.prototype.eF = function(a) {
        this.bg = a || 0;
        a = d();
        this.Pe.get(a);
        C--;
        return a.data
    };
    a.prototype.fF = function(a) {
        this.bg = a || 0;
        a = d();
        this.Pe.get(a);
        C--;
        return ma(a.data) ? a.data : ""
    };
    a.prototype.lF = function() {
        return this.object
    };
    a.prototype.cF = function() {
        return this.av
    };
    a.prototype.jF = function(a) {
        this.bg = a || 0;
        a = d();
        this.Pe.get(a);
        C--;
        return a.jc() ? this.b.Se(a.data) : this.b.Ii(a.data)
    };
    a.prototype.kF = function() {
        return this.lc
    };
    a.prototype.iF = function() {
        return this.key
    };
    a.prototype.hF = function() {
        return this.index
    };
    a.prototype.gF = function(a) {
        a = a || 0;
        var b = this.cb.type,
            d = null,
            d = b.V(),
            c = d.vc();
        if (c.length) d = c[a % c.length].type;
        else if (d.ka.length) d = d.ka[a % d.ka.length].type;
        else if (b.q.length) d = b.q[a % b.q.length].type;
        else return 0;
        return this.index + d.nn[b.Df]
    };
    a.prototype.dF = function() {
        return this.qh
    };
    a.prototype.bF = function() {
        return this.uv
    };
    a.prototype.oF = function() {
        var a, b;
        a = 0;
        for (b = this.ai.length; a < b; a++) this.Ul[a] = this.ai[a].get();
        return this.Ul
    };
    hc = a;
    g.prototype.Bb = function() {
        this.wa = n(this.wa)
    };
    g.prototype.Zh = function(a) {
        var b = this.b.zv();
        this.parent && !this.Nk && b ? (this.Qh >= b.length && (b.length = this.Qh + 1), b[this.Qh] = a) : this.data = a
    };
    g.prototype.wk = function() {
        var a = this.b.zv();
        return !this.parent || this.Nk || !a || this.Rn ? this.data : this.Qh >= a.length || "undefined" === typeof a[this.Qh] ? this.$q : a[this.Qh]
    };
    g.prototype.Qb = function() {
        !this.parent || this.Nk || this.Rn || this.Zh(this.$q)
    };
    ac = g;
    m.prototype.toString = function() {
        return "include:" + this.Ck.toString()
    };
    m.prototype.Bb = function() {
        this.Ck = this.b.wq[this.vF];
        this.sheet.Lv.add(this);
        this.wa = n(this.wa);
        for (var a = this.parent; a;) a.group && a.Tm.push(this), a = a.parent;
        this.vy()
    };
    m.prototype.Qb = function() {
        this.parent && this.b.sl(this.b.P);
        this.Ck.Xq || this.Ck.Qb(!0);
        this.parent && this.b.ye(this.b.P)
    };
    m.prototype.vy = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.Ki) {
                this.eb = !1;
                return
            }
            a = a.parent
        }
        this.eb = !0
    };
    lc = m;
    k.prototype.reset = function(a) {
        this.hb = a;
        this.$c = this.Eb = 0;
        G(this.by);
        this.tq = this.Ih = !1
    };
    k.prototype.kr = function() {
        return this.hb.Qs ? !0 : this.Eb < this.hb.Vb.length - 1 ? !!this.hb.wa.length : !1
    };
    $b = k
})();
(function() {
    function f(c, b) {
        this.cb = c;
        this.b = c.b;
        this.type = b[0];
        this.get = [this.rE, this.nE, this.AE, this.DE, this.cE, this.BE, this.vE, this.kE, this.uE, this.zE, this.dE, this.yE, this.lE, this.wE, this.sE, this.tE, this.oE, this.pE, this.jE, this.CE, this.xE, this.qE, this.iE, this.mE][this.type];
        var f = null;
        this.Rf = this.la = this.nb = this.tc = this.dp = this.second = this.first = this.value = null;
        this.ne = -1;
        this.re = null;
        this.Dy = -1;
        this.qh = this.Vl = null;
        this.xj = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new jc(c, b[1]);
                break;
            case 18:
                this.first = new jc(c, b[1]);
                this.second = new jc(c, b[2]);
                this.dp = new jc(c, b[3]);
                break;
            case 19:
                this.tc = this.b.lg(b[1]);
                this.tc !== V.prototype.u.random && this.tc !== V.prototype.u.Zu || this.cb.Px();
                this.nb = [];
                this.la = [];
                3 === b.length ? (f = b[2], this.nb.length = f.length + 1) : this.nb.length = 1;
                break;
            case 20:
                this.Rf = this.b.P[b[1]];
                this.ne = -1;
                this.tc = this.b.lg(b[2]);
                this.xj = b[3];
                zc && this.tc === zc.prototype.u.Py && this.cb.Px();
                b[4] ? this.re = new jc(c, b[4]) : this.re = null;
                this.nb = [];
                this.la = [];
                6 === b.length ? (f = b[5], this.nb.length = f.length + 1) : this.nb.length = 1;
                break;
            case 21:
                this.Rf = this.b.P[b[1]];
                this.xj = b[2];
                b[3] ? this.re = new jc(c, b[3]) : this.re = null;
                this.Dy = b[4];
                break;
            case 22:
                this.Rf = this.b.P[b[1]];
                this.Rf.An(b[2]);
                this.ne = this.Rf.Hq(b[2]);
                this.tc = this.b.lg(b[3]);
                this.xj = b[4];
                b[5] ? this.re = new jc(c, b[5]) : this.re = null;
                this.nb = [];
                this.la = [];
                7 === b.length ? (f = b[6], this.nb.length = f.length + 1) : this.nb.length = 1;
                break;
            case 23:
                this.Vl = b[1], this.qh = null
        }
        this.cb.aG(this.Rf);
        4 <= this.type && 17 >= this.type && (this.first = new jc(c, b[1]), this.second = new jc(c, b[2]));
        if (f) {
            var d, a;
            d = 0;
            for (a = f.length; d < a; d++) this.la.push(new jc(c, f[d]))
        }
    }

    function p() {
        ++c;
        l.length === c && l.push(new ic);
        return l[c]
    }

    function n(c, b, f) {
        var d, a;
        d = 0;
        for (a = c.length; d < a; ++d) c[d].get(f), b[d + 1] = f.data
    }

    function h(c, b) {
        this.type = c || mc.ji;
        this.data = b || 0;
        this.Uh = null;
        this.type == mc.ji && (this.data = Math.floor(this.data))
    }
    f.prototype.Bb = function() {
        23 === this.type && (this.qh = this.cb.b.Cv(this.Vl, this.cb.Dd.parent));
        this.first && this.first.Bb();
        this.second && this.second.Bb();
        this.dp && this.dp.Bb();
        this.re && this.re.Bb();
        if (this.la) {
            var c, b;
            c = 0;
            for (b = this.la.length; c < b; c++) this.la[c].Bb()
        }
    };
    var l = [],
        c = -1;
    f.prototype.CE = function(e) {
        var b = this.la,
            f = this.nb;
        f[0] = e;
        e = p();
        n(b, f, e);
        --c;
        this.tc.apply(this.b.hf, f)
    };
    f.prototype.xE = function(e) {
        var b = this.Rf,
            f = this.nb,
            d = this.la,
            a = this.re,
            g = this.tc,
            m = this.cb.bg,
            k = b.V(),
            h = k.vc();
        if (!h.length)
            if (k.ka.length) h = k.ka;
            else {
                this.xj ? e.Qa("") : e.ca(0);
                return
            }
        f[0] = e;
        e.Uh = b;
        e = p();
        n(d, f, e);
        a && (a.get(e), e.jc() && (m = e.data, h = b.q));
        --c;
        b = h.length;
        if (m >= b || m <= -b) m %= b;
        0 > m && (m += b);
        g.apply(h[m], f)
    };
    f.prototype.iE = function(e) {
        var b = this.Rf,
            f = this.nb,
            d = this.la,
            a = this.re,
            g = this.ne,
            m = this.tc,
            k = this.cb.bg,
            h = b.V(),
            l = h.vc();
        if (!l.length)
            if (h.ka.length) l = h.ka;
            else {
                this.xj ? e.Qa("") : e.ca(0);
                return
            }
        f[0] = e;
        e.Uh = b;
        e = p();
        n(d, f, e);
        a && (a.get(e), e.jc() && (k = e.data, l = b.q));
        --c;
        d = l.length;
        if (k >= d || k <= -d) k %= d;
        0 > k && (k += d);
        k = l[k];
        l = 0;
        b.R && (l = k.type.Ei[b.Df]);
        m.apply(k.fa[g + l], f)
    };
    f.prototype.qE = function(e) {
        var b = this.re,
            f = this.Rf,
            d = this.Dy,
            a = this.cb.bg,
            g = f.V(),
            m = g.vc();
        if (!m.length)
            if (g.ka.length) m = g.ka;
            else {
                this.xj ? e.Qa("") : e.ca(0);
                return
            }
        if (b) {
            g = p();
            b.get(g);
            if (g.jc()) {
                a = g.data;
                m = f.q;
                0 !== m.length && (a %= m.length, 0 > a && (a += m.length));
                a = f.Mq(a);
                f = a.Yb[d];
                ma(f) ? e.Qa(f) : e.I(f);
                --c;
                return
            }--c
        }
        b = m.length;
        if (a >= b || a <= -b) a %= b;
        0 > a && (a += b);
        a = m[a];
        m = 0;
        f.R && (m = a.type.nn[f.Df]);
        f = a.Yb[d + m];
        ma(f) ? e.Qa(f) : e.I(f)
    };
    f.prototype.rE = function(c) {
        c.type = mc.ji;
        c.data = this.value
    };
    f.prototype.nE = function(c) {
        c.type = mc.hi;
        c.data = this.value
    };
    f.prototype.AE = function(c) {
        c.type = mc.String;
        c.data = this.value
    };
    f.prototype.DE = function(c) {
        this.first.get(c);
        c.jc() && (c.data = -c.data)
    };
    f.prototype.cE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data += b.data, b.Ui() && e.ij());
        --c
    };
    f.prototype.BE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data -= b.data, b.Ui() && e.ij());
        --c
    };
    f.prototype.vE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data *= b.data, b.Ui() && e.ij());
        --c
    };
    f.prototype.kE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data /= b.data, e.ij());
        --c
    };
    f.prototype.uE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data %= b.data, b.Ui() && e.ij());
        --c
    };
    f.prototype.zE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data = Math.pow(e.data, b.data), b.Ui() && e.ij());
        --c
    };
    f.prototype.dE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        b.Xi() || e.Xi() ? this.fE(e, b) : this.eE(e, b);
        --c
    };
    f.prototype.fE = function(c, b) {
        c.Xi() && b.Xi() ? this.hE(c, b) : this.gE(c, b)
    };
    f.prototype.hE = function(c, b) {
        c.data += b.data
    };
    f.prototype.gE = function(c, b) {
        c.Xi() ? c.data += (Math.round(1E10 * b.data) / 1E10).toString() : c.Qa(c.data.toString() + b.data)
    };
    f.prototype.eE = function(c, b) {
        c.ca(c.data && b.data ? 1 : 0)
    };
    f.prototype.yE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.jc() && b.jc() && (e.data || b.data ? e.ca(1) : e.ca(0));
        --c
    };
    f.prototype.jE = function(c) {
        this.first.get(c);
        c.data ? this.second.get(c) : this.dp.get(c)
    };
    f.prototype.lE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data === b.data ? 1 : 0);
        --c
    };
    f.prototype.wE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data !== b.data ? 1 : 0);
        --c
    };
    f.prototype.sE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data < b.data ? 1 : 0);
        --c
    };
    f.prototype.tE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data <= b.data ? 1 : 0);
        --c
    };
    f.prototype.oE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data > b.data ? 1 : 0);
        --c
    };
    f.prototype.pE = function(e) {
        this.first.get(e);
        var b = p();
        this.second.get(b);
        e.ca(e.data >= b.data ? 1 : 0);
        --c
    };
    f.prototype.mE = function(c) {
        var b = this.qh.wk();
        la(b) ? c.I(b) : c.Qa(b)
    };
    jc = f;
    h.prototype.Ui = function() {
        return this.type === mc.hi
    };
    h.prototype.jc = function() {
        return this.type === mc.ji || this.type === mc.hi
    };
    h.prototype.Xi = function() {
        return this.type === mc.String
    };
    h.prototype.ij = function() {
        this.Ui() || (this.Xi() && (this.data = parseFloat(this.data)), this.type = mc.hi)
    };
    h.prototype.ca = function(c) {
        this.type = mc.ji;
        this.data = Math.floor(c)
    };
    h.prototype.I = function(c) {
        this.type = mc.hi;
        this.data = c
    };
    h.prototype.Qa = function(c) {
        this.type = mc.String;
        this.data = c
    };
    h.prototype.El = function(c) {
        la(c) ? (this.type = mc.hi, this.data = c) : ma(c) ? (this.type = mc.String, this.data = c.toString()) : (this.type = mc.ji, this.data = 0)
    };
    ic = h;
    mc = {
        ji: 0,
        hi: 1,
        String: 2
    }
})();

function V(f) {
    this.b = f;
    this.nd = []
}
V.prototype.Wa = function() {
    var f = {},
        p, n, h, l, c, e, b, r;
    f.waits = [];
    var d = f.waits,
        a;
    p = 0;
    for (n = this.nd.length; p < n; p++) {
        e = this.nd[p];
        a = {
            t: e.time,
            st: e.Wx,
            s: e.Ps,
            ev: e.Ci.za,
            sm: [],
            sols: {}
        };
        e.Ci.Sd[e.$c] && (a.act = e.Ci.Sd[e.$c].za);
        h = 0;
        for (l = e.wa.length; h < l; h++) a.sm.push(e.wa[h].za);
        for (c in e.Wc)
            if (e.Wc.hasOwnProperty(c)) {
                b = this.b.P[parseInt(c, 10)];
                r = {
                    sa: e.Wc[c].Lo,
                    insts: []
                };
                h = 0;
                for (l = e.Wc[c].Hf.length; h < l; h++) r.insts.push(e.Wc[c].Hf[h].uid);
                a.sols[b.za.toString()] = r
            }
        d.push(a)
    }
    return f
};
V.prototype.bb = function(f) {
    f = f.waits;
    var p, n, h, l, c, e, b, r, d, a, g;
    G(this.nd);
    p = 0;
    for (n = f.length; p < n; p++)
        if (e = f[p], r = this.b.Ru[e.ev.toString()]) {
            d = -1;
            h = 0;
            for (l = r.Sd.length; h < l; h++)
                if (r.Sd[h].za === e.act) {
                    d = h;
                    break
                }
            if (-1 !== d) {
                b = {
                    Wc: {},
                    wa: [],
                    rq: !1
                };
                b.time = e.t;
                b.Wx = e.st || "";
                b.Ps = !!e.s;
                b.Ci = r;
                b.$c = d;
                h = 0;
                for (l = e.sm.length; h < l; h++)(r = this.b.Cn(e.sm[h])) && b.wa.push(r);
                for (c in e.sols)
                    if (e.sols.hasOwnProperty(c) && (r = this.b.Cn(parseInt(c, 10)))) {
                        d = e.sols[c];
                        a = {
                            Lo: d.sa,
                            Hf: []
                        };
                        h = 0;
                        for (l = d.insts.length; h < l; h++)(g = this.b.wh(d.insts[h])) && a.Hf.push(g);
                        b.Wc[r.index.toString()] = a
                    }
                this.nd.push(b)
            }
        }
};
(function() {
    function f() {}

    function p(b, a) {
        var c = b.T.c2_feo_val,
            e = a.T.c2_feo_val;
        if (la(c) && la(e)) return c - e;
        c = "" + c;
        e = "" + e;
        return c < e ? -1 : c > e ? 1 : 0
    }

    function n() {}

    function h() {}
    var l = V.prototype;
    f.prototype.bu = function() {
        return !0
    };
    f.prototype.PA = function() {
        return !0
    };
    f.prototype.Wy = function(b, a, c) {
        return nc(b, a, c)
    };
    f.prototype.Zz = function(b) {
        return b ? b.visible : !1
    };
    f.prototype.IB = function(b) {
        var a = this.b.fb(),
            c = a.hb,
            e = a.kr(),
            a = this.b.xs();
        if (e)
            for (e = 0; e < b && !a.pb; e++) this.b.Qg(c.wa), a.index = e, c.Rg(), this.b.ye(c.wa);
        else
            for (e = 0; e < b && !a.pb; e++) a.index = e, c.Rg();
        this.b.ts();
        return !1
    };
    var c = [],
        e = -1;
    f.prototype.jz = function(b) {
        var a = b.V();
        e++;
        c.length === e && c.push([]);
        var g = c[e];
        Ha(g, a.vc());
        var f = this.b.fb(),
            k = f.hb,
            h = f.kr(),
            f = this.b.xs(),
            r, l, q, p, u, n, D = b.ic;
        if (h)
            for (h = 0, r = g.length; h < r && !f.pb; h++) {
                this.b.Qg(k.wa);
                p = g[h];
                a = b.V();
                a.Y = !1;
                G(a.q);
                a.q[0] = p;
                if (D)
                    for (l = 0, q = p.siblings.length; l < q; l++) u = p.siblings[l], n = u.type.V(), n.Y = !1, G(n.q), n.q[0] = u;
                f.index = h;
                k.Rg();
                this.b.ye(k.wa)
            } else
                for (a.Y = !1, G(a.q), h = 0, r = g.length; h < r && !f.pb; h++) {
                    p = g[h];
                    a.q[0] = p;
                    if (D)
                        for (l = 0, q = p.siblings.length; l < q; l++) u = p.siblings[l], n = u.type.V(), n.Y = !1, G(n.q), n.q[0] = u;
                    f.index = h;
                    k.Rg()
                }
        G(g);
        this.b.ts();
        e--;
        return !1
    };
    f.prototype.lz = function(b, a, g) {
        a = b.V();
        e++;
        c.length === e && c.push([]);
        var f = c[e];
        Ha(f, a.vc());
        var k = this.b.fb(),
            h = k.hb,
            r = this.b.Fg(),
            l = k.kr(),
            k = this.b.xs(),
            q, n, u, I, D;
        q = 0;
        for (n = f.length; q < n; q++) f[q].T.c2_feo_val = r.la[1].get(q);
        f.sort(p);
        1 === g && f.reverse();
        g = b.ic;
        if (l)
            for (q = 0, n = f.length; q < n && !k.pb; q++) {
                this.b.Qg(h.wa);
                u = f[q];
                a = b.V();
                a.Y = !1;
                G(a.q);
                a.q[0] = u;
                if (g)
                    for (r = 0, l = u.siblings.length; r < l; r++) I = u.siblings[r], D = I.type.V(), D.Y = !1, G(D.q), D.q[0] = I;
                k.index = q;
                h.Rg();
                this.b.ye(h.wa)
            } else
                for (a.Y = !1, G(a.q), q = 0, n = f.length; q < n && !k.pb; q++) {
                    u = f[q];
                    a.q[0] = u;
                    if (g)
                        for (r = 0, l = u.siblings.length; r < l; r++) I = u.siblings[r], D = I.type.V(), D.Y = !1, G(D.q), D.q[0] = I;
                    k.index = q;
                    h.Rg()
                }
        G(f);
        this.b.ts();
        e--;
        return !1
    };
    f.prototype.xB = function(b, a, g, f) {
        var k, h, r, l;
        if (b) {
            e++;
            c.length === e && c.push([]);
            var q = c[e],
                p = b.V();
            Ha(q, p.vc());
            p.Y && G(p.ka);
            var u = this.b.Fg();
            r = k = 0;
            for (h = q.length; k < h; k++) l = q[k], q[r] = l, a = u.la[1].get(k), f = u.la[3].get(k), nc(a, g, f) ? r++ : p.ka.push(l);
            Ga(q, r);
            p.Y = !1;
            Ha(p.q, q);
            G(q);
            e--;
            b.ad();
            return !!p.q.length
        }
    };
    f.prototype.KC = function() {
        var b = this.b.Fg().T;
        "undefined" === typeof b.TriggerOnce_lastTick && (b.TriggerOnce_lastTick = -1);
        var a = b.TriggerOnce_lastTick,
            c = this.b.Pd;
        b.TriggerOnce_lastTick = c;
        return this.b.Er || a !== c - 1
    };
    f.prototype.iz = function(b) {
        var a = this.b.Fg(),
            c = a.T.Every_lastTime || 0,
            e = this.b.kc.na;
        "undefined" === typeof a.T.Every_seconds && (a.T.Every_seconds = b);
        var k = a.T.Every_seconds;
        if (e >= c + k) return a.T.Every_lastTime = c + k, e >= a.T.Every_lastTime + .04 && (a.T.Every_lastTime = e), a.T.Every_seconds = b, !0;
        e < c - .1 && (a.T.Every_lastTime = e);
        return !1
    };
    f.prototype.yB = function(b) {
        if (!b) return !1;
        var a = b.V(),
            c = a.vc(),
            e = z(Math.random() * c.length);
        if (e >= c.length) return !1;
        a.sj(c[e]);
        b.ad();
        return !0
    };
    f.prototype.cz = function(b, a, c) {
        return nc(b.wk(), a, c)
    };
    f.prototype.Ez = function(b) {
        return (b = this.b.zk[b.toLowerCase()]) && b.Ki
    };
    f.prototype.Oz = function() {
        return "undefined" !== typeof cr_is_preview
    };
    f.prototype.wB = function(b) {
        if (!b || !b.q.length) return !1;
        b.V().Y = !0;
        b.ad();
        return !0
    };
    f.prototype.Xy = function(b, a, c) {
        return b >= a && b <= c
    };
    f.prototype.zt = function() {
        var b = this.b.fb();
        return b.tq ? !1 : !b.Ih
    };
    f.prototype.du = function() {
        return !0
    };
    f.prototype.pA = function() {
        return !0
    };
    f.prototype.Gp = function() {
        return !0
    };
    f.prototype.nu = function() {
        return !0
    };
    f.prototype.QA = function() {
        return !0
    };
    f.prototype.om = function() {
        return !0
    };
    f.prototype.Jz = function(b) {
        var a = this.b;
        switch (b) {
            case 0:
                return !a.ba && !a.Nn && !a.Sc && !a.Pn && !a.Jc && !a.Oi && !a.Kn;
            case 1:
                return a.Jb;
            case 2:
                return a.gc;
            case 3:
                return a.Si;
            case 4:
                return a.Jc;
            case 5:
                return a.Oi;
            case 6:
                return a.nr;
            case 7:
                return a.dd;
            case 8:
                return a.Sc;
            case 9:
                return a.BF;
            case 10:
                return a.Nn;
            case 11:
                return a.Fk;
            case 12:
                return a.Kn;
            case 13:
                return a.Qn;
            default:
                return !1
        }
    };
    f.prototype.My = function(b, a, c) {
        return Ua(M(b), M(c)) <= M(a)
    };
    f.prototype.Az = function(b, a) {
        return Wa(M(b), M(a))
    };
    f.prototype.yz = function(b, a, c) {
        b = Sa(b);
        a = Sa(a);
        c = Sa(c);
        return Wa(c, a) ? Wa(b, a) && !Wa(b, c) : !(!Wa(b, a) && Wa(b, c))
    };
    l.k = new f;
    n.prototype.pz = function(b) {
        this.b.Yi || this.b.gh || (this.b.gh = b)
    };
    n.prototype.fz = function(b, a, c, e) {
        if (a && b && (a = this.b.Vm(b, a, c, e))) {
            this.b.Id++;
            var k;
            this.b.trigger(Object.getPrototypeOf(b.X).k.ki, a);
            if (a.ic)
                for (c = 0, e = a.siblings.length; c < e; c++) k = a.siblings[c], this.b.trigger(Object.getPrototypeOf(k.type.X).k.ki, k);
            this.b.Id--;
            b = b.V();
            b.Y = !1;
            G(b.q);
            b.q[0] = a;
            if (a.ic)
                for (c = 0, e = a.siblings.length; c < e; c++) k = a.siblings[c], b = k.type.V(), b.Y = !1, G(b.q), b.q[0] = k
        }
    };
    n.prototype.hC = function(b, a) {
        b && b.visible !== a && (b.visible = a, this.b.W = !0)
    };
    n.prototype.fC = function(b, a) {
        b && (a = La(a / 100, 0, 1), b.opacity !== a && (b.opacity = a, this.b.W = !0))
    };
    n.prototype.iC = function(b) {
        this.b.ma && this.b.ma.scale !== b && (this.b.ma.scale = b, this.b.ma.Tu(), this.b.W = !0)
    };
    n.prototype.NB = function(b, a) {
        this.b.ma.Js(b);
        this.b.ma.Ks(a)
    };
    n.prototype.yC = function(b, a) {
        0 === b.op ? la(a) ? b.Zh(a) : b.Zh(parseFloat(a)) : 1 === b.op && b.Zh(a.toString())
    };
    n.prototype.Ky = function(b, a) {
        0 === b.op ? la(a) ? b.Zh(b.wk() + a) : b.Zh(b.wk() + parseFloat(a)) : 1 === b.op && b.Zh(b.wk() + a.toString())
    };
    n.prototype.wC = function(b) {
        0 > b && (b = 0);
        this.b.Wg = b
    };
    var b = [],
        r = [];
    n.prototype.QC = function(c) {
        if (!(0 > c)) {
            var a, e, f, k = this.b.fb(),
                h;
            b.length ? h = b.pop() : h = {
                Wc: {},
                wa: []
            };
            h.rq = !1;
            h.time = this.b.kc.na + c;
            h.Wx = "";
            h.Ps = !1;
            h.Ci = k.hb;
            h.$c = k.$c + 1;
            c = 0;
            for (a = this.b.P.length; c < a; c++) f = this.b.P[c], e = f.V(), e.Y && -1 === k.hb.wa.indexOf(f) || (h.wa.push(f), f = void 0, r.length ? f = r.pop() : f = {
                Hf: []
            }, f.Lo = !1, f.Lo = e.Y, Ha(f.Hf, e.q), h.Wc[c.toString()] = f);
            this.nd.push(h);
            return !0
        }
    };
    n.prototype.gC = function(b, a) {
        b && b.scale !== a && (b.scale = a, this.b.W = !0)
    };
    n.prototype.eC = function(b, a) {
        if (b) {
            var c = Ba(a),
                e = Ca(a),
                k = Da(a);
            if (b.Dc[0] !== c || b.Dc[1] !== e || b.Dc[2] !== k) b.Dc[0] = c, b.Dc[1] = e, b.Dc[2] = k, this.b.W = !0
        }
    };
    n.prototype.LB = function() {
        if (!this.b.Yi && !this.b.gh && this.b.ma) {
            this.b.gh = this.b.ma;
            var b, a, c;
            b = 0;
            for (a = this.b.rg.length; b < a; b++) c = this.b.rg[b], c.Lx(c.Jn)
        }
    };
    l.n = new n;
    h.prototype["int"] = function(b, a) {
        ma(a) ? (b.ca(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.ca(a)
    };
    h.prototype["float"] = function(b, a) {
        ma(a) ? (b.I(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.I(a)
    };
    h.prototype.mH = function(b, a) {
        ma(a) ? b.Qa(a) : b.Qa(a.toString())
    };
    h.prototype.random = function(b, a, c) {
        void 0 === c ? b.I(Math.random() * a) : b.I(Math.random() * (c - a) + a)
    };
    h.prototype.sqrt = function(b, a) {
        b.I(Math.sqrt(a))
    };
    h.prototype.abs = function(b, a) {
        b.I(Math.abs(a))
    };
    h.prototype.round = function(b, a) {
        b.ca(Math.round(a))
    };
    h.prototype.floor = function(b, a) {
        b.ca(Math.floor(a))
    };
    h.prototype.ceil = function(b, a) {
        b.ca(Math.ceil(a))
    };
    h.prototype.sin = function(b, a) {
        b.I(Math.sin(M(a)))
    };
    h.prototype.cos = function(b, a) {
        b.I(Math.cos(M(a)))
    };
    h.prototype.tan = function(b, a) {
        b.I(Math.tan(M(a)))
    };
    h.prototype.asin = function(b, a) {
        b.I(Na(Math.asin(a)))
    };
    h.prototype.acos = function(b, a) {
        b.I(Na(Math.acos(a)))
    };
    h.prototype.atan = function(b, a) {
        b.I(Na(Math.atan(a)))
    };
    h.prototype.exp = function(b, a) {
        b.I(Math.exp(a))
    };
    h.prototype.log10 = function(b, a) {
        b.I(Math.log(a) / Math.LN10)
    };
    h.prototype.max = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, e, k;
        c = 2;
        for (e = arguments.length; c < e; c++) k = arguments[c], "number" ===
            typeof k && a < k && (a = k);
        b.I(a)
    };
    h.prototype.min = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var c, e, k;
        c = 2;
        for (e = arguments.length; c < e; c++) k = arguments[c], "number" === typeof k && a > k && (a = k);
        b.I(a)
    };
    h.prototype.Bg = function(b) {
        b.I(this.b.Bg)
    };
    h.prototype.Wg = function(b) {
        b.I(this.b.Wg)
    };
    h.prototype.time = function(b) {
        b.I(this.b.kc.na)
    };
    h.prototype.Pd = function(b) {
        b.ca(this.b.Pd)
    };
    h.prototype.lo = function(b) {
        b.ca(this.b.lo)
    };
    h.prototype.Cq = function(b) {
        b.ca(this.b.Cq)
    };
    h.prototype.YF = function(b, a) {
        var c, e;
        if (this.b.dl.length)
            if (a) {
                for (e = this.b.el; 0 <= e; --e)
                    if (c = this.b.dl[e], c.name === a) {
                        b.ca(c.index);
                        return
                    }
                b.ca(0)
            } else c = this.b.Av(), b.ca(c ? c.index : -1);
        else b.ca(0)
    };
    h.prototype.AD = function(b, a, c, e, k) {
        b.I(Ya(a, c, e, k))
    };
    h.prototype.A = function(b, a, c, e, k) {
        b.I(Na(Ta(a, c, e, k)))
    };
    h.prototype.YG = function(b) {
        b.I(this.b.ma.scrollX)
    };
    h.prototype.ZG = function(b) {
        b.I(this.b.ma.scrollY)
    };
    h.prototype.fG = function(b) {
        b.Qa("\n")
    };
    h.prototype.UF = function(b, a, c, e) {
        b.I($a(a, c, e))
    };
    h.prototype.CH = function(b) {
        b.ca(this.b.width)
    };
    h.prototype.BH = function(b) {
        b.ca(this.b.height)
    };
    h.prototype.SF = function(b, a) {
        var c = this.b.Hi(a);
        c ? b.I(c.scale) : b.I(0)
    };
    h.prototype.RF = function(b, a) {
        var c = this.b.Hi(a);
        c ? b.I(100 * c.opacity) : b.I(0)
    };
    h.prototype.left = function(b, a, c) {
        b.Qa(ma(a) ? a.substr(0, c) : "")
    };
    h.prototype.right = function(b, a, c) {
        b.Qa(ma(a) ? a.substr(a.length - c) : "")
    };
    h.prototype.replace = function(b, a, c, e) {
        ma(a) && ma(c) && ma(e) ? b.Qa(a.replace(new RegExp(jb(c), "gi"), e)) : b.Qa(ma(a) ? a : "")
    };
    h.prototype.trim = function(b, a) {
        b.Qa(ma(a) ? a.trim() : "")
    };
    h.prototype.TF = function(b) {
        this.b.ma ? b.Qa(this.b.ma.name) : b.Qa("")
    };
    h.prototype.Zu = function(b) {
        var a = z(Math.random() * (arguments.length - 1));
        b.El(arguments[a + 1])
    };
    h.prototype.PG = function(b, a, c, e) {
        b.ca(Aa(a, c, e))
    };
    h.prototype.DG = function(b) {
        b.Qa(this.b.vH)
    };
    h.prototype.dD = function(b, a, c, e) {
        a = M(a);
        c = M(c);
        var k = Ua(a, c);
        Wa(c, a) ? b.I(Qa(a + k * e)) : b.I(Qa(a - k * e))
    };
    h.prototype.hq = function(b) {
        b.I(this.b.hq / 1E3)
    };
    h.prototype.xH = function(b, a) {
        var c = this.b.Hi(a);
        b.I(c ? c.xa : 0)
    };
    h.prototype.zH = function(b, a) {
        var c = this.b.Hi(a);
        b.I(c ? c.ya : 0)
    };
    h.prototype.yH = function(b, a) {
        var c = this.b.Hi(a);
        b.I(c ? c.Da : 0)
    };
    h.prototype.wH = function(b, a) {
        var c = this.b.Hi(a);
        b.I(c ? c.Ca : 0)
    };
    h.prototype.gj = function(b) {
        b.I(this.b.gj)
    };
    l.u = new h;
    l.QG = function() {
        var c, a, e, f, k, h, l = this.b.fb();
        c = 0;
        for (e = this.nd.length; c < e; c++) {
            f = this.nd[c];
            if (-1 === f.time) {
                if (!f.Ps) continue
            } else if (f.time > this.b.kc.na) continue;
            l.hb = f.Ci;
            l.$c = f.$c;
            l.Eb = 0;
            for (a in f.Wc) f.Wc.hasOwnProperty(a) && (k = this.b.P[parseInt(a, 10)].V(), h = f.Wc[a], k.Y = h.Lo, Ha(k.q, h.Hf), k = h, G(k.Hf), r.push(k));
            f.Ci.MG();
            this.b.fq(f.wa);
            f.rq = !0
        }
        a = c = 0;
        for (e = this.nd.length; c < e; c++) f = this.nd[c], this.nd[a] = f, f.rq ? (bb(f.Wc), G(f.wa), b.push(f)) : a++;
        Ga(this.nd, a)
    }
})();
(function() {
    tb = function(f, n) {
        var h = f[1],
            l = f[3],
            c = f[4],
            e = f[5],
            b = f[6],
            r = f[7],
            d = f[8];
        n.k || (n.k = {});
        n.n || (n.n = {});
        n.u || (n.u = {});
        var a = n.k,
            g = n.n,
            m = n.u;
        l && (a.dz = function(a, b) {
            return nc(this.x, a, b)
        }, a.yt = function(a, b) {
            return nc(this.y, a, b)
        }, a.Dt = function() {
            var a = this.C;
            this.Pa();
            var b = this.Xa;
            return !(b.right < a.xa || b.bottom < a.ya || b.left > a.Da || b.top > a.Ca)
        }, a.JH = function() {
            this.Pa();
            var a = this.Xa,
                b = this.b.ma;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.Kp = function(a, b, c) {
            var d = this.V(),
                e = d.vc();
            if (!e.length) return !1;
            var f = e[0],
                g = f,
                h = Ya(f.x, f.y, b, c),
                m, r, l;
            m = 1;
            for (r = e.length; m < r; m++)
                if (f = e[m], l = Ya(f.x, f.y, b, c), 0 === a && l < h || 1 === a && l > h) h = l, g = f;
            d.sj(g);
            return !0
        }, g.wu = function(a) {
            this.x !== a && (this.x = a, this.L())
        }, g.Yj = function(a) {
            this.y !== a && (this.y = a, this.L())
        }, g.$g = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.L()
        }, g.rC = function(a, b) {
            var c = a.WE(this);
            if (c) {
                var d;
                c.vh ? (d = c.vh(b, !0), c = c.vh(b, !1)) : (d = c.x, c = c.y);
                if (this.x !== d || this.y !== c) this.x = d, this.y = c, this.L()
            }
        }, g.LH = function(a) {
            0 !== a && (this.x += Math.cos(this.A) * a, this.y += Math.sin(this.A) * a, this.L())
        }, g.eA = function(a, b) {
            0 !== b && (this.x += Math.cos(M(a)) * b, this.y += Math.sin(M(a)) * b, this.L())
        }, m.rf = function(a) {
            a.I(this.x)
        }, m.sf = function(a) {
            a.I(this.y)
        }, m.Bg = function(a) {
            a.I(this.b.Gf(this))
        });
        c && (a.yp = function(a, b) {
            return nc(this.width, a, b)
        }, a.GH = function(a, b) {
            return nc(this.height, a, b)
        }, g.ah = function(a) {
            this.width !== a && (this.width = a, this.L())
        }, g.ru = function(a) {
            this.height !== a && (this.height = a, this.L())
        }, g.oi = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.L()
        }, m.$j = function(a) {
            a.I(this.width)
        }, m.km = function(a) {
            a.I(this.height)
        }, m.jm = function(a) {
            this.Pa();
            a.I(this.Xa.left)
        }, m.wp = function(a) {
            this.Pa();
            a.I(this.Xa.top)
        }, m.Qj = function(a) {
            this.Pa();
            a.I(this.Xa.right)
        }, m.im = function(a) {
            this.Pa();
            a.I(this.Xa.bottom)
        });
        e && (a.My = function(a, b) {
            return Ua(this.A, M(b)) <= M(a)
        }, a.Az = function(a) {
            return Wa(this.A, M(a))
        }, a.yz = function(a, b) {
            var c = Sa(a),
                d = Sa(b),
                e = Pa(this.A);
            return Wa(d, c) ? Wa(e, c) && !Wa(e, d) : !(!Wa(e, c) && Wa(e, d))
        }, g.pu = function(a) {
            a = M(Oa(a));
            isNaN(a) || this.A === a || (this.A = a, this.L())
        }, g.MB = function(a) {
            0 === a || isNaN(a) || (this.A += M(a), this.A = Pa(this.A), this.L())
        }, g.SH = function(a) {
            0 === a || isNaN(a) || (this.A -= M(a), this.A = Pa(this.A), this.L())
        }, g.TH = function(a, b) {
            var c = Va(this.A, M(b), M(a));
            isNaN(c) || this.A === c || (this.A = c, this.L())
        }, g.UH = function(a, b, c) {
            a = Va(this.A, Math.atan2(c - this.y, b - this.x), M(a));
            isNaN(a) || this.A === a || (this.A = a, this.L())
        }, g.xC = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.A === c || (this.A = c, this.L())
        }, m.Ly = function(a) {
            a.I(Qa(this.A))
        });
        h || (a.gi = function(a, b, c) {
            return nc(this.Yb[a], b, c)
        }, a.IH = function(a) {
            return this.Yb[a]
        }, a.PH = function(a, b) {
            var c = this.V(),
                d = c.vc();
            if (!d.length) return !1;
            var e = d[0],
                f = e,
                g = e.Yb[b],
                h, m, r;
            h = 1;
            for (m = d.length; h < m; h++)
                if (e = d[h], r = e.Yb[b], 0 === a && r < g || 1 === a && r > g) g = r, f = e;
            c.sj(f);
            return !0
        }, a.OH = function(a) {
            var b, c, d, e, f;
            if (this.b.Fg().Ni) {
                f = this.V();
                if (f.Y)
                    for (f.Y = !1, G(f.q), G(f.ka), d = this.q, b = 0, c = d.length; b < c; b++) e = d[b], e.uid === a ? f.ka.push(e) : f.q.push(e);
                else {
                    d = b = 0;
                    for (c = f.q.length; b < c; b++) e = f.q[b], f.q[d] = e, e.uid === a ? f.ka.push(e) : d++;
                    Ga(f.q, d)
                }
                this.ad();
                return !!f.q.length
            }
            e = this.b.wh(a);
            if (!e) return !1;
            f = this.V();
            if (!f.Y && -1 === f.q.indexOf(e)) return !1;
            if (this.R)
                for (a = e.type.ib, b = 0, c = a.length; b < c; b++) {
                    if (a[b] === this) return f.sj(e), this.ad(), !0
                } else if (e.type === this) return f.sj(e), this.ad(), !0;
            return !1
        }, a.ki = function() {
            return !0
        }, a.rA = function() {
            return !0
        }, g.mi = function(a, b) {
            var c = this.Yb;
            la(c[a]) ? c[a] = la(b) ? b : parseFloat(b) : ma(c[a]) && (c[a] = ma(b) ? b : b.toString())
        }, g.ut = function(a, b) {
            var c = this.Yb;
            la(c[a]) ? c[a] = la(b) ? c[a] + b : c[a] + parseFloat(b) : ma(c[a]) && (c[a] = ma(b) ? c[a] + b : c[a] + b.toString())
        }, g.zu = function(a, b) {
            var c = this.Yb;
            la(c[a]) && (c[a] = la(b) ? c[a] - b : c[a] - parseFloat(b))
        }, g.VH = function(a, b) {
            this.Yb[a] = b ? 1 : 0
        }, g.YH = function(a) {
            this.Yb[a] = 1 - this.Yb[a]
        }, g.Zg = function() {
            this.b.pf(this)
        }, g.cA || (g.cA = function(a) {
            var b, c;
            try {
                b = JSON.parse(a)
            } catch (d) {
                return
            }
            this.b.Zn(this, b, !0);
            this.je && this.je();
            if (this.fa)
                for (a = 0, b = this.fa.length; a < b; ++a) c = this.fa[a], c.je && c.je()
        }), m.ez = function(a) {
            var b = a.Uh.q.length,
                c, d, e;
            c = 0;
            for (d = this.b.qe.length; c < d; c++) e = this.b.qe[c], a.Uh.R ? 0 <= e.type.ib.indexOf(a.Uh) && b++ : e.type === a.Uh && b++;
            a.ca(b)
        }, m.RH = function(a) {
            a.ca(a.Uh.V().vc().length)
        }, m.Au = function(a) {
            a.ca(this.uid)
        }, m.HH = function(a) {
            a.ca(this.xk())
        }, m.vp || (m.vp = function(a) {
            a.Qa(JSON.stringify(this.b.Hs(this, !0)))
        }));
        b && (a.Rz = function() {
            return this.visible
        }, g.pi = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.W = !0)
        }, a.az = function(a, b) {
            return nc(pb(100 * this.opacity), a, b)
        }, g.ni = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.W = !0)
        }, m.Opacity = function(a) {
            a.I(pb(100 * this.opacity))
        });
        r && (a.Ct = function(a) {
            return a ? this.C === a : !1
        }, a.QH = function(a) {
            var b = this.V(),
                c = b.vc();
            if (!c.length) return !1;
            var d = c[0],
                e = d,
                f, g;
            f = 1;
            for (g = c.length; f < g; f++)
                if (d = c[f], 0 === a) {
                    if (d.C.index > e.C.index || d.C.index === e.C.index && d.Te() > e.Te()) e = d
                } else if (d.C.index < e.C.index || d.C.index === e.C.index && d.Te() < e.Te()) e = d;
            b.sj(e);
            return !0
        }, g.It = function() {
            var a = this.C,
                b = a.q;
            b.length && b[b.length - 1] === this || (a.wj(this, !1), a.dk(this, !1), this.b.W = !0)
        }, g.Cp = function() {
            var a = this.C,
                b = a.q;
            b.length && b[0] === this || (a.wj(this, !1), a.AG(this), this.b.W = !0)
        }, g.fA = function(a) {
            a && a != this.C && (this.C.wj(this, !0), this.C = a, a.dk(this, !0), this.b.W = !0)
        }, g.vm = function(a, b) {
            var c = 0 === a;
            if (b) {
                var d = b.Dv(this);
                d && d.uid !== this.uid && (this.C.index !== d.C.index && (this.C.wj(this, !0), this.C = d.C, d.C.dk(this, !0)), this.C.eG(this, d, c), this.b.W = !0)
            }
        }, m.KH = function(a) {
            a.ca(this.C.Qw)
        }, m.Yz = function(a) {
            a.Qa(this.C.name)
        }, m.ZH = function(a) {
            a.ca(this.Te())
        });
        d && (g.WH = function(a, b) {
            if (this.b.H) {
                var c = this.type.Lq(b);
                if (!(0 > c)) {
                    var d = 1 === a;
                    this.ng[c] !== d && (this.ng[c] = d, this.He(), this.b.W = !0)
                }
            }
        }, g.XH = function(a, b, c) {
            if (this.b.H) {
                var d = this.type.Lq(a);
                0 > d || (a = this.type.ja[d], d = this.kb[d], b = Math.floor(b), 0 > b || b >= d.length || (1 === this.b.H.$E(a.Rb, b) && (c /= 100), d[b] !== c && (d[b] = c, a.eb && (this.b.W = !0))))
            }
        })
    };
    Sb = function() {
        this.dq = this.Km = !0;
        this.type.Dm = !0;
        this.b.W = !0;
        var f, n, h = this.Zp;
        f = 0;
        for (n = h.length; f < n; ++f) h[f](this);
        this.C.Rd && this.Pa()
    };
    Tb = function(f) {
        f && this.Zp.push(f)
    };
    Vb = function() {
        if (this.Km) {
            var f = this.Xa,
                n = this.cc;
            f.set(this.x, this.y, this.x + this.width, this.y + this.height);
            f.offset(-this.Hc * this.width, -this.Ic * this.height);
            this.A ? (f.offset(-this.x, -this.y), n.Rx(f, this.A), n.offset(this.x, this.y), n.Uu(f)) : n.Aj(f);
            f.normalize();
            this.Km = !1;
            this.By()
        }
    };
    var f = new ya(0, 0, 0, 0);
    Wb = function() {
        if (this.C.Rd) {
            var p = this.C.Ac,
                n = this.Xa;
            f.set(p.Yc(n.left), p.Zc(n.top), p.Yc(n.right), p.Zc(n.bottom));
            this.kd.pk(f) || (this.kd.right < this.kd.left ? p.update(this, null, f) : p.update(this, this.kd, f), this.kd.vi(f), this.C.Ae = !0)
        }
    };
    Xb = function() {
        if (this.dq && this.Ed) {
            this.Pa();
            var p = this.type.hk,
                n = this.Xa;
            f.set(p.Yc(n.left), p.Zc(n.top), p.Yc(n.right), p.Zc(n.bottom));
            this.Ud.pk(f) || (this.Ud.right < this.Ud.left ? p.update(this, null, f) : p.update(this, this.Ud, f), this.Ud.vi(f), this.dq = !1)
        }
    };
    Ub = function(f, n) {
        return this.Xa.qc(f, n) && this.cc.qc(f, n) ? this.Fj ? this.oH(f, n) : this.Ka && !this.Ka.Ti() ? (this.Ka.fh(this.width, this.height, this.A), this.Ka.qc(f - this.x, n - this.y)) : !0 : !1
    };
    Nb = function() {
        this.type.mp();
        return this.Ah
    };
    Yb = function() {
        this.C.lt();
        return this.Ie
    };
    Zb = function() {
        G(this.Ga);
        var f, n, h, l = !0;
        f = 0;
        for (n = this.ng.length; f < n; f++) this.ng[f] && (h = this.type.ja[f], this.Ga.push(h), h.ze || (l = !1));
        this.Cy = !!this.Ga.length;
        this.Zf = l
    };
    Ob = function() {
        return "Inst" + this.xx
    };
    wb = function(f) {
        if (f && f.ic && f.type != this) {
            var n, h, l;
            n = 0;
            for (h = f.siblings.length; n < h; n++)
                if (l = f.siblings[n], l.type == this) return l
        }
        f = this.V().vc();
        return f.length ? f[0] : null
    };
    xb = function(f) {
        var n = this.V().vc();
        return n.length ? n[f.xk() % n.length] : null
    };
    vb = function() {
        if (this.Cj && !this.R) {
            var f, n;
            f = 0;
            for (n = this.q.length; f < n; f++) this.q[f].Ah = f;
            var h = f,
                l = this.b.qe;
            f = 0;
            for (n = l.length; f < n; ++f) l[f].type === this && (l[f].Ah = h++);
            this.Cj = !1
        }
    };
    Lb = function(f) {
        if (f < this.q.length) return this.q[f];
        f -= this.q.length;
        var n = this.b.qe,
            h, l;
        h = 0;
        for (l = n.length; h < l; ++h)
            if (n[h].type === this) {
                if (0 === f) return n[h];
                --f
            }
        return null
    };
    yb = function() {
        return this.dg[this.Me]
    };
    Eb = function() {
        this.Me++;
        this.Me === this.dg.length ? this.dg.push(new ub(this)) : (this.dg[this.Me].Y = !0, G(this.dg[this.Me].ka))
    };
    Fb = function() {
        this.Me++;
        this.Me === this.dg.length && this.dg.push(new ub(this));
        var f = this.dg[this.Me],
            n = this.dg[this.Me - 1];
        n.Y ? (f.Y = !0, G(f.ka)) : (f.Y = !1, Ha(f.q, n.q), Ha(f.ka, n.ka))
    };
    Gb = function() {
        this.Me--
    };
    Hb = function(f) {
        var n, h, l, c, e, b = 0;
        if (!this.R)
            for (n = 0, h = this.ib.length; n < h; n++)
                for (e = this.ib[n], l = 0, c = e.jb.length; l < c; l++) {
                    if (f === e.jb[l].name) return this.T.lastBehIndex = b, e.jb[l];
                    b++
                }
        n = 0;
        for (h = this.jb.length; n < h; n++) {
            if (f === this.jb[n].name) return this.T.lastBehIndex = b, this.jb[n];
            b++
        }
        return null
    };
    Ib = function(f) {
        return this.An(f) ? this.T.lastBehIndex : -1
    };
    Jb = function(f) {
        var n, h;
        n = 0;
        for (h = this.ja.length; n < h; n++)
            if (this.ja[n].name === f) return n;
        return -1
    };
    Kb = function() {
        if (this.ic && !this.R) {
            var f, n, h, l, c, e, b;
            this.mp();
            e = this.V();
            var r = e.Y,
                d = (f = this.b.fb()) && f.hb && f.hb.Ld;
            f = 0;
            for (n = this.rd.length; f < n; f++)
                if (c = this.rd[f], c !== this && (c.mp(), b = c.V(), b.Y = r, !r)) {
                    G(b.q);
                    h = 0;
                    for (l = e.q.length; h < l; ++h) b.q[h] = c.Mq(e.q[h].Ah);
                    if (d)
                        for (G(b.ka), h = 0, l = e.ka.length; h < l; ++h) b.ka[h] = c.Mq(e.ka[h].Ah)
                }
        }
    };
    Mb = function() {
        return "Type" + this.za
    };
    nc = function(f, n, h) {
        if ("undefined" === typeof f || "undefined" === typeof h) return !1;
        switch (n) {
            case 0:
                return f === h;
            case 1:
                return f !== h;
            case 2:
                return f < h;
            case 3:
                return f <= h;
            case 4:
                return f > h;
            case 5:
                return f >= h;
            default:
                return !1
        }
    }
})();
var wc = {};

function Ac(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = !1,
            l = null,
            c = null,
            e = "",
            b = Ac.prototype;
        b.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        b.N.prototype.J = function() {};
        b.K = function(a) {
            this.type = a;
            this.b = a.b;
            this.La = this.Mf = "";
            this.jd = 0;
            this.timeout = -1;
            if (h = this.b.Pi) l = require("path"), c = require("fs"), e = l.dirname((window.process || nw.process).execPath) + "\\"
        };
        var r = b.K.prototype,
            d = null;
        window.C2_AJAX_DCSide = function(a, b, c) {
            d && ("success" === a ? (d.La = b, d.Mf = c, d.b.trigger(Ac.prototype.k.Dp, d), d.b.trigger(Ac.prototype.k.lm, d)) : "error" === a ? (d.La = b, d.b.trigger(Ac.prototype.k.Ep, d), d.b.trigger(Ac.prototype.k.qf, d)) : "progress" === a && (d.jd = c, d.La = b, d.b.trigger(Ac.prototype.k.ku, d)))
        };
        r.J = function() {
            d = this
        };
        r.Wa = function() {
            return {
                lastData: this.Mf
            }
        };
        r.bb = function(a) {
            this.Mf = a.lastData;
            this.La = "";
            this.jd = 0
        };
        var a = {},
            g = "";
        r.HD = function(b, d, f, r) {
            if (this.b.hc) AppMobi.webview.execute('C2_AJAX_WebSide("' + b + '", "' + d + '", "' + f + '", ' + (r ? '"' + r + '"' : "null") + ");");
            else {
                var l = this,
                    q = null,
                    n = function() {
                        l.La = b;
                        l.b.trigger(Ac.prototype.k.Ep, l);
                        l.b.trigger(Ac.prototype.k.qf, l)
                    },
                    u = function() {
                        if (h) {
                            var a = e + d;
                            c.existsSync(a) ? c.readFile(a, {
                                encoding: "utf8"
                            }, function(a, c) {
                                a ? n() : (l.La = b, l.Mf = c.replace(/\r\n/g, "\n"), l.b.trigger(Ac.prototype.k.Dp, l), l.b.trigger(Ac.prototype.k.lm, l))
                            }) : n()
                        } else n()
                    },
                    p = function(a) {
                        a.lengthComputable && (l.jd = a.loaded / a.total, l.La = b, l.b.trigger(Ac.prototype.k.ku, l))
                    };
                try {
                    this.b.Jc ? q = new ActiveXObject("Microsoft.XMLHTTP") : q = new XMLHttpRequest;
                    q.onreadystatechange = function() {
                        4 === q.readyState && (l.La = b, q.responseText ? l.Mf = q.responseText.replace(/\r\n/g, "\n") : l.Mf = "", 400 <= q.status ? (l.b.trigger(Ac.prototype.k.Ep, l), l.b.trigger(Ac.prototype.k.qf, l)) : h && !l.Mf.length || !h && 0 === q.status && !l.Mf.length || (l.b.trigger(Ac.prototype.k.Dp, l), l.b.trigger(Ac.prototype.k.lm, l)))
                    };
                    this.b.Jc || (q.onerror = u, q.ontimeout = u, q.onabort = u, q.onprogress = p);
                    q.open(f, d);
                    !this.b.Jc && 0 <= this.timeout && "undefined" !== typeof q.timeout && (q.timeout = this.timeout);
                    try {
                        q.responseType = "text"
                    } catch (D) {}
                    r && q.setRequestHeader && !a.hasOwnProperty("Content-Type") && q.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    if (q.setRequestHeader) {
                        for (var x in a)
                            if (a.hasOwnProperty(x)) try {
                                q.setRequestHeader(x, a[x])
                            } catch (E) {}
                            a = {}
                    }
                    if (g && q.overrideMimeType) {
                        try {
                            q.overrideMimeType(g)
                        } catch (F) {}
                        g = ""
                    }
                    r ? q.send(r) : q.send()
                } catch (S) {
                    u()
                }
            }
        };
        f.prototype.lm = function(a) {
            return qb(a, this.La)
        };
        f.prototype.Dp = function() {
            return !0
        };
        f.prototype.qf = function(a) {
            return qb(a, this.La)
        };
        f.prototype.Ep = function() {
            return !0
        };
        f.prototype.ku = function(a) {
            return qb(a, this.La)
        };
        b.k = new f;
        p.prototype.CB = function(a, b, c, d) {
            this.HD(a, b, d, c)
        };
        b.n = new p;
        n.prototype.Wz = function(a) {
            a.Qa(this.Mf)
        };
        b.u = new n
    })();

function Bc(f) {
        this.b = f
    }
    (function() {
        function f(a) {
            a = Math.pow(10, a / 20);
            isFinite(a) || (a = 0);
            0 > a && (a = 0);
            1 < a && (a = 1);
            return a
        }

        function p(a) {
            0 > a && (a = 0);
            1 < a && (a = 1);
            return Math.log(a) / Math.log(10) * 20
        }

        function n(a) {
            a = a.toLowerCase();
            return qa.hasOwnProperty(a) && qa[a].length ? qa[a][0].Gd() : L.destination
        }

        function h() {
            return L.createGain ? L.createGain() : L.createGainNode()
        }

        function l(a) {
            return L.createDelay ? L.createDelay(a) : L.createDelayNode(a)
        }

        function c(a, b) {
            a.start ? a.start(b || 0) : a.noteOn(b || 0)
        }

        function e(a, b, c, d) {
            a.start ? a.start(d ||
                0, b) : a.noteGrainOn(d || 0, b, c - b)
        }

        function b(a) {
            try {
                a.stop ? a.stop(0) : a.noteOff(0)
            } catch (b) {}
        }

        function r(a, b, c, d, e, f) {
            this.type = "filter";
            this.Ab = [a, b, c, d, e, f];
            this.Ba = h();
            this.ea = h();
            this.ea.gain.value = f;
            this.da = h();
            this.da.gain.value = 1 - f;
            this.Hb = L.createBiquadFilter();
            this.Hb.type = "number" === typeof this.Hb.type ? a : ed[a];
            this.Hb.frequency.value = b;
            this.Hb.detune && (this.Hb.detune.value = c);
            this.Hb.Q.value = d;
            this.Hb.gain.value = e;
            this.Ba.connect(this.Hb);
            this.Ba.connect(this.da);
            this.Hb.connect(this.ea)
        }

        function d(a, b, c) {
            this.type = "delay";
            this.Ab = [a, b, c];
            this.Ba = h();
            this.ea = h();
            this.ea.gain.value = c;
            this.da = h();
            this.da.gain.value = 1 - c;
            this.fl = h();
            this.Xd = l(a);
            this.Xd.delayTime.value = a;
            this.bn = h();
            this.bn.gain.value = b;
            this.Ba.connect(this.fl);
            this.Ba.connect(this.da);
            this.fl.connect(this.ea);
            this.fl.connect(this.Xd);
            this.Xd.connect(this.bn);
            this.bn.connect(this.fl)
        }

        function a(a, b, c, d) {
            this.type = "convolve";
            this.Ab = [b, c, d];
            this.Ba = h();
            this.ea = h();
            this.ea.gain.value = c;
            this.da = h();
            this.da.gain.value = 1 - c;
            this.hh = L.createConvolver();
            a && (this.hh.normalize = b, this.hh.buffer = a);
            this.Ba.connect(this.hh);
            this.Ba.connect(this.da);
            this.hh.connect(this.ea)
        }

        function g(a, b, d, e, f) {
            this.type = "flanger";
            this.Ab = [a, b, d, e, f];
            this.Ba = h();
            this.da = h();
            this.da.gain.value = 1 - f / 2;
            this.ea = h();
            this.ea.gain.value = f / 2;
            this.pn = h();
            this.pn.gain.value = e;
            this.Xd = l(a + b);
            this.Xd.delayTime.value = a;
            this.nc = L.createOscillator();
            this.nc.frequency.value = d;
            this.zd = h();
            this.zd.gain.value = b;
            this.Ba.connect(this.Xd);
            this.Ba.connect(this.da);
            this.Xd.connect(this.ea);
            this.Xd.connect(this.pn);
            this.pn.connect(this.Xd);
            this.nc.connect(this.zd);
            this.zd.connect(this.Xd.delayTime);
            c(this.nc)
        }

        function m(a, b, d, e, f, g) {
            this.type = "phaser";
            this.Ab = [a, b, d, e, f, g];
            this.Ba = h();
            this.da = h();
            this.da.gain.value = 1 - g / 2;
            this.ea = h();
            this.ea.gain.value = g / 2;
            this.Hb = L.createBiquadFilter();
            this.Hb.type = "number" === typeof this.Hb.type ? 7 : "allpass";
            this.Hb.frequency.value = a;
            this.Hb.detune && (this.Hb.detune.value = b);
            this.Hb.Q.value = d;
            this.nc = L.createOscillator();
            this.nc.frequency.value = f;
            this.zd = h();
            this.zd.gain.value = e;
            this.Ba.connect(this.Hb);
            this.Ba.connect(this.da);
            this.Hb.connect(this.ea);
            this.nc.connect(this.zd);
            this.zd.connect(this.Hb.frequency);
            c(this.nc)
        }

        function k(a) {
            this.type = "gain";
            this.Ab = [a];
            this.Fa = h();
            this.Fa.gain.value = a
        }

        function t(a, b) {
            this.type = "tremolo";
            this.Ab = [a, b];
            this.Fa = h();
            this.Fa.gain.value = 1 - b / 2;
            this.nc = L.createOscillator();
            this.nc.frequency.value = a;
            this.zd = h();
            this.zd.gain.value = b / 2;
            this.nc.connect(this.zd);
            this.zd.connect(this.Fa.gain);
            c(this.nc)
        }

        function Q(a, b) {
            this.type = "ringmod";
            this.Ab = [a, b];
            this.Ba = h();
            this.ea = h();
            this.ea.gain.value = b;
            this.da = h();
            this.da.gain.value = 1 - b;
            this.zl = h();
            this.zl.gain.value = 0;
            this.nc = L.createOscillator();
            this.nc.frequency.value = a;
            this.nc.connect(this.zl.gain);
            c(this.nc);
            this.Ba.connect(this.zl);
            this.Ba.connect(this.da);
            this.zl.connect(this.ea)
        }

        function C(a, b, c, d, e) {
            this.type = "distortion";
            this.Ab = [a, b, c, d, e];
            this.Ba = h();
            this.Co = h();
            this.Bo = h();
            this.$G(c, Math.pow(10, d / 20));
            this.ea = h();
            this.ea.gain.value = e;
            this.da = h();
            this.da.gain.value = 1 - e;
            this.qp = L.createWaveShaper();
            this.$m = new Float32Array(65536);
            this.ME(a, b);
            this.qp.$m = this.$m;
            this.Ba.connect(this.Co);
            this.Ba.connect(this.da);
            this.Co.connect(this.qp);
            this.qp.connect(this.Bo);
            this.Bo.connect(this.ea)
        }

        function q(a, b, c, d, e) {
            this.type = "compressor";
            this.Ab = [a, b, c, d, e];
            this.Fa = L.createDynamicsCompressor();
            try {
                this.Fa.threshold.value = a, this.Fa.knee.value = b, this.Fa.ratio.value = c, this.Fa.attack.value = d, this.Fa.release.value = e
            } catch (f) {}
        }

        function v(a, b) {
            this.type = "analyser";
            this.Ab = [a, b];
            this.Fa = L.createAnalyser();
            this.Fa.fftSize = a;
            this.Fa.smoothingTimeConstant = b;
            this.KE = new Float32Array(this.Fa.frequencyBinCount);
            this.Ux = new Uint8Array(a);
            this.pl = 0
        }

        function u() {
            this.Ma = null;
            this.$n = 0
        }

        function I(a, b) {
            this.src = a;
            this.ua = N;
            this.Zd = b;
            this.Bm = !1;
            var c = this;
            this.jj = this.pj = null;
            this.qj = [];
            this.Mo = 0;
            this.pt = this.mn = this.ay = this.wo = !1;
            1 === N && b && !Bb && (this.ua = 0, this.pj = h());
            this.vf = this.Ea = null;
            var d;
            switch (this.ua) {
                case 0:
                    this.Ea = new Audio;
                    this.Ea.crossOrigin = "anonymous";
                    this.Ea.addEventListener("canplaythrough", function() {
                        c.pt = !0
                    });
                    1 === N && L.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.ay = !0, this.Ea.addEventListener("canplay", function() {
                        !c.jj && c.Ea && (c.jj = L.createMediaElementSource(c.Ea), c.jj.connect(c.pj))
                    }));
                    this.Ea.autoplay = !1;
                    this.Ea.rI = "auto";
                    this.Ea.src = a;
                    break;
                case 1:
                    K.On ? K.tv(a, function(a) {
                        c.vf = a;
                        c.gv()
                    }, function() {
                        c.mn = !0
                    }) : (d = new XMLHttpRequest, d.open("GET", a, !0), d.responseType = "arraybuffer", d.onload = function() {
                        c.vf = d.response;
                        c.gv()
                    }, d.onerror = function() {
                        c.mn = !0
                    }, d.send());
                    break;
                case 2:
                    this.Ea = !0;
                    break;
                case 3:
                    this.Ea = !0
            }
        }

        function D(a, b) {
            var c = this;
            this.tag = b;
            this.pb = this.Re = !0;
            this.src = a.src;
            this.buffer = a;
            this.ua = N;
            this.Zd = a.Zd;
            this.playbackRate = 1;
            this.Mi = !0;
            this.td = this.Nd = !1;
            this.ld = 0;
            this.Mk = this.Vi = this.ue = !1;
            this.volume = 1;
            this.hs = function(a) {
                if (!c.td && !c.Nd) {
                    var b = this;
                    b || (b = a.target);
                    b === c.zm && (c.Mi = !0, c.pb = !0, R = c.tag, K.trigger(Bc.prototype.k.mm, P))
                }
            };
            this.zm = null;
            this.Ri = 1 === Y && !this.Zd || 2 === Y;
            this.lj = 1;
            this.startTime = this.Ri ? K.kc.na : K.jg.na;
            this.Nb = this.Wb = null;
            this.bf = !1;
            this.xc = null;
            this.ix = this.hx = this.gx = this.cx = this.kx = this.jx = 0;
            this.G = null;
            var d = !1;
            1 !== this.ua || 0 !== this.buffer.ua || this.buffer.ay || (this.ua = 0);
            switch (this.ua) {
                case 0:
                    this.Zd ? (this.G = a.Ea, d = !a.Bm, a.Bm = !0) : (this.G = new Audio, this.G.crossOrigin = "anonymous", this.G.autoplay = !1, this.G.src = a.Ea.src, d = !0);
                    d && this.G.addEventListener("ended", function() {
                        R = c.tag;
                        c.pb = !0;
                        K.trigger(Bc.prototype.k.mm, P)
                    });
                    break;
                case 1:
                    this.Wb = h();
                    this.Wb.connect(n(b));
                    1 === this.buffer.ua ? a.Ea && (this.G = L.createBufferSource(), this.G.buffer = a.Ea, this.G.connect(this.Wb)) : (this.G = this.buffer.Ea, this.buffer.pj.connect(this.Wb), this.buffer.Bm || (this.buffer.Bm = !0, this.buffer.Ea.addEventListener("ended", function() {
                        R = c.tag;
                        c.pb = !0;
                        K.trigger(Bc.prototype.k.mm, P)
                    })));
                    break;
                case 2:
                    this.G = new window.Media(A + this.src, null, null, function(a) {
                        a === window.Media.MEDIA_STOPPED && (c.Mi = !0, c.pb = !0, R = c.tag, K.trigger(Bc.prototype.k.mm, P))
                    });
                    break;
                case 3:
                    this.G = !0
            }
        }

        function x(a) {
            G(ra);
            if (a.length) {
                var b, c, d;
                b = 0;
                for (c = B.length; b < c; b++) d = B[b], qb(a, d.tag) && ra.push(d)
            } else y && !y.yh() && (G(ra), ra[0] = y)
        }

        function E(a, b) {
            qa.hasOwnProperty(a) ? qa[a].push(b) : qa[a] = [b];
            var c, d, e, f, g = L.destination;
            if (qa.hasOwnProperty(a) && (e = qa[a], e.length))
                for (g = e[0].Gd(), c = 0, d = e.length; c < d; c++) f = e[c], c + 1 === d ? f.Vd(L.destination) : f.Vd(e[c + 1].Gd());
            x(a);
            c = 0;
            for (d = ra.length; c < d; c++) ra[c].HG(g);
            Ra && fc === a && (Ra.disconnect(), Ra.connect(g))
        }

        function F() {}

        function S() {}
        var w = Bc.prototype;
        w.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        w.N.prototype.J = function() {};
        var K = null,
            P = null,
            R = "",
            A = "",
            N = 0,
            L = null,
            X = [],
            B = [],
            y = null,
            O = !1,
            Y = 0,
            H = !1,
            J = 1,
            T = 0,
            ea = 0,
            U = !1,
            pa = 1,
            ja = 1,
            aa = 10,
            hb = 1E4,
            gb = 1,
            Ra = null,
            fc = "",
            zb = !1,
            Ab = [],
            Bb = !1,
            qa = {},
            ed = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
        r.prototype.Vd = function(a) {
            this.ea.disconnect();
            this.ea.connect(a);
            this.da.disconnect();
            this.da.connect(a)
        };
        r.prototype.remove = function() {
            this.Ba.disconnect();
            this.Hb.disconnect();
            this.ea.disconnect();
            this.da.disconnect()
        };
        r.prototype.Gd = function() {
            return this.Ba
        };
        d.prototype.Vd = function(a) {
            this.ea.disconnect();
            this.ea.connect(a);
            this.da.disconnect();
            this.da.connect(a)
        };
        d.prototype.remove = function() {
            this.Ba.disconnect();
            this.fl.disconnect();
            this.Xd.disconnect();
            this.bn.disconnect();
            this.ea.disconnect();
            this.da.disconnect()
        };
        d.prototype.Gd = function() {
            return this.Ba
        };
        a.prototype.Vd = function(a) {
            this.ea.disconnect();
            this.ea.connect(a);
            this.da.disconnect();
            this.da.connect(a)
        };
        a.prototype.remove = function() {
            this.Ba.disconnect();
            this.hh.disconnect();
            this.ea.disconnect();
            this.da.disconnect()
        };
        a.prototype.Gd = function() {
            return this.Ba
        };
        g.prototype.Vd = function(a) {
            this.da.disconnect();
            this.da.connect(a);
            this.ea.disconnect();
            this.ea.connect(a)
        };
        g.prototype.remove = function() {
            this.Ba.disconnect();
            this.Xd.disconnect();
            this.nc.disconnect();
            this.zd.disconnect();
            this.da.disconnect();
            this.ea.disconnect();
            this.pn.disconnect()
        };
        g.prototype.Gd = function() {
            return this.Ba
        };
        m.prototype.Vd = function(a) {
            this.da.disconnect();
            this.da.connect(a);
            this.ea.disconnect();
            this.ea.connect(a)
        };
        m.prototype.remove = function() {
            this.Ba.disconnect();
            this.Hb.disconnect();
            this.nc.disconnect();
            this.zd.disconnect();
            this.da.disconnect();
            this.ea.disconnect()
        };
        m.prototype.Gd = function() {
            return this.Ba
        };
        k.prototype.Vd = function(a) {
            this.Fa.disconnect();
            this.Fa.connect(a)
        };
        k.prototype.remove = function() {
            this.Fa.disconnect()
        };
        k.prototype.Gd = function() {
            return this.Fa
        };
        t.prototype.Vd = function(a) {
            this.Fa.disconnect();
            this.Fa.connect(a)
        };
        t.prototype.remove = function() {
            this.nc.disconnect();
            this.zd.disconnect();
            this.Fa.disconnect()
        };
        t.prototype.Gd = function() {
            return this.Fa
        };
        Q.prototype.Vd = function(a) {
            this.ea.disconnect();
            this.ea.connect(a);
            this.da.disconnect();
            this.da.connect(a)
        };
        Q.prototype.remove = function() {
            this.nc.disconnect();
            this.zl.disconnect();
            this.Ba.disconnect();
            this.ea.disconnect();
            this.da.disconnect()
        };
        Q.prototype.Gd = function() {
            return this.Ba
        };
        C.prototype.$G = function(a, b) {.01 > a && (a = .01);
            this.Co.gain.value = a;
            this.Bo.gain.value = Math.pow(1 / a, .6) * b
        };
        C.prototype.shape = function(a, b, c) {
            var d = 1.05 * c * b - b;
            c = 0 > a ? -1 : 1;
            a = 0 > a ? -a : a;
            b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
            return b * c
        };
        C.prototype.ME = function(a, b) {
            for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768, e = this.shape(e, c, d), this.$m[32768 + f] = e, this.$m[32768 - f - 1] = -e
        };
        C.prototype.Vd = function(a) {
            this.ea.disconnect();
            this.ea.connect(a);
            this.da.disconnect();
            this.da.connect(a)
        };
        C.prototype.remove = function() {
            this.Ba.disconnect();
            this.Co.disconnect();
            this.qp.disconnect();
            this.Bo.disconnect();
            this.ea.disconnect();
            this.da.disconnect()
        };
        C.prototype.Gd = function() {
            return this.Ba
        };
        q.prototype.Vd = function(a) {
            this.Fa.disconnect();
            this.Fa.connect(a)
        };
        q.prototype.remove = function() {
            this.Fa.disconnect()
        };
        q.prototype.Gd = function() {
            return this.Fa
        };
        v.prototype.Ra = function() {
            this.Fa.getFloatFrequencyData(this.KE);
            this.Fa.getByteTimeDomainData(this.Ux);
            for (var a = this.Fa.fftSize, b = 0, c = this.pl = 0, d = 0; b < a; b++) d = (this.Ux[b] - 128) / 128, 0 > d && (d = -d), this.pl < d && (this.pl = d), c += d * d;
            this.pl = p(this.pl);
            p(Math.sqrt(c / a))
        };
        v.prototype.Vd = function(a) {
            this.Fa.disconnect();
            this.Fa.connect(a)
        };
        v.prototype.remove = function() {
            this.Fa.disconnect()
        };
        v.prototype.Gd =
            function() {
                return this.Fa
            };
        u.prototype.Bl = function(a) {
            this.Ma = a
        };
        u.prototype.Hn = function() {
            return !!this.Ma
        };
        u.prototype.Ra = function() {};
        var Rb = !1;
        I.prototype.IG = function() {
            var a, b, c, d;
            c = a = 0;
            for (b = B.length; a < b; ++a) d = B[a], B[c] = d, d.buffer === this ? d.stop() : ++c;
            B.length = c;
            this.jj && (this.jj.disconnect(), this.jj = null);
            this.pj && (this.pj.disconnect(), this.pj = null);
            this.vf = this.Ea = null
        };
        I.prototype.gv = function() {
            if (!this.Ea && this.vf) {
                var a = this;
                if (L.decodeAudioData) L.decodeAudioData(this.vf, function(b) {
                    a.Ea = b;
                    a.vf = null;
                    var c, d, e;
                    if (ka(a.yo) || H) ka(a.Um) || (c = a.Um.hh, c.normalize = a.Pw, c.buffer = b);
                    else if (a.qj.length) {
                        c = 0;
                        for (d = a.qj.length; c < d; c++) {
                            b = a.qj[c];
                            e = new D(a, b.ey);
                            e.Po(!0);
                            if ("undefined" !== typeof b.Rw && (b.Ma = K.wh(b.Rw), !b.Ma)) continue;
                            if (b.Ma) {
                                var f = Xa(b.Ma.x, b.Ma.y, -b.Ma.C.Ib(), T, ea, !0),
                                    g = Xa(b.Ma.x, b.Ma.y, -b.Ma.C.Ib(), T, ea, !1);
                                e.Ms(f, g, Na(b.Ma.A - b.Ma.C.Ib()), b.Yq, b.Yr, b.as);
                                e.Bl(b.Ma)
                            } else e.Ms(b.x, b.y, b.WC, b.Yq, b.Yr, b.as);
                            e.play(a.Or, a.ot, a.Mo);
                            a.wo && e.pause();
                            B.push(e)
                        }
                        G(a.qj)
                    } else e = new D(a, a.yo || ""), e.play(a.Or, a.ot, a.Mo), a.wo && e.pause(), B.push(e)
                }, function() {
                    a.mn = !0
                });
                else if (this.Ea = L.createBuffer(this.vf, !1), this.vf = null, ka(this.yo) || H) ka(this.Um) || (b = this.Um.hh, b.normalize = this.Pw, b.buffer = this.Ea);
                else {
                    var b = new D(this, this.yo);
                    b.play(this.Or, this.ot, this.Mo);
                    this.wo && b.pause();
                    B.push(b)
                }
            }
        };
        I.prototype.Hk = function() {
            switch (this.ua) {
                case 0:
                    var a = 4 <= this.Ea.readyState;
                    a && (this.pt = !0);
                    return a || this.pt;
                case 1:
                    return !!this.vf || !!this.Ea;
                case 2:
                    return !0;
                case 3:
                    return !0
            }
            return !1
        };
        I.prototype.FF = function() {
            switch (this.ua) {
                case 0:
                    return this.Hk();
                case 1:
                    return !!this.Ea;
                case 2:
                    return !0;
                case 3:
                    return !0
            }
            return !1
        };
        I.prototype.uF = function() {
            switch (this.ua) {
                case 0:
                    return !!this.Ea.error;
                case 1:
                    return this.mn
            }
            return !1
        };
        D.prototype.yh = function() {
            switch (this.ua) {
                case 0:
                    return this.G.ended;
                case 1:
                    return 1 === this.buffer.ua ? !this.Re && !this.pb && this.G.loop || this.td ? !1 : this.Mi : this.G.ended;
                case 2:
                    return this.Mi;
                case 3:
                    !0
            }
            return !0
        };
        D.prototype.mD = function() {
            return this.Re || this.pb ? !0 : this.yh()
        };
        D.prototype.Po = function(a) {
            1 === N && (!this.bf && a ? this.Wb && (this.Nb || (this.Nb = L.createPanner(), this.Nb.panningModel = "number" === typeof this.Nb.panningModel ? pa : ["equalpower", "HRTF", "soundfield"][pa], this.Nb.distanceModel = "number" === typeof this.Nb.distanceModel ? ja : ["linear", "inverse", "exponential"][ja], this.Nb.refDistance = aa, this.Nb.maxDistance = hb, this.Nb.rolloffFactor = gb), this.Wb.disconnect(), this.Wb.connect(this.Nb), this.Nb.connect(n(this.tag)), this.bf = !0) : this.bf && !a && this.Wb && (this.Nb.disconnect(), this.Wb.disconnect(), this.Wb.connect(n(this.tag)), this.bf = !1))
        };
        D.prototype.Ms = function(a, b, c, d, e, f) {
            this.bf && 1 === N && (this.Nb.setPosition(a, b, 0), this.Nb.setOrientation(Math.cos(M(c)), Math.sin(M(c)), 0), this.Nb.coneInnerAngle = d, this.Nb.coneOuterAngle = e, this.Nb.coneOuterGain = f, this.jx = a, this.kx = b, this.cx = c, this.gx = d, this.hx = e, this.ix = f)
        };
        D.prototype.Bl = function(a) {
            this.bf && 1 === N && (this.xc || (this.xc = new u), this.xc.Bl(a))
        };
        D.prototype.Ra = function(a) {
            if (this.bf && 1 === N && this.xc && this.xc.Hn() && this.Qi()) {
                this.xc.Ra(a);
                a = this.xc.Ma;
                var b = Xa(a.x, a.y, -a.C.Ib(), T, ea, !0),
                    c = Xa(a.x, a.y, -a.C.Ib(), T, ea, !1);
                this.Nb.setPosition(b, c, 0);
                b = 0;
                "undefined" !== typeof this.xc.Ma.A && (b = a.A - a.C.Ib(), this.Nb.setOrientation(Math.cos(b), Math.sin(b), 0))
            }
        };
        D.prototype.play = function(a, b, d, f) {
            var g = this.G;
            this.ue = a;
            this.volume = b;
            d = d || 0;
            f = f || 0;
            switch (this.ua) {
                case 0:
                    1 !== g.playbackRate && (g.playbackRate = 1);
                    g.volume !== b * J && (g.volume = b * J);
                    g.loop !== a && (g.loop = a);
                    g.muted && (g.muted = !1);
                    if (g.currentTime !== d) try {
                        g.currentTime = d
                    } catch (h) {}
                    if (this.Zd && zb && !K.yb) Ab.push(this);
                    else try {
                        this.G.play()
                    } catch (k) {
                        console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", k)
                    }
                    break;
                case 1:
                    this.muted = !1;
                    this.lj = 1;
                    if (1 === this.buffer.ua) this.Wb.gain.value = b * J, this.Re || (this.G = L.createBufferSource(), this.G.buffer = this.buffer.Ea, this.G.connect(this.Wb)), this.G.onended = this.hs, this.zm = this.G, this.G.loop = a, this.Mi = !1, 0 === d ? c(this.G, f) : e(this.G, d, this.uh(), f);
                    else {
                        1 !== g.playbackRate && (g.playbackRate = 1);
                        g.loop !== a && (g.loop = a);
                        g.volume = b * J;
                        if (g.currentTime !== d) try {
                            g.currentTime = d
                        } catch (m) {}
                        this.Zd && zb && !K.yb ? Ab.push(this) : g.play()
                    }
                    break;
                case 2:
                    (!this.Re && this.pb || 0 !== d) && g.seekTo(d);
                    g.play();
                    this.Mi = !1;
                    break;
                case 3:
                    K.hc ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
            }
            this.playbackRate = 1;
            this.startTime = (this.Ri ? K.kc.na : K.jg.na) - d;
            this.td = this.pb = this.Re = !1
        };
        D.prototype.stop = function() {
            switch (this.ua) {
                case 0:
                    this.G.paused || this.G.pause();
                    break;
                case 1:
                    1 === this.buffer.ua ? b(this.G) : this.G.paused || this.G.pause();
                    break;
                case 2:
                    this.G.stop();
                    break;
                case 3:
                    K.hc && AppMobi.context.stopSound(this.src)
            }
            this.pb = !0;
            this.td = !1
        };
        D.prototype.pause = function() {
            if (!(this.Re || this.pb || this.yh() || this.td)) {
                switch (this.ua) {
                    case 0:
                        this.G.paused || this.G.pause();
                        break;
                    case 1:
                        1 === this.buffer.ua ? (this.ld = this.Nq(!0), this.ue && (this.ld = this.ld % this.uh()), this.td = !0, b(this.G)) : this.G.paused || this.G.pause();
                        break;
                    case 2:
                        this.G.pause();
                        break;
                    case 3:
                        K.hc && AppMobi.context.stopSound(this.src)
                }
                this.td = !0
            }
        };
        D.prototype.Bx = function() {
            if (!(this.Re || this.pb || this.yh()) && this.td) {
                switch (this.ua) {
                    case 0:
                        this.G.play();
                        break;
                    case 1:
                        1 === this.buffer.ua ? (this.G = L.createBufferSource(), this.G.buffer = this.buffer.Ea, this.G.connect(this.Wb), this.G.onended = this.hs, this.zm = this.G, this.G.loop = this.ue, this.Wb.gain.value = J * this.volume * this.lj, this.Rl(), this.startTime = (this.Ri ? K.kc.na : K.jg.na) - this.ld / (this.playbackRate || .001), e(this.G, this.ld, this.uh())) : this.G.play();
                        break;
                    case 2:
                        this.G.play();
                        break;
                    case 3:
                        K.hc && AppMobi.context.resumeSound(this.src)
                }
                this.td = !1
            }
        };
        D.prototype.seek = function(a) {
            if (!(this.Re || this.pb || this.yh())) switch (this.ua) {
                case 0:
                    try {
                        this.G.currentTime = a
                    } catch (b) {}
                    break;
                case 1:
                    if (1 === this.buffer.ua) this.td ? this.ld = a : (this.pause(), this.ld = a, this.Bx());
                    else try {
                        this.G.currentTime = a
                    } catch (c) {}
                    break;
                case 3:
                    K.hc && AppMobi.context.seekSound(this.src, a)
            }
        };
        D.prototype.HG = function(a) {
            1 === this.ua && (this.bf ? (this.Nb.disconnect(), this.Nb.connect(a)) : (this.Wb.disconnect(), this.Wb.connect(a)))
        };
        D.prototype.uh = function() {
            var a = 0;
            switch (this.ua) {
                case 0:
                    "undefined" !== typeof this.G.duration && (a = this.G.duration);
                    break;
                case 1:
                    a = this.buffer.Ea.duration;
                    break;
                case 2:
                    a = this.G.getDuration();
                    break;
                case 3:
                    K.hc && (a = AppMobi.context.getDurationSound(this.src))
            }
            return a
        };
        D.prototype.Nq = function(a) {
            var b = this.uh(),
                c = 0;
            switch (this.ua) {
                case 0:
                    "undefined" !== typeof this.G.currentTime && (c = this.G.currentTime);
                    break;
                case 1:
                    if (1 === this.buffer.ua) {
                        if (this.td) return this.ld;
                        c = (this.Ri ? K.kc.na : K.jg.na) - this.startTime
                    } else "undefined" !== typeof this.G.currentTime && (c = this.G.currentTime);
                    break;
                case 3:
                    K.hc && (c = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            a && (c *= this.playbackRate);
            !this.ue && c > b && (c = b);
            return c
        };
        D.prototype.Qi = function() {
            return !this.td && !this.Re && !this.pb && !this.yh()
        };
        D.prototype.gH = function() {
            return !this.Re && !this.pb && !this.yh()
        };
        D.prototype.fH = function(a) {
            this.volume = a;
            this.kt()
        };
        D.prototype.kt = function() {
            var a = this.volume * J;
            isFinite(a) || (a = 0);
            switch (this.ua) {
                case 0:
                    "undefined" !== typeof this.G.volume && this.G.volume !== a && (this.G.volume = a);
                    break;
                case 1:
                    1 === this.buffer.ua ? this.Wb.gain.value = a * this.lj : "undefined" !== typeof this.G.volume && this.G.volume !== a && (this.G.volume = a)
            }
        };
        D.prototype.hn = function(a) {
            switch (this.ua) {
                case 0:
                    this.G.muted !== !!a && (this.G.muted = !!a);
                    break;
                case 1:
                    1 === this.buffer.ua ? (this.lj = a ? 0 : 1, this.Wb.gain.value = J * this.volume * this.lj) : this.G.muted !== !!a && (this.G.muted = !!a)
            }
        };
        D.prototype.Nx = function(a) {
            this.Vi = !!a;
            this.hn(this.Vi || this.Mk)
        };
        D.prototype.Ox = function(a) {
            this.Mk = !!a;
            this.hn(this.Vi || this.Mk)
        };
        D.prototype.aH = function(a) {
            this.ue = a;
            switch (this.ua) {
                case 0:
                    this.G.loop !== !!a && (this.G.loop = !!a);
                    break;
                case 1:
                    this.G.loop !== !!a && (this.G.loop = !!a);
                    break;
                case 3:
                    K.hc && AppMobi.context.setLoopingSound(this.src, a)
            }
        };
        D.prototype.bH = function(a) {
            this.playbackRate = a;
            this.Rl()
        };
        D.prototype.Rl = function() {
            var a = this.playbackRate;
            this.Ri && (a *= K.Wg);
            switch (this.ua) {
                case 0:
                    this.G.playbackRate !== a && (this.G.playbackRate = a);
                    break;
                case 1:
                    1 === this.buffer.ua ? this.G.playbackRate.value !== a && (this.G.playbackRate.value = a) : this.G.playbackRate !== a && (this.G.playbackRate = a)
            }
        };
        D.prototype.dH = function(a) {
            switch (this.ua) {
                case 0:
                    a ? this.Qi() ? (this.Nd = !0, this.G.pause()) : this.Nd = !1 : this.Nd && (this.G.play(), this.Nd = !1);
                    break;
                case 1:
                    a ? this.Qi() ? (this.Nd = !0, 1 === this.buffer.ua ? (this.ld = this.Nq(!0), this.ue && (this.ld = this.ld % this.uh()), b(this.G)) : this.G.pause()) : this.Nd = !1 : this.Nd && (1 === this.buffer.ua ? (this.G = L.createBufferSource(), this.G.buffer = this.buffer.Ea, this.G.connect(this.Wb), this.G.onended = this.hs, this.zm = this.G, this.G.loop = this.ue, this.Wb.gain.value = J * this.volume * this.lj, this.Rl(), this.startTime = (this.Ri ? K.kc.na : K.jg.na) - this.ld /
                        (this.playbackRate || .001), e(this.G, this.ld, this.uh())) : this.G.play(), this.Nd = !1);
                    break;
                case 2:
                    a ? this.Qi() ? (this.G.pause(), this.Nd = !0) : this.Nd = !1 : this.Nd && (this.Nd = !1, this.G.play())
            }
        };
        w.K = function(a) {
            function b() {
                "suspended" === L.state && L.resume && L.resume();
                if (!U && L.createBuffer) {
                    var a = L.createBuffer(1, 220, 22050),
                        d = L.createBufferSource();
                    d.buffer = a;
                    d.connect(L.destination);
                    c(d)
                }
            }
            this.type = a;
            K = this.b = a.b;
            P = this;
            this.vd = null;
            this.Vk = -600;
            this.b.On && (Bb = !0);
            !(this.b.Jb || this.b.gc && (this.b.hr || this.b.Ln)) || this.b.Fk || this.b.ba || this.b.Kn || Bb || (zb = !0);
            L = null;
            "undefined" !== typeof AudioContext ? (N = 1, L = new AudioContext) : "undefined" !== typeof webkitAudioContext && (N = 1, L = new webkitAudioContext);
            this.b.Jb && L && (L.close && L.close(), "undefined" !== typeof AudioContext ? L = new AudioContext : "undefined" !== typeof webkitAudioContext && (L = new webkitAudioContext));
            zb ? document.addEventListener("touchend", function() {
                !Rb && L && (b(), Rb = !0);
                var a, c, d;
                if (zb) {
                    if (!H)
                        for (a = 0, c = Ab.length; a < c; ++a) d = Ab[a], d.pb || d.td || d.G.play();
                    G(Ab)
                }
            }, !0) : Bb && document.addEventListener("touchend", function() {
                !Rb && L && (b(), Rb = !0)
            }, !0);
            1 !== N && (this.b.Sc && "undefined" !== typeof window.Media ? N = 2 : this.b.Rv && (N = 3));
            2 === N && (A = location.href, a = A.lastIndexOf("/"), -1 < a && (A = A.substr(0, a + 1)), A = A.replace("file://", ""));
            if (this.b.IF && this.b.JF && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.pf(this);
            else {
                if (this.b.hc) O = this.b.gc;
                else try {
                    O = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (d) {
                    O = !1
                }
                this.b.Vg(this)
            }
        };
        var Ma = w.K.prototype;
        Ma.J = function() {
            this.b.qi = this;
            Y = this.B[0];
            this.Yf = this.B[1];
            this.qs = 0 !== this.B[2];
            this.jo = 0;
            pa = this.B[3];
            ja = this.B[4];
            this.Vk = -this.B[5];
            aa = this.B[6];
            hb = this.B[7];
            gb = this.B[8];
            this.vd = new u;
            var a = this.b.aa || this.b.width,
                b = this.b.Z || this.b.height;
            1 === N && (L.listener.setPosition(a / 2, b / 2, this.Vk), L.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
                Ra && Ra.disconnect();
                fc = b.toLowerCase();
                Ra = L.createMediaStreamSource(a);
                Ra.connect(n(fc))
            });
            this.b.Vp(function(a) {
                P.es(a)
            });
            var c = this;
            this.b.Am(function(a) {
                c.ll(a)
            })
        };
        Ma.ll = function(a) {
            var b, c, d;
            b = 0;
            for (c = B.length; b < c; b++) d = B[b], d.xc && d.xc.Ma === a && (d.xc.Ma = null, d.bf && d.Qi() && d.ue && d.stop());
            this.vd.Ma === a && (this.vd.Ma = null)
        };
        Ma.Wa = function() {
            var a = {
                    silent: H,
                    masterVolume: J,
                    listenerZ: this.Vk,
                    listenerUid: this.vd.Hn() ? this.vd.Ma.uid : -1,
                    playing: [],
                    effects: {}
                },
                b = a.playing,
                c, d, e, f, g, h;
            c = 0;
            for (d = B.length; c < d; c++) e = B[c], !e.gH() || 3 === this.Yf || e.Zd && 1 === this.Yf || !e.Zd && 2 === this.Yf || (f = e.Nq(), e.ue && (f = f % e.uh()), f = {
                tag: e.tag,
                buffersrc: e.buffer.src,
                is_music: e.Zd,
                playbackTime: f,
                volume: e.volume,
                looping: e.ue,
                muted: e.Vi,
                playbackRate: e.playbackRate,
                paused: e.td,
                resume_position: e.ld
            }, e.bf && (f.pan = {}, h = f.pan, e.xc && e.xc.Hn() ? h.objUid = e.xc.Ma.uid : (h.x = e.jx, h.y = e.kx, h.a = e.cx), h.ia = e.gx, h.oa = e.hx, h.og = e.ix), b.push(f));
            b = a.effects;
            for (g in qa)
                if (qa.hasOwnProperty(g)) {
                    e = [];
                    c = 0;
                    for (d = qa[g].length; c < d; c++) e.push({
                        type: qa[g][c].type,
                        params: qa[g][c].Ab
                    });
                    b[g] = e
                }
            return a
        };
        var Cb = [];
        Ma.bb = function(b) {
            var c = b.silent;
            J = b.masterVolume;
            this.Vk = b.listenerZ;
            this.vd.Bl(null);
            var e = b.listenerUid; - 1 !== e && (this.vd.$n = e, Cb.push(this.vd));
            var e = b.playing,
                f, h, l, x, n, p, I, D, F, w, K;
            if (3 !== this.Yf)
                for (f = 0, h = B.length; f < h; f++) F = B[f], F.Zd && 1 === this.Yf || (F.Zd || 2 !== this.Yf) && F.stop();
            for (n in qa)
                if (qa.hasOwnProperty(n))
                    for (f = 0, h = qa[n].length; f < h; f++) qa[n][f].remove();
            bb(qa);
            for (n in b.effects)
                if (b.effects.hasOwnProperty(n))
                    for (p = b.effects[n], f = 0, h = p.length; f < h; f++) switch (l = p[f].type, w = p[f].params, l) {
                        case "filter":
                            E(n, new r(w[0], w[1], w[2], w[3], w[4], w[5]));
                            break;
                        case "delay":
                            E(n, new d(w[0], w[1], w[2]));
                            break;
                        case "convolve":
                            l = w[2];
                            F = this.zn(l, !1);
                            F.Ea ? l = new a(F.Ea, w[0], w[1], l) : (l = new a(null, w[0], w[1], l), F.Pw = w[0], F.Um = l);
                            E(n, l);
                            break;
                        case "flanger":
                            E(n, new g(w[0], w[1], w[2], w[3], w[4]));
                            break;
                        case "phaser":
                            E(n, new m(w[0], w[1], w[2], w[3], w[4], w[5]));
                            break;
                        case "gain":
                            E(n, new k(w[0]));
                            break;
                        case "tremolo":
                            E(n, new t(w[0], w[1]));
                            break;
                        case "ringmod":
                            E(n, new Q(w[0], w[1]));
                            break;
                        case "distortion":
                            E(n, new C(w[0], w[1], w[2], w[3], w[4]));
                            break;
                        case "compressor":
                            E(n, new q(w[0], w[1], w[2], w[3], w[4]));
                            break;
                        case "analyser":
                            E(n, new v(w[0], w[1]))
                    }
                f = 0;
            for (h = e.length; f < h; f++) 3 === this.Yf || (b = e[f], l = b.buffersrc, x = b.is_music, n = b.tag, p = b.playbackTime, I = b.looping, D = b.volume, K = (w = b.pan) && w.hasOwnProperty("objUid") ? w.objUid : -1, x && 1 === this.Yf) || !x && 2 === this.Yf || ((F = this.Gq(l, n, x, I, D)) ? (F.ld = b.resume_position, F.Po(!!w), F.play(I, D, p), F.Rl(), F.kt(), F.hn(F.Vi || F.Mk), b.paused && F.pause(), b.muted && F.Nx(!0), F.hn(F.Vi || F.Mk), w && (-1 !== K ? (F.xc = F.xc || new u, F.xc.$n = K, Cb.push(F.xc)) : F.Ms(w.x, w.y, w.a, w.ia, w.oa, w.og))) : (F = this.zn(l, x), F.Mo = p, F.wo = b.paused, w && (-1 !== K ? F.qj.push({
                Rw: K,
                Yq: w.ia,
                Yr: w.oa,
                as: w.og,
                ey: n
            }) : F.qj.push({
                x: w.x,
                y: w.y,
                WC: w.a,
                Yq: w.ia,
                Yr: w.oa,
                as: w.og,
                ey: n
            }))));
            if (c && !H) {
                f = 0;
                for (h = B.length; f < h; f++) B[f].Ox(!0);
                H = !0
            } else if (!c && H) {
                f = 0;
                for (h = B.length; f < h; f++) B[f].Ox(!1);
                H = !1
            }
        };
        Ma.je = function() {
            var a, b, c, d;
            a = 0;
            for (b = Cb.length; a < b; a++) c = Cb[a], d = this.b.wh(c.$n), c.Bl(d), c.$n = -1, d && (T = d.x, ea = d.y);
            G(Cb)
        };
        Ma.es = function(a) {
            if (!this.qs) {
                !a && L && L.resume && (L.resume(), U = !1);
                var b, c;
                b = 0;
                for (c = B.length; b < c; b++) B[b].dH(a);
                a && L && L.suspend && (L.suspend(), U = !0)
            }
        };
        Ma.Ra = function() {
            var a = this.b.Bg,
                b, c, d;
            b = 0;
            for (c = B.length; b < c; b++) d = B[b], d.Ra(a), 0 !== Y && d.Rl();
            var e, f;
            for (e in qa)
                if (qa.hasOwnProperty(e))
                    for (d = qa[e], b = 0, c = d.length; b < c; b++) f = d[b], f.Ra && f.Ra();
            1 === N && this.vd.Hn() && (this.vd.Ra(a), T = this.vd.Ma.x, ea = this.vd.Ma.y, L.listener.setPosition(this.vd.Ma.x, this.vd.Ma.y, this.Vk))
        };
        var Db = [];
        Ma.cH = function(a) {
            var b, c, d, e, f, g = 0;
            b = 0;
            for (c = a.length; b < c; ++b)
                if (d = a[b], e = d[0], d = 2 * d[1], (f = 4 < e.length && ".ogg" === e.substr(e.length - 4)) && O || !f && !O) Db.push({
                    filename: e,
                    size: d,
                    Ma: null
                }), g += d;
            return g
        };
        Ma.kH = function() {
            var a, b, c, d;
            a = 0;
            for (b = Db.length; a < b; ++a) c = Db[a], d = this.b.qn + c.filename, c.Ma = this.zn(d, !1)
        };
        Ma.XE = function() {
            var a = 0,
                b, c, d;
            b = 0;
            for (c = Db.length; b < c; ++b) d = Db[b], d.Ma.FF() || d.Ma.uF() || this.b.ba || this.b.Ln ? a += d.size : d.Ma.Hk() && (a += Math.floor(d.size / 2));
            return a
        };
        Ma.JG = function() {
            var a, b, c, d;
            c = a = 0;
            for (b = X.length; a < b; ++a) d = X[a], X[c] = d, d.Zd ? d.IG() : ++c;
            X.length = c
        };
        Ma.zn = function(a, b) {
            var c, d, e, f = null;
            c = 0;
            for (d = X.length; c < d; c++)
                if (e = X[c], e.src === a) {
                    f = e;
                    break
                }
            f || (Bb && b && this.JG(), f = new I(a, b), X.push(f));
            return f
        };
        Ma.Gq = function(a, b, c, d, e) {
            var f, g, h;
            f = 0;
            for (g = B.length; f < g; f++)
                if (h = B[f], h.src === a && (h.mD() || c)) return h.tag = b, h;
            a = this.zn(a, c);
            if (!a.Ea) return "<preload>" !== b && (a.yo = b, a.Or = d, a.ot = e), null;
            h = new D(a, b);
            B.push(h);
            return h
        };
        var ra = [];
        F.prototype.mm = function(a) {
            return qb(R, a)
        };
        F.prototype.Pz = function(a) {
            x(a);
            var b;
            a = 0;
            for (b = ra.length; a < b; a++)
                if (ra[a].Qi()) return !0;
            return !1
        };
        w.k = new F;
        S.prototype.Play = function(a, b, c, d) {
            !H && (c = f(c), y = this.Gq(this.b.qn + a[0] + (O ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (y.Po(!1), y.play(0 !== b, c, 0, this.jo), this.jo = 0)
        };
        S.prototype.AB = function(a, b, c, d, e) {
            !H && (d = f(d), y = this.Gq(this.b.qn + b.toLowerCase() + (O ? ".ogg" : ".m4a"), e, 1 === a, 0 !== c, d)) && (y.Po(!1), y.play(0 !== c, d, 0, this.jo), this.jo = 0)
        };
        S.prototype.qm = function(a, b) {
            x(a);
            var c, d;
            c = 0;
            for (d = ra.length; c < d; c++) ra[c].aH(0 === b)
        };
        S.prototype.rm = function(a, b) {
            x(a);
            var c, d;
            c = 0;
            for (d = ra.length; c < d; c++) ra[c].Nx(0 === b)
        };
        S.prototype.Xj = function(a, b) {
            x(a);
            var c = f(b),
                d, e;
            d = 0;
            for (e = ra.length; d < e; d++) ra[d].fH(c)
        };
        S.prototype.qC = function(a, b) {
            x(a);
            0 > b && (b = 0);
            var c, d;
            c = 0;
            for (d = ra.length; c < d; c++) ra[c].bH(b)
        };
        S.prototype.yu = function(a) {
            x(a);
            var b;
            a = 0;
            for (b = ra.length; a < b; a++) ra[a].stop()
        };
        S.prototype.FC = function() {
            var a, b;
            a = 0;
            for (b = B.length; a < b; a++) B[a].stop()
        };
        S.prototype.oC = function(a, b) {
            x(a);
            var c, d;
            c = 0;
            for (d = ra.length; c < d; c++) 0 === b ? ra[c].pause() : ra[c].Bx()
        };
        S.prototype.kC = function(a) {
            J = f(a);
            var b;
            a = 0;
            for (b = B.length; a < b; a++) B[a].kt()
        };
        w.n = new S;
        w.u = new function() {}
    })();

function Z(f) {
        this.b = f
    }
    (function() {
        function f() {
            b && r && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(a) {
                d.lG(a)
            })
        }

        function p() {}

        function n() {}

        function h(a) {
            console && console.warn && console.warn("Fullscreen request failed: ", a);
            g.setSize(window.innerWidth, window.innerHeight)
        }

        function l() {}
        var c = Z.prototype;
        c.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        var e = c.N.prototype;
        e.J = function() {};
        var b = !1,
            r = !1;
        document.addEventListener("DOMContentLoaded", function() {
            if (window.C2_RegisterSW && navigator.qd) {
                var a = document.createElement("script");
                a.onload = function() {
                    b = !0;
                    f()
                };
                a.src = "offlineClient.js";
                document.head.appendChild(a)
            }
        });
        var d = null;
        e.Vw = function() {
            r = !0;
            f()
        };
        c.K = function(a) {
            this.type = a;
            this.b = a.b
        };
        e = c.K.prototype;
        e.J = function() {
            var a = this;
            window.addEventListener("resize", function() {
                a.b.trigger(Z.prototype.k.mu, a)
            });
            d = this;
            "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
                a.b.trigger(Z.prototype.k.$A, a)
            }), window.addEventListener("offline", function() {
                a.b.trigger(Z.prototype.k.YA, a)
            }));
            "undefined" !== typeof window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                a.b.gj = 1;
                a.b.trigger(Z.prototype.k.pm, a)
            }), window.applicationCache.addEventListener("progress", function(b) {
                a.b.gj = b.loaded / b.total || 0
            }));
            this.b.hc || (document.addEventListener("appMobi.device.update.available", function() {
                a.b.trigger(Z.prototype.k.pm, a)
            }), document.addEventListener("backbutton", function() {
                a.b.trigger(Z.prototype.k.Uj, a)
            }), document.addEventListener("menubutton", function() {
                a.b.trigger(Z.prototype.k.gu, a)
            }), document.addEventListener("searchbutton", function() {
                a.b.trigger(Z.prototype.k.jB, a)
            }), document.addEventListener("tizenhwkey", function(b) {
                var c;
                switch (b.keyName) {
                    case "back":
                        c = a.b.trigger(Z.prototype.k.Uj, a);
                        !c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        (c = a.b.trigger(Z.prototype.k.gu, a)) || b.preventDefault()
                }
            }));
            this.b.Qn && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(b) {
                a.b.trigger(Z.prototype.k.Uj, a) && (b.handled = !0)
            }) : this.b.Pn && WinJS.Application && (WinJS.Application.onbackclick = function() {
                return !!a.b.trigger(Z.prototype.k.Uj, a)
            });
            this.b.Vp(function(b) {
                b ? a.b.trigger(Z.prototype.k.aB, a) : a.b.trigger(Z.prototype.k.bB, a)
            });
            this.pr = "undefined" !== typeof window.is_scirra_arcade
        };
        e.lG = function(a) {
            a = a.data.type;
            "downloading-update" === a ? this.b.trigger(Z.prototype.k.sB, this) : "update-ready" === a || "update-pending" === a ? this.b.trigger(Z.prototype.k.pm, this) : "offline-ready" === a && this.b.trigger(Z.prototype.k.ZA, this)
        };
        p.prototype.$A = function() {
            return !0
        };
        p.prototype.YA = function() {
            return !0
        };
        p.prototype.pm = function() {
            return !0
        };
        p.prototype.bB = function() {
            return !0
        };
        p.prototype.aB = function() {
            return !0
        };
        p.prototype.mu = function() {
            return !0
        };
        p.prototype.Dz = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.b.Ve)
        };
        p.prototype.Uj = function() {
            return !0
        };
        p.prototype.gu = function() {
            return !0
        };
        p.prototype.jB = function() {
            return !0
        };
        p.prototype.Nz = function(a) {
            return (window.innerWidth <= window.innerHeight ? 0 : 1) === a
        };
        p.prototype.sB = function() {
            return !0
        };
        p.prototype.pm = function() {
            return !0
        };
        p.prototype.ZA = function() {
            return !0
        };
        c.k = new p;
        n.prototype.Vy = function() {
            this.b.dd ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.pr || this.b.ba || window.close()
        };
        n.prototype.qz = function(a, b) {
            alert("4399")
        };
        n.prototype.GB = function() {
            this.pr || this.b.ba || window.location.reload()
        };
        var a = !0,
            g = null;
        n.prototype.JB = function(b) {
            this.b.ba ? ha("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored") : (2 <= b && (b += 1), 6 === b && (b = 2), this.b.Nn ? this.b.Sv ? debuggerFullscreen(!0) : !this.b.Ve && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.b.Ve = !0, this.b.Ff = 2 <= b ? b : 0) : document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement || (this.b.Ff = 2 <= b ? b : 0, b = document.documentElement, a && (a = !1, g = this.b, b.addEventListener("mozfullscreenerror", h), b.addEventListener("webkitfullscreenerror", h), b.addEventListener("MSFullscreenError", h), b.addEventListener("fullscreenerror", h)), b.requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.webkitRequestFullScreen && ("undefined" !== typeof Element && "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : b.webkitRequestFullScreen())))
        };
        n.prototype.Qy = function() {
            this.b.ba ? ha("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.b.Nn ? this.b.Sv ? debuggerFullscreen(!1) : this.b.Ve && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.b.Ve = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        };
        n.prototype.PC = function(a) {
            try {
                var b = a.split(","),
                    c, d;
                c = 0;
                for (d = b.length; c < d; c++) b[c] = parseInt(b[c], 10);
                navigator.vibrate ? navigator.vibrate(b) : navigator.mozVibrate ? navigator.mozVibrate(b) : navigator.webkitVibrate ? navigator.webkitVibrate(b) : navigator.msVibrate && navigator.msVibrate(b)
            } catch (e) {}
        };
        c.n = new n;
        l.prototype.sz = function(a) {
            a.Qa(this.b.ba ? "" : window.location.hash)
        };
        l.prototype.SC = function(a) {
            a.ca(window.innerWidth)
        };
        l.prototype.RC = function(a) {
            a.ca(window.innerHeight)
        };
        c.u = new l
    })();

function Cc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Cc.prototype;
        h.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var l = h.K.prototype;
        l.J = function() {
            this.wb = {};
            this.kq = "";
            this.Eh = 0
        };
        l.Wa = function() {
            return this.wb
        };
        l.bb = function(c) {
            this.wb = c;
            this.Eh = 0;
            for (var e in this.wb) this.wb.hasOwnProperty(e) && this.Eh++
        };
        f.prototype.xt = function(c, e, b) {
            return nc(this.wb[c], e, b)
        };
        f.prototype.kz = function() {
            var c = this.b.fb().hb,
                e;
            for (e in this.wb) this.wb.hasOwnProperty(e) && (this.kq = e, this.b.Qg(c.wa), c.Rg(), this.b.ye(c.wa));
            this.kq = "";
            return !1
        };
        f.prototype.Yy = function(c, e) {
            return nc(this.wb[this.kq], c, e)
        };
        f.prototype.rz = function(c) {
            return this.wb.hasOwnProperty(c)
        };
        h.k = new f;
        p.prototype.Jy = function(c, e) {
            this.wb.hasOwnProperty(c) || this.Eh++;
            this.wb[c] = e
        };
        p.prototype.dC = function(c, e) {
            this.wb.hasOwnProperty(c) && (this.wb[c] = e)
        };
        p.prototype.Sy = function() {
            bb(this.wb);
            this.Eh = 0
        };
        p.prototype.Uz = function(c) {
            var e;
            try {
                e = JSON.parse(c)
            } catch (b) {
                return
            }
            if (e.c2dictionary) {
                this.wb = e.data;
                this.Eh = 0;
                for (var f in this.wb) this.wb.hasOwnProperty(f) && this.Eh++
            }
        };
        p.prototype.Et = function(c) {
            var e = document.createElement("a");
            if ("undefined" === typeof e.qd) e = "data:text/html," + encodeURIComponent("<p><a download='data.json' href=\"data:application/json," + encodeURIComponent(JSON.stringify({
                c2dictionary: !0,
                data: this.wb
            })) + '">Download link</a></p>'), window.open("7k7k.com");
            else {
                var b = document.getElementsByTagName("body")[0];
                e.textContent = c;
                e.href = "data:application/json," + encodeURIComponent(JSON.stringify({
                    c2dictionary: !0,
                    data: this.wb
                }));
                e.qd = c;
                b.appendChild(e);
                c = document.createEvent("MouseEvent");
                c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                e.dispatchEvent(c);
                b.removeChild(e)
            }
        };
        h.n = new p;
        n.prototype.mz = function(c, e) {
            this.wb.hasOwnProperty(e) ? c.El(this.wb[e]) : c.ca(0)
        };
        n.prototype.Ft = function(c) {
            c.ca(this.Eh)
        };
        n.prototype.vp = function(c) {
            c.Qa(JSON.stringify({
                c2dictionary: !0,
                data: this.wb
            }))
        };
        h.u = new n
    })();

function zc(f) {
        this.b = f
    }
    (function() {
        function f() {
            this.name = "";
            this.yl = 0;
            this.Ab = []
        }

        function p() {
            b++;
            b === e.length && e.push(new f);
            return e[b]
        }

        function n() {}

        function h() {}

        function l() {}
        var c = zc.prototype;
        c.N = function(b) {
            this.X = b;
            this.b = b.b
        };
        c.N.prototype.J = function() {};
        c.K = function(b) {
            this.type = b;
            this.b = b.b
        };
        var e = [],
            b = -1;
        c.K.prototype.J = function() {
            var c = this;
            window.c2_callFunction = function(d, a) {
                var e, f, h, l = p();
                l.name = d.toLowerCase();
                l.yl = 0;
                if (a)
                    for (l.Ab.length = a.length, e = 0, f = a.length; e < f; ++e) h = a[e], l.Ab[e] = "number" === typeof h || "string" === typeof h ? h : "boolean" === typeof h ? h ? 1 : 0 : 0;
                else G(l.Ab);
                c.b.trigger(zc.prototype.k.nm, c, l.name);
                b--;
                return l.yl
            }
        };
        n.prototype.nm = function(c) {
            var d = 0 > b ? null : e[b];
            return d ? qb(c, d.name) : !1
        };
        n.prototype.bz = function(c, d, a) {
            var f = 0 > b ? null : e[b];
            if (!f) return !1;
            c = z(c);
            return 0 > c || c >= f.Ab.length ? !1 : nc(f.Ab[c], d, a)
        };
        c.k = new n;
        h.prototype.CallFunction = function(c, d) {
            var a = p();
            a.name = c.toLowerCase();
            a.yl = 0;
            Ha(a.Ab, d);
            this.b.trigger(zc.prototype.k.nm, this, a.name);
            b--
        };
        c.n = new h;
        l.prototype.vB = function(c, d) {
            d = z(d);
            var a = 0 > b ? null : e[b];
            a ? 0 <= d && d < a.Ab.length ? c.El(a.Ab[d]) : c.ca(0) : c.ca(0)
        };
        l.prototype.Py = function(c, d) {
            var a = p();
            a.name = d.toLowerCase();
            a.yl = 0;
            G(a.Ab);
            var e, f;
            e = 2;
            for (f = arguments.length; e < f; e++) a.Ab.push(arguments[e]);
            this.b.trigger(zc.prototype.k.nm, this, a.name);
            b--;
            c.El(a.yl)
        };
        c.u = new l
    })();

function Dc(f) {
        this.b = f
    }
    (function() {
        function f() {}
        var p = Dc.prototype;
        p.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        p.N.prototype.J = function() {};
        p.K = function(f) {
            this.type = f;
            this.b = f.b
        };
        var n = p.K.prototype;
        n.J = function() {
            "" != this.B[0] && "0" != this.B[0] || alert("Please enter your Google Analytics Tracking ID in Google Analytic Object's properties for Google Analytics to work!");
            ga("create", this.B[0], "auto");
            ga("send", "pageview")
        };
        n.Uc = function() {};
        n.Wa = function() {
            return {}
        };
        n.bb = function() {};
        n.xb = function() {};
        n.Za = function() {};
        p.k = new function() {};
        f.prototype.Pp = function(f, l) {
            ga("send", "event", f, l)
        };
        p.n = new f;
        p.u = new function() {}
    })();

function Ec(f) {
        this.b = f
    }
    (function() {
        function f() {}
        var p = Ec.prototype;
        p.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        p.N.prototype.J = function() {};
        p.K = function(f) {
            this.type = f;
            this.b = f.b;
            this.aj = Array(256);
            this.Tl = Array(256);
            this.hg = 0
        };
        var n = p.K.prototype;
        n.J = function() {
            var f = this;
            this.b.ba || (jQuery(document).keydown(function(c) {
                f.ml(c)
            }), jQuery(document).keyup(function(c) {
                f.nl(c)
            }))
        };
        var h = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
        n.ml = function(f) {
            var c = !1;
            window != window.top && -1 < h.indexOf(f.which) && (f.preventDefault(), c = !0, f.stopPropagation());
            if (this.aj[f.which]) this.Tl[f.which] && !c && f.preventDefault();
            else {
                this.aj[f.which] = !0;
                this.hg = f.which;
                this.b.yb = !0;
                this.b.trigger(Ec.prototype.k.Nt, this);
                var e = this.b.trigger(Ec.prototype.k.Zt, this),
                    b = this.b.trigger(Ec.prototype.k.OA, this);
                this.b.yb = !1;
                if (e || b) this.Tl[f.which] = !0, c || f.preventDefault()
            }
        };
        n.nl = function(f) {
            this.aj[f.which] = !1;
            this.hg = f.which;
            this.b.yb = !0;
            this.b.trigger(Ec.prototype.k.Ot, this);
            var c = this.b.trigger(Ec.prototype.k.Fp, this),
                e = this.b.trigger(Ec.prototype.k.$t, this);
            this.b.yb = !1;
            if (c || e || this.Tl[f.which]) this.Tl[f.which] = !0, f.preventDefault()
        };
        n.Tf = function() {
            var f;
            for (f = 0; 256 > f; ++f)
                if (this.aj[f]) {
                    this.aj[f] = !1;
                    this.hg = f;
                    this.b.trigger(Ec.prototype.k.Ot, this);
                    var c = this.b.trigger(Ec.prototype.k.Fp, this),
                        e = this.b.trigger(Ec.prototype.k.$t, this);
                    if (c || e) this.Tl[f] = !0
                }
        };
        n.Wa = function() {
            return {
                triggerKey: this.hg
            }
        };
        n.bb = function(f) {
            this.hg = f.triggerKey
        };
        f.prototype.Gz = function(f) {
            return this.aj[f]
        };
        f.prototype.Zt = function(f) {
            return f === this.hg
        };
        f.prototype.Nt = function() {
            return !0
        };
        f.prototype.Ot = function() {
            return !0
        };
        f.prototype.Fp = function(f) {
            return f === this.hg
        };
        f.prototype.OA = function(f) {
            return f === this.hg
        };
        f.prototype.$t = function(f) {
            return f === this.hg
        };
        p.k = new f;
        p.n = new function() {};
        p.u = new function() {}
    })();
var Fc = !1;
try {
    ! function() {
        var f, p, n;
        ! function() {
            var h = {},
                l = {};
            f = function(c, e, b) {
                h[c] = {
                    wD: e,
                    lD: b
                }
            };
            n = p = function(c) {
                function e(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = c.split("/").slice(0, -1), d = 0, e = a.length; e > d; d++) {
                        var f = a[d];
                        ".." === f ? b.pop() : "." !== f && b.push(f)
                    }
                    return b.join("/")
                }
                if (n.$H = h, l[c]) return l[c];
                if (l[c] = {}, !h[c]) throw Error("Could not find module " + c);
                for (var b, f = h[c], d = f.wD, f = f.lD, a = [], g = 0, m = d.length; m > g; g++) "exports" === d[g] ? a.push(b = {}) : a.push(p(e(d[g])));
                d = f.apply(this, a);
                return l[c] = b || d
            }
        }();
        f("promise/all", ["./utils", "exports"], function(f, l) {
            var c = f.isArray,
                e = f.isFunction;
            l.all = function(b) {
                if (!c(b)) throw new TypeError("You must pass an array to all.");
                return new this(function(c, d) {
                    function a(a) {
                        return function(b) {
                            h[a] = b;
                            0 === --k && c(h)
                        }
                    }
                    var f, h = [],
                        k = b.length;
                    0 === k && c([]);
                    for (var l = 0; l < b.length; l++)(f = b[l]) && e(f.then) ? f.then(a(l), d) : (h[l] = f, 0 === --k && c(h))
                })
            }
        });
        f("promise/asap", ["exports"], function(f) {
            function l() {
                return function() {
                    process.nI(b)
                }
            }

            function c() {
                var c = 0,
                    d = new a(b),
                    e = document.createTextNode("");
                return d.observe(e, {
                        characterData: !0
                    }),
                    function() {
                        e.data = c = ++c % 2
                    }
            }

            function e() {
                return function() {
                    g.setTimeout(b, 1)
                }
            }

            function b() {
                for (var a = 0; a < m.length; a++) {
                    var b = m[a];
                    (0, b[0])(b[1])
                }
                m = []
            }
            var r, d = "undefined" != typeof window ? window : {},
                a = d.MutationObserver || d.WebKitMutationObserver,
                g = "undefined" != typeof global ? global : void 0 === this ? window : this,
                m = [];
            r = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? l() : a ? c() : e();
            f.eD = function(a, b) {
                1 === m.push([a, b]) && r()
            }
        });
        f("promise/config", ["exports"], function(f) {
            var l = {
                gI: !1
            };
            f.bv = l;
            f.oD = function(c, e) {
                return 2 !== arguments.length ? l[c] : void(l[c] = e)
            }
        });
        f("promise/polyfill", ["./promise", "./utils", "exports"], function(f, l, c) {
            var e = f.Promise,
                b = l.isFunction;
            c.vG = function() {
                var c;
                c = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in c && "resolve" in c.Promise && "reject" in c.Promise && "all" in c.Promise && "race" in c.Promise && function() {
                    var d;
                    return new c.Promise(function(a) {
                        d = a
                    }), b(d)
                }() || (c.Promise = e)
            }
        });
        f("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(f, l, c, e, b, r, d, a) {
            function g(a) {
                if (!F(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof g)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.ym = [];
                m(a, this)
            }

            function m(a, b) {
                function c(a) {
                    q(b, a)
                }

                function d(a) {
                    u(b, a)
                }
                try {
                    a(c, d)
                } catch (e) {
                    d(e)
                }
            }

            function k(a, b, c, d) {
                var e, f, g, h, k = F(c);
                if (k) try {
                    e = c(d), g = !0
                } catch (m) {
                    h = !0, f = m
                } else e = d, g = !0;
                p(b, e) || (k && g ? q(b, e) : h ? u(b, f) : a === K ? q(b, e) : a === P && u(b, e))
            }

            function t(a, b, c, d) {
                a = a.ym;
                var e = a.length;
                a[e] = b;
                a[e + K] = c;
                a[e + P] = d
            }

            function n(a, b) {
                for (var c, d, e = a.ym, f = a.xm, g = 0; g < e.length; g += 3) c = e[g], d = e[g + b], k(b, c, d, f);
                a.ym = null
            }

            function p(a, b) {
                var c, d = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (E(b) && (d = b.then, F(d))) return d.call(b, function(d) {
                        return c ? !0 : (c = !0, void(b !== d ? q(a, d) : v(a, d)))
                    }, function(b) {
                        return c ? !0 : (c = !0, void u(a, b))
                    }), !0
                } catch (e) {
                    return c ? !0 : (u(a, e), !0)
                }
                return !1
            }

            function q(a, b) {
                a === b ? v(a, b) : p(a, b) || v(a, b)
            }

            function v(a, b) {
                a.tf === S && (a.tf = w, a.xm = b, x.async(I, a))
            }

            function u(a, b) {
                a.tf === S && (a.tf = w, a.xm = b, x.async(D, a))
            }

            function I(a) {
                n(a, a.tf = K)
            }

            function D(a) {
                n(a, a.tf = P)
            }
            var x = f.bv,
                E = (f.oD, l.gG),
                F = l.isFunction;
            f = (l.now, c.all);
            e = e.race;
            b = b.resolve;
            r = r.reject;
            x.async = d.eD;
            var S = void 0,
                w = 0,
                K = 1,
                P = 2;
            g.prototype = {
                constructor: g,
                tf: void 0,
                xm: void 0,
                ym: void 0,
                then: function(a, b) {
                    var c = this,
                        d = new this.constructor(function() {});
                    if (this.tf) {
                        var e = arguments;
                        x.async(function() {
                            k(c.tf, d, e[c.tf - 1], c.xm)
                        })
                    } else t(this, d, a, b);
                    return d
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            g.all = f;
            g.race = e;
            g.resolve = b;
            g.reject = r;
            a.Promise = g
        });
        f("promise/race", ["./utils", "exports"], function(f, l) {
            var c = f.isArray;
            l.race = function(e) {
                if (!c(e)) throw new TypeError("You must pass an array to race.");
                return new this(function(b, c) {
                    for (var d, a = 0; a < e.length; a++)(d = e[a]) && "function" == typeof d.then ? d.then(b, c) : b(d)
                })
            }
        });
        f("promise/reject", ["exports"], function(f) {
            f.reject = function(f) {
                return new this(function(c, e) {
                    e(f)
                })
            }
        });
        f("promise/resolve", ["exports"], function(f) {
            f.resolve = function(f) {
                return f && "object" == typeof f && f.constructor === this ? f : new this(function(c) {
                    c(f)
                })
            }
        });
        f("promise/utils", ["exports"], function(f) {
            function l(c) {
                return "function" == typeof c
            }
            var c = Date.now || function() {
                return (new Date).getTime()
            };
            f.gG = function(c) {
                return l(c) || "object" == typeof c && null !== c
            };
            f.isFunction = l;
            f.isArray = function(c) {
                return "[object Array]" === Object.prototype.toString.call(c)
            };
            f.now = c
        });
        p("promise/polyfill").vG()
    }();
    var Gc = function() {
        return function(f) {
            function p(h) {
                if (n[h]) return n[h].Oe;
                var l = n[h] = {
                    Oe: {},
                    id: h,
                    loaded: !1
                };
                return f[h].call(l.Oe, l, l.Oe, p), l.loaded = !0, l.Oe
            }
            var n = {};
            return p.qd = f, p.fk = n, p.Pk = "", p(0)
        }([
            function(f, p, n) {
                p.wm = !0;
                var h = function(f) {
                    function c(a, b) {
                        a[b] = function() {
                            var c = arguments;
                            return a.ready().then(function() {
                                return a[b].apply(a, c)
                            })
                        }
                    }

                    function e() {
                        for (var a = 1; a < arguments.length; a++) {
                            var b = arguments[a];
                            if (b)
                                for (var c in b) b.hasOwnProperty(c) && (k(b[c]) ? arguments[0][c] = b[c].slice() : arguments[0][c] = b[c])
                        }
                        return arguments[0]
                    }

                    function b(a) {
                        for (var b in d)
                            if (d.hasOwnProperty(b) && d[b] === a) return !0;
                        return !1
                    }
                    var h = {},
                        d = {
                            Sj: "asyncStorage",
                            Tj: "localStorageWrapper",
                            Zj: "webSQLStorage"
                        },
                        a = "clear getItem iterate key keys length removeItem setItem".split(" "),
                        g = {
                            description: "",
                            Bi: [d.Sj, d.Zj, d.Tj].slice(),
                            name: "localforage",
                            size: 4980736,
                            Oa: "keyvaluepairs",
                            version: 1
                        },
                        m = function(a) {
                            var b = {},
                                c;
                            try {
                                var e = e || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.Yv || a.msIndexedDB;
                                c = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : e && "function" == typeof e.open && "undefined" != typeof a.IDBKeyRange
                            } catch (f) {
                                c = !1
                            }
                            b[d.Sj] = !!c;
                            var g;
                            try {
                                g = a.openDatabase
                            } catch (h) {
                                g = !1
                            }
                            b[d.Zj] = !!g;
                            var k;
                            try {
                                k = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                            } catch (m) {
                                k = !1
                            }
                            return b[d.Tj] = !!k, b
                        }(f),
                        k = Array.isArray || function(a) {
                            return "[object Array]" === Object.prototype.toString.call(a)
                        };
                    return new(function() {
                        function f(a) {
                            if (!(this instanceof f)) throw new TypeError("Cannot call a class as a function");
                            this.Sj = d.Sj;
                            this.Tj = d.Tj;
                            this.Zj = d.Zj;
                            this.Sp = e({}, g);
                            this.bh = e({}, this.Sp, a);
                            this.Du = this.Je = null;
                            this.mg = !1;
                            this.Ia = null;
                            this.Eu();
                            this.Jx(this.bh.Bi)
                        }
                        return f.prototype.bv = function(a) {
                            if ("object" == typeof a) {
                                if (this.mg) return Error("Can't call config() after localforage has been used.");
                                for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.bh[b] = a[b];
                                return "driver" in a && a.Bi && this.Jx(this.bh.Bi), !0
                            }
                            return "string" == typeof a ? this.bh[a] : this.bh
                        }, f.prototype.Bi = function() {
                            return this.ak || null
                        }, f.prototype.Bv = function(a, c, d) {
                            var e = this,
                                f = function() {
                                    if (b(a)) switch (a) {
                                        case e.Sj:
                                            return new Promise(function(a) {
                                                a(n(1))
                                            });
                                        case e.Tj:
                                            return new Promise(function(a) {
                                                a(n(2))
                                            });
                                        case e.Zj:
                                            return new Promise(function(a) {
                                                a(n(4))
                                            })
                                    } else if (h[a]) return Promise.resolve(h[a]);
                                    return Promise.reject(Error("Driver not found."))
                                }();
                            return f.then(c, d), f
                        }, f.prototype.ready = function(a) {
                            var b = this,
                                c = b.Je.then(function() {
                                    return null === b.mg && (b.mg = b.Du()), b.mg
                                });
                            return c.then(a, a), c
                        }, f.prototype.Jx = function(a, b, c) {
                            function d() {
                                f.bh.Bi = f.Bi()
                            }

                            function e(a) {
                                return function() {
                                    function b() {
                                        for (; c < a.length;) {
                                            var e = a[c];
                                            return c++, f.Ia = null, f.mg = null, f.Bv(e).then(function(a) {
                                                return f.TC(a), d(), f.mg = f.Up(f.bh), f.mg
                                            })["catch"](b)
                                        }
                                        d();
                                        return f.Je = Promise.reject(Error("No available storage method found.")), f.Je
                                    }
                                    var c = 0;
                                    return b()
                                }
                            }
                            var f = this;
                            k(a) || (a = [a]);
                            var g = this.UC(a);
                            return this.Je = (null !== this.Je ? this.Je["catch"](function() {
                                return Promise.resolve()
                            }) : Promise.resolve()).then(function() {
                                var a = g[0];
                                return f.Ia = null, f.mg = null, f.Bv(a).then(function(a) {
                                    f.ak = a.ak;
                                    d();
                                    f.Eu();
                                    f.Du = e(g)
                                })
                            })["catch"](function() {
                                d();
                                return f.Je = Promise.reject(Error("No available storage method found.")), f.Je
                            }), this.Je.then(b, c), this.Je
                        }, f.prototype.supports = function(a) {
                            return !!m[a]
                        }, f.prototype.TC = function(a) {
                            e(this, a)
                        }, f.prototype.UC = function(a) {
                            for (var b = [], c = 0, d = a.length; d > c; c++) {
                                var e = a[c];
                                this.supports(e) && b.push(e)
                            }
                            return b
                        }, f.prototype.Eu = function() {
                            for (var b = 0; b < a.length; b++) c(this, a[b])
                        }, f.prototype.Vm = function(a) {
                            return new f(a)
                        }, f
                    }())
                }("undefined" != typeof window ? window : self);
                p["default"] = h;
                f.Oe = p["default"]
            },
            function(f, p) {
                p.wm = !0;
                p["default"] = function(f) {
                    function h(a, b) {
                        a = a || [];
                        b = b || {};
                        try {
                            return new Blob(a, b)
                        } catch (c) {
                            if ("TypeError" !== c.name) throw c;
                            for (var d = new(f.BlobBuilder || f.qd || f.Pk || f.WebKitBlobBuilder), e = 0; e < a.length; e += 1) d.append(a[e]);
                            return d.getBlob(b.type)
                        }
                    }

                    function l(a) {
                        return new Promise(function(b, c) {
                            var d = new XMLHttpRequest;
                            d.open("GET", a);
                            d.withCredentials = !0;
                            d.responseType = "arraybuffer";
                            d.onreadystatechange = function() {
                                return 4 === d.readyState ? 200 === d.status ? b({
                                    response: d.response,
                                    type: d.getResponseHeader("Content-Type")
                                }) : void c({
                                    status: d.status,
                                    response: d.response
                                }) : void 0
                            };
                            d.send()
                        })
                    }

                    function c(a) {
                        return (new Promise(function(b, c) {
                            var d = h([""], {
                                    type: "image/png"
                                }),
                                e = a.transaction([S], "readwrite");
                            e.objectStore(S).put(d, "key");
                            e.oncomplete = function() {
                                var d = a.transaction([S], "readwrite").objectStore(S).get("key");
                                d.onerror = c;
                                d.onsuccess = function(a) {
                                    var c = URL.createObjectURL(a.target.result);
                                    l(c).then(function(a) {
                                        b(!(!a || "image/png" !== a.type))
                                    }, function() {
                                        b(!1)
                                    }).then(function() {
                                        URL.revokeObjectURL(c)
                                    })
                                }
                            };
                            e.onerror = e.onabort = c
                        }))["catch"](function() {
                            return !1
                        })
                    }

                    function e(a) {
                        return "boolean" == typeof E ? Promise.resolve(E) : c(a).then(function(a) {
                            return E = a
                        })
                    }

                    function b(a) {
                        return new Promise(function(b, c) {
                            var d = new FileReader;
                            d.onerror = c;
                            d.onloadend = function(c) {
                                b({
                                    Cu: !0,
                                    data: btoa(c.target.result || ""),
                                    type: a.type
                                })
                            };
                            d.readAsBinaryString(a)
                        })
                    }

                    function r(a) {
                        for (var b = atob(a.data), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d), f = 0; c > f; f++) e[f] = b.charCodeAt(f);
                        return h([d], {
                            type: a.type
                        })
                    }

                    function d(a) {
                        var b = this,
                            c = b.Tp().then(function() {
                                var a = F[b.Ia.name];
                                return a && a.xi ? a.xi : void 0
                            });
                        return c.then(a, a), c
                    }

                    function a(a) {
                        a = F[a.name];
                        var b = {};
                        b.promise = new Promise(function(a) {
                            b.resolve = a
                        });
                        a.hv.push(b);
                        a.xi ? a.xi = a.xi.then(function() {
                            return b.promise
                        }) : a.xi = b.promise
                    }

                    function g(a) {
                        function b() {
                            return Promise.resolve()
                        }
                        var c = this,
                            e = {
                                db: null
                            };
                        if (a)
                            for (var g in a) e[g] = a[g];
                        F || (F = {});
                        var h = F[e.name];
                        h || (h = {
                            wn: [],
                            db: null,
                            xi: null,
                            hv: []
                        }, F[e.name] = h);
                        h.wn.push(c);
                        c.Tp || (c.Tp = c.ready, c.ready = d);
                        a = [];
                        for (g = 0; g < h.wn.length; g++) {
                            var k = h.wn[g];
                            k !== c && a.push(k.Tp()["catch"](b))
                        }
                        var r = h.wn.slice(0);
                        return Promise.all(a).then(function() {
                            return e.db = h.db, m(e, !1)
                        }).then(function(a) {
                            e.db = a;
                            var b;
                            b = c.Sp.version;
                            if (e.db) {
                                var d = !e.db.objectStoreNames.contains(e.Oa),
                                    g = e.version > e.db.version;
                                (e.version < e.db.version && (e.version !== b && f.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), g || d) ? (d && (b = e.db.version + 1, b > e.version && (e.version = b)), b = !0) : b = !1
                            } else b = !0;
                            return b ? m(e, !0) : a
                        }).then(function(a) {
                            e.db = h.db = a;
                            c.Ia = e;
                            for (a = 0; a < r.length; a++) {
                                var b = r[a];
                                b !== c && (b.Ia.db = e.db, b.Ia.version = e.version)
                            }
                        })
                    }

                    function m(b, c) {
                        return new Promise(function(d, e) {
                            if (b.db) {
                                if (!c) return d(b.db);
                                a(b);
                                b.db.close()
                            }
                            var g = [b.name];
                            c && g.push(b.version);
                            var h = x.open.apply(x, g);
                            c && (h.onupgradeneeded = function(a) {
                                var c = h.result;
                                try {
                                    c.createObjectStore(b.Oa), 1 >= a.oldVersion && c.createObjectStore(S)
                                } catch (d) {
                                    if ("ConstraintError" !== d.name) throw d;
                                    f.console.warn('The database "' + b.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + b.Oa + '" already exists.')
                                }
                            });
                            h.onerror = function() {
                                e(h.error)
                            };
                            h.onsuccess = function() {
                                d(h.result);
                                var a = F[b.name].hv.pop();
                                a && a.resolve()
                            }
                        })
                    }

                    function k(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.Ia,
                                    f = e.db.transaction(e.Oa, "readonly").objectStore(e.Oa).get(a);
                                f.onsuccess = function() {
                                    var a = f.result;
                                    void 0 === a && (a = null);
                                    a && a.Cu && (a = r(a));
                                    b(a)
                                };
                                f.onerror = function() {
                                    d(f.error)
                                }
                            })["catch"](d)
                        });
                        return D(d, b), d
                    }

                    function t(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var e = c.Ia,
                                        f = e.db.transaction(e.Oa, "readonly").objectStore(e.Oa).openCursor(),
                                        g = 1;
                                    f.onsuccess = function() {
                                        var c = f.result;
                                        if (c) {
                                            var d = c.value;
                                            d && d.Cu && (d = r(d));
                                            d = a(d, c.key, g++);
                                            void 0 !== d ? b(d) : c["continue"]()
                                        } else b()
                                    };
                                    f.onerror = function() {
                                        d(f.error)
                                    }
                                })["catch"](d)
                            });
                        return D(d, b), d
                    }

                    function p(a, c, d) {
                        var g = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var h = new Promise(function(d, f) {
                            var h;
                            g.ready().then(function() {
                                return h = g.Ia, c instanceof Blob ? e(h.db).then(function(a) {
                                    return a ? c : b(c)
                                }) : c
                            }).then(function(b) {
                                var c = h.db.transaction(h.Oa, "readwrite"),
                                    e = c.objectStore(h.Oa);
                                null === b && (b = void 0);
                                c.oncomplete = function() {
                                    void 0 === b && (b = null);
                                    d(b)
                                };
                                c.onabort = c.onerror = function() {
                                    f(g.error ? g.error : g.transaction.error)
                                };
                                var g = e.put(b, a)
                            })["catch"](f)
                        });
                        return D(h, d), h
                    }

                    function C(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.Ia,
                                    f = e.db.transaction(e.Oa, "readwrite"),
                                    g = f.objectStore(e.Oa)["delete"](a);
                                f.oncomplete = function() {
                                    b()
                                };
                                f.onerror = function() {
                                    d(g.error)
                                };
                                f.onabort = function() {
                                    d(g.error ? g.error : g.transaction.error)
                                }
                            })["catch"](d)
                        });
                        return D(d, b), d
                    }

                    function q(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia,
                                        e = d.db.transaction(d.Oa, "readwrite"),
                                        f = e.objectStore(d.Oa).clear();
                                    e.oncomplete = function() {
                                        a()
                                    };
                                    e.onabort = e.onerror = function() {
                                        c(f.error ? f.error : f.transaction.error)
                                    }
                                })["catch"](c)
                            });
                        return D(c, a), c
                    }

                    function v(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia,
                                        e = d.db.transaction(d.Oa, "readonly").objectStore(d.Oa).count();
                                    e.onsuccess = function() {
                                        a(e.result)
                                    };
                                    e.onerror = function() {
                                        c(e.error)
                                    }
                                })["catch"](c)
                            });
                        return D(c, a), c
                    }

                    function u(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                return 0 > a ? void b(null) : void c.ready().then(function() {
                                    var e = c.Ia,
                                        f = !1,
                                        g = e.db.transaction(e.Oa, "readonly").objectStore(e.Oa).openCursor();
                                    g.onsuccess = function() {
                                        var c = g.result;
                                        return c ? void(0 === a ? b(c.key) : f ? b(c.key) : (f = !0, c.advance(a))) : void b(null)
                                    };
                                    g.onerror = function() {
                                        d(g.error)
                                    }
                                })["catch"](d)
                            });
                        return D(d, b), d
                    }

                    function I(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia,
                                        e = d.db.transaction(d.Oa, "readonly").objectStore(d.Oa).openCursor(),
                                        f = [];
                                    e.onsuccess = function() {
                                        var b = e.result;
                                        return b ? (f.push(b.key), void b["continue"]()) : void a(f)
                                    };
                                    e.onerror = function() {
                                        c(e.error)
                                    }
                                })["catch"](c)
                            });
                        return D(c, a), c
                    }

                    function D(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var x = x || f.indexedDB || f.webkitIndexedDB || f.mozIndexedDB || f.Yv || f.msIndexedDB;
                    if (x) {
                        var E, F, S = "local-forage-detect-blob-support";
                        return {
                            ak: "asyncStorage",
                            Up: g,
                            Wv: t,
                            getItem: k,
                            setItem: p,
                            removeItem: C,
                            clear: q,
                            length: v,
                            key: u,
                            keys: I
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Oe = p["default"]
            },
            function(f, p, n) {
                p.wm = !0;
                p["default"] = function(f) {
                    function l(b, c) {
                        c && b.then(function(b) {
                            c(null, b)
                        }, function(b) {
                            c(b)
                        })
                    }
                    var c = null;
                    try {
                        if (!(f.localStorage && "setItem" in f.localStorage)) return;
                        c = f.localStorage
                    } catch (e) {
                        return
                    }
                    return {
                        ak: "localStorageWrapper",
                        Up: function(b) {
                            var c = {};
                            if (b)
                                for (var d in b) c[d] = b[d];
                            return c.Xe = c.name + "/", c.Oa !== this.Sp.Oa && (c.Xe += c.Oa + "/"), this.Ia = c, (new Promise(function(a) {
                                a(n(3))
                            })).then(function(a) {
                                return c.Xh = a, Promise.resolve()
                            })
                        },
                        Wv: function(b, e) {
                            var d = this,
                                a = d.ready().then(function() {
                                    for (var a = d.Ia, e = a.Xe, f = e.length, h = c.length, r = 1, l = 0; h > l; l++) {
                                        var q = c.key(l);
                                        if (0 === q.indexOf(e)) {
                                            var n = c.getItem(q);
                                            if (n && (n = a.Xh.dn(n)), n = b(n, q.substring(f), r++), void 0 !== n) return n
                                        }
                                    }
                                });
                            return l(a, e), a
                        },
                        getItem: function(b, e) {
                            var d = this;
                            "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                            var a = d.ready().then(function() {
                                var a = d.Ia,
                                    e = c.getItem(a.Xe + b);
                                return e && (e = a.Xh.dn(e)), e
                            });
                            return l(a, e), a
                        },
                        setItem: function(b, e, d) {
                            var a = this;
                            "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                            var g = a.ready().then(function() {
                                void 0 === e && (e = null);
                                var d = e;
                                return new Promise(function(f, g) {
                                    var h = a.Ia;
                                    h.Xh.serialize(e, function(a, e) {
                                        if (e) g(e);
                                        else try {
                                            c.setItem(h.Xe +
                                                b, a), f(d)
                                        } catch (r) {
                                            "QuotaExceededError" !== r.name && "NS_ERROR_DOM_QUOTA_REACHED" !== r.name || g(r), g(r)
                                        }
                                    })
                                })
                            });
                            return l(g, d), g
                        },
                        removeItem: function(b, e) {
                            var d = this;
                            "string" != typeof b && (f.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                            var a = d.ready().then(function() {
                                c.removeItem(d.Ia.Xe + b)
                            });
                            return l(a, e), a
                        },
                        clear: function(b) {
                            var e = this,
                                d = e.ready().then(function() {
                                    for (var a = e.Ia.Xe, b = c.length - 1; 0 <= b; b--) {
                                        var d = c.key(b);
                                        0 === d.indexOf(a) && c.removeItem(d)
                                    }
                                });
                            return l(d, b), d
                        },
                        length: function(b) {
                            var c = this.keys().then(function(b) {
                                return b.length
                            });
                            return l(c, b), c
                        },
                        key: function(b, e) {
                            var d = this,
                                a = d.ready().then(function() {
                                    var a, e = d.Ia;
                                    try {
                                        a = c.key(b)
                                    } catch (f) {
                                        a = null
                                    }
                                    return a && (a = a.substring(e.Xe.length)), a
                                });
                            return l(a, e), a
                        },
                        keys: function(b) {
                            var e = this,
                                d = e.ready().then(function() {
                                    for (var a = e.Ia, b = c.length, d = [], f = 0; b > f; f++) 0 === c.key(f).indexOf(a.Xe) && d.push(c.key(f).substring(a.Xe.length));
                                    return d
                                });
                            return l(d, b), d
                        }
                    }
                }("undefined" != typeof window ? window : self);
                f.Oe = p["default"]
            },
            function(f, p) {
                p.wm = !0;
                p["default"] = function(f) {
                    function h(b) {
                        var e, d, a, f, h;
                        e = .75 * b.length;
                        var k = b.length,
                            l = 0;
                        "=" === b[b.length - 1] && (e--, "=" === b[b.length - 2] && e--);
                        var n = new ArrayBuffer(e),
                            p = new Uint8Array(n);
                        for (e = 0; k > e; e += 4) d = c.indexOf(b[e]), a = c.indexOf(b[e + 1]), f = c.indexOf(b[e + 2]), h = c.indexOf(b[e + 3]), p[l++] = d << 2 | a >> 4, p[l++] = (15 & a) << 4 | f >> 2, p[l++] = (3 & f) << 6 | 63 & h;
                        return n
                    }

                    function l(b) {
                        var e = new Uint8Array(b),
                            d = "";
                        for (b = 0; b < e.length; b += 3) d += c[e[b] >> 2], d += c[(3 & e[b]) << 4 | e[b + 1] >> 4], d += c[(15 & e[b + 1]) << 2 | e[b + 2] >> 6], d += c[63 & e[b + 2]];
                        return 2 === e.length % 3 ? d = d.substring(0, d.length - 1) + "=" : 1 === e.length % 3 && (d = d.substring(0, d.length - 2) + "=="), d
                    }
                    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        e = /^~~local_forage_type~([^~]+)~/;
                    return {
                        serialize: function(b, c) {
                            var d = "";
                            if (b && (d = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                                var a, e = "__lfsc__:";
                                b instanceof ArrayBuffer ? (a = b, e += "arbf") : (a = b.buffer, "[object Int8Array]" === d ? e += "si08" : "[object Uint8Array]" === d ? e += "ui08" : "[object Uint8ClampedArray]" === d ? e += "uic8" : "[object Int16Array]" === d ? e += "si16" : "[object Uint16Array]" === d ? e += "ur16" : "[object Int32Array]" === d ? e += "si32" : "[object Uint32Array]" === d ? e += "ui32" : "[object Float32Array]" === d ? e += "fl32" : "[object Float64Array]" === d ? e += "fl64" : c(Error("Failed to get type for BinaryArray")));
                                c(e + l(a))
                            } else if ("[object Blob]" === d) d = new FileReader, d.onload = function() {
                                var a = "~~local_forage_type~" + b.type + "~" + l(this.result);
                                c("__lfsc__:blob" + a)
                            }, d.readAsArrayBuffer(b);
                            else try {
                                c(JSON.stringify(b))
                            } catch (f) {
                                console.error("Couldn't convert value into a JSON string: ", b), c(null, f)
                            }
                        },
                        dn: function(b) {
                            if ("__lfsc__:" !== b.substring(0, 9)) return JSON.parse(b);
                            var c, d = b.substring(13);
                            b = b.substring(9, 13);
                            if ("blob" === b && e.test(d)) {
                                var a = d.match(e);
                                c = a[1];
                                d = d.substring(a[0].length)
                            }
                            d = h(d);
                            switch (b) {
                                case "arbf":
                                    return d;
                                case "blob":
                                    var g;
                                    d = [d];
                                    c = {
                                        type: c
                                    };
                                    d = d || [];
                                    c = c || {};
                                    try {
                                        g = new Blob(d, c)
                                    } catch (m) {
                                        if ("TypeError" !== m.name) throw m;
                                        g = new(f.BlobBuilder || f.qd || f.Pk || f.WebKitBlobBuilder);
                                        for (b = 0; b < d.length; b += 1) g.append(d[b]);
                                        g = g.getBlob(c.type)
                                    }
                                    return g;
                                case "si08":
                                    return new Int8Array(d);
                                case "ui08":
                                    return new Uint8Array(d);
                                case "uic8":
                                    return new Uint8ClampedArray(d);
                                case "si16":
                                    return new Int16Array(d);
                                case "ur16":
                                    return new Uint16Array(d);
                                case "si32":
                                    return new Int32Array(d);
                                case "ui32":
                                    return new Uint32Array(d);
                                case "fl32":
                                    return new Float32Array(d);
                                case "fl64":
                                    return new Float64Array(d);
                                default:
                                    throw Error("Unkown type: " + b);
                            }
                        },
                        wI: h,
                        bI: l
                    }
                }("undefined" != typeof window ? window : self);
                f.Oe = p["default"]
            },
            function(f, p, n) {
                p.wm = !0;
                p["default"] = function(f) {
                    function l(a) {
                        var b = this,
                            c = {
                                db: null
                            };
                        if (a)
                            for (var d in a) c[d] = "string" != typeof a[d] ? a[d].toString() : a[d];
                        var e = new Promise(function(a, d) {
                            try {
                                c.db = t(c.name, String(c.version), c.description, c.size)
                            } catch (e) {
                                return d(e)
                            }
                            c.db.transaction(function(e) {
                                e.executeSql("CREATE TABLE IF NOT EXISTS " + c.Oa + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                    b.Ia = c;
                                    a()
                                }, function(a, b) {
                                    d(b)
                                })
                            })
                        });
                        return (new Promise(function(a) {
                            a(n(3))
                        })).then(function(a) {
                            return c.Xh = a, e
                        })
                    }

                    function c(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.Ia;
                                e.db.transaction(function(c) {
                                    c.executeSql("SELECT * FROM " + e.Oa + " WHERE key = ? LIMIT 1", [a], function(a, c) {
                                        var d = c.rows.length ? c.rows.item(0).value : null;
                                        d && (d = e.Xh.dn(d));
                                        b(d)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return k(d, b), d
                    }

                    function e(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var e = c.Ia;
                                    e.db.transaction(function(c) {
                                        c.executeSql("SELECT * FROM " + e.Oa, [], function(c, d) {
                                            for (var f = d.rows, g = f.length, h = 0; g > h; h++) {
                                                var k = f.item(h),
                                                    m = k.value;
                                                if (m && (m = e.Xh.dn(m)), m = a(m, k.key, h + 1), void 0 !== m) return void b(m)
                                            }
                                            b()
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return k(d, b), d
                    }

                    function b(a, b, c) {
                        var d = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var e = new Promise(function(c, e) {
                            d.ready().then(function() {
                                void 0 === b && (b = null);
                                var f = b,
                                    g = d.Ia;
                                g.Xh.serialize(b, function(b, d) {
                                    d ? e(d) : g.db.transaction(function(d) {
                                        d.executeSql("INSERT OR REPLACE INTO " + g.Oa + " (key, value) VALUES (?, ?)", [a, b], function() {
                                            c(f)
                                        }, function(a, b) {
                                            e(b)
                                        })
                                    }, function(a) {
                                        a.code === a.QUOTA_ERR && e(a)
                                    })
                                })
                            })["catch"](e)
                        });
                        return k(e, c), e
                    }

                    function r(a, b) {
                        var c = this;
                        "string" != typeof a && (f.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                        var d = new Promise(function(b, d) {
                            c.ready().then(function() {
                                var e = c.Ia;
                                e.db.transaction(function(c) {
                                    c.executeSql("DELETE FROM " + e.Oa + " WHERE key = ?", [a], function() {
                                        b()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                        return k(d, b), d
                    }

                    function d(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia;
                                    d.db.transaction(function(b) {
                                        b.executeSql("DELETE FROM " + d.Oa, [], function() {
                                            a()
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return k(c, a), c
                    }

                    function a(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT COUNT(key) as c FROM " + d.Oa, [], function(b, c) {
                                            var d = c.rows.item(0).fk;
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return k(c, a), c
                    }

                    function g(a, b) {
                        var c = this,
                            d = new Promise(function(b, d) {
                                c.ready().then(function() {
                                    var e = c.Ia;
                                    e.db.transaction(function(c) {
                                        c.executeSql("SELECT key FROM " + e.Oa + " WHERE id = ? LIMIT 1", [a + 1], function(a, c) {
                                            var d = c.rows.length ? c.rows.item(0).key : null;
                                            b(d)
                                        }, function(a, b) {
                                            d(b)
                                        })
                                    })
                                })["catch"](d)
                            });
                        return k(d, b), d
                    }

                    function m(a) {
                        var b = this,
                            c = new Promise(function(a, c) {
                                b.ready().then(function() {
                                    var d = b.Ia;
                                    d.db.transaction(function(b) {
                                        b.executeSql("SELECT key FROM " + d.Oa, [], function(b, c) {
                                            for (var d = [], e = 0; e < c.rows.length; e++) d.push(c.rows.item(e).key);
                                            a(d)
                                        }, function(a, b) {
                                            c(b)
                                        })
                                    })
                                })["catch"](c)
                            });
                        return k(c, a), c
                    }

                    function k(a, b) {
                        b && a.then(function(a) {
                            b(null, a)
                        }, function(a) {
                            b(a)
                        })
                    }
                    var t = f.openDatabase;
                    if (t) return {
                        ak: "webSQLStorage",
                        Up: l,
                        Wv: e,
                        getItem: c,
                        setItem: b,
                        removeItem: r,
                        clear: d,
                        length: a,
                        key: g,
                        keys: m
                    }
                }("undefined" != typeof window ? window : self);
                f.Oe = p["default"]
            }
        ])
    };
    "object" == typeof exports && "object" == typeof module ? module.Oe = Gc() : "function" == typeof define && define.aI ? define([], Gc) : "object" == typeof exports ? exports.localforage = Gc() : this.localforage = Gc()
} catch (Hc) {
    Fc = !0
}

function Ic(f) {
        this.b = f
    }
    (function() {
        function f(a) {
            a.b.trigger(Ic.prototype.k.qf, a)
        }

        function p() {}

        function n() {}

        function h() {}
        var l = "",
            c = "",
            e = [],
            b = "";
        "undefined" !== typeof window.is_scirra_arcade && (b = "sa" + window.scirra_arcade_id + "_");
        var r = Ic.prototype;
        r.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        r.N.prototype.J = function() {};
        r.K = function(a) {
            this.type = a;
            this.b = a.b
        };
        var d = r.K.prototype;
        d.J = function() {
            this.ns = this.os = 0
        };
        d.Uc = function() {};
        d.Wa = function() {
            return {}
        };
        d.bb = function() {};
        p.prototype.Yt = function(a) {
            return l === a
        };
        p.prototype.kA = function() {
            return !0
        };
        p.prototype.Wt = function(a) {
            return l === a
        };
        p.prototype.jA = function() {
            return !0
        };
        p.prototype.MA = function(a) {
            return l === a
        };
        p.prototype.Mt = function() {
            return !0
        };
        p.prototype.qf = function() {
            return !0
        };
        p.prototype.Vt = function(a) {
            return l === a
        };
        p.prototype.Xt = function(a) {
            return l === a
        };
        p.prototype.xt = function(a, b) {
            return nc(c, a, b)
        };
        p.prototype.hA = function() {
            return !0
        };
        p.prototype.gA = function() {
            return !0
        };
        r.k = new p;
        n.prototype.bC = function(a, d) {
            if (Fc) f(this);
            else {
                var e = b + a;
                this.os++;
                var h = this;
                localforage.setItem(e, d, function(b, d) {
                    h.os--;
                    b ? h.b.trigger(Ic.prototype.k.qf, h) : (l = a, c = d, h.b.trigger(Ic.prototype.k.kA, h), h.b.trigger(Ic.prototype.k.Yt, h), c = l = "");
                    0 === h.os && h.b.trigger(Ic.prototype.k.hA, h)
                })
            }
        };
        n.prototype.oz = function(a) {
            if (Fc) f(this);
            else {
                var d = b + a;
                this.ns++;
                var e = this;
                localforage.getItem(d, function(b, d) {
                    e.ns--;
                    if (b) e.b.trigger(Ic.prototype.k.qf, e);
                    else {
                        l = a;
                        c = d;
                        if ("undefined" === typeof c || null === c) c = "";
                        e.b.trigger(Ic.prototype.k.jA, e);
                        e.b.trigger(Ic.prototype.k.Wt, e);
                        c = l = ""
                    }
                    0 === e.ns && e.b.trigger(Ic.prototype.k.gA, e)
                })
            }
        };
        n.prototype.Ry = function(a) {
            if (Fc) f(this);
            else {
                var d = this;
                localforage.getItem(b + a, function(b, e) {
                    b ? d.b.trigger(Ic.prototype.k.qf, d) : (l = a, null === e ? (c = "", d.b.trigger(Ic.prototype.k.Xt, d)) : (c = e, d.b.trigger(Ic.prototype.k.Vt, d)), c = l = "")
                })
            }
        };
        n.prototype.HB = function(a) {
            if (Fc) f(this);
            else {
                var d = this;
                localforage.removeItem(b + a, function(b) {
                    b ? d.b.trigger(Ic.prototype.k.qf, d) : (l = a, c = "", d.b.trigger(Ic.prototype.k.Mt, d), d.b.trigger(Ic.prototype.k.MA, d), l = "")
                })
            }
        };
        r.n = new n;
        h.prototype.Sz = function(a) {
            a.El(c)
        };
        h.prototype.Ft = function(a) {
            a.ca(e.length)
        };
        r.u = new h
    })();

function Jc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Jc.prototype;
        h.N = function(b) {
            this.X = b;
            this.b = b.b
        };
        h.N.prototype.J = function() {};
        h.K = function(b) {
            this.type = b;
            this.b = b.b;
            this.ri = Array(4);
            this.ny = this.jp = this.di = this.Qf = this.Pf = 0;
            this.Vq = !1
        };
        var l = h.K.prototype;
        l.J = function() {
            var b = this;
            if (!this.b.ba) {
                jQuery(document).mousemove(function(c) {
                    b.cs(c)
                });
                jQuery(document).mousedown(function(c) {
                    b.bs(c)
                });
                jQuery(document).mouseup(function(c) {
                    b.ds(c)
                });
                jQuery(document).dblclick(function(c) {
                    b.jG(c)
                });
                var c = function(c) {
                    b.mG(c)
                };
                document.addEventListener("mousewheel", c, !1);
                document.addEventListener("DOMMouseScroll", c, !1)
            }
        };
        var c = {
            left: 0,
            top: 0
        };
        l.cs = function(b) {
            var e = this.b.ba ? c : jQuery(this.b.canvas).offset();
            this.Pf = b.pageX - e.left;
            this.Qf = b.pageY - e.top
        };
        l.Mw = function() {
            return 0 < this.b.Qc ? !0 : 0 <= this.Pf && 0 <= this.Qf && this.Pf < this.b.width && this.Qf < this.b.height
        };
        l.bs = function(b) {
            this.Mw() && (this.ri[b.which] = !0, this.b.yb = !0, this.b.trigger(Jc.prototype.k.iA, this), this.di = b.which - 1, this.jp = 0, this.b.trigger(Jc.prototype.k.Pt, this), this.b.trigger(Jc.prototype.k.ju, this), this.b.yb = !1)
        };
        l.ds = function(b) {
            this.ri[b.which] && (this.b.Gn && !this.b.Kf && b.preventDefault(), this.b.Gn = !0, this.ri[b.which] = !1, this.b.yb = !0, this.di = b.which - 1, this.b.trigger(Jc.prototype.k.lu, this), this.b.yb = !1)
        };
        l.jG = function(b) {
            this.Mw() && (b.preventDefault(), this.b.yb = !0, this.di = b.which - 1, this.jp = 1, this.b.trigger(Jc.prototype.k.Pt, this), this.b.trigger(Jc.prototype.k.ju, this), this.b.yb = !1)
        };
        l.mG = function(b) {
            this.ny = 0 > (b.wheelDelta ? b.wheelDelta : b.detail ? -b.detail : 0) ? 0 : 1;
            this.Vq = !1;
            this.b.yb = !0;
            this.b.trigger(Jc.prototype.k.uB, this);
            this.b.yb = !1;
            this.Vq && rb(b) && b.preventDefault()
        };
        l.Tf = function() {
            var b, c;
            b = 0;
            for (c = this.ri.length; b < c; ++b) this.ri[b] && (this.ri[b] = !1, this.di = b - 1, this.b.trigger(Jc.prototype.k.lu, this))
        };
        f.prototype.Pt = function(b, c) {
            return b === this.di && c === this.jp
        };
        f.prototype.iA = function() {
            return !0
        };
        f.prototype.lu = function(b) {
            return b === this.di
        };
        f.prototype.Kz = function(b) {
            var c = this.b.Fg();
            return Za(this.b.Dj(b, this.Pf, this.Qf, c.Ni), c.Ni)
        };
        f.prototype.ju = function(b, c, d) {
            return b !== this.di || c !== this.jp ? !1 : this.b.Dj(d, this.Pf, this.Qf, !1)
        };
        f.prototype.uB = function(b) {
            this.Vq = !0;
            return b === this.ny
        };
        h.k = new f;
        var e = null;
        p.prototype.WB = function(b) {
            this.b.ba || (b = "auto pointer text crosshair move help wait none".split(" ")[b], e !== b && (e = b, document.body.style.cursor = b))
        };
        h.n = new p;
        n.prototype.rf = function(b, c) {
            var d, a, e, f, h;
            ka(c) ? (d = this.b.Se(0), a = d.scale, e = d.Oc, f = d.gd, h = d.A, d.scale = 1, d.Oc = 1, d.gd = 1, d.A = 0, b.I(d.ub(this.Pf, this.Qf, !0)), d.scale = a, d.Oc = e, d.gd = f, d.A = h) : (d = la(c) ? this.b.Se(c) : this.b.Ii(c)) ? b.I(d.ub(this.Pf, this.Qf, !0)) : b.I(0)
        };
        n.prototype.sf = function(b, c) {
            var d, a, e, f, h;
            ka(c) ? (d = this.b.Se(0), a = d.scale, e = d.Oc, f = d.hd, h = d.A, d.scale = 1, d.Oc = 1, d.hd = 1, d.A = 0, b.I(d.ub(this.Pf, this.Qf, !1)), d.scale = a, d.Oc = e, d.hd = f, d.A = h) : (d = la(c) ? this.b.Se(c) : this.b.Ii(c)) ? b.I(d.ub(this.Pf, this.Qf, !1)) : b.I(0)
        };
        h.u = new n
    })();

function Kc(f) {
        this.b = f
    }
    (function() {
        function f(f, l, c, e, b, r, d, a, g, m) {
            f.save();
            f.fillStyle = l;
            l = b % c;
            var k = r % e;
            0 > l && (l += c);
            0 > k && (k += e);
            f.translate(l + g, k + m);
            f.fillRect(b - l - g, r - k - m, d, a);
            f.restore()
        }
        var p = Kc.prototype;
        p.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        var n = p.N.prototype;
        n.J = function() {
            this.R || (this.M = new Image, this.M.jk = this.Ej, this.b.Kj(this.M, this.ci), this.Zl = this.em = this.cm = this.$l = this.Pj = this.O = this.Su = this.my = this.Cx = this.ow = this.Aq = null)
        };
        n.Ng = function() {
            this.R || (this.Zl = this.em = this.cm = this.$l = this.Pj = this.O = null)
        };
        n.Vh = function() {
            this.R || !this.q.length || this.O || (this.O = this.b.H.ed(this.M, !0, this.b.Ha, this.kf))
        };
        n.ei = function() {
            this.R || this.q.length || !this.b.H || (this.b.H.deleteTexture(this.O), this.b.H.deleteTexture(this.Pj), this.b.H.deleteTexture(this.$l), this.b.H.deleteTexture(this.cm), this.b.H.deleteTexture(this.em), this.b.H.deleteTexture(this.Zl), this.Zl = this.em = this.cm = this.$l = this.Pj = this.O = null)
        };
        n.gf = function(f, l, c, e) {
            var b = document.createElement("canvas");
            c = c - f;
            e = e - l;
            b.width = c;
            b.height = e;
            b.getContext("2d").drawImage(this.M, f, l, c, e, 0, 0, c, e);
            return b
        };
        n.tD = function(f, l, c, e) {
            var b = this.M.width,
                r = this.M.height,
                d = b - l,
                a = r - e;
            if (this.b.H) {
                if (!this.Pj) {
                    var g = this.b.H,
                        m = this.b.Ha,
                        k = this.kf;
                    d > f && a > c && (this.Pj = g.ed(this.gf(f, c, d, a), !0, m, k));
                    0 < f && a > c && (this.$l = g.ed(this.gf(0, c, f, a), !0, m, k, "repeat-y"));
                    0 < l && a > c && (this.cm = g.ed(this.gf(d, c, b, a), !0, m, k, "repeat-y"));
                    0 < c && d > f && (this.em = g.ed(this.gf(f, 0, d, c), !0, m, k, "repeat-x"));
                    0 < e && d > f && (this.Zl = g.ed(this.gf(f, a, d, r), !0, m, k, "repeat-x"))
                }
            } else this.Aq || (g = this.b.Sa, d > f && a > c && (this.Aq = g.createPattern(this.gf(f, c, d, a), "repeat")), 0 < f && a > c && (this.ow = g.createPattern(this.gf(0, c, f, a), "repeat")), 0 < l && a > c && (this.Cx = g.createPattern(this.gf(d, c, b, a), "repeat")), 0 < c && d > f && (this.my = g.createPattern(this.gf(f, 0, d, c), "repeat")), 0 < e && d > f && (this.Su = g.createPattern(this.gf(f, a, d, r), "repeat")))
        };
        p.K = function(f) {
            this.type = f;
            this.b = f.b
        };
        n = p.K.prototype;
        n.J = function() {
            this.Gr = this.B[0];
            this.Es = this.B[1];
            this.Zs = this.B[2];
            this.$p = this.B[3];
            this.jn = this.B[4];
            this.fill = this.B[5];
            this.visible = 0 === this.B[6];
            this.Ce = 0 !== this.B[8];
            this.ac ? this.ae.set(0, 0, 0, 0) : this.ae = new ya(0, 0, 0, 0);
            this.b.H && !this.type.O && (this.type.O = this.b.H.ed(this.type.M, !1, this.b.Ha, this.type.kf));
            this.type.tD(this.Gr, this.Es, this.Zs, this.$p)
        };
        n.xb = function(h) {
            var l = this.type.M,
                c = this.Gr,
                e = this.Es,
                b = this.Zs,
                r = this.$p,
                d = l.width,
                a = l.height,
                g = d - e,
                m = a - r;
            h.globalAlpha = this.opacity;
            h.save();
            var k = this.x,
                n = this.y,
                p = this.width,
                C = this.height;
            this.b.oc && (k = Math.round(k), n = Math.round(n));
            var q = -(this.Hc * this.width),
                v = -(this.Ic * this.height),
                u = q % d,
                I = v % a;
            0 > u && (u += d);
            0 > I && (I += a);
            h.translate(k + u, n + I);
            d = q - u;
            v -= I;
            I = this.Ce ? 1 : 0;
            0 < c && 0 < b && h.drawImage(l, 0, 0, c + I, b + I, d, v, c + I, b + I);
            0 < e && 0 < b && h.drawImage(l, g - I, 0, e + I, b + I, d + p - e - I, v, e + I, b + I);
            0 < e && 0 < r && h.drawImage(l, g - I, m - I, e + I, r + I, d + p - e - I, v + C - r - I, e + I, r + I);
            0 < c && 0 < r && h.drawImage(l, 0, m - I, c + I, r + I, d, v + C - r - I, c + I, r + I);
            0 === this.jn ? (I = 2 === this.fill ? 0 : I, 0 < c && m > b && f(h, this.type.ow, c, m - b, d, v + b, c + I, C - b - r, 0, 0), 0 < e && m > b && f(h, this.type.Cx, e, m - b, d + p - e - I, v + b, e + I, C - b - r, I, 0), 0 < b && g > c && f(h, this.type.my, g - c, b, d + c, v, p - c - e, b + I, 0, 0), 0 < r && g > c && f(h, this.type.Su, g - c, r, d + c, v + C - r - I, p - c - e, r + I, 0, I)) : 1 === this.jn && (0 < c && m > b && 0 < C - b - r && h.drawImage(l, 0, b, c, m - b, d, v + b, c, C - b - r), 0 < e && m > b && 0 < C - b - r && h.drawImage(l, g, b, e, m - b, d + p - e, v + b, e, C - b - r), 0 < b && g > c && 0 < p - c - e && h.drawImage(l, c, 0, g - c, b, d + c, v, p - c - e, b), 0 < r && g > c && 0 < p - c - e && h.drawImage(l, c, m, g - c, r, d + c, v + C - r, p - c - e, r));
            m > b && g > c && (0 === this.fill ? f(h, this.type.Aq, g - c, m - b, d + c, v + b, p - c - e, C - b - r, 0, 0) : 1 === this.fill && 0 < p - c - e && 0 < C - b - r && h.drawImage(l, c, b, g - c, m - b, d + c, v + b, p - c - e, C - b - r));
            h.restore()
        };
        n.Bf = function(f, l, c, e, b, r, d, a, g, m) {
            f.pc(l);
            var k = this.ae;
            k.left = c / l.pe;
            k.top = e / l.oe;
            k.right = (c + b) / l.pe;
            k.bottom = (e + r) / l.oe;
            f.Cd(d, a, d + g, a, d + g, a + m, d, a + m, k)
        };
        n.Ol = function(f, l, c, e, b, r, d, a) {
            f.pc(l);
            var g = this.ae;
            g.left = -d / l.pe;
            g.top = -a / l.oe;
            g.right = (b - d) / l.pe;
            g.bottom = (r - a) / l.oe;
            f.Cd(c, e, c + b, e, c + b, e + r, c, e + r, g)
        };
        n.Af = function(f) {
            this.Za(f)
        };
        n.Za = function(f) {
            var l = this.Gr,
                c = this.Es,
                e = this.Zs,
                b = this.$p,
                r = this.type.M.width - c,
                d = this.type.M.height - b;
            f.De(this.opacity);
            var a = this.cc,
                g = a.$a,
                a = a.ab,
                m = this.width,
                k = this.height;
            this.b.oc && (g = Math.round(g), a = Math.round(a));
            var n = this.Ce ? 1 : 0;
            0 < l && 0 < e && this.Bf(f, this.type.O, 0, 0, l + n, e + n, g, a, l + n, e + n);
            0 < c && 0 < e && this.Bf(f, this.type.O, r - n, 0, c + n, e + n, g + m - c - n, a, c + n, e + n);
            0 < c && 0 < b && this.Bf(f, this.type.O, r - n, d - n, c + n, b + n, g + m - c - n, a + k - b - n, c + n, b + n);
            0 < l && 0 < b && this.Bf(f, this.type.O, 0, d - n, l + n, b + n, g, a + k - b - n, l + n, b + n);
            0 === this.jn ? (n = 2 === this.fill ? 0 : n, 0 < l && d > e && this.Ol(f, this.type.$l, g, a + e, l + n, k - e - b, 0, 0), 0 < c && d > e && this.Ol(f, this.type.cm, g + m - c - n, a + e, c + n, k - e - b, n, 0), 0 < e && r > l && this.Ol(f, this.type.em, g + l, a, m - l - c, e + n, 0, 0), 0 < b && r > l && this.Ol(f, this.type.Zl, g + l, a + k - b - n, m - l - c, b + n, 0, n)) : 1 === this.jn && (0 < l && d > e && this.Bf(f, this.type.O, 0, e, l, d - e, g, a + e, l, k - e - b), 0 < c && d > e && this.Bf(f, this.type.O, r, e, c, d - e, g + m - c, a + e, c, k - e - b), 0 < e && r > l && this.Bf(f, this.type.O, l, 0, r - l, e, g + l, a, m - l - c, e), 0 < b && r > l && this.Bf(f, this.type.O, l, d, r - l, b, g + l, a + k - b, m - l - c, b));
            d > e && r > l && (0 === this.fill ? this.Ol(f, this.type.Pj, g + l, a + e, m - l - c, k - e - b, 0, 0) : 1 === this.fill && this.Bf(f, this.type.O, l, e, r - l, d - e, g + l, a + e, m - l - c, k - e - b))
        };
        p.k = new function() {};
        p.n = new function() {};
        p.u = new function() {}
    })();

function Lc(f) {
        this.b = f
    }
    (function() {
        function f(c) {
            this.cb = c;
            this.eb = !1;
            this.A = this.speed = this.y = this.x = 0;
            this.opacity = 1;
            this.qg = this.Li = this.size = this.Dn = 0
        }

        function p() {}
        var n = Lc.prototype;
        n.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        var h = n.N.prototype;
        h.J = function() {
            this.R || (this.M = new Image, this.M.jk = this.Ej, this.O = null, this.b.Kj(this.M, this.ci))
        };
        h.Ng = function() {
            this.R || (this.O = null)
        };
        h.Vh = function() {
            this.R || !this.q.length || this.O || (this.O = this.b.H.ed(this.M, !0, this.b.Ha, this.kf))
        };
        h.fj = function() {
            this.R || this.O || !this.b.H || (this.O = this.b.H.ed(this.M, !0, this.b.Ha, this.kf))
        };
        h.ei = function() {
            this.R || this.q.length || !this.O || (this.b.H.deleteTexture(this.O), this.O = null)
        };
        h.uj = function(c) {
            c.drawImage(this.M, 0, 0)
        };
        f.prototype.init = function() {
            var c = this.cb;
            this.x = c.x - c.rp / 2 + Math.random() * c.rp;
            this.y = c.y - c.sp / 2 + Math.random() * c.sp;
            this.speed = c.dr - c.Vo / 2 + Math.random() * c.Vo;
            this.A = c.A - c.Wo / 2 + Math.random() * c.Wo;
            this.opacity = c.br;
            this.size = c.cr - c.Uo / 2 + Math.random() * c.Uo;
            this.Dn = c.Uq - c.En / 2 + Math.random() * c.En;
            this.qg = this.Li = 0
        };
        f.prototype.Ra = function(c) {
            var e = this.cb;
            this.x += Math.cos(this.A) * this.speed * c;
            this.y += Math.sin(this.A) * this.speed * c;
            this.y += this.Li * c;
            this.speed += e.Ja * c;
            this.size += this.Dn * c;
            this.Li += e.uc * c;
            this.qg += c;
            1 > this.size ? this.eb = !1 : (0 !== e.Sk && (this.A += Math.random() * e.Sk * c - e.Sk * c / 2), 0 !== e.Uk && (this.speed += Math.random() * e.Uk * c - e.Uk * c / 2), 0 !== e.Tk && (this.opacity += Math.random() * e.Tk * c - e.Tk * c / 2, 0 > this.opacity ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), 1 >= e.yi && this.qg >= e.timeout && (this.eb = !1), 2 === e.yi && 0 >= this.speed && (this.eb = !1))
        };
        f.prototype.xb = function(c) {
            var e = this.cb.opacity * this.opacity;
            if (0 !== e) {
                0 === this.cb.yi && (e *= 1 - this.qg / this.cb.timeout);
                c.globalAlpha = e;
                var e = this.x - this.size / 2,
                    b = this.y - this.size / 2;
                this.cb.b.oc && (e = e + .5 | 0, b = b + .5 | 0);
                c.drawImage(this.cb.type.M, e, b, this.size, this.size)
            }
        };
        f.prototype.Za = function(c) {
            var e = this.cb.opacity * this.opacity;
            0 === this.cb.yi && (e *= 1 - this.qg / this.cb.timeout);
            var b = this.size,
                f = b * this.cb.ox,
                d = this.x - b / 2,
                a = this.y - b / 2;
            this.cb.b.oc && (d = d + .5 | 0, a = a + .5 | 0);
            1 > f || 0 === e || (f < c.bG || f > c.Pr ? (c.De(e), c.vj(d, a, d + b, a, d + b, a + b, d, a + b)) : c.uG(this.x, this.y, f, e))
        };
        f.prototype.left = function() {
            return this.x - this.size / 2
        };
        f.prototype.right = function() {
            return this.x + this.size / 2
        };
        f.prototype.top = function() {
            return this.y - this.size / 2
        };
        f.prototype.bottom = function() {
            return this.y + this.size / 2
        };
        n.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var h = n.K.prototype,
            l = [];
        h.J = function() {
            var c = this.B;
            this.ul = c[0];
            this.Wo = M(c[1]);
            this.$h = c[2];
            this.Xo = !0;
            this.dr = c[3];
            this.cr = c[4];
            this.br = c[5] / 100;
            this.Uq = c[6];
            this.rp = c[7];
            this.sp = c[8];
            this.Vo = c[9];
            this.Uo = c[10];
            this.En = c[11];
            this.Ja = c[12];
            this.uc = c[13];
            this.Sk = c[14];
            this.Uk = c[15];
            this.Tk = c[16];
            this.yi = c[17];
            this.timeout = c[18];
            this.Wh = 0;
            this.ox = 1;
            this.so = this.x;
            this.vo = this.y;
            this.uo = this.x;
            this.ro = this.y;
            this.aD(function(c) {
                c.Xa.set(c.so, c.vo, c.uo, c.ro);
                c.cc.Aj(c.Xa);
                c.Km = !1;
                c.mt();
                c.By()
            });
            this.ac || (this.Ob = []);
            this.b.Vg(this);
            this.type.fj();
            if (1 === this.$h)
                for (c = 0; c < this.ul; c++) this.Cm().opacity = 0;
            this.uk = !0
        };
        h.Wa = function() {
            var c = {
                    r: this.ul,
                    sc: this.Wo,
                    st: this.$h,
                    s: this.Xo,
                    isp: this.dr,
                    isz: this.cr,
                    io: this.br,
                    gr: this.Uq,
                    xr: this.rp,
                    yr: this.sp,
                    spr: this.Vo,
                    szr: this.Uo,
                    grnd: this.En,
                    acc: this.Ja,
                    g: this.uc,
                    lar: this.Sk,
                    lsr: this.Uk,
                    lor: this.Tk,
                    dm: this.yi,
                    to: this.timeout,
                    pcc: this.Wh,
                    ft: this.uk,
                    p: []
                },
                e, b, f, d = c.p;
            e = 0;
            for (b = this.Ob.length; e < b; e++) f = this.Ob[e], d.push([f.x, f.y, f.speed, f.A, f.opacity, f.Dn, f.size, f.Li, f.qg]);
            return c
        };
        h.bb = function(c) {
            this.ul = c.r;
            this.Wo = c.sc;
            this.$h = c.st;
            this.Xo = c.s;
            this.dr = c.isp;
            this.cr = c.isz;
            this.br = c.io;
            this.Uq = c.gr;
            this.rp = c.xr;
            this.sp = c.yr;
            this.Vo = c.spr;
            this.Uo = c.szr;
            this.En = c.grnd;
            this.Ja = c.acc;
            this.uc = c.g;
            this.Sk = c.lar;
            this.Uk = c.lsr;
            this.Tk = c.lor;
            this.yi = c.dm;
            this.timeout = c.to;
            this.Wh = c.pcc;
            this.uk = c.ft;
            l.push.apply(l, this.Ob);
            G(this.Ob);
            var e, b, f, d = c.p;
            c = 0;
            for (e = d.length; c < e; c++) b = this.Cm(), f = d[c], b.x = f[0], b.y = f[1], b.speed = f[2], b.A = f[3], b.opacity = f[4], b.Dn = f[5], b.size = f[6], b.Li = f[7], b.qg = f[8]
        };
        h.Uc = function() {
            l.push.apply(l, this.Ob);
            G(this.Ob)
        };
        h.Cm = function() {
            var c;
            l.length ? (c = l.pop(), c.cb = this) : c = new f(this);
            this.Ob.push(c);
            c.eb = !0;
            return c
        };
        h.Ra = function() {
            var c = this.b.Gf(this),
                e, b, f, d;
            if (0 === this.$h && this.Xo)
                for (this.Wh += c * this.ul, b = z(this.Wh), this.Wh -= b, e = 0; e < b; e++) f = this.Cm(), f.init();
            this.so = this.x;
            this.vo = this.y;
            this.uo = this.x;
            this.ro = this.y;
            d = e = 0;
            for (b = this.Ob.length; e < b; e++) f = this.Ob[e], this.Ob[d] = f, this.b.W = !0, 1 === this.$h && this.uk && f.init(), f.Ra(c), f.eb ? (f.left() < this.so && (this.so = f.left()), f.right() > this.uo && (this.uo = f.right()), f.top() < this.vo && (this.vo = f.top()), f.bottom() > this.ro && (this.ro = f.bottom()), d++) : l.push(f);
            Ga(this.Ob, d);
            this.L();
            this.uk = !1;
            1 === this.$h && 0 === this.Ob.length && this.b.pf(this)
        };
        h.xb = function(c) {
            var e, b, f, d = this.C;
            e = 0;
            for (b = this.Ob.length; e < b; e++) f = this.Ob[e], f.right() >= d.xa && f.bottom() >= d.ya && f.left() <= d.Da && f.top() <= d.Ca && f.xb(c)
        };
        h.Za = function(c) {
            this.ox = this.C.Rc();
            c.pc(this.type.O);
            var e, b, f, d = this.C;
            e = 0;
            for (b = this.Ob.length; e < b; e++) f = this.Ob[e], f.right() >= d.xa && f.bottom() >= d.ya && f.left() <= d.Da && f.top() <= d.Ca && f.Za(c)
        };
        n.k = new function() {};
        p.prototype.tC = function(c) {
            this.Xo = 0 !== c
        };
        p.prototype.sC = function(c) {
            this.ul = c;
            var e;
            if (1 === this.$h && this.uk)
                if (c < this.Ob.length)
                    for (c = this.Ob.length - c, e = 0; e < c; e++) l.push(this.Ob.pop());
                else if (c > this.Ob.length)
                for (c = c - this.Ob.length, e = 0; e < c; e++) this.Cm().opacity = 0
        };
        n.n = new p;
        n.u = new function() {}
    })();

function Mc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Mc.prototype;
        h.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var l = h.K.prototype;
        l.J = function() {
            this.timeout = Math.floor(1E3 * this.B[0]);
            this.GF = 0 === this.B[0];
            this.Hk = !1;
            this.ln = "";
            var c = this,
                e = Mc.prototype.k;
            window.WebFontConfig = {
                loading: function() {
                    c.b.trigger(e.RA, c)
                },
                active: function() {
                    c.b.trigger(e.Jt, c)
                },
                inactive: function() {
                    c.b.trigger(e.St, c)
                },
                fontloading: function(b) {
                    c.ln = b;
                    c.b.trigger(e.xA, c)
                },
                fontactive: function(b) {
                    c.ln = b;
                    c.b.trigger(e.vA, c)
                },
                fontinactive: function(b) {
                    c.ln = b;
                    c.b.trigger(e.wA, c)
                },
                timeout: this.timeout
            }
        };
        l.Uc = function() {};
        l.aA = function(c, e) {
            for (var b = document.getElementsByTagName("script"), f = !1, d = 0; d < b.length; d++)
                if (-1 != b[d].src.indexOf(c)) {
                    f = !0;
                    break
                }
            if (!f) {
                b = document.createElement("script");
                b.type = "text/javascript";
                b.src = c;
                var a = this;
                b.onload = function() {
                    a.Hk = !0
                };
                b.onerror = function() {
                    e && e()
                };
                document.getElementsByTagName("head")[0].appendChild(b)
            }
        };
        h.k = new f;
        f.prototype.RA = function() {
            return !0
        };
        f.prototype.Jt = function() {
            return !0
        };
        f.prototype.St = function() {
            return !0
        };
        f.prototype.xA = function() {
            return !0
        };
        f.prototype.vA = function() {
            return !0
        };
        f.prototype.wA = function() {
            return !0
        };
        f.prototype.cu = function() {
            return !0
        };
        h.n = new p;
        p.prototype.$z = function() {
            if (!this.Hk) {
                var c = this;
                
                    c.b.trigger(Mc.prototype.k.cu, c)
                
            }
        };
        p.prototype.Iy = function(c, e) {
            var b = window.WebFontConfig;
            b.hasOwnProperty("custom") || (b.custom = {
                families: []
            });
            var f = b.custom.families; - 1 === Ja(f, c) && f.push(c);
            f = e.split(".");
            "css" === f[f.length - 1] ? (b.custom.hasOwnProperty("urls") || (b.custom.urls = []), b = b.custom.urls, -1 === Ja(b, e) && b.push(e)) : (b = "@font-face { font-family: '" + c + "'; src: url('" + e + "'); }", f = document.createElement("style"), f.type = "text/css", f.styleSheet ? f.styleSheet.cssText = b : f.innerHTML = b, document.getElementsByTagName("head")[0].appendChild(f))
        };
        h.u = new n;
        n.prototype.Xz = function(c) {
            c.Qa(this.ln)
        }
    })();

function Nc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}
        var n = Nc.prototype;
        n.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        n.N.prototype.J = function() {};
        n.K = function(f) {
            this.type = f;
            this.b = f.b
        };
        var h = n.K.prototype;
        h.J = function() {
         //   this.we = new window.Newgrounds.io.core(this.B[0], this.B[1]);
         //   this.we.debug = 1 === this.B[2];
            this.Jk = !1;
            this.Gt()
				
        };
        h.Uc = function() {};
        h.Ww = function() {
            this.Jk = !0;
            this.b.trigger(Nc.prototype.k.fu, this)
        };
        h.kG = function() {
            this.Jk = !1;
            this.we.getSessionLoader().closePassport();
            this.b.trigger(Nc.prototype.k.SA, this)
        };
        h.Gt = function() {
            var f = this;

			
          
             
                setTimeout(function() {
                  
                }, 3E3)
           
			
			
        };
        h.Rj = function() {
            return this.we
        };
        n.k = new f;
        f.prototype.fu = function() {
            return !0
        };
        f.prototype.UA = function() {
            return !0
        };
        f.prototype.TA = function() {
            return !0
        };
        f.prototype.SA = function() {
            return !0
        };
        n.n = new p;
        p.prototype.Bp = function() {
            function f() {
                b.b.trigger(Nc.prototype.k.TA, b)
            }

            function c() {
                b.b.trigger(Nc.prototype.k.UA, b)
            }

            function e() {
                b.Ww()
            }
            var b = this;
          //  this.we.getSessionLoader().getValidSession(function() {
         //       b.we.requestLogin(e, c, f)
          //  })
		  
        };
        n.u = new function() {}
    })();

function Oc(f) {
        this.b = f
    }
    (function() {
        function f(c, b, f, d) {
            return function(a) {
                d && d(a);
                c.dw = a;
                c.b.trigger(a.success ? b : f, c)
            }
        }

        function p() {}

        function n() {}
        var h = Oc.prototype;
        h.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var l = h.K.prototype,
            c = ["D", "W", "M", "Y", "A"];
        l.J = function() {
            this.Fx = this.B[0];
            this.VF = this.B[1];
            this.Md = c[this.B[2]];
            this.tag = this.B[3];
            this.Yx = null;
            this.qG = 0;
            this.Un = this.Tn = this.dw = this.we = null;
            this.QF = 0
        };
        l.Uc = function() {
            this.Un = this.Tn = this.dw = null
        };
        l.Rj = function() {
            if (null != this.we) return this.we;
            var c = this.b.types,
                b, f;
            for (b in c)
                if (f = c[b].q[0], Nc && f instanceof Nc.prototype.K) return this.we = f.Rj();
            return null
        };
        l.Pk = function(c) {
            null == c && (c = this.qG);
            return c * this.VF
        };
        l.qd = function(c, b) {
            var h = this,
                d = Oc.prototype.k,
                d = f(this, d.FA, d.EA, function(a) {
                    h.QF = c;
                    if (a.success) {
                        h.Un = [];
                        a = a.scores;
                        var b, d, f, l = a.length;
                        for (f = 0; f < l; f++) b = a[f], d = b.user, h.Un.push({
                            formatted_value: b.formatted_value,
                            user: {
                                id: d.id,
                                name: d.name
                            },
                            value: b.value
                        })
                    } else h.Un = null
                }),
                a = {
                    id: this.Fx,
                    limit: b,
                    period: this.Md,
                    skip: c
                };
            "" !== this.tag && (a.tag = this.tag);
            null !== this.Yx && (a.social = !0, a.user = this.Yx);
          //  this.Rj().callComponent("ScoreBoard.getScores", a, d)
        };
        h.k = new p;
        p.prototype.zA = function() {
            return !0
        };
        p.prototype.yA = function() {
            return !0
        };
        p.prototype.gB = function() {
            return !0
        };
        p.prototype.fB = function() {
            return !0
        };
        p.prototype.FA = function() {
            return !0
        };
        p.prototype.EA = function() {
            return !0
        };
        h.n = new n;
        n.prototype.nz = function() {
            var c = this,
                b = Oc.prototype.k,
                b = f(this, b.zA, b.yA, function(b) {
                    if (b.success) {
                        c.Tn = [];
                        b = b.scoreboards;
                        var d, a, f = b.length;
                        for (a = 0; a < f; a++) d = b[a], c.Tn.push({
                            id: d.id,
                            name: d.name
                        })
                    } else c.Tn = null
                });
          //  this.Rj().callComponent("ScoreBoard.getBoards", {}, b)
        };
        n.prototype.DB = function(c) {
            var b = Oc.prototype.k,
                b = f(this, b.gB, b.fB);
            c = {
                id: this.Fx,
                value: c
            };
            "" !== this.tag && (c.tag = this.tag);
         //   this.Rj().callComponent("ScoreBoard.postScore", c, b)
        };
        n.prototype.tu = function(e) {
            "number" === typeof e && (e = c[e]);
            this.Md = e
        };
        h.u = new function() {}
    })();

function W(f) {
        this.b = f
    }
    (function() {
        function f() {
            if (0 === this.oq.length) {
                var a = document.createElement("canvas");
                a.width = this.width;
                a.height = this.height;
                var b = a.getContext("2d");
                this.Bj ? b.drawImage(this.M, this.nj, this.oj, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.M, 0, 0, this.width, this.height);
                this.oq = a.toDataURL("image/png")
            }
            return this.oq
        }

        function p() {}

        function n(a) {
            a[0] = 0;
            a[1] = 0;
            a[2] = 0;
            t.push(a)
        }

        function h(a, b) {
            return a < b ? "" + a + "," + b : "" + b + "," + a
        }

        function l(a, b, c, d) {
            b = b.uid;
            c = c.uid;
            var e = h(b, c);
            if (a.hasOwnProperty(e)) a[e][2] = d;
            else {
                var f = t.length ? t.pop() : [0, 0, 0];
                f[0] = b;
                f[1] = c;
                f[2] = d;
                a[e] = f
            }
        }

        function c(a, b, c) {
            b = h(b.uid, c.uid);
            a.hasOwnProperty(b) && (n(a[b]), delete a[b])
        }

        function e(a, b, c) {
            b = h(b.uid, c.uid);
            if (a.hasOwnProperty(b)) return Q = a[b][2], !0;
            Q = -2;
            return !1
        }

        function b(a, b, c) {
            if (!a) return !1;
            var d = 0 !== b || 0 !== c,
                e, f, g = !1,
                h, k = this.b.Fg(),
                m = k.type,
                k = k.Ni,
                l = a.V();
            h = this.b.fb().hb.Ld;
            l.Y ? (this.Pa(), D.vi(this.Xa), D.offset(b, c), this.b.Jq(this.C, a, D, I), l = I) : l = h ? this.b.CF() && !l.ka.length && l.q.length ? l.q : l.ka : l.q;
            q = a;
            u = m !== a && !k;
            d && (e = this.x, f = this.y, this.x += b, this.y += c, this.L());
            b = 0;
            for (c = l.length; b < c; b++)
                if (h = l[b], this.b.Mc(this, h)) {
                    g = !0;
                    if (k) break;
                    m !== a && v.add(h)
                }
            d && (this.x = e, this.y = f, this.L());
            G(I);
            return g
        }

        function r() {}

        function d() {}
        var a = W.prototype;
        a.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        var g = a.N.prototype;
        g.J = function() {
            if (!this.R) {
                var a, b, c, d, e, g, h, k, m;
                this.ke = [];
                this.Ak = !1;
                a = 0;
                for (b = this.od.length; a < b; a++) {
                    e = this.od[a];
                    h = {};
                    h.name = e[0];
                    h.speed = e[1];
                    h.loop = e[2];
                    h.Cs = e[3];
                    h.Ds = e[4];
                    h.qx = e[5];
                    h.za = e[6];
                    h.frames = [];
                    c = 0;
                    for (d = e[7].length; c < d; c++) g = e[7][c], k = {}, k.ci = g[0], k.Ej = g[1], k.nj = g[2], k.oj = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.Hc = g[7], k.Ic = g[8], k.Zq = g[9], k.zo = g[10], k.rx = g[11], k.Bj = 0 !== k.width, k.oq = "", k.eI = f, m = {
                        left: 0,
                        top: 0,
                        right: 1,
                        bottom: 1
                    }, k.Os = m, k.O = null, (m = this.b.IE(g[0])) ? k.M = m : (k.M = new Image, k.M.qD = g[0], k.M.jk = g[1], k.M.jD = null, this.b.Kj(k.M, g[0])), h.frames.push(k), this.ke.push(k);
                    this.od[a] = h
                }
            }
        };
        g.xy = function() {
            var a, b, c;
            a = 0;
            for (b = this.q.length; a < b; a++) c = this.q[a], c.Xm = c.fc.O
        };
        g.Ng = function() {
            if (!this.R) {
                var a, b, c;
                a = 0;
                for (b = this.ke.length; a < b; ++a) c = this.ke[a], c.M.jD = null, c.O = null;
                this.Ak = !1;
                this.xy()
            }
        };
        g.Vh = function() {
            if (!this.R && this.q.length) {
                var a, b, c;
                a = 0;
                for (b = this.ke.length; a < b; ++a) c = this.ke[a], c.O = this.b.H.ed(c.M, !1, this.b.Ha, c.rx);
                this.xy()
            }
        };
        g.fj = function() {
            if (!this.R && !this.Ak && this.b.H) {
                var a, b, c;
                a = 0;
                for (b = this.ke.length; a < b; ++a) c = this.ke[a], c.O = this.b.H.ed(c.M, !1, this.b.Ha, c.rx);
                this.Ak = !0
            }
        };
        g.ei = function() {
            if (!this.R && !this.q.length && this.Ak) {
                var a, b, c;
                a = 0;
                for (b = this.ke.length; a < b; ++a) c = this.ke[a], this.b.H.deleteTexture(c.O), c.O = null;
                this.Ak = !1
            }
        };
        var m = [];
        g.uj = function(a) {
            var b, c, d;
            G(m);
            b = 0;
            for (c = this.ke.length; b < c; ++b) d = this.ke[b].M, -1 === m.indexOf(d) && (a.drawImage(d, 0, 0), m.push(d))
        };
        a.K = function(a) {
            this.type = a;
            this.b = a.b;
            a = this.type.od[0].frames[0].zo;
            this.ac ? this.Ka.Fl(a) : this.Ka = new kb(a)
        };
        var k = a.K.prototype;
        k.J = function() {
            this.visible = 0 === this.B[0];
            this.In = this.Dh = !1;
            this.Ed = 0 !== this.B[3];
            this.Ya = this.yv(this.B[1]) || this.type.od[0];
            this.U = this.B[2];
            0 > this.U && (this.U = 0);
            this.U >= this.Ya.frames.length && (this.U = this.Ya.frames.length - 1);
            var a = this.Ya.frames[this.U];
            this.Ka.Fl(a.zo);
            this.Hc = a.Hc;
            this.Ic = a.Ic;
            this.ih = this.Ya.speed;
            this.Ag = this.Ya.Ds;
            1 === this.type.od.length && 1 === this.type.od[0].frames.length || 0 === this.ih || (this.b.Vg(this), this.Dh = !0);
            this.ac ? this.Ke.reset() : this.Ke = new ib;
            this.Ef = this.Ke.na;
            this.dh = !0;
            this.uf = 0;
            this.sg = !0;
            this.si = this.Lu = "";
            this.Yu = 0;
            this.Pm = -1;
            this.type.fj();
            var b, c, d, e, f, g, h, a = 0;
            for (b = this.type.od.length; a < b; a++)
                for (e = this.type.od[a], c = 0, d = e.frames.length; c < d; c++) f = e.frames[c], 0 === f.width && (f.width = f.M.width, f.height = f.M.height), f.Bj && (h = f.M, g = f.Os, g.left = f.nj / h.width, g.top = f.oj / h.height, g.right = (f.nj + f.width) / h.width, g.bottom = (f.oj + f.height) / h.height, 0 === f.nj && 0 === f.oj && f.width === h.width && f.height === h.height && (f.Bj = !1));
            this.fc = this.Ya.frames[this.U];
            this.Xm = this.fc.O
        };
        k.Wa = function() {
            var a = {
                a: this.Ya.za,
                f: this.U,
                cas: this.ih,
                fs: this.Ef,
                ar: this.uf,
                at: this.Ke.na,
                rt: this.Ag
            };
            this.dh || (a.ap = this.dh);
            this.sg || (a.af = this.sg);
            return a
        };
        k.bb = function(a) {
            var b = this.NE(a.a);
            b && (this.Ya = b);
            this.U = a.f;
            0 > this.U && (this.U = 0);
            this.U >= this.Ya.frames.length && (this.U = this.Ya.frames.length - 1);
            this.ih = a.cas;
            this.Ef = a.fs;
            this.uf = a.ar;
            this.Ke.reset();
            this.Ke.na = a.at;
            this.dh = a.hasOwnProperty("ap") ? a.ap : !0;
            this.sg = a.hasOwnProperty("af") ? a.af : !0;
            a.hasOwnProperty("rt") ? this.Ag = a.rt : this.Ag = this.Ya.Ds;
            this.fc = this.Ya.frames[this.U];
            this.Xm = this.fc.O;
            this.Ka.Fl(this.fc.zo);
            this.Hc = this.fc.Hc;
            this.Ic = this.fc.Ic
        };
        k.Yp = function(a) {
            this.U = a ? 0 : this.Ya.frames.length - 1;
            this.dh = !1;
            this.Lu = this.Ya.name;
            this.In = !0;
            this.b.trigger(W.prototype.k.Lt, this);
            this.b.trigger(W.prototype.k.Kt, this);
            this.In = !1;
            this.uf = 0
        };
        k.qd = function() {
            return this.Ke.na
        };
        k.Ra = function() {
            this.Ke.add(this.b.Gf(this));
            this.si.length && this.jv();
            0 <= this.Pm && this.kv();
            var a = this.Ke.na,
                b = this.Ya,
                c = b.frames[this.U],
                d = c.duration / this.ih;
            this.dh && a >= this.Ef + d && (this.sg ? this.U++ : this.U--, this.Ef += d, this.U >= b.frames.length && (b.qx ? (this.sg = !1, this.U = b.frames.length - 2) : b.loop ? this.U = this.Ag : (this.uf++, this.uf >= b.Cs ? this.Yp(!1) : this.U = this.Ag)), 0 > this.U && (b.qx ? (this.U = 1, this.sg = !0, b.loop || (this.uf++, this.uf >= b.Cs && this.Yp(!0))) : b.loop ? this.U = this.Ag : (this.uf++, this.uf >= b.Cs ? this.Yp(!0) : this.U = this.Ag)), 0 > this.U ? this.U = 0 : this.U >= b.frames.length && (this.U = b.frames.length - 1), a > this.Ef + b.frames[this.U].duration / this.ih && (this.Ef = a), a = b.frames[this.U], this.li(c, a), this.b.W = !0)
        };
        k.yv = function(a) {
            var b, c, d;
            b = 0;
            for (c = this.type.od.length; b < c; b++)
                if (d = this.type.od[b], qb(d.name, a)) return d;
            return null
        };
        k.NE = function(a) {
            var b, c, d;
            b = 0;
            for (c = this.type.od.length; b < c; b++)
                if (d = this.type.od[b], d.za === a) return d;
            return null
        };
        k.jv = function() {
            var a = this.Ya.frames[this.U],
                b = this.yv(this.si);
            this.si = "";
            !b || qb(b.name, this.Ya.name) && this.dh || (this.Ya = b, this.ih = b.speed, this.Ag = b.Ds, 0 > this.U && (this.U = 0), this.U >= this.Ya.frames.length && (this.U = this.Ya.frames.length - 1), 1 === this.Yu && (this.U = 0), this.dh = !0, this.Ef = this.Ke.na, this.sg = !0, this.li(a, this.Ya.frames[this.U]), this.b.W = !0)
        };
        k.kv = function() {
            var a = this.Ya.frames[this.U],
                b = this.U;
            this.U = z(this.Pm);
            0 > this.U && (this.U = 0);
            this.U >= this.Ya.frames.length && (this.U = this.Ya.frames.length - 1);
            b !== this.U && (this.li(a, this.Ya.frames[this.U]), this.Ef = this.Ke.na, this.b.W = !0);
            this.Pm = -1
        };
        k.li = function(a, b) {
            var c = a.width,
                d = a.height,
                e = b.width,
                f = b.height;
            c != e && (this.width *= e / c);
            d != f && (this.height *= f / d);
            this.Hc = b.Hc;
            this.Ic = b.Ic;
            this.Ka.Fl(b.zo);
            this.L();
            this.fc = b;
            this.Xm = b.O;
            c = 0;
            for (d = this.fa.length; c < d; c++) e = this.fa[c], e.Zw && e.Zw(a, b);
            this.b.trigger(W.prototype.k.li, this)
        };
        k.xb = function(a) {
            a.globalAlpha = this.opacity;
            var b = this.fc,
                c = b.Bj,
                d = b.M,
                e = this.x,
                f = this.y,
                g = this.width,
                h = this.height;
            if (0 === this.A && 0 <= g && 0 <= h) e -= this.Hc * g, f -= this.Ic * h, this.b.oc && (e = Math.round(e), f = Math.round(f)), c ? a.drawImage(d, b.nj, b.oj, b.width, b.height, e, f, g, h) : a.drawImage(d, e, f, g, h);
            else {
                this.b.oc && (e = Math.round(e), f = Math.round(f));
                a.save();
                var k = 0 < g ? 1 : -1,
                    m = 0 < h ? 1 : -1;
                a.translate(e, f);
                1 === k && 1 === m || a.scale(k, m);
                a.rotate(this.A * k * m);
                e = 0 - this.Hc * sa(g);
                f = 0 - this.Ic * sa(h);
                c ? a.drawImage(d, b.nj, b.oj, b.width, b.height, e, f, sa(g), sa(h)) : a.drawImage(d, e, f, sa(g), sa(h));
                a.restore()
            }
        };
        k.Af = function(a) {
            this.Za(a)
        };
        k.Za = function(a) {
            a.pc(this.Xm);
            a.De(this.opacity);
            var b = this.fc,
                c = this.cc;
            if (this.b.oc) {
                var d = Math.round(this.x) - this.x,
                    e = Math.round(this.y) - this.y;
                b.Bj ? a.Cd(c.$a + d, c.ab + e, c.Cb + d, c.Db + e, c.sb + d, c.tb + e, c.qb + d, c.rb + e, b.Os) : a.vj(c.$a + d, c.ab + e, c.Cb + d, c.Db + e, c.sb + d, c.tb + e, c.qb + d, c.rb + e)
            } else b.Bj ? a.Cd(c.$a, c.ab, c.Cb, c.Db, c.sb, c.tb, c.qb, c.rb, b.Os) : a.vj(c.$a, c.ab, c.Cb, c.Db, c.sb, c.tb, c.qb, c.rb)
        };
        k.SE = function(a) {
            var b = this.fc,
                c, d;
            c = 0;
            for (d = b.Zq.length; c < d; c++)
                if (qb(a, b.Zq[c][0])) return c;
            return -1
        };
        k.vh = function(a, b) {
            var c = this.fc,
                d = c.Zq,
                e;
            ma(a) ? e = this.SE(a) : e = a - 1;
            e = z(e);
            if (0 > e || e >= d.length) return b ? this.x : this.y;
            var f = (d[e][1] - c.Hc) * this.width,
                d = d[e][2],
                d = (d - c.Ic) * this.height,
                c = Math.cos(this.A);
            e = Math.sin(this.A);
            var g = f * c - d * e,
                d = d * c + f * e,
                f = g + this.x,
                d = d + this.y;
            return b ? f : d
        };
        var t = [],
            Q = -2,
            C = [];
        p.prototype.qA = function(a) {
            if (!a) return !1;
            var b = this.b,
                d = b.Fg(),
                f = d.type,
                g = null;
            d.T.collmemory ? g = d.T.collmemory : (g = {}, d.T.collmemory = g);
            d.T.spriteCreatedDestroyCallback || (d.T.spriteCreatedDestroyCallback = !0, b.Am(function(a) {
                var b = d.T.collmemory;
                a = a.uid;
                var c, e;
                for (c in b) b.hasOwnProperty(c) && (e = b[c], e[0] === a || e[1] === a) && (n(b[c]), delete b[c])
            }));
            var h = f.V(),
                k = a.V(),
                h = h.vc(),
                m, u, q, p, t, r, v, D = this.b.Pd,
                I = D - 1,
                H = b.fb().hb;
            for (u = 0; u < h.length; u++) {
                q = h[u];
                k.Y ? (q.Pa(), this.b.Jq(q.C, a, q.Xa, C), m = C) : m = k.vc();
                for (p = 0; p < m.length; p++) t = m[p], b.Mc(q, t) || b.nD(q, t) ? (r = e(g, q, t), r = !r || Q < I, l(g, q, t, D), r && (b.Qg(H.wa), r = f.V(), v = a.V(), r.Y = !1, v.Y = !1, f === a ? (r.q.length = 2, r.q[0] = q, r.q[1] = t, f.ad()) : (r.q.length = 1, v.q.length = 1, r.q[0] = q, v.q[0] = t, f.ad(), a.ad()), H.Rg(), b.ye(H.wa))) : c(g, q, t);
                G(C)
            }
            return !1
        };
        var q = null,
            v = new da,
            u = !1,
            I = [],
            D = new ya(0, 0, 0, 0);
        g.finish = function(a) {
            if (u) {
                if (a) {
                    var b = this.b.fb().hb.Ld;
                    a = q.V();
                    var c = v.Yg(),
                        d, e;
                    if (a.Y) {
                        a.Y = !1;
                        G(a.q);
                        d = 0;
                        for (e = c.length; d < e; ++d) a.q[d] = c[d];
                        if (b)
                            for (G(a.ka), d = 0, e = q.q.length; d < e; ++d) c = q.q[d], v.contains(c) || a.ka.push(c)
                    } else if (b)
                        for (b = a.q.length, d = 0, e = c.length; d < e; ++d) a.q[b + d] = c[d], Ka(a.ka, c[d]);
                    else Ha(a.q, c);
                    q.ad()
                }
                v.clear();
                u = !1
            }
        };
        p.prototype.Lz = function(a) {
            return b.call(this, a, 0, 0)
        };
        p.prototype.Mz = function(a, c, d) {
            return b.call(this, a, c, d)
        };
        p.prototype.xz = function(a) {
            return this.si.length ? qb(this.si, a) : qb(this.Ya.name, a)
        };
        p.prototype.Zy = function(a, b) {
            return nc(this.U, a, b)
        };
        p.prototype.Kt = function(a) {
            return qb(this.Lu, a)
        };
        p.prototype.Lt = function() {
            return !0
        };
        p.prototype.li = function() {
            return !0
        };
        p.prototype.Bz = function() {
            return this.Ed
        };
        a.k = new p;
        r.prototype.DC = function(a, b, c) {
            if (a && b && (b = this.b.Vm(a, b, this.vh(c, !0), this.vh(c, !1)))) {
                "undefined" !== typeof b.A && (b.A = this.A, b.L());
                this.b.Id++;
                var d, e, f;
                this.b.trigger(Object.getPrototypeOf(a.X).k.ki, b);
                if (b.ic)
                    for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], this.b.trigger(Object.getPrototypeOf(f.type.X).k.ki, f);
                this.b.Id--;
                d = this.b.QE();
                c = !1;
                if (ka(d.T.Spawn_LastExec) || d.T.Spawn_LastExec < this.b.rh) c = !0, d.T.Spawn_LastExec = this.b.rh;
                if (a != this.type && (a = a.V(), a.Y = !1, c ? (G(a.q), a.q[0] = b) : a.q.push(b), b.ic))
                    for (d = 0, e = b.siblings.length; d < e; d++) f = b.siblings[d], a = f.type.V(), a.Y = !1, c ? (G(a.q), a.q[0] = f) : a.q.push(f)
            }
        };
        r.prototype.QB = function(a, b) {
            this.si = a;
            this.Yu = b;
            this.Dh || (this.b.Vg(this), this.Dh = !0);
            this.In || this.jv()
        };
        r.prototype.RB = function(a) {
            this.Pm = a;
            this.Dh || (this.b.Vg(this), this.Dh = !0);
            this.In || this.kv()
        };
        r.prototype.SB = function(a) {
            this.ih = sa(a);
            this.sg = 0 <= a;
            this.Dh || (this.b.Vg(this), this.Dh = !0)
        };
        r.prototype.mC = function(a) {
            a = sa(this.width) * (0 === a ? -1 : 1);
            this.width !== a && (this.width = a, this.L())
        };
        r.prototype.Mp = function(a) {
            var b = this.fc,
                c = b.width * a * (0 > this.width ? -1 : 1);
            a = b.height * a * (0 > this.height ? -1 : 1);
            if (this.width !== c || this.height !== a) this.width = c, this.height = a, this.L()
        };
        r.prototype.VB = function(a) {
            this.Ed !== (0 !== a) && ((this.Ed = 0 !== a) ? this.L() : (this.Ud.right >= this.Ud.left && this.type.hk.update(this, this.Ud, null), this.Ud.set(0, 0, -1, -1)))
        };
        a.n = new r;
        d.prototype.Ny = function(a) {
            a.ca(this.U)
        };
        d.prototype.Oy = function(a) {
            a.Qa(this.Ya.name)
        };
        d.prototype.uz = function(a, b) {
            a.I(this.vh(b, !0))
        };
        d.prototype.vz = function(a, b) {
            a.I(this.vh(b, !1))
        };
        a.u = new d
    })();

function Pc(f) {
        this.b = f
    }
    (function() {
        function f(a, b) {
            return a.length ? a.pop() : new b
        }

        function p(a, c, d) {
            if (d) {
                var e;
                d = 0;
                for (e = c.length; d < e; d++) a.length < b && a.push(c[d]);
                G(c)
            } else
                for (e in c) Object.prototype.hasOwnProperty.call(c, e) && (a.length < b && a.push(c[e]), delete c[e])
        }

        function n(a, b, c) {
            var d = a.Tc;
            c = c.replace(/\s\s*$/, "");
            b >= d.length && d.push(f(r, Object));
            b = d[b];
            b.text = c;
            b.width = a.Tr(c);
            a.fg = ta(a.fg, b.width)
        }

        function h() {}

        function l() {}
        var c = Pc.prototype;
        c.J = function() {};
        c.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        var e = c.N.prototype;
        e.J = function() {
            this.R || (this.M = new Image, this.b.Kj(this.M, this.ci), this.O = null)
        };
        e.Ng = function() {
            this.R || (this.O = null)
        };
        e.Vh = function() {
            if (!this.R && this.q.length) {
                this.O || (this.O = this.b.H.ed(this.M, !1, this.b.Ha, this.kf));
                var a, b;
                a = 0;
                for (b = this.q.length; a < b; a++) this.q[a].O = this.O
            }
        };
        e.ei = function() {
            this.R || this.q.length || !this.O || (this.b.H.deleteTexture(this.O), this.O = null)
        };
        e.uj = function(a) {
            a.drawImage(this.M, 0, 0)
        };
        c.K = function(a) {
            this.type = a;
            this.b = a.b
        };
        e = c.K.prototype;
        e.Uc = function() {
            p(r, this.Tc, !0);
            p(d, this.Rm, !1);
            p(a, this.Sm, !1);
            bb(this.xg)
        };
        e.J = function() {
            this.M = this.type.M;
            this.Qm = this.B[0];
            this.wg = this.B[1];
            this.characterSet = this.B[2];
            this.text = this.B[3];
            this.Le = this.B[4];
            this.visible = 0 === this.B[5];
            this.Ue = this.B[6] / 2;
            this.ig = this.B[7] / 2;
            this.gm = 0 === this.B[9];
            this.ti = this.B[10];
            this.lineHeight = this.B[11];
            this.jf = this.fg = 0;
            this.ac ? (G(this.Tc), bb(this.Rm), bb(this.Sm), bb(this.xg)) : (this.Tc = [], this.Rm = {}, this.Sm = {}, this.xg = {});
            this.Nc = !0;
            this.Lh = this.width;
            this.b.H && (this.type.O || (this.type.O = this.b.H.ed(this.type.M, !1, this.b.Ha, this.type.kf)), this.O = this.type.O);
            this.EC()
        };
        e.Wa = function() {
            var a = {
                    t: this.text,
                    csc: this.Le,
                    csp: this.ti,
                    lh: this.lineHeight,
                    tw: this.fg,
                    th: this.jf,
                    lrt: this.Kh,
                    ha: this.Ue,
                    va: this.ig,
                    cw: {}
                },
                b;
            for (b in this.xg) a.cw[b] = this.xg[b];
            return a
        };
        e.bb = function(a) {
            this.text = a.t;
            this.Le = a.csc;
            this.ti = a.csp;
            this.lineHeight = a.lh;
            this.fg = a.tw;
            this.jf = a.th;
            this.Kh = a.lrt;
            a.hasOwnProperty("ha") && (this.Ue = a.ha);
            a.hasOwnProperty("va") && (this.ig = a.va);
            for (var b in a.cw) this.xg[b] = a.cw[b];
            this.Nc = !0;
            this.Lh = this.width
        };
        var b = 1E3,
            r = [],
            d = [],
            a = [];
        e.EC = function() {
            for (var b = this.M, c = b.width, e = b.height, b = this.Qm, g = this.wg, h = b / c, m = g / e, u = this.characterSet, c = Math.floor(c / b), e = Math.floor(e / g), l = 0; l < u.length && !(l >= c * e); l++) {
                var n = l % c,
                    p = Math.floor(l / c),
                    r = u.charAt(l);
                if (this.b.H) {
                    var F = this.Sm,
                        S = n * h,
                        w = p * m,
                        n = (n + 1) * h,
                        p = (p + 1) * m;
                    void 0 === F[r] && (F[r] = f(a, ya));
                    F[r].left = S;
                    F[r].top = w;
                    F[r].right = n;
                    F[r].bottom = p
                } else F = this.Rm, n = n * b, p = p * g, S = b, w = g, void 0 === F[r] && (F[r] = f(d, Object)), F[r].x = n, F[r].y = p, F[r].pp = S, F[r].Fn = w
            }
        };
        var g = [];
        c.Op = function(a) {
            G(g);
            for (var b = "", c, d = 0; d < a.length;)
                if (c = a.charAt(d), "\n" === c) b.length && (g.push(b), b = ""), g.push("\n"), ++d;
                else if (" " === c || "\t" === c || "-" === c) {
                do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
                g.push(b);
                b = ""
            } else d < a.length && (b += c, d++);
            b.length && g.push(b)
        };
        c.Qp = function(a) {
            var b = a.text,
                c = a.Tc;
            if (b && b.length) {
                var d = a.width;
                if (2 >= d) p(r, c, !0);
                else {
                    var e = a.Le,
                        g = a.ti;
                    if (b.length * (a.Qm * e + g) - g <= d && -1 === b.indexOf("\n") && (g = a.Tr(b), g <= d)) {
                        p(r, c, !0);
                        c.push(f(r, Object));
                        c[0].text = b;
                        c[0].width = g;
                        a.fg = g;
                        a.jf = a.wg * e + a.lineHeight;
                        return
                    }
                    this.Rp(a);
                    a.jf = c.length * (a.wg * e + a.lineHeight)
                }
            } else p(r, c, !0)
        };
        c.Rp = function(a) {
            var c = a.gm,
                d = a.text,
                e = a.Tc,
                f = a.width;
            c && (this.Op(d), d = g);
            var h = "",
                m, l, p, x = 0,
                E = !1;
            for (p = 0; p < d.length; p++) "\n" === d[p] ? (!0 === E ? E = !1 : (n(a, x, h), x++), h = "") : (E = !1, m = h, h += d[p], l = a.Tr(h.replace(/\s\s*$/, "")), l > f && ("" === m ? (n(a, x, h), h = "", E = !0) : (n(a, x, m), h = d[p]), x++, c || " " !== h || (h = "")));
            h.replace(/\s\s*$/, "").length && (n(a, x, h), x++);
            for (p = x; p < e.length; p++) r.length < b && r.push(e[p]);
            e.length = x
        };
        e.Tr = function(a) {
            for (var b = this.ti, c = a.length, d = 0, e = 0; e < c; e++) d += this.Iq(a.charAt(e)) * this.Le + b;
            return d - (0 < d ? b : 0)
        };
        e.Iq = function(a) {
            var b = this.xg;
            return void 0 !== b[a] ? b[a] : this.Qm
        };
        e.yx = function() {
            if (this.Nc || this.width !== this.Lh) this.jf = this.fg = 0, this.type.X.Qp(this), this.Nc = !1, this.Lh = this.width
        };
        e.xb = function(a) {
            var b = this.M;
            if ("" !== this.text && null != b && (this.yx(), !(this.height < this.wg * this.Le + this.lineHeight))) {
                a.globalAlpha = this.opacity;
                var b = this.x,
                    c = this.y;
                this.b.oc && (b = Math.round(b), c = Math.round(c));
                var d = this.C.xa,
                    e = this.C.ya,
                    f = this.C.Da,
                    g = this.C.Ca;
                a.save();
                a.translate(b, c);
                a.rotate(this.A);
                for (var h = this.A, m = this.Ue, l = this.Le, n = this.wg * l, p = this.lineHeight, r = this.ti, w = this.Tc, K, P = -(this.Hc * this.width), R = -(this.Ic * this.height), R = R + this.ig * ta(0, this.height - this.jf), A, N, L, X = 0; X < w.length; X++) {
                    var B = w[X].text;
                    K = m * ta(0, this.width - w[X].width);
                    A = P + K;
                    R += p;
                    if (0 === h && c + R + n < e) R += n;
                    else {
                        for (var y = 0; y < B.length; y++) {
                            N = B.charAt(y);
                            K = this.Iq(N);
                            var O = this.Rm[N];
                            if (0 === h && b + A + K * l + r < d) A += K * l + r;
                            else {
                                if (A + K * l > this.width + 1E-5) break;
                                void 0 !== O && (N = A, L = R, 0 === h && 1 === l && (N = Math.round(N), L = Math.round(L)), a.drawImage(this.M, O.x, O.y, O.pp, O.Fn, N, L, O.pp * l, O.Fn * l));
                                A += K * l + r;
                                if (0 === h && b + A > f) break
                            }
                        }
                        R += n;
                        if (0 === h && (R + n + p > this.height || c + R > g)) break
                    }
                }
                a.restore()
            }
        };
        var m = new za;
        e.Za = function(a) {
            a.pc(this.O);
            a.De(this.opacity);
            if (this.text && (this.yx(), !(this.height < this.wg * this.Le + this.lineHeight))) {
                this.Pa();
                var b = this.cc,
                    c = 0,
                    d = 0;
                this.b.oc && (c = Math.round(this.x) - this.x, d = Math.round(this.y) - this.y);
                var e = this.C.xa,
                    f = this.C.ya,
                    g = this.C.Da,
                    h = this.C.Ca,
                    l = this.A,
                    n = this.Ue,
                    p = this.ig,
                    r = this.Le,
                    S = this.wg * r,
                    w = this.lineHeight,
                    K = this.ti,
                    P = this.Tc,
                    R = this.jf,
                    A, N, L;
                0 !== l && (N = Math.cos(l), L = Math.sin(l));
                for (var c = b.$a + c, b = b.ab + d, X, p = p * ta(0, this.height - R), B, y, R = 0; R < P.length; R++)
                    if (d = P[R].text, X = A = n * ta(0, this.width - P[R].width), p += w, 0 === l && b + p + S < f) p += S;
                    else {
                        for (var O = 0; O < d.length; O++) {
                            var Y = d.charAt(O);
                            A = this.Iq(Y);
                            Y = this.Sm[Y];
                            if (0 === l && c + X + A * r + K < e) X += A * r + K;
                            else {
                                if (X + A * r > this.width + 1E-5) break;
                                if (void 0 !== Y) {
                                    var H = this.Qm * r,
                                        J = this.wg * r;
                                    B = X;
                                    y = p;
                                    0 === l && 1 === r && (B = Math.round(B), y = Math.round(y));
                                    m.$a = B;
                                    m.ab = y;
                                    m.Cb = B + H;
                                    m.Db = y;
                                    m.qb = B;
                                    m.rb = y + J;
                                    m.sb = B + H;
                                    m.tb = y + J;
                                    0 !== l && (B = m, y = N, H = L, J = void 0, J = B.$a * y - B.ab * H, B.ab = B.ab * y + B.$a * H, B.$a = J, J = B.Cb * y - B.Db * H, B.Db = B.Db * y + B.Cb * H, B.Cb = J, J = B.qb * y - B.rb * H, B.rb = B.rb * y + B.qb * H, B.qb = J, J = B.sb * y - B.tb * H, B.tb = B.tb * y + B.sb * H, B.sb = J);
                                    m.offset(c, b);
                                    a.Cd(m.$a, m.ab, m.Cb, m.Db, m.sb, m.tb, m.qb, m.rb, Y)
                                }
                                X += A * r + K;
                                if (0 === l && c + X > g) break
                            }
                        }
                        p += S;
                        if (0 === l && (p + S + w > this.height || b + p > h)) break
                    }
            }
        };
        c.k = new function() {};
        h.prototype.Np = function(a) {
            la(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
            a = a.toString();
            this.text !== a && (this.text = a, this.Nc = !0, this.b.W = !0)
        };
        h.prototype.up = function(a) {
            la(a) && (a = Math.round(1E10 * a) / 1E10);
            if (a = a.toString()) this.text += a, this.Nc = !0, this.b.W = !0
        };
        h.prototype.Mp = function(a) {
            a !== this.Le && (this.Le = a, this.Nc = !0, this.b.W = !0)
        };
        e.TB = function(a, b) {
            var c = parseInt(b, 10);
            this.xg[a] !== c && (this.xg[a] = c, this.Nc = !0, this.b.W = !0)
        };
        h.prototype.UB = function(a, b) {
            if ("" !== a)
                for (var c =
                    0; c < a.length; c++) this.TB(a.charAt(c), b)
        };
        h.prototype.aC = function(a) {
            this.Ue = a / 2;
            this.Nc = !0;
            this.b.W = !0
        };
        c.n = new h;
        l.prototype.Text = function(a) {
            a.Qa(this.text)
        };
        c.u = new l
    })();

function Qc(f) {
        this.b = f
    }
    (function() {
        function f() {
            return r.length ? r.pop() : {}
        }

        function p(b) {
            var a, c;
            a = 0;
            for (c = b.length; a < c; a++) r.push(b[a]);
            G(b)
        }

        function n(b) {
            return b.length && " " === b.charAt(b.length - 1) ? b.substring(0, b.length - 1) : b
        }

        function h() {}

        function l() {}
        var c = Qc.prototype;
        c.J = function() {
            c.n.ah = function(b) {
                this.width !== b && (this.width = b, this.Nc = !0, this.L())
            }
        };
        c.N = function(b) {
            this.X = b;
            this.b = b.b
        };
        var e = c.N.prototype;
        e.J = function() {};
        e.Ng = function() {
            if (!this.R) {
                var b, a, c;
                b = 0;
                for (a = this.q.length; b < a; b++) c = this.q[b], c.xd = null, c.$e = null, c.yd = null
            }
        };
        c.K = function(b) {
            this.type = b;
            this.b = b.b;
            this.ac ? G(this.Tc) : this.Tc = [];
            this.Nc = !0
        };
        e = c.K.prototype;
        e.J = function() {
            this.text = this.B[0];
            this.visible = 0 === this.B[1];
            this.font = this.B[2];
            this.color = this.B[3];
            this.Ue = this.B[4];
            this.ig = this.B[5];
            this.gm = 0 === this.B[7];
            this.Lh = this.Ze = this.width;
            this.Ye = this.height;
            this.Hr = this.B[8];
            this.Dg = this.Qe = "";
            this.jf = this.fg = this.Pg = 0;
            this.rG();
            this.yd = this.$e = this.xd = null;
            this.Xr = !1;
            this.Kh = this.b.Pd;
            this.ac ? this.ae.set(0, 0, 1, 1) : this.ae = new ya(0, 0, 1, 1);
            this.b.H && this.b.Vg(this)
        };
        e.rG = function() {
            var b = this.font.split(" "),
                a;
            for (a = 0; a < b.length; a++)
                if ("pt" === b[a].substr(b[a].length - 2, 2)) {
                    this.Pg = parseInt(b[a].substr(0, b[a].length - 2));
                    this.Fo = Math.ceil(this.Pg / 72 * 96) + 4;
                    0 < a && (this.Dg = b[a - 1]);
                    this.Qe = b[a + 1];
                    for (a += 2; a < b.length; a++) this.Qe += " " + b[a];
                    break
                }
        };
        e.Wa = function() {
            return {
                t: this.text,
                f: this.font,
                c: this.color,
                ha: this.Ue,
                va: this.ig,
                wr: this.gm,
                lho: this.Hr,
                fn: this.Qe,
                fs: this.Dg,
                ps: this.Pg,
                pxh: this.Fo,
                tw: this.fg,
                th: this.jf,
                lrt: this.Kh
            }
        };
        e.bb = function(b) {
            this.text = b.t;
            this.font = b.f;
            this.color = b.c;
            this.Ue = b.ha;
            this.ig = b.va;
            this.gm = b.wr;
            this.Hr = b.lho;
            this.Qe = b.fn;
            this.Dg = b.fs;
            this.Pg = b.ps;
            this.Fo = b.pxh;
            this.fg = b.tw;
            this.jf = b.th;
            this.Kh = b.lrt;
            this.Nc = !0;
            this.Lh = this.Ze = this.width;
            this.Ye = this.height
        };
        e.Ra = function() {
            if (this.b.H && this.yd && 300 <= this.b.Pd - this.Kh) {
                var b = this.C;
                this.Pa();
                var a = this.Xa;
                if (a.right < b.xa || a.bottom < b.ya || a.left > b.Da || a.top > b.Ca) this.b.H.deleteTexture(this.yd), this.xd = this.$e = this.yd = null
            }
        };
        e.Uc = function() {
            this.xd = this.$e = null;
            this.b.H && this.yd && this.b.H.deleteTexture(this.yd);
            this.yd = null
        };
        e.it = function() {
            this.font = this.Dg + " " + this.Pg.toString() + "pt " + this.Qe;
            this.Nc = !0;
            this.b.W = !0
        };
        e.xb = function(b, a) {
            b.font = this.font;
            b.textBaseline = "top";
            b.fillStyle = this.color;
            b.globalAlpha = a ? 1 : this.opacity;
            var c = 1;
            a && (c = Math.abs(this.C.Rc()), b.save(), b.scale(c, c));
            if (this.Nc || this.width !== this.Lh) this.type.X.Qp(this.text, this.Tc, b, this.width, this.gm), this.Nc = !1, this.Lh = this.width;
            this.Pa();
            var c = a ? 0 : this.cc.$a,
                e = a ? 0 : this.cc.ab;
            this.b.oc && (c = c + .5 | 0, e = e + .5 | 0);
            0 === this.A || a || (b.save(), b.translate(c, e), b.rotate(this.A), e = c = 0);
            var f = e + this.height,
                h = this.Fo,
                h = h + this.Hr,
                l, n;
            1 === this.ig ? e += Math.max(this.height / 2 - this.Tc.length * h / 2, 0) : 2 === this.ig && (e += Math.max(this.height - this.Tc.length * h - 2, 0));
            for (n = 0; n < this.Tc.length && !(l = c, 1 === this.Ue ? l = c + (this.width - this.Tc[n].width) / 2 : 2 === this.Ue && (l = c + (this.width - this.Tc[n].width)), b.fillText(this.Tc[n].text, l, e), e += h, e >= f - h); n++);
            (0 !== this.A || a) && b.restore();
            this.Kh = this.b.Pd
        };
        e.Za = function(b) {
            if (!(1 >
                this.width || 1 > this.height)) {
                var a = this.Nc || this.Xr;
                this.Xr = !1;
                var c = this.C.Rc(),
                    e = this.C.Ib(),
                    f = this.ae,
                    h = c * this.width,
                    l = c * this.height,
                    n = Math.ceil(h),
                    q = Math.ceil(l),
                    p = Math.abs(n),
                    u = Math.abs(q),
                    r = this.b.aa / 2,
                    D = this.b.Z / 2;
                this.$e || (this.xd = document.createElement("canvas"), this.xd.width = p, this.xd.height = u, this.Ze = p, this.Ye = u, a = !0, this.$e = this.xd.getContext("2d"));
                if (p !== this.Ze || u !== this.Ye) this.xd.width = p, this.xd.height = u, this.yd && (b.deleteTexture(this.yd), this.yd = null), a = !0;
                a && (this.$e.clearRect(0, 0, p, u), this.xb(this.$e, !0), this.yd || (this.yd = b.sd(p, u, this.b.Ha, this.b.Kf)), b.Ey(this.xd, this.yd, this.b.Kf));
                this.Ze = p;
                this.Ye = u;
                b.pc(this.yd);
                b.De(this.opacity);
                b.be();
                b.translate(-r, -D);
                b.Qd();
                var x = this.cc,
                    a = this.C.Ua(x.$a, x.ab, !0, !0),
                    p = this.C.Ua(x.$a, x.ab, !1, !0),
                    u = this.C.Ua(x.Cb, x.Db, !0, !0),
                    r = this.C.Ua(x.Cb, x.Db, !1, !0),
                    D = this.C.Ua(x.sb, x.tb, !0, !0),
                    E = this.C.Ua(x.sb, x.tb, !1, !0),
                    F = this.C.Ua(x.qb, x.rb, !0, !0),
                    x = this.C.Ua(x.qb, x.rb, !1, !0);
                if (this.b.oc || 0 === this.A && 0 === e) var S = (a + .5 | 0) - a,
                    w = (p + .5 | 0) -
                    p,
                    a = a + S,
                    p = p + w,
                    u = u + S,
                    r = r + w,
                    D = D + S,
                    E = E + w,
                    F = F + S,
                    x = x + w;
                0 === this.A && 0 === e ? (u = a + n, r = p, D = u, E = p + q, F = a, x = E, f.right = 1, f.bottom = 1) : (f.right = h / n, f.bottom = l / q);
                b.Cd(a, p, u, r, D, E, F, x, f);
                b.be();
                b.scale(c, c);
                b.Jo(-this.C.Ib());
                b.translate((this.C.xa + this.C.Da) / -2, (this.C.ya + this.C.Ca) / -2);
                b.Qd();
                this.Kh = this.b.Pd
            }
        };
        var b = [];
        c.Op = function(c) {
            G(b);
            for (var a = "", e, f = 0; f < c.length;)
                if (e = c.charAt(f), "\n" === e) a.length && (b.push(a), a = ""), b.push("\n"), ++f;
                else if (" " === e || "\t" === e || "-" === e) {
                do a += c.charAt(f), f++; while (f < c.length &&
                    (" " === c.charAt(f) || "\t" === c.charAt(f)));
                b.push(a);
                a = ""
            } else f < c.length && (a += e, f++);
            a.length && b.push(a)
        };
        var r = [];
        c.Qp = function(b, a, c, e, h) {
            if (b && b.length)
                if (2 >= e) p(a);
                else {
                    if (100 >= b.length && -1 === b.indexOf("\n")) {
                        var l = c.measureText(b).width;
                        if (l <= e) {
                            p(a);
                            a.push(f());
                            a[0].text = b;
                            a[0].width = l;
                            return
                        }
                    }
                    this.Rp(b, a, c, e, h)
                } else p(a)
        };
        c.Rp = function(c, a, e, h, k) {
            k && (this.Op(c), c = b);
            var l = "",
                p, C, q, v = 0;
            for (q = 0; q < c.length; q++) "\n" === c[q] ? (v >= a.length && a.push(f()), l = n(l), C = a[v], C.text = l, C.width = e.measureText(l).width, v++, l = "") : (p = l, l += c[q], C = e.measureText(l).width, C >= h && (v >= a.length && a.push(f()), p = n(p), C = a[v], C.text = p, C.width = e.measureText(p).width, v++, l = c[q], k || " " !== l || (l = "")));
            l.length && (v >= a.length && a.push(f()), l = n(l), C = a[v], C.text = l, C.width = e.measureText(l).width, v++);
            for (q = v; q < a.length; q++) r.push(a[q]);
            a.length = v
        };
        c.k = new function() {};
        h.prototype.Np = function(b) {
            la(b) && 1E9 > b && (b = Math.round(1E10 * b) / 1E10);
            b = b.toString();
            this.text !== b && (this.text = b, this.Nc = !0, this.b.W = !0)
        };
        h.prototype.up = function(b) {
            la(b) &&
                (b = Math.round(1E10 * b) / 1E10);
            if (b = b.toString()) this.text += b, this.Nc = !0, this.b.W = !0
        };
        h.prototype.qu = function(b, a) {
            var c = "";
            switch (a) {
                case 1:
                    c = "bold";
                    break;
                case 2:
                    c = "italic";
                    break;
                case 3:
                    c = "bold italic"
            }
            if (b !== this.Qe || c !== this.Dg) this.Qe = b, this.Dg = c, this.it()
        };
        h.prototype.$B = function(b) {
            this.Pg !== b && (this.Pg = b, this.Fo = Math.ceil(this.Pg / 72 * 96) + 4, this.it())
        };
        h.prototype.ZB = function(b) {
            b = "rgb(" + Ba(b).toString() + "," + Ca(b).toString() + "," + Da(b).toString() + ")";
            b !== this.color && (this.color = b, this.Xr = !0, this.b.W = !0)
        };
        c.n = new h;
        l.prototype.Text = function(b) {
            b.Qa(this.text)
        };
        c.u = new l
    })();

function Rc(f) {
        this.b = f
    }
    (function() {
        var f = Rc.prototype;
        f.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        var p = f.N.prototype;
        p.J = function() {
            this.R || (this.M = new Image, this.M.jk = this.Ej, this.b.Kj(this.M, this.ci), this.O = this.pattern = null)
        };
        p.Ng = function() {
            this.R || (this.O = null)
        };
        p.Vh = function() {
            if (!this.R && this.q.length) {
                this.O || (this.O = this.b.H.ed(this.M, !0, this.b.Ha, this.kf));
                var f, h;
                f = 0;
                for (h = this.q.length; f < h; f++) this.q[f].O = this.O
            }
        };
        p.fj = function() {
            this.R || this.O || !this.b.H || (this.O = this.b.H.ed(this.M, !0, this.b.Ha, this.kf))
        };
        p.ei = function() {
            this.R || this.q.length || !this.O || (this.b.H.deleteTexture(this.O), this.O = null)
        };
        p.uj = function(f) {
            f.drawImage(this.M, 0, 0)
        };
        f.K = function(f) {
            this.type = f;
            this.b = f.b
        };
        p = f.K.prototype;
        p.J = function() {
            this.visible = 0 === this.B[0];
            this.ae = new ya(0, 0, 0, 0);
            this.Kv = !1;
            this.M = this.type.M;
            this.b.H ? (this.type.fj(), this.O = this.type.O) : (this.type.pattern || (this.type.pattern = this.b.Sa.createPattern(this.type.M, "repeat")), this.pattern = this.type.pattern)
        };
        p.je = function() {
            this.Kv = !1;
            this.M = this.type.M
        };
        p.Uc = function() {
            this.b.H && this.Kv && this.O && (this.b.H.deleteTexture(this.O), this.O = null)
        };
        p.xb = function(f) {
            f.globalAlpha = this.opacity;
            f.save();
            f.fillStyle = this.pattern;
            var h = this.x,
                l = this.y;
            this.b.oc && (h = Math.round(h), l = Math.round(l));
            var c = -(this.Hc * this.width),
                e = -(this.Ic * this.height),
                b = c % this.M.width,
                p = e % this.M.height;
            0 > b && (b += this.M.width);
            0 > p && (p += this.M.height);
            f.translate(h, l);
            f.rotate(this.A);
            f.translate(b, p);
            f.fillRect(c - b, e - p, this.width, this.height);
            f.restore()
        };
        p.Af = function(f) {
            this.Za(f)
        };
        p.Za = function(f) {
            f.pc(this.O);
            f.De(this.opacity);
            var h = this.ae;
            h.right = this.width / this.M.width;
            h.bottom = this.height / this.M.height;
            var l = this.cc;
            if (this.b.oc) {
                var c = Math.round(this.x) - this.x,
                    e = Math.round(this.y) - this.y;
                f.Cd(l.$a + c, l.ab + e, l.Cb + c, l.Db + e, l.sb + c, l.tb + e, l.qb + c, l.rb + e, h)
            } else f.Cd(l.$a, l.ab, l.Cb, l.Db, l.sb, l.tb, l.qb, l.rb, h)
        };
        f.k = new function() {};
        f.n = new function() {};
        f.u = new function() {}
    })();

function Sc(f) {
        this.b = f
    }
    (function() {
        function f() {
            this.gp = this.id = -1;
            this.Nu = this.Ai = this.Wl = this.Bk = !1;
            this.Na = new ya(0, 0, 0, 0)
        }

        function p(a) {
            1E4 > Q.length && Q.push(a)
        }

        function n() {
            this.id = -1;
            this.Na = new ya(0, 0, 0, 0);
            this.Vf = null
        }

        function h(a) {
            1E4 > C.length && C.push(a)
        }

        function l(a, b, d) {
            var e;
            return q.length ? (e = q.pop(), e.j = a, e.x = b, e.y = d, e.left = e.x * e.j.Ub * e.j.Tb, e.top = e.y * e.j.ec * e.j.Sb, e.clear(), e.tl = !1, e) : new c(a, b, d)
        }

        function c(a, b, c) {
            this.j = a;
            this.x = b;
            this.y = c;
            this.left = this.x * this.j.Ub * this.j.Tb;
            this.top = this.y * this.j.ec * this.j.Sb;
            this.lf = [];
            this.zc = [];
            this.Pc = [];
            this.tl = !1;
            var d, e;
            a = 0;
            for (b = this.j.ec; a < b; ++a) {
                e = [];
                c = 0;
                for (d = this.j.Ub; c < d; ++c) e.push(-1);
                this.lf.push(e)
            }
        }

        function e(a) {
            switch (a) {
                case 0:
                    return 0;
                case 1:
                    return g;
                case 2:
                    return m;
                case 3:
                    return g | k;
                case 4:
                    return g | m;
                case 5:
                    return m | k;
                case 6:
                    return g | m | k;
                case 7:
                    return k;
                default:
                    return 0
            }
        }

        function b() {}

        function r() {}
        var d = Sc.prototype;
        d.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        var a = d.N.prototype;
        a.J = function() {
            var a, b, c;
            if (!this.R && (this.M = new Image, this.M.jk = this.Ej, this.b.Kj(this.M, this.ci), this.jh = [], this.nq = !1, this.Fe = [], this.gy = !1, this.fp && this.fp.length))
                for (a = 0, b = this.fp.length; a < b; ++a)(c = this.fp[a]) ? this.Fe.push({
                    Vf: c,
                    un: [
                        [
                            [null, null],
                            [null, null]
                        ],
                        [
                            [null, null],
                            [null, null]
                        ]
                    ]
                }) : this.Fe.push(null)
        };
        a.ug = function(a, b, c, d, e, f) {
            if (!(0 > a || a >= this.Fe.length) && this.Fe[a]) {
                var g = this.Fe[a].un;
                a = new kb(this.Fe[a].Vf);
                a.fh(b, c, 0);
                f && a.yD();
                d && a.cG(b / 2);
                e && a.JE(c / 2);
                g[d ? 1 : 0][e ? 1 : 0][f ? 1 : 0] = a
            }
        };
        a.Gv = function(a) {
            if (-1 === a) return null;
            var b = a & t;
            return 0 > b || b >= this.Fe.length || !this.Fe[b] ? null : this.Fe[b].un[a & g ? 1 : 0][a & m ? 1 : 0][a & k ? 1 : 0]
        };
        a.Dq = function() {
            var a, b, c = this.b.H;
            if (c)
                for (a = 0, b = this.jh.length; a < b; ++a) c.deleteTexture(this.jh[a]);
            G(this.jh);
            this.nq = !1
        };
        a.Rr = function(a, b, c, d, e, f, g) {
            if (!(this.nq || 0 >= a || 0 >= b)) {
                this.Dq();
                var h = this.M.width,
                    k = this.M.height,
                    l;
                for (l = d; l + b <= k; l += b + f)
                    for (d = c; d + a <= h; d += a + e) this.jh.push(this.gz(d, l, a, b, g));
                this.nq = !0
            }
        };
        a.gz = function(a, b, c, d, e) {
            if (this.b.H) return this.zp(a, b, c, d, !1, !1, !1, e);
            var f = [
                [
                    [null, null],
                    [null, null]
                ],
                [
                    [null, null],
                    [null, null]
                ]
            ];
            f[0][0][0] = this.zp(a, b, c, d, !1, !1, !1, e);
            return {
                un: f,
                x: a,
                y: b,
                pp: c,
                Fn: d
            }
        };
        a.At = function(a, b, c, d, e) {
            if (0 > a || a >= this.jh.length) return null;
            a = this.jh[a];
            var f = a.un;
            b = b ? 1 : 0;
            c = c ? 1 : 0;
            d = d ? 1 : 0;
            var g = f[b][c][d];
            if (g) return g;
            g = this.zp(a.x, a.y, a.pp, a.Fn, 0 !== b, 0 !== c, 0 !== d, e);
            return f[b][c][d] = g
        };
        a.zp = function(a, b, c, d, e, f, g, h) {
            var k = c,
                l = d;
            this.b.H && !h && (na(k) || (k = oa(k)), na(l) || (l = oa(l)));
            var m = document.createElement("canvas");
            m.width = k;
            m.height = l;
            var n = m.getContext("2d");
            if (this.b.Sa) return e ? f ? (g ? (n.rotate(Math.PI / 2), n.scale(-1, 1)) : n.scale(-1, -1), n.translate(-k, -l)) : g ? (n.rotate(Math.PI / 2), n.translate(0, -l)) : (n.scale(-1, 1), n.translate(-k, 0)) : f ? g ? (n.rotate(-Math.PI / 2), n.translate(-k, 0)) : (n.scale(1, -1), n.translate(0, -l)) : g && (n.scale(-1, 1), n.rotate(Math.PI / 2)), n.drawImage(this.M, a, b, c, d, 0, 0, k, l), h ? m : this.b.Sa.createPattern(m, "repeat");
            n.drawImage(this.M, a, b, c, d, 0, 0, k, l);
            a = this.b.H.sd(k, l, this.b.Ha, !1, !h);
            this.b.H.Ey(m, a);
            return a
        };
        a.Ng = function() {
            this.R || this.Dq()
        };
        a.Vh = function() {};
        a.fj = function() {};
        a.ei = function() {
            this.R || this.q.length || this.Dq()
        };
        a.uj = function() {};
        d.K = function(a) {
            this.type = a;
            this.b = a.b
        };
        var a = d.K.prototype,
            g = -2147483648,
            m = 1073741824,
            k = 536870912,
            t = 536870911,
            Q = [],
            C = [],
            q = [];
        c.prototype.clear = function() {
            var a, b, c, d, e;
            this.lf.length = this.j.ec;
            a = 0;
            for (b = this.lf.length; a < b; ++a)
                for (e = this.lf[a], e || (e = [], this.lf[a] = e), e.length = this.j.Ub, c = 0, d = e.length; c < d; ++c) e[c] = -1
        };
        c.prototype.gl = function() {
            if (!this.tl) {
                var a = this.j.Tb,
                    b = this.j.Sb;
                if (!(0 >= a || 0 >= b)) {
                    var c, d, e, l, q, r;
                    c = 0;
                    for (d = this.zc.length; c < d; ++c) p(this.zc[c]);
                    c = 0;
                    for (d = this.Pc.length; c < d; ++c) h(this.Pc[c]);
                    G(this.zc);
                    G(this.Pc);
                    var v = Math.min(this.j.fd, Math.floor(this.j.width / a)),
                        P = Math.min(this.j.wd, Math.floor(this.j.height / b)),
                        v = v - this.left / a,
                        P = P - this.top / b;
                    v > this.j.Ub && (v = this.j.Ub);
                    P > this.j.ec && (P = this.j.ec);
                    var R = this.j.Ce,
                        A = null;
                    c = 0;
                    for (d = P; c < d; ++c) {
                        q = this.lf[c];
                        e = 0;
                        for (l = v; e < l; ++e) r = q[e], -1 === r ? A && (this.zc.push(A), A = null) : R || !A || r !== A.id ? (A && this.zc.push(A), A = Q.length ? Q.pop() : new f, A.id = r, A.gp = r & t, A.Bk = 0 !== (r & g), A.Wl = 0 !== (r & m), A.Ai = 0 !== (r & k), A.Nu = A.Bk || A.Wl || A.Ai, A.Na.left = e * a + this.left, A.Na.top = c * b + this.top, A.Na.right = A.Na.left + a, A.Na.bottom = A.Na.top + b) : A.Na.right += a;
                        A && (this.zc.push(A), A = null)
                    }
                    var A = null,
                        N = !1;
                    c = 0;
                    for (d = P; c < d; ++c) {
                        q = this.lf[c];
                        e = 0;
                        for (l = v; e < l; ++e) r = q[e], -1 === r ? A && (this.Pc.push(A), A = null, N = !1) : (P = this.j.type.Gv(r), !A || P || N ? (A && this.Pc.push(A), A = C.length ? C.pop() : new n, A.id = r, A.Vf = P ? P : null, r = A.Na, r.left = e * a + this.left, r.top = c * b + this.top, r.right = r.left + a, r.bottom = r.top + b, N = !!P) : A.Na.right += a);
                        A && (this.Pc.push(A), A = null, N = !1)
                    }
                    if (!R)
                        for (d = this.zc.length, c = 0; c < d; ++c)
                            for (l = this.zc[c], a = c + 1; a < d; ++a)
                                if (e = this.zc[a], !(e.Na.top < l.Na.bottom)) {
                                    if (e.Na.top > l.Na.bottom) break;
                                    if (e.Na.right > l.Na.right || e.Na.left > l.Na.left) break;
                                    e.id === l.id && e.Na.left === l.Na.left && e.Na.right === l.Na.right && (p(this.zc[a]), this.zc.splice(a, 1), --d, l.Na.bottom += b, --a)
                                }
                    d = this.Pc.length;
                    for (c = 0; c < d; ++c)
                        if (l = this.Pc[c], !l.Vf)
                            for (q = l.Na, a = c + 1; a < d; ++a)
                                if (e = this.Pc[a], l = e.Na, !(l.top < q.bottom)) {
                                    if (l.top > q.bottom) break;
                                    if (l.right > q.right || l.left > q.left) break;
                                    e.Vf || l.left !== q.left || l.right !== q.right || (h(this.Pc[a]), this.Pc.splice(a, 1), --d, q.bottom += b, --a)
                                }
                    this.tl = !0
                }
            }
        };
        c.prototype.Cl = function(a, b, c) {
            this.lf[b][a] !== c && (this.lf[b][a] = c, this.tl = !1, this.j.Fm = !0, this.j.rj = !0, this.j.b.W = !0)
        };
        a.J = function() {
            var a, b, c;
            this.visible = 0 === this.B[0];
            this.Tb = this.B[1];
            this.Sb = this.B[2];
            this.Us = this.B[3];
            this.Ws = this.B[4];
            this.Vs = this.B[5];
            this.Xs = this.B[6];
            this.Ce = 0 !== this.B[7];
            this.fd = this.jy;
            this.wd = this.iy;
            this.Ze = this.width;
            this.Ye = this.height;
            var d = this.Tb,
                e = this.Sb;
            0 === d && (d = 1);
            0 === e && (e = 1);
            this.Ub = Math.ceil(this.b.Mb / d);
            this.ec = Math.ceil(this.b.Lb / e);
            if (!this.type.gy)
                for (this.type.gy = !0, a = 0, b = this.type.Fe.length; a < b; ++a)
                    if (c = this.type.Fe[a]) this.type.ug(a, d, e, !1, !1, !1), this.type.ug(a, d, e, !1, !1, !0), this.type.ug(a, d, e, !1, !0, !1), this.type.ug(a, d, e, !1, !0, !0), this.type.ug(a, d, e, !0, !1, !1), this.type.ug(a, d, e, !0, !1, !0), this.type.ug(a, d, e, !0, !0, !1), this.type.ug(a, d, e, !0, !0, !0);
            this.ac || (this.Xc = []);
            this.Th(!0);
            this.Ns(this.hy);
            this.type.Rr(this.Tb, this.Sb, this.Us, this.Ws, this.Vs, this.Xs, this.Ce);
            this.rj = !1;
            this.Fm = !0;
            this.Qr()
        };
        a.Qr = function() {
            if (this.Fm) {
                var a, b, c, d, e;
                a = 0;
                for (b = this.Xc.length; a < b; ++a)
                    for (e = this.Xc[a], c = 0, d = e.length; c < d; ++c) e[c].gl();
                this.Fm = !1
            }
        };
        a.Al = function() {
            var a, b, c, d, e;
            a = 0;
            for (b = this.Xc.length; a < b; ++a)
                for (e = this.Xc[a], c = 0, d = e.length; c < d; ++c) e[c].tl = !1;
            this.Fm = !0
        };
        a.Th = function(a) {
            var b = z(this.width / this.Tb),
                c = z(this.height / this.Sb);
            if (!(b <= this.fd && c <= this.wd) || a) {
                var d;
                a ? (a = Math.ceil(this.wd / this.ec), d = Math.ceil(this.fd / this.Ub)) : (a = this.Xc.length, d = Math.ceil(this.fd / this.Ub), c > this.wd && (this.wd = c, a = Math.ceil(this.wd / this.ec)), b > this.fd && (this.fd = b, d = Math.ceil(this.fd / this.Ub)), this.Al(), this.rj = !0, this.b.W = !0);
                for (var e, b = 0; b < a; ++b)
                    if (e = this.Xc[b])
                        for (c = e.length; c < d; ++c) e.push(l(this, c, b));
                    else {
                        e = [];
                        for (c = 0; c < d; ++c) e.push(l(this, c, b));
                        this.Xc[b] = e
                    }
            }
        };
        a.bq = function(a, b) {
            if (0 > a || 0 > b) return null;
            var c = z(b / this.ec);
            if (c >= this.Xc.length) return null;
            var c = this.Xc[c],
                d = z(a / this.Ub);
            return d >= c.length ? null : c[d]
        };
        a.cq = function(a, b) {
            if (0 > a || 0 > b || b >= this.Xc.length) return null;
            var c = this.Xc[b];
            return a >= c.length ? null : c[a]
        };
        a.Ns = function(a) {
            var b = [];
            a = a.split(",");
            var c, d, e, f, h;
            c = 0;
            for (d = a.length; c < d; ++c)
                if (e = a[c], f = e.indexOf("x"), -1 < f)
                    for (h = parseInt(e.substring(0, f), 10), e = e.substring(f + 1), f = parseInt(e, 10), -1 < e.indexOf("h") && (f |= g), -1 < e.indexOf("v") && (f |= m), -1 < e.indexOf("d") && (f |= k); 0 < h; --h) b.push(f);
                else f = parseInt(e, 10), -1 < e.indexOf("h") && (f |= g), -1 < e.indexOf("v") && (f |= m), -1 < e.indexOf("d") && (f |= k), b.push(f);
            for (c = a = 0; c < this.wd; ++c)
                for (d = 0; d < this.fd; ++d) h = b[a++], (e = this.bq(d, c)) && e.Cl(d % this.Ub, c % this.ec, h)
        };
        a.Rq = function() {
            var a = "";
            if (0 >= this.fd || 0 >= this.wd) return a;
            var b = 1,
                c = this.Qq(0, 0),
                d, e, f, h, l, n, q, p;
            h = z(this.width / this.Tb);
            e = z(this.height / this.Sb);
            for (d = 0; d < e; ++d)
                for (f = 0 === d ? 1 : 0; f < h; ++f) l = this.Qq(f, d), l === c ? ++b : (-1 === c ? (n = -1, c = p = q = !1) : (n = c & t, q = 0 !== (c & g), p = 0 !== (c & m), c = 0 !== (c & k)), a = 1 === b ? a + ("" + n) : a + ("" + b + "x" + n), q && (a += "h"), p && (a += "v"), c && (a += "d"), a += ",", b = 1, c = l); - 1 === c ? (n = -1, c = p = q = !1) : (n = c & t, q = 0 !== (c & g), p = 0 !== (c & m), c = 0 !== (c & k));
            a = 1 === b ? a + ("" + n) : a + ("" + b + "x" + n);
            q && (a += "h");
            p && (a += "v");
            c && (a += "d");
            return a
        };
        a.Qq = function(a, b) {
            a = Math.floor(a);
            b = Math.floor(b);
            if (0 > a || 0 > b || a >= this.fd || b >= this.wd) return -1;
            var c = this.bq(a, b);
            return c ? c.lf[b % this.ec][a % this.Ub] : -1
        };
        a.Cl = function(a, b, c) {
            a = Math.floor(a);
            b = Math.floor(b);
            if (0 > a || 0 > b || a >= this.fd || b >= this.wd) return -1;
            var d = this.bq(a, b);
            if (!d) return -1;
            d.Cl(a % this.Ub, b % this.ec, c)
        };
        a.Gy = function(a) {
            return Math.floor((a - this.x) / (this.Ub * this.Tb))
        };
        a.Hy = function(a) {
            return Math.floor((a - this.y) / (this.ec * this.Sb))
        };
        a.DH = function(a) {
            return Math.floor((a - this.x) / this.Tb)
        };
        a.EH = function(a) {
            return Math.floor((a - this.y) / this.Sb)
        };
        a.PE = function(a, b) {
            var c = this.Hy(a.top),
                d = this.Gy(a.right),
                e = this.Hy(a.bottom),
                f, g, h;
            for (f = this.Gy(a.left); f <= d; ++f)
                for (g = c; g <= e; ++g)
                    if (h = this.cq(f, g)) h.gl(), Ia(b, h.Pc)
        };
        a.oH = function(a, b) {
            var c = this.Qq(this.DH(a), this.EH(b));
            if (-1 === c) return !1;
            c = this.type.Gv(c);
            if (!c) return !0;
            var d = Math.floor((b - this.y) / this.Sb) * this.Sb + this.y;
            a -= Math.floor((a - this.x) / this.Tb) * this.Tb + this.x;
            return c.qc(a,
                b - d)
        };
        a.qd = function(a) {
            var b, c, d, e, f, g;
            b = 0;
            for (c = this.Xc.length; b < c; ++b)
                for (f = this.Xc[b], d = 0, e = f.length; d < e; ++d) g = f[d], g.gl(), Ia(a, g.Pc)
        };
        a.Uc = function() {
            var a, b, c, d, e;
            a = 0;
            for (b = this.Xc.length; a < b; ++a) {
                e = this.Xc[a];
                c = 0;
                for (d = e.length; c < d; ++c) {
                    for (var f = e[c], g = void 0, k = void 0, g = 0, k = f.zc.length; g < k; ++g) p(f.zc[g]);
                    G(f.zc);
                    g = 0;
                    for (k = f.Pc.length; g < k; ++g) h(f.Pc[g]);
                    G(f.Pc);
                    1E3 > q.length && q.push(f)
                }
                G(e)
            }
            G(this.Xc)
        };
        a.Wa = function() {
            this.Th();
            return {
                w: z(this.width / this.Tb),
                h: z(this.height / this.Sb),
                d: this.Rq()
            }
        };
        a.bb = function(a) {
            this.fd = a.w;
            this.wd = a.h;
            this.Th(!0);
            this.Ns(a.d);
            this.rj = !0;
            this.Al()
        };
        a.xb = function(a) {
            if (!(0 >= this.Tb || 0 >= this.Sb)) {
                this.type.Rr(this.Tb, this.Sb, this.Us, this.Ws, this.Vs, this.Xs, this.Ce);
                if (this.width !== this.Ze || this.height !== this.Ye) this.rj = !0, this.Al(), this.Qr(), this.Ze = this.width, this.Ye = this.height;
                a.globalAlpha = this.opacity;
                var b = this.C,
                    c = b.xa,
                    d = b.ya,
                    e = b.Da,
                    b = b.Ca,
                    f = this.x,
                    g = this.y,
                    h = this.Ce,
                    k;
                this.b.oc && (f = Math.round(f), g = Math.round(g));
                var l = this.Ub * this.Tb,
                    m = this.ec * this.Sb,
                    n = Math.floor((c - f) / l),
                    l = Math.floor((e - f) / l),
                    q = Math.floor((d - g) / m),
                    m = Math.floor((b - g) / m),
                    p = f % this.Tb,
                    r = g % this.Sb;
                this.Ce && (r = p = 0);
                if (0 !== p || 0 !== r) a.save(), a.translate(p, r), f -= p, g -= r, c -= p, d -= r, e -= p, b -= r;
                for (var t, v, C, Q, H, J, T, ea, U; n <= l; ++n)
                    for (t = q; t <= m; ++t)
                        if (v = this.cq(n, t))
                            for (v.gl(), C = 0, Q = v.zc.length; C < Q; ++C) H = v.zc[C], -1 !== H.id && (k = H.Na, J = k.left + f, T = k.top + g, ea = k.right + f, k = k.bottom + g, J > e || ea < c || T > b || k < d || (U = this.type.At(H.gp, H.Bk, H.Wl, H.Ai, this.Ce), h ? a.drawImage(U, J, T) : (a.fillStyle = this.type.At(H.gp,
                                H.Bk, H.Wl, H.Ai, this.Ce), a.fillRect(J, T, ea - J, k - T))));
                0 === p && 0 === r || a.restore()
            }
        };
        var v = new ya(0, 0, 1, 1);
        a.Af = function(a) {
            this.Za(a)
        };
        a.Za = function(a) {
            if (!(0 >= this.Tb || 0 >= this.Sb)) {
                this.type.Rr(this.Tb, this.Sb, this.Us, this.Ws, this.Vs, this.Xs, this.Ce);
                if (this.width !== this.Ze || this.height !== this.Ye) this.rj = !0, this.Al(), this.Qr(), this.Ze = this.width, this.Ye = this.height;
                a.De(this.opacity);
                var b = this.type.jh,
                    c = this.C,
                    d = c.xa,
                    e = c.ya,
                    f = c.Da,
                    c = c.Ca,
                    g = this.x,
                    h = this.y,
                    k;
                this.b.oc && (g = Math.round(g), h = Math.round(h));
                var l = this.Ub * this.Tb,
                    m = this.ec * this.Sb,
                    n = Math.floor((f - g) / l),
                    q = Math.floor((e - h) / m),
                    m = Math.floor((c - h) / m),
                    p, r, t, C, O, Q, H, J, T, ea, U, pa, ja, aa, hb, gb, Ra;
                for (hb = Math.floor((d - g) / l); hb <= n; ++hb)
                    for (gb = q; gb <= m; ++gb)
                        if (Ra = this.cq(hb, gb))
                            for (Ra.gl(), l = 0, p = Ra.zc.length; l < p; ++l) r = Ra.zc[l], -1 !== r.id && (k = r.Na, t = k.left + g, C = k.top + h, O = k.right + g, k = k.bottom + h, t > f || O < d || C > c || k < e || (a.pc(b[r.gp]), v.right = (O - t) / this.Tb, v.bottom = (k - C) / this.Sb, r.Nu ? (r.Ai && (aa = v.right, v.right = v.bottom, v.bottom = aa), H = Q = 0, J = v.right, T = 0, ea = v.right,
                                U = v.bottom, pa = 0, ja = v.bottom, r.Ai && (aa = pa, pa = J, J = aa, aa = ja, ja = T, T = aa), r.Bk && (aa = Q, Q = J, J = aa, aa = H, H = T, T = aa, aa = pa, pa = ea, ea = aa, aa = ja, ja = U, U = aa), r.Wl && (aa = Q, Q = pa, pa = aa, aa = H, H = ja, ja = aa, aa = J, J = ea, ea = aa, aa = T, T = U, U = aa), a.FG(t, C, O, C, O, k, t, k, Q, H, J, T, ea, U, pa, ja)) : a.Cd(t, C, O, C, O, k, t, k, v)))
            }
        };
        d.k = new function() {};
        b.prototype.uC = function(a, b, c, d) {
            this.Th();
            this.Cl(a, b, c & t | e(d))
        };
        b.prototype.vC = function(a, b, c, d, f, g) {
            this.Th();
            var h = Math.floor(ta(a, 0));
            a = Math.floor(ua(a + c, this.fd));
            d = Math.floor(ua(b + d, this.wd));
            f = f & t | e(g);
            for (g = Math.floor(ta(b, 0)); g < d; ++g)
                for (b = h; b < a; ++b) this.Cl(b, g, f)
        };
        b.prototype.bA = function(a) {
            var b;
            try {
                b = JSON.parse(a)
            } catch (c) {
                return
            }
            b.c2tilemap && (this.fd = b.width, this.wd = b.height, this.Th(!0), this.Ns(b.data), this.Al(), this.rj = !0)
        };
        b.prototype.Et = function(a) {
            var b = document.createElement("a"),
                c = {
                    c2tilemap: !0,
                    width: this.fd,
                    height: this.wd,
                    data: this.Rq()
                };
            if ("undefined" === typeof b.qd) b = "data:text/html," + encodeURIComponent("<p><a download='data.json' href=\"data:application/json," + encodeURIComponent(JSON.stringify(c)) + '">Download link</a></p>'), window.open("7k7k.com");
            else {
                var d = document.getElementsByTagName("body")[0];
                b.textContent = a;
                b.href = "data:application/json," + encodeURIComponent(JSON.stringify(c));
                b.qd = a;
                d.appendChild(b);
                a = document.createEvent("MouseEvent");
                a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                b.dispatchEvent(a);
                d.removeChild(b)
            }
        };
        d.n = new b;
        r.prototype.IC = function(a) {
            this.Th();
            a.Qa(JSON.stringify({
                c2tilemap: !0,
                width: z(this.width / this.Tb),
                height: z(this.height / this.Sb),
                data: this.Rq()
            }))
        };
        d.u = new r
    })();

function Tc(f) {
        this.b = f
    }
    (function() {
        function f(b) {
            r = b.x;
            d = b.y;
            a = b.z
        }

        function p(a, b, c, d) {
            var e;
            e = g.length ? g.pop() : new n;
            e.init(a, b, c, d);
            return e
        }

        function n() {
            this.Jl = this.id = this.Nh = this.Mh = this.y = this.x = this.$o = this.Zo = this.Cr = this.time = this.Ss = 0;
            this.Pl = this.kp = !1
        }

        function h() {}

        function l() {}
        var c = Tc.prototype;
        c.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        c.N.prototype.J = function() {};
        c.K = function(a) {
            this.type = a;
            this.b = a.b;
            this.touches = [];
            this.Ur = !1
        };
        var e = c.K.prototype,
            b = {
                left: 0,
                top: 0
            };
        e.tk = function(a) {
            var b, c;
            b = 0;
            for (c = this.touches.length; b < c; b++)
                if (this.touches[b].id === a) return b;
            return -1
        };
        var r = 0,
            d = 0,
            a = 0,
            g = [];
        n.prototype.init = function(a, b, c, d) {
            var e = cb();
            this.Ss = this.Cr = this.time = e;
            this.Zo = a;
            this.$o = b;
            this.x = a;
            this.y = b;
            this.Mh = a;
            this.Nh = b;
            this.pressure = this.height = this.width = 0;
            this.id = c;
            this.Jl = d;
            this.Pl = this.kp = !1
        };
        n.prototype.update = function(a, b, c, d, e, f) {
            this.Cr = this.time;
            this.time = a;
            this.Mh = this.x;
            this.Nh = this.y;
            this.x = b;
            this.y = c;
            this.width = d;
            this.height = e;
            this.pressure = f;
            !this.Pl && 15 <= Ya(this.Zo, this.$o, this.x, this.y) && (this.Pl = !0)
        };
        n.prototype.$F = function(a, b) {
            !this.kp && 500 <= cb() - this.Ss && !this.Pl && 15 > Ya(this.Zo, this.$o, this.x, this.y) && (this.kp = !0, a.nf = this.Jl, a.Gj = this.id, a.Ji = b, a.b.trigger(Tc.prototype.k.GA, a), a.xf = this.x, a.yf = this.y, a.b.trigger(Tc.prototype.k.HA, a), a.Ji = 0)
        };
        var m = -1E3,
            k = -1E3,
            t = -1E4;
        n.prototype.Iw = function(a, b) {
            if (!this.kp) {
                var c = cb();
                333 >= c - this.Ss && !this.Pl && 15 > Ya(this.Zo, this.$o, this.x, this.y) && (a.nf = this.Jl, a.Gj = this.id, a.Ji = b, 666 >= c - t && 25 > Ya(m, k, this.x, this.y) ? (a.b.trigger(Tc.prototype.k.sA, a), a.xf = this.x, a.yf = this.y, a.b.trigger(Tc.prototype.k.Qt, a), k = m = -1E3, t = -1E4) : (a.b.trigger(Tc.prototype.k.nB, a), a.xf = this.x, a.yf = this.y, a.b.trigger(Tc.prototype.k.ou, a), m = this.x, k = this.y, t = c), a.Ji = 0)
            }
        };
        e.J = function() {
            this.KF = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Ji = this.Gj = this.nf = this.yf = this.xf = this.Hu = this.Gu = this.Fu = this.ZC = this.YC = this.XC = this.qo = this.po = this.oo = 0;
            this.tH = 0 !== this.B[0];
            var a = 0 < this.b.Qc ? document : this.b.canvas,
                b = document;
            this.b.hc ? b = a = window.Canvas : this.b.dd && (b = a = window);
            var c = this;
            "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
                c.Yw(a)
            }, !1), a.addEventListener("pointermove", function(a) {
                c.Xw(a)
            }, !1), b.addEventListener("pointerup", function(a) {
                c.no(a, !1)
            }, !1), b.addEventListener("pointercancel", function(a) {
                c.no(a, !0)
            }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("gesturehold", function(a) {
                a.preventDefault()
            }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
                c.Yw(a)
            }, !1), a.addEventListener("MSPointerMove", function(a) {
                c.Xw(a)
            }, !1), b.addEventListener("MSPointerUp", function(a) {
                c.no(a, !1)
            }, !1), b.addEventListener("MSPointerCancel", function(a) {
                c.no(a, !0)
            }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1), document.addEventListener("MSGestureHold", function(a) {
                a.preventDefault()
            }, !1))) : (a.addEventListener("touchstart", function(a) {
                c.ax(a)
            }, !1), a.addEventListener("touchmove", function(a) {
                c.$w(a)
            }, !1), b.addEventListener("touchend", function(a) {
                c.gs(a, !1)
            }, !1), b.addEventListener("touchcancel", function(a) {
                c.gs(a, !0)
            }, !1));
            if (this.KF) {
                var d = function(a) {
                        a = a.reading;
                        c.Fu = a.accelerationX;
                        c.Gu = a.accelerationY;
                        c.Hu = a.accelerationZ
                    },
                    e = function(a) {
                        a = a.reading;
                        c.oo = a.yawDegrees;
                        c.po = a.pitchDegrees;
                        c.qo = a.rollDegrees
                    },
                    g = Windows.Devices.Sensors.Accelerometer.getDefault();
                g && (g.reportInterval = Math.max(g.minimumReportInterval, 16), g.addEventListener("readingchanged", d));
                var h = Windows.Devices.Sensors.Inclinometer.getDefault();
                h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
                document.addEventListener("visibilitychange", function() {
                    document.hidden || document.msHidden ? (g && g.removeEventListener("readingchanged", d), h && h.removeEventListener("readingchanged", e)) : (g && g.addEventListener("readingchanged", d), h && h.addEventListener("readingchanged", e))
                }, !1)
            } else window.addEventListener("deviceorientation", function(a) {
                c.oo = a.alpha || 0;
                c.po = a.beta || 0;
                c.qo = a.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(a) {
                a.accelerationIncludingGravity && (c.XC = a.accelerationIncludingGravity.x || 0, c.YC = a.accelerationIncludingGravity.y || 0, c.ZC = a.accelerationIncludingGravity.z || 0);
                a.acceleration && (c.Fu = a.acceleration.x || 0, c.Gu = a.acceleration.y || 0, c.Hu = a.acceleration.z || 0)
            }, !1);
            this.tH && !this.b.ba && (jQuery(document).mousemove(function(a) {
                c.cs(a)
            }), jQuery(document).mousedown(function(a) {
                c.bs(a)
            }), jQuery(document).mouseup(function(a) {
                c.ds(a)
            }));
            !this.b.Jb && this.b.Sc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(f, null, {
                frequency: 40
            });
            this.b.qH(this)
        };
        e.Xw = function(a) {
            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
                a.preventDefault && a.preventDefault();
                var c = this.tk(a.pointerId),
                    d = cb();
                if (0 <= c) {
                    var e = this.b.ba ? b : jQuery(this.b.canvas).offset(),
                        c = this.touches[c];
                    2 > d - c.time || c.update(d, a.pageX - e.left, a.pageY - e.top, a.width || 0, a.height || 0, a.pressure || 0)
                }
            }
        };
        e.Yw = function(a) {
            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
                a.preventDefault && rb(a) && a.preventDefault();
                var c = this.b.ba ? b : jQuery(this.b.canvas).offset(),
                    d = a.pageX - c.left,
                    c = a.pageY - c.top;
                cb();
                this.nf = this.touches.length;
                this.Gj = a.pointerId;
                this.touches.push(p(d, c, a.pointerId, this.nf));
                this.b.yb = !0;
                this.b.trigger(Tc.prototype.k.iu, this);
                this.b.trigger(Tc.prototype.k.Jp, this);
                this.xf = d;
                this.yf = c;
                this.b.trigger(Tc.prototype.k.Ip, this);
                this.b.yb = !1
            }
        };
        e.no = function(a, b) {
            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
                a.preventDefault && rb(a) && a.preventDefault();
                var c = this.tk(a.pointerId);
                this.nf = 0 <= c ? this.touches[c].Jl : -1;
                this.Gj = 0 <= c ? this.touches[c].id : -1;
                this.b.yb = !0;
                this.b.trigger(Tc.prototype.k.hu, this);
                this.b.trigger(Tc.prototype.k.Hp, this);
                0 <= c && (b || this.touches[c].Iw(this, c), 100 > g.length && g.push(this.touches[c]), this.touches.splice(c, 1));
                this.b.yb = !1
            }
        };
        e.$w = function(a) {
            a.preventDefault && a.preventDefault();
            var c = cb(),
                d, e, f, g;
            d = 0;
            for (e = a.changedTouches.length; d < e; d++)
                if (f = a.changedTouches[d], g = this.tk(f.identifier), 0 <= g) {
                    var h = this.b.ba ? b : jQuery(this.b.canvas).offset();
                    g = this.touches[g];
                    2 > c - g.time || g.update(c, f.pageX - h.left, f.pageY - h.top, 2 * (f.tI || f.zI || f.iI || f.lI || 0), 2 * (f.uI || f.AI || f.jI || f.mI || 0), f.dI || f.yI || f.hI || f.kI || 0)
                }
        };
        e.ax = function(a) {
            a.preventDefault && rb(a) && a.preventDefault();
            var c = this.b.ba ? b : jQuery(this.b.canvas).offset();
            cb();
            this.b.yb = !0;
            var d, e, f, g;
            d = 0;
            for (e = a.changedTouches.length; d < e; d++)
                if (f = a.changedTouches[d], g = this.tk(f.identifier), -1 === g) {
                    g = f.pageX - c.left;
                    var h = f.pageY - c.top;
                    this.nf = this.touches.length;
                    this.Gj = f.identifier;
                    this.touches.push(p(g, h, f.identifier, this.nf));
                    this.b.trigger(Tc.prototype.k.iu, this);
                    this.b.trigger(Tc.prototype.k.Jp, this);
                    this.xf = g;
                    this.yf = h;
                    this.b.trigger(Tc.prototype.k.Ip, this)
                }
            this.b.yb = !1
        };
        e.gs = function(a, b) {
            a.preventDefault && rb(a) && a.preventDefault();
            this.b.yb = !0;
            var c, d, e;
            c = 0;
            for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.tk(e.identifier), 0 <= e && (this.nf = this.touches[e].Jl, this.Gj = this.touches[e].id, this.b.trigger(Tc.prototype.k.hu, this), this.b.trigger(Tc.prototype.k.Hp, this), b || this.touches[e].Iw(this, e), 100 > g.length && g.push(this.touches[e]), this.touches.splice(e, 1));
            this.b.yb = !1
        };
        e.qd = function() {
            return this.b.Sc && 0 === this.oo && 0 !== a ? 90 * a : this.oo
        };
        e.Pk = function() {
            return this.b.Sc && 0 === this.po && 0 !== d ? 90 * d : this.po
        };
        e.Yv = function() {
            return this.b.Sc && 0 === this.qo && 0 !== r ? 90 * r : this.qo
        };
        e.bs = function(a) {
            this.ax({
                changedTouches: [{
                    pageX: a.pageX,
                    pageY: a.pageY,
                    identifier: 0
                }]
            });
            this.Ur = !0
        };
        e.cs = function(a) {
            this.Ur && this.$w({
                changedTouches: [{
                    pageX: a.pageX,
                    pageY: a.pageY,
                    identifier: 0
                }]
            })
        };
        e.ds = function(a) {
            a.preventDefault && this.b.Gn && !this.b.Kf && a.preventDefault();
            this.b.Gn = !0;
            this.gs({
                changedTouches: [{
                    pageX: a.pageX,
                    pageY: a.pageY,
                    identifier: 0
                }]
            });
            this.Ur = !1
        };
        e.ep = function() {
            var a, b, c, d = cb();
            a = 0;
            for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Cr = d), c.$F(this, a)
        };
        h.prototype.Jp = function() {
            return !0
        };
        h.prototype.Hp = function() {
            return !0
        };
        h.prototype.Fz = function() {
            return this.touches.length
        };
        h.prototype.Ip = function(a) {
            return a ? this.b.Dj(a, this.xf, this.yf, !1) : !1
        };
        var Q = [];
        h.prototype.Qz = function(a) {
            if (!a) return !1;
            var b = a.V(),
                c = b.vc(),
                d, e, f, g, h, k;
            f = 0;
            for (g = c.length; f < g; f++) {
                var l = c[f];
                l.Pa();
                h = 0;
                for (k = this.touches.length; h < k; h++)
                    if (e = this.touches[h], d = l.C.ub(e.x, e.y, !0), e = l.C.ub(e.x, e.y, !1), l.qc(d, e)) {
                        Q.push(l);
                        break
                    }
            }
            return Q.length ? (b.Y = !1, Ha(b.q, Q), a.ad(), G(Q), !0) : !1
        };
        h.prototype.iu = function(a) {
            a = Math.floor(a);
            return a === this.nf
        };
        h.prototype.hu = function(a) {
            a = Math.floor(a);
            return a === this.nf
        };
        h.prototype.GA = function() {
            return !0
        };
        h.prototype.nB = function() {
            return !0
        };
        h.prototype.sA = function() {
            return !0
        };
        h.prototype.HA = function(a) {
            return a ? this.b.Dj(a, this.xf, this.yf, !1) : !1
        };
        h.prototype.ou = function(a) {
            return a ? this.b.Dj(a, this.xf, this.yf, !1) : !1
        };
        h.prototype.Qt = function(a) {
            return a ? this.b.Dj(a, this.xf, this.yf, !1) : !1
        };
        c.k = new h;
        l.prototype.JC = function(a) {
            a.ca(this.touches.length)
        };
        l.prototype.rf = function(a, b) {
            var c = this.Ji;
            if (0 > c || c >= this.touches.length) a.I(0);
            else {
                var d, e, f, g, h;
                ka(b) ? (d = this.b.Se(0), e = d.scale, f = d.Oc, g = d.gd, h = d.A, d.scale = 1, d.Oc = 1, d.gd = 1, d.A = 0, a.I(d.ub(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.Oc = f, d.gd = g, d.A = h) : (d = la(b) ? this.b.Se(b) : this.b.Ii(b)) ? a.I(d.ub(this.touches[c].x, this.touches[c].y, !0)) : a.I(0)
            }
        };
        l.prototype.sf = function(a, b) {
            var c = this.Ji;
            if (0 > c || c >= this.touches.length) a.I(0);
            else {
                var d, e, f, g, h;
                ka(b) ? (d = this.b.Se(0), e = d.scale, f = d.Oc, g = d.hd, h = d.A, d.scale = 1, d.Oc = 1, d.hd = 1, d.A = 0, a.I(d.ub(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.Oc = f, d.hd = g, d.A = h) : (d = la(b) ? this.b.Se(b) : this.b.Ii(b)) ? a.I(d.ub(this.touches[c].x, this.touches[c].y, !1)) : a.I(0)
            }
        };
        c.u = new l
    })();

function Uc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}
        var n = Uc.prototype;
        n.N = function(a) {
            this.X = a;
            this.b = a.b
        };
        var h = "",
            l = "",
            c = !0,
            e = !0,
            b = "",
            r = "";
        n.N.prototype.J = function() {
            if (this.b.Oi || this.b.Si || this.b.Jc || this.b.We) {
                for (var a = document.getElementsByTagName("script"), b = !1, c = 0; c < a.length; c++)
                    if (-1 != a[c].src.indexOf("cordova.js") || -1 != a[c].src.indexOf("phonegap.js")) {
                        b = !0;
                        break
                    }
                b || (a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("src", "cordova.js"), document.getElementsByTagName("head")[0].appendChild(a))
            }
        };
        n.K = function(a) {
            this.type = a;
            this.b = a.b
        };
        var d = n.K.prototype;
        d.J = function() {
            function a() {
                window.admob.setLicenseKey(b, r);
                window.admob.setUp(h, l, c, e);
                window.admob.onBannerAdPreloaded = function() {
                    d.b.trigger(Uc.prototype.k.nA, d)
                };
                window.admob.onBannerAdLoaded = function() {
                    d.b.trigger(Uc.prototype.k.mA, d)
                };
                window.admob.onBannerAdShown = function() {
                    d.b.trigger(Uc.prototype.k.oA, d)
                };
                window.admob.onBannerAdHidden = function() {
                    d.b.trigger(Uc.prototype.k.lA, d)
                };
                window.admob.onInterstitialAdPreloaded = function() {
                    d.b.trigger(Uc.prototype.k.Ut, d)
                };
                window.admob.onInterstitialAdLoaded = function() {
                    d.b.trigger(Uc.prototype.k.KA, d)
                };
                window.admob.onInterstitialAdShown = function() {
                    d.b.trigger(Uc.prototype.k.LA, d)
                };
                window.admob.onInterstitialAdHidden = function() {
                    d.b.trigger(Uc.prototype.k.Tt, d)
                }
            }
            if (this.b.gc || this.b.Jb || this.b.Jc || this.b.We) {
                if (this.b.gc) h = this.B[0], l = this.B[1];
                else if (this.b.Jb) h = this.B[2], l = this.B[3];
                else if (this.b.Jc || this.b.We) h = this.B[4], l = this.B[5];
                c = 0 == this.B[6] ? !1 : !0;
                e = 0 == this.B[7] ? !1 : !0;
                b = "cranberrygame@yahoo.com";
                r = "5b4b290b7b56336df0c9837521822164";
                var d = this;
                "undefined" != typeof window.admob ? a() : setTimeout(a, 600)
            }
        };
        d.xb = function() {};
        d.Za = function() {};
        f.prototype.nA = function() {
            return !0
        };
        f.prototype.mA = function() {
            return !0
        };
        f.prototype.oA = function() {
            return !0
        };
        f.prototype.lA = function() {
            return !0
        };
        f.prototype.Ut = function() {
            return !0
        };
        f.prototype.KA = function() {
            return !0
        };
        f.prototype.LA = function() {
            return !0
        };
        f.prototype.Tt = function() {
            return !0
        };
        n.k = new f;
        p.prototype.EB = function() {
            (this.b.gc || this.b.Jb || this.b.Jc || this.b.We) && "undefined" != typeof window.admob && window.admob.preloadInterstitialAd()
        };
        p.prototype.BC = function() {
            (this.b.gc || this.b.Jb || this.b.Jc || this.b.We) && "undefined" != typeof window.admob && window.admob.showInterstitialAd()
        };
        n.n = new p;
        n.u = new function() {}
    })();

function Vc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Vc.prototype;
        h.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {
            if (this.b.Oi || this.b.Si || this.b.Jc || this.b.We) {
                for (var c = document.getElementsByTagName("script"), e = !1, b = 0; b < c.length; b++)
                    if (-1 != c[b].src.indexOf("cordova.js") || -1 != c[b].src.indexOf("phonegap.js")) {
                        e = !0;
                        break
                    }
                e || (c = document.createElement("script"), c.setAttribute("type", "text/javascript"), c.setAttribute("src", "cordova.js"), document.getElementsByTagName("head")[0].appendChild(c))
            }
        };
        h.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var l = h.K.prototype;
        l.J = function() {
            if ((this.b.gc || this.b.Jb) && "undefined" != typeof game) {
                var c = this;
                game.setUp();
                game.onLoginSucceeded = function(e) {
                    c.oI = e.playerId;
                    c.tG = e.playerDisplayName;
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.eu, c)
                };
                game.onLoginFailed = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.VA, c)
                };
                game.onGetPlayerImageSucceeded = function(e) {
                    c.pI = e;
                    c.b.trigger(Vc.prototype.k.BA, c)
                };
                game.onGetPlayerImageFailed = function() {
                    c.b.trigger(Vc.prototype.k.AA, c)
                };
                game.onGetPlayerScoreSucceeded = function(e) {
                    c.qI = e;
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.DA, c)
                };
                game.onGetPlayerScoreFailed = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.CA, c)
                };
                game.onSubmitScoreSucceeded = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.mB, c)
                };
                game.onSubmitScoreFailed = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.lB, c)
                };
                game.onUnlockAchievementSucceeded = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.rB, c)
                };
                game.onUnlockAchievementFailed = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.qB, c)
                };
                game.onIncrementAchievementSucceeded = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.JA, c)
                };
                game.onIncrementAchievementFailed = function() {
                    c.La = game.tag;
                    c.b.trigger(Vc.prototype.k.IA, c)
                };
                game.onResetAchievementsSucceeded = function() {
                    c.b.trigger(Vc.prototype.k.iB, c)
                };
                game.onResetAchievementsFailed = function() {
                    c.b.trigger(Vc.prototype.k.hB, c)
                }
            }
        };
        l.xb = function() {};
        l.Za = function() {};
        f.prototype.eu = function(c) {
            return qb(c, this.La)
        };
        f.prototype.VA = function(c) {
            return qb(c, this.La)
        };
        f.prototype.Hz = function() {
            return !this.b.gc && !this.b.Jb || "undefined" == typeof game ? !1 : game.isLoggedIn()
        };
        f.prototype.BA = function() {
            return !0
        };
        f.prototype.AA = function() {
            return !0
        };
        f.prototype.DA = function(c) {
            return qb(c, this.La)
        };
        f.prototype.CA = function(c) {
            return qb(c, this.La)
        };
        f.prototype.mB = function(c) {
            return qb(c, this.La)
        };
        f.prototype.lB = function(c) {
            return qb(c, this.La)
        };
        f.prototype.rB = function(c) {
            return qb(c, this.La)
        };
        f.prototype.qB = function(c) {
            return qb(c, this.La)
        };
        f.prototype.JA = function(c) {
            return qb(c, this.La)
        };
        f.prototype.IA = function(c) {
            return qb(c, this.La)
        };
        f.prototype.iB = function() {
            return !0
        };
        f.prototype.hB = function() {
            return !0
        };
        h.k = new f;
        p.prototype.Bp = function(c) {
            (this.b.gc || this.b.Jb) && "undefined" != typeof game && game.login(c)
        };
        p.prototype.GC = function(c, e, b) {
            (this.b.gc || this.b.Jb) && "undefined" != typeof game && game.submitScore(c, e, b)
        };
        p.prototype.CC = function(c) {
            (this.b.gc || this.b.Jb) && "undefined" != typeof game && game.showLeaderboard(c)
        };
        p.prototype.LC = function(c, e) {
            (this.b.gc || this.b.Jb) && "undefined" != typeof game && game.unlockAchievement(c, e)
        };
        p.prototype.AC = function() {
            (this.b.gc || this.b.Jb) && "undefined" != typeof game && game.showAchievements()
        };
        h.n = new p;
        n.prototype.BB = function(c) {
            c.Qa(this.tG)
        };
        h.u = new n
    })();

function Wc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}
        var n = Wc.prototype;
        n.N = function(f) {
            this.X = f;
            this.b = f.b
        };
        n.N.prototype.J = function() {
            if (this.b.Oi || this.b.Si || this.b.Jc || this.b.We) {
                for (var f = document.getElementsByTagName("script"), c = !1, e = 0; e < f.length; e++)
                    if (-1 != f[e].src.indexOf("cordova.js") || -1 != f[e].src.indexOf("phonegap.js")) {
                        c = !0;
                        break
                    }
                c || (f = document.createElement("script"), f.setAttribute("type", "text/javascript"), f.setAttribute("src", "cordova.js"), document.getElementsByTagName("head")[0].appendChild(f))
            }
        };
        n.K = function(f) {
            this.type = f;
            this.b = f.b
        };
        var h = n.K.prototype;
        h.J = function() {
            if ((this.b.gc || this.b.Jb) && "undefined" != typeof analytics && (this.Ql = "", this.b.gc ? this.Ql = this.B[0] : this.b.Jb && (this.Ql = this.B[1]), "" != this.Ql)) {
                var f = this;
                document.addEventListener("deviceready", function() {
                    analytics.startTrackerWithId(f.Ql)
                }, !1)
            }
        };
        h.xb = function() {};
        h.Za = function() {};
        f.prototype.pB = function() {
            return !0
        };
        f.prototype.oB = function() {
            return !0
        };
        n.k = new f;
        p.prototype.Pp = function(f, c) {
            if ((this.b.gc || this.b.Jb) && "undefined" != typeof analytics && "" != this.Ql) {
                var e = this;
                analytics.trackEvent(f, c, "", 0, function() {
                    e.b.trigger(Wc.prototype.k.pB, e)
                }, function() {
                    e.b.trigger(Wc.prototype.k.oB, e)
                })
            }
        };
        n.n = new p;
        n.u = new function() {}
    })();

function Xc(f) {
        this.b = f
    }
    (function() {
        function f() {
            for (var c = document.getElementsByTagName("script"), b = !1, f = 0; f < c.length; f++)
                if (-1 != c[f].src.indexOf("")) {
                    b = !0;
                    break
                }
            b || (c = document.createElement("script"), c.type = "text/javascript", c.src = "", document.getElementsByTagName("head")[0].appendChild(c))
        }

        function p() {}

        function n() {}
        var h = Xc.prototype;
        h.N = function(c) {
            this.X = c;
            this.b = c.b
        };
        var l = !1;
        h.N.prototype.J = function() {
            window.onYouTubeIframeAPIReady || (window.onYouTubeIframeAPIReady = function() {
                l = !0
            }, f())
        };
        h.K = function(c) {
            this.type = c;
            this.b = c.b
        };
        var c = h.K.prototype;
        c.J = function() {
            if (this.b.ba) ha("[Construct 2] Textbox plugin not supported on this platform - the object will not be created");
            else {
                this.Vr = "YT" + this.uid.toString();
                this.bd = document.createElement("div");
                this.bd.id = this.Vr;
                jQuery(this.bd).appendTo(this.b.Om ? this.b.Om : "body");
                this.oh = !1;
                this.iw = this.jw = this.Zv = this.ew = this.hw = this.aw = null;
                0 === this.B[8] ? (jQuery(this.bd).hide(), this.visible = !1, this.oh = !0) : this.visible = !0;
                this.ac ? this.xe.length = 0 : this.xe = [];
                this.qr = !1;
                this.hm = this.qa = null;
                this.lq = this.B[0];
                this.iq = 1 === this.B[1];
                this.jq = 1 === this.B[2];
                this.hH = 1 === this.B[3];
                this.iH = 1 === this.B[4];
                this.dG = 1 === this.B[5];
                this.zD = 0 === this.B[6];
                this.FE = 0;
                this.qs = 1 === this.B[7];
                this.Qu = {
                    x: null,
                    y: null,
                    w: null,
                    h: null
                };
                this.Ay(!0);
                this.b.Vg(this);
                var c = this;
                this.b.Vp(function(b) {
                    c.es(b)
                })
            }
        };
        c.Uc = function() {
            null != this.qa && this.qa.destroy();
            jQuery(this.bd).remove();
            this.bd = null
        };
        c.Ra = function() {
            this.Ay();
            this.nG()
        };
        c.Ay = function(c) {
            if (!this.b.ba) {
                var b = this.C.Ua(this.x, this.y, !0),
                    f = this.C.Ua(this.x, this.y, !1),
                    d = this.C.Ua(this.x + this.width, this.y + this.height, !0),
                    a = this.C.Ua(this.x + this.width, this.y + this.height, !1),
                    g = this.b.width / this.b.devicePixelRatio,
                    h = this.b.height / this.b.devicePixelRatio;
                !this.visible || !this.C.visible || 0 >= d || 0 >= a || b >= g || f >= h ? (this.oh || jQuery(this.bd).hide(), this.oh = !0) : (g = window.innerWidth, h = window.innerHeight, c || this.aw !== b || this.hw !== f || this.ew !== d || this.Zv !== a || this.jw !== g || this.iw !== h ? (this.aw = b, this.hw = f, this.ew = d, this.Zv = a, this.jw = g, this.iw = h, this.oh && (jQuery(this.bd).show(), this.oh = !1), c = Math.round(b) + jQuery(this.b.canvas).offset().left, g = Math.round(f) + jQuery(this.b.canvas).offset().top, jQuery(this.bd).css("position", "absolute"), jQuery(this.bd).offset({
                    left: c,
                    top: g
                }), jQuery(this.bd).width(Math.round(d - b)), jQuery(this.bd).height(Math.round(a - f))) : this.oh && (jQuery(this.bd).show(), this.oh = !1))
            }
        };
        c.xb = function() {};
        c.Za = function() {};
        c.nG = function() {
            !this.qr && l && (this.qr = !0, this.uD(this.lq))
        };
        c.uD = function(c) {
            if (this.qr && null == this.qa) {
                var b = this,
                    f = {};
                this.iq && (f.autoplay = 1);
                this.hH || (f.controls = 0);
                this.iH || (f.showinfo = 0);
                this.zD || (f.disablekb = 1);
                this.dG && (f.modestbranding = 1);
                this.qa = new window.YT.Player(this.Vr, {
                    videoId: c,
                    playerVars: f,
                    events: {
                        onStateChange: function(c) {
                            b.hm = c.data;
                            0 === b.hm && b.jq && b.qa.playVideo();
                            b.b.trigger(Xc.prototype.k.cB, b)
                        },
                        onReady: function() {
                            b.SG();
                            b.b.trigger(Xc.prototype.k.eB, b)
                        },
                        onError: function(c) {
                            b.FE = c.data;
                            b.b.trigger(Xc.prototype.k.dB, b)
                        }
                    }
                });
                jQuery(this.bd).remove();
                this.bd = document.getElementById(this.Vr);
                this.bd.onmouseover = function() {
                    b.b.trigger(Xc.prototype.k.WA, b)
                }
            }
        };
        c.SG = function() {
            var c, b = this.xe.length;
            for (c = 0; c < b; c++) this.xe[c]();
            this.xe.length = 0
        };
        c.Ap = function(c, b) {
            function f() {
                d.qa.loadVideoById(c);
                b ? d.qa.playVideo() : d.qa.pauseVideo()
            }
            this.lq = c;
            this.iq = b;
            var d = this;
            this.qa && this.qa.loadVideoById ? f() : this.xe.push(f)
        };
        c.Lp = function(c) {
            function b() {
                f.qa.seekTo(c)
            }
            var f = this;
            this.qa && this.qa.seekTo ? b() : this.xe.push(b)
        };
        c.qm = function(c) {
            this.jq = c
        };
        c.rm = function(c) {
            function b() {
                d.qa[f]()
            }
            var f = 1 === c ? "mute" : "unMute",
                d = this;
            this.qa && this.qa[f] ? b() : this.xe.push(b)
        };
        c.Xj = function(c) {
            function b() {
                f.qa.setVolume(c)
            }
            c = La(c, 0, 100);
            var f = this;
            this.qa && this.qa.setVolume ? b() : this.xe.push(b)
        };
        c.Vj = function() {
            function c() {
                b.qa.pauseVideo()
            }
            var b = this;
            this.qa && this.qa.pauseVideo ? c() : this.xe.push(c)
        };
        c.Play = function() {
            function c() {
                b.qa.playVideo()
            }
            var b = this;
            this.qa && this.qa.playVideo ? c() : this.xe.push(c)
        };
        c.mF = function() {
            var c;
            this.qa && this.qa.getCurrentTime ? c = this.qa.getCurrentTime() || 0 : c = 0;
            return c
        };
        c.qd = function() {
            var c;
            this.qa && this.qa.getDuration ? c = this.qa.getDuration() || 0 : c = 0;
            return c
        };
        c.pF = function() {
            var c;
            this.qa && this.qa.getVolume ? c = this.qa.getVolume() || 100 : c = 100;
            return c
        };
        c.HF = function() {
            var c;
            this.qa && this.qa.isMuted ? c = this.qa.isMuted() || !1 : c = !1;
            return c
        };
        c.es = function(c) {
            this.qs || (c ? this.Vj() : this.Play())
        };
        c.Wa = function() {
            return {
                videoId: this.lq,
                isAutoPlay: this.iq,
                playBackTime: this.mF(),
                isLooping: this.jq,
                isMute: this.HF(),
                vol: this.pF(),
                isPlaying: 1 === this.hm,
                isPaused: 2 === this.hm,
                fw: this.Qu
            }
        };
        c.bb = function(c) {
            this.xe.length = 0;
            this.Ap(c.videoId, c.isAutoPlay);
            this.Lp(c.playBackTime);
            this.qm(c.isLooping);
            this.rm(c.isMute);
            this.Xj(c.vol);
            c.isPlaying && this.Play();
            c.isPaused && this.Vj();
            this.Qu = c.fw
        };
        h.k = new p;
        p.prototype.IsPlaying = function() {
            return !this.b.ba && this.qa && this.qa.getPlayerState ? this.qa.getPlayerState() === window.YT.PlayerState.PLAYING : !1
        };
        p.prototype.cB = function(c) {
            var b;
            switch (this.hm) {
                case -1:
                    b = 0;
                    break;
                case window.YT.PlayerState.ENDED:
                    b = 1;
                    break;
                case window.YT.PlayerState.PLAYING:
                    b = 2;
                    break;
                case window.YT.PlayerState.PAUSED:
                    b = 3;
                    break;
                case window.YT.PlayerState.BUFFERING:
                    b = 4;
                    break;
                case window.YT.PlayerState.CUED:
                    b = 5
            }
            return b === c
        };
        p.prototype.eB = function() {
            return !0
        };
        p.prototype.dB = function() {
            return !0
        };
        p.prototype.WA = function() {
            return !0
        };
        h.n = new n;
        n.prototype.Ap = function(c, b) {
            this.b.ba || this.Ap(c, 1 === b)
        };
        n.prototype.Lp = function(c) {
            this.b.ba || this.Lp(c)
        };
        n.prototype.qm = function(c) {
            this.b.ba || this.qm(1 === c)
        };
        n.prototype.rm = function(c) {
            this.b.ba || this.rm(1 === c)
        };
        n.prototype.Xj = function(c) {
            this.b.ba || this.Xj(c)
        };
        n.prototype.Vj = function() {
            this.b.ba || this.Vj()
        };
        n.prototype.Play = function() {
            this.b.ba || this.Play()
        };
        n.prototype.pi = function(c) {
            this.b.ba || (this.visible = 0 !== c)
        };
        h.u = new function() {}
    })();

function Yc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Yc.prototype;
        h.N = function(c) {
            this.behavior = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c, e) {
            this.type = c;
            this.behavior = c.behavior;
            this.j = e;
            this.b = c.b
        };
        var l = h.K.prototype;
        l.J = function() {
            var c = this.B[0];
            this.Ja = this.B[1];
            this.uc = this.B[2];
            this.iD = 0 !== this.B[3];
            this.Ls = 0 !== this.B[4];
            this.D = Math.cos(this.j.A) * c;
            this.F = Math.sin(this.j.A) * c;
            this.Mh = this.j.x;
            this.Nh = this.j.y;
            this.Jd = this.j.A;
            this.ip = 0;
            this.enabled = 0 !== this.B[5]
        };
        l.Wa = function() {
            return {
                acc: this.Ja,
                g: this.uc,
                dx: this.D,
                dy: this.F,
                lx: this.Mh,
                ly: this.Nh,
                lka: this.Jd,
                t: this.ip,
                e: this.enabled
            }
        };
        l.bb = function(c) {
            this.Ja = c.acc;
            this.uc = c.g;
            this.D = c.dx;
            this.F = c.dy;
            this.Mh = c.lx;
            this.Nh = c.ly;
            this.Jd = c.lka;
            this.ip = c.t;
            this.enabled = c.e
        };
        l.Ra = function() {
            if (this.enabled) {
                var c = this.b.Gf(this.j),
                    e, b;
                this.j.A !== this.Jd && (this.Ls && (e = Ya(0, 0, this.D, this.F), this.D = Math.cos(this.j.A) * e, this.F = Math.sin(this.j.A) * e), this.Jd = this.j.A);
                0 !== this.Ja && (e = Ya(0, 0, this.D, this.F), b = 0 === this.D && 0 === this.F ? this.j.A : Ta(0, 0, this.D, this.F), e += this.Ja * c, 0 > e && (e = 0), this.D = Math.cos(b) * e, this.F = Math.sin(b) * e);
                0 !== this.uc && (this.F += this.uc * c);
                this.Mh = this.j.x;
                this.Nh = this.j.y;
                if (0 !== this.D || 0 !== this.F)
                    if (this.j.x += this.D * c, this.j.y += this.F * c, this.ip += Ya(0, 0, this.D * c, this.F * c), this.Ls && (this.j.A = Ta(0, 0, this.D, this.F), this.j.L(), this.Jd = this.j.A), this.j.L(), this.iD && (e = this.b.gb(this.j))) this.b.df(this.j, e), e = Ya(0, 0, this.D, this.F), b = this.b.kD(this.j, this.Mh, this.Nh), this.D = Math.cos(b) * e, this.F = Math.sin(b) * e, this.j.x += this.D * c, this.j.y += this.F * c, this.j.L(), this.Ls && (this.Jd = this.j.A = b, this.j.L()), this.b.Bd(this.j, this.D / e, this.F / e, Math.max(2.5 * e * c, 30)) || this.b.ys(this.j, 100)
            }
        };
        f.prototype.xp = function(c, e) {
            return nc(Ya(0, 0, this.D, this.F), c, e)
        };
        h.k = new f;
        p.prototype.tm = function(c) {
            var e = Ta(0, 0, this.D, this.F);
            this.D = Math.cos(e) * c;
            this.F = Math.sin(e) * c
        };
        p.prototype.PB = function(c) {
            c = M(c);
            var e = Ya(0, 0, this.D, this.F);
            this.D = Math.cos(c) * e;
            this.F = Math.sin(c) * e
        };
        p.prototype.Wj = function(c) {
            this.enabled = 1 === c
        };
        h.n = new p;
        n.prototype.um = function(c) {
            var e = Ya(0, 0, this.D, this.F),
                e = pb(e);
            c.I(e)
        };
        h.u = new n
    })();

function Zc(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = Zc.prototype;
        h.N = function(c) {
            this.behavior = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c, e) {
            this.type = c;
            this.behavior = c.behavior;
            this.j = e;
            this.b = c.b;
            this.ag = this.$f = this.Ro = this.So = this.zh = this.Be = this.te = this.ok = this.Sl = !1;
            this.Br = this.Ar = this.ur = this.Dr = -1;
            this.F = this.D = 0
        };
        var l = h.K.prototype;
        l.J = function() {
            this.zb = this.B[0];
            this.Ja = this.B[1];
            this.Fc = this.B[2];
            this.sq = this.B[3];
            this.Xp = this.B[4];
            this.qq = 1 === this.B[5];
            this.enabled = 0 !== this.B[6];
            this.qq && !this.b.ba && (jQuery(document).keydown(function(c) {
                return function(e) {
                    c.ml(e)
                }
            }(this)), jQuery(document).keyup(function(c) {
                return function(e) {
                    c.nl(e)
                }
            }(this)))
        };
        l.Wa = function() {
            return {
                dx: this.D,
                dy: this.F,
                enabled: this.enabled,
                maxspeed: this.zb,
                acc: this.Ja,
                dec: this.Fc,
                ignoreInput: this.zh
            }
        };
        l.bb = function(c) {
            this.D = c.dx;
            this.F = c.dy;
            this.enabled = c.enabled;
            this.zb = c.maxspeed;
            this.Ja = c.acc;
            this.Fc = c.dec;
            this.zh = c.ignoreInput;
            this.ag = this.$f = this.Ro = this.So = this.Be = this.te = this.ok = this.Sl = !1;
            this.Br = this.Ar = this.ur = this.Dr = -1
        };
        l.ml = function(c) {
            var e = this.b.Pd;
            switch (c.which) {
                case 37:
                    c.preventDefault();
                    this.Ar < e && (this.te = !0);
                    break;
                case 38:
                    c.preventDefault();
                    this.Dr < e && (this.Sl = !0);
                    break;
                case 39:
                    c.preventDefault();
                    this.Br < e && (this.Be = !0);
                    break;
                case 40:
                    c.preventDefault(), this.ur < e && (this.ok = !0)
            }
        };
        l.nl = function(c) {
            var e = this.b.Pd;
            switch (c.which) {
                case 37:
                    c.preventDefault();
                    this.te = !1;
                    this.Ar = e;
                    break;
                case 38:
                    c.preventDefault();
                    this.Sl = !1;
                    this.Dr = e;
                    break;
                case 39:
                    c.preventDefault();
                    this.Be = !1;
                    this.Br = e;
                    break;
                case 40:
                    c.preventDefault(), this.ok = !1, this.ur = e
            }
        };
        l.Tf = function() {
            this.Be = this.te = this.ok = this.Sl = !1
        };
        l.Ra = function() {
            var c = this.b.Gf(this.j),
                e = this.te || this.$f,
                b = this.Be || this.ag,
                f = this.Sl || this.So,
                d = this.ok || this.Ro;
            this.Ro = this.So = this.ag = this.$f = !1;
            if (this.enabled) {
                var a = this.b.gb(this.j);
                if (a && (this.b.df(this.j, a), !this.b.ys(this.j))) return;
                this.zh && (d = f = b = e = !1);
                0 === this.sq ? b = e = !1 : 1 === this.sq && (d = f = !1);
                2 === this.sq && (f || d) && (b = e = !1);
                e == b && (0 > this.D ? (this.D += this.Fc * c, 0 < this.D && (this.D = 0)) : 0 < this.D && (this.D -= this.Fc * c, 0 > this.D && (this.D = 0)));
                f == d && (0 > this.F ? (this.F += this.Fc * c, 0 < this.F && (this.F = 0)) : 0 < this.F && (this.F -= this.Fc * c, 0 > this.F && (this.F = 0)));
                e && !b && (this.D = 0 < this.D ? this.D - (this.Ja + this.Fc) * c : this.D - this.Ja * c);
                b && !e && (this.D = 0 > this.D ? this.D + (this.Ja + this.Fc) * c : this.D + this.Ja * c);
                f && !d && (this.F = 0 < this.F ? this.F - (this.Ja + this.Fc) * c : this.F - this.Ja * c);
                d && !f && (this.F = 0 > this.F ? this.F + (this.Ja + this.Fc) * c : this.F + this.Ja * c);
                if (0 !== this.D || 0 !== this.F) {
                    Math.sqrt(this.D * this.D + this.F * this.F) > this.zb && (a = Math.atan2(this.F, this.D), this.D = this.zb * Math.cos(a), this.F = this.zb * Math.sin(a));
                    b = this.j.x;
                    f = this.j.y;
                    e = this.j.A;
                    this.j.x += this.D * c;
                    this.j.L();
                    if (a = this.b.gb(this.j)) this.b.Bd(this.j, 0 > this.D ? 1 : -1, 0, Math.abs(Math.floor(this.D * c))) || (this.j.x = b), this.D = 0, this.j.L(), this.b.df(this.j, a);
                    this.j.y += this.F * c;
                    this.j.L();
                    if (a = this.b.gb(this.j)) this.b.Bd(this.j, 0, 0 > this.F ? 1 : -1, Math.abs(Math.floor(this.F * c))) || (this.j.y = f), this.F = 0, this.j.L(), this.b.df(this.j, a);
                    c = pb(this.D);
                    a = pb(this.F);
                    0 === c && 0 === a || !this.j.type.X.MF || (1 === this.Xp ? this.j.A = Sa(90 * Math.round(Na(Math.atan2(a, c)) / 90)) : 2 === this.Xp ? this.j.A = Sa(45 * Math.round(Na(Math.atan2(a, c)) / 45)) : 3 === this.Xp && (this.j.A = Math.atan2(a, c)));
                    this.j.L();
                    this.j.A != e && (a = this.b.gb(this.j)) && (this.j.A = e, this.j.L(), this.b.df(this.j, a))
                }
            }
        };
        f.prototype.Bt = function() {
            return 1E-10 < Math.sqrt(this.D * this.D + this.F * this.F)
        };
        f.prototype.xp = function(c, e) {
            var b = Math.sqrt(this.D * this.D + this.F * this.F);
            return nc(b, c, e)
        };
        h.k = new f;
        p.prototype.yu = function() {
            this.F =
                this.D = 0
        };
        p.prototype.tm = function(c) {
            0 > c && (c = 0);
            c > this.zb && (c = this.zb);
            var e = Math.atan2(this.F, this.D);
            this.D = c * Math.cos(e);
            this.F = c * Math.sin(e)
        };
        p.prototype.su = function(c) {
            this.zb = c;
            0 > this.zb && (this.zb = 0)
        };
        p.prototype.xu = function(c) {
            switch (c) {
                case 0:
                    this.$f = !0;
                    break;
                case 1:
                    this.ag = !0;
                    break;
                case 2:
                    this.So = !0;
                    break;
                case 3:
                    this.Ro = !0
            }
        };
        p.prototype.Wj = function(c) {
            this.enabled = 1 === c
        };
        p.prototype.uu = function(c) {
            this.D = c
        };
        p.prototype.vu = function(c) {
            this.F = c
        };
        h.n = new p;
        n.prototype.um = function(c) {
            c.I(Math.sqrt(this.D * this.D + this.F * this.F))
        };
        n.prototype.Ht = function(c) {
            c.I(this.zb)
        };
        n.prototype.Bu = function(c) {
            c.I(this.F)
        };
        h.u = new n
    })();

function $c(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}
        var n = $c.prototype;
        n.N = function(f) {
            this.behavior = f;
            this.b = f.b
        };
        n.N.prototype.J = function() {};
        n.K = function(f, c) {
            this.type = f;
            this.behavior = f.behavior;
            this.j = c;
            this.b = f.b
        };
        var h = n.K.prototype;
        h.J = function() {
            this.Iu = 1 === this.B[0];
            this.Di = this.B[1];
            this.Lj = this.B[2];
            this.rk = this.B[3];
            this.xD = this.B[4];
            this.Od = this.Iu ? 0 : 3;
            this.ac ? this.ee.reset() : this.ee = new ib;
            this.Sh = this.j.opacity ? this.j.opacity : 1;
            this.Iu && (0 === this.Di ? (this.Od = 1, 0 === this.Lj && (this.Od = 2)) : (this.j.opacity = 0, this.b.W = !0))
        };
        h.Wa = function() {
            return {
                fit: this.Di,
                wt: this.Lj,
                fot: this.rk,
                s: this.Od,
                st: this.ee.na,
                mo: this.Sh
            }
        };
        h.bb = function(f) {
            this.Di = f.fit;
            this.Lj = f.wt;
            this.rk = f.fot;
            this.Od = f.s;
            this.ee.reset();
            this.ee.na = f.st;
            this.Sh = f.mo
        };
        h.Ra = function() {
            this.ee.add(this.b.Gf(this.j));
            0 === this.Od && (this.j.opacity = this.ee.na / this.Di * this.Sh, this.b.W = !0, this.j.opacity >= this.Sh && (this.j.opacity = this.Sh, this.Od = 1, this.ee.reset(), this.b.trigger($c.prototype.k.tA, this.j)));
            1 === this.Od && this.ee.na >= this.Lj && (this.Od = 2, this.ee.reset(), this.b.trigger($c.prototype.k.tB, this.j));
            2 === this.Od && 0 !== this.rk && (this.j.opacity = this.Sh - this.ee.na / this.rk * this.Sh, this.b.W = !0, 0 > this.j.opacity && (this.j.opacity = 0, this.Od = 3, this.ee.reset(), this.b.trigger($c.prototype.k.Rt, this.j), 1 === this.xD && this.b.pf(this.j)))
        };
        h.RD = function() {
            this.Od = 0;
            this.ee.reset();
            0 === this.Di ? (this.Od = 1, 0 === this.Lj && (this.Od = 2)) : (this.j.opacity = 0, this.b.W = !0)
        };
        f.prototype.Rt = function() {
            return !0
        };
        f.prototype.tA = function() {
            return !0
        };
        f.prototype.tB = function() {
            return !0
        };
        n.k = new f;
        p.prototype.KB = function() {
            this.RD()
        };
        p.prototype.XB = function(f) {
            0 > f && (f = 0);
            this.Di = f
        };
        p.prototype.zC = function(f) {
            0 > f && (f = 0);
            this.Lj = f
        };
        p.prototype.YB = function(f) {
            0 > f && (f = 0);
            this.rk = f
        };
        n.n = new p;
        n.u = new function() {}
    })();

function ad(f) {
        this.b = f
    }
    (function() {
        function f() {}
        var p = ad.prototype;
        p.N = function(f) {
            this.behavior = f;
            this.b = f.b
        };
        p.N.prototype.J = function() {};
        p.K = function(f, l) {
            this.type = f;
            this.behavior = f.behavior;
            this.j = l;
            this.b = f.b
        };
        var n = p.K.prototype;
        n.J = function() {
            this.Pb = null;
            this.xo = -1;
            this.mode = this.Jd = this.cp = this.mj = this.Uf = this.ql = 0;
            var f = this;
            this.ac || (this.hl = function(l) {
                f.ll(l)
            });
            this.b.Am(this.hl)
        };
        n.Wa = function() {
            return {
                uid: this.Pb ? this.Pb.uid : -1,
                pa: this.ql,
                pd: this.Uf,
                msa: this.mj,
                tsa: this.cp,
                lka: this.Jd,
                m: this.mode
            }
        };
        n.bb = function(f) {
            this.xo = f.uid;
            this.ql = f.pa;
            this.Uf = f.pd;
            this.mj = f.msa;
            this.cp = f.tsa;
            this.Jd = f.lka;
            this.mode = f.m
        };
        n.je = function() {
            -1 === this.xo ? this.Pb = null : this.Pb = this.b.wh(this.xo);
            this.xo = -1
        };
        n.ll = function(f) {
            this.Pb == f && (this.Pb = null)
        };
        n.Uc = function() {
            this.Pb = null;
            this.b.Ax(this.hl)
        };
        n.Ra = function() {};
        n.ep = function() {
            if (this.Pb) {
                this.Jd !== this.j.A && (this.mj = Pa(this.mj + (this.j.A - this.Jd)));
                var f = this.j.x,
                    l = this.j.y;
                if (3 === this.mode || 4 === this.mode) {
                    var c = Ya(this.j.x, this.j.y, this.Pb.x, this.Pb.y);
                    if (c > this.Uf || 4 === this.mode && c < this.Uf) l = Ta(this.Pb.x, this.Pb.y, this.j.x, this.j.y), f = this.Pb.x + Math.cos(l) * this.Uf, l = this.Pb.y + Math.sin(l) * this.Uf
                } else f = this.Pb.x + Math.cos(this.Pb.A + this.ql) * this.Uf, l = this.Pb.y + Math.sin(this.Pb.A + this.ql) * this.Uf;
                this.Jd = c = Pa(this.mj + (this.Pb.A - this.cp));
                0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.j.x === f && this.j.y === l || (this.j.x = f, this.j.y = l, this.j.L());
                0 !== this.mode && 2 !== this.mode || this.j.A === c || (this.j.A = c, this.j.L())
            }
        };
        p.k = new function() {};
        f.prototype.zB = function(f, l) {
            if (f) {
                var c = f.Dv(this.j);
                c && (this.Pb = c, this.ql = Ta(c.x, c.y, this.j.x, this.j.y) - c.A, this.Uf = Ya(c.x, c.y, this.j.x, this.j.y), this.Jd = this.mj = this.j.A, this.cp = c.A, this.mode = l)
            }
        };
        f.prototype.MC = function() {
            this.Pb = null
        };
        p.n = new f;
        p.u = new function() {}
    })();

function bd(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = bd.prototype;
        h.N = function(c) {
            this.behavior = c;
            this.b = c.b
        };
        h.N.prototype.J = function() {};
        h.K = function(c, e) {
            this.type = c;
            this.behavior = c.behavior;
            this.j = e;
            this.b = c.b;
            this.Hl = this.ag = this.$f = this.zh = this.gk = this.nk = this.Zi = this.$i = this.Be = this.te = !1;
            this.Kc = null;
            this.Ir = -1;
            this.Gh = this.Fh = 0;
            this.vn = !1;
            this.sh = this.le = 0;
            this.tn = !0;
            this.F = this.D = 0
        };
        var l = h.K.prototype;
        l.zy = function() {
            this.Fb = Math.cos(this.Gi);
            this.Gb = Math.sin(this.Gi);
            this.Wf = Math.cos(this.Gi -
                Math.PI / 2);
            this.Xf = Math.sin(this.Gi - Math.PI / 2);
            this.Fb = pb(this.Fb);
            this.Gb = pb(this.Gb);
            this.Wf = pb(this.Wf);
            this.Xf = pb(this.Xf);
            this.Fq = this.uc;
            0 > this.uc && (this.Fb *= -1, this.Gb *= -1, this.uc = Math.abs(this.uc))
        };
        l.J = function() {
            this.zb = this.B[0];
            this.Ja = this.B[1];
            this.Fc = this.B[2];
            this.Lf = this.B[3];
            this.Fq = this.uc = this.B[4];
            this.Rh = this.B[5];
            this.uq = 0 !== this.B[6];
            this.rr = this.B[7] / 1E3;
            this.qq = 1 === this.B[8];
            this.enabled = 0 !== this.B[9];
            this.Nj = !1;
            this.Oj = this.b.eg(this.j);
            this.Jr = -1;
            this.bi = 0;
            this.Gi = M(90);
            this.zy();
            var c = this;
            this.qq && !this.b.ba && (jQuery(document).keydown(function(e) {
                c.ml(e)
            }), jQuery(document).keyup(function(e) {
                c.nl(e)
            }));
            this.ac || (this.hl = function(e) {
                c.ll(e)
            });
            this.b.Am(this.hl);
            this.j.T.isPlatformBehavior = !0
        };
        l.Wa = function() {
            return {
                ii: this.zh,
                lfx: this.Fh,
                lfy: this.Gh,
                lfo: this.Kc ? this.Kc.uid : -1,
                am: this.le,
                en: this.enabled,
                fall: this.sh,
                ft: this.tn,
                dx: this.D,
                dy: this.F,
                ms: this.zb,
                acc: this.Ja,
                dec: this.Fc,
                js: this.Lf,
                g: this.uc,
                g1: this.Fq,
                mf: this.Rh,
                wof: this.Nj,
                woj: this.Oj ? this.Oj.uid : -1,
                ga: this.Gi,
                edj: this.uq,
                cdj: this.gk,
                dj: this.nk,
                sus: this.rr
            }
        };
        l.bb = function(c) {
            this.zh = c.ii;
            this.Fh = c.lfx;
            this.Gh = c.lfy;
            this.Ir = c.lfo;
            this.le = c.am;
            this.enabled = c.en;
            this.sh = c.fall;
            this.tn = c.ft;
            this.D = c.dx;
            this.F = c.dy;
            this.zb = c.ms;
            this.Ja = c.acc;
            this.Fc = c.dec;
            this.Lf = c.js;
            this.uc = c.g;
            this.Fq = c.g1;
            this.Rh = c.mf;
            this.Nj = c.wof;
            this.Jr = c.woj;
            this.Gi = c.ga;
            this.uq = c.edj;
            this.gk = c.cdj;
            this.nk = c.dj;
            this.rr = c.sus;
            this.Hl = this.ag = this.$f = this.Zi = this.$i = this.Be = this.te = !1;
            this.bi = 0;
            this.zy()
        };
        l.je = function() {
            -1 === this.Ir ? this.Kc = null : this.Kc = this.b.wh(this.Ir); - 1 === this.Jr ? this.Oj = null : this.Oj = this.b.wh(this.Jr)
        };
        l.ll = function(c) {
            this.Kc == c && (this.Kc = null)
        };
        l.Uc = function() {
            this.Kc = null;
            this.b.Ax(this.hl)
        };
        l.ml = function(c) {
            switch (c.which) {
                case 38:
                    c.preventDefault();
                    this.$i = !0;
                    break;
                case 37:
                    c.preventDefault();
                    this.te = !0;
                    break;
                case 39:
                    c.preventDefault(), this.Be = !0
            }
        };
        l.nl = function(c) {
            switch (c.which) {
                case 38:
                    c.preventDefault();
                    this.Zi = this.$i = !1;
                    break;
                case 37:
                    c.preventDefault();
                    this.te = !1;
                    break;
                case 39:
                    c.preventDefault(), this.Be = !1
            }
        };
        l.Tf = function() {
            this.$i = this.Be = this.te = !1
        };
        l.qd = function() {
            return 0 > this.uc ? -1 : 1
        };
        l.Tv = function() {
            var c = null,
                e = null,
                b, f;
            b = this.j.x;
            f = this.j.y;
            this.j.x += this.Fb;
            this.j.y += this.Gb;
            this.j.L();
            if (this.Kc && this.b.Mc(this.j, this.Kc) && (!this.b.dt(this.Kc.type, yc) || this.Kc.T.solidEnabled)) return this.j.x = b, this.j.y = f, this.j.L(), this.Kc;
            (c = this.b.gb(this.j)) || 0 !== this.sh || (e = this.b.eg(this.j, !0));
            this.j.x = b;
            this.j.y = f;
            this.j.L();
            if (c) {
                if (this.b.Mc(this.j, c)) return null;
                this.vn = !1;
                return c
            }
            if (e && e.length) {
                f = c = 0;
                for (b = e.length; c < b; c++) e[f] = e[c], this.b.Mc(this.j, e[c]) || f++;
                if (1 <= f) return this.vn = !0, e[0]
            }
            return null
        };
        l.Ra = function() {};
        l.ux = function() {
            var c = this.b.Gf(this.j),
                e, b, f, d, a, g, h, k, l;
            this.$i || this.Hl || (this.Zi = !1);
            var n = this.te || this.$f;
            f = this.Be || this.ag;
            var p = (d = this.$i || this.Hl) && !this.Zi;
            this.Hl = this.ag = this.$f = !1;
            if (this.enabled) {
                this.zh && (p = d = f = n = !1);
                d || (this.bi = 0);
                k = this.Kc;
                l = !1;
                this.tn && ((this.b.gb(this.j) || this.b.eg(this.j)) && this.b.Bd(this.j, -this.Fb, -this.Gb, 4, !0), this.tn = !1);
                !k || 0 !== this.F || k.y === this.Gh && k.x === this.Fh || (e = k.x - this.Fh, b = k.y - this.Gh, this.j.x += e, this.j.y += b, this.j.L(), this.Fh = k.x, this.Gh = k.y, l = !0, this.b.gb(this.j) && this.b.Bd(this.j, -e, -b, 2.5 * Math.sqrt(e * e + b * b)));
                var q = this.Tv();
                if (b = this.b.gb(this.j))
                    if (this.j.T.inputPredicted) this.b.Bd(this.j, -this.Fb, -this.Gb, 10, !1);
                    else if (this.b.ys(this.j, Math.max(this.j.width, this.j.height) / 2)) this.b.df(this.j, b);
                else return;
                q ? (this.gk = this.nk = !1, 0 < this.F && (this.Nj || (this.b.ws(this.j, -this.Fb, -this.Gb, q), this.Nj = !0), this.F = 0), k != q) ? (this.Kc = q, this.Fh = q.x, this.Gh = q.y, this.b.df(this.j, q)) : l && (b = this.b.gb(this.j)) && (this.b.df(this.j, b), 0 !== e && (0 < e ? this.b.Bd(this.j, -this.Wf, -this.Xf) : this.b.Bd(this.j, this.Wf, this.Xf)), this.b.Bd(this.j, -this.Fb, -this.Gb)) : d || (this.gk = !0);
                if (q && p || !q && this.uq && d && this.gk && !this.nk) k = this.j.x, l = this.j.y, this.j.x -= this.Fb, this.j.y -= this.Gb, this.j.L(), this.b.gb(this.j) ? p = !1 : (this.bi = this.rr, this.b.trigger(bd.prototype.k.NA, this.j), this.le = 2, this.F = -this.Lf, p = !0, q ? this.Zi = !0 : this.nk = !0), this.j.x = k, this.j.y = l, this.j.L();
                q || (d && 0 < this.bi ? (this.F = -this.Lf, this.bi -= c) : (this.Kc = null, this.F += this.uc * c, this.F > this.Rh && (this.F = this.Rh)), p && (this.Zi = !0));
                this.Nj = !!q;
                n == f && (0 > this.D ? (this.D += this.Fc * c, 0 < this.D && (this.D = 0)) : 0 < this.D && (this.D -= this.Fc * c, 0 > this.D && (this.D = 0)));
                n && !f && (this.D = 0 < this.D ? this.D - (this.Ja + this.Fc) * c : this.D - this.Ja * c);
                f && !n && (this.D = 0 > this.D ? this.D + (this.Ja + this.Fc) * c : this.D + this.Ja * c);
                this.D > this.zb ? this.D = this.zb : this.D < -this.zb && (this.D = -this.zb);
                n = !1;
                0 !== this.D && (k = this.j.x, l = this.j.y, e = this.D * c * this.Wf, b = this.D * c * this.Xf, this.j.x += this.Wf * (1 < this.D ? 1 : -1) - this.Fb, this.j.y += this.Xf * (1 < this.D ? 1 : -1) - this.Gb, this.j.L(), d = !1, a = this.b.gb(this.j), this.j.x = k + e, this.j.y = l + b, this.j.L(), f = this.b.gb(this.j), !f && q && (f = this.b.eg(this.j)) && (this.j.x = k, this.j.y = l, this.j.L(), this.b.Mc(this.j, f) ? (f = null, d = !1) : d = !0, this.j.x = k + e, this.j.y = l + b, this.j.L()), f ? (e = Math.abs(this.D * c) + 2, a || !this.b.Bd(this.j, -this.Fb, -this.Gb, e, d, f)) ? (this.b.df(this.j, f), e = Math.max(Math.abs(this.D * c * 2.5), 30), this.b.Bd(this.j, this.Wf * (0 > this.D ? 1 : -1), this.Xf * (0 > this.D ? 1 : -1), e, !1) ? !q || d || this.vn || (k = this.j.x, l = this.j.y, this.j.x += this.Fb, this.j.y += this.Gb, this.b.gb(this.j) ? this.b.Bd(this.j, -this.Fb, -this.Gb, 3, !1) || (this.j.x = k, this.j.y = l, this.j.L()) : (this.j.x = k, this.j.y = l, this.j.L())) : (this.j.x = k, this.j.y = l, this.j.L()), d || (this.D = 0)) : !a && !p && Math.abs(this.F) < Math.abs(this.Lf / 4) && (this.F = 0, q || (n = !0)) : (k = this.Tv(), q && !k ? (b = Math.ceil(Math.abs(this.D * c)) + 2, k = this.j.x, l = this.j.y, this.j.x += this.Fb * b, this.j.y += this.Gb * b, this.j.L(), this.b.gb(this.j) || this.b.eg(this.j) ? this.b.Bd(this.j, -this.Fb, -this.Gb, b + 2, !0) : (this.j.x = k, this.j.y = l, this.j.L())) : k && 0 === this.F && this.b.ws(this.j, -this.Fb, -this.Gb, k)));
                if (0 !== this.F) {
                    k = this.j.x;
                    l = this.j.y;
                    this.j.x += this.F * c * this.Fb;
                    this.j.y += this.F * c * this.Gb;
                    e = this.j.x;
                    f = this.j.y;
                    this.j.L();
                    b = this.b.gb(this.j);
                    d = !1;
                    if (!b && 0 < this.F && !q) {
                        if ((d = 0 < this.sh ? null : this.b.eg(this.j, !0)) && d.length) {
                            if (this.Oj) {
                                this.j.x = k;
                                this.j.y = l;
                                this.j.L();
                                h = a = 0;
                                for (g = d.length; a < g; a++) d[h] = d[a], this.b.Mc(this.j, d[a]) || h++;
                                d.length = h;
                                this.j.x = e;
                                this.j.y = f;
                                this.j.L()
                            }
                            1 <= d.length && (b = d[0])
                        }
                        d = !!b
                    }
                    b && (this.b.df(this.j, b), this.bi = 0, e = d ? Math.abs(this.F * c * 2.5 + 10) : Math.max(Math.abs(this.F * c * 2.5 + 10), 30), this.b.Bd(this.j, this.Fb * (0 > this.F ? 1 : -1), this.Gb * (0 > this.F ? 1 : -1), e, d, b) ? (this.Kc = b, this.Fh = b.x, this.Gh = b.y, (this.vn = d) && (n = !0), this.F = 0) : (this.j.x = k, this.j.y = l, this.j.L(), this.Nj = !0, d || (this.F = 0)))
                }
                3 !== this.le && 0 < this.F && !q && (this.b.trigger(bd.prototype.k.uA, this.j), this.le = 3);
                if (q || n) 3 === this.le || n || p && 0 === this.F ? (this.b.trigger(bd.prototype.k.au, this.j), this.le = 0 === this.D && 0 === this.F ? 0 : 1) : (0 !== this.le && 0 === this.D && 0 === this.F && (this.b.trigger(bd.prototype.k.kB, this.j), this.le = 0), 1 === this.le || 0 === this.D && 0 === this.F || p || (this.b.trigger(bd.prototype.k.XA, this.j), this.le = 1));
                0 < this.sh && this.sh--;
                this.Oj = this.b.eg(this.j)
            }
        };
        f.prototype.Bt = function() {
            return 0 !== this.D || 0 !== this.F
        };
        f.prototype.xp = function(c, e) {
            var b = Math.sqrt(this.D * this.D + this.F * this.F);
            return nc(b, c, e)
        };
        f.prototype.Iz = function() {
            if (0 !== this.F) return !1;
            var c = null,
                e = null,
                b, f;
            b = this.j.x;
            f = this.j.y;
            this.j.x += this.Fb;
            this.j.y += this.Gb;
            this.j.L();
            (c = this.b.gb(this.j)) || 0 !== this.sh || (e = this.b.eg(this.j, !0));
            this.j.x = b;
            this.j.y = f;
            this.j.L();
            if (c) return !this.b.Mc(this.j, c);
            if (e && e.length) {
                f = c = 0;
                for (b = e.length; c < b; c++) e[f] = e[c], this.b.Mc(this.j, e[c]) || f++;
                if (1 <= f) return !0
            }
            return !1
        };
        f.prototype.zz = function(c) {
            var e = !1,
                b = this.j.x,
                f = this.j.y;
            0 === c ? (this.j.x -= 2 * this.Wf, this.j.y -= 2 * this.Xf) : (this.j.x += 2 * this.Wf, this.j.y += 2 * this.Xf);
            this.j.L();
            if (!this.b.gb(this.j)) return this.j.x = b, this.j.y = f, this.j.L(), !1;
            this.j.x -= 3 * this.Fb;
            this.j.y -= 3 * this.Gb;
            this.j.L();
            e = this.b.gb(this.j);
            this.j.x = b;
            this.j.y = f;
            this.j.L();
            return e
        };
        f.prototype.Cz = function() {
            return 0 < this.F
        };
        f.prototype.NA = function() {
            return !0
        };
        f.prototype.uA = function() {
            return !0
        };
        f.prototype.kB = function() {
            return !0
        };
        f.prototype.XA = function() {
            return !0
        };
        f.prototype.au = function() {
            return !0
        };
        h.k = new f;
        p.prototype.su = function(c) {
            this.zb = c;
            0 > this.zb && (this.zb = 0)
        };
        p.prototype.cC = function(c) {
            this.Lf = c;
            0 > this.Lf && (this.Lf = 0)
        };
        p.prototype.lC = function(c) {
            this.Rh = c;
            0 > this.Rh && (this.Rh = 0)
        };
        p.prototype.xu = function(c) {
            switch (c) {
                case 0:
                    this.$f = !0;
                    break;
                case 1:
                    this.ag = !0;
                    break;
                case 2:
                    this.Hl = !0
            }
        };
        p.prototype.uu = function(c) {
            this.D = c
        };
        p.prototype.vu = function(c) {
            this.F = c
        };
        p.prototype.Wj = function(c) {
            this.enabled !== (1 === c) && (this.enabled = 1 === c, this.enabled || (this.Kc = null))
        };
        h.n = new p;
        n.prototype.um = function(c) {
            c.I(Math.sqrt(this.D * this.D + this.F * this.F))
        };
        n.prototype.Ht = function(c) {
            c.I(this.zb)
        };
        n.prototype.Vz = function(c) {
            c.I(this.Lf)
        };
        n.prototype.Bu = function(c) {
            c.I(this.F)
        };
        h.u = new n
    })();

function cd(f) {
        this.b = f
    }
    (function() {
        function f() {}
        var p = cd.prototype;
        p.N = function(f) {
            this.behavior = f;
            this.b = f.b
        };
        p.N.prototype.J = function() {};
        p.K = function(f, l) {
            this.type = f;
            this.behavior = f.behavior;
            this.j = l;
            this.b = f.b
        };
        var n = p.K.prototype;
        n.J = function() {
            this.pH = this.nF()
        };
        n.Ra = function() {};
        n.nF = function() {
            return Qc && this.j instanceof Qc.prototype.K ? "Text" : Pc && this.j instanceof Pc.prototype.K ? "Spritefont2" : oc.HC && this.j instanceof oc.HC.prototype.K ? "TextBox" : oc.NG && this.j instanceof oc.NG.prototype.K ? "rex_TagText" : oc.OG && this.j instanceof oc.OG.prototype.K ? "rex_bbcodeText" : ""
        };
        n.VC = function() {
            var f = this.j,
                l = f.$e;
            if (!l) {
                f.xd = document.createElement("canvas");
                var l = Math.ceil(f.C.Rc() * f.width),
                    c = Math.ceil(f.C.Ib() * f.height);
                f.xd.width = l;
                f.xd.height = c;
                f.Ze = l;
                f.Ye = c;
                f.$e = f.xd.getContext("2d");
                l = f.$e
            }
            return l
        };
        n.qd = function() {
            var f = this.j,
                l = this.b.nv ? this.VC() : this.b.Sa;
            f.xb(l)
        };
        p.k = new function() {};
        p.n = new f;
        f.prototype.qu = function(f, l) {
            if ("Spritefont2" !== this.pH) {
                var c = "";
                switch (l) {
                    case 1:
                        c = "bold";
                        break;
                    case 2:
                        c = "italic";
                        break;
                    case 3:
                        c = "bold italic"
                }
                var e = this.j;
                if (f !== e.Qe || c !== e.Dg) e.Qe = f, e.Dg = c, e.it()
            }
        };
        p.u = new function() {}
    })();

function dd(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}
        var n = dd.prototype;
        n.N = function(f) {
            this.behavior = f;
            this.b = f.b
        };
        n.N.prototype.J = function() {};
        n.K = function(f, c) {
            this.type = f;
            this.behavior = f.behavior;
            this.j = c;
            this.b = f.b
        };
        var h = n.K.prototype;
        h.J = function() {
            this.speed = M(this.B[0]);
            this.Ja = M(this.B[1])
        };
        h.Wa = function() {
            return {
                speed: this.speed,
                acc: this.Ja
            }
        };
        h.bb = function(f) {
            this.speed = f.speed;
            this.Ja = f.acc
        };
        h.Ra = function() {
            var f = this.b.Gf(this.j);
            0 !== f && (0 !== this.Ja && (this.speed += this.Ja * f), 0 !== this.speed && (this.j.A = Pa(this.j.A + this.speed * f), this.j.L()))
        };
        n.k = new function() {};
        f.prototype.tm = function(f) {
            this.speed = M(f)
        };
        n.n = new f;
        p.prototype.um = function(f) {
            f.I(Na(this.speed))
        };
        n.u = new p
    })();

function fd(f) {
        this.b = f
    }
    (function() {
        function f() {}

        function p() {}

        function n() {}
        var h = fd.prototype;
        h.N = function(b) {
            this.behavior = b;
            this.b = b.b
        };
        h.N.prototype.J = function() {};
        h.K = function(b, c) {
            this.type = b;
            this.behavior = b.behavior;
            this.j = c;
            this.b = b.b;
            this.lb = 0
        };
        var l = h.K.prototype,
            c = 2 * Math.PI,
            e = Math.PI / 2,
            b = 3 * Math.PI / 2;
        l.J = function() {
            this.eb = 1 === this.B[0];
            this.ve = this.B[1];
            this.qt = this.B[2];
            this.Md = this.B[3];
            this.Md += Math.random() * this.B[4];
            0 === this.Md ? this.lb = 0 : (this.lb = this.B[5] / this.Md * c, this.lb += Math.random() * this.B[6] / this.Md * c);
            this.mb = this.B[7];
            this.mb += Math.random() * this.B[8];
            this.wl = this.Bh = this.Aa = 0;
            5 === this.ve && (this.mb = M(this.mb));
            this.init()
        };
        l.Wa = function() {
            return {
                i: this.lb,
                a: this.eb,
                mv: this.ve,
                w: this.qt,
                p: this.Md,
                mag: this.mb,
                iv: this.Aa,
                iv2: this.Bh,
                r: this.wl,
                lkv: this.ud,
                lkv2: this.Qk
            }
        };
        l.bb = function(b) {
            this.lb = b.i;
            this.eb = b.a;
            this.ve = b.mv;
            this.qt = b.w;
            this.Md = b.p;
            this.mb = b.mag;
            this.Aa = b.iv;
            this.Bh = b.iv2 || 0;
            this.wl = b.r;
            this.ud = b.lkv;
            this.Qk = b.lkv2 || 0
        };
        l.init = function() {
            switch (this.ve) {
                case 0:
                    this.Aa = this.j.x;
                    break;
                case 1:
                    this.Aa = this.j.y;
                    break;
                case 2:
                    this.Aa = this.j.width;
                    this.wl = this.j.height / this.j.width;
                    break;
                case 3:
                    this.Aa = this.j.width;
                    break;
                case 4:
                    this.Aa = this.j.height;
                    break;
                case 5:
                    this.Aa = this.j.A;
                    break;
                case 6:
                    this.Aa = this.j.opacity;
                    break;
                case 7:
                    this.Aa = 0;
                    break;
                case 8:
                    this.Aa = this.j.x, this.Bh = this.j.y
            }
            this.ud = this.Aa;
            this.Qk = this.Bh
        };
        l.of = function(f) {
            f = f % c;
            switch (this.qt) {
                case 0:
                    return Math.sin(f);
                case 1:
                    return f <= e ? f / e : f <= b ? 1 - 2 * (f - e) / Math.PI : (f - b) / e - 1;
                case 2:
                    return 2 * f / c - 1;
                case 3:
                    return -2 * f / c + 1;
                case 4:
                    return f <
                        Math.PI ? -1 : 1
            }
            return 0
        };
        l.Ra = function() {
            var b = this.b.Gf(this.j);
            this.eb && 0 !== b && (0 === this.Md ? this.lb = 0 : (this.lb += b / this.Md * c, this.lb = this.lb % c), this.yy())
        };
        l.yy = function() {
            switch (this.ve) {
                case 0:
                    this.j.x !== this.ud && (this.Aa += this.j.x - this.ud);
                    this.j.x = this.Aa + this.of(this.lb) * this.mb;
                    this.ud = this.j.x;
                    break;
                case 1:
                    this.j.y !== this.ud && (this.Aa += this.j.y - this.ud);
                    this.j.y = this.Aa + this.of(this.lb) * this.mb;
                    this.ud = this.j.y;
                    break;
                case 2:
                    this.j.width = this.Aa + this.of(this.lb) * this.mb;
                    this.j.height = this.j.width * this.wl;
                    break;
                case 3:
                    this.j.width = this.Aa + this.of(this.lb) * this.mb;
                    break;
                case 4:
                    this.j.height = this.Aa + this.of(this.lb) * this.mb;
                    break;
                case 5:
                    this.j.A !== this.ud && (this.Aa = Pa(this.Aa + (this.j.A - this.ud)));
                    this.j.A = Pa(this.Aa + this.of(this.lb) * this.mb);
                    this.ud = this.j.A;
                    break;
                case 6:
                    this.j.opacity = this.Aa + this.of(this.lb) * this.mb / 100;
                    0 > this.j.opacity ? this.j.opacity = 0 : 1 < this.j.opacity && (this.j.opacity = 1);
                    break;
                case 8:
                    this.j.x !== this.ud && (this.Aa += this.j.x - this.ud), this.j.y !== this.Qk && (this.Bh += this.j.y - this.Qk), this.j.x = this.Aa + Math.cos(this.j.A) * this.of(this.lb) * this.mb, this.j.y = this.Bh + Math.sin(this.j.A) * this.of(this.lb) * this.mb, this.ud = this.j.x, this.Qk = this.j.y
            }
            this.j.L()
        };
        l.Zw = function(b, c) {
            switch (this.ve) {
                case 2:
                    this.Aa *= c.width / b.width;
                    this.wl = c.height / c.width;
                    break;
                case 3:
                    this.Aa *= c.width / b.width;
                    break;
                case 4:
                    this.Aa *= c.height / b.height
            }
        };
        f.prototype.wz = function() {
            return this.eb
        };
        f.prototype.$y = function(b) {
            return this.ve === b
        };
        h.k = new f;
        p.prototype.OB = function(b) {
            this.eb = 1 === b
        };
        p.prototype.tu = function(b) {
            this.Md = b
        };
        p.prototype.jC = function(b) {
            this.mb = b;
            5 === this.ve && (this.mb = M(this.mb))
        };
        p.prototype.nC = function(b) {
            5 === this.ve && 5 !== b && (this.mb = Na(this.mb));
            this.ve = b;
            this.init()
        };
        p.prototype.pC = function(b) {
            this.lb = b * c % c;
            this.yy()
        };
        p.prototype.NC = function() {
            this.init()
        };
        h.n = new p;
        n.prototype.hz = function(b) {
            b.I(this.lb / c)
        };
        n.prototype.dA = function(b) {
            5 === this.ve ? b.I(Na(this.mb)) : b.I(this.mb)
        };
        n.prototype.OC = function(b) {
            b.I(this.of(this.lb) * this.mb)
        };
        h.u = new n
    })();

function yc(f) {
        this.b = f
    }
    (function() {
        function f() {}
        var p = yc.prototype;
        p.N = function(f) {
            this.behavior = f;
            this.b = f.b
        };
        p.N.prototype.J = function() {};
        p.K = function(f, l) {
            this.type = f;
            this.behavior = f.behavior;
            this.j = l;
            this.b = f.b
        };
        var n = p.K.prototype;
        n.J = function() {
            this.j.T.solidEnabled = 0 !== this.B[0]
        };
        n.Ra = function() {};
        p.k = new function() {};
        f.prototype.Wj = function(f) {
            this.j.T.solidEnabled = !!f
        };
        p.n = new f
    })();

function xc() {
    return [Kc, Ac, Bc, Z, zc, Uc, Vc, Wc, Cc, Dc, Jc, Ic, Lc, Ec, Oc, Mc, Nc, W, Pc, Qc, Sc, Xc, Rc, Tc, Zc, ad, fd, $c, Yc, dd, yc, bd, cd, V.prototype.k.bu, V.prototype.n.yC, V.prototype.u.CH, W.prototype.n.Zg, Pc.prototype.n.Zg, Yc.prototype.n.PB, Yc.prototype.n.tm, V.prototype.u.random, W.prototype.n.ni, Bc.prototype.n.FC, Bc.prototype.n.AB, W.prototype.n.mi, Cc.prototype.u.mz, Cc.prototype.n.Jy, ad.prototype.n.zB, Pc.prototype.n.UB, W.prototype.n.$g, V.prototype.u.xH, V.prototype.u.zH, V.prototype.u.wH, W.prototype.n.Mp, bd.prototype.u.Ht, W.prototype.u.$j, W.prototype.n.It, Lc.prototype.n.vm, Lc.prototype.n.$g, W.prototype.u.rf, W.prototype.u.sf, V.prototype.n.wC, V.prototype.u.max, V.prototype.n.fz, V.prototype.u.yH, Qc.prototype.n.qu, Qc.prototype.n.ZB, V.prototype.u.PG, V.prototype.k.jz, Rc.prototype.n.mi, W.prototype.u.Qj, Rc.prototype.u.rf, V.prototype.k.IB, V.prototype.u.Zu, Sc.prototype.u.jm, Sc.prototype.u.Qj, Sc.prototype.u.wp, W.prototype.n.RB, fd.prototype.n.tu, fd.prototype.n.jC, W.prototype.k.Zy, W.prototype.n.Cp, W.prototype.n.pu, W.prototype.n.Yj, W.prototype.u.km, V.prototype.k.zt, W.prototype.n.vm, V.prototype.k.Wy, W.prototype.n.mC, V.prototype.k.xB, V.prototype.k.cz, Rc.prototype.n.Zg, W.prototype.k.Lz, V.prototype.u.YF, W.prototype.n.oi, W.prototype.k.yp, W.prototype.u.Yz, W.prototype.u.Au, Pc.prototype.n.Np, Sc.prototype.k.Kp, zc.prototype.n.CallFunction, Qc.prototype.n.Np, Qc.prototype.n.$B, Cc.prototype.k.rz, W.prototype.u.jm, V.prototype.n.QC, Qc.prototype.n.Zg, V.prototype.u.fG, Rc.prototype.n.ni, $c.prototype.n.YB, $c.prototype.n.KB, Qc.prototype.n.It, V.prototype.u.min, Z.prototype.u.SC, Qc.prototype.n.oi, $c.prototype.n.XB, $c.prototype.n.zC, Z.prototype.k.Nz, Qc.prototype.n.$g, V.prototype.k.Xy, V.prototype.u["int"], bd.prototype.n.su, bd.prototype.n.cC, bd.prototype.u.Vz, V.prototype.n.eC, V.prototype.u.ceil, V.prototype.n.gC, V.prototype.n.NB, V.prototype.k.Ez, W.prototype.k.qA, ad.prototype.n.MC, W.prototype.u.wp, Lc.prototype.n.pu, W.prototype.n.VB, fd.prototype.n.OB, fd.prototype.n.pC, Bc.prototype.n.yu, W.prototype.n.SB, W.prototype.n.QB, W.prototype.k.gi, W.prototype.n.ut, W.prototype.k.Dt, W.prototype.k.xz, W.prototype.u.ez, Bc.prototype.n.qC, W.prototype.n.DC, W.prototype.k.yt, bd.prototype.n.vu, V.prototype.k.lz, Sc.prototype.u.rf, Sc.prototype.n.mi, Sc.prototype.n.$g, Z.prototype.u.RC, Sc.prototype.n.ah, V.prototype.u.floor, Sc.prototype.n.ru, Sc.prototype.n.vC, Sc.prototype.u.$j, Sc.prototype.u.km, Sc.prototype.n.uC, Sc.prototype.n.bA, Sc.prototype.n.oi, Sc.prototype.k.yp, fd.prototype.n.NC, fd.prototype.n.nC, fd.prototype.u.hz, Rc.prototype.u.Qj, Sc.prototype.n.wu, V.prototype.u.Bg, Rc.prototype.u.Au, Rc.prototype.n.$g, fd.prototype.u.OC, V.prototype.u.abs, W.prototype.k.dz, $c.prototype.k.Rt, W.prototype.k.Bz, V.prototype.k.iz, W.prototype.n.zu, bd.prototype.u.Bu, V.prototype.k.KC, bd.prototype.k.xp, Lc.prototype.n.tC, yc.prototype.n.Wj, Sc.prototype.n.ni, Cc.prototype.k.xt, fd.prototype.k.wz, fd.prototype.k.$y, Sc.prototype.k.Dt, V.prototype.k.yB, Rc.prototype.n.ah, Rc.prototype.n.Cp, Sc.prototype.u.sf, V.prototype.u.A, bd.prototype.u.um, Tc.prototype.k.Ip, Z.prototype.k.Uj, Ec.prototype.k.Zt, V.prototype.u.Wg, Bc.prototype.n.Xj, Rc.prototype.n.oi, Qc.prototype.n.ni, zc.prototype.k.nm, bd.prototype.n.lC, Z.prototype.n.PC, W.prototype.n.pi, Lc.prototype.n.pi, V.prototype.n.hC, bd.prototype.n.Wj, Vc.prototype.n.GC, Oc.prototype.n.DB, V.prototype.u.UF, Rc.prototype.u.$j, Rc.prototype.k.yp, W.prototype.n.wu, W.prototype.n.ah, Tc.prototype.k.Qz, Ec.prototype.k.Gz, Pc.prototype.n.Mp, Pc.prototype.n.ah, V.prototype.u.AD, W.prototype.n.eA, bd.prototype.k.au, Lc.prototype.n.Cp, W.prototype.k.Mz, Sc.prototype.k.gi, Tc.prototype.k.Jp, Tc.prototype.u.JC, bd.prototype.k.zz, bd.prototype.n.uu, bd.prototype.k.Iz, dd.prototype.n.tm, Tc.prototype.k.Fz, bd.prototype.k.Bt, Tc.prototype.k.Hp, Ec.prototype.k.Fp, bd.prototype.k.Cz, Tc.prototype.u.rf, Tc.prototype.u.sf, W.prototype.k.Lt, V.prototype.u.dD, W.prototype.u.Ly, W.prototype.u.im, W.prototype.n.MB, Cc.prototype.u.vp, Pc.prototype.n.$g, W.prototype.u.Oy, Cc.prototype.n.dC, Ic.prototype.n.bC, Pc.prototype.n.mi, bd.prototype.n.xu, V.prototype.u.ZG, Rc.prototype.k.gi, V.prototype.u.BH, V.prototype.u.SF, Pc.prototype.n.ni, W.prototype.n.rC, V.prototype.k.Jz, Wc.prototype.n.Pp, V.prototype.u.DG, Uc.prototype.n.BC, V.prototype.n.Ky, Dc.prototype.n.Pp, W.prototype.k.Kt, V.prototype.u.YG, V.prototype.n.LB, V.prototype.n.pz, W.prototype.u.uz, W.prototype.u.vz, Ic.prototype.k.Yt, Tc.prototype.k.Qt, V.prototype.k.wB, Pc.prototype.k.gi, Qc.prototype.u.km, Pc.prototype.n.oi, Pc.prototype.n.up, zc.prototype.u.vB, Pc.prototype.n.aC, Lc.prototype.n.Zg, zc.prototype.k.bz, Qc.prototype.n.Yj, Uc.prototype.k.Tt, fd.prototype.u.dA, V.prototype.n.fC, Z.prototype.k.Dz, Vc.prototype.k.Hz, Vc.prototype.n.Bp, Nc.prototype.n.Bp, Pc.prototype.u.Text, V.prototype.u.mH, Pc.prototype.u.Qj, Pc.prototype.u.sf, Pc.prototype.u.rf, Pc.prototype.u.jm, Mc.prototype.u.Xz, Mc.prototype.n.Iy, Mc.prototype.n.$z, Ac.prototype.n.CB, Z.prototype.k.mu, Ac.prototype.k.lm, Ac.prototype.u.Wz, Lc.prototype.n.Yj, Lc.prototype.u.sf, Lc.prototype.n.sC, Rc.prototype.n.fA, Qc.prototype.n.mi, Qc.prototype.n.ah, V.prototype.k.Zz, Pc.prototype.k.Rz, Jc.prototype.k.Kz, Jc.prototype.n.WB, Vc.prototype.n.CC, Nc.prototype.k.fu, Oc.prototype.n.nz, V.prototype.u.RF, W.prototype.k.Ct, Ic.prototype.n.HB, Qc.prototype.k.Ct, Qc.prototype.k.gi, Z.prototype.n.qz, Z.prototype.n.Qy, Z.prototype.n.JB, Bc.prototype.k.Pz, Uc.prototype.n.EB, Ic.prototype.k.Mt, Z.prototype.n.GB, Pc.prototype.u.im, W.prototype.n.xC, Mc.prototype.k.Jt, Mc.prototype.k.cu, Mc.prototype.k.St, V.prototype.n.iC, Rc.prototype.u.im, Z.prototype.n.Vy, Qc.prototype.u.sf, Cc.prototype.k.kz, Cc.prototype.k.Yy, Vc.prototype.k.eu, Vc.prototype.u.BB, Xc.prototype.n.pi, Kc.prototype.n.Zg, W.prototype.u.Ny, Kc.prototype.n.pi, Qc.prototype.n.pi, W.prototype.u.Opacity, Xc.prototype.k.IsPlaying, Bc.prototype.n.oC, Xc.prototype.n.Vj, Kc.prototype.n.$g, Kc.prototype.n.oi, Kc.prototype.u.$j, Kc.prototype.u.km, Kc.prototype.k.Kp, Qc.prototype.u.rf, Qc.prototype.k.Kp, Kc.prototype.u.rf, Kc.prototype.u.sf, Kc.prototype.n.ni, Vc.prototype.n.AC, Kc.prototype.n.Yj, Kc.prototype.n.mi, Kc.prototype.n.ut, Kc.prototype.k.yt, Kc.prototype.u.wp, Kc.prototype.k.gi, Kc.prototype.u.im, Kc.prototype.n.zu, Qc.prototype.n.up, Tc.prototype.k.ou, Kc.prototype.k.az, Vc.prototype.n.LC, Ic.prototype.n.Ry, V.prototype.k.Oz, Z.prototype.u.sz, Ic.prototype.k.Xt, Cc.prototype.n.Sy, Bc.prototype.n.kC, Ic.prototype.k.Vt, Ic.prototype.n.oz, Ic.prototype.k.Wt, Cc.prototype.n.Uz, Ic.prototype.u.Sz, Uc.prototype.k.Ut, Kc.prototype.u.jm, Qc.prototype.n.ru, Qc.prototype.n.vm, Pc.prototype.n.vm, Kc.prototype.n.ah, Pc.prototype.n.Yj, Kc.prototype.u.Qj, Pc.prototype.u.$j, Cc.prototype.u.Ft, Sc.prototype.u.IC, Sc.prototype.n.Zg, Ec.prototype.k.Nt, Cc.prototype.n.Et, V.prototype.u.TF]
};