ItemEvents.modification(e => {

    // Variables
    let colors = [ 'white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']
    let signTypes = [ 'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'pale_oak', 'bamboo', 'crimson', 'warped' ]

    // Potion Stack Size
    e.modify('minecraft:potion', i => {
        i.maxStackSize = 16
    })

    // Splash Potion Size
    e.modify('minecraft:splash_potion', i => {
        i.maxStackSize = 16
    })

    // Lingering Potion Size
    e.modify('minecraft:lingering_potion', i => {
        i.maxStackSize = 16
    })

    colors.forEach(c => {
        
        // Banner Stack Size
        e.modify( `minecraft:${c}_banner`, i => {
            i.maxStackSize = 64
        })
        // Hanging Canvas Sign Stack Size 
        e.modify(`farmersdelight:${c}_hanging_canvas_sign`, i => {
            i.maxStackSize = 64
        })

        // Canvas Sign Stack Size
        e.modify(`farmersdelight:${c}_canvas_sign`, i => {
            i.maxStackSize = 64
        })
    })

    signTypes.forEach(sT => {
        // Sign Stack Size
        e.modify( `minecraft:${sT}_sign`, i => {
            i.maxStackSize = 64
        })

        // Hanging Sign Stack Size
        e.modify( `minecraft:${sT}_hanging_sign`, i => {
            i.maxStackSize = 64
        })

        // Way Sign Stack Size
        e.modify( `supplementaries:way_sign_${sT}`, i => {
            i.maxStackSize = 64
        })

    })
})