document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const noGif = document.getElementById('no-gif');
    const messages = [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Pookie please...",
        "Just think about it!",
        "If you say no, I will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤"
    ];
    let messageIndex = 0;
    let clickedYes = false;

    function handleYes() {
        if (clickedYes) return;
        clickedYes = true;

        document.body.innerHTML = '<h1>Knew you would say that... ❤</h1><p>because my heart always knew we were meant to be together</p><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif" alt="Valentine GIF" style="max-width: 80%; border-radius: 25px; margin-top: 20px; box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.3);">';
        document.body.style.display = 'flex';
        document.body.style.flexDirection = 'column';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.background = 'linear-gradient(135deg, #ffd1dc, #ffe4e1)';
        document.body.style.color = '#ff69b4';
        document.body.style.fontFamily = 'Pacifico, cursive';
        document.body.style.height = '100vh';
    }

    function handleNoClick(event) {
        event.preventDefault();
        noButton.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        noGif.style.display = 'block';
    }

    ['click', 'touchstart'].forEach(evt => {
        yesButton.addEventListener(evt, handleYes);
        noButton.addEventListener(evt, handleNoClick);
    });

    // Debugging code to log events
    yesButton.addEventListener('click', () => console.log('Yes button clicked'));
    yesButton.addEventListener('touchstart', () => console.log('Yes button touched'));
    noButton.addEventListener('click', () => console.log('No button clicked'));
    noButton.addEventListener('touchstart', () => console.log('No button touched'));
});