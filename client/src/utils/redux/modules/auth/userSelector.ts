export const authSelector = (state: any) => state.auth;
export const userSelector = (state: any) => state.auth?.currentUser;
export const tokenSelector = (state: any) => state.auth?.user?.token;
