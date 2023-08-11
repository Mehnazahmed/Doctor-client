import { useEffect, useState } from "react";


const useAdmin =email=>{
    const [isAdmin,setIsAdmin]=useState(false);
    const [isAdminLoadig,setIsAdminLoading]=useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://y-ten-iota.vercel.app/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsAdmin(data.isAdmin);
            setIsAdminLoading(false);

        })
        }
    },[email]);
    return [isAdmin,isAdminLoadig]
    
    
}
export default useAdmin;