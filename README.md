# f78's website

**Jekyll Edition**

My website, but better (hopefully).

## `testing` Branch

You are currently looking at the `testing` branch. This branch contains an experimental version of my website that is
not yet ready to be published.

### Changes in this branch

- Moved away from the `github-pages` gem.
    - I did this because the versions of Jekyll, Sass and Liquid it uses are too old for my liking.
    - Regenerating files also took significantly longer.
    - Once this new version of the website is complete I'll switch over to the [GitHub Actions workflow suggested by
      Jekyll](https://jekyllrb.com/docs/continuous-integration/github-actions) to be able to use the new gems.
- I'm redoing the styles yet again.
    - Good thing I'm doing this since a lot of the functions I used are now deprecated, which was causing the output log
      to be flooded with deprecation warnings...
- Added tags to my social media accounts (as well as the View Source link on the bottom).
- Switched to [Material Symbols Rounded](https://fonts.google.com/icons?icon.style=Rounded&icon.set=Material+Symbols)
  for some icons.
- File extensions for layouts and includes will now be `.liquid`.
    - This is
      because [WebStorm's Liquid support](https://www.jetbrains.com/help/webstorm/liquid.html#supported_file_types)
      requires all files with Liquid markup to have a `.liquid` extension.
    - Other HTML files and markdown files are unaffected for now because Jekyll doesn't like these.
        - Associating them with Liquid in WebStorm doesn't work either, it breaks everything instead...
          *thanks JetBrains*
        - For now the amount of Liquid should be kept small in said files. Any large amounts of Liquid code should
          be moved to an include, where the file extension *is* supported.
