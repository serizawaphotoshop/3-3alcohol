const dataLists = [
    { age:34, name:"佐藤"},
    { age:11, name:"鈴木"},
    { age:19, name:"高橋"},
    { age:24, name:"田中"},
    { age:102,name:"伊藤"},
    { age:55, name:"渡辺"},
    { age:20, name:"山本"},
]

// console.log(dataLists[1].age);
function takeAlcohol(){
    for(let dataList of dataLists){
        if(dataList.age>=20){
            console.log(`${dataList.name}さんにお酒を提供します。`)
        }
    }
}

function countPayment(){
    for(let dataList of dataLists){
        const adultPrice=3000;
        if(dataList.age>=20){
            console.log(`${dataList.name}さんのお勘定は${adultPrice}円です。`);
        }else{
            console.log(`${dataList.name}さんのお勘定は${adultPrice/2}円です。`)
        }
    }
}

takeAlcohol();
countPayment();