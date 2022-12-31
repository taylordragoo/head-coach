import Dexie from 'dexie';

export function initNewCareer(dbName, user, world, teams, players, leagues) {

    const db = new Dexie(dbName);
    try {

        db.version(1).stores({
            user: "++id, first, last, age, exp, ptid",
            teams: "++id, utid, cid, did, region, name, abbrev, imgURL, budget, strategy, colors, jersey, pop, stadiumCapacity, seasons, stats",
            players: "++id, firstName, lastName, born, college, pos, tid, contract, draft, ratings, injury, injuries, jerseyNo, stats, value, valuePot, weight, height",
            world: '++id, phase, date, confs, divs, lid, numGames, numGamesDiv, numGamesConf, season, userTid',
            leagues: "++id, name, teams"
        });

        try {

            db.players.bulkPut(players).then(function(lastKey) {
                console.log("Last player's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function (e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error ("Some players did not succeed. However, " +
                    100000-e.failures.length + " players was added successfully");
            });

            db.teams.bulkPut(teams).then(function(lastKey) {
                console.log("Last teams's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function (e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error ("Some teams did not succeed. However, " +
                    100000-e.failures.length + " teams was added successfully");
            });

            db.user.put(user).then(function(lastKey) {
                console.log("Last user's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function (e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error ("Some users did not succeed. However, " +
                    100000-e.failures.length + " users was added successfully");
            });

            db.world.put(world).then(function(lastKey) {
                console.log("Last world's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function (e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error ("Some worlds did not succeed. However, " +
                    100000-e.failures.length + " worlds was added successfully");
            });

            db.leagues.bulkPut(leagues).then(function(lastKey) {
                console.log("Last league's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function (e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error ("Some leagues did not succeed. However, " +
                    100000-e.failures.length + " leagues was added successfully");
            });

        }
        catch(err) {
            console.log("Error: " + err)
        }

    } catch (error) {
        console.log(error);
    } finally {
        return db;
    }
}
