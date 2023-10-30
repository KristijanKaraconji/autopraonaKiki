function dobrodosli() {

    let a = Number(prompt(" Projekat iz internet jezika i alata 2\n  Molimo Vas unesite broj godina:"));
    if (a >= 18) {
        alert(" dobro došli na sajt!\n Uživajte <3");
    } else {
        alert(" nemate dovoljan broj godina\n napomena: Morate biti punoletni!");

    }
}
function generisiUsluge() {
    let usluge = ["Pranje", "Poliranje", "Dubinsko čišćenje", "Čišćenje tepiha"];
    usluge.push("Dolazak na adresu");
    let uslugeDiv = document.getElementById("usluge");
    let htmlKod = "<ul>";
    for (let i = 0; i < usluge.length; i++) {
        htmlKod += `<li><a href="javascript:uslugeIspis(${i})" id="tag${i}">` + usluge[i] + `</a></li>`;
    }
    htmlKod += "</ul>";
    uslugeDiv.innerHTML = htmlKod;
}
function uslugeIspis(x) {
    let a = [];
    let htmlKod0 = "";
    for (let i = 0; i < 5; i++) {
        a[i] = document.getElementById("tag" + x);

    }
    for (let i = 0; i < a.length; i++) {
        if (x === 0) {
            let htmlKod0 = "";
            htmlKod0 += "Pranje automobila se obično radi kako bi se uklonila prljavština, prašina, mrlje i ostaci sa vozila.";
            a[i].innerHTML = htmlKod0;

        }
        else if (x === 1) {
            a[i].innerHTML = "";
            let htmlKod1 = "";
            htmlKod1 += "Poliranje automobila se obično radi kako bi se poboljšao sjaj i izgled vozila.";
            a[i].innerHTML = htmlKod1;

        }
        else if (x === 2) {
            let htmlKod2 = "";
            htmlKod2 += "Dubinsko čišćenje automobila je postupak kojim se temeljito čisti unutrašnjost automobila, uklanjajući svu prljavštinu, nečistoće, mrlje i mirise.";
            a[i].innerHTML = htmlKod2;


        }
        else if (x === 3) {
            let htmlKod3 = "";
            htmlKod3 += "Čišćenje tepiha je proces kojim se uklanjaju nečistoće, mrlje i prljavština sa površine tepiha, uključuje pranje tepiha sapunicom i toplom vodom, nakon čega se tepih dobro ispere vodom i osuši.";
            a[i].innerHTML = htmlKod3;

        }
        else if (x === 4) {
            let htmlKod4 = "";
            htmlKod4 += "Kada dogovorite dolazak tepih servisa, možete očekivati da će stručnjaci doći na vašu adresu u dogovoreno vreme, obično sa svom opremom i hemikalijama koje su im potrebne za čišćenje vaših tepiha. Nakon dolaska, obično će pregledati tepihe kako bi utvrdili kakvo je stanje tepiha i koje su potrebne mere za čišćenje.";
            a[i].innerHTML = htmlKod4;

        }

    }
}
function formaPotvrdi() {
    let sadrzaj = "";
    let ispis = document.getElementById("ispis");
    let forma = document.getElementById("forma");
    let ime1 = document.getElementById("ime1").value;
    let prezime = document.getElementById("prezime").value;
    let poruka = document.getElementById("poruka").value;
    let email = document.getElementById("email").value;
    if (proveriEmail(email)) {

        ispis.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        sadrzaj = "<h2>Hvala na odgovoru!!!!<br>potrudicemo se da odgovorimo</h2>" + "<br>" + ime1 + " " + prezime + "<br>" +
            "Email: " + email + "<br>" + "Vasa poruka je glasila: " + poruka;

        ispis.innerHTML = sadrzaj;
        forma.style.display = "none";
        ispis.style.display = "block";


    } else {

        alert("Molimo unesite ispravnu email adresu.");
    }

    const Konzola = [ime1,prezime, email, poruka].join(", ");
    console.log(Konzola);
}
function proveriEmail(email) {

    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

