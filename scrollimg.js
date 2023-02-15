$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll(".notion-asset-wrapper");
    console.log(scrollAnimationElm);
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 150;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                    scrollAnimationElm[i].classList.add("bottomAppear");
                }
            }
        };
    window.addEventListener("load", scrollAnimationFunc);
    window.addEventListener("scroll", scrollAnimationFunc);
});

let num = 1;
switch (num) {
    case 1:
    case 2:
        console.log('1または2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('default');
        break;
}


$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll(".notion-asset-wrapper");
    // scrollAnimationElm[1].classList.add("rightMove");
    console.log(scrollAnimationElm);
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 150;
            if (
                window.innerHeight >
                scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
            ) {
                scrollAnimationElm[i].classList.add("bottomAppear");
            };
            window.addEventListener("load", scrollAnimationFunc);
            window.addEventListener("scroll", scrollAnimationFunc);
        }
    }
});