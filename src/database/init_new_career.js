import Dexie from 'dexie';
import { DEFAULT_ATTRIBUTES, PHASE_TEXT } from '@/data/constants';
import createTeams from '@/database/create_teams'

export function initNewCareer(dbName, player) {

    const db = new Dexie(dbName);
    try {

        db.version(1).stores({
            user: "++id, first, last, age, exp, ptid",
            teams: "++id, utid, cid, did, region, name, abbrev, imgURL, budget, strategy, colors, jersey, pop, stadiumCapacity, seasons, stats",
            players: "++id, firstName, lastName, born, college, pos, tid, contract, draft, ratings, injury, injuries, jerseyNo, stats, value, valuePot, weight, height",
            world: '++id, phase, date, confs, divs, lid, numGames, numGamesDiv, numGamesConf, season, userTid',
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

        createTeams(db)

    } catch (error) {
        console.log(error);
    } finally {
        return db;
    }
}
