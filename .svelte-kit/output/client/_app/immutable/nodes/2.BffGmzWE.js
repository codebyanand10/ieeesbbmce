import{c as M,a as c,f as g}from"../chunks/Dh-2-DoM.js";import{ah as z,an as A,ai as k,aw as B,aj as C,ak as y,i as b,ap as D,al as I,ax as N,a8 as O,aq as w}from"../chunks/CUHtDtEh.js";import{c as R,o as T,a as U,i as V}from"../chunks/DMSbvwb8.js";import{i as W}from"../chunks/CpsVttOy.js";import{b as j}from"../chunks/CR0InYpw.js";import"../chunks/CUwV8vq0.js";import{s as q}from"../chunks/Ddd_zvKu.js";import{i as H}from"../chunks/fTVFgSFv.js";import{p as l}from"../chunks/DoL0Isfq.js";function S(d,e){z(e,!1);let i=l(e,"element",8,null),u=l(e,"once",8,!1),h=l(e,"intersecting",12,!1),f=l(e,"root",8,null),r=l(e,"rootMargin",8,"0px"),n=l(e,"threshold",8,0),o=l(e,"entry",12,null),t=l(e,"observer",12,null);const v=R();let a=null,s=null;const m=()=>{t(new IntersectionObserver(x=>{x.forEach(p=>{o(p),h(p.isIntersecting)})},{root:f(),rootMargin:r(),threshold:n()}))};T(()=>(m(),()=>{t()&&(t().disconnect(),t(null))})),U(async()=>{o()!==null&&(v("observe",o()),o().isIntersecting&&(v("intersect",o()),i()&&u()&&t()?.unobserve(i()))),await B(),i()!==null&&i()!==s&&(t()?.observe(i()),s!==null&&t()?.unobserve(s),s=i()),a&&r()!==a&&(t()?.disconnect(),s=null,m()),a=r()}),H();var E=M(),_=A(E);q(_,e,"default",{get intersecting(){return h()},get entry(){return o()},get observer(){return t()}}),c(d,E),k()}var F=g(`<h1 class="about-title svelte-1uha8ag">About IEEE</h1> <div class="about-grid svelte-1uha8ag"><div class="about-what svelte-1uha8ag" width="50px"><h1 class="svelte-1uha8ag">What is IEEE?</h1> <p class="svelte-1uha8ag">IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mission</h1> <p class="svelte-1uha8ag">IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Vision</h1> <p class="svelte-1uha8ag">IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.</p></div></div>`,1),G=g(`<h1 class="about-title svelte-1uha8ag">About IEEE</h1> <div class="about-grid svelte-1uha8ag"><div class="about-what svelte-1uha8ag" width="50px"><h1 class="svelte-1uha8ag">What is IEEE?</h1> <p class="svelte-1uha8ag">IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Mission</h1> <p class="svelte-1uha8ag">IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.</p></div> <div class="about-item svelte-1uha8ag"><h1 class="svelte-1uha8ag">Vision</h1> <p class="svelte-1uha8ag">IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.</p></div></div>`,1),J=g('<div class="about-div svelte-1uha8ag"><!></div>'),K=g('<div class="main svelte-1uha8ag"><div class="big-title-div svelte-1uha8ag"><h1 class="big-title svelte-1uha8ag">IEEE STUDENT BRANCH</h1> <h2 class="small-title svelte-1uha8ag">Baselios Mathews II College of Engineering</h2></div> <!></div>');function te(d){let e=N(void 0);var i=K(),u=C(y(i),2);S(u,{get element(){return b(e)},once:!0,children:V,$$slots:{default:(h,f)=>{const r=D(()=>f.intersecting);var n=J(),o=y(n);{var t=a=>{var s=F();w(2),c(a,s)},v=a=>{var s=G();w(2),c(a,s)};W(o,a=>{b(r)?a(t):a(v,!1)})}I(n),j(n,a=>O(e,a),()=>b(e)),c(h,n)}}}),I(i),c(d,i)}export{te as component};
