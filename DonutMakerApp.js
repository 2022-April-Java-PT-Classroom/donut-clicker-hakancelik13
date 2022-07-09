
import DonutMaker from "./Donut-Maker";
//console.log('App file firing');
//import VirtualPet from "./virtualpet";
import { displayDonutStats } from "./utility-functions/utilities";

renderPage();

function renderPage() {
    addAPet();
}


//const donut = new DonutMaker(numDonuts.value, numAutoclickers.value, numMultipliers.value);

function addAPet() {
    const createBtn = document.querySelector('#submit');
    const nameInput = document.querySelector('#name');
    const descriptionInput = document.querySelector('#description');

    createBtn.addEventListener('click', () => {
        const createdDonut = new DonutMaker(0,0,0,0);
        const donutsList = document.querySelector('#myDonuts');
        const donutInfoPara = document.createElement('p');
        const donutInfoSection = document.createElement('section');

        displayDonutStats(donutInfoPara, createdDonut);

        donutInfoSection.appendChild(donutInfoPara);

        const addBtn = document.createElement('button');
        const autoBtn = document.createElement('button');
        const costBtn = document.createElement('button');
        const multBtn= document.createElement('button');
        const zeroBtn= document.createElement('button');
        addBtn.innerText = 'Add Donut';
        autoBtn.innerText = 'Auto Selection';
        costBtn.innerText = 'Final Cost'
        multBtn.innerText = 'Multi Selection'
        zeroBtn.innerText = 'Cancel Selection'
        donutInfoSection.appendChild(addBtn);
        donutInfoSection.appendChild(autoBtn);
        donutInfoSection.appendChild(costBtn);
        donutInfoSection.appendChild(multBtn);
        donutInfoSection.appendChild(zeroBtn);

        donutsList.appendChild(donutInfoSection);

        addBtn.addEventListener('click', () => {
            createdDonut.addDonut();


            displayDonutStats(donutInfoPara, createdDonut);
        });
        autoBtn.addEventListener('click', () => {
            createdDonut. addAutoclicker2 ();
            

            displayDonutStats(donutInfoPara, createdDonut);
        });
        

        multBtn.addEventListener('click', () => {
           //createdDonut.numDonuts+=1;
              
          
               createdDonut.numMultipliers=Math.pow(1.2,createdDonut.numDonuts).toFixed(2);
         

            displayDonutStats(donutInfoPara, createdDonut);
        })

        costBtn.addEventListener('click', () => {
               
             for (let i=0; i<=1;i++){
                
                createdDonut.multiplierCost+=(createdDonut.multiplierCost+(createdDonut.multiplierCost*(10)/100)).toFixed(2);
             }
             createdDonut.multiplierCost=createdDonut.multiplierCost*createdDonut.numDonuts;
             displayDonutStats(donutInfoPara, createdDonut);
         })

        zeroBtn.addEventListener('click', () => {
           createdDonut.makeZero();
          
           displayDonutStats(donutInfoPara, createdDonut);
        } )




    });


}











// Select increment and decrement buttons
//const incrementCount = document.getElementById("increment-count");
//const decrementCount = document.getElementById("decrement-count");


// Select total count
//const totalCount = document.getElementById("total-count");

// Variable to track count
// var count = 0;

// // Display initial count value
// totalCount.innerHTML = count;

// // Function to increment count
// const addAuto = () => {
//   count += donut.addAutoclicker();
//   totalCount.innerHTML = count;
// };

// // Function to decrement count
// const addAuto2 = () => {
//   count += donut.addAutoclicker();
//   totalCount.innerHTML = count;
// };

// // Add click event to buttons
// incrementCount.addEventListener("click", addAuto);
// decrementCount.addEventListener("click", addAuto2);



