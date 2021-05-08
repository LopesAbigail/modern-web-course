function errorTreatment(error) {
    throw new Error('An error occurred while accessing object properties')
        //throw 'message'
        //throw false
        // throw {
        //     id: error.id,
        //     name: error.name,
        //     message: error.message,
        //     date: new Date
        // }
}

function printShoutName() {
    try {
        console.log(objr.name.toUpperCase() + "!!!")
    } catch (e) {
        errorTreatment(e)
    } finally {
        console.log('The end')
    }

}

const obj = { name: "Elsa" }

printShoutName(obj)