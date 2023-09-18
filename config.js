module.exports = {
    app: {
        token: 'MTE1MjU2MjM0NDk1NDcwMzkyMg.Gn5gFa.set7aH-Jm5zDwr6OwuHjmTjgVw6wLF3tZmQqnU',
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
