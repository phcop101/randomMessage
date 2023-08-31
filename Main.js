const randomPrinsip = () => {
    let randomNum = Math.floor(Math.random()*5);
    switch (randomNum) {
        case 0:
            console.log('Belief in god.');
            break;
        case 1:
            console.log('Loyalty to king and country.');
            break;
        case 2:
            console.log('Supremacy of the constitution.');
            break;
        case 3:
            console.log('Rule of law.');
            break;
        case 4:
            console.log('Good behavior and morality.');
            break;
        default:
            console.log('Uninteded Output! Check code!');
            break;
    }
    
};

randomPrinsip();