var r;
function rock() {
    r = (Math.random())*3;
    document.getElementById("myChoice").innerHTML = "<img src='images/rock.png'>";
    var res =  computerResult();
    if (res==1) {
        document.getElementById("result").innerHTML = "再来一次";
    }
    else if (res==2) {
        document.getElementById("result").innerHTML = "你赢了";
    }
    else {
        document.getElementById("result").innerHTML = "你输了";
    }
}
function scissors() {
    r = (Math.random())*3;
    document.getElementById("myChoice").innerHTML = "<img src='images/scissors.png'>";
    var res =  computerResult();
    if (res==1) {
        document.getElementById("result").innerHTML = "你输了";
    }
    else if (res==2) {
        document.getElementById("result").innerHTML = "再来一次";
    }
    else {
        document.getElementById("result").innerHTML = "你赢了";
    }
}
function paper() {
    r = (Math.random())*3;
    document.getElementById("myChoice").innerHTML = "<img src='images/paper.png'>";
    var res =  computerResult();
    if (res==1) {
        document.getElementById("result").innerHTML = "你赢了";
    }
    else if (res==2) {
        document.getElementById("result").innerHTML = "你输了";
    }
    else {
        document.getElementById("result").innerHTML = "再来一次";
    }
}
function computerResult() {
    if (r<1) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/rock.png'>";
        return 1;
    }
    else if (r<2) {
        document.getElementById("computerChoice").innerHTML = "<img src='images/scissors.png'>";
        return 2;
    }
    else {
        document.getElementById("computerChoice").innerHTML = "<img src='images/paper.png'>";
        return 3;
    }
}