FROM ruby:3.3.0

WORKDIR /site
COPY Gemfile /site/
# COPY Gemfile.lock /site/

RUN bundle install

CMD ["bash"]
