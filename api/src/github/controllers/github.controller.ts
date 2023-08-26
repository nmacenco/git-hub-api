import { Controller, Get, Query } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {
    constructor(private readonly githubService: GithubService) {}


    @Get('/allcommits')
    getAllCommits(@Query('owner') owner?: string, @Query('repo') repo?: string) {
      return this.githubService.getAllCommits(owner, repo);
    }
}
