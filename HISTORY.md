# Release notes
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

### 3.0.1

- Fix whitespace normalization in HTML parsing
- Fix invalid structure when parsing HTML

### 3.0.0

- Rewrite of the internal engine
- Use `slate` for data modeling of the document
- Deserialized document can't be empty anymore
- Markdown
    - Follow GFM (GitHub) for slashes escaping

### 2.4.0

- Add `SlateUtils` to decode/encode for [Slate](https://github.com/ianstormtaylor/slate)
- Markdown lists are indented to the bullet size

### 2.3.0

- Add support for named images ([#17](https://github.com/GitbookIO/markup-it/issues/17))
- Fix empty tables
- Don't add `style` attribute to table cells when alignment is not defined
