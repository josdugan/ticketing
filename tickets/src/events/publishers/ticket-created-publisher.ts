import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@josdugantickets/common';

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

export { TicketCreatedPublisher };
