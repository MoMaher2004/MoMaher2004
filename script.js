
var sk = [
    { 'title': 'html', 'image': 'images/html.png', "fontSize": ""},
    { 'title': 'css', 'image': 'images/css.png', "fontSize": ""},
    { 'title': 'javascript', 'image': 'images/js.png', "fontSize": ""},
    { 'title': 'jquery', 'image': 'images/jquery.png', "fontSize": ""},
    { 'title': 'mySQL', 'image': 'images/mysql.png', "fontSize": ""},
    { 'title': 'php', 'image': 'images/php.png', "fontSize": ""}
];

var pw = [
    { 'title': 'Blue link', 'disc': 'In 2020, I created BlueLink, a link shortening website, as a coding practice project. Utilizing a combination of HTML, CSS, JavaScript, jQuery, PHP, and MySQLi, I ensured its comprehensive functionality and robust security measures, delivering a fully operational and secure platform.', 'images': ['images/logo.png', 'images/bl0.png', 'images/bl1.png', 'images/bl2.png', 'images/bl3.png', 'images/bl4.png'] , 'bg':'#fff'},
    { 'title': 'minesweeper game', 'disc': 'In this project, my emphasis was on functionality rather than the user interface.<br/>Feel free to explore the project and access the code on my <a href="#">GitHub repository</a>', 'images': ['images/ms0.jpg', 'images/ms1.jpg', 'images/ms2.jpg', 'images/ms3.jpg', 'images/ms4.jpg','images/ms5.jpg'] , 'bg':'#141414'},
    { 'title': 'daily planner app', 'disc': 'Introducing a web-based daily planner application crafted with HTML, CSS, and JavaScript. Designed to enhance your daily organization, it efficiently categorizes your tasks into key priorities, regular activities, and sports, while also incorporating scheduled tasks and tracking your daily water intake.<br><br>While the primary emphasis was on functionality, please note that design refinement is still in progress, as depicted in the provided screenshots. The app securely stores data within your browser, ensuring accessibility both online and offline. For a closer look at the code or a demonstration video, feel free to explore my GitHub repository by visiting <a href="#">this link</a>', 'images': ['images/p0.png', 'images/p1.png', 'images/p2.png'] , 'bg':'#fff'},
    { 'title': 'Maher - infinity code', 'disc': 'I crafted this portfolio using HTML, CSS, JS, and jQuery. I designed the UI/UX and created a unique logo, showcasing my skills in web development', 'images': ['logo-dark.png'] , 'bg':'#000' },
    { 'title': 'more projects', 'disc': "The projects I've previously shared aren't the sole ones I've undertaken. I've worked on numerous projects and tools, but a significant portion of them is either lost, incomplete, or consists solely of code designed for specific tasks, rendering them impractical to showcase", 'images': ['images/more.png']  , 'bg':'#fff'}
];

var an = [
    // element,animation,reverse,duration,show,x,class
];


function win(x) {
    $('#photos').html("");
    $('#tit').html(pw[x].title);
    $('#dis').html(pw[x].disc);
    $('#winbg').addClass("winopen");

    $.each(pw[x].images, function (i, e) {
        $('#photos').append(`<img src='${e}'>`);
    });
}

function winclose() {
    $('#winbg').removeClass("winopen");
}

function chngchar(e,i,c){
    e.text(e.text().substring(0, i) + c + e.text().substring(i + 1));
}

$(document).ready(function () {
    var video = $('#intro')[0];
    if (video.autoplay !== undefined) {
        video.autoplay = true;
    } else {
        video.play();
    }
    //-----------------------
    var t1="Greetings!";
    var t2="I'm Mohamed Maher";
    var t3="I'm a full-stack web developer with a specialization in back-end development. Currently, I am pursuing my studies at the Faculty of Electronic Engineering, Department of Computer Science, Monufia University.";
    let i=0;
    var interval = setInterval(() => {
        if(i<t1.length){
            chngchar($("#hintext h5").eq(0),i,t1[i]);
        }else if(i<t1.length+20){
            
        }else if(i<t1.length+t2.length+20){
            chngchar($("#hintext h1").eq(0),i-t1.length-20,t2[i-t1.length-20]);
        }else if(i<t1.length+t2.length+40){
            
        }else if(i<t1.length+t2.length+t3.length+40){
            chngchar($("#hintext h4").eq(0),i-t1.length-t2.length-40,t3[i-t1.length-t2.length-40]);
        }else{
            clearInterval(interval);
        }
        i++;
    },50);
    
    
    
    
    
    
    
    //-----------------------


    function isShown(e, x = 0) {
        return e.offset().top + x + e.height() < $('body').scrollTop() + window.innerHeight;
    }

    // Skills
    var skills = $('#xp div').eq(0);

    $.each(sk, function (i, val) {
        skills.append(`<span><img src="${val.image}"><p style='font-size: ${val.fontSize}px;'>${val.title}</p></span>`);
        an.push({ 'element': skills.find('span').eq(i), 'animation': {scale: '1' , 'opacity': '1' },'reverse': { 'opacity': '0', scale: '0' }, 'duration': 500, 'show': 0,x:-100,class:''});
    });

    $(window).on('scroll', function () {
        $.each(an, function (i, val) {
            if (isShown(val.element,val.x)) {
                if(!val.show){
                    val.element.animate(val.animation,val.duration);
                    val.element.addClass(val.class);
                    val.show = true;
                }
            }else{
                if(val.show){
                    val.element.animate(val.reverse,val.duration);
                    val.element.removeClass(val.class);
                    val.show = false;
                }
            }
        });
    });
    for(let i=0;i<$('#ser li').length;i++){
        an.push({element:$('#ser li').eq(i),animation:{},reverse:{},duration:500,x:0,show:false,class:'show'});
    }

    // pw
    var pwSection = $('#pw div').eq(0);

    $.each(pw, function (i, val) {
        pwSection.append(`<span role="button" onclick="win(${i})" style="background: ${val.bg};"><img src="${val.images[0]}"><div><p>${val.title}</p></div></span>`);
        an.push({element:pwSection.find('span').eq(i),animation:{},reverse:{},duration:500,x:0,show:false,class:'rotation'});
    });
});
