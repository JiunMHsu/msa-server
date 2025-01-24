import { Module } from '@nestjs/common';
import { InvoicesModule } from './invoices/invoices.module';
import { PaymentsModule } from './payments/payments.module';
import { InvoicesController } from './invoices/invoices.controller';
import { PaymentsController } from './payments/payments.controller';

@Module({
    imports: [InvoicesModule, PaymentsModule],
    controllers: [InvoicesController, PaymentsController],
})
export class BillingModule {}
