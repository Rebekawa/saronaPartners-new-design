emailButton = document.getElementById('getInTouchBtn')
emailButton.addEventListener('click', function () {
    window.location.href = 'mailto:info@sarona-partners.com';
})

function saronaVenturesDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Ventures is a sector agnostic fund based in Tel Aviv. We partner early. We are comfortable with the rough imperfection of a new venture. We help founders from day zero, when the DNA of their business first takes shape."
}

function saronaSpaceDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Space is a shared, friendly, and affordable workspace located throughout Israel with locations in Tel Aviv, Kfar Saba, and Haifa."
}

function saronaProgramsDesc() {
    document.getElementById("changingDesc").innerHTML = "Consisting of three unique initiatives (SigmaLabs, 365x, and GreenUp City), these programs range from three to six months and aim to accelerate and scale Israeli high-tech startups. They’re backed by Three Global leaders - Microsoft, Techdata and Prodware - with cumulative reach to hundreds of thousands of resellers and millions of businesses."
}

function saronaMediaDesc() {
    document.getElementById("changingDesc").innerHTML = "Sarona Media consists of Geektime, the largest tech media platform in Israel with over 2 million viewers on a monthly basis."
}

function firstDesc() {
    document.getElementById("changingDesc").innerHTML = '<p>' + "Consisting of three unique initiatives (SigmaLabs, 365x, and GreenUp City), these programs range from three" + 
    '<br/>' + "to six months and aim to accelerate and scale Israeli high-tech startups. Our programs are backed by global" + 
    '<br/>' + "leaders with cumulative reach to hundreds of thousands of resellers and millions of businesses." + '</p>'

}