import NextAuth from 'next-Auth';
import CredentialsProvider from 'next-Auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                userName: {Label: 'userName', type: 'text'},
                password: {Label: 'password', type: 'password'}
            },
            async authorize(credentials, req) {
                if(credentials?.userName === 'text' && credentials.password === 'ex') {
                    return {id: '1', name: 'text'}
                }
                return null;
            },
        })
    ]
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}