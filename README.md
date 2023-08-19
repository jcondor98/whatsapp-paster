# whatsapp-paster

Since 2023/08/17 pasting does not seem to work in Firefox in WhatsApp Web. This
extension fixes this bug.

At the moment you have to use CTRL+V for pasting (does not work with Paste in
the context menu).

NOTE: In order to make the extension work, you have to enable the
_asyncClipboard_ interface in the Firefox configuration.

You can do it with the following process:

* Go to about:config (in the URL bar)
* Search for `dom.events.testing.asyncClipboard`
* Set the property to true
