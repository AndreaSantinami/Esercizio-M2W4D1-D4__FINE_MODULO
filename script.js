const jobs = [
    { title: "Marketing Intern", location: "US, NY, New York" },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
    { title: "Accounting Clerk", location: "US, MD," },
    { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { title: "HP BSM SME", location: "US, FL, Pensacola" },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { title: "Installers", location: "US, FL, Orlando" },
    { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { title: "Visual Designer", location: "US, NY, New York" },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { title: "Marketing Assistant", location: "US, TX, Austin" },
    { title: "Front End Developer", location: "NZ, N, Auckland" },
    { title: "Engagement Manager", location: "AE," },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { title: "Customer Service", location: "GB, LND, London" },
    { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
    { title: "Marketing Exec", location: "SG," },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { title: "Customer Service Associate", location: "CA, ON, Toronto" },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { title: "Software Applications Specialist", location: "US, KS," },
    { title: "Craftsman Associate", location: "US, WA, Everett" },
    { title: "Completion Engineer", location: "US, CA, San Ramon" },
    { title: "I Want To Work At Karmarama", location: "GB, LND," },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
]

let lavoroTitolo = document.getElementById("input1")
let lavoroLuogo = document.getElementById("input2")


function cerca(lavoroTitolo, lavoroLuogo) {
    //mi serve per salvarci tutti i lavori trovati e i luoghi 
    let titolo_lavoro = []
    let luogo_lavoro = []
    //------------------------------------------------------
    /* let lista = document.getElementById("lista_lavori")
    let li = document.createElement("li") */
    //------------------------------------------------------
    let Titolo = lavoroTitolo.value.toLowerCase()
    let Luogo = lavoroLuogo.value.toLowerCase()
    
    if (Titolo === "" && Luogo === "") {
        alert("Campi di ricerca non validi!")
    } else {
        for (let i = 0; i < jobs.length; i++) {
            let lavoro = jobs[i];
            document.getElementById("lista").style.visibility = "visible"
            document.getElementById("contenitore").style.visibility = "visible"

            //controllo se titolo e luogo ci sono dentro l'arrey creato in precedenza
            if (lavoro.title.toLowerCase().includes(Titolo) && lavoro.location.toLowerCase().includes(Luogo)) {
                let lista = document.getElementById("lista_lavori")
                let li = document.createElement("li")
                titolo_lavoro.push(lavoro.title)
                luogo_lavoro.push(lavoro.location)

                console.log("TITOLO LAVORO " + titolo_lavoro)
                console.log("LUOGO LAVORO " + luogo_lavoro)
                console.log("CONTEGGIO " + titolo_lavoro.length)

                document.getElementById("conteggio").textContent=titolo_lavoro.length

                li.innerHTML = "LAVORO - " + titolo_lavoro + "<br>" + " LUOGO - " + luogo_lavoro
                lista.appendChild(li)
            }

        }
    }
}
/* 
let lavoroTitolo = "Customer";
let lavoroLuogo = "US";
let funzione = cerca(jobs, lavoroTitolo, lavoroLuogo)

console.log(funzione)
 */




