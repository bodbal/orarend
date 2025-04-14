import orarend from "../data/orarend.js"
export const getOrarend= (req,res)=> {
    res.status(200).json(orarend)

}
export const getOrarendById=  (req,res)=> {
    const id= req.params.id
    if (id<0 || id >= orarend.length){
        return res.status(404).json({message:"Orarend nem talalhato" })
    }
    res.status(200).json(orarend)

}

export const createOrarend= (req,res)=> {
    const {nap, ora, nev}=req.body
    if(!nap|| !ora || !nev){
        return res.status(404).json({message: "Missing data"})
    }
    const newOrarend={nap, ora, nev}
    orarend.push(newOrarend)
    res.status(201).json(newOrarend)
}

export const updateOrarend =(req,res)=> {
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
export const deleteOrarend=  (req,res)=> {
    const id=req.params.id
    if (id <0 || id >= orarend.length){
        return res.status(404).json({message:"Orarend nem talalhato"})
    }
    orarend.splice(id, 1)
    res.status(200).json({message:"Delete successful"})
}