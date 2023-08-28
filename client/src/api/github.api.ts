import { instance } from "./base.api";

const commitsEndopoint = "allcommits";
const profileEndopoint = "repoinfo";

export const gitHubInfo = {
  getAllCommits: async function () {
    try {
      return await instance.get(commitsEndopoint);
    } catch (error) {
      throw new Error();
    }
  },
  getProfileInfo: async function () {
    try {
      return await instance.get(profileEndopoint);
    } catch (error) {
      throw new Error();
    }
  },
};
