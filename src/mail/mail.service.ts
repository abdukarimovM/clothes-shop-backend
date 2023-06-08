import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Customer } from '../customer/entities/customer.entity';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendCustomerConfirmation(customer: Customer): Promise<void> {
    const url = `${process.env.API_HOST}/api/users/activate/${customer.activation_link}`;
    await this.mailerService.sendMail({
      to: customer.email,
      subject: 'Welcome to Clothes Shop! Confirm you Email!',
      template: './confirmation',
      context: {
        name: customer.first_name,
        url,
      },
    });
  }
}
