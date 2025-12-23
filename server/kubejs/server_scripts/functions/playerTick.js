PlayerEvents.tick(e => {
    if(e.player.age % 40) return;
    e.server.runCommandSilent('clear @a artifacts:helium_flamingo')
})