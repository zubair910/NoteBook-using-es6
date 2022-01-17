const listBox = document.getElementById("listBox")

const addTodo= ()=>{
    const input = document.getElementById("input")
   
     

     console.log(input.value.length)
     if(input.value.length>3){
         console.log("correct")

         const li = document.createElement("li")
         const liTxt = document.createTextNode(input.value)
         li.appendChild(liTxt)
         console.log(li)


         const delBtn= document.createElement("button")
         const delBtnText = document.createTextNode("DELETE")
         delBtn.appendChild(delBtnText)
         delBtn.setAttribute("onclick", "delList(this)")
         console.log(delBtn)

         const editBtn = document.createElement("button");
         const editBtnTxt = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnTxt);
        editBtn.setAttribute("onclick", "editList(this)");
        console.log(editBtn);

        li.appendChild(editBtn);
        li.appendChild(delBtn);
      
        listBox.appendChild(li);
        input.value="";
     }else{
         alert("Enter Correct Value")
     }
 }


 const delAll=()=> {
    listBox.innerHTML = "";
  }
  
  const delList=(e)=> {
   
    e.parentNode.remove();
  }
  
  const editList=(e)=> {
   
    var editValue = prompt("ENTER EDIT VALUE", e.parentNode.firstChild.nodeValue  );
    console.log(editValue);
    e.parentNode.firstChild.nodeValue = editValue;
  }


