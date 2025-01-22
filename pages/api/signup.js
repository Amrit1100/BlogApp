import client from "@/lib/mongodb"
export default async function handler(req, res) {
    if (req.method === "POST"){
        let name = req.body.name
        let email = req.body.email
        let password = req.body.password
        if (!name || !email || !password){
            res.json({error : "All fields required!"})
        }else{
            let username = email.split("@")[0]
            try{
                client.connect()
                let db = client.db("BlogApp")
                let users = db.collection("users")
                let user = await users.findOne({email})
                if (user){
                  res.json({response : "userexist"})
                }else{
                  let a = await users.insertOne({name,email,password,username, isverified : "false"})
                  if (a.acknowledged){
                      res.status(200).json({"response" : "success"})
                  }
                }
          }catch{
              res.status(400).json({response : "databaseConnectionError"})
             }
        }
    
    }else{
        res.status(400).json({error : "This type of request is not allowed."})
    }
  }