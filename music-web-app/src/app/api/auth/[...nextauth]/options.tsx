import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: AuthOptions = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: " Enter your password " },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
            if (!credentials) {
                return null;
            }
            const { username, password } = credentials;
            console.log(username, password)
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
            if (user) {
                // Any object returned will be saved in `user` property of the JWT
                return user
            } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null 
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user && token ) {
                // token.email = user.data.auth.email;
                // token.username = user.data.auth.userName;
                // token.user_type = user.data.auth.userType;
                // token.accessToken = user.data.auth.token;
            }

            return token;
        },
        session: ({ session, token, user }) => {
            if (token) {
                // session.user.email = token.email;
                // session.user.username = token.userName;
                // session.user.accessToken = token.accessToken;
            }
            return session;
        },
    },
    pages : {
        signIn:"/home"
    },
    session : {
        strategy : "jwt"
    },
    secret:process.env.AUTH_SECRET
}