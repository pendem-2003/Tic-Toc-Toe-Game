var chart_num;
var mark = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function chart() {
    if(chart_num==2) location.reload()
    let chart = document.getElementById('chart')
    chart_num = 0
    chart.innerHTML = "Player 1"
}

function change(num) {

    if (mark[num - 1] != 0) return;

    let img = document.getElementsByTagName("td")
    let node = document.createElement('img')
    let chart = document.getElementById('chart')

    //player 1 input
    if (chart_num == 0) {
        node.src = "./close_FILL0_wght400_GRAD0_opsz48.png"
        node.style.height = "95%"
        img[num - 1].appendChild(node)
        chart.innerHTML = "Player 2"
        chart.style.backgroundColor = "#ed0202"
        chart_num = 1
        mark[num - 1] = 1
    }
    //player 2 input
    else if (chart_num == 1) {
        node.src = "./Red_circle.svg.png";
        node.style.height = "85%";
        node.style.marginLeft = "5px";
        img[num - 1].appendChild(node)
        chart.innerHTML = "Player 1"
        chart.style.backgroundColor = '#4184f3'
        chart_num = 0
        mark[num - 1] = 2
    }

    //check for winning rows

    for (let i = 0; i <= 6; i += 3) {
        if (mark[i] == mark[i + 1] && mark[i] == mark[i + 2] && mark[i] != 0) {
            chart.innerHTML = `Player ${mark[i]} won. Tap to restart`
            chart.style.backgroundColor="darkblue"
            chart_num = 2
            return;
        }
    }

    //check for winning columns
    for (let i = 0; i < 3; i++) {
        if (mark[i] == mark[i + 3] && mark[i] == mark[i + 6] && mark[i] != 0) {
            chart.innerHTML = `Player ${mark[i]} won. Tap to restart`
            chart.style.backgroundColor="darkblue"
            chart_num = 2
            return;
        }
    }
    //check for winning diagonals
    if (mark[0] == mark[4] && mark[0] == mark[8] && mark[0] != 0) {
        chart.innerHTML = `Player ${mark[4]} won. Tap to restart`
        chart.style.backgroundColor="darkblue"
        chart_num = 2
        return;
    }
    else if (mark[2] == mark[4] && mark[2] == mark[6] && mark[2] != 0) {
        chart.innerHTML = `Player ${mark[4]} won. Tap to restart`
        chart.style.backgroundColor="darkblue"
        chart_num = 2
        return;
    }

    //checking for draw
    
    if(typeof(mark.find(el=>el==0))==="undefined"){
        chart.innerHTML = `It's a draw. Tap to restart`
        chart.style.backgroundColor="darkblue"
        chart_num=2
        return;
    }

}
