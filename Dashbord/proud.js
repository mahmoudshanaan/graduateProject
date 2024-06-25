function addMedicine() {
  var medicineName = document.getElementById('medicineName').value;
  var medicinePrice = document.getElementById('medicinePrice').value;
  var medicineQuantity = document.getElementById('medicineQuantity').value;

  if (medicineName.trim() !== '' && medicinePrice.trim() !== '' && medicineQuantity.trim() !== '') {
    var medicineTable = document.getElementById('medicineTable');
    var medicineList = document.getElementById('medicineList');

    var newRow = medicineList.insertRow(0);

    var cellName = newRow.insertCell(0);
    cellName.innerText = medicineName;

    var cellPrice = newRow.insertCell(1);
    cellPrice.innerText = medicinePrice;

    var cellQuantity = newRow.insertCell(2);
    cellQuantity.innerText = medicineQuantity;

    var cellDelete = newRow.insertCell(3);
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'حذف';
    deleteButton.onclick = function() {
      deleteMedicine(this);
    };
    cellDelete.appendChild(deleteButton);

    document.getElementById('medicineName').value = '';
    document.getElementById('medicinePrice').value = '';
    document.getElementById('medicineQuantity').value = '';
  } else {
    alert('الرجاء ملء جميع الحقول');
  }
}

function deleteMedicine(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
