const number = 0;
const string = ''

export const DIFFICULTY = {
    Easy: -0.25,
    Normal: 0,
    Hard: 0.25,
    Insane: 1,
};

export const PHASE = {
    PRESEASON: 0,
    REGULAR_SEASON: 1,
    AFTER_TRADE_DEADLINE: 2,
    PLAYOFFS: 3,
    BEFORE_DRAFT: 4,
    DRAFT: 5,
    AFTER_DRAFT: 6,
    RESIGN_PLAYERS: 7,
    FREE_AGENCY: 8,
};

export const PHASE_TEXT = {
    0: "Preseason",
    1: "Regular Season",
    2: "Post-Trade Deadline",
    3: "Playoffs",
    4: "Before Draft",
    5: "Draft",
    6: "After Draft",
    7: "Re-sign Players",
    8: "Free Agency",
};

export const PLAYER_STATE = {
    FREE_AGENT: 1,
    RETIRED: 2,
    SIGNED: 3
};

export const PLAYER = {
    pid: number,
    firstName: string,
    lastName: string,
    born: {
        year: number,
        loc: string
    },
    college: string,
    pos: string,
    tid: number,
    contract: PLAYER_CONTRACT,
    draft: {
        round: number,
        pick: number,
        tid: number,
        year: number,
        pot: number,
        ovr: number,
    },
    ratings: [],
    injury: PLAYER_INJURY,
    injuries: [],
    jerseyNo: number,
    stats: [],
    weight: number,
    height: number
}

export const PLAYER_CONTRACT = {
    amountPerYear: number,
    length: number,
    salaries: [],
    teamOption: false,
    playerOption: false
}

export const PLAYER_SALARY = {
    amount: number,
    season: number
}

export const PLAYER_INJURY = {
    gamesRemaining: number,
    type: string,
    severity: "Minor" | "Major" | "Career Ending"
}

export const TEAM = {
    tid: number,
    cid: number,
    did: number,
    region: string,
    name: string,
    abbrev: string,
    imgURL: string,
    budget: {
        ticketPrice: BudgetItem,
        scouting: BudgetItem,
        coaching: BudgetItem,
        health: BudgetItem,
        facilities: BudgetItem,
    },
    strategy: "contending" | "rebuilding",
    colors: [string, string, string],
    jersey: string,
    pop: number,
    stadiumCapacity: number,
    retiredJerseyNumbers: [{
        number: number,
        seasonRetired: number,
        seasonTeamInfo: number,
        pid: number,
        score: number,
        text: string
    }],
    depth: {
        QB: [],
        RB: [],
        FB: [],
        WR: [],
        TE: [],
        LT: [],
        LG: [],
        C: [],
        RG: [],
        RT: [],
        DT: [],
        LE: [],
        RE: [],
        OLB: [],
        MLB: [],
        CB: [],
        FS: [],
        SS: [],
        K: [],
        P: [],
        KR: [],
        PR: [],
    },
    seasons: [],
    won: number,
    lost: number,
    tied: number,
}

export const BudgetItem = {
    amount: number,
    rank: number
}

export const GAME = {
    gid: null,
    homeTeam: {
        tid: number,
    },
    won: {
        tid: number,
        pts: number
    },
    lost: {
        tid: number,
        pts: number
    }
}

export const DEFAULT_CONFS = [
    {
        cid: 0,
        name: "American Conference",
    },
    {
        cid: 1,
        name: "National Conference",
    },
];

export const DEFAULT_DIVS = [
    {
        did: 0,
        cid: 0,
        name: "East",
    },
    {
        did: 1,
        cid: 0,
        name: "North",
    },
    {
        did: 2,
        cid: 0,
        name: "South",
    },
    {
        did: 3,
        cid: 0,
        name: "West",
    },
    {
        did: 4,
        cid: 1,
        name: "East",
    },
    {
        did: 5,
        cid: 1,
        name: "North",
    },
    {
        did: 6,
        cid: 1,
        name: "South",
    },
    {
        did: 7,
        cid: 1,
        name: "West",
    },
];

export const PLAYER_GAME_STATS = {
    passing: {
        name: "Passing",
        stats: [
            "pssCmp",
            "pss",
            "cmpPct",
            "pssYds",
            "pssTD",
            "pssInt",
            "pssSk",
            "pssSkYds",
            "qbRat",
            "fmbLost",
            "fp",
        ],
        sortBy: ["pssYds"],
    },
    rushing: {
        name: "Rushing",
        stats: [
            "rus",
            "rusYds",
            "rusYdsPerAtt",
            "rusLng",
            "rusTD",
            "fmbLost",
            "fp",
        ],
        sortBy: ["rusYds"],
    },
    receiving: {
        name: "Receiving",
        stats: ["tgt", "rec", "recYds", "recYdsPerAtt", "recLng", "recTD", "fp"],
        sortBy: ["recYds"],
    },
    kicking: {
        name: "Kicking",
        stats: [
            "fg",
            "fga",
            "fgPct",
            "fgLng",
            "xp",
            "xpa",
            "xpPct",
            "kickingPts",
            "fp",
        ],
        sortBy: ["kickingPts"],
    },
    punting: {
        name: "Punting",
        stats: ["pnt", "pntYdsPerAtt", "pntIn20", "pntTB", "pntLng", "pntBlk"],
        sortBy: ["pnt"],
    },
    returns: {
        name: "Returns",
        stats: [
            "kr",
            "krYds",
            "krYdsPerAtt",
            "krLng",
            "krTD",
            "pr",
            "prYds",
            "prYdsPerAtt",
            "prLng",
            "prTD",
        ],
        sortBy: ["krYds", "prYds"],
    },
    defense: {
        name: "Defense",
        stats: [
            "defTckSolo",
            "defTckAst",
            "defTck",
            "defTckLoss",
            "defSk",
            "defSft",
            "defPssDef",
            "defInt",
            "defIntYds",
            "defIntTD",
            "defIntLng",
            "defFmbFrc",
            "defFmbRec",
            "defFmbYds",
            "defFmbTD",
            "defFmbLng",
        ],
        sortBy: ["defTck"],
    },
};

export const PLAYER_SUMMARY = {
    summaryPss: {
        name: "SummaryQB",
        onlyShowIf: ["QB"],
        stats: [
            "gp",
            "av",
            "qbRec",
            "cmpPct",
            "pssYds",
            "pssYdsPerAtt",
            "pssTD",
            "pssInt",
        ],
    },
    summaryRus: {
        name: "SummaryRus",
        onlyShowIf: ["RB"],
        stats: ["gp", "av", "rus", "rusYds", "rusYdsPerAtt", "rusTD"],
    },
    summaryRec: {
        name: "SummaryRec",
        onlyShowIf: ["WR", "TE"],
        stats: ["gp", "av", "rec", "recYds", "recYdsPerRec", "recTD"],
    },
    summaryOL: {
        name: "SummaryOL",
        onlyShowIf: ["OL"],
        stats: ["gp", "av"],
    },
    summaryKic: {
        name: "SummaryKic",
        onlyShowIf: ["K"],
        stats: ["gp", "av", "fg", "fga", "xp", "xpa"],
    },
    summaryPunt: {
        name: "SummaryPunt",
        onlyShowIf: ["P"],
        stats: ["gp", "av", "pnt", "pntYds", "pntYdsPerAtt"],
    },
    summaryDef: {
        name: "SummaryDef",
        onlyShowIf: ["DL", "LB", "CB", "S"],
        stats: ["gp", "av", "defTck", "defSk", "defFmbRec", "defInt"],
    },
};

export const PLAYER_STATS_TABLES = {
    passing: {
        name: "Passing",
        onlyShowIf: ["pss"],
        stats: [
            "gp",
            "gs",
            "qbRec",
            "pssCmp",
            "pss",
            "cmpPct",
            "pssYds",
            "pssTD",
            "pssTDPct",
            "pssInt",
            "pssIntPct",
            "pssLng",
            "pssYdsPerAtt",
            "pssAdjYdsPerAtt",
            "pssYdsPerCmp",
            "pssYdsPerGame",
            "qbRat",
            "pssSk",
            "pssSkYds",
            "pssNetYdsPerAtt",
            "pssAdjNetYdsPerAtt",
            "pssSkPct",
            "fp",
            "av",
        ],
    },
    rushing: {
        name: "Rushing and Receiving",
        onlyShowIf: ["rus", "rec"],
        stats: [
            "gp",
            "gs",
            "rus",
            "rusYds",
            "rusTD",
            "rusLng",
            "rusYdsPerAtt",
            "rusYdsPerGame",
            "rusPerGame",
            "tgt",
            "rec",
            "recYds",
            "recTD",
            "recLng",
            "recYdsPerRec",
            "recPerGame",
            "recYdsPerGame",
            "recCatchPct",
            "touches",
            "ydsPerTouch",
            "ydsFromScrimmage",
            "rusRecTD",
            "fmb",
            "fp",
            "av",
        ],
    },
    defense: {
        name: "Defense, Fumbles, and Penalties",
        onlyShowIf: ["gp"],
        stats: [
            "gp",
            "gs",
            "defInt",
            "defIntYds",
            "defIntTD",
            "defIntLng",
            "defPssDef",
            "defFmbFrc",
            "defFmbRec",
            "defFmbYds",
            "defFmbTD",
            "defFmbLng",
            "defSk",
            "defTck",
            "defTckSolo",
            "defTckAst",
            "defTckLoss",
            "defSft",
            "fmb",
            "fmbLost",
            "pen",
            "penYds",
            "av",
        ],
    },
    kicking: {
        name: "Kicking and Punting",
        onlyShowIf: ["fga", "xpa", "pnt"],
        stats: [
            "gp",
            "gs",
            "fg0",
            "fga0",
            "fg20",
            "fga20",
            "fg30",
            "fga30",
            "fg40",
            "fga40",
            "fg50",
            "fga50",
            "fgLng",
            "fg",
            "fga",
            "fgPct",
            "xp",
            "xpa",
            "xpPct",
            "pnt",
            "pntYds",
            "pntLng",
            "pntBlk",
            "pntYdsPerAtt",
            "fp",
            "av",
        ],
    },
    returns: {
        name: "Kick and Punt Returns",
        onlyShowIf: ["pr", "kr"],
        stats: [
            "gp",
            "gs",
            "pr",
            "prYds",
            "prTD",
            "prLng",
            "prYdsPerAtt",
            "kr",
            "krYds",
            "krTD",
            "krLng",
            "krYdsPerAtt",
            "allPurposeYds",
            "av",
        ],
    },
};

export const TEAM_STATS_TABLES = {
    team: {
        name: "Team",
        stats: [
            "pts",
            "yds",
            "ply",
            "ydsPerPlay",
            "tov",
            "fmbLost",
            "pssCmp",
            "pss",
            "pssYds",
            "pssTD",
            "pssInt",
            "pssNetYdsPerAtt",
            "rus",
            "rusYds",
            "rusTD",
            "rusYdsPerAtt",
            "pen",
            "penYds",
            "drives",
            "drivesScoringPct",
            "drivesTurnoverPct",
            "avgFieldPosition",
            "timePerDrive",
            "playsPerDrive",
            "ydsPerDrive",
            "ptsPerDrive",
        ],
    },
    opponent: {
        name: "Opponent",
        stats: [
            "oppPts",
            "oppYds",
            "oppPly",
            "oppYdsPerPlay",
            "oppTov",
            "oppFmbLost",
            "oppPssCmp",
            "oppPss",
            "oppPssYds",
            "oppPssTD",
            "oppPssInt",
            "oppPssNetYdsPerAtt",
            "oppRus",
            "oppRusYds",
            "oppRusTD",
            "oppRusYdsPerAtt",
            "oppPen",
            "oppPenYds",
            "oppDrives",
            "oppDrivesScoringPct",
            "oppDrivesTurnoverPct",
            "oppAvgFieldPosition",
            "oppTimePerDrive",
            "oppPlaysPerDrive",
            "oppYdsPerDrive",
            "oppPtsPerDrive",
        ],
    },
};

export const POSITIONS = [
    "QB",
    "RB",
    "FB",
    "WR",
    "TE",
    "LT",
    "LG",
    "C",
    "RG",
    "RT",
    "DT",
    "LE",
    "RE",
    "OLB",
    "MLB",
    "CB",
    "FS",
    "SS",
    "K",
    "P",
    "KR",
    "PR",
];

export const MAX_POSITION_COUNTS = {
    QB: 4,
    RB: 5,
    FB: 2,
    WR: 7,
    TE: 4,
    LT: 3,
    LG: 3,
    C: 3,
    RG: 3,
    RT: 3,
    DT: 6,
    LE: 4,
    RE: 4,
    OLB: 6,
    MLB: 4,
    CB: 6,
    FS: 3,
    SS: 3,
    K: 1,
    P: 1,
};

export const MIN_POSITION_COUNTS = {
    QB: 2,
    RB: 2,
    FB: 1,
    WR: 5,
    TE: 2,
    LT: 1,
    LG: 1,
    C: 1,
    RG: 1,
    RT: 1,
    DT: 2,
    LE: 1,
    RE: 1,
    OLB: 2,
    MLB: 2,
    CB: 4,
    FS: 1,
    SS: 1,
    K: 1,
    P: 1,
};

export const RATINGS = [
    "hgt",
    "stre",
    "spd",
    "endu",
    "thv",
    "thp",
    "tha",
    "bsc",
    "elu",
    "rtr",
    "hnd",
    "rbk",
    "pbk",
    "pcv",
    "tck",
    "prs",
    "rns",
    "kpw",
    "kac",
    "ppw",
    "pac",
];

export const COMPOSITE_WEIGHTS = {
    passingAccuracy: {
        ratings: ["tha", "hgt"],
        weights: [1, 0.2],
        skill: {
            label: "Pa",
            cutoff: 0.71,
        },
    },
    passingDeep: {
        ratings: ["thp", "tha", "hgt"],
        weights: [1, 0.1, 0.2],
        skill: {
            label: "Pd",
            cutoff: 0.71,
        },
    },
    passingVision: {
        ratings: ["thv", "hgt"],
        weights: [1, 0.5],
        skill: {
            label: "Ps",
        },
    },
    athleticism: {
        ratings: ["stre", "spd", "hgt"],
        weights: [1, 1, 0.2],
        skill: {
            label: "A",
        },
    },
    rushing: {
        ratings: ["stre", "spd", "elu"],
        weights: [0.5, 1, 1],
        skill: {
            label: "X",
        },
    },
    catching: {
        ratings: ["hgt", "hnd"],
        weights: [0.2, 1],
        skill: {
            label: "H",
            cutoff: 0.73,
        },
    },
    gettingOpen: {
        ratings: ["hgt", "spd", "rtr", "hnd"],
        weights: [1, 1, 2, 1],
    },
    passBlocking: {
        ratings: ["hgt", "stre", "spd", "pbk"],
        weights: [0.5, 1, 0.2, 1],
        skill: {
            label: "Bp",
            cutoff: 0.63,
        },
    },
    runBlocking: {
        ratings: ["hgt", "stre", "spd", "rbk"],
        weights: [0.5, 1, 0.4, 1],
        skill: {
            label: "Br",
        },
    },
    passRushing: {
        ratings: ["hgt", "stre", "spd", "prs", "tck"],
        weights: [1, 1, 0.5, 1, 0.1],
        skill: {
            label: "PR",
            cutoff: 0.63,
        },
    },
    runStopping: {
        ratings: ["hgt", "stre", "spd", "rns", "tck"],
        weights: [0.5, 1, 0.5, 1, 0.25],
        skill: {
            label: "RS",
        },
    },
    passCoverage: {
        ratings: ["hgt", "spd", "pcv"],
        weights: [0.1, 1, 1],
        skill: {
            label: "L",
            cutoff: 0.72,
        },
    },
    tackling: {
        ratings: ["spd", "stre", "tck"],
        weights: [1, 1, 2.5],
    },
    avoidingSacks: {
        ratings: ["thv", "elu", "stre"],
        weights: [1, 1, 0.25],
    },
    ballSecurity: {
        ratings: ["bsc", "stre"],
        weights: [1, 0.2],
    },
    endurance: {
        ratings: [50, "endu"],
        weights: [1, 1],
    },
    kickingPower: {
        ratings: ["kpw"],
        weights: [1],
    },
    kickingAccuracy: {
        ratings: ["kac"],
        weights: [1],
    },
    punting: {
        ratings: ["ppw", "pac"],
        weights: [1, 1],
    },
};

export const DEFAULT_ATTRIBUTES = {
    phase: 1,
    date: '07/01/2022',
    confs: DEFAULT_CONFS,
    divs: DEFAULT_DIVS,
    lid: 1,
    numGames: 16,
    numGamesDiv: 8,
    numGamesConf: 12,
    season: 1,
    userTid: null
}

