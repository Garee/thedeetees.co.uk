import renderer from "react-test-renderer";
import posts from "../mocks/posts";
import Post from "../../pages/posts/[id]";

describe("post page", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    const props = posts[0];
    const post = <Post {...props} />;
    const tree = renderer.create(post).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
