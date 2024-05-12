const listWorkExperience = document.querySelector('#listWorkExperience');
console.log(listWorkExperience)

let dataWorkExperience = [
    {
        title: "tempat",
        desc: "posisi",
    },
];
const addWorkExperience = (event) =>{
    event.preventDefault();
    console.log('tes')

    let messageTitle = prompt('Add your place of work');
    let messageDesc = prompt('Add your job position');

    let newData = {
        title: messageTitle,
        desc: messageDesc,
    };
console.log(newData)

    dataWorkExperience.push(newData);
    console.log(dataWorkExperience)

    newData = {
        title: "messageTitle",
        desc: "messageDesc",
    };

    dataWorkExperience.map ((item) =>{
        let displayList = document.createElement("li");
        let displayTitle = document.createElement("p");

        displayTitle.innerHTML = '<p class="tags">$(item.title)<br /><span>$(item.desc)<span>2024-now</span></span></p>';
     displayList.appendChild(displayTitle);
     listWorkExperience.appendChild(displayList);
    });
};