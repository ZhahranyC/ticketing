import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@zctickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
