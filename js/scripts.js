const clock = document.querySelector(".clock");

const releasedate = new Date("December 31, 2018 23:00:00").getTime();

const update = setInterval(() => {
    const currtime = new Date().getTime();
    const timediff = releasedate - currtime;
    
    const numdays = Math.floor(timediff / (1000 * 60 * 60 * 24));
    const numhours = Math.floor((timediff / (1000 * 60 * 60)) % 24);
    const nummins = Math.floor((timediff / (1000 * 60)) % (60 * 24));
    const numsecs = Math.floor((timediff / (1000)) % (60 * 60 * 24));

    clock.innerHTML = `
        <div>${numdays}<span>Days</span></div>
        <div>${numhours}<span>Hours</span></div>
        <div>${nummins}<span>Minutes</span></div>
        <div>${numsecs}<span>Seconds</span></div>
    `;

    if(timediff <= 0) {
        clearInterval(update);
        clock.style.color = "#666";
        clock.innerHTML = "Released";
    }
}, 1000);