window.onload = function(){
    var back = document.querySelector(".Button");
    TweenLite.set(back,{scale: 1, opacity: 0});
    TweenLite.to(back, 2, {scale: 1, opacity: 1,delay:7});
    var piece = document.querySelector(".Piece");
    TweenLite.set(piece,{top: -50, opacity: 0});
    TweenLite.to(piece, 0.5,{top: 0, opacity: 1, ease:Bounce.easeOut,delay: 1})
    var text1 = document.querySelector(".Text1");
    TweenLite.set(text1,{left: -50,opacity: 0 });
    TweenLite.to(text1,0.5,{left: 0, opacity:1,delay: 2})
    TweenLite.to(text1,0.4,{opacity: 0,delay:3.5});
    var text2 = document.querySelector(".Text2");
    TweenLite.set(text2,{left: -50,opacity: 0});
    TweenLite.to(text2,0.5,{left: 0, opacity:1,delay: 3.5})
    TweenLite.to(text2,0.4,{opacity: 0,delay: 4.5});
    var text3 = document.querySelector(".Text3");
    TweenLite.set(text3,{left: -50,opacity: 0});
    TweenLite.to(text3,0.5,{left: 0, opacity:1,delay: 4.5})
    TweenLite.to(text3,0.4,{opacity: 0,delay: 5.5});
    var text4 = document.querySelector(".Text4");
    TweenLite.set(text4,{left: -50,opacity: 0});
    TweenLite.to(text4,0.5,{left: 0, opacity:1,delay: 5.5})
    var button = document.querySelector(".Button");
    TweenLite.set(button,{left: -50,opacity: 0});
    TweenLite.to(button,0.5,{left: 0, opacity:1,delay: 6.5})
}
