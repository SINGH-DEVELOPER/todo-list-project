var todoList = {
	todos: [],
	/*
	displayTodo: function(){
			//debugger;
		if(this.todos.length === 0)
			console.log('Your todo list is empty!');
		else
			console.log('My Todos:');
			for(var i = 0 ; i < this.todos.length ; i++){

				if(this.todos[i].completed === true)
					console.log('(x)' , this.todos[i].todoText);
				else
					console.log('( )' , this.todos[i].todoText);
			}
	},
	*/
	addTodos: function(todoText){
		//debugger;
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		//this.displayTodo();
	},
	changeTodo: function(position,todoText){
		this.todos[position-1].todoText = todoText;
		//this.displayTodo();
	},
	deleteTodo: function(position){
		this.todos.splice(position,1);
		//this.displayTodo();
	},
	toggleCompleted: function(position){
		var todo = this.todos[position-1];
		todo.completed = !todo.completed;
		//this.displayTodo();
	},
	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		
		for(var i = 0 ; i < totalTodos ; i++ ){
			if(this.todos[i].completed === true)
				completedTodos++;
		}
			//toggleAll: If everything's true, make everything false.
		if(totalTodos === completedTodos){
			for(var i = 0 ; i < totalTodos ; i++ ){
				this.todos[i].completed = false;
			}
		}	//toggleAll: Otherwise make everything true.
		else
			for(var i = 0 ; i < totalTodos ; i++ ){
				this.todos[i].completed = true;
			}
		
		//this.displayTodo();
	}
};

var handlers = {
	/*
	displayTodo: function(){
		todoList.displayTodo();
	},
	*/
	addTodos: function(){
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		if(addTodoTextInput.value.length === 0)
		{
			alert('Please enter some text...!');
		}
		else{
			todoList.addTodos(addTodoTextInput.value);
			addTodoTextInput.value = '';
		}
		view.displayTodo();
	},
	changeTodo: function(){
		//debugger;
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		if(isNaN(changeTodoPositionInput.valueAsNumber))
		{
			alert('Invalid position');
			changeTodoPositionInput.value = '';
		}
		else if(changeTodoTextInput.value.length === 0)
		{
			alert('Please enter some text...!');
		}
		else{
			todoList.changeTodo(changeTodoPositionInput.valueAsNumber,changeTodoTextInput.value);
			changeTodoTextInput.value='';
			changeTodoPositionInput.value='';
		}
		view.displayTodo();
	},
	deleteTodo: function(position){
		/*debugger;
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		if(isNaN(deleteTodoPositionInput.valueAsNumber)||deleteTodoPositionInput.valueAsNumber<0)
		{
			alert('Invalid position');
			deleteTodoPositionInput.value = '';
		}
		else{
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
		}
		*/
		todoList.deleteTodo(position);
		view.displayTodo();
	},
	toggleCompleted: function(){
		//debugger;
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		if(isNaN(toggleCompletedPositionInput.valueAsNumber)||toggleCompletedPositionInput.valueAsNumber<0)
		{
			alert('Invalid position');
			toggleCompletedPositionInput.value = '';
		}
		else{
			todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
			toggleCompletedPositionInput.value='';
		}		
		view.displayTodo();
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodo();
	}
};


var view = {
	displayTodo: function(){
		//debugger;
		var todoUl = document.querySelector('ul');
		todoUl.innerHTML = '';
		var todoTextWithCompletion = '';

		for(var i=0; i< todoList.todos.length; i++){
			todoTextWithCompletion = '';
			var todoLi = document.createElement('li');
			if(todoList.todos[i].completed === true){
				todoTextWithCompletion = '(x) ';
			}
			else{
				todoTextWithCompletion = '( ) ';
			}
			todoLi.id = i;
			var deleteButton = this.createDeleteButton();
			todoLi.textContent = todoTextWithCompletion + todoList.todos[i].todoText ;
			todoLi.appendChild(deleteButton);
			todoUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton btn btn-primary';
		return deleteButton;
	},
	setUpEventListeners: function(){
		var todoUl = document.querySelector('ul');

		todoUl.addEventListener('click',function(event){
		//console.log(event.target.parentNode.id);
		// Get the element that was clicked on.
		var elementClicked = event.target;
		// Check if elementClicked is a delete button.
		if(elementClicked.className === 'deleteButton btn btn-primary'){
			handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
		}

		});
	}
};

view.setUpEventListeners();







