function getFormvalue() {
   let fname=document.getElementsByName("fname");
	let lname=document.getElementsByName("lname");
	let FirstName=fname[0].value;
	let LastName=lname[0].value;
	alert(`${FirstName} ${LastName}`)
}
