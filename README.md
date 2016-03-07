# Bloc Chat

A SPA chat application made using Ruby on Rails and Angularjs.

### Features

Users are prompted to set a username when they first access the app.  The username is tracked using cookies set with Angular's ng-cookies service.  Once your username is set you will be able to view a list of all chat rooms. When you click on one of the chat room names, the chat room, with all its associated messages will be displayed. As a user you will be able to send messages in the chat room window.

### How it works

The Rails backend is setup to render json upon http requests from the AngularJS frontend. All of the frontend assets are organized and served by bower.  Two gems have been added to help with the communication between Rails and Angular: 'angular_rails_csrf' and 'angular-rails-templates'.  The former configures Angular to send the Rails-generated csrf-tokens along with any http requests as a X-XSRF-TOKEN header.  The latter allows you to store angular templates in your assets/javascripts directory.

### Running Locally

If you want to clone the repo and run the app locally, you must have ruby, rails, postgresql, node.js, and bower installed. First, clone the repo, then create a config/database.yml file in the style of the config/database.yml.sample file included in the repo (replace all isntances of 'app-name' with your local app's name). Then simply run:

```
$ bundle install
$ rake db:create
$ rake db:migrate
$ rails s
```

Optionally, you can run `$ createuser -P -s -e [username]` before running `rake db:create` to set a unique username for your postgres user.  Otherwise, postgres should just create a user for you with the same name as your app.
