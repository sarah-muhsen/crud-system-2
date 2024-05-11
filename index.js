var productInputName=document.getElementById("inputProductName")
var productInputCatagory=document.getElementById("inputProductCatagory")
var productInputPrice=document.getElementById("inputProductPrice")
var productInputDescription=document.getElementById("inputProductDescription")
var updatebtn=document.getElementById("updatebtn");
var addbtn=document.getElementById("addbtn");  
productlist=[];
function addproduct(){
    var product={
name:productInputName.value ,
catagory:productInputCatagory.value ,
Price:productInputPrice.value ,
desc:productInputDescription.value 
    }
    productlist.push(product)
    displaydata();
    // clearform()
}
function clearform(){
    productInputName.value="";
    productInputCatagory.value="";
    productInputPrice.value="";
    productInputDescription.value="";
}
function displaydata(){
    var cartona=""
    for(var i=0; i<productlist.length;i++){
        cartona+=`
        <tr>
        <td>${i}</td>
    <td>${productlist[i].name}</td>
    <td>${productlist[i].catagory}</td>
    <td>${productlist[i].price}</td>
    <td>${productlist[i].desc}</td>
<td>
 <button onClick="setdata(${i})"class="btn btn-sm btn-warning">update</button>
<button onClick="deleteitem(${i})"class="btn btn-sm btn-danger">delete</button>
</td>
</tr>
        `   
    }
    document.getElementById("tablebody").innerHTML=cartona;
}
 function deleteitem(index){
 productlist.splice(index,1)
 displaydata()
}
function setdata(index){
    var currentproduct=productlist[index];
 productInputName.value=currentproduct.name;
 productInputPrice.value=currentproduct.Price;
 productInputCatagory.value=currentproduct.catagory;
 productInputDescription=currentproduct.desc;

}
function validname(){
    var text=productInputName.value;
    var regexname=/^[a-z][A-Z]{3,8}$/
    if(regexname.test(text)) {
        inputProductName.cl.add("is-valid")
        inputProductName.classlist.remove("is-invalid")
    }
    else{
        inputProductName.classList.remove("is-valid")
        inputProductName.classlist.add("is-invalid")
    }

}