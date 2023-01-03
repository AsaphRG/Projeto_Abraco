function rollToPosition(pos) {
    posX = 0;
    posY = 0;
    
    if (pos === "home") {
        posY = 0;
    } else if (pos === "intro") {
        posY = 738;
    } else if (pos === "projeto") {
        posY = 1339;
    } else if (pos === "contato") {
        posY = 2345;
    } else if (pos === "colab") {
        posY = 2907;
    };

    window.scrollTo({
        top: posY,
        left: posX,
        behavior: "smooth"
    });
}