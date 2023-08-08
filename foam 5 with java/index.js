
function chkForm(name, mail, pas, number) {
    var nameValve = document.getElementById("name").value;

    var mailValve = document.getElementById("mail").value;

    var passwordValve = document.getElementById("pas").value;

    var numberValve = document.getElementById("number").value;

    console.log("Name Is ", nameValve)
    console.log("Email is ", mailValve)
    console.log("Password is ", passwordValve)
    console.log("Number is ", numberValve)


    if (nameValve && mailValve && passwordValve && numberValve) {
        alert("Your Form Is Submitted")
    } else {
        alert("Please Input All Information")

    }


}