function factory() {
    let dose = 0;

    function getDose() {
        return dose;
    }

    function setDose(newDose) {
        dose = newDose;
    }

    return { getDose, setDose };
}

function trackDose(medicationName, initialDose) {
    function getInstructions(name, dose) {
        console.log(`Take ${dose} of ${name}`);
    }

    getInstructions(medicationName, initialDose);
}

function adjustDosage(doctorPin, newDosage) {
    if (doctorPin === 1234 && newDosage > 0) {
        const med = factory();
        med.setDose(newDosage);
    }
}
        


    
