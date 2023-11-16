import { localsState } from "../../data/locals";
import { Local } from "../../types";

export const getLocalsDataById = (district: string): Local[] =>
  localsState.locals.filter((local) => local.district === district);
