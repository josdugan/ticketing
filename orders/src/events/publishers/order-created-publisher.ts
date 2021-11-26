import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@josdugantickets/common';

class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

export { OrderCreatedPublisher };
