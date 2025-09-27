/**
 * FalseDB api is a static generator array consisting of objects that are structured nearly the same as mongodb documents,
 * This is to test expected database data for the manager/admin pages.
 * Status: Working, but is still used as the data, as backend dev is halted for now.
 */

export const staticGenerators = [
        {
            _id: 0,
            name: "Integers",
            description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
            image: null,
            type: "NUMBER",
            validation: "INTEGER",
            appendMethod: ',',
            published: true, // [unused] For Backend Implementation
        },
        {
            _id: 1,
            name: "Names",
            description: "Random names consisting up to 26 names. Can configure choosable names.",
            image: null,
            type: "STRING",
            list: ['Angston', "Belle", "Cal", "Deirdre", "Edgar", "Ford", "Gerard", "Harvey", "Irinde", "Jeffreys", "Kelly", 
                        "Lmoe", "Moni", "Nelsie", "Oger", "Pam", "Quartz", "Rese", "Santos", "Tuve", "Ubi", "Verso", "Waxon", "Xenon",
                        "Yiev", "Zeke"
                        ],
            appendMethod: ',',
            published: true, // [unused] For Backend Implementation
        },
        {
            _id: 2,
            name: "Strings",
            description: "Generates strings using random characters. Can configure choosable characters",
            image: null,
            type: "STRING",
            list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z'
                    ],
            appendMethod: '',
            published: true,  // [unused] For Backend Implementation
        },
        {
            _id: 3,
            name: "Floats",
            description: "Generates floating point numbers",
            image: null,
            type: "NUMBER",
            validation: "FLOAT",
            appendMethod: ',',
            published: true,   // [unused] For Backend Implementation
        },
        {
            _id: 4,
            name: "Appended Numbers",
            description: "When set to generate multiple numbers, this generator appends said generated numbers. Only supports integers",
            image: null,
            type: "NUMBER",
            validation: "INTEGER",
            appendMethod: '',
            published: true,   // [unused] For Backend Implementation
        },
        {
            _id: 5,
            name: "Basic Password",
            description: "Generates random strings or 'passwords' using characters, numbers, and some special characters",
            image: null,
            type: "STRING",
            list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*',
                    ],
            appendMethod: '',
            published: true, // [unused] For Backend Implementation
        }
    ];