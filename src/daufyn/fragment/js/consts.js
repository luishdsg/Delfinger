//MENUDOWN

const Homea =() =>{
    document.getElementById("svghome").style.fill = 'var(--color)';
    document.getElementById("svgnews").style.fill = 'var(--pattern)';
    document.getElementById("svgbell").style.fill = 'var(--pattern)';
    document.getElementById("svgmessage").style.fill = 'var(--pattern)';
}

const Newsa =() =>{ 
    document.getElementById("svgnews").style.fill = 'var(--color)';
    document.getElementById("svghome").style.fill = 'var(--pattern)';
    document.getElementById("svgbell").style.fill = 'var(--pattern)';
    document.getElementById("svgmessage").style.fill = 'var(--pattern)';
    
}
const Bella =() =>{
    document.getElementById("svgbell").style.fill = 'var(--color)';
    document.getElementById("svghome").style.fill = 'var(--pattern)';
    document.getElementById("svgnews").style.fill = 'var(--pattern)';
    document.getElementById("svgmessage").style.fill = 'var(--pattern)';
}
const Messagea =() =>{
    document.getElementById("svgmessage").style.fill = 'var(--color)';
    document.getElementById("svghome").style.fill = 'var(--pattern)';
    document.getElementById("svgnews").style.fill = 'var(--pattern)';
    document.getElementById("svgbell").style.fill = 'var(--pattern)';
}
//SEARCHS-OPTIONS
const Searchpopular = () => {
    document.getElementById("searchpopular").style.display = " block";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
    //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--color)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';

}
const Searchfollower = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "block";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
    //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--color)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchpolitical = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = " block";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
    //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--color)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchnba = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "block";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
    //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--color)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchcinema = () => {
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchcinema").style.display = "block";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
    //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--color)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchmusic = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchmusic").style.display = "block";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
        //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--color)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--purple)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchgames = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchgames").style.display = "block";
    document.getElementById("searchtech").style.display = "none";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--not)';
        //COLOR-ACTIVE
    document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
    document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
    document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
    document.getElementById("searchnbatitle").style.color = 'var(--purple)';
    document.getElementById("searchmusictitle").style.color = 'var(--purple)';
    document.getElementById("searchcinematitle").style.color = 'var(--purple)';
    document.getElementById("searchgamestitle").style.color = 'var(--color)';
    document.getElementById("searchtechtitle").style.color = 'var(--purple)';
}
const Searchtech = () => {
    document.getElementById("searchpopular").style.display = "none";
    document.getElementById("searchfollower").style.display = "none";
    document.getElementById("searchmusic").style.display = "none";
    document.getElementById("searchpolitical").style.display = "none";
    document.getElementById("searchnba").style.display = "none";
    document.getElementById("searchcinema").style.display = "none";
    document.getElementById("searchgames").style.display = "none";
    document.getElementById("searchtech").style.display = "block";
    //BORDER-Top-ACTIVE
    document.getElementById("searchpopulartitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchfollowertitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchpoliticaltitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchmusictitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchnbatitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchcinematitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchgamestitle").style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById("searchtechtitle").style.borderTop = 'var(--px) solid var(--color)';
        //COLOR-ACTIVE
        document.getElementById("searchpopulartitle").style.color = 'var(--purple)';
        document.getElementById("searchfollowertitle").style.color = 'var(--purple)';
        document.getElementById("searchpoliticaltitle").style.color = 'var(--purple)';
        document.getElementById("searchnbatitle").style.color = 'var(--purple)';
        document.getElementById("searchmusictitle").style.color = 'var(--purple)';
        document.getElementById("searchcinematitle").style.color = 'var(--purple)';
        document.getElementById("searchgamestitle").style.color = 'var(--purple)';
        document.getElementById("searchtechtitle").style.color = 'var(--color)';
}


const Friendsoptall = () =>{
    document.getElementById("friendsoptall").style.borderBottom = '2px solid var(--color)';
    document.getElementById("friendsoptfavorites").style.borderBottom = '2px solid var(--not)';
    document.getElementById("friendsoptarchived").style.borderBottom = '2px solid var(--not)';
}
const Friendsoptfavorites = () =>{
    document.getElementById("friendsoptall").style.borderBottom = '2px solid var(--not)';
    document.getElementById("friendsoptfavorites").style.borderBottom = '2px solid var(--color)';
    document.getElementById("friendsoptarchived").style.borderBottom = '2px solid var(--not)';

}
const Friendsoptarchived = () =>{
    document.getElementById("friendsoptall").style.borderBottom = '2px solid var(--not)';
    document.getElementById("friendsoptfavorites").style.borderBottom = '2px solid var(--not)';
    document.getElementById("friendsoptarchived").style.borderBottom = '2px solid var(--color)';

}

//OPT_NEWS

const Opoptnews = () =>{
    document.getElementById("uloptnews").style.display = "block";
}
const Cloptnews = () =>{
    document.getElementById("uloptnews").style.display = "none";
}





function Opsetchat() {
        var displayOpsetchat = document.getElementById('imgsetul').style.display;
        if(displayOpsetchat == "none")
            document.getElementById('imgsetul').style.display = 'block';
        else
            document.getElementById('imgsetul').style.display = 'none';
}

function Ulsetnot() {
        var displayUlsetnot = document.getElementById('ulsetnot').style.display;
        if(displayUlsetnot == "none")
            document.getElementById('ulsetnot').style.display = 'block';
        else
            document.getElementById('ulsetnot').style.display = 'none';
}

function Oppublish() {
   document.getElementById('oppublish').style.display = "block";
   document.getElementById('publish').style.display = "none";
   document.getElementById('blurpub').style.background = 'var(--blackqq)';
   
}


function Clpublish() {
    document.getElementById('oppublish').style.display = 'none';
    document.getElementById('publish').style.display = '-webkit-inline-box';
 }

 
function Ulshare() {
    var displayulshare = document.getElementById('ulshare').style.display;
    if(displayulshare == "none")
        document.getElementById('ulshare').style.display = 'block';
    else
        document.getElementById('ulshare').style.display = 'none';
}


function Sharefriends(){
    document.getElementById("sharefriends").style.display = 'flex';
    document.getElementById("sharemyself").style.display = 'none';
    document.getElementById("shareeveryone").style.display = 'none';
}

function Sharemyself(){
    document.getElementById("sharefriends").style.display = 'none';
    document.getElementById("sharemyself").style.display = 'flex';
    document.getElementById("shareeveryone").style.display = 'none';
}

function Shareeveryone(){
    document.getElementById("sharefriends").style.display = 'none';
    document.getElementById("sharemyself").style.display = 'none';
    document.getElementById("shareeveryone").style.display = 'flex';
}




    


export{
Searchpopular,
Searchfollower,
Searchpolitical,
Searchnba,
Homea, 
Newsa, 
Bella, 
Messagea,
Searchcinema,
Searchmusic,
Searchgames,
Searchtech,
Friendsoptall,
    Friendsoptfavorites,
    Friendsoptarchived,
Opsetchat,
Ulsetnot,
Opoptnews, 
Cloptnews,
Oppublish,
Clpublish,
Ulshare,
Sharefriends,
Sharemyself, 
Shareeveryone,

}