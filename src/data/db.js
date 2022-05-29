import Dexie from 'dexie';
import {
    BudgetItem,
    GAME,
    DEFAULT_CONFS,
    DEFAULT_DIVS,
    DIFFICULTY,
    COMPOSITE_WEIGHTS,
    PLAYER,
    PLAYER_STATE,
    PLAYER_CONTRACT,
    PLAYER_SALARY,
    PLAYER_INJURY,
    PLAYER_GAME_STATS,
    PLAYER_STATS_TABLES,
    PLAYER_SUMMARY,
    PHASE,
    PHASE_TEXT,
    MAX_POSITION_COUNTS,
    MIN_POSITION_COUNTS,
    POSITIONS,
    RATINGS,
    TEAM_STATS_TABLES,
    DEFAULT_ATTRIBUTES
} from './constants';
import { universities } from "./colleges";
import { date, random, datatype, internet, company, commerce, address, name, image, providers } from 'faker';
import _ from 'lodash';
import moment from 'moment'

export function SaveGame(d, u, w, t, p) {
    let db = d;
    // let user_data = u;
    // let world = w;
    // let teams = t;
    // let players = p;

    db.user.update(0, {u}).then(function (updated) {
        if (updated)
            console.log ("Saved Successfully!");
        else
            console.log ("Nothing was updated - there were no data with primary key");
    });

    db.world.update(0, {w}).then(function (updated) {
        if (updated)
            console.log ("Saved Successfully!");
        else
            console.log ("Nothing was updated - there were no data with primary key");
    });
}

export function InitNewCareer(dbName, player) {

    const db = new Dexie(dbName);
    try {

        db.version(1).stores({
            user: "++uid, first, last, age, exp, ptid",
            teams: "++tid, utid, cid, did, region, name, abbrev, imgURL, budget, strategy, colors, jersey, pop, stadiumCapacity, seasons, stats",
            players: "++pid, firstName, lastName, born, college, pos, tid, contract, draft, ratings, injury, injuries, jerseyNo, stats, value, valuePot, weight, height",
            world: '++wid, phase, year, month, day, hour, minute, second, confs, divs, lid, numGames, numGamesDiv, numGamesConf, season, userTid',
            phase: '++id, phase',
        });

        db.user.add({
            first: player._first,
            last: player._last,
            age: player._age,
            exp: player._exp,
            ptid: 0
        })

        db.world.add(DEFAULT_ATTRIBUTES);

        db.phase.add(PHASE_TEXT)

        CreateTeams(db)

    } catch (error) {
        console.log(error);
    } finally {
        console.log("Game Init")
        // let now = new Date();
        let day = moment().dayOfYear(1)
        console.log('Day of year: ' + moment().local(day));
    }
}

function CreateTeams(database) {
    let teamCount = 0

    if(teamCount < 4) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 0,
                did: 0,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 4 && teamCount < 8) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 0,
                did: 1,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 8 && teamCount < 12) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 0,
                did: 2,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 12 && teamCount < 16) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 0,
                did: 3,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 16 && teamCount < 20) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 1,
                did: 0,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 20 && teamCount < 24) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 1,
                did: 1,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 24 && teamCount < 28) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 1,
                did: 2,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }
            // console.log(team)
            database.teams.add(team);
            teamCount++;
        })
    }

    if(teamCount >= 28 && teamCount < 32) {
        new Array(4).fill().forEach((item, index) => {
            let team = {
                utid: teamCount + 1,
                cid: 1,
                did: 3,
                region: address.cityName(),
                name: company.catchPhraseNoun(),
                abbrev: company.catchPhraseNoun(),
                imgURL: image.sports(),
                budget: {
                    ticketPrice: {
                        amount: _.random(25, 150),
                        rank: 0
                    },
                    scouting: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    coaching: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    health: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                    facilities: {
                        amount: _.random(5000, 25000),
                        rank: 0
                    },
                },
                strategy: _.sample(['rebuilding', 'contending']),
                colors: [commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'}), commerce.color({color_format: 'hex'})],
                jersey: _.random(1, 128),
                pop: _.random(0.50, 9.00),
                stadiumCapacity: _.random(50000, 100000),
                seasons: [],
                stats: [],
                // players: [CreatePlayers(database, 53, teamCount + 1)]
                players: {
                    QB: CreatePlayers(database, 'QB', 4, teamCount + 1),
                    RB: CreatePlayers(database, 'RB', 5, teamCount + 1),
                    FB: CreatePlayers(database, 'FB', 2, teamCount + 1),
                    WR: CreatePlayers(database, 'WR', 7, teamCount + 1),
                    TE: CreatePlayers(database, 'TE', 4, teamCount + 1),
                    LT: CreatePlayers(database, 'LT', 3, teamCount + 1),
                    LG: CreatePlayers(database, 'LG', 3, teamCount + 1),
                    C: CreatePlayers(database, 'C', 3, teamCount + 1),
                    RG: CreatePlayers(database, 'RG', 3, teamCount + 1),
                    RT: CreatePlayers(database, 'RT', 3, teamCount + 1),
                    DT: CreatePlayers(database, 'DT', 6, teamCount + 1),
                    LE: CreatePlayers(database, 'LE', 4, teamCount + 1),
                    RE: CreatePlayers(database, 'RE', 4, teamCount + 1),
                    OLB: CreatePlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: CreatePlayers(database, 'MLB', 6, teamCount + 1),
                    CB: CreatePlayers(database, 'CB', 6, teamCount + 1),
                    FS: CreatePlayers(database, 'FS', 3, teamCount + 1),
                    SS: CreatePlayers(database, 'SS', 3, teamCount + 1),
                    K: CreatePlayers(database, 'K', 1, teamCount + 1),
                    P: CreatePlayers(database, 'P', 1, teamCount + 1),
                }
            }

            database.teams.add(team);
            teamCount++;
        })
    }
}

function CreatePlayers(database, position, amount, tid) {
    let db = database.backendDB();
    let team = tid;
    let size = amount
    let pos = position
    let players = []
    new Array(size).fill().forEach(() => {
        let player = {
            pos: pos,
            college: _.sample(universities),
            born: {
                year: _.random(1981, 2000),
                loc: address.cityName()
            },
            weight: _.random(200,300),
            height: _.random(60,80),
            tid: team,
            imgURL: internet.avatar(),
            draft: {
                tid: team,
                round: _.random(1,7),
                pick: _.random(1,32),
                year: 2018,
                traits: [],
                pot: _.random(50,100),
                ovr: _.random(50,80)
            },
            ratings: {
                    strength: _.random(1,20),
                    speed: _.random(1,20),
                    agility: _.random(1,20),
                    injury: _.random(1,20),
                    stamina: _.random(1,20),
                    awareness: _.random(1,20),
                    acceleration: _.random(1,20),
                    carry: _.random(1,20),
                    catch: _.random(1,20),
                    thpow: _.random(1,20),
                    thacc: _.random(1,20),
                    pblock: _.random(1,20),
                    rblock: _.random(1,20),
                    tackle: _.random(1,20),
                    btackle: _.random(1,20),
                    kpow: _.random(1,20),
                    kacc: _.random(1,20),
                    season: 2021,
                    pos: pos,
                    fuzz: 1.163364711073866,
                    skills: [
                        "3"
                    ],
                    ovr: 40,
                    pot: 55
            },
            firstName: name.firstName(),
            lastName: name.lastName()
        }

        database.players.add(player);
        players.push(player)
    })

    return players
}

/** Check if storage is persisted already.
 @returns {Promise<boolean>} Promise resolved with true if current origin is
 using persistent storage, false if not, and undefined if the API is not
 present.
 */
async function isStoragePersisted() {
    return await navigator.storage && navigator.storage.persisted ?
        navigator.storage.persisted() :
        undefined;
}

/** Tries to convert to persisted storage.
 @returns {Promise<boolean>} Promise resolved with true if successfully
 persisted the storage, false if not, and undefined if the API is not present.
 */
async function persist() {
    return await navigator.storage && navigator.storage.persist ?
        navigator.storage.persist() :
        undefined;
}

/** Queries available disk quota.
 @see https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate
 @returns {Promise<{quota: number, usage: number}>} Promise resolved with
 {quota: number, usage: number} or undefined.
 */
async function showEstimatedQuota() {
    return await navigator.storage && navigator.storage.estimate ?
        navigator.storage.estimate() :
        undefined;
}

/** Tries to persist storage without ever prompting user.
 @returns {Promise<string>}
 "never" In case persisting is not ever possible. Caller don't bother
 asking user for permission.
 "prompt" In case persisting would be possible if prompting user first.
 "persisted" In case this call successfully silently persisted the storage,
 or if it was already persisted.
 */
async function tryPersistWithoutPromptingUser() {
    if (!navigator.storage || !navigator.storage.persisted) {
        return "never";
    }
    let persisted = await navigator.storage.persisted();
    if (persisted) {
        return "persisted";
    }
    if (!navigator.permissions || !navigator.permissions.query) {
        return "prompt"; // It MAY be successful to prompt. Don't know.
    }
    const permission = await navigator.permissions.query({
        name: "persistent-storage"
    });
    if (permission.state === "granted") {
        persisted = await navigator.storage.persist();
        if (persisted) {
            return "persisted";
        } else {
            throw new Error("Failed to persist");
        }
    }
    if (permission.state === "prompt") {
        return "prompt";
    }
    return "never";
}

async function initStoragePersistence() {
    console.log('attempting to persist')
    const persist = await tryPersistWithoutPromptingUser();
    switch (persist) {
        case "never":
            console.log("Not possible to persist storage");
            break;
        case "persisted":
            console.log("Successfully persisted storage silently");
            break;
        case "prompt":
            console.log("Not persisted, but we may prompt user when we want to.");
            break;
    }
}