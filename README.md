# gecc
Good Enough Calorie Counter

## Dev Testing

Use: python3 -m http.server 8000

## Figure out:
- [ ] License - make public source

### Implemented
- [x] Add Goal daily calories
- [x] Edit goal daily calories
- [x] Function for calories remaining
- [x] Not allow negative count
- [x] New date -> Reset counter to 0
- [x] Add most recent weight
- [x] Installableness
- [x] Make sure mobile friendly

## Consider adding:
- [ ] Link to easy reference - make simple one - table popup reference
- [ ] Add over/under for past 7 days

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