export const ROUTER_MENU = [
    {
        label : 'Home',
        path : '/',
    },
    {
        label : 'Blog',
        path : '/blog',
    },
    {
        label : 'work',
        path : '/work',
        requiresLogin : true,
    },
]
export type TypeMenu = {
    label : string,
    path : string,
    requiresLogin : boolean
}