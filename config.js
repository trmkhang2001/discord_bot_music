module.exports = {
    app: {
        process.token: 'MTE1MjU2MjM0NDk1NDcwMzkyMg.GHwJSL.t6yN5bY_dnmWK0rmHrI3_9JDKFU8P8hOtIbeoM',
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
