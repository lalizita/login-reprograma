fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(objJavascript => console.log(objJavascript))
.catch(err => console.log(err))
