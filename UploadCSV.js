function Upload(){
var fileUpload = document.getElementById("fileUpload");
var array = [];
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/; //Here specifies that it will only accept .csv files
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                  
                    var table = document.createElement("table");  //Create table for the data 
                    
                   
                    var rows = e.target.result.split("\n");

                   
                    for (var i = 0; i < rows.length; i++) {
                        var cells = rows[i].split(";");
                       
                        //a command to push all the names into a new array
                        if(i>=1){
                            array.push(rows[i]);

                            array.sort();
                            debugger
                        }

                        RemoveDuplicate(array);

                        SeperateArray(array);

                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            for (var j = 0; j < cells.length; j++) {
                                var cell = row.insertCell(-1);
                                cell.innerHTML = cells[j];
                            }
                        }
                    }
                    debugger
                  
                    debugger
                    var dvCSV = document.getElementById("dvCSV");
                   
                    dvCSV.innerHTML = "";
                    
                    dvCSV.appendChild(table);
                }
             
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
    }


    function RemoveDuplicate(array)   //Removes the duplicates from the array
    {
        let chars = array;

        let uniqueChars = chars.filter((c, index) => {        
            return chars.indexOf(c) === index
        });
        debugger
    }


    function SeperateArray(array)  //Using Regular Expressions to filter the male and female
    {
        var mainArray = array;
        var male = [];
        var female = [];

        var regexM = / ;m / 
        if (regexM.test(mainArray))
        {
            male.push(mainArray);
        }
        debugger
        var regexF = / ;f / 
        if (regexF.test(mainArray))
        {
            female.push(mainArray);
        }
        debugger
    };
    



    function saveFile(){  //function to exprt the table data to a TXT file
    	
        debugger;
    	const name = document.getElementById("dvCSV"); //Gets data from the table
        
        //Store the data
        let data = 
            ' Name: ' + name.innerText  + '\n'
             ;
             debugger;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'output.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }
  