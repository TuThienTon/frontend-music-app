const music = new Audio("IWillBeThere.mp3");
// music.play();
// create Array

const songs = [
    {
        id: "1",
        songName: ` Bốn Chữ Lắm
        <div class="subtitle">Trúc Nhân - Trương Thảo</div>`,
        poster: "img/1.jpg",
    },
    {
        id: "2",
        songName: ` Bước đến bên em
        <div class="subtitle">Trọng Hiếu</div>`,
        poster: "img/2.jpg",
    },
    {
        id: "3",
        songName: ` Cánh Hồng Phai
        <div class="subtitle">Trấn Thành</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: ` Cầu Vồng Khuyết
        <div class="subtitle">Tuấn Hưng</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: ` Chạy Ngay Đi
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: ` Chạm Khẽ Tim Anh Một Chút Thôi
        <div class="subtitle">Noo Phước Thịnh</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: ` Chiếc khăn gió ấm
        <div class="subtitle">Khánh Phương</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: ` Có chơi có chịu
        <div class="subtitle">Karik - Only C</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: ` I'll Be There
        <div class="subtitle">Gabriela Bee</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: ` Cùng anh
        <div class="subtitle">Ngọc Dolil - VRT</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: ` Em của ngày hôm qua
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: ` Gửi cho anh
        <div class="subtitle">Khởi My</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: ` Lạc Trôi
        <div class="subtitle">Sơn Tùng M-TP</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: ` Lightning
        <div class="subtitle">Henry Gallagher</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: ` Thiếu niên
        <div class="subtitle">Mộng Nhiên</div>`,
        poster: "img/15.jpg",
    },
    {
        id: "16",
        songName: ` Thu cuối
        <div class="subtitle">Yanbi,Mr T,Hằng BingBoong</div>`,
        poster: "img/16.jpg",
    },
];
Array.from(document.getElementsByClassName("songItem")).forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");
    } else {
        music.pause();
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
        wave.classList.remove("active2");
    }
});

let makeAllPlays = () => {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
    });
};

let makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
        element.style.background = "rgb(105, 105, 170, 0)";
    });
};

let index = 0;

let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");

        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();

        let song_title = songs.filter((ele) => {
            return ele.id == index;
        });

        song_title.forEach((ele) => {
            let { songName } = ele;
            title.innerHTML = songName;
        });
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        wave.classList.add("active2");

        music.addEventListener("ended", () => {
            masterPlay.classList.add("bi-play-fill");
            masterPlay.classList.remove("bi-pause-fill");
            wave.classList.remove("active2");
        });
        makeAllBackgrounds();

        Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
    });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
    // Thời gian bắt đầu
    let music_curr = music.currentTime;
    // Thời gian kết thúc
    let music_dur = music.duration;
    // Khởi tạo số phút của bài hát và số giây ở phút cuối của bài
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    // set time của trạng thái chỉ có 1 chữ số
    if (sec < 10) {
        sec = `0${sec}`;
    }
    // Gán giá trị thời gian kết thúc của mp3
    currentEnd.innerText = `${min} : ${sec}`;
    // Khởi tạo số phút của bài hát và số giây ở phút cuối của mp3
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    // set time của trạng thái chỉ có 1 chữ số
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    // Gán giá trị thời gian bắt đầu và hiện tại của mp3
    currentStart.innerText = `${min1} : ${sec1}`;

    let progerssbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progerssbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
    music.currentTime = (seek.value * music.duration) / 100;
});

music.addEventListener("ended", () => {
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
});

let vol = document.getElementById("vol");
let vol_icon = document.getElementById("vol_icon");
let vol_dot = document.getElementById("vol_dot");

let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener("change", () => {
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_bar.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    let song_title = songs.filter((ele) => {
        return ele.id == index;
    });

    song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
    });
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
});

next.addEventListener("click", () => {
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    let song_title = songs.filter((ele) => {
        return ele.id == index;
    });

    song_title.forEach((ele) => {
        let { songName } = ele;
        title.innerHTML = songName;
    });
    makeAllPlays();
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[`${index - 1}`].style.background = "rgb(105, 105, 170, .1)";
});

let left_srcoll = document.getElementById("left_srcoll");
let right_srcoll = document.getElementById("right_srcoll");

let pop_song = document.getElementsByClassName("pop_song")[0];

left_srcoll.addEventListener("click", () => {
    pop_song.scrollLeft -= 330;
});
right_srcoll.addEventListener("click", () => {
    pop_song.scrollLeft += 330;
});
// 
let left_srcolls = document.getElementById("left_srcolls");
let right_srcolls = document.getElementById("right_srcolls");

let item = document.getElementsByClassName("item")[0];

left_srcolls.addEventListener("click", () => {
    item.scrollLeft -= 330;
});
right_srcolls.addEventListener("click", () => {
    item.scrollLeft += 330;
});
