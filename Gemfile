source 'https://rubygems.org'

# Jekyll and plugins
gem 'jekyll', '~> 3.9'
gem 'jekyll-sitemap'
gem 'kramdown-parser-gfm'  # Required for kramdown markdown parser

# Required for Ruby 4.0+ (these were removed from default gems)
gem 'base64'
gem 'bigdecimal'

# For GitHub Pages compatibility (optional, but recommended)
# gem 'github-pages', group: :jekyll_plugins

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '>= 1', '< 3'
  gem 'tzinfo-data'
end

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.1', :platforms => [:mingw, :x64_mingw, :mswin]
