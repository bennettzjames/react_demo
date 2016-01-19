 var items =[{num: 1, item: "laundry"}]

 var ToDoListDisplay = React.createClass({
 		getInitialState: function() {
 			return {items: this.props.data}
 		},
 		render: function(){
 			console.log(this.state.items)
 			return(
 				<div className = 'display'>
 					<List data={this.state.items}/>
 					<AddToDoItem handleItemAddition={this.handleItemAddition} items={this.state.items}/>
 				</div>
 					)
 		},
 		handleItemAddition: function(item){
 			console.log(item);
 			console.log(this.state)
 			var arrayOfStuff = this.state.items.slice();
 			this.setState({items: arrayOfStuff.concat([item])});
 		}
 });
 var List = React.createClass({
 	render: function(){
 		console.log(this.props.data)
 		var allTheItems = this.props.data.map(function(item) {
 			return <tr><td>{item.num}</td>
 								<td>{item.item}</td>
 							</tr>
 		});
 		return(
 			<table className="list">
 				<tbody>
 					{allTheItems}
 				</tbody>
 			</table>
 		)
 	}
 });
 var AddToDoItem = React.createClass({
 		getInitialState: function() {
 			return {item: ""}
 		},
  	handleItemChange: function(e) {
    	this.setState({item: e.target.value});
  	},
  	handleSubmit: function(e) {
    	e.preventDefault();
    	var item = this.state.item.trim();
    	var num = this.props.items.length+1
    	// items.push({num,item});
    	this.props.handleItemAddition({num: num, item: item})
    	this.setState({item: ''});
 		},
 		render: function(){
 			return(
 				<div className="add-form">
 					<form className="add-item-form" onSubmit={this.handleSubmit}>
        		<input type="text" placeholder="Item to be added" value={this.state.item} onChange={this.handleItemChange}/>
        		<input type="submit" value="Add" />
     		 </form>
 				</div>
 			);
 		}
 });


 ReactDOM.render(
       <ToDoListDisplay data={items}/>,
        document.getElementById('hello')
      );