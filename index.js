const counter = (num, card) => {  // счетчик
    if(num == -1){
        const table = card.querySelector(".tableCounter");
        table.innerHTML = Number(table.innerHTML) - 1;

        if(table.innerHTML == 0){
            const counter = card.querySelector(".counter")
            const button = card.querySelector(".buttonChoose")

            counter.classList.add("active")
            button.classList.remove("active")

            table.innerHTML = 1;
        }

    } else if(num == 1){
        const table = card.querySelector(".tableCounter");
        table.innerHTML = Number(table.innerHTML) + 1;
    } 
}

const checkCounter = (card) => {  // Открывает счетчик
    const counter = card.querySelector(".counter")
    const button = card.querySelector(".buttonChoose")

    if(counter.classList.contains("active")){
        counter.classList.remove("active")
        button.classList.add("active")
    }
}

document.addEventListener("dblclick", (e) => {
    e.preventDefault()
})

document.addEventListener("click", (e) => {
    if(e.target.closest(".buttonChoose")){
        const card = e.target.closest(".card")
        checkCounter(card)
    }
})

document.addEventListener("click", (e) => {
    if(e.target.closest(".decrement") ){
        const card = e.target.closest(".card") 
        counter(-1, card)
    } else if(e.target.closest(".increment")){
        const card = e.target.closest(".card")
        counter(+1, card)
    }
})

document.addEventListener("click", (e) => {
    if(e.target.closest("img") ){
        const img = e.target.closest("img");
        img.classList.toggle("imgActive")
    }
})


//let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
//tg.expand(); //расширяем на все окно 
//tg.MainButton.show() //показываем кнопку
//tg.MainButton.text = "Кнопка не была нажата"

//Telegram.WebApp.onEvent('mainButtonClicked', function(){
    // tg.sendData("some string that we need to send"); 

    // tg.MainButton.setText("Вы нажали на кнопку")
    // window.location.href = './check.html';

    //tg.sendData("Было отправлено сообщение в телегу и должно вернуться в чат"); 
//});

