function changeTableStyle() {
    let table = document.getElementById("studentTable");
    
    // Get all rows of the table (skipping the header)
    let rows = table.getElementsByTagName("tr");
    
    // Loop through each row starting from index 1 to skip the header row
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        
        // Check if the name is "Maria Santos" (we assume name is in the first cell)
        let name = cells[0].textContent.trim();
        
        if (name !== "Maria Santos") {
            // Loop through all <td> elements in the row and change their background color to yellow
            for (let cell of cells) {
                cell.style.backgroundColor = "yellow";
            }
        }
    }

    // Optionally, you can add styles to the header as needed
    let ths = table.getElementsByTagName("th");
    for (let th of ths) {
        th.style.backgroundColor = "lightblue";
        th.style.color = "black";
    }
}
