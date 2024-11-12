import { Duration } from '../../../../src/common/helpers/duration';

describe('Duration', () => {
    let duration: Duration;

    beforeEach(async () => {
        duration = new Duration(1, 2, 3);
    });

    // TODO: add tests
    describe('run', () => {
        it('should ...', () => {
            expect(duration.toSeconds()).toEqual(3723);
        });
    });
});
