/** @jsx React.DOM */

'use strict';

var React = require('react');

var ImageComponent = require('./image');

module.exports = React.createClass({
    displayName: 'Article',

    getImageElement: function () {
        var src;

        // use meta:og image if available
        if (this.props.article.content && this.props.article.content.image) {
            src = this.props.article.content.image;
        }

        // use default image if meta:og is missing
        if (!src && this.props.article.image) {
            src = this.props.article.image;
        }

        return src ? <ImageComponent src={src} /> : null;
    },

    getTitle: function ()  {
        return (
            <h3 className='article-header'><a href={this.props.article.url} className=''>{this.props.article.title}</a></h3>
        );
    },

    getDescription: function () {
        var description = this.props.article.description;
        return description ? <p className='article-description'>{description}</p> : null;
    },

    getDomain: function() {
        var domain = this.props.article.host;
        return domain;
    },

    render: function () {
        return (
            <div className='article'>
                <div className='itemPadder'>
                    <a href={this.props.article.url} className=''>
                        {this.getImageElement()}
                    </a>
                        <div className='caption'>
                            <p>{this.getDomain()}</p>
                            {this.getTitle()}
                            {this.getDescription()}
                        </div>
                </div>
            </div>
        );
    }
});
