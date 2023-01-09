let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" },
];
let table = document.querySelector("table");

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data) {
        let caps = key[0].toUpperCase();
        let sliced = key.slice(1);
        let th = document.createElement("th");
        let text = document.createTextNode(caps.concat(sliced));
        th.appendChild(text);
        row.appendChild(th)
    }
}


function generateTable(table, data) {
    let tbody = table.createTBody()
    for(let element of data) {
        let row = tbody.insertRow();
        for(key in element) {
            let cell = row.insertCell();
            cell.style.textAlign = "left";
            let text = document.createTextNode(element[key])
            cell.appendChild(text);
        }
    }
} 

let data = Object.keys(mountains[0]);
generateTableHead(table, data);
generateTable(table, mountains);
