 /*
    Get the random list from API and set the min and max parameters on the form
  */

  window.onload = function() {
    // Build a system
    var names= ["Empty"];
    axios.get('http://localhost:3000/api/v1/randomNames')
        .then(function (response) {
           names= response.data.map(n=>n.name);   
           document.getElementById("list").value=names.toString().replace(/,/gm,'\r'); 

           document.getElementById("number").max=names.length;  
           document.getElementById("number").min=0;         
        })
        .catch(function (error) {
          console.log("Submit test result error: "+error);
        });
  }

  

  document.getElementById("list").onchange = function() {setMaxNumber()};


  /*
    Update the max limit of number. 
  */

  function setMaxNumber(){

    var itemList = document.getElementById("list").value.split(/\r?\n/g).map(n =>n.trim());
      itemList = itemList.filter((item, pos, self) => self.indexOf(item) === pos);
    document.getElementById("number").max = itemList.length;
  }



  
  /*
    Api random use: It Post the list and then random it. 
  */
  function randomize(theForm){

      var number = theForm.number;
      var list = theForm.list; 

      document.getElementById("resultTitle").innerHTML = "Be patient!  It may take a little while to randomize your list..."
      
      var itemList = list.value.split(/\r?\n/g).map(n =>n.trim());
      itemList = itemList.filter((item, pos, self) => self.indexOf(item) === pos); 

      axios.post('http://localhost:3000/api/v1/randomNames',itemList)
           .then(function (response) {
          axios.get('http://localhost:3000/api/v1/randomNames?n='+number.value)
               .then(function (response) {
                 document.getElementById("resultTitle").innerHTML = "Result List"; 
                 document.getElementById("result").innerHTML = response.data.map((n,i)=> (i+1)+': '+n.name).toString().replace(/,/gm,'<br/>');
                 window.scrollTo(0, 630);

               })
               .catch(function (error) {
                  console.log("Submit test result error: "+error);
               });

        })
        .catch(function (error) {
          console.log("Submit test result error: "+error);
        });  
      
  }
  