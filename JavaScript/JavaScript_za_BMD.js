var KORISNIK = 0


// Ispisiva u konzolu ko je uša na stranicu
// Svi komentari su izbaceni ispod funkcije jer je zbrka teška, ja ću to usmeno najbolje
function loginKorisnika() {
    var today = new Date();
    var datum = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    var vrime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var istinitost = false
    while (istinitost != true) {
      let korisnik = prompt("Kako biste pristupili stranici, unesite Vaš mail (SUMARUM mail*): \n(Npr.: marko.markovic@fsre.sum.ba)");

      let sumRegEx = new RegExp(/^[a-zA-Z]{3,16}(\.)[a-zA-Z]{3,16}[0-9]?@[a-zA-Z]{2,6}(\.sum\.ba)$/);
      var istinitost = sumRegEx.test(korisnik)

      console.log("Validacija korisnika (regEx): " + sumRegEx.test(korisnik))

      if (istinitost === true) {
        console.log("Korisnik " + korisnik + " je ušao na stranicu " + datum + " u " + vrime)
        KORISNIK = korisnik
      }
      else {
        console.log("Netko je pogrešno unio podatke: " + korisnik + " " + datum + " u " + vrime)
      }
    }
}
///=====================================================================================================================================
/// Komentari iz funkcije iznad:
    // Trenutni datum i vrime

    // Uporno traži unos korisnika pri ulasku na starnici dok ne unese odgovarajuci

    // regEx za (nešto)@(fax).sum.ba 

    // Ispisiva je li korisnik prošao regEx ili nije, mislio sam ovo i izbaciti jer mi je bilo potrebno samo prilikom uštimavanja petlje

    // Ispisivanja u konzolu ako korisnik unese točne ili pogrešne podatke
///=====================================================================================================================================





// Nisam moga smislit korisniji način za "alert"
// Kada se klikne na BMW logo, iskoci ova poruka
function alert1(){
    alert("Vaš klik nema smisla! Na ovoj stranici se već nalazite!")
}


// Ispisiva unos iz modalnog dijaloga uz popratni text
function spremiPodatkePretplatnika(){
    var mailPretplatnika = document.getElementById("mailZaPretplatu").value
    console.log("Korisnik " + KORISNIK + " se pretplatio na Newsletter mailom: " + mailPretplatnika)
}


// Ispisiva podatke iz kontakt forme u konzolu (samo ako su neispravni, jer class="submit" refresha stranicu i onda nestane sve iz konzole)
function spremiPodatkeZaJaviteNamSe(){
  // Dohvaća ime, mail i poruku iz kontakt forme kad se klikne "Pošalji"
  var Ime = document.getElementById("form-name").value
  var Email = document.getElementById("form-email").value
  var Poruka = document.getElementById("form-message").value

  // Uzima trenutni datum i vrime
  var today = new Date();
  var datum = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var vrime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  // Ispis u konzolu
  console.log("Zaprimljena je nova poruka u neispravnom formatu! \n \n" + "Osoba: " + Ime + "\nAdrese e-pošte: " + Email + "\nDatum i vrijeme: " + datum + " u " + vrime + "\n \nPoruka: " + Poruka)
}