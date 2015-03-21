var EntryList = React.createClass({
    render: function() {
        var entryNodes = this.props.data.map(function(entry) {
            return (
                <Entry title={entry.title}>
                    {entry.content}
                </Entry>
            )
        });
        return (
            <div className="entryList">
                {entryNodes}
            </div>
        );
    }
});
