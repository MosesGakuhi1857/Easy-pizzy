$(document).ready(function () {

    $(".pick-delivery").click(function () {
        let pizzaName = $("#pizza option:selected").val();
        let crust = $(" #crust option:selected").val();
        let toppings = $("#toppings option:selected").val();
        let size = $("#size option:selected").val();
        let quantity = $("#quantity option:selected").val();
        console.log(pizzaName);
        console.log(crust);
    });

    // let price, totalPrice;
    // switch (flavour) {
    //     case flavour = "vegtikka":
    //         switch (size) {
    //             case size = "regular":
    //                 price = 300;
    //                 if (crust === "thin") {
    //                     totalPrice = (price * number) + 100;
    //                 } else if (crust === "thick") {
    //                     totalPrice = (price * number) + 150;
    //                 } else if (crust === "flatbread") {
    //                     totalPrice = (price * number) + 180;
    //                 } else {
    //                     totalPrice = (price * number) + 280;
    //                 }
    //                 break;
    //             case size = "medium":
    //                 price = 600;
    //                 if (crust === "thin") {
    //                     totalPrice = (price * number) + 100;
    //                 } else if (crust === "thick") {
    //                     totalPrice = (price * number) + 150;
    //                 } else if (crust === "flatbread") {
    //                     totalPrice = (price * number) + 180;
    //                 } else {
    //                     totalPrice = (price * number) + 280;
    //                 }
    //                 break;
    //             case size = "large":
    //                 price = 1200;
    //                 if (crust === "thin") {
    //                     totalPrice = (price * number) + 100;
    //                 } else if (crust === "thick") {
    //                     totalPrice = (price * number) + 150;
    //                 } else if (crust === "flatbread") {
    //                     totalPrice = (price * number) + 180;
    //                 } else {
    //                     totalPrice = (price * number) + 280;
    //                 }
    //                 break;
    //         }
    //         break;

    let price,totalPrice;
    switch (pizzaName) {
        case pizzaName = "BIANCA":
            switch (size) {
                case size = "large":
                price = 1000;
        if ( crust === "crisy"){
            totalPrice=(price * quantity) + 250
        } else if (crust === "stuffed"){
            totalPrice=(price*quantity)+ 160
        } else if (crust === "Glutten-free"){
            totalPrice = (price * quantity)+ 220
        };
            };
           break;
           case size = "medium":
               price = 800;
               if(crust === "crispy"){
                   totalPrice=(price* quantity)+ 250

               } else if (crust === "stuffed"){
                   totalPrice= (price * quantity)+ 160

               } else if (crust === "Glutten-free"){
                   totalPrice= (price*quantity)+220
               };
               break;

               case size = "small":
                   price = 500;
                   if (crust === "crispy"){
                       totalPrice=(price *quantity)+250
                   }else if (crust === "stuffed"){
                       totalPrice=(price* quantity)+180
                   }else if (crust === "Glutten-free"){
                       totalPrice=(price*quantity)+ 220
                   };

    }






    //             if (crust === "thin") {
    //                 totalPrice = (price * number) + 100;
    //             } else if (crust === "thick") {
    //                 totalPrice = (price * number) + 150;
    //             } else if (crust === "flatbread") {
    //                 totalPrice = (price * number) + 180;
    //             } else {
    //                 totalPrice = (price * number) + 280;
    //             }
    //             break;



});