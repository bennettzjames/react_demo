 var ToDoListDisplay = React.createClass({
 		render: function(){
 			return(
 				<div className = 'display'>
 					<List/>
 					<AddToDoItem/>
 				</div>
 					)
 		}
 });
 var List = React.createClass({
 	render: function(){
 		return(
 			<div className="list">
 				List will go here
 			</div>
 		);
 	}
 })
 var AddToDoItem = React.createClass({
 		render: function(){
 			return(
 				<div className="add-form">
 					<form className="add-item-form">
        		<input type="text" placeholder="Item"/>
        		<input type="submit" value="Post" />
     		 </form>
 					Form will go here
 				</div>
 			);
 		}
 });
 ReactDOM.render(
        React.createElement(ToDoListDisplay, null),
        document.getElementById('hello')
      );