//import orarend from "../data/orarend.js"
import {dbAll, dbGet, dbRun } from '../util/database.js'
export const getOrarend= async(req,res)=> {
    const sql ="SELEST *FROM lessons"
    const orarend=await dbAll(sql)
    res.status(200).json(orarend)

}

export const getOrarendById=  async(req,res)=> {
    const sql = "SELECT * FROM lessons WHERE id=?"
    const orarend= await dbGet(sql, [req.params.id])
    const id= req.params.id
    if (id<0 || id >= orarend.length){
        return res.status(404).json({message:"Orarend nem talalhato" })
    }
    res.status(200).json(orarend)

}

export const createOrarend= async(req,res)=> {
    const sql= "INSERT INTO lessons (id, day, classes, subject) VALUES (?, ?, ?)"
    const orarend= await dbRun(sql,[req.body.id, req.body.day, req.body.classes, req.body.subject])
    const {nap, ora, nev}=req.body
    if(!nap|| !ora || !nev){
        return res.status(404).json({message: "Missing data"})
    }
    const newOrarend={nap, ora, nev}
    orarend.push(newOrarend)
    res.status(201).json(newOrarend)
}

export const updateOrarend = async(req,res)=> {
    const sql="UPDATE lessons SET id = ?, day = ?, classes = ?, subject = ? WHERE id=?"
    const orarend= await dbRun(sql,[req.body.id, req.body.day, req.body.classes, req.body.subject])
    const id= req.params.id
    if (id<0 || id >= orarend.length){
        return res.status(404).json({message:"Orarend nem talalhato" })
    }
    const {nap, ora, nev}=req.body
    if(!nap|| !ora || !nev){
        return res.status(404).json({message: "Missing data"})
    }
    orarend[id]={nap, ora, nev}
    res.status(200).json(orarend[id])
}
export const deleteOrarend=  async(req,res)=> {
    const sql ="DELETE FROM lessons WHERE id =?"
    const orarend= await dbRun(sql, [req.params.id])
    const id=req.params.id
    if (id <0 || id >= orarend.length){
        return res.status(404).json({message:"Orarend nem talalhato"})
    }
    orarend.splice(id, 1)
    res.status(200).json({message:"Delete successful"})
}