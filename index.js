      let nameArr =[];
      //create 'prompt' to ask for name;
      //'name' is here as a GLOBAL VARIABLE that 'anyone' in the <script> can freely access and modify;
      nameArr[0] = prompt("Hello! What is your first name?");
      nameArr[1] = prompt("Hello! What is your last name?");
//push add elements to the end of an Array
      // nameArr.push(fname);
      // nameArr.push(lname);
      //this is a FUNCTION DECLARATION;

      //userName is an Array of 'first name' and 'last name';
      function checkName(userName) {
        //Check if name is a blank string;
        if (!userName[0] || !userName[1]) {
            //If either first or last name is blank, ask again and be sure to capture/overwrite the value of userFirstName and/or userLastName ...runs if checkName is false-y;
            //Developer's note - We are requiring both pieces of information even if only one is blank;


          userName[0] = prompt(
            "Are you there? What is your first name?"
          );
          userName[1] = prompt(
            "Are you there? What is your last name?"
          );

          //RECURSION - fxn calls itself again;
          userName = checkName(userName);

        }

        return userName;
      }
      //this is a FUNCTION EXPRESSION;
      // let checkName = function() {};

      //We capture what is RETURNED by checkName and overwrite 'name' with that value;
      nameArr = checkName(nameArr);
      // Use 'alert' to say hello to the user, using the name they passed in;
      document.querySelector("#greeting").innerHTML = `<p>Hello, ${nameArr[0]} ${nameArr[1]};</p>`;
