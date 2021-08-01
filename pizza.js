$(document).ready(function () {

    $(".pick-delivery").click(function () {
        let pizzaName = $("#pizza option:selected").val();
        let crust = $(" #crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let quantity = $("#quantity").val();
        console.log(pizzaName);
        console.log(crust);
    })

    let order = (p, s, c, t, n, total) => {
        return {p, s, c, t, n, total};
    };


    let price, totalPrice;
    var pizzaName = $("#pizza option:selected").val();
    let toppings = $("#toppings option:selected").val();
    let size = $("#size option:selected").val();
    let quantity = $("#quantity").val();
    
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

let newOrder = order (pizzaName,size,crust,toppings,quantity,totalPrice);
console.log(newOrder);

});