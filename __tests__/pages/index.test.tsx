import renderer from "react-test-renderer";
import posts from "../mocks/posts";
import Index from "../../pages/index";

describe("index page", () => {
  const props = { body: "", posts };
  const index = <Index {...props} />;

  it("renders correctly", () => {
    expect.assertions(1);
    const tree = renderer.create(index).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
