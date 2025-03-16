---
layout: post
title: Test
---

{:external: target="_blank" rel="noopener noreferrer"}

This draft is used to test styling. It will never be published to the final website.

If you're confused by some of the syntax in this file, check out
the [Kramdown quick reference](https://kramdown.gettalong.org/quickref.html){:external}.

## Text styles

This is *italic*. So is _this_. And this is **bold**. Same for __this__.
Now ___this___ one is ***bold AND italic***. Lastly, here's ~~strikethrough~~.
Unfortunately <u>underline</u> isn't supported, we have to use HTML for that.

[This link](/) opens the home page. So does [this][home].
[This one](/){:target="_blank"} opens it in a new tab.
And [this one](/){:external} also has the correct `rel` attribute, with the help of an ALD.

Here's a footnote[^1]. Here's a different one[^2].

And here's that same footnote again[^2].

By the way, did I mention that some GFM features are also supported?

[home]: /

{:.small}
This paragraph has the class `small`.

{:#hello}
This paragraph has the ID `hello`.

{:title="Hello, world!"}
This paragraph has a title of `Hello, world!`. Try hovering over it!

<span style="color: gold">Here's a surprise HTML element.</span>

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Alternate heading
=================
Don't forget to add a newline!

Second alternate heading
------------------------

## Quotes

> This is a blockquote.
>
> > This is a blockquote
> within a blockquote.
>
> ### With a header.
> Lorem ipsum dolor sit amet,
> consectetur adipiscing elit.

<!-- Since GFM alerts aren't supported yet, we have to use classes here -->

{:.alert-note}
> Useful information that users should know, even when skimming content.

{:.alert-tip}
> Helpful advice for doing things better or more easily.

{:.alert-important}
> Key information users need to know to achieve their goal.

{:.alert-warning}
> Urgent info that needs immediate user attention to avoid problems.

{:.alert-caution}
> Advises about risks or negative outcomes of certain actions.

## Lists

- Unordered list
    - Layer 2
        - Layer 3
- Item 2
  continuation
- Item 3

1. Ordered list
    1. Layer 2
        1. Layer 3
2. Item 2
   continuation
3. Item 3

Definition list
: Description

Another term
and another

: Definition in a paragraph
: Another definition

## Code blocks

```ruby
# Fenced code block (GFM)
def print_hi(name)
    puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

    Indented code block
        hi

~~~
Code block with tilde characters
This line is so long that it will overflow. Oh no, that's bad! Lorem ipsum dolor it amet, consectetur adipiscing elit, you get the drill...
~~~

{% highlight plain %}
Code block with Liquid
{% endhighlight %}

{% highlight plain linenos mark_lines="2 5" %}
This one has line numbers!
Also, this line is highlighted. The github-pages gem can't do that!
Line 3
Line 4
Line 5 (also highlighted)
Line 6
Line 7
Line 8
Line 9
Line 10
{% endhighlight %}

## Horizontal rules

With asterisks:

***

With dashes:

---

With underscores:

___

With spaces:
- - - - -

## Tables

| This is a | table |
| Cool, | right? |

<!-- Surprise WebStorm table support! Oh wait... it doesn't support footers. Or the other syntax above. -->

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
| Cell 5   | Cell 6   |
| ======== | ======== |
| Footer 1 | Footer 2 |

[^1]: And here is the definition.
[^2]: Same for the other one.
*[HTML]: HyperText Markup Language
*[GFM]: GitHub Flavored Markdown
*[ALD]: Attribute List Definition