
import {HttpException, HttpStatus} from '@nestjs/common'

export class ErrorManager extends Error {
    constructor({ type, message }: { type: keyof typeof HttpStatus, message: string }) {
      super(`${type} :: ${message}`);
    }
  
    public static createSignatureError(message: string, statusCode?: number) {
        const name = message.split(' :: ')[0]
        if (statusCode) {
            throw new HttpException({ message, status: statusCode }, statusCode);
        } else {
            throw new HttpException(message , HttpStatus[name]);
        }
    }
  }
