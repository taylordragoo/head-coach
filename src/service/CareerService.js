import Dexie from 'dexie';
import Division from '@/models/Division';
import Conference from '@/models/Conference';
import Team from '@/models/Team';

export default class CareerService {

    async handleCreateNewCareer(request) {
        const db = new Dexie(request.db);

        db.version(1).stores({
            user: "id",
            teams: "id",
            players: "id",
            world: 'id',
            leagues: "id",
            attributes: "id",
            born: "id",
            contract: "id",
            draft: "id",
            injury: "id",
            overalls: "id",
            potentials: "id",
            salaries: "id",
            stats: "id",
            divisions: "id",
            conferences: "id"
        });

        if (!(await Dexie.exists(db.name))) {
            console.log(db.name + " Db does not exist");
        } else {
            console.log(db.name + " db does exist")
            await db.open().catch(function(err) {
                console.error('Failed to open db: ' + (err.stack || err));
            }).finally(function() {
                console.log(db.tables);
            });
        }

        const userTable = db.table('user')
        const worldTable = db.table('world')
        const playersTable = db.table('players')
        const teamsTable = db.table('teams')
        const leaguesTable = db.table('leagues')
        const attributesTable = db.table('attributes')
        const bornTable = db.table('born')
        const contractTable = db.table('contract')
        const draftTable = db.table('draft')
        const injuryTable = db.table('injury')
        const overallsTable = db.table('overalls')
        const potentialsTable = db.table('potentials')
        const salariesTable = db.table('salaries')
        const statsTable = db.table('stats')
        const confTable = db.table('conferences')
        const divTable = db.table('divisions')

        try {

            if (userTable) {
                userTable.put(request.user).then(function(lastKey) {
                    console.log("Last user's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some users did not succeed. However, " +
                        100000 - e.failures.length + " users was added successfully");
                });
            }

            if (playersTable) {
                playersTable.bulkPut(request.players).then(function(lastKey) {
                    console.log("Last player's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some players did not succeed. However, " +
                        100000 - e.failures.length + " players was added successfully");
                });
            }

            if (worldTable) {
                worldTable.put(request.world).then(function(lastKey) {
                    console.log("Last world's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.Error, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some worlds did not succeed. However, " +
                        100000 - e.failures.length + " worlds was added successfully");
                });
            }

            if (teamsTable) {
                teamsTable.bulkPut(request.teams).then(function(lastKey) {
                    console.log("Last teams's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (leaguesTable) {
                leaguesTable.bulkPut(request.leagues).then(function(lastKey) {
                    console.log("Last leagues's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some leagues did not succeed. However, " +
                        100000 - e.failures.length + " leagues was added successfully");
                });
            }

            if (divTable) {
                divTable.bulkPut(request.divisions).then(function(lastKey) {
                    console.log("Last division's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some divisions did not succeed. However, " +
                        100000 - e.failures.length + " leagues was added successfully");
                });
            }

            if (confTable) {
                confTable.bulkPut(request.conferences).then(function(lastKey) {
                    console.log("Last conference's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some conferences did not succeed. However, " +
                        100000 - e.failures.length + " leagues was added successfully");
                });
            }

            if (attributesTable) {
                attributesTable.bulkPut(request.attributes).then(function(lastKey) {
                    console.log("Last attribute's id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (bornTable) {
                bornTable.bulkPut(request.born).then(function(lastKey) {
                    console.log("Last born id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (contractTable) {
                contractTable.bulkPut(request.contract).then(function(lastKey) {
                    console.log("Last contract id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (draftTable) {
                draftTable.bulkPut(request.draft).then(function(lastKey) {
                    console.log("Last draft id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (injuryTable) {
                injuryTable.bulkPut(request.injury).then(function(lastKey) {
                    console.log("Last injury id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (overallsTable) {
                overallsTable.bulkPut(request.overalls).then(function(lastKey) {
                    console.log("Last overalls id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (potentialsTable) {
                potentialsTable.bulkPut(request.potentials).then(function(lastKey) {
                    console.log("Last potentials id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (salariesTable) {
                salariesTable.bulkPut(request.salaries).then(function(lastKey) {
                    console.log("Last salaries id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

            if (statsTable) {
                statsTable.bulkPut(request.stats).then(function(lastKey) {
                    console.log("Last stats id was: " + lastKey); // Will be 100000.
                }).catch(Dexie.BulkError, function(e) {
                    // Explicitely catching the bulkAdd() operation makes those successful
                    // additions commit despite that there were errors.
                    console.error("Some teams did not succeed. However, " +
                        100000 - e.failures.length + " teams was added successfully");
                });
            }

        } catch (err) {
            console.log("Error: " + err)
        } finally {
            return db;
        }
    }

    handleCreateDefaultDatabase(request) {
        console.log("Creating Default Database")
        const db = new Dexie(request.db_name);

        db.version(1).stores({
            user: "id",
            teams: "id",
            players: "id",
            world: 'id',
            leagues: "id",
            attributes: "id",
            born: "id",
            contract: "id",
            draft: "id",
            injury: "id",
            overalls: "id",
            potentials: "id",
            salaries: "id",
            stats: "id",
            divisions: "id",
            conferences: "id"
        });

        try {

            db.players.bulkPut(request.players).then(function(lastKey) {
                console.log("Last player's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some players did not succeed. However, " +
                    100000 - e.failures.length + " players was added successfully");
            });

            db.teams.bulkPut(request.teams).then(function(lastKey) {
                console.log("Last teams's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.world.put(request.world).then(function(lastKey) {
                console.log("Last world's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some worlds did not succeed. However, " +
                    100000 - e.failures.length + " worlds was added successfully");
            });

            db.leagues.bulkPut(request.leagues).then(function(lastKey) {
                console.log("Last leagues's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some leagues did not succeed. However, " +
                    100000 - e.failures.length + " leagues was added successfully");
            });

            db.user.put(request.user).then(function(lastKey) {
                console.log("Last user's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some users did not succeed. However, " +
                    100000 - e.failures.length + " users was added successfully");
            });

            db.divisions.bulkPut(request.divisions).then(function(lastKey) {
                console.log("Last division's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some divisions did not succeed. However, " +
                    100000 - e.failures.length + " leagues was added successfully");
            });

            db.conferences.bulkPut(request.conferences).then(function(lastKey) {
                console.log("Last conference's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some conferences did not succeed. However, " +
                    100000 - e.failures.length + " leagues was added successfully");
            });

            db.attributes.bulkPut(request.attributes).then(function(lastKey) {
                console.log("Last attribute's id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.born.bulkPut(request.born).then(function(lastKey) {
                console.log("Last born id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.contract.bulkPut(request.contract).then(function(lastKey) {
                console.log("Last contract id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.draft.bulkPut(request.draft).then(function(lastKey) {
                console.log("Last draft id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.injury.bulkPut(request.injury).then(function(lastKey) {
                console.log("Last injury id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.overalls.bulkPut(request.overalls).then(function(lastKey) {
                console.log("Last overalls id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.potentials.bulkPut(request.potentials).then(function(lastKey) {
                console.log("Last potentials id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.salaries.bulkPut(request.salaries).then(function(lastKey) {
                console.log("Last salaries id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

            db.stats.bulkPut(request.stats).then(function(lastKey) {
                console.log("Last stats id was: " + lastKey); // Will be 100000.
            }).catch(Dexie.BulkError, function(e) {
                // Explicitely catching the bulkAdd() operation makes those successful
                // additions commit despite that there were errors.
                console.error("Some teams did not succeed. However, " +
                    100000 - e.failures.length + " teams was added successfully");
            });

        } catch (err) {
            console.log("Error: " + err)
        } finally {
            return db;
        }
    }

    async handleSaveCareer(request) {
        console.log("Save Database " + request.user)
        const db = new Dexie(request.db);

        if (!(await Dexie.exists(db.name))) {
            console.log(db.name + " Db does not exist");
        } else {
            console.log(db.name + " db does exist")
            await db.open().catch(function(err) {
                console.error('Failed to open db: ' + (err.stack || err));
            }).finally(function() {
                console.log(db.tables);
            });

            const userTable = db.table('user')
            const worldTable = db.table('world')
            const playersTable = db.table('players')
            const teamsTable = db.table('teams')
            const leaguesTable = db.table('leagues')
            const attributesTable = db.table('attributes')
            const bornTable = db.table('born')
            const contractTable = db.table('contract')
            const draftTable = db.table('draft')
            const injuryTable = db.table('injury')
            const overallsTable = db.table('overalls')
            const potentialsTable = db.table('potentials')
            const salariesTable = db.table('salaries')
            const statsTable = db.table('stats')
            const confTable = db.table('conferences')
            const divTable = db.table('divisions')

            try {

                if (userTable) {
                    userTable.put(request.user).then(function(lastKey) {
                        console.log("Last user's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some users did not succeed. However, " +
                            100000 - e.failures.length + " users was added successfully");
                    });
                }

                if (playersTable) {
                    playersTable.bulkPut(request.players).then(function(lastKey) {
                        console.log("Last player's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some players did not succeed. However, " +
                            100000 - e.failures.length + " players was added successfully");
                    });
                }

                if (worldTable) {
                    worldTable.put(request.world).then(function(lastKey) {
                        console.log("Last world's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.Error, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some worlds did not succeed. However, " +
                            100000 - e.failures.length + " worlds was added successfully");
                    });
                }

                if (teamsTable) {
                    teamsTable.bulkPut(request.teams).then(function(lastKey) {
                        console.log("Last teams's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (leaguesTable) {
                    leaguesTable.bulkPut(request.leagues).then(function(lastKey) {
                        console.log("Last leagues's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some leagues did not succeed. However, " +
                            100000 - e.failures.length + " leagues was added successfully");
                    });
                }

                if (divTable) {
                    divTable.bulkPut(request.divisions).then(function(lastKey) {
                        console.log("Last division's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some divisions did not succeed. However, " +
                            100000 - e.failures.length + " leagues was added successfully");
                    });
                }

                if (confTable) {
                    confTable.bulkPut(request.conferences).then(function(lastKey) {
                        console.log("Last conference's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some conferences did not succeed. However, " +
                            100000 - e.failures.length + " leagues was added successfully");
                    });
                }

                if (attributesTable) {
                    attributesTable.bulkPut(request.attributes).then(function(lastKey) {
                        console.log("Last attribute's id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (bornTable) {
                    bornTable.bulkPut(request.born).then(function(lastKey) {
                        console.log("Last born id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (contractTable) {
                    contractTable.bulkPut(request.contract).then(function(lastKey) {
                        console.log("Last contract id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (draftTable) {
                    draftTable.bulkPut(request.draft).then(function(lastKey) {
                        console.log("Last draft id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (injuryTable) {
                    injuryTable.bulkPut(request.injury).then(function(lastKey) {
                        console.log("Last injury id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (overallsTable) {
                    overallsTable.bulkPut(request.overalls).then(function(lastKey) {
                        console.log("Last overalls id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (potentialsTable) {
                    potentialsTable.bulkPut(request.potentials).then(function(lastKey) {
                        console.log("Last potentials id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (salariesTable) {
                    salariesTable.bulkPut(request.salaries).then(function(lastKey) {
                        console.log("Last salaries id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

                if (statsTable) {
                    statsTable.bulkPut(request.stats).then(function(lastKey) {
                        console.log("Last stats id was: " + lastKey); // Will be 100000.
                    }).catch(Dexie.BulkError, function(e) {
                        // Explicitely catching the bulkAdd() operation makes those successful
                        // additions commit despite that there were errors.
                        console.error("Some teams did not succeed. However, " +
                            100000 - e.failures.length + " teams was added successfully");
                    });
                }

            } catch (err) {
                console.log("Error: " + err)
            } finally {
                return db;
            }
        }
    }

    handleDeleteCareer(db) {
        Dexie.delete(db).then(() => {
            console.log("Database successfully deleted");
        }).catch((err) => {
            console.error("Could not delete database");
        }).finally(() => {
            return;
        });
    }

    handleGenerateSchedule() {
        console.log("Generating Schedule");
        const schedule = [];
        const divisions = Division.all()
        const conferences = Conference.all()
        const teams = Team.all()
        // Each team plays the other three teams in its own division twice
        for (let division in divisions) {
            for (let i = 0; i < divisions[division].length; i++) {
                for (let j = 0; j < divisions[division].length; j++) {
                    if (i !== j) {
                        schedule.push({
                            homeTeam: divisions[division][i],
                            awayTeam: divisions[division][j],
                            division: division
                        });
                        schedule.push({
                            homeTeam: divisions[division][j],
                            awayTeam: divisions[division][i],
                            division: division
                        });
                    }
                }
            }
        }

        // All four teams from a single division in the AFC once
        for (let division in divisions) {
            for (let i = 0; i < divisions[division].length; i++) {
                for (let j = 0; j < divisions[division].length; j++) {
                    if (i !== j) {
                        schedule.push({
                            homeTeam: divisions[division][i],
                            awayTeam: divisions[division][j],
                            division: division
                        });
                    }
                }
            }
        }

        // All four teams from a single division in the NFC once
        for (let division in divisions) {
            for (let i = 0; i < divisions[division].length; i++) {
                for (let j = 0; j < divisions[division].length; j++) {
                    if (i !== j) {
                        schedule.push({
                            homeTeam: divisions[division][i],
                            awayTeam: divisions[division][j],
                            division: division
                        });
                    }
                }
            }
        }

        // Two additional intraconference games
        for (let i = 0; i < teams.length; i++) {
            for (let j = i+1; j < teams.length; j++) {
                if (teams[i].id !== teams[j].id) {
                    schedule.push({
                        homeTeam: teams[i].id,
                        awayTeam: teams[j].id,
                        conference: teams[i].conference
                    });
                }
            }
        }

        // One additional interconference game
        for (let i = 0; i < teams.length; i++) {
            for (let j = i+1; j < teams.length; j++) {
                if (teams[i].id !== teams[j].id && teams[i].conference !== teams[j].conference) {
                    schedule.push({
                        homeTeam: teams[i].id,
                        awayTeam: teams[j].id,
                        conference: teams[i].conference
                    });
                }
            }
        }
        console.log(JSON.stringify(schedule))
        return JSON.stringify(schedule);
    }
}
