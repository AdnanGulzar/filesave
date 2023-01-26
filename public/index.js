const btnSave=  document.querySelector(".main")
const textArea=  document.querySelector("#textarea")
const fname=document.querySelector(".fname")
const select=document.querySelector("#select")

btnSave.addEventListener("submit",(e)=>{
e.preventDefault()
    
const blobdata=new Blob([textArea.value],{type:'text/plain'})

const burl=URL.createObjectURL(blobdata)
console.log(burl)
var link = document.createElement("a"); // Or maybe get it from the current document
link.href = burl;
link.download = `${fname.value}.${select.value}`;

document.body.appendChild(link);
link.click()

})