import sqlite from "sqlite3"

const db = sqlite.Database("./data/databese.sqlite")

function dbAll(sql, params=[]){
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows =>{
            if(err){
                reject(err)
            }
            else{resolve(rows)}
        }))
    })
}

function dbGet(sql, params=[]){
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row =>{
            if(err){
                reject(err)
            }
            else{resolve(row)}
        }))
    })
}

function dbRun(sql, params=[]){
    return new Promise((resolve, reject) => {
        db.all(sql, params, function(err){
            if(err){
                reject(err)
            }
            else{resolve(this)}
        })
    })
}

async function initalizeDb(){
    await dbRun("Drop table if exist lessons")
    await dbRun("Create table if not exist lessons (id integer primary key autoincremente, day string, classes integer, subject string)")

    const lessons =[
        
            {id: 1, day:"hetfo", classes: 1, subject: "Matek"},
            {id: 2, day:"hetfo", classes: 2, subject: "tori"},
            {id: 3, day:"hetfo", classes: 33, subject: "magyar"},
            {id: 4, day:"kedd", classes: 1, subject: "Matek"},
            {id: 5, day:"kedd", classes: 2, subject: "Matek"},
        
        
]
    for (const lesson of lessons){
        for (const classItem of lesson){
            await dbRun(`insert into lessons (id, day, classes, subject)`)

        }
    } 
}
export { dbAll, dbGet, dbRun, initalizeDb}