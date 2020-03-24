const employees = [
    {
        name: {
            first: 'Andrew',
            last: 'Sheehan'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '123-455-1212'
                },
                {
                    type: 'home',
                    number: '111-222-3333'
                }
            ]
        },
        category: {
            type: 'Manager'
        }
    },
    {
        name: {
            first: 'Frank',
            last: 'Sheehan'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '222-3333-4444'
                },
                {
                    type: 'work',
                    number: '555-666-7777'
                }
            ]
        },
        category: {
            type: 'Architect'
        }
    },
    {
        name: {
            first: 'Martha',
            last: 'Stewart'
        },
        contact: {
            phones: [
                {
                    type: 'cell',
                    number: '123-456-7891'
                },
                {
                    type: 'work',
                    number: '999-999-9999'
                }
            ]
        },
        category: {
            type: 'Architect'
        }
    }
];

function findByPhone(targetPhone) {
    let results = [];

    if (targetPhone === null) {
        return results;
    }

    employees.forEach(employee => {
        if ( employee.contact.phones ) {
            employee.contact.phones.forEach(phone => {
                if ( phone.number.includes(targetPhone) ) {
                    results.push(employee);
                }
            });
        }
    });

    return results;
}

function findEmployeesByLastName(lastName) {
    let results = [];

    if (lastName === null) {
        return results;
    }

    employees.forEach(employee => {
        if ( employee.name.last.toLowerCase().includes(lastName.toLowerCase())) {
            results.push(employee);
        }
    });

    return results;
}

export {findByPhone, findEmployeesByLastName};

