import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom } from 'rxjs';
import { convertDateFormat } from 'src/utils/functions';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class GithubService {

    constructor(private httpService: HttpService) {}

    async getAllCommits(owner: string = 'nmacenco', repo: string = 'git-hub-api'): Promise<Observable<any>> {
        const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

        try {
            const {data} = await firstValueFrom(this.httpService.get(url))
            
            const response = await data.map( ({commit}) => {
                
                const mapedCommit = {
                    name : commit.author.name,
                    email : commit.author.email,
                    date : convertDateFormat(commit.author.date), 
                    message : commit.message
                }
                
                return mapedCommit
            })

            return response;
            
        } catch (error) {
            
            throw ErrorManager.createSignatureError(error.message , error.response.status)
        }
    }


    // getLastCommit(): string {
    //     return 'getLastCommit!';
    // }
    // getOneCommit(): string {
    //     return 'getOneCommit';
    // }


}
