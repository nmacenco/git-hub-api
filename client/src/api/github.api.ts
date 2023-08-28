import { instance } from "./base.api"


const commitsEndopoint = 'allcommits'
const profileEndopoint = 'repoinfo'


export const gitHubInfo = {
    getAllCommits : async  function(){
        return  await instance.get( commitsEndopoint )
    },
    getProfileInfo : async  function(){
        return  await instance.get( profileEndopoint )
    }
}