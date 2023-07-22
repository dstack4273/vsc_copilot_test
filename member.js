function skillsMember() {
    var skills = document.getElementById("skillsMember").value;
    var skillsMember = document.getElementById("skillsMember").value;
    var skillsMember = skillsMember.split(",");
    var skillsMember = skillsMember.join("\n");
    document.getElementById("skillsMember").value = skillsMember;
    if (skills == "Skills") {
        document.getElementById("skillsMember").value = "";
    }
}