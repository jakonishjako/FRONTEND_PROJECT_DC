document.addEventListener('DOMContentLoaded',()=>
{
isvalid=true
let username=document.getElementById('name')
let username_alert=document.getElementById('namepar')
let gmail=document.getElementById('email')
let gmailalert_alert=document.getElementById('emailpar')
let password=document.getElementById('password')
let pass_alert=document.getElementById('passpar')
username.addEventListener('input',()=>
{
	if (username.value.trim().length<5)
	{
		username_alert.innerHTML='Name should have atleast 5 characters'
		isvalid=false
	}
	else
	{
		sessionStorage.setItem("name", username.value); 
		username_alert.innerHTML=''
		isvalid=true
	}
})
 const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;
      gmail.addEventListener('input', () => {
        let gmail_value = gmail.value;
        if (gmail_value.trim() === '') 
        {
          gmailalert_alert.innerHTML = 'Gmail cannot be empty';
        }
         else if (!emailRegex.test(gmail_value.toLowerCase()))
        {
          gmailalert_alert.innerHTML = 'Invalid Email';
        } 
        else 
        {
          gmailalert_alert.innerHTML = '';
        }
      })
password.addEventListener('input',()=>
{
	let pass_value=password.value
	if (pass_value!='' && (pass_value.length>=6 &&pass_value.match(/[a-zA-Z]/)&&pass_value.match(/\d/))) 
	{
       document.getElementById('passpar').innerHTML=""
       isvalid=true
	}
	else
	{
		document.getElementById('passpar').innerHTML="*Password should contain 6 characters with digit & alphabet"
		isvalid=false
	}
})
})
function validation(event)
{
	event.preventDefault();
	event.target.blur();//for removing the focus state on the button
	let username=document.getElementById('name').value.trim()
	let gmail=document.getElementById('email').value.trim()
	let password=document.getElementById('password').value.trim()
	const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;
	if (username.length<5) 
	{
		document.getElementById('namepar').innerHTML='Name should have atleast 5 characters'
		isvalid=false
	}
	if (!emailRegex.test(gmail.toLowerCase())) 
	{
		document.getElementById('emailpar').innerHTML='invalid email'
		isvalid=false
	}
	if (!(password!='' && (password.length>=6 &&password.match(/[a-zA-Z]/)&&password.match(/\d/))))
	{
       document.getElementById('passpar').innerHTML="*Password should contain 6 characters with digit & alphabet"
       isvalid=false
	}
	if (isvalid) 
	{
		document.getElementById('result').innerHTML="LOGIN SUCCESS HERO!!"
		document.getElementById('result').style.color='white'
		setTimeout(()=>{window.location.href = "JAVASCRIPT_PROJECT.html";},1000)
    }
    else
    {
    	document.getElementById('result').innerHTML="*FILL THE DETAILS*"
    	document.getElementById('result').style.color='red'
    }
}
function cancel()
{
	event.preventDefault()
	window.location.replace("JAVASCRIPT_PROJECT.html");
}
