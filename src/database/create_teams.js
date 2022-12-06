import { address, commerce, company, image } from 'faker';
import _ from 'lodash';
import createPlayers from '@/database/create_players';

export default function createTeams(database) {
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
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
                // players: [createPlayers(database, 53, teamCount + 1)]
                players: {
                    QB: createPlayers(database, 'QB', 4, teamCount + 1),
                    RB: createPlayers(database, 'RB', 5, teamCount + 1),
                    FB: createPlayers(database, 'FB', 2, teamCount + 1),
                    WR: createPlayers(database, 'WR', 7, teamCount + 1),
                    TE: createPlayers(database, 'TE', 4, teamCount + 1),
                    LT: createPlayers(database, 'LT', 3, teamCount + 1),
                    LG: createPlayers(database, 'LG', 3, teamCount + 1),
                    C: createPlayers(database, 'C', 3, teamCount + 1),
                    RG: createPlayers(database, 'RG', 3, teamCount + 1),
                    RT: createPlayers(database, 'RT', 3, teamCount + 1),
                    DT: createPlayers(database, 'DT', 6, teamCount + 1),
                    LE: createPlayers(database, 'LE', 4, teamCount + 1),
                    RE: createPlayers(database, 'RE', 4, teamCount + 1),
                    OLB: createPlayers(database, 'OLB', 6, teamCount + 1),
                    MLB: createPlayers(database, 'MLB', 6, teamCount + 1),
                    CB: createPlayers(database, 'CB', 6, teamCount + 1),
                    FS: createPlayers(database, 'FS', 3, teamCount + 1),
                    SS: createPlayers(database, 'SS', 3, teamCount + 1),
                    K: createPlayers(database, 'K', 1, teamCount + 1),
                    P: createPlayers(database, 'P', 1, teamCount + 1),
                }
            }

            database.teams.add(team);
            teamCount++;
        })
    }
}
