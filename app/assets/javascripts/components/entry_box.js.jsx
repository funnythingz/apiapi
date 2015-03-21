var EntriesBox = React.createClass({
    loadEntriesFromServer: function() {
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

    handleEntrySubmit: function(entry) {
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
        this.loadEntriesFromServer();
        setInterval(this.loadEntriesFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="entriesBox">
                <EntryForm onEntrySubmit={this.handleEntrySubmit} />
                <section>
                    <h1>Entries</h1>
                    <EntryList data={this.state.data} />
                </section>
            </div>
        );
    }
});
