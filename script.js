function addRow() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const col1Input = document.getElementById('col1Input').value;
    const col2Input = document.getElementById('col2Input').value;
    const col3Input = document.getElementById('col3Input').value;

    const col1 = newRow.insertCell(0);
    const col2 = newRow.insertCell(1);
    const col3 = newRow.insertCell(2);

    col1.textContent = col1Input;
    col2.textContent = col2Input;
    col3.textContent = col3Input;

    document.getElementById('col1Input').value = '';
    document.getElementById('col2Input').value = '';
    document.getElementById('col3Input').value = '';
}
