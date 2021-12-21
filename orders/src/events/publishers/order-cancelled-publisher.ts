import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@josdugantickets/common';

class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

export { OrderCancelledPublisher };
