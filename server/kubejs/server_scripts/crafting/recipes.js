ServerEvents.recipes(e => {
    let { stonecutting, shaped, shapeless, blasting } = e

    // Removed Recipes
    e.remove('better_weaponry:wooden_hammer_craft')
    e.remove('minecraft:lead')
    e.remove('crittersandcompanions:grappling_hook')
    e.remove('minecraft:lodestone')

    // Netherite Upgrade Template
    stonecutting('minecraft:netherite_upgrade_smithing_template', 'minecraft:netherite_scrap')

    // Wooden Hammer
    shaped('better_weaponry:wooden_hammer', [
        ' S ',
        'WWW',
        'WWW'
    ], {
        S:'minecraft:stick',
        W:'#minecraft:planks'
    })

    // Quiver
    shaped('supplementaries:quiver', [
        ' TL',
        'TL ',
        'L  '
    ], {
        T:'supplementaries:rope',
        L:'minecraft:leather'
    })

    // Raw Iron Block Blasting
    blasting('minecraft:iron_block', 'minecraft:raw_iron_block')

    // Raw Copper Block Blasting
    blasting('minecraft:copper_block', 'minecraft:raw_copper_block')

    // Raw Gold Block Blasting
    blasting('minecraft:gold_block', 'minecraft:raw_gold_block')

})