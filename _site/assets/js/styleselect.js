$(document).ready(function() {
  $('input[type="radio"]').change(function() {
    var styleValue = $(this).attr('value');
    document.getElementById("cv").className = "cv " + styleValue;
  })
})
