let cont = document.querySelector(".container");
let thumbnailSetter = document.querySelector(".thumbnailAndDuration img");
let durationSetter = document.querySelector(".duration");
let titleSetter = document.querySelector(".title");
let viewsSetter = document.querySelector(".views");
let postedAgoSetter = document.querySelector(".postedAgo");
let channelNameSetter = document.querySelector(".chName")

function CreateCard(thumbnail,title,cName,views,monthsOld,duration){
    thumbnailSetter.setAttribute("src",thumbnail);
    durationSetter.innerHTML= duration;
    titleSetter.innerHTML = title;
    viewsSetter.innerHTML = viewsCompressor(views)+"views";
    postedAgoSetter.innerHTML = monthsOld+" Months ago";
    channelNameSetter.innerHTML = cName;
}
let link = "https://mangainsider.com/wp-content/uploads/2022/06/hunter-x-hunter-gon-and-ging.png";


CreateCard(link,"I abandoned my son to buy milk","Ging Freecs",690000000,2,"20:00");

function viewsCompressor(views){
    if(views/10*6>=1){
        views = views/(10**6)+" million "
    }
    else if(views/10*3>=1){
        views = views/(10**6)+" K "
    }
    return views;
}
