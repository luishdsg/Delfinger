const Timelineopt = () => {
    document.getElementById('spacetimeline').style.display = 'block';
    document.getElementById('spacefavorited').style.display = 'none';
    document.getElementById('spacetrash').style.display = 'none';
    document.getElementById('spaceimage').style.display = 'none';


    //COLOR-HOVER-SVG-OPTPROF
    document.getElementById('timelineopt').style.borderTop = '2px solid var(--color)';
    document.getElementById('svgcup').style.fill = 'var(--color)';

    document.getElementById('imageopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svggallery').style.fill = 'var(--pattern)';

    document.getElementById('favoritedopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svghearts').style.fill = 'var(--pattern)';

    document.getElementById('trashopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgtrash').style.fill = 'var(--pattern)';
};


const Imageopt = () => {
    document.getElementById('spacetimeline').style.display = 'none';
    document.getElementById('spacefavorited').style.display = 'none';
    document.getElementById('spacetrash').style.display = 'none';
    document.getElementById('spaceimage').style.display = 'block';
    //COLOR-HOVER-SVG-OPTPROF
    document.getElementById('timelineopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgcup').style.fill = 'var(--pattern)';

    document.getElementById('imageopt').style.borderTop = '2px solid var(--color)';
    document.getElementById('svggallery').style.fill = 'var(--color)';

    document.getElementById('favoritedopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svghearts').style.fill = 'var(--pattern)';

    document.getElementById('trashopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgtrash').style.fill = 'var(--pattern)';

};

// FOVORITED-PAGE-TOOLS-JS
const Favoritedopt = () => {
    document.getElementById('spacetimeline').style.display = 'none';
    document.getElementById('spacefavorited').style.display = 'block';
    document.getElementById('spacetrash').style.display = 'none';
    document.getElementById('spaceimage').style.display = 'none';
    //COLOR-HOVER-SVG-OPTPROF
    document.getElementById('timelineopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgcup').style.fill = 'var(--pattern)';

    document.getElementById('imageopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svggallery').style.fill = 'var(--pattern)';

    document.getElementById('favoritedopt').style.borderTop = '2px solid var(--color)';
    document.getElementById('svghearts').style.fill = 'var(--color)';

    document.getElementById('trashopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgtrash').style.fill = 'var(--pattern)';

};

const Closefavorited = () => {
    document.getElementById('postfavorited').style.display = 'none';

}

const Trashopt = () => {
    document.getElementById('spacetimeline').style.display = 'none';
    document.getElementById('spacefavorited').style.display = 'none';
    document.getElementById('spacetrash').style.display = 'block';
    document.getElementById('spaceimage').style.display = 'none';
    //COLOR-HOVER-SVG-OPTPROF
    document.getElementById('timelineopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svgcup').style.fill = 'var(--pattern)';

    document.getElementById('imageopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svggallery').style.fill = 'var(--pattern)';

    document.getElementById('favoritedopt').style.borderTop = 'var(--px) solid var(--not)';
    document.getElementById('svghearts').style.fill = 'var(--pattern)';

    document.getElementById('trashopt').style.borderTop = 'var(--px) solid var(--color)';
    document.getElementById('svgtrash').style.fill = 'var(--color)';
};


//EDIT-PROFILE-PAGES 


const Userp = () => {
    document.getElementById('userpage').style.display = 'block';
    document.getElementById('heartpage').style.display = 'none';
    document.getElementById('notificationpage').style.display = 'none';
    document.getElementById('settingpage').style.display = 'none';
    //COLOR-HOVER-SVG-PROFILE-PAGE
    document.getElementById('svguser').style.fill = 'var(--color)';
    document.getElementById('svglock').style.fill = 'var(--pattern)';
    document.getElementById('svgnotification').style.fill = 'var(--pattern)';
    document.getElementById('svgsetting').style.fill = 'var(--pattern)';


}
const Lockp = () => {
    document.getElementById('userpage').style.display = 'none';
    document.getElementById('heartpage').style.display = 'block';
    document.getElementById('notificationpage').style.display = 'none';
    document.getElementById('settingpage').style.display = 'none';
    //COLOR-HOVER-SVG-PROFILE-PAGE
    document.getElementById('svguser').style.fill = 'var(--pattern)';
    document.getElementById('svglock').style.fill = 'var(--color)';
    document.getElementById('svgnotification').style.fill = 'var(--pattern)';
    document.getElementById('svgsetting').style.fill = 'var(--pattern)';
}
const Notificationp = () => {
    document.getElementById('userpage').style.display = 'none';
    document.getElementById('heartpage').style.display = 'none';
    document.getElementById('notificationpage').style.display = 'block';
    document.getElementById('settingpage').style.display = 'none';
    //COLOR-HOVER-SVG-PROFILE-PAGE
    document.getElementById('svguser').style.fill = 'var(--pattern)';
    document.getElementById('svglock').style.fill = 'var(--pattern)';
    document.getElementById('svgnotification').style.fill = 'var(--color)';
    document.getElementById('svgsetting').style.fill = 'var(--pattern)';
}
const Settingp = () => {
    document.getElementById('userpage').style.display = 'none';
    document.getElementById('heartpage').style.display = 'none';
    document.getElementById('notificationpage').style.display = 'none';
    document.getElementById('settingpage').style.display = 'block';
    //COLOR-HOVER-SVG-PROFILE-PAGE
    document.getElementById('svguser').style.fill = 'var(--pattern)';
    document.getElementById('svglock').style.fill = 'var(--pattern)';
    document.getElementById('svgnotification').style.fill = 'var(--pattern)';
    document.getElementById('svgsetting').style.fill = 'var(--color)';
}

const Logoutp = () => {

}

//EDIT-PROFILE-USER

const Genreon = () => {
    document.getElementById('offgenre').style.display = 'flex';
    document.getElementById('ongenre').style.display = 'none';
    document.getElementById('genreul').style.display = 'block';

}
const Genreoff = () => {
    document.getElementById('offgenre').style.display = 'none';
    document.getElementById('ongenre').style.display = 'flex';
    document.getElementById('genreul').style.display = 'none';
}

const Gen1 = () => {
    document.getElementById('generchoice1').style.display = 'block';
    document.getElementById('generchoice2').style.display = 'none';
    document.getElementById('generchoice3').style.display = 'none';
}
const Gen2 = () => {
    document.getElementById('generchoice1').style.display = 'none';
    document.getElementById('generchoice2').style.display = 'block';
    document.getElementById('generchoice3').style.display = 'none';
}
const Gen3 = () => {
    document.getElementById('generchoice1').style.display = 'none';
    document.getElementById('generchoice2').style.display = 'none';
    document.getElementById('generchoice3').style.display = 'block';
}
//EDIT-PROFILE-SETTINGS


function Setlogacrul() {
    var displaySetlogacrul = document.getElementById('setlogactul').style.display;
    if(displaySetlogacrul == "none")
        document.getElementById('setlogactul').style.display = 'block';
    else
        document.getElementById('setlogactul').style.display = 'none';
}

function Secprivul() {
    var displaySecprivul = document.getElementById('secprivul').style.display;
    if(displaySecprivul == "none")
        document.getElementById('secprivul').style.display = 'block';
    else
        document.getElementById('secprivul').style.display = 'none';
}


function Secpassul() {
    var displaySecpassul = document.getElementById('secpassul').style.display;
    if(displaySecpassul == "none")
        document.getElementById('secpassul').style.display = 'block';
    else
        document.getElementById('secpassul').style.display = 'none';
}



function Setblockul() {
    var displaySetblockul = document.getElementById('setblockul').style.display;
    if(displaySetblockul == "none")
        document.getElementById('setblockul').style.display = 'block';
    else
        document.getElementById('setblockul').style.display = 'none';
}


function Suredeleteaccount() { 
       let suredeleteaccount = document.getElementById("nothing"); suredeleteaccount.className += "destroyaccount";
    document.getElementById("suredeleteaccount").style.display = "block";
} 


function Notdeleteaccount(){
    let notdeleteaccount = document.getElementById("nothing"); notdeleteaccount.className = notdeleteaccount.className.replace("");
    document.getElementById("suredeleteaccount").style.display = "none";
}


//EDIT-PROFILE-SECURITY



const Darkmode = () => {
    let dark =
        //space-profile
        document.getElementsByClassName("dark");
    dark[0].style.background = 'var(--dark)';
    //bord-img-profile
    document.getElementsByClassName("dark");
    dark[1].style.background = 'var(--dark)';
    //name-profile
    document.getElementsByClassName("dark");
    dark[2].style.color = 'var(--green)';
    //catchphrease-profile
    document.getElementsByClassName("dark");
    dark[3].style.color = 'var(--red)';
    //follows-profile
    document.getElementsByClassName("dark");
    dark[4].style.color = 'var(--blue)';
    document.getElementsByClassName("dark");
    dark[5].style.color = 'var(--red)';
    //


}
const Lightmode = () => {
    let light = document.getElementsByClassName("light");
    light[0].style.background = 'var(--white)';
    document.getElementsByClassName("dark");
    light[1].style.background = 'var(--white)';
    document.getElementsByClassName("dark");
    light[2].style.background = 'var(--white)';
}




export {
    Darkmode,
    Lightmode,
    Timelineopt,
    Favoritedopt,
    Closefavorited,
    Trashopt,
    Imageopt,

    Userp,
    Lockp,
    Notificationp,
    Settingp,
    Logoutp,
    Genreoff,
    Genreon,
    Gen1,
    Gen2,
    Gen3,
    Suredeleteaccount,
    Notdeleteaccount,
    Setlogacrul,
    Setblockul,
    Secpassul,
    Secprivul,


};