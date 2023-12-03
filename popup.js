document.addEventListener('DOMContentLoaded', function() {
  var date1Input = document.getElementById('date1');
  var date2Input = document.getElementById('date2');
  var resultDiv = document.getElementById('result');

  date1Input.value = localStorage.getItem('date1');
  date2Input.value = localStorage.getItem('date2');

  document.getElementById('calculate').addEventListener('click', function(event) {
    event.preventDefault();

    var date1 = date1Input.value;
    var date2 = date2Input.value;

    if (date1 && date2) {
      var diffInMs = new Date(date2) - new Date(date1);
      var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

      resultDiv.innerHTML = 'Difference in days: ' + diffInDays;

      // сохраняем значения в localStorage
      localStorage.setItem('date1', date1);
      localStorage.setItem('date2', date2);
    } else {
      resultDiv.innerHTML = 'Please enter both dates';
    }
  });
});