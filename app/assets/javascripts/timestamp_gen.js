$(document).ready(function(){
  $('input[name="x_fp_timestamp"]').val( Date.now() + 10000 )

  var hash = CryptoJS.HmacMD5('~8Mp9ITFHpeuWZLadwXh', "Secret Passphrase");
  console.log(hash)
});