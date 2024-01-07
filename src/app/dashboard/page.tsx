import Dashboard from "@/components/Dashboard"
import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

const Page = () => {
    const { getUser } = getKindeServerSession()  // hence this is a server component
    const user = getUser()  // this works but 
    
    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')  // if user is not logged in

    const dbUser = db.user.findFirst({
        where: {
            id: user.id
        }
    })
    if(!dbUser) redirect('/auth-callback?origin=dashboard')  // if user is not in db
    return <Dashboard />
}

export default Page