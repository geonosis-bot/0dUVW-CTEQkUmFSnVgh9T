# Golee Site Template 

Base repository to create club's websites.

Made with Jekyll.

## Development

`bundle exec jekyll serve`

Go to `http://localhost:4000`

## Variables

Currently, there are these variables inside the `_data/manifest.json` file. By editing those variables it is possible to change the site behavior and design.

It's divided into modules and a main configuration.

### Main

- `is_undermaintenance`: boolean value that defines website status
- `logo_url`: Logo image of the club
- `club_name`: Club's name
- `first_color`: HEX color
- `second_color`: HEX color
- `text_on_first_color`: HEX color
- `text_on_second_color`: HEX color
- `subpath`: eventual subdomain of the website


### Modules

- `modules`
    - `intro`: Intro module object
        - `background_url`
        - `title` 
        - `subtitle`
    - `contacts`: Contacts module object
        - `phone`
        - `mobile`
        - `email`

To enable/disable modules just remove or add them to the `modules` list.

-------------------------

**Note**: to see changes you should maybe re-run `bundle exec jekyll serve`, changes in `_config.yml` does not support live update.