function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}


let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c:"Npm"}, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c:"Npm"}, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c:"Npm"}, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c:"Npm"}, "c"),
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex]
}

const quiz = new Quiz(sorular);

console.log(quiz.soruGetir());

document.querySelector(".btn-start").addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex){
        document.querySelector(".quiz-box").classList.add("active")
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    } else {
        console.log("quiz bitti")
    }
})

quiz.soruIndex += 1;

const toplam = (a,b) => a+b;

console.log(toplam(20, 50))