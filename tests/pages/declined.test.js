import { shallow } from 'enzyme'
import DeclinedPage from '../../pages/declined';

describe('DeclinedPage', () => {
    test('should render DeclinedPage', () => {
        const wrapper = shallow(<DeclinedPage />)
        expect(wrapper).toMatchSnapshot()
    });

});
