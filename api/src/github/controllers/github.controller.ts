import { Controller, Get } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {
    constructor(private readonly githubService: GithubService) {}

    @Get()
    getHello(): string {
      return this.githubService.getHello();
    }
}
