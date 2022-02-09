# gecc
Good Enough Calorie Counter

## Dev Testing

Use: python3 -m http.server 8000

## Figure out/Add:
- [-] "?" with portion sizes and calorie reference guide at bottom right corner
    - Previous idea: Link to easy reference - make simple one - table popup reference

### Implemented
- [x] Add Goal daily calories
- [x] Edit goal daily calories
- [x] Function for calories remaining
- [x] Not allow negative count
- [x] New date -> Reset counter to 0
- [x] Add most recent weight
- [x] Installableness
- [x] Make sure mobile friendly
- [x] License - make public source
    - https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository
    - https://choosealicense.com/

## Consider adding:
- Push reminder to exercise at a certain time
- Add over/under for past 7 days

### Manifest notes
name: The full name of your web app.
short_name: Short name to be shown on the home screen.
description: A sentence or two explaining what your app does.
icons: A bunch of icon information — source URLs, sizes, and types. Be sure to include at least a few, so that one that fits best will be chosen for the user's device.
start_url: The index document to launch when starting the app.
display: How the app is displayed; can be fullscreen, standalone, minimal-ui, or browser.
theme_color: A primary color for the UI, used by operating system.
background_color: A color used as the app's default background, used during install and on the splash screen.

See: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs

# Copyright - GPL3

    Good Enough Calorie Counter
    Copyright (C) 2022  Matthew Rensberry <tallmtt@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
