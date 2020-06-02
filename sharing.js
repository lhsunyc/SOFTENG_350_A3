function toggleAdvancedSharing() {
    if (document.getElementById('advanced-button').innerHTML === "Advanced Sharing") {
        document.getElementById('advanced-sharing').style.display = 'block';
        document.getElementById('advanced-button').innerHTML = "Cancel Advanced Sharing";
    } else {
        document.getElementById('advanced-sharing').style.display = 'none';
        document.getElementById('advanced-button').innerHTML = "Advanced Sharing";

        // uncheck all the groups
        var groups = document.getElementsByClassName("group-check");
        var i;
        for (i = 0; i < groups.length; i++) {
            groups[i].checked = false;
        }
    }
}

function toggleDropDown() {
    var list = document.getElementById("access-content");
    if (list.className.indexOf("w3-show") == -1) {
        list.className += " w3-show";
    } else {
        list.className = list.className.replace(" w3-show", "");
    }
}

function select(element) {
    var content = element.innerHTML;
    var list = document.getElementById("access-content");
    var button = document.getElementById("dropdown-button");
    button.innerHTML = content + " <i class='fa fa-caret-down'></i>";
    list.className = list.className.replace(" w3-show", "");
}

window.onclick = (event) => {
    if (!event.target.matches('#dropdown-button')) {
        var dropDown = document.getElementById("access-content");
        if (dropDown.classList.contains("w3-show")) {
            dropDown.classList.remove("w3-show");
        }
    }
}