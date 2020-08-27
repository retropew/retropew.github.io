

# RetroPEW

A collection of new and old shooters and where to get them.

## Contributing

Adding games or modifying something incorrect about an entry is done through a GitHub pull request, if you're willing to do the work. Otherwise, just open an issue or reach out to [Michael via Twitter](https://twitter.com/michaelenger) if you don't have a GitHub account.

The information for the games are in the `_data/games.yml` file. The list is kept in alphabetical order to easier avoid duplicates, so it's just a matter of adding your game to either the `new_releases` or the `classics` list, depending on whether it's a new game or a re-release of a classic.

There is no hard rule on what constitutes a new release when an old game is updated, but in the cases of _Blood: Fresh Supply_ and _Duke Nukem 3D: 20th Anniversary World Tour_, the original games are still available so the new versions are considered separate and put in the "New Releases" list. This page isn't the arbiter of what constitutes a "new release" vs. a "classic", but it's to make it easier for people to pick the version they want.

The game data is structured like so:

```yaml
- title: Game Title
  release_date: "original release date"
  image: nameoffile.real
  website: https://officialwebsite
  platforms:
    - platform1
    - platform2
    - platform3
  links:
    store1: https://...
    store2: https://...
    store3: https://...
```

The `release_date` should be the date when the game was first released in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format and needs to be wrapped in `" "` so that Jekyll doesn't complain when rendering the page. If the date is unknown just use `TBD`, and if the announced release date is just a year with no date use 31 December of that year.

The `image` field should be the full filename including file extension.

Once you've added the game please also go into the `index.html` file and set the `last_updated` variable to be the current date.

### Images

Images should be roughly 190x262 and are placed in the `assets/games` directory. The standard for the filenames is the full title of the game with no spaces, symbols, or capitalisation, but just use your best judgement.

### Platforms

Available platforms:

* `linux`
* `mac`
* `playstation`
* `switch`
* `windows`
* `xbox`

There may come a time when we need to differentiate more between platforms, like after the PlayStation 5 and Xbox Series X are released, but for now it's simpler to just use the generic `playstation` and `xbox` names.

Please keep the list of platforms in alphabetical order.

### Store Links

Available stores:

* `gog` ([GOG.com](https://www.gog.com/))
* `humble` ([Humble Bundle](https://www.humblebundle.com/))
* `itch` ([itch.io](https://itch.io/))
* `playstation` ([PlayStation Store](https://store.playstation.com))
* `switch` ([Nintendo eShop](https://www.nintendo.com/games))
* `xbox` ([Microsoft Store](https://www.microsoft.com/en-us/store/new/games/xbox))

Please keep the links list in alphabetical order and let us know if there are other stores we can add.

## Requirements

* [Ruby](https://www.ruby-lang.org/)
* [Jekyll](https://jekyllrb.com/)

## Running

The site is a very basic Jekyll page and should just require installing dependencies and serving.

```shell
bundle install
jekyll serve
```

## License

The assets are Copyright their respective creators and the code is licensed under the MIT License.
