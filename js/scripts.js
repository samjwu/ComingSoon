const clock = document.querySelector(".clock");

const releasedate = new Date("December 31, 2018 23:00:00").getTime();

const update = setInterval(() => {
    const currtime = new Date().getTime();
    const timediff = releasedate = currtime;
}, 1000);