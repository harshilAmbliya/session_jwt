import { withAuth } from "next-auth/middleware"
export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {

        // console.log(req.nextauth.token)
    },
    {
        callbacks: {
            authorized: async (req) => {
                // // const cookie = req.req.cookies.getAll();
                // // const cookies = request.req.cookies.getAll();
                // // console.log("cookies",cookies);
                // const { name, email, picture, sub } = await req.token;
                // // const token = 
                // console.log("datas",name, email, picture, sub);
                // console.log(req.req.cookies.getAll());
                // // if(token && req.token.)

            },
        },
    }
)

export const config = { matcher: ["/dashboard"] }