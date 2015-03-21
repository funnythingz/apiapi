var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var title = React.findDOMNode(this.refs.title).value.trim();
        var content = React.findDOMNode(this.refs.content).value.trim();

        if (!title || !content) {
            return;
        }
        this.props.onCommentSubmit({title: title, content: content});
        React.findDOMNode(this.refs.title).value = '';
        React.findDOMNode(this.refs.content).value = '';
    },

    render: function() {
        return (
            <form class="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholfer="Title?" ref="title" />
                <input type="content" placeholfer="Content?" ref="content" />
                <input type="submit" value="Yo!" />
            </form>
        );
    }
});
