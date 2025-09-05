import dotenv from 'dotenv';

dotenv.config()
const PORT = process.env.PORT;

export default async function createGeneratorTest(){
    // CREATE

    // Validity Test : NUMBER => SUCCESS
    // const response = await fetch(`http://localhost:${PORT}/generators-manager/create/`, 
    //     {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: "Numbers",
    //             description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
    //             image: "img",
    //             type: "NUMBER",
    //             list: [],
    //             validation: "INTEGER",
    //             published: false}),
    //     }
    // );
    // console.log(response);

    // Validity Test : STRING => SUCCESS
    // const response = await fetch(`http://localhost:${PORT}/generators-manager/create/`, 
    //     {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: "Names",
    //             description: "Random names consisting up to 26 names. Can configure choosable names.",
    //             image: "img",
    //             type: "STRING",
    //             list: ['Angston', "Belle", "Cal", "Deirdre", "Edgar", "Ford", "Gerard", "Harvey", "Irinde", "Jeffreys", "Kelly", 
    //                     "Lmoe", "Moni", "Nelsie", "Oger", "Pam", "Quartz", "Rese", "Santos", "Tuve", "Ubi", "Verso", "Waxon", "Xenon",
    //                     "Yiev", "Zeke"
    //                     ],
    //             published: false}),
    //     }
    // );
    // console.log(response);
}
