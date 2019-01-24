# MyBit WhitePaper

## Usage

### Basic Usage

Only edit the following files for changing the content of the white paper.

- `index.html`
- `css/paper.css`

### Adding a new section

- Section 10
  - Section 10.1

```html
<!-- Add the following code to the "body > #sideNav > #navbarSupportedContent > ul" -->

<li class="nav-item">
  <a class="nav-link js-scroll-trigger" href="#section-10" title="10. Section 10 Title">Section 10 Title</a>
</li>
```

```html
<!-- Add the following code to the  "body > .container"-->

<section class="paper-section p-3 p-lg-5 d-flex flex-column" id="section-10">
  <div class="my-auto">
    <h2 class="mb-5">10. Section 10 Title</h2>

    <div class="paper-item d-flex flex-column flex-md-row mb-5">
      <div class="paper-content mr-auto">
        <p>Section 10 Content - Para 1</p>
        <p>Section 10 Content - Para 2</p>
      </div>
    </div>

    <div class="paper-item d-flex flex-column flex-md-row mb-5">
      <div class="paper-content mr-auto">
        <h3 class="mb-0">10.1 Section 10.1 Title</h3>
        <div class="subheading mb-3"></div>
        <p>Section 10.1 Content - Para 1</p>
        <!--Add class `mb-0` to the `p` tag if there is no need of any gap between the paragraphs. -->
        <p>Section 10.1 Content - Para 2</p>
      </div>
    </div>
  </div>
</section>
```

- Also make necessary changes in the `table-of-contents` section.
- Add `img-fluid` class to any image that is added.
- For any content to be in blue color, enclose the content with `<span class="text-primary"></span>`

### Local Deployment
```
$ python -m SimpleHTTPServer 8080
```
