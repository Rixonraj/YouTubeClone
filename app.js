const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyCFyFHCJXZFhnc73-uBNN7bCDSOIfsN7Qo";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
    // getSubscriptionList();
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

//Upload Video

// const uploadBtn = document.querySelector('.upload-btn');
// uploadBtn.addEventListener('click',()=>{
    
// })
// document.getElementById('id1').style.color = 'red'

//Toogle Btn
var first = true;
 const toogleBtn = document.querySelector('.toggle-btn');
 toogleBtn.addEventListener('click',()=>{
    console.log("WORKING");
  

          first ? fn1() : fn2();
          

  
      function fn1() {
        first = !first;
        document.getElementById('sideBar').style.display = "none";
        document.getElementById('filterBar').style.left = "unset";
        document.getElementById('filterBar').style.width = "100%";
        document.getElementById('videoContainer').style.width = "100%";
        document.getElementById('videoContainer').style.marginLeft = "unset";
        
      };
      function fn2() {
        first = !first;
        document.getElementById('sideBar').style.display = "unset";
        document.getElementById('filterBar').style.left = "250px";
        document.getElementById('filterBar').style.width = "calc(100% - 250px)";
        document.getElementById('videoContainer').style.width = "calc(100% - 250px)";
        document.getElementById('videoContainer').style.marginLeft = "250px";

      };
    
 })


// subscription list
// const api_key2 = "AIzaSyAV_z7up0sJza31MDl8CrhJgQ_YPC3DX3E"
// const subList = "https://www.googleapis.com/youtube/v3/subscriptions?"
// const getSubscriptionList = () => {

//     fetch(subList + new URLSearchParams({
//         key: api_key,
//         part: [
//             "snippet,contentDetails"
//           ],
//         mine : true
//     }))
//     .then(res => res.json())
//     .then(data => {
//        console.log(data);
//     })
        
// }
