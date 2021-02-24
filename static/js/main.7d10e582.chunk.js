(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),n=a(12),i=a.n(n),s=a(4),o=a.n(s),u=a(6),l=a(3),p=a(8),b=a(0),d=function(e){var t=e.currentTrack;return Object(b.jsxs)("div",{className:"track_container",children:[Object(b.jsx)("img",{src:t.cover,alt:t.name}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist})]})},j=a(7),h=a(5),f=function(e){var t=e.isPlaying,a=e.setIsPlaying,r=e.audioRef,n=e.trackInfo,i=e.setTrackInfo,s=e.tracks,p=e.setTracks,d=e.currentTrack,f=e.setCurrentTrack;Object(c.useEffect)((function(){var e=s.map((function(e){return e.id===d.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));p(e)}),[d]);var m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},O=function(){var e=Object(u.a)(o.a.mark((function e(a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s.findIndex((function(e){return e.id===d.id})),"skip-forward"!==a){e.next=4;break}return e.next=4,f(s[(c+1)%s.length]);case 4:if("skip-back"!==a){e.next=13;break}if((c-1)%s.length!==-1){e.next=11;break}return e.next=8,f(s[s.length-1]);case 8:if(!t){e.next=10;break}return e.abrupt("return",r.current.play());case 10:return e.abrupt("return");case 11:return e.next=13,f(s[(c-1)%s.length]);case 13:if(!t){e.next=15;break}return e.abrupt("return",r.current.play());case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(n.animationPercentage,"%)")};return Object(b.jsxs)("div",{className:"player_container",children:[Object(b.jsxs)("div",{className:"time_control",children:[Object(b.jsx)("p",{children:m(n.currentTime)}),Object(b.jsxs)("div",{className:"custom_track",style:{background:"linear-gradient(to right, ".concat(d.color[0],", ").concat(d.color[1],")")},children:[Object(b.jsx)("input",{min:0,max:n.duration||0,value:n.currentTime,onChange:function(e){r.current.currentTime=e.target.value,i(Object(l.a)(Object(l.a)({},n),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("div",{className:"animate_custom_track",style:v})]}),Object(b.jsx)("p",{children:n.duration?m(n.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play_control",children:[Object(b.jsx)(j.a,{className:"skip-back",icon:h.a,size:"2x",onClick:function(){return O("skip-back")}}),Object(b.jsx)(j.a,{className:"play",icon:t?h.d:h.e,size:"2x",onClick:function(){t?(r.current.pause(),a(!1)):(r.current.play(),a(!0))}}),Object(b.jsx)(j.a,{className:"skip-forward",icon:h.b,size:"2x",onClick:function(){return O("skip-forward")}})]})]})},m=function(e){var t=e.track,a=e.tracks,c=e.setCurrentTrack,r=e.audioRef,n=e.isPlaying,i=e.setTracks,s=function(){var e=Object(u.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:if(s=a.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),i(s),!n){e.next=6;break}return e.abrupt("return",r.current.play());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"library_track ".concat(t.active?"selected":""),onClick:s,children:[Object(b.jsx)("img",{src:t.cover,alt:t.name}),Object(b.jsxs)("div",{className:"track_desc",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.tracks,a=e.setCurrentTrack,c=e.audioRef,r=e.isPlaying,n=e.setTracks,i=e.isLibraryOpen;return Object(b.jsxs)("div",{className:"library_container ".concat(i?"open_library":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library_tracks",children:t.map((function(e){return Object(b.jsx)(m,{track:e,tracks:t,audioRef:c,isPlaying:r,setTracks:n,setCurrentTrack:a},e.id)}))})]})},v=function(e){var t=e.isLibraryOpen,a=e.setIsLibraryOpen;return Object(b.jsxs)("nav",{className:"navbar_container",children:[Object(b.jsx)("h1",{children:"Waves"}),Object(b.jsxs)("button",{onClick:function(){return a(!t)},children:["Library",Object(b.jsx)(j.a,{icon:h.c})]})]})},x=a(27);var k=function(){return[{name:"Ocean View",artist:"G Mills, Kyle McEvoy, Luke Otwell",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10320",color:["#CEB6C6","#44408D"],id:Object(x.a)(),active:!0},{name:"Cold Outside",artist:"Nymano",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10150",color:["#5A517E","#F7A6A2"],id:Object(x.a)(),active:!1},{name:"Paraglider",artist:"Kendall Miles, HERB",cover:"https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=9318",color:["#BD6966","#FBB35A"],id:Object(x.a)(),active:!1},{name:"Hotel Lobby Birthday Party",artist:"Aviino, Oliv",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10452",color:["#153867","#1D6471"],id:Object(x.a)(),active:!1},{name:"Faces",artist:"Knowmadic",cover:"https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=8554",color:["#AF6C73","#E9FBCB"],id:Object(x.a)(),active:!1},{name:"Green Tea",artist:"Eli Way",cover:"https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=7944",color:["#49BACC","#DC67A8"],id:Object(x.a)(),active:!1},{name:"Focus",artist:"Ezzy",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10335",color:["#CEB6C6","#44408D"],id:Object(x.a)(),active:!1},{name:"Sundown",artist:"Arbour, Aarigod",cover:"https://chillhop.com/wp-content/uploads/2020/07/4551baea04f413236b4f3e3039efc361935a9e28-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=8974",color:["#B3DFCC","#7E485D"],id:Object(x.a)(),active:!1},{name:"Going Back",artist:"Sworn",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",audio:"https://mp3.chillhop.com/serve.php/?mp3=10310",color:["#DDBAD0","#DC5B81"],id:Object(x.a)(),active:!1}]},y=(a(24),function(){var e=Object(c.useRef)(null),t=Object(c.useState)(k()),a=Object(p.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)(r[0]),s=Object(p.a)(i,2),j=s[0],h=s[1],m=Object(c.useState)(!1),x=Object(p.a)(m,2),y=x[0],g=x[1],T=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(T,2),C=w[0],N=w[1],B=Object(c.useState)(!1),_=Object(p.a)(B,2),P=_[0],E=_[1],A=function(e){var t=e.target.currentTime,a=e.target.duration,c=Math.round(t),r=Math.round(a),n=Math.round(c/r*100);N(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:a,animationPercentage:n}))},D=function(){var t=Object(u.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===j.id})),t.next=3,h(r[(a+1)%r.length]);case 3:if(!y){t.next=5;break}return t.abrupt("return",e.current.play());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"app ".concat(P?"library_active":""),children:[Object(b.jsx)(v,{isLibraryOpen:P,setIsLibraryOpen:E}),Object(b.jsx)(d,{currentTrack:j}),Object(b.jsx)(f,{isPlaying:y,setIsPlaying:g,currentTrack:j,setCurrentTrack:h,audioRef:e,trackInfo:C,setTrackInfo:N,tracks:r,setTracks:n}),Object(b.jsx)(O,{tracks:r,audioRef:e,isPlaying:y,setTracks:n,isLibraryOpen:P,setCurrentTrack:h}),Object(b.jsx)("audio",{onTimeUpdate:A,onLoadedMetadata:A,onEnded:D,ref:e,src:j.audio})]})});i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7d10e582.chunk.js.map