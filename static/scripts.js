function closeNav() {

    const toggle = document.getElementById('nav-toggle');

    if (toggle.checked == true) {
        toggle.checked = false
    } else {
        toggle.checked = true
    }

}