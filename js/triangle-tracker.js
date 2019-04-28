var triangleTracker = function (sidenumberone, sidenumbertwo, sidenumberthree) {
    var sidenumberone = parseInt(document.getElementById("a").value);
    var sidenumbertwo = parseInt(document.getElementById("b").value);
    var sidenumberthree = parseInt(document.getElementById("c").value);

    var triangleSides = [];
    triangleSides.push(sidenumberone);
    triangleSides.push(sidenumbertwo);
    triangleSides.push(sidenumberthree);

    if (
        sidenumberone + sidenumbertwo > sidenumberthree &&
        sidenumberone + sidenumberthree > sidenumbertwo &&
        sidenumbertwo + sidenumberthree > sidenumberone &&
        (sidenumberone === sidenumbertwo && sidenumbertwo === sidenumberthree)
    ) {
        document.getElementById("output").innerHTML =
        "It is an Equilateral Triangle with side values of<br> " + triangleSides + "";
        document.getElementById("triangle-image").src = "./img/equilateral-triangle.png";

    } else if (
        sidenumberone + sidenumbertwo > sidenumberthree &&
        sidenumberone + sidenumberthree > sidenumbertwo &&
        sidenumbertwo + sidenumberthree > sidenumberone &&

        ((sidenumberone === sidenumbertwo && sidenumbertwo !== sidenumberthree) ||
        (sidenumberone === sidenumberthree && sidenumberthree !== sidenumbertwo) ||
        (sidenumbertwo === sidenumberthree && sidenumbertwo !== sidenumberone))
    ) {
        document.getElementById("output").innerHTML =
        "It is an Isosceles Triangle with side values of <br> " + triangleSides + "";
        document.getElementById("triangle-image").src = "./img/isosceles-triangle.png";

    } else if (
        sidenumberone + sidenumbertwo > sidenumberthree &&
        sidenumberone + sidenumberthree > sidenumbertwo &&
        sidenumbertwo + sidenumberthree > sidenumberone &&
        (sidenumberone !== sidenumbertwo && sidenumbertwo !== sidenumberthree &&
        sidenumberone !== sidenumberthree)
    ) {
        document.getElementById("output").innerHTML =
        "It is a Scalene Triangle with side values of <br> " + triangleSides + "";
        document.getElementById("triangle-image").src = "./img/scalene-triangle.png";

    } else if (!sidenumberone || !sidenumbertwo || !sidenumberthree) {
        document.getElementById("output").innerHTML =
        "Kindly enter all the triangle values and try again!";
        

    } else {
        document.getElementById("output").innerHTML = " Invalid Values, Not a Triangle at all !";
        document.getElementById("triangle-image").src = "./img/hazard.png";
    }
}
