$(document).ready(function () {

    $(".pick-delivery").click(function (event) {
        $(".form2").show();
        event.preventDefault()
    })
    $(".pick").click(function (event) {
        alert("thank you our trusted customer for shopping with us.Don't forget to leave your comment on our services")

    })

    $(".addCart").click(function (event) {
        let pizzaName = $("#pizza option:selected").val();
        let crust = $(" #crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let quantity = $("#quantity").val();
        let total = 0;

        // let pizzaName = this.pizzaName;
        // let crust = this.crust;
        // let toppings = this.toppings
        // let size = this.size;
        // let quantity = this.quantity;
        // let price, totalprice;
        // console.log(pizzaName);
        // console.log(crust);


        console.log(pizzaName);

        switch (pizzaName) {
            case pizzaName = "bianca":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                            console.log(total);
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;


            case pizzaName = "toni":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") + 220

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                            console.log(total);


                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "spinotta":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "Glutten-free") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "Glutten-free") {
                            total = (price * quantity) + 220
                        };
                        break;
                        totalprice = total;


                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "soprano":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "pepperoni":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "vegetale":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "chicken":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "honey":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

            case pizzaName = "gianni":
                switch (size) {
                    case size = "large":
                        price = 1000;
                        if (crust === "crisy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };

                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250

                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 160

                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;

                    case size = "small":
                        price = 500;
                        if (crust === "crispy") {
                            total = (price * quantity) + 250
                        } else if (crust === "stuffed") {
                            total = (price * quantity) + 180
                        } else if (crust === "glutten") {
                            total = (price * quantity) + 220
                        };
                        break;
                }
                break;

        }
        switch (toppings) {
            case toppings = "pineapple":
                total = total + 150;
                break;
            case toppings = "tomato":
                total = total + 120;
                break;
            case toppings = "avocado":
                total = total + 120;
                break;
            case toppings = "beef":
                total = total + 180;
                break;
            case toppings = "chicken":
                total = total + 170;
                break;
            case toppings = "bread":
                total = total + 150;
                break;
        }
        console.log(total);

        let newOrder = new getPizza(pizzaName, size, crust, toppings, quantity, total);
        console.log(pizzaName);

        // let newOrder = getPizza(pizzaName, size, crust, toppings, quantity, total);

        $("#receipt").append('<tr><td id="pizzaname">' + newOrder.pizzaName + '</td><td id="pizzasize">' +
            newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatoppings">' + newOrder.toppings + '</td><td id="pizzaquantity">' + newOrder.quantity + '</td><td id="total">' + newOrder.total + '</td></tr>');

        event.preventDefault();


    });
    // appending
    pizzaSelectChange = function () {
        console.log("mayonnaise")

        this.pizzaName = $("#pizza option:selected").val();
        console.log(this.pizzaName);

        //document.getElementById("pizzaname").innerHTML = this.pizzaName;
    }

    sizeSelectChange = function () {
        this.size = $("#size option:selected").val();
        console.log(this.size);

        //document.getElementById("pizzasize").innerHTML = this.size;
    }

    crustSelectChange = function () {
        this.crust = $("#crust option:selected").val();
        console.log(this.crust);

        // document.getElementById("pizzacrust").innerHTML = this.crust;
    }

    toppingsSelectChange = function () {
        this.toppings = $("#toppings option:selected").val();
        console.log(this.crust);

        //document.getElementById("pizzatoppings").innerHTML = this.toppings;
    }

    quantitySelectChange = function () {
        this.quantity = $("#quantity").val();
        console.log(this.quantity);

        //   document.getElementById("pizzaquantity").innerHTML = this.quantity;
    }
    // totalprice = total ;
    // document.getElementById("total").innerHTML=totalprice;
    // end of appending

    function getPizza(pizzaName, size, crust, toppings, quantity, totalprice) {
        this.pizzaName = pizzaName;
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.quantity = quantity;
        this.total = totalprice;

        // let pizzaName = $("#pizza option:selected").val();
        // let crust = $(" #crust option:selected").val();
        // let quantity = $("#quantity").val();
        //  let price, total;
        // function pizzaSelect() {
        //     console.log("mayonniaes")
        // }


        $(".checkout").click(function (event) {
            let customerName = $("#customerName").val();
            let customerLocation = $("#customerLocation").val();
            let customerTel = $("#customerTel").val();
            let totalCost = totalprice + 250;
            $("#form2").toggle(),
                // alert(customerName +' '+"your delivery request has been received and will be delivered in 45 minutes time, at "+ customerLocation +" once the yummy gets at the specified location you will be contacted on "+ customerTel +" so put your phone close.Your total cost will be"+ total+250 )


                $("#customerMessage").append(customerName + ' ' + "your delivery request has been received and will be deliverd at " + customerLocation + ", once the food arrives you will be contacted on this number " + customerTel + " your total will be " + totalCost + " plus delivery fee thankyou for shopping with easy pizzy ");
               
            event.preventDefault();
            $("#customerMessage").slidedown(4000);
        })

    }

});