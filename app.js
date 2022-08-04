//experience

const experiences = [
    {
        id: 1,
        name: "Voluntariat - Asociatia Raza de Soare",
        startDate: "2016-06-01",
        endDate: "2018-05-01"
    },
    {
        id: 2,
        name: "Summer Practice - POCU Program Endava",
        startDate: "2022-07-11",
        endDate: "2022-09-02"
    }
];

function generateExperience(experience) {
    const experienceArea = document.createElement('div');
    const experienceName = document.createElement('p');
    const experienceStartDate = document.createElement('p');
    const experienceEndDate = document.createElement('p');
    experienceName.innerText = experience.name;
    experienceStartDate.innerText = "Start Date: " + experience.startDate;
    experienceEndDate.innerText = "End Date: " + experience.endDate;
    experienceArea.append(experienceName, experienceStartDate, experienceEndDate);
    return experienceArea;
}

function  populateExperiencesContainer(expArray) {
    const mainParent = document.getElementById('experiencesContainer');
    expArray.forEach(function(experienceObj, index) {
        const userExp = generateExperience(experienceObj);
        mainParent.appendChild(userExp);
    })
}

console.log(generateExperience(experiences[0]));
populateExperiencesContainer(experiences);