var table = document.getElementById('table');
var title = document.getElementById('turn');

table.style.height = table.scrollWidth + 'px';

var isPLayer1 = true;

var td = document.getElementsByTagName('td');

for (var i = 0; i < td.length; i++) {
	td[i].onclick = click;
}

function click() {
	if (this.innerHTML == '') {
		if (isPLayer1) {
			isPLayer1 = false;
			title.style.color = "red";
			this.style.color = "#50B3D3";
			title.innerHTML = 'Secound player turn (O)';
			this.innerHTML = "X";
		} else {
			isPLayer1 = true;
			title.style.color = "#50B3D3";
			this.style.color = "red";
			title.innerHTML = 'First player turn (X)';
			this.innerHTML = "O";
		}
	}
	setTimeout(check, 10);
}

function check() {
	var arr = [];
	var temp = [];
	for (var i = 0; i < td.length; i++) {
		temp.push(td[i].innerHTML);
		if ((i + 1) % 3 == 0) {
			arr.push(temp);
			temp = [];
		}
	}
	if ((arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][0] != "") || (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][0] != "") || (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2] && arr[2][0] != "") || (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0] && arr[0][0] != "") || (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1] && arr[0][1] != "") || (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2] && arr[0][2] != "") || (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != "") || (arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2] && arr[2][0] != "")) {
		isPLayer1 = !isPLayer1;
		if (isPLayer1) {
			alert("Player 1 won the game");
		} else {
			alert("Player 2 won the game");
		}
		window.location.href = "index.html";
	} else if (arr[0][0] != "" && arr[0][1] != "" && arr[0][2] != "" && arr[1][0] != "" && arr[1][1] != "" && arr[1][2] != "" && arr[2][0] != "" && arr[2][1] != "" && arr[2][2] != "") {
		alert('Draw')
		window.location.href = "index.html";
	}
}