/**
 * @jsx React.DOM
 */

 var React = require('react');

var MasonryMixin = {
    masonry: false,
    getInitialState: function() {
        return {
            masonry: false
        }
    },
    componentDidMount: function(domNode) {
        if (!this.masonry) {
            this.masonry = new Masonry(this.refs.masonry.getDOMNode(), {
                itemSelector: '.article'
            })
            this.refs.masonryContainer.getDOMNode().focus()
        }
    },
    componentDidUpdate: function() {
        this.masonry.reloadItems()
        this.masonry.layout()
    }
}

module.exports = MasonryMixin;
