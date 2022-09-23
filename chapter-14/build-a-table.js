const container = document.getElementById("mountains");

const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

let table = document.createElement('table');
let keynames = Object.keys(MOUNTAINS[0]);
let tr = document.createElement('tr');
for (let name of keynames) {
    let th = document.createElement('th');
    let txt = document.createTextNode(name);
    th.appendChild(txt);
    tr.appendChild(th);
}
table.appendChild(tr);

for (let i = 0; i < MOUNTAINS.length; i++) {
    let mountain = MOUNTAINS[i];
    let tr = document.createElement('tr');
    let keys = Object.keys(mountain);

    for (let key of keys) {
        let td = document.createElement('td');
        let content = document.createTextNode(mountain[key]);
        td.appendChild(content);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.appendChild(table);