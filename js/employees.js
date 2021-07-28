function showHideSalary() {
    const elements = document.getElementsByClassName('salary');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('hideSalary');
    }

    // change button text
    const showHideButton = document.getElementById('showHideSalary');
    const hiddenSalaries = document.getElementsByClassName('hideSalary');    
    showHideButton.innerText = hiddenSalaries.length ? 'Show Salary' :'Hide Salary';
}
const employee=[];
function addelement()
{ 
    if(document.getElementById("employeename").value=='')
      
      alert("employe name is empty");
    else 
      { employee[employee.length]=document.getElementById("employeename").value;
       
      }
      //console.log(employee);
      document.getElementById("inputfield").innerHTML =employee;
}


function addelement2()
{ 
    if(document.getElementById("employeename2").value=='')
      
      alert("employe name is empty");
    else 
      { employee[employee.length]=document.getElementById("employeename2").value;
       
      }
      //console.log(employee);
      buildtable(employee);
}

function clearinput()
{
    document.getElementById('employeename').value = ''
}

function buildtable(data){
    var tableRef = document.getElementById('tableId2');
    while ( tableRef.rows.length > 0 )
    {
     tableRef.deleteRow(0);
    
    }

    var table=document.getElementById('tblbody2')
    for(var i=0;i<data.length;i++)
    {
        var row = `<tr>
							<td>${data[i]}</td>
							<td> <button onclick="deleteelement(${i})">Delete</button></td>
					    </tr>`
        table.innerHTML+=row;    
    }
}
function deleteelement(i){
    employee.splice(i,1);
    buildtable(employee);
}

function jsonstringify()
{
    const obj={
        name:document.getElementById("fname").value,
        function:document.getElementById("ffunction").value,
        salary:document.getElementById("fsalary").value
     };
    const myjson=JSON.stringify(obj);
    alert(myjson);
}