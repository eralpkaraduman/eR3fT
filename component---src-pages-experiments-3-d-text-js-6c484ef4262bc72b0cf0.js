(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{iEgc:function(I,M,g){"use strict";g.r(M);var D=g("q1tI"),A=g.n(D),N=g("o3qt"),i=g("Womt"),z=g("MHn+"),C=g("uNnn"),O=g.n(C),T=function(){return A.a.createElement(z.a,{camera:{position:[0,0,160]}},A.a.createElement("rectAreaLight",{intensity:4,width:300,height:300,position:[0,100,250]}),A.a.createElement(D.Suspense,{fallback:null},A.a.createElement(j,{text:"3D",color:255,size:60,height:10,position:[0,40,0],rotation:[0,.4,.5],rotationFactor:.04}),A.a.createElement(j,{text:"TEXT",color:16711680,size:40,height:10,position:[0,-40,0],rotation:[-.1,-.4,-.1],rotationFactor:-.02})))},j=function(I){var M=I.position,g=I.rotation,N=I.rotationFactor,C=I.text,T=I.size,j=I.height,y=I.color,w=Object(D.useRef)();Object(z.b)((function(){w.current.rotation.y+=N}));var Y=Object(z.c)(i.FontLoader,O.a),t=Object(D.useMemo)((function(){return{font:Y,size:T,height:j,curveSegments:32,bevelEnabled:!0,bevelThickness:3,bevelSize:1,bevelOffset:0,bevelSegments:8}}),[Y,j,T]),b=Object(z.d)((function(I){var M=new i.Vector3;I.geometry.computeBoundingBox(),I.geometry.boundingBox.getSize(M),I.position.x=-M.x/2,I.position.y=-M.y/2,I.position.z=-M.z/2}));return A.a.createElement("group",{ref:w,position:M,rotation:g},A.a.createElement("mesh",{ref:b},A.a.createElement("textGeometry",{attach:"geometry",args:[C,t]}),A.a.createElement("meshStandardMaterial",{color:y,attach:"material"})))};M.default=function(I){I.children,I.width,I.height;return A.a.createElement(N.a,{width:200,height:200,title:"3D Text"},A.a.createElement(T,null))}},uNnn:function(I,M){I.exports="data:;base64,eyJnbHlwaHMiOnsiMCI6eyJoYSI6OTU2LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDQ3OCA5NTYgYiA5MDAgNDY3IDcyOSA5NTYgOTAwIDczNiBiIDQ3OCAtMjIgOTAwIDE5NyA3MjkgLTIyIGIgNTYgNDY3IDIyNCAtMjIgNTYgMTk3IGIgNDc4IDk1NiA1NiA3MzYgMjI1IDk1NiBtIDQ3OCAyMjIgYiA2MzMgNDY3IDU2MyAyMjIgNjMzIDMzMiBiIDQ3OCA3MTEgNjMzIDYwMSA1NjMgNzExIGIgMzIyIDQ2NyAzOTMgNzExIDMyMiA2MDEgYiA0NzggMjIyIDMyMiAzMzIgMzkzIDIyMiAifSwiMSI6eyJoYSI6NjQ0LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDU0NCA5NTYgbCA1NDQgMCBsIDI3OCAwIGwgMjc4IDY1NyBsIDc4IDYxOCBsIDc4IDg0NCAifSwiMiI6eyJoYSI6OTExLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDU2IDYwMCBiIDQzNSA5NTYgNTYgNzY5IDE4MyA5NTYgYiA4MzMgNjEzIDY3NiA5NTYgODMzIDgxNCBiIDU2OSAyNDQgODMzIDQ5MCA3NDIgMzU0IGwgODU2IDI0NCBsIDg1NiAwIGwgNTYgMCBsIDQ1NiA0MjIgYiA1NjQgNjAwIDU0NyA1MTkgNTY0IDU2MyBiIDQ0NCA3MTEgNTY0IDY2OSA1MTQgNzExIGIgMzE1IDU3OCAzNzUgNzExIDMxNSA2NjEgbCA1NiA2MDAgIn0sIjMiOnsiaGEiOjkxMSwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA3MjIgNDkzIGIgODU2IDI4OSA4MDAgNDU2IDg1NiAzNzkgYiA0NTYgLTIyIDg1NiAxNTAgNzM4IC0yMiBiIDU2IDMxMSAyMzkgLTIyIDU2IDc5IGwgMzIyIDMzMyBiIDQ2NSAyMDYgMzIyIDI0MCAzODIgMjA2IGIgNTc5IDI5MyA1MzIgMjA2IDU3OSAyNDMgYiAzODEgMzg5IDU3OSAzNjUgNTA2IDM4OSBsIDM4MSA1NjcgYiA1NjcgNjU0IDM4MSA1NjcgNTY3IDU2MSBiIDQ1NiA3MzEgNTY3IDY5NCA1MjEgNzMxIGIgMzIyIDYxMSAzODggNzMxIDMyNiA2OTYgbCA3OCA2MzMgYiA0NTYgOTU2IDEwMCA4NDYgMjQ5IDk1NiBiIDgzMyA2NjcgNzAwIDk1NiA4MzMgODE3IGIgNzIyIDQ5MyA4MzMgNTg2IDc4OSA1MjggIn0sIjQiOnsiaGEiOjk1NiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA5MDAgMzc4IGwgOTAwIDE1NiBsIDc4OSAxNTYgbCA3ODkgMCBsIDUyMiAwIGwgNTIyIDE1NiBsIDU2IDE1NiBsIDU2IDM1NiBsIDQ1NiA5MzMgbCA3ODkgOTMzIGwgNzg5IDM3OCBtIDUyMiA2NjcgbCAzNDQgMzc4IGwgNTIyIDM3OCAifSwiNSI6eyJoYSI6OTExLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDUwMCA2MjIgYiA4NTYgMzMzIDcyMSA2MjIgODU2IDUyOSBiIDQ0NCAtMjIgODU2IDExMSA2ODkgLTIyIGIgNTYgMjg5IDIyNSAtMjIgNTYgODkgbCAzMzIgMzA2IGIgNDU2IDIwMCAzNDAgMjQ2IDM5MiAyMDAgYiA1ODIgMzIyIDUyNSAyMDAgNTgyIDI1NCBiIDQ1NiA0MjIgNTgyIDM5MCA1MjUgNDIyIGIgMzQ0IDM3OCA0MDcgNDIyIDM2NyA0MDQgbCA3NiAzNzggbCAxNDcgOTMzIGwgNzY3IDkzMyBsIDc2NyA2ODkgbCAzNjcgNjg5IGwgMzU4IDYwMCBiIDUwMCA2MjIgNDA0IDYyMiA1MDAgNjIyICJ9LCI2Ijp7ImhhIjo5MTEsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNTI4IDY2NyBiIDg1NiAzNTYgNzQ5IDY2NyA4NTYgNTA2IGIgNDU2IC0yMiA4NTYgMTI2IDY5MyAtMjIgYiA1NiAzNjQgMjA3IC0yMiA1NiAxMTUgYiAzOTMgOTMzIDU2IDQzMiA3MSA2ODggbCA3ODkgOTMzIGIgNDM4IDY1MyA3ODkgOTMzIDU2OSA4MzYgYiA1MjggNjY3IDQzOCA2NTMgNDY3IDY2NyBtIDQ1NiAyMjIgYiA1ODkgMzMzIDUyOSAyMjIgNTg5IDI3MiBiIDQ1NiA0NDQgNTg5IDM5NCA1MjkgNDQ0IGIgMzIyIDMzMyAzODIgNDQ0IDMyMiAzOTQgYiA0NTYgMjIyIDMyMiAyNzIgMzgyIDIyMiAifSwiNyI6eyJoYSI6ODY3LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDg3OCA5MzMgbCA0NTYgMCBsIDE0NCAwIGwgNDc4IDY4OSBsIDU2IDY4OSBsIDU2IDkzMyAifSwiOCI6eyJoYSI6OTExLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDczNiA0OTMgYiA4NTYgMjg5IDgwOCA0NTggODU2IDM3OSBiIDQ1NiAtMjIgODU2IDExOCA3MTUgLTIyIGIgNTYgMjg5IDE5NiAtMjIgNTYgMTE4IGIgMTc1IDQ5MyA1NiAzNzkgMTAzIDQ1OCBiIDc1IDY2NyAxMDMgNTM2IDc1IDYwMyBiIDQ1NiA5NTYgNzUgODMxIDIzMyA5NTYgYiA4MzYgNjY3IDY4MSA5NTYgODM2IDgyOCBiIDczNiA0OTMgODM2IDYwMyA4MDggNTM2IG0gNDU2IDczMyBiIDMzMyA2NDQgMzg5IDczMyAzMzMgNjk0IGIgNDU2IDU1NiAzMzMgNTk0IDM4OSA1NTYgYiA1NzggNjQ0IDUyMiA1NTYgNTc4IDU5NCBiIDQ1NiA3MzMgNTc4IDY5NCA1MjIgNzMzIG0gNDU2IDIwMCBiIDU4OSAzMDAgNTI5IDIwMCA1ODkgMjQ0IGIgNDU2IDQwMCA1ODkgMzU2IDUyOSA0MDAgYiAzMjIgMzAwIDM4MiA0MDAgMzIyIDM1NiBiIDQ1NiAyMDAgMzIyIDI0NCAzODIgMjAwICJ9LCI5Ijp7ImhhIjo5MTEsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gMzgzIDI2NyBiIDU2IDU3OCAxNjMgMjY3IDU2IDQyOCBiIDQ1NiA5NTYgNTYgODA3IDIxOCA5NTYgYiA4NTYgNTY5IDcwNCA5NTYgODU2IDgxOCBiIDUxOCAwIDg1NiA1MDEgODQwIDI0NiBsIDEyMiAwIGIgNDc0IDI4MSAxMjIgMCAzNDIgOTcgYiAzODMgMjY3IDQ3NCAyODEgNDQ0IDI2NyBtIDQ1NiA3MTEgYiAzMjIgNjAwIDM4MiA3MTEgMzIyIDY2MSBiIDQ1NiA0ODkgMzIyIDUzOSAzODIgNDg5IGIgNTg5IDYwMCA1MjkgNDg5IDU4OSA1MzkgYiA0NTYgNzExIDU4OSA2NjEgNTI5IDcxMSAifSwiQSI6eyJoYSI6MTAwMCwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSAxMDExIDAgbCA3NDAgMCBsIDY4MSAxNTYgbCAzMTkgMTU2IGwgMjYwIDAgbCAtMTEgMCBsIDM3NSA5MzMgbCA2MjUgOTMzIG0gNjAzIDM1NiBsIDUwMCA2MjIgbCAzOTcgMzU2ICJ9LCJCIjp7ImhhIjo5MTEsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNzIxIDUwMSBiIDg3OCAyODEgODM5IDQ3NSA4NzggMzc0IGIgNTU4IDAgODc4IDExOSA3NTggMCBsIDc4IDAgbCA3OCA5MzMgbCA0NzggOTMzIGIgODMzIDY4OSA2OTIgOTMzIDgzMyA4NTAgYiA3MjEgNTAxIDgzMyA1OTYgNzg2IDUyNSBtIDM0NCA1NzggbCA0NTYgNTc4IGIgNTY3IDY1NiA1MjYgNTc4IDU2NyA2MDEgYiA0NTYgNzMzIDU2NyA3MDggNTI2IDczMyBsIDM0NCA3MzMgbSA0NzggMjAwIGIgNjExIDI4OSA1NTggMjAwIDYxMSAyMjggYiA0NzggMzc4IDYxMSAzNTAgNTU4IDM3OCBsIDM0NCAzNzggbCAzNDQgMjAwIGwgNDc4IDIwMCAifSwiQyI6eyJoYSI6OTExLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDU2NSAyMjIgYiA3NzYgMzE3IDY1MCAyMjIgNzI2IDI2MCBsIDg3OCA5MCBiIDU1OCAtMjIgNzk0IDE4IDY2OCAtMjIgYiAzMyA0NjcgMjY5IC0yMiAzMyAxOTcgYiA1NTggOTU2IDMzIDczNiAyNjkgOTU2IGIgODc4IDg0NCA2NjggOTU2IDc5NCA5MTcgbCA3NzYgNjE3IGIgNTY1IDcxMSA3MjYgNjc0IDY1MCA3MTEgYiAzMDAgNDY3IDQxOSA3MTEgMzAwIDYwMSBiIDU2NSAyMjIgMzAwIDMzMiA0MTkgMjIyICJ9LCJEIjp7ImhhIjo5NzgsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNDU0IDkzMyBiIDk0NCA0NjcgNzc1IDkzMyA5NDQgNzI1IGIgNDU0IDAgOTQ0IDIwOCA3NjcgMCBsIDc4IDAgbCA3OCA5MzMgbCA0NTQgOTMzIG0gNDc4IDI0NCBiIDY3OCA0NjcgNTY5IDI0NCA2NzggMzQ0IGIgNDc4IDY4OSA2NzggNTg5IDU2OSA2ODkgbCAzNDQgNjg5IGwgMzQ0IDI0NCBsIDQ3OCAyNDQgIn0sIkUiOnsiaGEiOjc1NiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSAzNDQgNjg5IGwgMzQ0IDU3OCBsIDYzMyA1NzggbCA2MzMgMzU2IGwgMzQ0IDM1NiBsIDM0NCAyNDQgbCA3MDAgMjQ0IGwgNzAwIDAgbCA3OCAwIGwgNzggOTMzIGwgNzAwIDkzMyBsIDcwMCA2ODkgIn0sIkYiOnsiaGEiOjczMywieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA3OCAwIGwgNzggOTMzIGwgNzAwIDkzMyBsIDcwMCA2ODkgbCAzNDQgNjg5IGwgMzQ0IDU3OCBsIDYzMyA1NzggbCA2MzMgMzU2IGwgMzQ0IDM1NiBsIDM0NCAwICJ9LCJHIjp7ImhhIjoxMDQ0LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDEwMDMgNTU2IGIgMTAxMSA0NjcgMTAwOCA1MjUgMTAxMSA0OTkgYiA1MzMgLTIyIDEwMTEgMTk3IDgxMCAtMjIgYiAzMyA0NjcgMjU3IC0yMiAzMyAxOTcgYiA1MzMgOTU2IDMzIDczNiAyNTcgOTU2IGIgOTY1IDY4OSA3MzIgOTU2IDg4MiA4NDcgbCA3MTQgNjIxIGIgNTMzIDcxMSA2NzEgNjc2IDYwNyA3MTEgYiAzMDAgNDY3IDQwNCA3MTEgMzAwIDYwMSBiIDUzMyAyMjIgMzAwIDMzMiA0MDQgMjIyIGIgNzM2IDM1NiA2MjQgMjIyIDcwMCAyNzQgbCA0NzggMzU2IGwgNDc4IDU1NiBsIDEwMDMgNTU2ICJ9LCJIIjp7ImhhIjoxMDAwLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDkyMiA5MzMgbCA5MjIgMCBsIDY1NiAwIGwgNjU2IDM0NCBsIDM0NCAzNDQgbCAzNDQgMCBsIDc4IDAgbCA3OCA5MzMgbCAzNDQgOTMzIGwgMzQ0IDU4OSBsIDY1NiA1ODkgbCA2NTYgOTMzICJ9LCJJIjp7ImhhIjo0MjIsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNzggMCBsIDc4IDkzMyBsIDM0NCA5MzMgbCAzNDQgMCAifSwiSiI6eyJoYSI6NzExLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDY1NiA5MzMgbCA2NTYgMzU2IGIgMjYxIC0yMiA2NTYgMTAxIDUwMCAtMjIgYiAzMyA2NyAxNzYgLTIyIDc5IDE1IGwgMTQ5IDI3NiBiIDI1NiAyMjIgMTcyIDI0MyAyMTEgMjIyIGIgMzg5IDM1NiAzMjkgMjIyIDM4OSAyNjQgbCAzODkgOTMzICJ9LCJLIjp7ImhhIjo5NzgsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gOTY3IDAgbCA2MzMgMCBsIDM0NCA0MDAgbCAzNDQgMCBsIDc4IDAgbCA3OCA5MzMgbCAzNDQgOTMzIGwgMzQ0IDU3OCBsIDYxMSA5MzMgbCA5NDQgOTMzIGwgNTg5IDQ4OSAifSwiTCI6eyJoYSI6NzMzLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDcwMCAyNDQgbCA3MDAgMCBsIDc4IDAgbCA3OCA5MzMgbCAzNDQgOTMzIGwgMzQ0IDI0NCAifSwiTSI6eyJoYSI6MTIyMiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSAxMTg5IDAgbCA5MjIgMCBsIDg3OCA0ODkgbCA3MjIgMCBsIDUwMCAwIGwgMzQ0IDQ4OSBsIDMwMCAwIGwgMzMgMCBsIDEyMiA5MzMgbCAzODkgOTMzIGwgNjExIDM3OCBsIDgzMyA5MzMgbCAxMTAwIDkzMyAifSwiTiI6eyJoYSI6MTA0NCwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA5NjcgOTMzIGwgOTY3IDAgbCA3MDAgMCBsIDM0NCA1MTEgbCAzNDQgMCBsIDc4IDAgbCA3OCA5MzMgbCAzNDQgOTMzIGwgNzAwIDQyMiBsIDcwMCA5MzMgIn0sIk8iOnsiaGEiOjEwODksInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNTQ0IDk1NiBiIDEwNTYgNDY3IDgyNiA5NTYgMTA1NiA3MzYgYiA1NDQgLTIyIDEwNTYgMTk3IDgyNiAtMjIgYiAzMyA0NjcgMjYzIC0yMiAzMyAxOTcgYiA1NDQgOTU2IDMzIDczNiAyNjMgOTU2IG0gNTQ0IDIyMiBiIDc4OSA0NjcgNjc5IDIyMiA3ODkgMzMyIGIgNTQ0IDcxMSA3ODkgNjAxIDY3OSA3MTEgYiAzMDAgNDY3IDQxMCA3MTEgMzAwIDYwMSBiIDU0NCAyMjIgMzAwIDMzMiA0MTAgMjIyICJ9LCJQIjp7ImhhIjo4ODksInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gNTAwIDkzMyBiIDg1NiA2MjIgNzQzIDkzMyA4NTYgODAzIGIgNTQ0IDI4OSA4NTYgNDQyIDc0MiAyODkgbCAzNDQgMjg5IGwgMzQ0IDAgbCA3OCAwIGwgNzggOTMzIGwgNTAwIDkzMyBtIDQ3NSA1MTEgYiA1ODkgNjExIDUzOCA1MTEgNTg5IDU0MiBiIDQ3NSA3MTEgNTg5IDY3OSA1MzggNzExIGwgMzQ0IDcxMSBsIDM0NCA1MTEgbCA0NzUgNTExICJ9LCJRIjp7ImhhIjoxMDg5LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDEwNzggMCBsIDgxMSAwIGwgNzg1IDM1IGIgNTQ0IC0yMiA3MTMgLTEgNjMxIC0yMiBiIDMzIDQ2NyAyNjMgLTIyIDMzIDE5NyBiIDU0NCA5NTYgMzMgNzM2IDI2MyA5NTYgYiAxMDU2IDQ2NyA4MjYgOTU2IDEwNTYgNzM2IGIgOTM1IDE1MSAxMDU2IDM0NyAxMDEwIDIzNiBtIDc1NiAzNDMgYiA3ODkgNDY3IDc3NiAzNzkgNzg5IDQyMSBiIDU0NCA3MTEgNzg5IDYwMSA2NzkgNzExIGIgMzAwIDQ2NyA0MTAgNzExIDMwMCA2MDEgYiA1NDQgMjIyIDMwMCAzMzIgNDEwIDIyMiBiIDYyOSAyMzggNTc1IDIyMiA2MDMgMjI4IGwgNTIyIDM3OCBsIDcyMiAzNzggbCA3NTYgMzQzICJ9LCJSIjp7ImhhIjo5MzMsInhfbWluIjowLCJ4X21heCI6MCwibyI6Im0gOTAwIDAgbCA1ODkgMCBsIDM5NiAyODkgbCAzNDQgMjg5IGwgMzQ0IDAgbCA3OCAwIGwgNzggOTMzIGwgNTAwIDkzMyBiIDg1NiA2MjIgNzQzIDkzMyA4NTYgODAzIGIgNjcxIDMxNCA4NTYgNDg1IDc4OSAzNjQgbSA0NzUgNTExIGIgNTg5IDYxMSA1MzggNTExIDU4OSA1NDIgYiA0NzUgNzExIDU4OSA2NzkgNTM4IDcxMSBsIDM0NCA3MTEgbCAzNDQgNTExIGwgNDc1IDUxMSAifSwiUyI6eyJoYSI6ODg5LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDQ0NCA2MTAgYiA4NTYgMzA0IDYyOCA1ODYgODU2IDU0MCBiIDQzMyAtMjIgODU2IDEyNCA3MzMgLTIyIGIgMzMgMTE3IDE4NSAtMjIgMzMgMTE3IGwgMTMyIDMyOSBiIDQzMyAyMjIgMjcxIDIyMiA0MzMgMjIyIGIgNTg5IDI3OSA1MDcgMjE5IDU4OSAyMjggYiA0MTggMzQ3IDU4OSAzMTkgNTQwIDMyOCBiIDU2IDY1MyAxNjQgMzg4IDU2IDQ5MiBiIDQ1OCA5NTYgNTYgODE3IDE4MiA5NTYgYiA4MTEgODQ0IDQ1OCA5NTYgNjg1IDk1NiBsIDcwNiA2NDQgYiA0MzMgNzExIDcwNiA2NDQgNjE5IDcxMSBiIDMyMiA2NjcgMzQ2IDcxMSAzMjIgNjkyIGIgNDQ0IDYxMCAzMjIgNjM2IDM0NiA2MjIgIn0sIlQiOnsiaGEiOjgyMiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA3ODkgOTMzIGwgNzg5IDY4OSBsIDU0NCA2ODkgbCA1NDQgMCBsIDI3OCAwIGwgMjc4IDY4OSBsIDMzIDY4OSBsIDMzIDkzMyAifSwiVSI6eyJoYSI6MTAwMCwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA5NDQgOTMzIGwgOTQ0IDQwMCBiIDUwMCAtMjIgOTQ0IDE1NCA3NzggLTIyIGIgNTYgNDAwIDIyMiAtMjIgNTYgMTU0IGwgNTYgOTMzIGwgMzQ0IDkzMyBsIDM0NCAzOTcgYiA1MDAgMjIyIDM0NCAyODEgNDIyIDIyMiBiIDY1NiAzOTcgNTc4IDIyMiA2NTYgMjgxIGwgNjU2IDkzMyAifSwiViI6eyJoYSI6MTAwMCwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSAtMTEgOTMzIGwgMzAwIDkzMyBsIDUwMCAzNzUgbCA3MDAgOTMzIGwgMTAxMSA5MzMgbCA2MzMgMCBsIDM2NyAwICJ9LCJXIjp7ImhhIjoxNDIyLCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDk2NyAzNzggbCAxMTIyIDkzMyBsIDE0MjIgOTMzIGwgMTExMSAwIGwgODMzIDAgbCA3MTEgNDQ0IGwgNTg5IDAgbCAzMTEgMCBsIDAgOTMzIGwgMzAwIDkzMyBsIDQ1NiAzNzggbCA1ODkgOTMzIGwgODMzIDkzMyAifSwiWCI6eyJoYSI6MTAyMiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSAxMDExIDAgbCA2OTcgMCBsIDUxMSAyOTQgbCAzMjUgMCBsIDExIDAgbCAzMjggNDg5IGwgMzUgOTMzIGwgMzQ5IDkzMyBsIDUxMSA2NzIgbCA2NzQgOTMzIGwgOTg4IDkzMyBsIDY5NCA0ODkgIn0sIlkiOnsiaGEiOjk1NiwieF9taW4iOjAsInhfbWF4IjowLCJvIjoibSA5NjcgOTMzIGwgNjExIDM3OCBsIDYxMSAwIGwgMzQ0IDAgbCAzNDQgMzc4IGwgLTExIDkzMyBsIDMwMCA5MzMgbCA0NzggNjQ0IGwgNjU2IDkzMyAifSwiWiI6eyJoYSI6ODg5LCJ4X21pbiI6MCwieF9tYXgiOjAsIm8iOiJtIDMzIDAgbCA0MjIgNjg5IGwgNTYgNjg5IGwgNTYgOTMzIGwgODU2IDkzMyBsIDQ2NyAyNDQgbCA4MzMgMjQ0IGwgODMzIDAgIn19LCJmYW1pbHlOYW1lIjoiTm9pciBQcm8gQm9sZCIsImFzY2VuZGVyIjoxMzExLCJkZXNjZW5kZXIiOi0zNTYsInVuZGVybGluZVBvc2l0aW9uIjotMTA0LCJ1bmRlcmxpbmVUaGlja25lc3MiOjY5LCJib3VuZGluZ0JveCI6eyJ5TWluIjotNDIyLCJ4TWluIjotMjY3LCJ5TWF4IjoxNjAwLCJ4TWF4IjoxNjU2fSwicmVzb2x1dGlvbiI6MTAwMCwib3JpZ2luYWxfZm9udF9pbmZvcm1hdGlvbiI6eyJmb3JtYXQiOjAsImNvcHlyaWdodCI6IkNvcHlyaWdodCAoYykgTWlsb3MgTWl0cm92aWMsIDIwMTYuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIiwiZm9udEZhbWlseSI6Ik5vaXIgUHJvIEJvbGQiLCJmb250U3ViZmFtaWx5IjoiUmVndWxhciIsInVuaXF1ZUlEIjoiMS4wMDA7VUtXTjtOb2lyUHJvLUJvbGQiLCJmdWxsTmFtZSI6Ik5vaXIgUHJvIEJvbGQiLCJ2ZXJzaW9uIjoiVmVyc2lvbiAxLjAwMDtQUyAwMDEuMDAwO2hvdGNvbnYgMS4wLjcwO21ha2VvdGYubGliMi41LjU4MzI5IiwicG9zdFNjcmlwdE5hbWUiOiJOb2lyUHJvLUJvbGQiLCJtYW51ZmFjdHVyZXIiOiJNaW5kYnVyZ2VyIiwiZGVzaWduZXIiOiJNaWxvcyBNaXRyb3ZpYyIsIm1hbnVmYWN0dXJlclVSTCI6Imh0dHA6Ly93d3cubWluZGJ1cmdlci5uZXQiLCJkZXNpZ25lclVSTCI6Imh0dHA6Ly93d3cubWluZGJ1cmdlci5uZXQiLCJwcmVmZXJyZWRGYW1pbHkiOiJOb2lyIFBybyIsInByZWZlcnJlZFN1YmZhbWlseSI6IkJvbGQifSwiY3NzRm9udFdlaWdodCI6Im5vcm1hbCIsImNzc0ZvbnRTdHlsZSI6Im5vcm1hbCJ9"}}]);
//# sourceMappingURL=component---src-pages-experiments-3-d-text-js-6c484ef4262bc72b0cf0.js.map