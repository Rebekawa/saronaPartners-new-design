emailButton = document.getElementById('getInTouchBtn')
emailButton.addEventListener('click', function () {
    window.location.href = 'mailto:info@sarona-partners.com';
})

function saronaVenturesDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Ventures is a sector agnostic fund based in Tel Aviv. We partner early. We are comfortable with the rough imperfection of a new venture. We help founders from day zero, when the DNA of their business first takes shape." + '<a href="https://sarona.vc/">' + ' Learn More' + '</a>'

    document.getElementById("aboutSubChange").innerHTML = 'Sarona Ventures'
    document.getElementById("saronaProgramsLogo").style.visibility = 'hidden'
}

function saronaSpaceDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Space is a shared, friendly, and affordable workspace located throughout Israel with locations in Tel Aviv, Kfar Saba, and Haifa." + '<a href="http://saronaspace.com/">' + ' Learn More' + '</a>'
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Space'
    document.getElementById("saronaProgramsLogo").style.visibility = 'hidden'
}

function saronaProgramsDesc() {
    document.getElementById("changingDesc").innerHTML = "Consisting of three unique initiatives (SigmaLabs, 365x, and GreenUp City), these programs range from three to six months and aim to accelerate and scale Israeli high-tech startups. They’re backed by Three Global leaders - Microsoft, Techdata and Prodware - with cumulative reach to hundreds of thousands of resellers and millions of businesses."
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Programs'
    document.getElementById("saronaProgramsLogo").style.visibility = 'visible'
}

function saronaMediaDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Media consists of Geektime, the largest tech media platform in Israel with over 2 million viewers on a monthly basis." + '<a href="https://www.geektime.com/">' + ' Learn More' + '</a>'
    document.getElementById("aboutSubChange").innerHTML = 'Sarona Media'
    document.getElementById("saronaProgramsLogo").style.visibility = 'hidden'
}

// function firstDesc() {
//     document.getElementById("changingDesc").innerHTML = '<p>' + "Consisting of three unique initiatives (SigmaLabs, 365x, and GreenUp City), these programs range from three" + 
//     '<br/>' + "to six months and aim to accelerate and scale Israeli high-tech startups. Our programs are backed by global" + 
//     '<br/>' + "leaders with cumulative reach to hundreds of thousands of resellers and millions of businesses." + '</p>'

//     document.getElementById("aboutSubChange").innerHTML = 'Sarona Programs'

// }


function myFunction(x) {
    x.classList.toggle("change");

    var y = document.getElementById("burgerContent");
    if (y.style.display === "inline-block") {
        y.style.display = "none";
    } else {
        y.style.display = "inline-block";
    }
}


