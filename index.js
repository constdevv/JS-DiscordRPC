const RPC = require('discord-rpc');

const clientId = ''; // your bot client id and read readme.md
const client = new RPC.Client({ transport: 'ipc' });
const started = new Date();

const activity = {
    details: "",
    state: "",
    assets: {
        large_image: 'bindly',
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

client.on('ready', () => {
    client.request('SET_ACTIVITY', { pid: process.pid, activity });

    setInterval(() => {
        client.request('SET_ACTIVITY', { pid: process.pid, activity });
    }, 20000);

    console.log('Discord RPC connected and activity set.');
});

client.login({ clientId }).catch(console.error);

console.log('Starting Discord RPC...');
