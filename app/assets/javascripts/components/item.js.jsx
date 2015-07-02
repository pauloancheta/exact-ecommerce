var Item = React.createClass({
  getInitialState: function(){
    return{ name: this.props.name, price: this.props.price, category: this.props.category}
  },
  buy: function(){
    console.log('buy FIRING');
    val = '0<|>' + this.state.category + '<|>' + this.state.name + '<|>1<|>' + this.state.price + '<|>YES<|>'
    $('form.checkout').append('<input name="x_line_item" value="'+ val +'" type="hidden">')
    current_price = parseFloat($('input[name="x_amount"]').val())
    
    new_price = current_price + parseInt(this.state.price)
    $('input[name="x_amount"]').val(new_price)

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

    console.log($('input[name="x_fp_hash"]').val())
  },

  render: function(){
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.price}</p>
        <p>{this.state.category}</p>
        <a onClick={this.buy}>Add to Cart!</a>
      </div>
    )
  }
})