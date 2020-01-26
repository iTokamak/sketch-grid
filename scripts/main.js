const divMain = document.querySelector('.div-main');

let gridXNumber = 16;
let gridYNumber = 16;

for(i = 0; i < gridYNumber; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('grid-row-div');
    
    for (j = 0; j < gridXNumber; j++) {
        let columnDiv = document.createElement('div');
        columnDiv.classList.add('grid-column-div');
        rowDiv.appendChild(columnDiv);
    }
    divMain.appendChild(rowDiv);
}

const gridColumns = document.querySelectorAll('.grid-column-div');

gridColumns.forEach(function(gridColumn) {
    gridColumn.addEventListener('mouseover', function(e){
        gridColumn.classList.add('hovering')
    });
});