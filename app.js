const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 9
            break;
        case 'wednesday':
            return 3
            break;
        case 'thursday':
            return 10
            break;
        case 'friday':
            return 4
            break;
        case 'saturday':
            return 11
            break;
        case 'sunday':
            return 0
            break;
        default:
            return 'Error!';
    }
};

const getActualHours = () => {
   return getSleepHours('monday') + 
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

};

const getIdealSleepHours = () => {
    const idealHours = 7.5;
        return idealHours * 7;   
}

const calculateSleepDebt = () => {
    const actualHours = getActualHours();
    const idealHours = getIdealSleepHours();
}

if (actualHours === idealHours) {
    console.log('Perfect snooze!')
} else if (actualHours > idealHours) {
    console.log(`More snooze than needed! You got ${actualHours + idealHours} more than expected!`)
} else {
    console.log(`Bad snooze! You got ${actualHours - idealHours} less than needed!`)
};

calculateSleepDebt();