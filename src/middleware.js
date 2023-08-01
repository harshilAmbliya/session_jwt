import { withAuth } from "next-auth/middleware"
export default withAuth(

    function middleware(req) {

       
    },
    {
        callbacks: {
            authorized: async (req) => {
                
            },
        },
    }
)

export const config = { matcher: ["/dashboard"] }