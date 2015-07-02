var Index = React.createClass({
  getInitialState: function(){
    return{items: this.props.items}
  },

  render: function(){
    items = []
    this.state.items.forEach(function(item){
      items.push( <Item name={item.name} price={item.price} category={item.category} /> )
    })
    return(
      <div>
        {items}
      </div>
    )
  }
})