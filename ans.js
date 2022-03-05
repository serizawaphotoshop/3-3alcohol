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

for(let dataList of dataLists){
    if(dataList.age>=20){
        console.log(`${dataList.name}さんにお酒を提供します。`)
    }
}
for(let dataList of dataLists){
    if(dataList.age>=20){
        console.log(`${dataList.name}さんのお勘定は3000円です。`);
    }else{
        console.log(`${dataList.name}さんのお勘定は1500円です。`)
    }
}