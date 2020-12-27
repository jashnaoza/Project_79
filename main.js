menu_list_array=["chicken tandori pizza",
                "veg supreme pizza",
            "paneer tikka pizza",
        "deluexe veggie pizza",
    "veg extravaganza pizza" ];

    function getMenu() {
        var htmldata;
        htmldata= "<ol class='menulist'>"
        menu_list_array.sort();
        for (var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'

        }
        htmldata=htmldata + "</ol>"
        document.getElementById("display_menu").innerHTML = htmldata;
    }


    function addItem() {
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section clas='cards'>"
        for (var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class' + '<img src= "images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'
        }
        htmldata=htmldata+"</section>"
        document.getElementById("display_addedMenu").innerHTML = htmldata;
    }