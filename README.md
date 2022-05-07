# Translate CiteDrive

Join us in translating CiteDrive into your language.

We use the package "react-i18next" for our app and manage translations. This repo consists of JSON files where, for example, en.js contains all labels in English and de.js all in German.

You can see from the status table how far we are with the translations. If you want to change something, you need to take two simple things to heart:

The JSON file consists of key-value pairs.

```json
"error-message": "Error while attempting to verify account. Please try again later."
```

If you wish to translate into German, change the value, as in this example:

```json
"error-message": "Fehler beim Versuch, das Konto zu verifizieren. Bitte versuchen Sie es später erneut."
```

You may recognize words that are in double curly braces, such as 

```json
"welcome": "Good afternoon {{name}}"
```

Such words are not translated and remain in double braces. 

So, for example, if we translate it into German:

```json
"welcome": "Guten Tag {{name}}"
```

The application detects these as variables to which a value is dynamically assigned. 

Apart from that, there is nothing else to consider. Many thanks for your efforts!

## Status


## About citedrive
