import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@josdugantickets/common';

class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

export { ExpirationCompletePublisher };
