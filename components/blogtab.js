const BlogTabs = ({active}) => {
    return (
        <div className="blog-tabs">
            <div className="tabs">
                <ul>
                    <li className='tab active'>
                        <a>All Categories</a>
                    </li>
                    <li className='tab'>
                        <a>Finance</a>
                    </li>
                    <li className='tab'>
                        <a>Education</a>
                    </li>
                    <li className='tab'>
                        <a>Tax</a>
                    </li>
                    <li className='tab'>
                        <a>Health</a>
                    </li>
                </ul>
            </div>
            <div className="search-tab">

            </div>
        </div>
    )
}
export default BlogTabs;