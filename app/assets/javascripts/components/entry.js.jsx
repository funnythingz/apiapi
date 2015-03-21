var Entry = React.createClass({
    render: function() {
        return (
            <div className="entry">
                <h2 className="entryTitle">
                    {this.props.title}
                </h2>
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
});
