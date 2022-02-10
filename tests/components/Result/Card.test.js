import { shallow } from "enzyme";
import Card from "../../../src/components/Result/Card";
describe('Card', () => {

    test('should render Card', () => {
        const wrapper = shallow(<Card />)
        expect(wrapper).toMatchSnapshot()
    });

});
