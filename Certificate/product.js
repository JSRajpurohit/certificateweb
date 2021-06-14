// selectors 
var tbody = document.querySelector(".tbody")
// getiing prduct from api

var getUserList = new XMLHttpRequest;
getUserList.open('GET','https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
getUserList.onreadystatechange = function (){
    if (this.readyState === 4){
        console.log(JSON.parse(this.responseText))
        var userList = JSON.parse(this.responseText)
        function data(id, name, brand, ex, price, stockLeft){
            var datarow = document.createElement("tr")
            datarow.className = "row";
            var userId = document.createElement("td")
            userId.className = "coloum1"
            userId.innerText = id
            var nameOfProduct = document.createElement("td")
            nameOfProduct.className = "coloum2"
            nameOfProduct.innerText = name

            var productBrand = document.createElement("td")
            productBrand.className = "coloum3"
            productBrand.innerText = brand
            var date = document.createElement("td")
            date.className = "coloum5"
            date.innerText = ex
            var cost = document.createElement("td")
            cost.className = "coloum4"
           cost.innerText = ("$" + price)
            var stocks = document.createElement("td")
            stocks.className = "coloum6"
            stocks.innerText = stockLeft

            // data row 
            datarow.appendChild(userId)
            datarow.appendChild(nameOfProduct)
            datarow.appendChild(productBrand)
            datarow.appendChild(date)
            datarow.appendChild(cost)
            datarow.appendChild(stocks)
            console.log(datarow)
            tbody.appendChild(datarow)
            console.log(tbody)
        }
        //  data(1, "av", "na", "da", "se", "add")
        for (var pos=0; pos< userList.length; pos++ ) {
            data(userList[pos].id, userList[pos].medicineName, userList[pos].medicineBrand, userList[pos].expiryDate, userList[pos].unitPrice, userList[pos].stock )
         }
 
        
    }
}
getUserList.send();