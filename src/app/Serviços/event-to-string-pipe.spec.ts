import { EventToStringPipe } from './event-to-string-pipe';

describe('EventToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new EventToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
