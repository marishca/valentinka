let butCheck = document.querySelector('.glow-button1');


butCheck.onclick = function(){
    let a1 = document.getElementById('a1').value;
    let a2 = document.getElementById('a2').value;
    if (a1 == 43,9786 && a2 == 15,3836){
        document.location.href = "https://yandex.ru/maps/-/CCUM6TRHcA";
    } else{
        alert ('Попробуй ещё раз')
    }
}

let govonos = [
    'Я люблю тебя, за твою заботу',
    'Я люблю тебя, потому что ты бебра',
    'Нет никого прекраснее тебя',
    'Ты знаешь,как подарить мне счастье',
    'Твоя любовь меня бережет',
    'Я схожу с ума от тебя',
    'Я обожаю твои глаза',
    'Твои руки самые нежные',
    'Ты никогда не скажешь, что слышишь эту историю в 10й раз',
    'Причины бесконечны,но важнее всего то,что я люблю тебя,потому что не могу не любить!'
]
let reasons = document.querySelector('.reasons');
let reasBut = document.querySelector('.glow-button');
let kek = 0

reasBut.onclick = function(){
    let next = kek === govonos.length - 1 ? 0 : kek + 1
    document.getElementById("love").innerHTML = govonos[kek]
    kek = next
}

