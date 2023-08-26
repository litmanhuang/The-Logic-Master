let studentCarnapList = [];

function studentCarnap (id, email, firstName, lastName, challenge1, challenge2,challenge3, challenge4, challenge5, challenge6, challenge7, challenge8, challenge9, challenge10, challenge11, challenge12){
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.challenge1 = challenge1
    this.challenge2 = challenge2
    this.challenge3 = challenge3
    this.challenge4 = challenge4
    this.challenge5 = challenge5
    this.challenge6 = challenge6
    this.challenge7 = challenge7
    this.challenge8 = challenge8
    this.challenge9 = challenge9
    this.challenge10 = challenge10
    this.challenge11 = challenge11
    this.challenge12 = challenge12
}

async function fetchCarnapStudentData() {
    let myCourse = "Tartu%20-%20Introduction%20to%20Logic%20(Eng)";
    let instructor = "litmanhuang@gmail.com";
    let apiKey = "bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ";

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey
        }
    };

    try {
        const response = await fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${myCourse}/students`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }

    // let mockStudentData =[
    //     {
    //       "email": "groundworker@gmail.com",
    //       "lastName": "Kant",
    //       "universityId": null,
    //       "userId": 1231,
    //       "firstName": "Immanuel",
    //       "isAdmin": false,
    //       "id": 1313,
    //       "enrolledIn": 141,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "thinker@gmail.com",
    //       "lastName": "Descartes",
    //       "universityId": null,
    //       "userId": 1232,
    //       "firstName": "Rene",
    //       "isAdmin": false,
    //       "id": 1314,
    //       "enrolledIn": 141,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "scientist@gmail.com",
    //       "lastName": "Einstein",
    //       "universityId": null,
    //       "userId": 1233,
    //       "firstName": "Albert",
    //       "isAdmin": false,
    //       "id": 1315,
    //       "enrolledIn": 142,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "poet@gmail.com",
    //       "lastName": "Shakespeare",
    //       "universityId": null,
    //       "userId": 1234,
    //       "firstName": "William",
    //       "isAdmin": false,
    //       "id": 1316,
    //       "enrolledIn": 142,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "philosopher@gmail.com",
    //       "lastName": "Nietzsche",
    //       "universityId": null,
    //       "userId": 1235,
    //       "firstName": "Friedrich",
    //       "isAdmin": false,
    //       "id": 1317,
    //       "enrolledIn": 143,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "artist@gmail.com",
    //       "lastName": "Da Vinci",
    //       "universityId": null,
    //       "userId": 1236,
    //       "firstName": "Leonardo",
    //       "isAdmin": false,
    //       "id": 1318,
    //       "enrolledIn": 143,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "musician@gmail.com",
    //       "lastName": "Beethoven",
    //       "universityId": null,
    //       "userId": 1237,
    //       "firstName": "Ludwig",
    //       "isAdmin": false,
    //       "id": 1319,
    //       "enrolledIn": 144,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "writer@gmail.com",
    //       "lastName": "Tolstoy",
    //       "universityId": null,
    //       "userId": 1238,
    //       "firstName": "Leo",
    //       "isAdmin": false,
    //       "id": 1320,
    //       "enrolledIn": 144,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "architect@gmail.com",
    //       "lastName": "Frank Lloyd Wright",
    //       "universityId": null,
    //       "userId": 1239,
    //       "firstName": "Frank",
    //       "isAdmin": false,
    //       "id": 1321,
    //       "enrolledIn": 145,
    //       "instructorId": null,
    //       "isLti": false
    //     },
    //     {
    //       "email": "athlete@gmail.com",
    //       "lastName": "Bolt",
    //       "universityId": null,
    //       "userId": 1240,
    //       "firstName": "Usain",
    //       "isAdmin": false,
    //       "id": 1322,
    //       "enrolledIn": 145,
    //       "instructorId": null,
    //       "isLti": false
    //     }
    //   ]      

    // return mockStudentData
}

async function createStudentList() {
    // table will be generated to display student data

    try {
        const data = await fetchCarnapStudentData();
        console.log(data)

        for (let i = 0; i < data.length; i++) {
           let assignmentData = await fetchAssignmentData(data[i].id)
        // let assignmentData = mockFetchAssignmentData()
           console.log("assignment data:" + " student id =" + data[i].id +" name =" + data[i].firstName + " "+ data[i].lastName)
            console.log(assignmentData)

            let challengeData = await findAssignment(assignmentData)

            let student = new studentCarnap(data[i].id, data[i].email, data[i].firstName, data[i].lastName, challengeData[0], challengeData[1],challengeData[2], challengeData[3], challengeData[4], challengeData[5], challengeData[6], challengeData[7], challengeData[8], challengeData[9], challengeData[10], challengeData[11], challengeData[12]);
            studentCarnapList.push(student);

            console.log("challenge data:" + " student id =" + data[i].id +" name =" + data[i].firstName + " "+ data[i].lastName)
            console.log(challengeData)
        }
        generateTable(studentCarnapList)

    } catch (error) {
        console.error('Error creating student list:', error);
    }
}

const main = document.getElementById("main")

function generateTable(data){
    const heading = document.createElement("h1")
    heading.innerHTML = "Student Progress"
    main.appendChild(heading)

    const progressTable = document.createElement("table")
    progressTable.id = "progressTable"
    progressTable.className="table table-striped"

    const tableHead = progressTable.createTHead();
    const headerRow = tableHead.insertRow();

    const headers = ["student id", "first name", "last name", "email", "challenge 1", "challenge 2", "challenge 3", "challenge 4", "challenge 5", "challenge 6", "challenge 7", "challenge 8", "challenge 9",  "challenge 10",  "challenge 11",  "challenge 12"];
    headers.forEach(headerText => {
        const headerCell = document.createElement('th');
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    });

    tableHead.appendChild(headerRow);
    progressTable.appendChild(tableHead)

    const tableBody = progressTable.createTBody();
    tableBody.id = "tableData"

    main.appendChild(progressTable)

    populateProgressTable(data, tableBody)
}

function populateProgressTable (data, tbody){
    for (let i = 0; i < data.length; i++) {
        let row =`<tr> 
                        <td> ${data[i].id}</td>
                        <td> ${data[i].firstName}</td>
                        <td> ${data[i].lastName}</td>
                        <td> ${data[i].email}</td>
                        <td> ${data[i].challenge1}</td>
                        <td> ${data[i].challenge2}</td>
                        <td> ${data[i].challenge3}</td>
                        <td> ${data[i].challenge4}</td>
                        <td> ${data[i].challenge5}</td>
                        <td> ${data[i].challenge6} </td>
                        <td> ${data[i].challenge7}</td>
                        <td> ${data[i].challenge8}</td>
                        <td> ${data[i].challenge9}</td>
                        <td> ${data[i].challenge10}</td>
                        <td> ${data[i].challenge11}</td>
                        <td> ${data[i].challenge12}</td>
                    </tr>`
        tbody.innerHTML+=row
    }
}

async function fetchAssignmentData(studentId) {
    let myCourse = "Tartu%20-%20Introduction%20to%20Logic%20(Eng)";
    let instructor = "litmanhuang@gmail.com";
    let apiKey = "bDIGolpQe4yzzxOUmqBej_VPrep7Vf7vOsyz39cb6ztJ";

    const requestOptions = {
        method: 'GET',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey
        }
    };

    try {
        const response = await fetch(`https://carnap.io/api/v1/instructors/${instructor}/courses/${myCourse}/students/${studentId}/submissions`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
} 

// function mockFetchAssignmentData (){
//    let mockAssignmentData = [
//         {
//           "problemSubmissionAssignmentId": 3001,
//           "problemSubmissionCorrect": false,
//           "problemSubmissionData": {
//             "type": "Qualitative",
//             "data": "Qualitative data for problem 3001"
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3001}}"
//           },
//           "problemSubmissionCredit": 3,
//           "problemSubmissionIdent": "Exercise-24",
//           "problemSubmissionUserId": 10385,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Qualitative",
//           "problemSubmissionTime": "2021-04-26T19:14:06.563900857Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3002,
//           "problemSubmissionCorrect": true,
//           "problemSubmissionData": {
//             "type": "Quantitative",
//             "data": [4, 8, 15, 16, 23, 42]
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3002}}"
//           },
//           "problemSubmissionCredit": 5,
//           "problemSubmissionIdent": "Exercise-25",
//           "problemSubmissionUserId": 10386,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Quantitative",
//           "problemSubmissionTime": "2021-04-26T19:22:15.225671364Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3003,
//           "problemSubmissionCorrect": true,
//           "problemSubmissionData": {
//             "type": "Essay",
//             "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3003}}"
//           },
//           "problemSubmissionCredit": 4,
//           "problemSubmissionIdent": "Exercise-26",
//           "problemSubmissionUserId": 10387,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Essay",
//           "problemSubmissionTime": "2021-04-26T19:30:51.156738244Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3004,
//           "problemSubmissionCorrect": false,
//           "problemSubmissionData": {
//             "type": "Qualitative",
//             "data": "Qualitative data for problem 3004"
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3004}}"
//           },
//           "problemSubmissionCredit": 2,
//           "problemSubmissionIdent": "Exercise-27",
//           "problemSubmissionUserId": 10388,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Qualitative",
//           "problemSubmissionTime": "2021-04-26T19:42:19.076252398Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3005,
//           "problemSubmissionCorrect": true,
//           "problemSubmissionData": {
//             "type": "MultipleChoice",
//             "data": {
//               "question": "What is the capital of France?",
//               "options": ["London", "Paris", "Berlin", "Rome"],
//               "answer": "Paris"
//             }
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3005}}"
//           },
//           "problemSubmissionCredit": 5,
//           "problemSubmissionIdent": "Exercise-28",
//           "problemSubmissionUserId": 10389,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "MultipleChoice",
//           "problemSubmissionTime": "2021-04-26T19:55:33.822950506Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3006,
//           "problemSubmissionCorrect": false,
//           "problemSubmissionData": {
//             "type": "Qualitative",
//             "data": "Qualitative data for problem 3006"
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3006}}"
//           },
//           "problemSubmissionCredit": 1,
//           "problemSubmissionIdent": "Exercise-29",
//           "problemSubmissionUserId": 10390,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Qualitative",
//           "problemSubmissionTime": "2021-04-26T20:02:40.712845943Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3007,
//           "problemSubmissionCorrect": true,
//           "problemSubmissionData": {
//             "type": "Quantitative",
//             "data": [3, 6, 9, 12, 15, 18]
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3007}}"
//           },
//           "problemSubmissionCredit": 4,
//           "problemSubmissionIdent": "Exercise-30",
//           "problemSubmissionUserId": 10391,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Quantitative",
//           "problemSubmissionTime": "2021-04-26T20:12:55.951088012Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3008,
//           "problemSubmissionCorrect": false,
//           "problemSubmissionData": {
//             "type": "Essay",
//             "data": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3008}}"
//           },
//           "problemSubmissionCredit": 2,
//           "problemSubmissionIdent": "Exercise-31",
//           "problemSubmissionUserId": 10392,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Essay",
//           "problemSubmissionTime": "2021-04-26T20:24:01.810602213Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3009,
//           "problemSubmissionCorrect": true,
//           "problemSubmissionData": {
//             "type": "MultipleChoice",
//             "data": {
//               "question": "Which planet is closest to the Sun?",
//               "options": ["Earth", "Mars", "Mercury", "Venus"],
//               "answer": "Mercury"
//             }
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3009}}"
//           },
//           "problemSubmissionCredit": 5,
//           "problemSubmissionIdent": "Exercise-32",
//           "problemSubmissionUserId": 10393,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "MultipleChoice",
//           "problemSubmissionTime": "2021-04-26T20:34:33.457049624Z",
//           "problemSubmissionExtra": null
//         },
//         {
//           "problemSubmissionAssignmentId": 3010,
//           "problemSubmissionCorrect": false,
//           "problemSubmissionData": {
//             "type": "Qualitative",
//             "data": "Qualitative data for problem 3010"
//           },
//           "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3010}}"
//           },
//           "problemSubmissionCredit": 3,
//           "problemSubmissionIdent": "Exercise-33",
//           "problemSubmissionUserId": 10394,
//           "problemSubmissionLateCredit": null,
//           "problemSubmissionType": "Qualitative",
//           "problemSubmissionTime": "2021-04-26T20:45:19.716015014Z",
//           "problemSubmissionExtra": null
//         },
//         {
//             "problemSubmissionAssignmentId": 3011,
//             "problemSubmissionCorrect": true,
//             "problemSubmissionData": {
//             "type": "Quantitative",
//             "data": [7, 14, 21, 28, 35, 42]
//             },
//             "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3011}}"
//             },
//             "problemSubmissionCredit": 4,
//             "problemSubmissionIdent": "Exercise-34",
//             "problemSubmissionUserId": 10395,
//             "problemSubmissionLateCredit": null,
//             "problemSubmissionType": "Quantitative",
//             "problemSubmissionTime": "2021-04-26T20:56:30.964362101Z",
//             "problemSubmissionExtra": null
//         },
//         {
//             "problemSubmissionAssignmentId": 3012,
//             "problemSubmissionCorrect": false,
//             "problemSubmissionData": {
//             "type": "Qualitative",
//             "data": "Qualitative data for problem 3012"
//             },
//             "problemSubmissionSource": {
//             "tag": "Assignment",
//             "contents": "AssignmentMetadataKey {unAssignmentMetadataKey = SqlBackendKey {unSqlBackendKey = 3012}}"
//             },
//             "problemSubmissionCredit": 2,
//             "problemSubmissionIdent": "Exercise-35",
//             "problemSubmissionUserId": 10396,
//             "problemSubmissionLateCredit": null,
//             "problemSubmissionType": "Qualitative",
//             "problemSubmissionTime": "2021-04-26T21:08:47.825550301Z",
//             "problemSubmissionExtra": null
//         }
//       ]
//       return mockAssignmentData
// }

// helper function to find challenges
async function findAssignment (data){

    let challengeData = Array(12).fill(0)

    // console.log("starting challenge data" + challengeData)
    for (let i = 0; i < data.length; i++) {

        let challenge = data[i].problemSubmissionAssignmentId
        //manully find out which assignment is the relevant challenge 
        let correct = data[i].problemSubmissionCorrect

        switch (challenge) {
            // challenge 1 id = 6205
            case 6205:
            // case 3001:
                if (correct){
                    challengeData[0] = challengeData [0] + 1
                }
                break;

            // challenge 2 id = 6204
            case 6204:
            // case 3002:
                if (correct){
                challengeData[1] = challengeData [1] + 1
                }
                break;
            
            // challenge 3 id = 6206
            case 6206:
            // case 3003:
                if (correct){
                challengeData[2] = challengeData [2] + 1
                }
                break;

            // challenge 4 id = 6207
            case 6207:
            // case 3004:
                if (correct){
                challengeData[3] = challengeData [3] + 1
                }
                break;

            // challenge 5 id = 6208
            case 6208:
            // case 3005:
                if (correct){
                challengeData[4] = challengeData [4] + 1
                }
                break;

            // challenge 6 id = 6209
            case 6209:
            // case 3006:
                if (correct){
                challengeData[5] = challengeData [5] + 1
                }
                break;

            // challenge 7 id = 6210
            case 6210:
            // case 3007:
                if (correct){
                challengeData[6] = challengeData [6] + 1
                }
                break;

            // challenge 8 id = 6211
            case 6211:
            // case 3008:
                if (correct){
                challengeData[7] = challengeData [7] + 1
                }
                break;

            // challenge 9 id = 6212
            case 6212:
            // case 3009:
                if (correct){
                challengeData[8] = challengeData [8] + 1
                }
                break;

            // challenge 10 id = 6213
            case 6213:
            // case 3010:
                if (correct){
                challengeData[9] = challengeData [9] + 1
                }
                break;

            // challenge 11 id = 6214 
            case 6214:
            // case 3011:
                if (correct){
                challengeData[10] = challengeData [10] + 1
                }
                break;

            // challenge 12 id = 6215
            case 6215:
            // case 3012:
                if (correct){
                challengeData[11] = challengeData [11] + 1
                }
                break;
            default:
                break;
        }
    }

    challengeData = challengeData.map(number => number.toString());
    // console.log(challengeData)
    return challengeData
}


createStudentList();
   // table will be generated to display student data
console.log(typeof availability_minutes )

