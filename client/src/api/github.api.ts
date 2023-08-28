import { func } from "prop-types"
import { instance } from "./base.api"


const endopoint = 'github/allcommits'


export const commits = {
    getAll : async  function(){
        return  await instance.get( endopoint )
    }
}