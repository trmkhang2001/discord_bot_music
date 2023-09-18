module.exports = {
    app: {
        token: 'MTE1MjU2MjM0NDk1NDcwMzkyMg.GmmBTX.6uXq9AoeDjhWIJzzPXF0-QWuiCPQ4T4ckfIkMI',
        playing: 'by Minh Khang ❤️',
        global: true,
        guild: 'xxx',
        ExtraMessages: false,
        loopMessage: false,

    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
