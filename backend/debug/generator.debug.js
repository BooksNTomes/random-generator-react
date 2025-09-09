import dotenv from 'dotenv';

dotenv.config();
const URL = `${process.env.BACKEND_URL? process.env.BACKEND_URL : process.env.LOCAL_BACKEND_URL}${process.env.PORT}`

export const runTests = async (testNo) => {
    if (testNo == 0){
        return;
    }
    else {
        return;
    }
}

export const createGeneratorTest =  async () => {
    // Validity Test : NUMBER => SUCCESS
    const response = await fetch(`${URL}/generators-manager/create/`, 
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Numbers",
                description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
                image: "img",
                type: "NUMBER",
                list: [],
                validation: "INTEGER",
                published: false}),
        }
    );
    console.log(response);
};

export const createGeneratorTestString =  async () => {
    // CREATE

    // Validity Test : STRING => SUCCESS
    const response = await fetch(`${URL}/generators-manager/create/`, 
        {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Names",
                description: "Random names consisting up to 26 names. Can configure choosable names.",
                image: "img",
                type: "STRING",
                list: ['Angston', "Belle", "Cal", "Deirdre", "Edgar", "Ford", "Gerard", "Harvey", "Irinde", "Jeffreys", "Kelly", 
                        "Lmoe", "Moni", "Nelsie", "Oger", "Pam", "Quartz", "Rese", "Santos", "Tuve", "Ubi", "Verso", "Waxon", "Xenon",
                        "Yiev", "Zeke"
                        ],
                published: false}),
        }
    );
    console.log(response);
};

export const getGeneratorManagerTest = async () => {
    const response = await fetch(`${URL}/generators-manager/`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => response.json())
    .then(data => console.log(data));
};

export const getGeneratorsTest = async () => {
    const response = await fetch(`${URL}/generators/`, 
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => response.json())
    .then(data => console.log(data));
}

export const getGeneratorTest = async(id) => {
    const repsonse = await fetch(`${URL}/generators/${id}`,
        {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }
    )
    .then(response => response.json())
    .then(data => console.log(data));
}

export const updateGeneratorTest = async () => {
    // Numbers Test
    const newName = "Integer Numbers";
    const sampleID = '68ba902aff93bb1e5322410e';

    const response = await fetch(`${URL}/generators-manager/${sampleID}`, {
        method: "PUT",
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        // id: sampleID,
        body: JSON.stringify({
                name: newName,
                description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
                image: "img",
                type: "NUMBER",
                list: [],
                validation: "INTEGER",
                published: false}),
    });
    console.log(response);
};

export const deleteGeneratorTest = async () => {
    const sampleID = '68ba902aff93bb1e5322410e';

    const response = await fetch(`${URL}/generators-manager/${sampleID}`, {
        method: "DELETE",
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    });
    console.log(response);
};