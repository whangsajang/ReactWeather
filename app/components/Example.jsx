var React = require('react');
var {Link} = require('react-router');
/*var Example = React.createClass({
    render: function(){
        return(
            <h2>Example Component</h2>
        )
    }
});*/

var Example = () => {
    return(
        <div>
            <h2 className="text-center example-title">Examples</h2>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Philadelphia"> Philadelphia, Pa</Link>
                </li>
                <li>
                    <Link to="/?location=Seoul"> Seoul, South Korea</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Example;