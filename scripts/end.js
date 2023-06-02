
    const start = () => {
            setTimeout(function() {
                confetti.start()
            }, 1000); 
        };

        const stop = () => {
            setTimeout(function() {
                confetti.stop()
            }, 10000); 
        };

        start();
        stop();

        let home = document.getElementById("move");
        home.addEventListener("click",()=>{
            window.location.href = "../index.html";
        })