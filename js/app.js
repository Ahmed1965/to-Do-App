

//ul list
var list = document.getElementById("list")



function addToDo() {
    var add = document.getElementById("to-do")
    var li = document.createElement("li")
    var liTxt = document.createTextNode(add.value)
    li.appendChild(liTxt)
    list.appendChild(li)
    list.style.listStyleType = "none"
        
    add.value = "";

    
    var editbtn = document.createElement("button")
    var editBtnTxt = document.createTextNode("Edit")
    editbtn.appendChild(editBtnTxt)
    editbtn.setAttribute("id", "editbtn")

     
    // delbtn.setAttribute("id", "editBtn")
    editbtn.setAttribute("onclick", "editBtn(this)")

    li.appendChild(editbtn)

    var delbtn = document.createElement("button")
    var deltbtnTxt = document.createTextNode("Delete")
    delbtn.appendChild(deltbtnTxt)
    
    delbtn.setAttribute("id", "del")
    delbtn.setAttribute("onclick", "delt(this)")
    li.appendChild(delbtn)

      
    // console.log(li)
}

function delt(e) {
    e.parentNode.remove()
    
        
}

function editBtn(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val)
    e.parentNode.firstChild.nodeValue = editValue
    

    
    console.log(e.parentNode.firstChild)
}

function delall() {
    list.innerHTML = ""
    
    

}