import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {

    constructor(private httpService: HttpService) {}

    async getAllCommits(owner: string = 'nmacenco', repo: string = 'git-hub-api'): Promise<Observable<any>> {
        const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

        try {
            const response = await firstValueFrom(this.httpService.get(url))

            return response.data;
            
        } catch (error) {
            throw new Error(error)
        }
    }


    // getLastCommit(): string {
    //     return 'getLastCommit!';
    // }
    // getOneCommit(): string {
    //     return 'getOneCommit';
    // }


}
