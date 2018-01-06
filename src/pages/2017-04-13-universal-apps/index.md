---
title: Universal Apps
date: "2017-04-13T12:30:03.169Z"
path: "/universal-apps"
---
A couple of years or so ago, when I was first getting into software engineering,
I was obsessed with trying to find the "next big thing" in tech that would give
me an edge over people who had been in the industry for longer than I had. I
read every blog and every Medium post on time-saving, development shortcuts, and
every Steve Jobs biography there was out there.

One of the things I learned from all of my jumping back and forth between
frameworks, libraries, and programming languages is that there are pretty good
reasons why established conventions work as they do and why the general market
works as it does. It didn't stop me from trying new things (and it still
doesn't), but I have to continually restrain myself from trying to reinvent the
wheel in the pursuit of some time-saving technique.

An example of this? Well, take a guess – it's the title of this post. When I
worked at Apple, I was always frustrated by the lack of feature parity between
macOS/OS X and iOS, and the fact that the latter got more attention and devotion
than the former. The fact that I couldn't run the same app on a real, bona-fide
computer as I could on my phone drove me insane. It still does, to a certain
extent. I wanted to run Grindr on my laptop so I wouldn't have to keep checking
my phone whenever I got a message – I wanted a native Facebook Messenger app, so
I wouldn't have to use the website – I wanted to run my code editor on the iPad.

(This concept still makes me wet.)

Lo and behold, Microsoft came out with the concept of the Universal Windows
Platform (UWP), which promised to make all of that possible. I had never really
been a big Windows fan, but I was entranced by it – I went out and bought a
Windows phone, a Surface Book, and I refused point-blank to run macOS on my iMac
in favor of the new Windows.

$3,000 dollars and six months later, I learned something important. I learned
that you never buy a product on the basis of what it will look like in a year.
The concept of the UWP was intriguing, to say the least, as someone who wanted
to get seriously into app development and who comes from a background of cultish
devotion to Apple. The execution, however, left much to be desired – and there's
a reason why a year later, it's gained very little serious traction and is
eschewed in favor of standard Win32/WPF applications.

The term "universal app" is a bit of a vague concept, but to me at the time, it
meant blurring the lines between what a phone, tablet, and computer could do.
Technically speaking, on the UWP, an app would be universal in that it would run
on any Microsoft device (and if you bought into Xamarin, which was a framework
that let you code iOS and Android apps in Microsoft's C#, you could even share a
bunch of code between platforms).

But then Microsoft got out of the business of making phones when they got rid of
the Lumia, and suddenly one of the core pillars behind the concept collapsed.
The desktop versions of these apps were minimalistic, to put it gently, and
there was a massive feature disparity between traditional desktop applications
and these newfangled inventions. The tablet versions were wonderful, but when
you've got an Android device, why not just use Chrome and deal with Google
instead?

Microsoft's basic idea of a universal app is intriguing, but not directly useful
enough to the end user to justify the cost of switching to another platform.
It's possible that the UWP will become more useful over time, but right now it's
still not a real replacement for their previous generation of apps, and
Microsoft did a very poor job marketing the concept to the end user.

I still think there's something really cool to be said about the concept of
universal apps, if the term is used to refer to minimizing the amount of code
necessary to port an app from one platform to another. But there are so many
choices out there – React Native, Angular/Ionic for hybrid apps (web and native;
it's weird), Xamarin, and so on.

There may be something even better out there, though. I remember reading about
Steve Jobs's original critique of an App Store when the first iPhone was created
– he thought that web apps and websites would be more than sufficient for the
vast majority of what people did on phones, and it was only after a
demonstration to the contrary that he consented to putting a store on the
iPhone.

He might have been right, though – just a bit ahead of his time. In 2007, web
apps were nowhere near powerful enough to handle the workload of a desktop app,
but there have been enough advances in JavaScript (Chrome V8, HTML5, WebGL 2.0,
Flutter) that we're getting to the point where there's a reasonable case to be
made that many users' daily tasks could be handled by some of these new web
apps. (They're called "progressive web apps", and they're all the buzz in the
webdev community right now.)

That's what's really exciting to me. One of the biggest annoyances I had when
trying to go full Windows was the constant complaining about lack of apps – and
that's the thing that prevents serious development of third-party OSes besides
iOS and Android. No apps.

Imagine if that were to change, and you could get apps just by using the web –
relying on certificates, you could have the relative security of an app store
while being free of the censorship and restrictions (or "curation", as it could
be more politely called) they have. It would open the floodgates and make it
possible for people to take greater control over their devices.

We'll see what happens, I suppose. I know that's what I'll be getting into.
