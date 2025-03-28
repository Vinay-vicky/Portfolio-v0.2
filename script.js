var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919361477185'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9361477185</label></div> </a> <a href='mailto:7777vigneshvelu@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Vinay-vicky'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.link/f81hp0'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Vinay_Vicky'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/vinay_vicky.2000'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/vignesh200009' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/new Resume.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vignesh RV Resume.pdf</label></div><a href='assets/Vignesh RV Resume-new.pdf' download='Vignesh_RV_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.918774657286!2d79.67440357377181!3d12.783784187514572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52dda41e7594ad%3A0x221aa1eb2271988a!2sAyyangarkulam%20Koot%20Road%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1708748038454!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>No 162 'Nattar Street'<br>Ayyangarkulam<br>Kanchipuram, Tamilnadu, INDIA 631502</address>";
var repliesForHowAreYou = ["I'm fine.", "I'm good. And yourself?", "Not bad. How are you?", "I'm doing well, and you?", "Good, how about you?", "I'm great!", "Everything is fine when you are around.", "The best I can be. I hope you are at your best too.", "I'm still learning and eagerly waiting to grasp new things."];
var repliesForHello = ["Hello there!", "Hey!", "Hola!", "Nice to meet you!", "I'm here!", "Hey! How's it going?", "What's up?", "Hey! What a pleasant surprise!"];
var repliesForBye = ["Catch you on the flip side!", "Bye-bye, butterfly.", "See you soon!", "Catch you later!", "Bye for now", "See you on the internet!"];
var repliesForLove = ["I get that a lot!", "You are day-dreaming again!", "I love You........Tube! LOL!", "Are you sure you aren't sick or something?", "I love you too!", "You are not my type!", "❤️"];
var repliesforennapanra = ["Saptutu irukaen<br> Nee saptiya?", "summa thaan irukaen<br>sariyana boring ah iruku<br> sari unaku enna venum<br> sollu?", "dance aditu irukaen", "Etho panren unnaku enna?!", "unna pathi thaan<br>think panitu irukaen❤️"];
var repliesForCommandUnknown = ["Hey I couldn't catch you....<br>Send 'help' to know more about usage.", "I didn't get it.", "Please can you repeat it?", "I'm still learning...please use approriate keywords in your phrase.", "I'm still working on it.<br>"];
var repliesForfeelingdown = ["vidu namakum oru <br> time varum <br> appo ellam change agum", "ethayum nenachu worry <br> panikkatha focus on your goal", "En da enna achu?", "oru problem varuthuna antha <br> problem namba peace ah <br> kedukurathuku munadi sortout panidu", "vidu feel panatha <br> namaku pudicha mathri <br> life oru naal maarum"];


function getRandom(arrayOfReplies) {
    var sizeOfArray = arrayOfReplies.length;
    return arrayOfReplies[Math.floor(Math.random() * sizeOfArray)];
}


function startFunction() {
    setLastSeen();
    waitAndResponse("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponse(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponse(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Vignesh RV</a>.</span><br><br>I am a MCA Graduate Seeking for <span class='bold'>Good opportunity 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the Web development sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I recently completed my MCA degree in Computer Application Field.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Python<br>Mongodb<br>MySQL<br>Javascript<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Bootstrap<br>ReactJs<br>NodeJs</span><br><br>I use <span class='bold'>Intel Core i3</span> as daily driver on my ASUS EeeBook 14<br>OS:Windows 11<br>Favourite IDE:VSCode, Spyder</span>");
            break;

        case "education":
            sendTextMessage("Im recently Completed my MCA degree in Computer Application Department from SCSVMV University, Enathur<br>Passing Year: 2024<br>CGPA:8.73<br>Overall Percentage: 82.29<br><br>I have completed my BCA Degree from University of Madras(Autonomous)<br>Passing Year:2022<br>CGPA:7.90<br><br>I have completed my HSC from local school known as SVM<br>Passing Year:2019<br>Percentage:79");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/vinay_vicky.2000/'><span class='bold'>VIGNESH RV</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Vinay-vicky'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            ifElseThenAndExecute(inputText.toLowerCase().trim());
            break;
    }

}


function ifElseThenAndExecute(textString) {
    if (textString.includes("hii Vignesh") || textString.includes("hi Vignesh") || textString.includes("hello Vignesh") || textString.includes("hola Vignesh") || textString.includes("hey Vignesh") || textString.includes("hii") || textString.includes("hi") || textString.includes("hello") || textString.includes("hola") || textString.includes("hey")) {
        // reply for hi message
        sendTextMessage(getRandom(repliesForHello));
    } else if (textString.includes("i need break") || textString.includes("leave me") || textString.includes("bye") || textString.includes("see you soon") || textString.includes("bye bye") || textString.includes("goodbye") || textString.includes("I'll catch you later") || textString.includes("See you later")) {
        // reply for bye message
        sendTextMessage(getRandom(repliesForBye));
    } else if (textString.includes("i love you") || textString.includes("love you") || textString.includes("you are hot") || textString.includes("i like you")) {
        // reply for i love you
        sendTextMessage(getRandom(repliesForLove));
    } else if (textString.includes("how are you") || (textString.includes("hows going") || textString.includes("how its going") || textString.includes("how it's going") || textString.includes("what are you doing"))) {
        // reply for 'how are you' request
        sendTextMessage(getRandom(repliesForHowAreYou));
    } else if (textString.includes("you know") && (textString.includes("bixby") || textString.includes("siri") || textString.includes("alexa") || textString.includes("cortana"))) {
        // reply for 'you know other chattingBots' request
        sendTextMessage(getRandom(repliesForVoiceAssistants));
    } else if (textString.includes("enna panra") && (textString.includes("what are you doing") || textString.includes("enna pannitu iruka") || textString.includes("enna pudungitu iruka") || textString.includes("enna senjutu iruka"))) {
        // reply for 'enna panra' request
        sendTextMessage(getRandom(repliesforennapanra));
    } else if (textString.includes("feeling down") || (textString.includes("Demotivated ah iruku") || textString.includes("stress ah iruku") || textString.includes("ore down ah feel panren") || textString.includes("manasu kastama iruku") || textString.includes("ore pressure ah iruku"))) {
        // reply for 'Feeling down' request
        sendTextMessage(getRandom(repliesForfeelingdown));
    } else {
        setTimeout(() => {
            sendTextMessage(getRandom(repliesForCommandUnknown));
        }, 2000);
    }

}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponse('intro');
}


function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
