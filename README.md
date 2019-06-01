What is it?
===========

An app that displays names that are supposed to be funny. It will display them in an
order that lets you guess by yourself, then an order that is supposed to be funny.
Finally, if available and if needed, it will display a solution. (These features
are still to come, right now, it just displays firstname + lastname.)

Example:

```
Ender Lovemeat
```

```
Lovemeat, Ender
```

```
Love me tender
```

I originally wrote a similar app with Python and Flask,
https://github.com/nikolausschueler/sillynames. As I'm now trying to get
familiar with Apache Cordova, https://cordova.apache.org/, I chose this as an
example application.

Here's a little screenshot:

![Screenshot](./pics/screenshot.png)

Build
=====

Browser
-------

The easiest way to play around with this is to build for the browser. To do so,
just run:

```
$ cordova platform add browser
$ cordova run browser
```

Android
-------

If you want to get this on your mobile phone or tablet, it's relatively easy
with Android. Do:

```
$ cordova platform add android
$ cordova build android
```

This gives you an APK file. It's deeply hidden in the build directories, but the
build step will tell you where it is.

If you build that way, you get a debug version of the app, which you can copy to
your mobile device (for example, via Dropbox) and run there. Don't build a
release version (you would do that by adding the _release_ option to the build
step). Android expects such APKs to be signed and will not install from them
unless you have properly done so. Of course, if you are an experienced Android
developer, you can do a release build and sign it.

iOS
---

I didn't build for iOS because there the process is more complicated. There is
nothing like an APK that you can simply copy to your device and install there.
You need a developer account at Apple. I don't have that right now, so I didn't
check building for iOS.

Choose your own names
=====================

The app contains are file called _names.json_ that contains some example names.
If you want to use funny names of your own, enhance or replace this file. The
format of the file is JSON, take the file as an example for the structure that
this file must have.
