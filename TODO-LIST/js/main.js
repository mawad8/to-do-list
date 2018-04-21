// what is a framework??
// A framework is aprebuilt system or structure that has underlying rules on how to use it correctly.

// Wha is an MVC framework? MVC standes for MODEL VIEW CONTROLLER.
// 1
// What is the Model?????
//  The model is the DATA. usually when we are talkeing about data, 
// we are talking about data form a server . common database include: mysql and mongoDB
// 2
// WHAT IS VIEW???????
// the view is the client. the client is the browser. the view is what you see on the borwser.
// most os the time MVC framework make it really easy to interact between the MODEL and the VIEW
// 3
// WHAT IS THE CONTROLLER????????
// THE PROCESS AND THE LOGIC BEHIND MAKING REQUEST BETWEEN THE MODEL AND THE VIEW

// TL:DR; Model is database the view is the browser/app,
// the controller is the logic in between .



// VEU JS LOGIC

//  CREATE A NEW VIEW INSTANCE. WHICH BASICLLAY MEANS WE'RE CREATING A
// NEW PIECE OF VYE LOGIC TO USE WITH THE HTML ELEMENT THAT WE WANT TO TAGRET


// create a new instance of the vye constructor that is in the vue.js file

var todo = new Vue({
	// el meen element
	el: '#todo',
	data: {
		// thes just tow var we create it
		newitem: "",
		todoList: []


	},
	methods: {
		// this meen this object we work on 
		additem: function(){
			// console.log("key-up is working")
			// $data show us the data inside the arr insted of this we can but the line under
			// var item = todo.$data.newitem
			var item = this.newitem;
			// here we do the arr in obesat way any item i put it in the input tag and press enter its gonna put it in the arr
			this.todoList.push(item);
			this.newitem = "";
		},
		removeitem: function(dele){
			// first thind we have to find the index we wanna remove
			var index = this.todoList.indexOf(dele);
			
			// array.splice(index in the arr, howmany we wanna delete, item1, ....., itemX)

			this.todoList.splice(index, 1)
		}


	}

});

// my evant data example

document.getElementById('example').addEventListener("click", eventdata);

function eventdata(e){
	console.log(e)
}

