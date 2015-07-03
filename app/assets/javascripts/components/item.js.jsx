var Item = React.createClass({
  getInitialState: function(){
    return{ name: this.props.name, price: this.props.price, category: this.props.category}
  },

  componentDidMount: function(){
    this.setState({added: false})
  },

  resetHash: function(){
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
  },

  buy: function(){
    val = '0<|>' + this.state.category + '<|>' + this.state.name + '<|>1<|>' + this.state.price + '<|>YES<|>'
    $('form.checkout').append('<input name="x_line_item" value="'+ val +'" type="hidden">')
    current_price = parseFloat($('input[name="x_amount"]').val())
    new_price = current_price + parseFloat(this.state.price)
    $('input[name="x_amount"]').val(new_price)


    $('.total-price').html(new_price)
    this.resetHash();

    str = this.state.name.replace(/\s/g, '');
    $('tbody').prepend('<tr class="'+ str +'"> <td>' + this.state.name + '</td><td>' + this.state.price + '</td></tr>');
    this.setState({added: true})
  },

  remove: function(){
    $('input[value*="'+ this.state.name +'"]').remove();
    current_price = parseFloat($('input[name="x_amount"]').val())
    new_price = current_price - parseFloat(this.state.price)
    $('input[name="x_amount"]').val(new_price)

    $('.total-price').html(new_price)
    this.resetHash();
    this.setState({added: false})

    str = this.state.name.replace(/\s/g, '');
    $('tr.' + str).first().remove();
  },

  render: function(){
    var button;
    if(!this.state.added){
      button = <a onClick={this.buy} className="btn btn-default">Add to Cart!</a>
    }
    else {
      button = <a onClick={this.remove} className="btn btn-danger">Remove to Cart</a>
    }
    return (
      <div className="item-card well">
        <div className="row">
          <div className="col-md-4">
            <img src={this.props.image}/>
          </div>
          <div className="col-md-8 item-description">
            <h5>{this.state.name}</h5>
            <p>{this.state.price}</p>
            <p>{this.state.category}</p>
            {button}
          </div>
        </div>
      </div>
    )
  }
})