# SecureChain
Sources and compiled version of SecureChain chrome extension

# Premise
Each user has an account. You can decrypt and encrypt any of your messages. You may decrypt messages from other people if your account email is on their SecureChain. A SecureChain is a list of trust-worthy contacts who can decrypt your SecureChain strings.

## Converts selected HTML
Select HTML within a page, click on the SecureChain google chrome extension, click on encrypt to replace the text you selected, with an encrypted string.

Reverse the same process except click on Decrypt instead of Encrypt.Make sure you've deselected and selected the string again, if it's the same one.

## Todo :
- Document API for other uses. * Done. Find API docs [here](https://sc.gophersauce.com/api)
- Encrypt and replace texts from textarea. Invasive mode sort of fixes this. Allows encryption of DOM HTML (div with contenteditable attribute, input and textareas.

## Bugs
- Currently supports encrypting one paragaph.

## Software used :
- TwitterBootstap 4.0 beta
- AngularJS
- ape-js : A custom package I made to develop faster with AngularJS.
- GopherSauce (With Momentum).

### Source info
Description of files relative to the root of this repository :
- js.js : Bottom part of this file has the chrome plugin's angular controller.
- popup.html : The entire view set of the plugin.
- encr.js : JS code inserted into active tab when user clicks on Encrypt or decrypt. This file looks for the selected text range and replaces it by the desired functionality.
