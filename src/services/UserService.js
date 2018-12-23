import { apiRoot } from "../constantes/apiInformations";
import { get} from "../util/http";

export const getUserById = (userId, token, doWhenOK, doWhenError) =>
  get(apiRoot + "api/users/" + userId, doWhenOK, doWhenError, token);


