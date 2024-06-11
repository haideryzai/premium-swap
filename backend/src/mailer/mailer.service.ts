import { Injectable } from '@nestjs/common';
import { successResponse } from 'src/utils/responsesUtil';

@Injectable()
export class MailerService {
    constructor() {}

    public async sendForgotPasswordEmail(email: string) {
        // TODO: implement email sending logic using mailjet
        console.log("EMAIL TO SEND THE FORGET PASSWORD: ", email);
        return successResponse({}, "Email sent successfully", 200);
        
    }   
}
