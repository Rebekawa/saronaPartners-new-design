emailButton = document.getElementById('getInTouchBtn')
emailButton.addEventListener('click', function () {
    window.location.href = 'mailto:info@sarona-partners.com';
})

function visitSite(x){
    document.getElementById('changingButtons').innerHTML="<input type='button' onclick=\"location.href=" + x + "value='visit site' class='visitSite'/>"
    document.getElementById('changingButtons').style.display='block'
}

function saronaVenturesDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Ventures is a sector agnostic fund based in Tel Aviv. We partner early. We are comfortable with the rough imperfection of a new venture. We help founders from day zero, when the DNA of their business first takes shape." 

    document.getElementById("aboutSubChange").innerHTML = 'Sarona Ventures'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    visitSite("'https://sarona.vc/';\"");
    document.getElementById('saronaMediaLogo').style.display='none'
}

function saronaSpaceDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Space is a shared, friendly, and affordable workspace located throughout Israel with locations in Tel Aviv, Kfar Saba, and Haifa." 
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Space'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('changingButtons').style.display='block'
    // document.getElementById('changingButtons').innerHTML="<div>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - HaArba\'s' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Tel Aviv - Hahashmonaim' class='visitSite'/>" + "<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Kfar Saba' class='visitSite'/>" +"<input type='button' onclick=\"location.href='https://sarona.vc/';\" value='Haifa' class='visitSite'/>" + "</div>"
    visitSite("'http://saronaspace.com/';\"")
    document.getElementById('saronaMediaLogo').style.display='none'
}

function saronaProgramsDesc() {
    document.getElementById("changingDesc").innerHTML = "Consisting of three unique initiatives (SigmaLabs, 365x, and GreenUp City), these programs range from three to six months and aim to accelerate and scale Israeli high-tech startups. They’re backed by Three Global leaders - Microsoft, Techdata and Prodware - with cumulative reach to hundreds of thousands of resellers and millions of businesses."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Programs'
    document.getElementById("saronaProgramsLogo").style.display = 'block'
    document.getElementById('changingButtons').style.display='none'
    document.getElementById('saronaMediaLogo').style.display='none'
}

function saronaMediaDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Media consists of Geektime, the largest tech media platform in Israel with over 2 million viewers on a monthly basis." 
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Media'
    document.getElementById("saronaProgramsLogo").style.display = 'none'
    document.getElementById('saronaMediaLogo').style.display='block'
    document.getElementById('changingButtons').style.display='none'
}


function myFunction(x) {
    x.classList.toggle("change");

    var y = document.getElementById("burgerContent");
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    } else {
        y.style.display = "inline-block";
    }
}


