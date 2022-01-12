import moment from "moment";
import { useRouter } from "next/dist/client/router";
export const FeaturedBlog = ({blogdetail}) => {
    ////console.log(blogdetail);
    const history = useRouter();
    const read = () => {
        history.push(`/blogs/${blogdetail.slug}`);
    }
    return (
        <div className="blog-featured">
            <div className="blog-image">
                <img src={blogdetail?.feature_image||`/images/logo.svg`} alt="Featured blog"/>
            </div>
            <div className="blog-d">
                <div className="blog-tag">
                   {blogdetail?.tags[0]?.name}
                </div>
                <div className="blog-title">
                {blogdetail?.title}
                </div>
                <div className="blog-date">
                {moment(blogdetail?.published_at).format("MMM, Do, Y")}
                </div>
                <button className="btn-read" onClick={read}>Read Article</button>
            </div>
        </div>
    )
}