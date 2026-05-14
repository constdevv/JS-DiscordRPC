

````markdown
# Discord RPC Example 🚀

A simple Node.js project to show a **custom Rich Presence** on Discord using [`discord-rpc`](https://www.npmjs.com/package/discord-rpc).


## 🎯 Features

- Custom **details** and **state**
- Large and small **images**
- **Buttons** linking to URLs
- Automatic refresh every 20 seconds

## ⚡ Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/focusonn/JS-DiscordRPC.git
cd JS-DiscordRPC
````

2. **Install dependencies**

```bash
npm install discord-rpc
```

3. **Get your Discord Client ID**

* Go to [Discord Developer Portal](https://discord.com/developers/applications)
* Create a new application
* Copy the **Client ID**
* Paste it in `index.js`:

```js
const clientId = 'YOUR_CLIENT_ID';
```

4. **Run the project**

```bash
node index.js
```

You should see:

```
Starting Discord RPC...
Discord RPC connected and activity set.
```

And your Discord profile will now show your custom Rich Presence! 🎉



## ⚙️ Configure Rich Presence

Edit the `activity` object in `index.js`:

```js
const activity = {
    details: "",         // Main status
    state: "", // Secondary status
    assets: {
        large_image: '',        // Must match uploaded image in Developer Portal
        large_text: '',
        small_image: '',
        small_text: ''
    },
    buttons: [
        { label: '', url: '' },
        { label: '', url: '' }
    ],
    startTimestamp: started
};
```

> Make sure your images are uploaded in **Developer Portal → Rich Presence → Art Assets**.


## 📝 Notes

* Discord must be running for Rich Presence to work.
* The activity is automatically refreshed every 20 seconds.
* Double-check that your Client ID and image keys are correct.



Made with  Focus ❤️
