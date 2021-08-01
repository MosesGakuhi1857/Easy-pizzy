$(document).ready(function () {

    $(".pick-delivery").click(function () {
     9
        let crust = $(" #crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let quantity = $("#quantity").val();
        console.log(pizzaName);
        console.log(crust);
    })
    pizzaSelectChange = function(){
        console.log("mayonnaise")
        
        this.pizzaName = $("#pizza option:selected").val();
        console.log(this.pizzaName);
        
        document.getElementById("pizzaname").innerHTML=this.pizzaName;
    }


    function getPizza  (pizzaName, size, crust, toppings, quantity, totalPrice){
        this.pizzaName = pizzaName;
        this.size=size;
        this.crust=crust;
        this.toppings=toppings;
        this.quantity=quantity;
        this.total=totalPrice;
    }



    var pizzaName = $("#pizza option:selected").val();
    var toppings = $("#toppings option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $(" #crust option:selected").val();
    let quantity = $("#quantity").val();
    let price, totalPrice;
    switch (pizzaName) {
        case pizzaName = "bianca":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;


        case pizzaName = "toni":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "spinotta":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "Glutten-free") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "Glutten-free") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "soprano":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "pepperoni":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "vegetale":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "chicken":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "honey":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

        case pizzaName = "gianni":
            switch (size) {
                case size = "large":
                    price = 1000;
                    if (crust === "crisy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };

                    break;
                case size = "medium":
                    price = 800;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250

                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 160

                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;

                case size = "small":
                    price = 500;
                    if (crust === "crispy") {
                        totalPrice = (price * quantity) + 250
                    } else if (crust === "stuffed") {
                        totalPrice = (price * quantity) + 180
                    } else if (crust === "glutten") {
                        totalPrice = (price * quantity) + 220
                    };
                    break;
            }
            break;

 }
    switch (toppings) {
        case toppings = "pineapple":
            totalPrice = totalPrice + 150;
            break;
        case toppings = "tomato":
            totalPrice = totalPrice + 120;
            break;
        case toppings = "avocado":
            totalPrice = totalPrice + 120;
            break;
        case toppings = "beef":
            totalPrice = totalPrice + 180;
            break;
        case toppings = "chicken":
            totalPrice = totalPrice + 170;
            break;
        case toppings = "bread":
            totalPrice = totalPrice + 150;
            break;
    }

let newOrder = new getPizza (pizzaName,size,crust,toppings,quantity,totalPrice);
console.log(totalPrice);
console.log(this.pizzaName);
// $("#receipt").append('<tr><td id="pizzaname">'+this.pizzaName +'</td><td id="pizzasize">' + 
// newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatoppings">'+newOrder.toppings+'</td><td id="pizzaquantity">'+newOrder.quantity+'</td><td id="total">'+newOrder.totalPrice+'</td></tr>');


function pizzaSelect(){
    console.log ("mayonniaes")
 }
});