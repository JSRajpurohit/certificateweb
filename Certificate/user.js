// selectors 
var tbody = document.querySelector(".tbody")


// getiing prduct from api

var getUserList = new XMLHttpRequest;
getUserList.open('GET','https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true);
getUserList.onreadystatechange = function (){
    if (this.readyState === 4){
        console.log(JSON.parse(this.responseText))
        var userList = JSON.parse(this.responseText)
        function data(id, avatar, name, date, sex, address){
            var datarow = document.createElement("tr")
            datarow.className = "row";
            var userId = document.createElement("td")
            userId.className = "coloum1"
            userId.innerText = id
            var avatarImg = document.createElement("td")
            avatarImg.className = "coloum2"

            // avatar img 
            var userImg = document.createElement("img")
            userImg.className ="avatar"
            userImg.src = avatar
            // append img to td
            avatarImg.appendChild(userImg)

            var userName = document.createElement("td")
            userName.className = "coloum3"
            userName.innerText = name
            var userDOB = document.createElement("td")
            userDOB.className = "coloum4"
           userDOB.innerText = date
            var userGender = document.createElement("td")
            userGender.className = "coloum5"
            userGender.innerText = sex
            var userAddress = document.createElement("td")
            userAddress.className = "coloum6"
            userAddress.innerText = address

            // data row 
            datarow.appendChild(userId)
            datarow.appendChild(avatarImg)
            datarow.appendChild(userName)
            datarow.appendChild(userDOB)
            datarow.appendChild(userGender)
            datarow.appendChild(userAddress)
            console.log(datarow)
            tbody.appendChild(datarow)
            console.log(tbody)
        }
        //  data(1, "av", "na", "da", "se", "add")
        for (var pos=0; pos< userList.length; pos++ ) {
            data(userList[pos].id, userList[pos].profilePic, userList[pos].fullName, userList[pos].dob, userList[pos].gender, userList[pos].currentCity )
         }
         var search = document.querySelector('#myInput')


            search.addEventListener('keyup', function searchTable() {
                var input, filter, found, table, tr, td, i, j;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("tbody");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td");
                    for (j = 0; j < td.length; j++) {
                        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                            found = true;
                        }
                    }
                    if (found) {
                        tr[i].style.display = "";
                        found = false;
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            } )
         function searchValue(scr){
            var dt = userList.filter((i) =>i.fullName.includes(scr))
           // console.log(dt)
        
        }
         
          
 
        
    }
}
getUserList.send();

