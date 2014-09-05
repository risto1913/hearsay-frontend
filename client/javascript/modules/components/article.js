/** @jsx React.DOM */

'use strict';

var React = require('react');

var ImageComponent = require('./image');
var IconComponent = require('./icon');

var dateFormat = require('dateformat');

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

    getSource: function () {
            var toBeRemoved = 'www.';
            var source = this.props.article.host;
            if (source && source.indexOf(toBeRemoved) != -1) source = source.substr(0, source.indexOf(toBeRemoved)) + source.substr(source.indexOf(toBeRemoved)+toBeRemoved.length);
            return source;
        },
    getDomainImage: function() {
        var prefix = 'http://g.etfv.co/http://';
        var domain = this.props.article.host;
        var src = prefix+domain;
        //return '<img src="'+src+'" />';

        return src ? <IconComponent src={src} /> : null;
    },
    getDate: function() {
        var d;
        d = this.props.article.posted;
        var cpub = dateFormat(d, "dddd dd mmmm h:MM");
        var pub = cpub;
        return pub;
    },

    getTags: function() {
        var cats = this.props.article.categoty;
        return cats;
    },
    getArticleLink: function () {
            return this.props.article.content ? '/article/' + encodeURIComponent(this.props.article.url) : this.props.article.url;
    },

    render: function () {
        return (
            <div className='article'>
                <div className='itemPadder'>
                    <a href={this.props.article.url} className=''>
                        {this.getImageElement()}
                    </a>
                        <div className='caption'>
                            <p className='meta'>
                                {this.getDomainImage()}&nbsp;
                                {this.getSource()}&nbsp;
                                {this.getDate()}&nbsp;
                                {this.getTags()}&nbsp;</p>
                            <div className='padder'>
                            {this.getTitle()}
                            {this.getDescription()}
                            </div>
                        </div>
                </div>
            </div>
        );
    }
});
