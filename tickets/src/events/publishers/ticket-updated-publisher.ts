import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@josdugantickets/common';

class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

export { TicketUpdatedPublisher };
