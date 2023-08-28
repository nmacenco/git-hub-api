import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, firstValueFrom } from 'rxjs';
import { convertDateFormat } from 'src/utils/functions';
import { ErrorManager } from 'src/utils/error.manager';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {

    private readonly authToken: string;

    constructor(
        private httpService: HttpService, 
        private configService: ConfigService,
    ) {
        this.authToken = this.configService.get<string>('GIT_HUB_TOKEN');
    }

    async getAllCommits(owner: string = 'nmacenco', repo: string = 'git-hub-api'): Promise<Observable<any>> {
        const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
        
        const requestOptions = {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
            },
          };

        try {
            const {data}= await firstValueFrom(this.httpService.get(url, requestOptions))

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


    async getRepoInfo(owner: string = 'nmacenco', repo: string = 'git-hub-api'): Promise<any> {
        const url = `https://api.github.com/repos/${owner}/${repo}`;
        
        const requestOptions = {
            headers: {
              Authorization: `Bearer ${this.authToken}`,
            },
          };

        try {
            const {data}= await firstValueFrom(this.httpService.get(url, requestOptions))

            const response = {
                name : data.name, 
                fullName : data.full_name, 
                owner : data.owner.login, 
                avatar : data.owner.avatar_url, 
                profileUrl : data.owner.html_url, 
                repoUrl : data.html_url, 
                description : data.description, 
                language: data.language

            }

            return response;
            
        } catch (error) {
            
            throw ErrorManager.createSignatureError(error.message , error.response.status)
        }
    }




}
