import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { Link } from 'lucide-react'


const Signup = () => {
  const { toast } = useToast()
  let [name, Setname] = useState()  
  let [loading, Setloading] = useState(false)  
  let [email, Setemail] = useState()
  let [password, Setpassword] = useState()
  let [cpassword, Setcpassword] = useState()

  const makesignup = async()=>{
    if (!email || !name || !password || !cpassword){
        toast({title: "All fields required!", variant : "destructive"})
    }else if (password!= cpassword){
        toast({title: "Passwords don't match!", variant : "destructive"})
    }else{
        Setloading(true)
    let response = await fetch("/api/signup", {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({name,email,password})
    })

        let data = await response.json()
        Setloading(false)
        if (data.response === "userexist"){
            toast({title: "Email already exist! Please Login", variant : "destructive"})
        } else if (data.response === "databaseConnectionError"){
            toast({title: `Something went wrong! Try again`, variant : "destructive"})
        }else if (data.response === "success"){
            toast({title: `Account created. Open Gmail to verify!`, variant : "success"})
        }
    }
}

  return (
    <div>
     
      <section className="bg-gray-5">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          BlogApp
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <div>
              <div className='my-4'>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" onChange={(e)=>{Setname(e.target.value)}}/>
                  </div>

                  <div className='my-4'>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=>{Setemail(e.target.value)}}/>
                  </div>
                  <div className='my-4'>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{Setpassword(e.target.value)}}/>
                  </div>
                  <div className='my-4'>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{Setcpassword(e.target.value)}}/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button className="w-full my-4 text-white bg-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={makesignup}>{loading?"Please Wait...":"Create an Account"}</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </div>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Signup
