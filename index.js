
      //create 'prompt' to ask for name;
      //'name' is here as a GLOBAL VARIABLE that 'anyone' in the <script> can freely access and modify;
      let name = prompt("Hello! What is your name?");
      //this is a FUNCTION DECLARATION;
      function checkName(userName) {
        //Check if name is a blank string;
        if (userName === "") {
            //If the name is blank, ask again and be sure to capture/overwrite the value of userName;
          userName = prompt(
            "Are you there? What is your name?"
          );

          //RECURSION - fxn calls itself again;
          userName = checkName(userName);

        }

        return userName;
      }
      //this is a FUNCTION EXPRESSION;
      // let checkName = function() {};

      //We capture what is RETURNED by checkName and overwrite 'name' with that value;
      name = checkName(name);
      // Use 'alert' to say hello to the user, using the name they passed in;
      document.querySelector("h1").textContent = `Hello, ${name}`;
