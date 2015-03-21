var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Eva1">
                    This is one comment
                </Comment>
                <Comment author="Eva2">
                    This is *another* comment
                </Comment>
            </div>
        );
    }
});
