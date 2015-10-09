/*! scrawl-canvas 2015-10-09 */
if(window.scrawl&&window.scrawl.work.extensions&&!window.scrawl.contains(window.scrawl.work.extensions,"images"))var scrawl=function(a){"use strict";return a.newPattern=function(b){return a.makePattern(b)},a.newPicture=function(b){return a.makePicture(b)},a.makePattern=function(b){return new a.Pattern(b)},a.makePicture=function(b){return new a.Picture(b)},a.work.d.Device.video=!1,a.work.d.Device.videoAutoplay=!1,a.work.d.Device.videoForceFullScreen=!1,a.work.d.Device.videoAsCanvasSource=!1,a.Device.prototype.getImagesDeviceData=function(){var b,c,d,e,f,g,h,i,j,k,l,m=document.createElement("video"),n=!0;this.video=!1,this.videoAutoplay=!1,this.videoAsCanvasSource=!1,this.videoForceFullScreen=!1,this.video=a.xt(m.poster),this.video&&this.canvas&&(b=document.createElement("canvas"),b.width=10,b.height=10,c=b.getContext("2d"),f="video/mp4",e="data:video/mp4;base64, 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",h="video/webm",g="data:video/webm;base64, GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",j="video/ogg",i="data:video/ogg;base64, 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qiCkUlIpFYRUSiolo5RSailVEFIpqZQKQiollVIAANiBAwDYgYVQaMhKACAPAIAwRinGGHNOIqQUY845JxFSijHnnJNKMeacc85JKRlzzDnnpJTOOeecc1JK5pxzzjkppXPOOeeclFJK55xzTkopJYTOQSellNI555wTAABU4AAAEGCjyOYEI0GFhqwEAFIBAAyOY1ma5nmiaJqWJGma53meKJqmJkma5nmeJ4qqyfM8TxRF0TRVled5niiKommqKtcVRdM0TVVVXbIsiqZpmqrqujBN01RV13VdmKZpqqrrui5sW1VV1XVlGbatqqrqurIMXNd1ZdmWgSy7ruzasgAA8AQHAKACG1ZHOCkaCyw0ZCUAkAEAQBiDkEIIIWUQQgohhJRSCAkAABhwAAAIMKEMFBqyEgBIBQAAjLHWWmuttdZAZ6211lprrYDMWmuttdZaa6211lprrbXWUmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaay2llFJKKaWUUkoppZRSSimllFJKBQD6VTgA+D/YsDrCSdFYYKEhKwGAcAAAwBilGHMMQimlVAgx5px0VFqLsUKIMeckpNRabMVzzkEoIZXWYiyecw5CKSnFVmNRKYRSUkottliLSqGjklJKrdVYjDGppNZai63GYoxJKbTUWosxFiNsTam12GqrsRhjayottBhjjMUIX2RsLabaag3GCCNbLC3VWmswxhjdW4ultpqLMT742lIsMdZcAAB3gwMARIKNM6wknRWOBhcashIACAkAIBBSijHGGHPOOeekUow55pxzDkIIoVSKMcaccw5CCCGUjDHmnHMQQgghhFJKxpxzEEIIIYSQUuqccxBCCCGEEEopnXMOQgghhBBCKaWDEEIIIYQQSiilpBRCCCGEEEIIqaSUQgghhFJCKCGVlFIIIYQQQiklpJRSCiGEUkIIoYSUUkophRBCCKWUklJKKaUSSgklhBJSKSmlFEoIIZRSSkoppVRKCaGEEkopJaWUUkohhBBKKQUAABw4AAAEGEEnGVUWYaMJFx6AQkNWAgBkAACQopRSKS1FgiKlGKQYS0YVc1BaiqhyDFLNqVLOIOYklogxhJSTVDLmFEIMQuocdUwpBi2VGELGGKTYckuhcw4AAABBAICAkAAAAwQFMwDA4ADhcxB0AgRHGwCAIERmiETDQnB4UAkQEVMBQGKCQi4AVFhcpF1cQJcBLujirgMhBCEIQSwOoIAEHJxwwxNveMINTtApKnUgAAAAAAAMAPAAAJBcABER0cxhZGhscHR4fICEiIyQCAAAAAAAFwB8AAAkJUBERDRzGBkaGxwdHh8gISIjJAEAgAACAAAAACCAAAQEBAAAAAAAAgAAAAQET2dnUwAAQAAAAAAAAAAjaKehAgAAAEhTii0BRjLV6A+997733vvfe+997733vvfG+8fePvH3j7x94+8fePvH3j7x94+8fePvH3j7x94+8fePvH3gAAAAAAAAAAXm5PqUgABPZ2dTAABLAAAAAAAAACNop6EDAAAAIOuvQAsAAAAAAAAAAAAAAE9nZ1MAAEADAAAAAAAAI2inoQQAAAB/G0m4ATg/8A+997733vvfe+997733vvfK+8B94D7wAB94AAAAD8Kl94D7wH3gAD7wAAAAH4VABem0+pSAAE9nZ1MAAEsDAAAAAAAAI2inoQUAAABc3zKaCwAAAAAAAAAAAAAAT2dnUwAEQAYAAAAAAAAjaKehBgAAAOytEQUBOD/wD733vvfe+997733vvfe+98r7wH3gPvAAH3gAAAAPwqX3gPvAfeAAPvAAAAAfhUAF6bT6lIAAT2dnUwAAQL4AAAAAAACWSy/CAgAAAHsqKaIxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAKDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg5PZ2dTAAQAxAAAAAAAAJZLL8IDAAAABLWpWwIBAQ4O",m.canPlayType("video/webm")?(l=h,k=g):m.canPlayType("video/mp4")?(l=f,k=e):(l=j,k=i),m.muted=!0,m.autoplay=!0,window.addEventListener("mouseup",function o(){n=!1,m.play(),m.removeEventListener("mouseup",o,!1)},!1),m.addEventListener("playing",function p(){n&&(a.device.videoAutoplay=!0,m.removeEventListener("playing",p,!1))},!1),m.addEventListener("playing",function q(){try{m.pause(),m.currentTime=.5,c.drawImage(m,50,50,10,10,0,0,10,10),d=c.getImageData(0,0,1,1),a.device.videoAsCanvasSource=d.data[3]>0?!0:!1,m.removeEventListener("playing",q,!1)}catch(b){a.device.videoAsCanvasSource=!1,m.removeEventListener("playing",q,!1)}},!1),m.addEventListener("webkitbeginfullscreen",function r(){m.webkitExitFullScreen(),a.device.videoForceFullScreen=!0,m.removeEventListener("webkitbeginfullscreen",r,!1)},!1),m.addEventListener("webkitfullscreenchange",function s(){m.webkitExitFullScreen(),a.device.videoForceFullScreen=!0,m.removeEventListener("webkitfullscreenchange",s,!1)},!1),m.type=l,m.src=k)},a.Entity.prototype.convertToPicture=function(b){var c,d,e,f=a.group[this.group].cell;return b=a.safeObject(b),d=a.cell[f],e=a.context[f],c=a.prepareConvert(d,e,this),b.name=b.name||this.name+"_picture",b.group=b.group||this.group,b.convert&&a.deleteEntity([this.name]),a.doConvert(c,b)},a.Group.prototype.convertGroupToPicture=function(b){var c,d,e;return b=a.safeObject(b),this.entitys.length>0?(d=a.cell[this.cell],e=a.context[this.cell],c=a.prepareConvert(d,e,this),b.name=b.name||this.name+"_entity",b.group=b.group||this.name,b.convert&&a.deleteEntity(this.entitys),a.doConvert(c,b)):!1},a.prepareConvert=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;for(f=a.actualWidth,g=0,h=a.actualHeight,i=0,a.clear(),c.stamp(null,a.name),d=b.getImageData(0,0,a.actualWidth,a.actualHeight),e=d.data,k=0,l=a.actualHeight;l>k;k++)for(m=0,n=a.actualWidth;n>m;m++)j=4*(k*a.actualWidth+m)+3,e[j]>0&&(h=h>k?k:h,i=k>i?k:i,f=f>m?m:f,g=m>g?m:g);return d=b.getImageData(f,h,g-f+1,i-h+1),a.clear(),d},a.doConvert=function(b,c){var d=a.work.imageCanvas;return d.width=b.width,d.height=b.height,a.work.imageCvx.putImageData(b,0,0),c.url=d.toDataURL(),c.width=b.width,c.height=b.height,b=a.makeImage(c),a.makePicture(c)},a.Pattern=function(b){var c;return a.isa(b,"obj")&&a.xt(b.url)&&!a.xt(b.dynamic)?(b.dynamic=!0,c=a.makeImage(b),b.source=c.name,a.makePattern(b)):(b=a.safeObject(b),a.Base.call(this,b),a.Base.prototype.set.call(this,b),this.repeat=b.repeat||"repeat",this.sourceType=this.getSourceType(),a.design[this.name]=this,a.pushUnique(a.designnames,this.name),this.makeDesign(),this)},a.Pattern.prototype=Object.create(a.Base.prototype),a.Pattern.prototype.type="Pattern",a.Pattern.prototype.classname="designnames",a.work.d.Pattern={repeat:"repeat",source:"",autoUpdate:!1,callback:!1},a.mergeInto(a.work.d.Pattern,a.work.d.Base),a.Pattern.prototype.getSourceType=function(){var b=a.contains,c=this.source;return b(a.imagenames,c)?"image":b(a.cellnames,c)?"cell":b(a.videonames,c)?"video":!1},a.Pattern.prototype.set=function(b){return a.Base.prototype.set.call(this,b),this.sourceType=this.getSourceType(),this.makeDesign(),this},a.Pattern.prototype.getData=function(b,c){return this.sourceType||(this.sourceType=this.getSourceType(),this.makeDesign(b,c)),a.xt(a.dsn[this.name])?a.dsn[this.name]:"rgba(0,0,0,0)"},a.Pattern.prototype.makeDesign=function(b,c){var d,e;if(c=a.xtGet(c,this.cell),e=a.context[c],a.xt(e))switch(this.sourceType){case"video":scrawl.xt(a.asset[this.source])&&(d=a.video[this.source].api,a.dsn[this.name]=d.readyState>1?e.createPattern(a.asset[this.source],this.repeat):void 0);break;case"cell":scrawl.xt(a.canvas[this.source])&&(a.dsn[this.name]=e.createPattern(a.canvas[this.source],this.repeat));break;case"image":scrawl.xt(a.asset[this.source])&&(a.dsn[this.name]=e.createPattern(a.asset[this.source],this.repeat))}return this},a.Pattern.prototype.remove=function(){return delete a.dsn[this.name],delete a.design[this.name],a.removeItem(a.designnames,this.name),!0},a.Pattern.prototype.update=function(a,b){return this.makeDesign(a,b)},a.Picture=function(b){var c,d,e,f=a.xtGet,g=a.xt;return a.isa(b,"obj")&&g(b.url)&&!g(b.dynamic)?(b.dynamic=!0,c=a.makeImage(b),b.source=c.name,a.makePicture(b)):(b=a.safeObject(b),g(b.source)&&(e=f(a.image[b.source],a.video[b.source],a.cell[b.source],!1))?(a.Entity.call(this,b),d=a.safeObject(b.paste),this.start.x=f(b.pasteX,d.x,this.start.x),this.start.y=f(b.pasteY,d.y,this.start.y),this.copyWidth=a.xtGetTrue(b.copyWidth,e.actualWidth,e.width,"100%"),this.copyHeight=a.xtGetTrue(b.copyHeight,e.actualHeight,e.height,"100%"),this.width=f(b.pasteWidth,b.width,this.copyWidth),this.height=f(b.pasteHeight,b.height,this.copyHeight),a.Position.prototype.set.call(this,b),this.source=b.source,this.imageType=this.sourceImage(),d=a.safeObject(b.copy),this.copy=a.makeVector({x:f(b.copyX,d.x,0),y:f(b.copyY,d.y,0),name:this.type+"."+this.name+".copy"}),this.registerInLibrary(),this.copyData={},this.pasteData={},this.setCopy(),this.setPaste(),this):!1)},a.Picture.prototype=Object.create(a.Entity.prototype),a.Picture.prototype.type="Picture",a.Picture.prototype.classname="entitynames",a.work.d.Picture={source:"",imageData:"",imageDataChannel:"alpha",animation:"",imageType:"",checkHitUsingImageData:!1,copy:!1,copyWidth:300,copyHeight:150,copyData:!1,pasteData:!1,callback:!1},a.mergeInto(a.work.d.Picture,a.work.d.Entity),a.Picture.prototype.get=function(b){return a.contains(a.work.animKeys,b)?a.spriteanimation[this.animation].get(b):a.Entity.prototype.get.call(this,b)},a.Picture.prototype.set=function(b){var c,d=a.xt,e=a.xto,f=a.xtGet;return a.Entity.prototype.set.call(this,b),e(b.paste,b.pasteX,b.pasteY)&&(c=a.safeObject(b.paste),this.start.x=f(b.pasteX,c.x,this.start.x),this.start.y=f(b.pasteY,c.y,this.start.y)),e(b.pasteWidth,b.width)&&(this.width=f(b.pasteWidth,b.width,this.width)),e(b.pasteHeight,b.height)&&(this.height=f(b.pasteHeight,b.height,this.height)),e(b.copy,b.copyX,b.copyY)&&(c=a.safeObject(b.copy),this.copy.x=f(b.copyX,c.x,this.copy.x),this.copy.y=f(b.copyY,c.y,this.copy.y)),d(b.copyWidth)&&(this.copyWidth=f(b.copyWidth,this.copyWidth)),d(b.copyHeight)&&(this.copyHeight=f(b.copyHeight,this.copyHeight)),e(b.start,b.startX,b.startY,b.paste,b.pasteX,b.pasteY)&&(this.currentStart.flag=!1),e(b.start,b.startX,b.startY,b.paste,b.pasteX,b.pasteY,b.pasteWidth,b.pasteHeight,b.width,b.height,b.scale)&&this.setPaste(),e(b.copy,b.copyX,b.copyY,b.copyWidth,b.copyHeight,b.width,b.height)&&this.setCopy(),d(this.animation)&&a.spriteanimation[this.animation].set(b),this},a.Picture.prototype.setDelta=function(b){var c,d,e,f,g,h=a.addPercentages,i=this.start,j=this.copy,k=a.xto,l=a.xtGet,m=a.safeObject;return a.Entity.prototype.setDelta.call(this,b),b=m(b),k(b.paste,b.pasteX,b.pasteY)&&(c=m(b.paste),d=l(b.pasteX,c.x,0),e=l(b.pasteY,c.y,0),i.x=i.x.toFixed?i.x+d:h(i.x,d),i.y=i.y.toFixed?i.y+e:h(i.y,e)),k(b.pasteWidth,b.width)&&(f=l(b.pasteWidth,b.width,0),this.width=this.width.toFixed?this.width+f:h(this.width,f)),k(b.pasteHeight,b.height)&&(g=l(b.pasteHeight,b.height,0),this.height=this.height.toFixed?this.height+g:h(this.height,g)),k(b.copy,b.copyX,b.copyY)&&(c=m(b.copy),d=l(b.copyX,c.x,0),e=l(b.copyY,c.y,0),j.x=j.x.toFixed?j.x+d:h(j.x,d),j.y=j.y.toFixed?j.y+e:h(j.y,e)),k(b.copyWidth,b.width)&&(f=l(b.copyWidth,b.width),this.copyWidth=this.copyWidth.toFixed?this.copyWidth+f:h(this.copyWidth,f)),k(b.copyHeight,b.height)&&(g=l(b.copyHeight,b.height),this.copyHeight=this.copyHeight.toFixed?this.copyHeight+g:h(this.copyHeight,g)),k(b.start,b.startX,b.startY,b.paste,b.pasteX,b.pasteY)&&(this.currentStart.flag=!1),k(b.start,b.startX,b.startY,b.paste,b.pasteX,b.pasteY,b.pasteWidth,b.pasteHeight,b.width,b.height,b.scale)&&this.setPaste(),k(b.copy,b.copyX,b.copyY,b.copyWidth,b.copyHeight,b.width,b.height)&&this.setCopy(),this},a.Picture.prototype.setCopy=function(){var b,c,d=this.numberConvert,e=this.source,f=this.copy,g=this.copyData,h=a.isBetween;switch(this.imageType){case"video":b=a.video[e].width,c=a.video[e].height;break;case"img":b=a.image[e].width,c=a.image[e].height;break;case"canvas":b=a.cell[e].actualWidth,c=a.cell[e].actualHeight
}return"animation"!==this.imageType&&(g.x=f.x.substring?d(f.x,b):f.x,g.y=f.y.substring?d(f.y,c):f.y,h(g.x,0,b-1,!0)||(g.x=g.x<0?0:b-1),h(g.y,0,c-1,!0)||(g.y=g.y<0?0:c-1),g.w=this.copyWidth.substring?d(this.copyWidth,b):this.copyWidth,g.h=this.copyHeight.substring?d(this.copyHeight,c):this.copyHeight,h(g.w,1,b,!0)||(g.w=g.w<1?1:b),h(g.h,1,c,!0)||(g.h=g.h<1?1:c),g.x+g.w>b&&(g.x=b-g.w),g.y+g.h>c&&(g.y=c-g.h)),this.imageData=!1,this},a.Picture.prototype.setPaste=function(){var b,c=a.cell[a.group[this.group].cell],d=this.numberConvert,e=this.pasteData;return b=this.currentStart,b.flag||this.updateCurrentStart(c),e.x=b.x,e.y=b.y,e.w=this.width.substring?d(this.width,c.actualWidth):this.width,e.h=this.height.substring?d(this.height,c.actualHeight):this.height,e.w*=this.scale,e.h*=this.scale,e.w<1&&(e.w=1),e.h<1&&(e.h=1),this},a.Picture.prototype.clone=function(b){var c=a.Entity.prototype.clone.call(this,b);return b=a.safeObject(b),b.keepCopyDimensions||c.fitToImageSize(),c},a.Picture.prototype.fitToImageSize=function(){var b;return"img"===this.imageType&&(b=a.image[this.source],this.set({copyWidth:b.get("width"),copyHeight:b.get("height"),copyX:0,copyY:0})),this},a.Picture.prototype.sourceImage=function(){var b=a.contains;return b(a.videonames,this.source)?"video":b(a.imagenames,this.source)?b(a.spriteanimationnames,this.animation)?"animation":"img":b(a.cellnames,this.source)?"canvas":!1},a.Picture.prototype.clip=function(a,b,c){var d=this.currentHandle,e=this.pasteData;return this.currentStart.flag&&(this.rotateCell(a,c),a.beginPath(),a.rect(d.x,d.y,e.w,e.h),a.clip()),this},a.Picture.prototype.none=function(){return this},a.Picture.prototype.clear=function(a,b,c){var d=this.currentHandle,e=this.pasteData;return this.currentStart.flag&&(this.rotateCell(a,c),a.clearRect(d.x,d.y,e.w,e.h)),this},a.Picture.prototype.clearWithBackground=function(b,c,d){var e=this.currentHandle,f=this.pasteData,g=a.ctx[c];return this.currentStart.flag&&(this.rotateCell(b,d),b.fillStyle=d.backgroundColor,b.strokeStyle=d.backgroundColor,b.globalAlpha=1,b.strokeRect(e.x,e.y,f.w,f.h),b.fillRect(e.x,e.y,f.w,f.h),b.fillStyle=g.fillStyle,b.strokeStyle=g.strokeStyle,b.globalAlpha=g.globalAlpha),this},a.Picture.prototype.draw=function(a,b,c){var d=this.currentHandle,e=this.pasteData;return this.currentStart.flag&&(this.rotateCell(a,c),c.setEngine(this),a.strokeRect(d.x,d.y,e.w,e.h)),this},a.Picture.prototype.fill=function(a,b,c){var d,e=this.getImage(),f=this.copyData,g=this.pasteData;return this.currentStart.flag&&e&&(d=this.currentHandle,this.rotateCell(a,c),c.setEngine(this),a.drawImage(e,f.x,f.y,f.w,f.h,d.x,d.y,g.w,g.h)),this},a.Picture.prototype.drawFill=function(a,b,c){var d,e=this.getImage(),f=this.copyData,g=this.pasteData;return this.currentStart.flag&&e&&(d=this.currentHandle,this.rotateCell(a,c),c.setEngine(this),a.strokeRect(d.x,d.y,g.w,g.h),this.clearShadow(a,c),a.drawImage(e,f.x,f.y,f.w,f.h,d.x,d.y,g.w,g.h)),this},a.Picture.prototype.fillDraw=function(a,b,c){var d,e=this.getImage(),f=this.copyData,g=this.pasteData;return this.currentStart.flag&&e&&(d=this.currentHandle,this.rotateCell(a,c),c.setEngine(this),a.drawImage(e,f.x,f.y,f.w,f.h,d.x,d.y,g.w,g.h),this.clearShadow(a,c),a.strokeRect(d.x,d.y,g.w,g.h)),this},a.Picture.prototype.sinkInto=function(a,b,c){var d,e=this.getImage(),f=this.copyData,g=this.pasteData;return this.currentStart.flag&&e&&(d=this.currentHandle,this.rotateCell(a,c),c.setEngine(this),a.drawImage(e,f.x,f.y,f.w,f.h,d.x,d.y,g.w,g.h),a.strokeRect(d.x,d.y,g.w,g.h)),this},a.Picture.prototype.floatOver=function(a,b,c){var d,e=this.getImage(),f=this.copyData,g=this.pasteData;return this.currentStart.flag&&e&&(d=this.currentHandle,this.rotateCell(a,c),c.setEngine(this),a.strokeRect(d.x,d.y,g.w,g.h),a.drawImage(e,f.x,f.y,f.w,f.h,d.x,d.y,g.w,g.h)),this},a.Picture.prototype.getImage=function(){var b=a.contains(["img","animation","canvas","video"],this.imageType)?this.imageType:"none";return this.getImageActions[b](this.source,this.animation,this.copyData)},a.Picture.prototype.getImageActions={img:function(b){return a.asset[b]},animation:function(b,c,d){var e=a.spriteanimation[c].getData();return d.x=e.x,d.y=e.y,d.w=e.w,d.h=e.h,a.asset[b]},canvas:function(b){return a.canvas[b]},video:function(b){return a.asset[b]},none:function(){return!1}},a.Picture.prototype.getImageData=function(b){var c,d=a.work.imageCanvas,e=a.work.imageCvx,f=this.copyData;return b=a.xt(b)?b:"data",c=this.getImage(),c&&(d.width=f.w,d.height=f.h,e.drawImage(c,f.x,f.y,f.w,f.h,0,0,f.w,f.h),this.imageData=this.name+"_"+b,a.imageData[this.imageData]=e.getImageData(0,0,f.w,f.h)),this},a.Picture.prototype.getImageDataValue=function(b){var c,d,e,f,g=this.copyData,h=this.pasteData,i=a.work.workimg.v1,j=a.isBetween;return b=a.safeObject(b),i.x=b.x||0,i.y=b.y||0,i.vectorSubtract(h).rotate(-this.roll),i.x=this.flipReverse?-i.x:i.x,i.y=this.flipUpend?-i.y:i.y,i.vectorSubtract(this.currentHandle),i.x=Math.round(i.x*(g.w/h.w)),i.y=Math.round(i.y*(g.h/h.h)),this.imageData||this.getImageData(),c=a.imageData[this.imageData],e=4*(i.y*c.width+i.x),j(i.x,0,c.width-1,!0)&&j(i.y,0,c.height-1,!0)?(d=c.data,f=b.channel||this.get("imageDataChannel"),f=a.contains(["red","green","blue","color","alpha"],f)?f:"alpha",this.getImageDataValueActions[f](d,e)):!1},a.Picture.prototype.getImageDataValueActions={red:function(b,c){return a.xt(b[c])?b[c]:!1},green:function(b,c){return a.xt(b[c+1])?b[c+1]:!1},blue:function(b,c){return a.xt(b[c+2])?b[c+2]:!1},color:function(b,c){return a.xta([b[c],b[c+1],b[c+2],b[c+3]])?"rgba("+b[c]+","+b[c+1]+","+b[c+2]+","+b[c+3]+")":!1},alpha:function(b,c){return a.xt(b[c+3])?b[c+3]:!1}},a.Picture.prototype.checkHit=function(b){var c,d,e,f,g,h=[],i=[],j={tests:[]};for(b=a.safeObject(b),a.xt(b.tests)?h=b.tests:(h.length=0,h.push(b.x||0),h.push(b.y||0)),c=a.isa(b.test,"num")?b.test:0,f=0,g=h.length;g>f&&(e=null,j.tests.length=0,j.tests.push(h[f]),j.tests.push(h[f+1]),i=a.Entity.prototype.checkHit.call(this,j),this.checkHitUsingImageData?i&&(i.x=Math.floor(i.x),i.y=Math.floor(i.y),this.animation&&(this.imageData=!1),d=this.getImageDataValue(i),e="color"===this.get("imageDataChannel")?"rgba(0,0,0,0)"===d?!1:i:d>c?i:!1):e=i,!e);f+=2);return e?e:!1},a.Picture.prototype.dropEntity=function(b){return a.Entity.prototype.dropEntity.call(this,b),this.currentStart.flag=!1,this},a.Picture.prototype.getMaxDimensions=function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t=b.actualWidth,u=b.actualHeight,v=t/2,w=u/2,x=this.currentStart.x,y=this.currentStart.y,z=this.pasteData.w,A=this.pasteData.h,B=this.flipReverse,C=this.flipUpend,D=B?t-x:x,E=C?u-y:y,F=B?-z:z,G=C?-A:A,H=this.currentHandle,I=B?-H.x:H.x,J=C?-H.y:H.y,K=a.ctx[this.context].lineWidth||0,L=Math.ceil,M=Math.floor,N=this.roll,O=a.work.v,P=a.isBetween;return q=B?D+I+F:D+I,s=B?D+I:D+I+F,p=C?E+J+G:E+J,r=C?E+J:E+J+G,N&&(l=Math.min,k=Math.max,o={x:D,y:E},O.set({x:q,y:p}).vectorSubtract(o).rotate(N).vectorAdd(o),c=O.x,g=O.y,O.set({x:s,y:p}).vectorSubtract(o).rotate(N).vectorAdd(o),d=O.x,h=O.y,O.set({x:s,y:r}).vectorSubtract(o).rotate(N).vectorAdd(o),f=O.x,j=O.y,O.set({x:q,y:r}).vectorSubtract(o).rotate(N).vectorAdd(o),e=O.x,i=O.y,m=[c,d,e,f],n=[g,h,i,j],p=l.apply(Math,n),q=l.apply(Math,m),r=k.apply(Math,n),s=k.apply(Math,m)),p=M(p-K),q=M(q-K),r=L(r+K),s=L(s+K),P(p,0,u,!0)||(p=p>w?u:0),P(r,0,u,!0)||(r=r>w?u:0),P(q,0,t,!0)||(q=q>v?t:0),P(s,0,t,!0)||(s=s>v?t:0),this.maxDimensions.top=p,this.maxDimensions.bottom=r,this.maxDimensions.left=q,this.maxDimensions.right=s,this.maxDimensions.flag=!1,this.maxDimensions},a}(scrawl);