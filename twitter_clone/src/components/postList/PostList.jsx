import postList from "../../postList/mock";
import postItem from "../postItem";
import PostItem from "../postItem/PostItem";
import "./index.css";

const PostList = () => {
    return (
        <div className="PostList">
            {postList.map((post) => (
                <PostItem postData={post} />
            ))}
        </div>
    );
};

export default PostList;