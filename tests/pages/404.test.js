import { shallow } from "enzyme";
import NotFound from "../../pages/404";
describe('404', () => {

    test('should render 404 page', () => {
        const wrapper = shallow(<NotFound />)
        expect(wrapper).toMatchSnapshot()
    });

});
