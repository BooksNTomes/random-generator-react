async function createGeneratorTest(){
    const testNumberGenerator = {
        name: "Numbers",
        description: "The classic, supports only integer numbers in this version. Max and Min is configurable.",
        img:"",
        type:"NUMBER",
        list:[],
        validation:"INTEGER",
        published: false
    }

    response = await fetch("/generators-manager/create", {
        method: "POST",
        body: testNumberGenerator
    })

    console.log(response);
}

export default createGeneratorTest();