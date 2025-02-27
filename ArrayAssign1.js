let tasks = [];
function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks
        .map((task, index) => `<li>
                                    ${task} 
                                    <button class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
                                </li>`).join('');
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function clearTasks() {
    tasks = [];
    updateTaskList();
}

function addTask() {
    const task = document.getElementById('taskInput').value.trim();
    if (task) {
        console.log(tasks)
        tasks.push(task);
        document.getElementById('taskInput').value = '';
        updateTaskList();
    } else {
        alert("Please enter a task!");
    }
}


//second assignment

let marks = [];
 
function addMark() {
    let mark = document.getElementById('markInput').value;
    if (mark !== "" && !isNaN(mark)) {
        marks.push(parseInt(mark));
        document.getElementById('markInput').value = "";
        displayMarks();
    }
}

function displayMarks() {
    document.getElementById('marksDisplay').innerText = "Marks: " + marks.join(", ");
}

function calculateStats() {
    if (marks.length > 0) {
       const total = marks.reduce((sum , mark) => sum + mark, 0);
        sumForLoop = 0;
        for(i=0;i<marks.length;i++){
            sumForLoop +=marks[i];
        }
    }

    let sum = marks.reduce((a, b) => a + b, 0);
    let average = sum / marks.length;
    let maxMark = Math.max(...marks);
    let minMark = Math.min(...marks);

    document.getElementById('result').innerHTML = `
        
        Average Mark: ${average.toFixed(2)}<br>
        Maximum Mark: ${maxMark}<br>
        Minimum Mark: ${minMark}
    `;
}

//Assignment 3 : Search in an Array

const carBrands = ["Toyota" , "Honda", "Ford","BMW","Audi","Kia","Tesla"]

     function searchCar(){
        const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
        const searchResult = document.getElementById('searchResults');

        const filteredBrands = carBrands.filter(brand => brand.toLowerCase().includes(searchInput));

        searchResult.innerHTML = filteredBrands.length
        ?filteredBrands.map(brand => `<li>${brand}</li>`).join('')
        :'<li>No matches found</li>';



     }

     //Assignment 4:Even and odd number

     let number = [];
 
     function addNumber() {
         let num = document.getElementById('numberInput').value;
         if (num !== "" && !isNaN(num)) {
             number.push(parseInt(num));
             document.getElementById('numberInput').value = "";
             displayNumber();
         }
     }
     
     function displayNumber() {
         document.getElementById('numberDisplay').innerText = "number: " + number.join(", ");
     }

     function showEven(){

        const evenNumbers = number.filter(num => num % 2 === 0 && !isNaN(num));
       
      document.getElementById('evenResult').value = evenNumbers.join(', ');
    
      } // Output: [2, 4, 6, 8, 10]

      function showOdd(){

        
      
        const oddNumbers = number.filter(num => num % 2 !== 0 && !isNaN(num));
      document.getElementById('oddResult').value = oddNumbers.join(', ');
      } // Output:

      //Asignment 5 : sort name Alphabetically

      let Name = [];
 
      function addName() {
          let num = document.getElementById('nameInput').value;
          
              Name.push((num));
              document.getElementById('nameInput').value = "";
              displayName();
          
      }
      
      function displayName() {
          document.getElementById('nameDisplay').value = "Name: " + Name.join(", ");
      }

      function Sort(){

      sortName = Name.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      document.getElementById('nameResult').value = sortName.join(',');

      }