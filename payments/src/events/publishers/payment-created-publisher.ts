import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@josdugantickets/common';

class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

export { PaymentCreatedPublisher };
