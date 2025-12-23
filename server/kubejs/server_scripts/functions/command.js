ServerEvents.command(e => {
    let { server, player } = e
    console.log(player.health)
    if('login'.equals(e.getName()))
    if(player.hasEffect('minecraft:glowing') && player.health == 1) {
        
    }
})