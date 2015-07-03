var Index = React.createClass({
  getInitialState: function(){
    return{items: this.props.items}
  },

  render: function(){
    items = []
    var self = this
    this.state.items.forEach(function(item){
      items.push( <Item name={item.name} price={item.price} category={item.category} image={self.props.image} /> )
    })
    return(
      <div className="row">
        <div className="col-md-8">
          {items}
        </div>
        <div className="col-md-3">
          <h3>Things I bought</h3>
          <table className="table table-striped">
            <thead>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr>
                <td><strong>Total</strong></td>
                <td className="total-price">0</td>
              </tr>
            </tbody>
          </table>

          <form className="checkout" action="https://rpm.demo.e-xact.com/payment" method="post"> 
            <input name="x_login" value="WSP-TEST-FYchRQAapw" type="hidden" /> 
            <input name="x_fp_sequence" value="random stuff" type="hidden" /> 
            <input name="x_fp_timestamp" value="" type="hidden" /> 
            <input name="x_fp_hash" value="fa8299479b10fe62dc67f55fb17189ee" type="hidden" /> 
            <input name="x_show_form" value="PAYMENT_FORM" type="hidden" /> 
            <input value="Checkout with E­-xact.com" type="submit" /> 
            <input name="x_amount" value="0" type="hidden" /> 
          </form>
        </div>
      </div>
    )
  }
})