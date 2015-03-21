var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
        var promise = $.ajax({
            url: this.props.url,
            dataType: 'json'
        });

        promise.done(function(data) {
            this.setState({data: data});
        }.bind(this));

        promise.fail(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString())
        }.bind(this));
    },

    handleCommentSubmit: function(entry) {
        var entries = this.state.data;
        var newEntries = entries.concat([entry]);
        this.setState({data: newEntries});

        var promise = $.ajax({
            type: 'post',
            url: '/api/entries',
            dataType: 'json',
            data: {entries: entry}
        });

        promise.done(function(data) {
            this.setState({data: data});
        }.bind(this));

        promise.fail(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString())
        }.bind(this));
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="commentBox">
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                <section>
                    <h1>Comments</h1>
                    <CommentList data={this.state.data} />
                </section>
            </div>
        );
    }
});
