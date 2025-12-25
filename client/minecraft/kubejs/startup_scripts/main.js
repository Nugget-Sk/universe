ItemEvents.modification(e => {

    e.modify('minecraft:potion', i => {
        i.maxStackSize = 16
    })
    e.modify('minecraft:egg', i => {
        i.maxStackSize = 64
    })
    e.modify('minecraft:splash_potion', i => {
        i.maxStackSize = 16
    })
    e.modify('minecraft:lingering_potion', i => {
        i.maxStackSize = 16
    })
})