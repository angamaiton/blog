---
title: New Year – New Blog
date: "2018-01-06T13:20:00.169Z"
path: "/new-year-new-blog"
---

## New Year

_Meta: A precursory web search indicates that I am now no longer the only person
using GatsbyJS for their blog. Fuck. So much for originality. However, my hair
remains quite copper-colored, not pink, so I retain some hope for readable
content in the future._

What better way to start the new year off than by finally accomplishing some of
my goals – eating well, coding more, and of course, deploying this goddamn blog?

(Seriously, it took me the longest time to actually decide that all of my code
was _perfect_ – one of my many New Year's resolutions is to prioritize
functionality and actually delivering code over making sure that it's always
pretty to look at.)

I thought an actually technical article would be a nice change, so let's jump
in!

**How I chose my platform**

I created my last personal website using Squarespace before I started learning
how to code, and I decided that Squarespace cost far too much for what I was
getting out of it. But where to move?

I started out as a Rubyist at yet-another-dev-bootcamp, and one of the first
things they had us do there was build a blog using Jekyll and GitHub Pages – I
hated doing it (the themes I saw were ugly and cookiecutter) and got rid of it
as soon as the lab was over.

From what I can see, though, there's plenty of good stuff available for Jekyll,
and it was foolish of me to give up on it so quickly. I was drawn in by one of
Thoughtbot's creations, [Middleman](https://middlemanapp.com), but my work as a
JavaScript developer convinced me to go for something more along those lines.

I wanted my site to be _special_. Who doesn't? All of the frameworks looked
boring, so I decided to try something different – I went with Next.js and
integrated a [markdown parser](https://github.com/threepointone/markdown-in-js).
I used PostCSS. I invested in "future-proofing" my blog with different kinds of
CSS-in-JS solutions (styled-jsx/styled-components).

That worked out pretty well for me at first, but I found that it was more suited
for building applications than for static sites – there wasn't a plugin API, and
I found myself breaking from their conventions often enough that it seemed more
prudent to just build my own website from scratch.

But then I was comparing static site generators, and lo and behold! Something
called Gatsby was available – a newly-minted React-centric static site generator
that invested in GraphQL and all of the neat overengineering I wanted to indulge
in for my blog. It had just come out as a 1.0 release, it had plugins, and all
of the blog posts about it seemed heavily future-focused. It looked wonderful!

**Building the site**

I wanted a very, very minimalistic approach that I could build from the ground
up to learn more about design (if it still looks like shit, that means that I'm
still working on it and learning). Gatsby was React-centric, which worked out
well for me (I love declarative UI).

So, for instance, here was my "prototype" header:

```
 <Navbar>
    <Brand to="/">Kjartan Angamaiton</Brand>
	    <Navigation>
	      <Link to="/">Home</Link>
	      <Link to="/about">About</Link>
	      <Link to="/contact">Contact</Link>
	      <Link to="/projects">Projects</Link>
	      <Link to="/blog">Blog</Link>
      </Navigation>
  </Navbar>
```

I tried to keep things simple for the most part, but I wanted to do a few
interesting things with the site that matched my interests –
internationalization for weird languages (still a work in progress), themes, and
personalized sections for my projects.

Every templating system has some kind of way to build components (partials,
etc.), but React and the various CSS-in-JS solutions really make it easy to
build small, reusable sections. I tried a few different CSS solutions, but ended
up with Styled Components because of their extensibility and built-in support
for server-side rendering.

**Future**

A lot of this stuff is a work in progress, but I'm really enjoying my experience
so far – the site is blazing fast, it's easy to keep things minimalistic, and I
really liked how easy it was to build features. I built out the theming in a few
hours, and I'm playing around with a few different i18n solutions with Redux.
Hopefully they'll be up within the next couple of weeks.
