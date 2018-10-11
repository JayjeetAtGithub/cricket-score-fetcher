//Using axios to make http requests
const axios = require('axios');

//Maps team_id to team_names
const team_map = {
    6: 'India',
    4: 'West Indies',
}


// Make request to http://www.espncricinfo.com/ci/engine/match/1157752.json
axios.get('http://www.espncricinfo.com/ci/engine/match/1157752.json')
    .then(function (data) {
        const innings_data = data.data.innings;

        innings_data.forEach(inning => {
            console.log(`
                Innings Number : ${inning.innings_numth}
                Team Name : ${team_map[inning.batting_team_id]}
                Runs : ${inning.runs}\n
            `)
        });
    })
    .catch(function (err) {
        console.error(err);
    });

