import create from "./http-Service";

export interface User {
  id: number;
  name: string;
}

export default create("/users");
