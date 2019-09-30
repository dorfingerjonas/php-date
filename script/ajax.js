window.addEventListener('load', () => {
    const button = document.getElementById('button');
    let myRequest;

    setInterval(() => {
        getAJAX();
    }, 2000);

    button.addEventListener('click', getAJAX);
    
    function getAJAX() {
        myRequest = new XMLHttpRequest();
        myRequest.open("GET", "./php/index.php?_=" + new Date().getTime());
        myRequest.onreadystatechange = checkData;
        myRequest.send(null);
    }

    function checkData() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            const placeholder = document.getElementById("placeholder");
            const content = myRequest.responseText;
            placeholder.textContent = content;
        }
    };
});