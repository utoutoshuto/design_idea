document.getElementsByClassName("").innerHTML = showYatoroReki(2019, 9);
  
function showYatoroReki(year, month) {
    // 現在の日時
    const today = new Date();  
    // 入社年月
    const join = new Date(year, month);
    
    const todayMonth = today.getFullYear() * 12 + today.getMonth();
    const joinMonth = join.getFullYear() * 12 + join.getMonth();
    const rekiMonth = todayMonth - joinMonth + 1;   
    const reki = Math.floor(rekiMonth / 12) + "年" + rekiMonth % 12 + "ヶ月目";
		return reki;
}