// selectors 
var tbody = document.querySelector(".tbody")
// getiing prduct from api

var getUserList = new XMLHttpRequest;
getUserList.open('GET','https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
getUserList.onreadystatechange = function (){
    if (this.readyState === 4){
        console.log(JSON.parse(this.responseText))
        var userList = JSON.parse(this.responseText)
        function data(id, name, date, time, price, status){
            var datarow = document.createElement("tr")
            datarow.className = "row";
            var userId = document.createElement("td")
            userId.className = "coloum1"
            userId.innerText = id
            var nameOfProduct = document.createElement("td")
            nameOfProduct.className = "coloum2"
            nameOfProduct.innerText = name

            var orderDate = document.createElement("td")
            orderDate.className = "coloum3"
            orderDate.innerText = (date + " " + time)
            var cost = document.createElement("td")
            cost.className = "coloum4"
           cost.innerText = ("$" + price)
            var statusOfOrder = document.createElement("td")
            statusOfOrder.className = "coloum6"
            statusOfOrder.innerText = status 

            // data row 
            datarow.appendChild(userId)
            datarow.appendChild(nameOfProduct)
            datarow.appendChild(orderDate)
            datarow.appendChild(cost)
            datarow.appendChild(statusOfOrder)
            console.log(datarow)
            tbody.appendChild(datarow)
            console.log(tbody)
        }
        //  data(1, "av", "na", "da", "se", "add")
        for (var pos=0; pos< userList.length; pos++ ) {
            data(userList[pos].id, userList[pos].customerName, userList[pos].orderDate, userList[pos].orderTime, userList[pos].amount, userList[pos].orderStatus )
         }
 
        
    }
}
getUserList.send();