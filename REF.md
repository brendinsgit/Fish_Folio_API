# fish-folio-api

Includes authentication and common middlewares.

## Installation

1. [Download](https://git.generalassemb.ly/sei-ec-remote/mongoose-express-auth-API-boilerplate/archive/refs/heads/main.zip) this template.
1. Move the .zip file to your `sei/projects/` directory and Unzip it (creating a
   folder) -- **NOTE:** if the folder was already unzipped, use the `mv` command
   line to move it to the `sei/projects/` directory.
1. Rename the directory from express-auth-template -> your-app-name.
1. Rename [`README.md`](README.md) to `REF.md` and use as a reference, create a new README and fill with your own content.
1. Move into the new project and `git init`.
1. Replace all instances of `'express-auth-template'` with your app name.
1. Install dependencies with `npm install`.
1. Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
2. Once everything is working, make an initial commit.

## Structure

Dependencies are stored in [`package.json`](package.json).

The most important file for understanding the structure of the template is
`server.js`. This is where the actual Express `app` object is created, where
the middlewares and routes are registered, and more. To register a routefile,
follow the pattern established here with `exampleRoutes` and `userRoutes`. If
you want to add any middlewares to your app, do that here.

The `app` directory contains models and route files. Models are simply Mongoose
models. To create your own, follow the patterns established in
`app/models/example.js`. Route files are somewhat similar to controllers in
Rails, but they cover more functionality, including serialization and deciding
which HTTP verbs to accept and what to do with them.

The `config` directory holds just `db.js`, which is where you specify the name
and URL of your database.

The `lib` directory is for code that will be used in other places in the
application. The token authentication code is stored in `lib/auth.js`. The
other files in `lib` deal with error handling. `custom_errors.js` is where all
the different custom classes of errors are created. If you need some other kind
of error message, you can add it here. There are also some functions defined
here that are used elsewhere to check for errors. `lib/error_handler.js` is a
function that will be used in all your `.catch`es. It catches errors, and sets
the response status code based on what type of error got thrown.

You probably will only need to interact with files in `app/models`,
`app/routes`, and `server.js`. You'll need to edit `db/config.js` just once,
to change the name of your app.
