import { RootState } from "../store";

export const userSelector = (store: RootState) => store.user.userName;
