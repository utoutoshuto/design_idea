window.onload = function () {
    const omikuziList = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

    document.getElementsByClassName("wrapper__button--round")[0].onclick = function () {
        let random = Math.floor(Math.random() * omikuziList.length);
        document.getElementsByClassName("wrapper__result")[0].textContent = omikuziList[random];
    }
}