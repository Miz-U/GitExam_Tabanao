//kay tabanao 'to ah
function changeTableStyle() {
    let table = document.getElementById("studentTable");
    
    let rows = table.getElementsByTagName("tr");
    
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        
        let name = cells[0].textContent.trim();
        
        if (name !== "Maria Santos") {
            for (let cell of cells) {
                cell.style.backgroundColor = "yellow";
            }
        }
    }

    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = "lightblue";
        th.style.color = "black";
    }
}
