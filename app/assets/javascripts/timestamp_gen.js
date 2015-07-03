$(document).ready(function(){
  var new_date = String(parseInt((Date.now() + 900)/1000))
  var transaction_key = '_eVXXcYTFIkceQ8Uz8rP'
  var x_login = $('input[name="x_login"]').val(),
  x_fp_sequence = $('input[name="x_fp_sequence"]').val(),
  x_fp_timestamp = new_date,
  x_amount = $('input[name="x_amount"]').val();
  
  $('input[name="x_fp_timestamp"]').val( new_date )


  var hash_string = x_login + "^" + x_fp_sequence + "^" + x_fp_timestamp + "^" + x_amount + "^"

  var hash = CryptoJS.HmacMD5(hash_string, transaction_key);
  $('input[name="x_fp_hash"]').val(hash.toString(CryptoJS.enc.Hex) );

  console.log(hash)
});