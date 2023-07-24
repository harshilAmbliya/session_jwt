import { authOptions } from './libs/authOptions'
// import Usersession from '@/components/Usersession'
import User from '@/components/Usersession'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'


const Home = async () => {

    const session = await getServerSession(authOptions)
    if(!session){
        redirect("/login")
        
    }
    return (
        <>
            <div>getserver session</div>
            <div>{JSON.stringify(session)}</div>
            <User />
        </>
    )
}

export default Home