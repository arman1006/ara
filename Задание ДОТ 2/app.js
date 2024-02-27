function findDuplicateObjects (arrayOfObjects){
    const seenObjects = {};
    const duplicates = [];

    arrayOfObjects.forEach (obj => {
        const objProps = 
        Object.entries(obj).toString();
        if(seenObjects[objProps]){
            duplicates.push();
        }else { 
            seenObjects[objProps] = true;

        }
    });
    return duplicates;
}

const arrayOfObjects = [
    {id: 1, name: 'Валеричк'},
    {id: 2, name: 'Валеричк'},
    {id: 3, name: 'Валерчик'},
    {id: 4, name: 'Герман'},
    {id: 5, name: 'Рафик'}
];

const duplicates = findDuplicateObjects(arrayOfObjects);
console.log(duplicates);