import{options as n}from"preact";function r(){return n.t=n.debounceRendering,n.debounceRendering=function(r){return n.o=r},function(){return n.o&&n.o()}}var t=function(n){return null!=n&&"function"==typeof n.then},o=0;function u(u){if(++o>1){var e=u();return t(e)?e.then(function(){--o}):(--o,Promise.resolve())}var f,c,a=n.requestAnimationFrame,l=r();n.requestAnimationFrame=function(n){return f=n};var v,d,h=function(){try{for(l();f;)c=f,f=null,c(),l()}catch(n){v||(v=n)}finally{i()}n.requestAnimationFrame=a,--o};try{d=u()}catch(n){v=n}if(t(d))return d.then(h,function(n){throw h(),n});if(h(),v)throw v;return Promise.resolve()}function i(){n.o&&(n.o(),delete n.o),void 0!==n.t?(n.debounceRendering=n.t,delete n.t):n.debounceRendering=void 0}export{r as setupRerender,u as act,i as teardown};
//# sourceMappingURL=testUtils.module.js.map
