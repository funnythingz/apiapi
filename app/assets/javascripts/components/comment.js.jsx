var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.title}
                </h2>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
});
