const firstSheet = document.querySelector(".initialBox"); // - Pirmasis puslapis
const nickName = document.querySelector(".nickname");     // - Šaukinys
const putIn = document.querySelector(".putIn");           // - Patvirtinimas - įėjimas
const existNick = document.querySelector(".existNick");   // - Šaukinio eilutė

putIn.onclick = () => {                                              // - mygtuko paspaudimas
    let logIn = nickName.value                                      // - sukuriamas naujas kintamasis "logIn" su eilutės "nickName" reikšme
    existNick.innerHTML = nickName.value
    firstSheet.style.display = "none"
    console.log(logIn);
    nickName.value = ""                                                    // - išvaloma duomenų įvedimo eilutė


}

