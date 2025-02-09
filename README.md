Agency Jekyll theme
====================

Agency theme based on [Agency bootstrap theme ](https://startbootstrap.com/template-overviews/agency/)

# How to use

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'


# Demo

View this jekyll theme in action [here](https://y7kim.github.io/agency-jekyll-theme)

=========
For more details, read [documentation](http://jekyllrb.com/)

# Containerized

`make container` to build the build container

All builds/work happens inside this container. It is frozen at Ruby 3.3 for compatibility reasons. 

The `Gemfile.lock` is generated as part of the build process. It may be, at some point, that deleting the `Gemfile.lock` and then rerunning `make container ; make build` is a Good Thing.

`make build` to build the site

This should build the site, leaving everything in `_site`

`make serve` to serve it locally at :4000

This should build the site and launch a preview you can reach at 

http://localhost:4000/


