ServerEvents.tags('item', e => {
    // Variables
    let materials = [ 'wooden', 'stone', 'iron', 'gold', 'diamond', 'netherite', 'emerald', 'amethyst' ]

    /////////////////////////
    // Netherite Tag Items //
    /////////////////////////
    // Minecraft Items
    e.add('explorer:netherite', 'minecraft:netherite_block')
    e.add('explorer:netherite', 'minecraft:netherite_scrap')
    e.add('explorer:netherite', 'minecraft:netherite_ingot')
    e.add('explorer:netherite', 'minecraft:ancient_debris')

    // Farmer's Delight
    e.add('explorer:netherite', 'farmersdelight:netherite_knife')

    // Dramatic Doors
    e.add('explorer:netherite', 'dramaticdoors:short_netherite_door')
    e.add('explorer:netherite', 'dramaticdoors:tall_netherite_door')

    // Better Weaponry
    e.add('explorer:netherite', 'better_weaponry:netherite_dagger')
    e.add('explorer:netherite', 'better_weaponry:netherite_scythe')
    e.add('explorer:netherite', 'better_weaponry:netherite_rapier')
    e.add('explorer:netherite', 'better_weaponry:netherite_cutlass')
    e.add('explorer:netherite', 'better_weaponry:netherite_sickle')
    e.add('explorer:netherite', 'better_weaponry:netherite_spear')
    e.add('explorer:netherite', 'better_weaponry:netherite_katana')
    e.add('explorer:netherite', 'better_weaponry:netherite_battleaxe')
    e.add('explorer:netherite', 'better_weaponry:netherite_glaive')
    e.add('explorer:netherite', 'better_weaponry:netherite_hammer')
    e.add('explorer:netherite', 'better_weaponry:netherite_broadsword')
    e.add('explorer:netherite', 'better_weaponry:netherite_claymore')
    e.add('explorer:netherite', 'better_weaponry:netherite_chakram')
    e.add('explorer:netherite', 'better_weaponry:netherite_sai')
    e.add('explorer:netherite', 'better_weaponry:netherite_shuriken')
    e.add('explorer:netherite', 'better_weaponry:netherite_shield')

    // Supplementaries
    e.add('explorer:netherite', 'supplementaries:netherite_door')
    e.add('explorer:netherite', 'supplementaries:netherite_trapdoor')

    // Tool & Armor Tiers Tag
    materials.forEach(m => {

        if(m == 'emerald' || m == 'amethyst') {

            // Tools
            e.add(`explorer:${m}`, `better_weaponry:${m}_sword`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_axe`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_pickaxe`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_shovel`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_hoe`)

            // Armor
            e.add(`explorer:${m}`, `better_weaponry:${m}_armor_helmet`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_armor_chestplate`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_armor_leggings`)
            e.add(`explorer:${m}`, `better_weaponry:${m}_armor_boots`)

        } else {
            // Tools
            e.add(`explorer:${m}`, `minecraft:${m}_sword`)
            e.add(`explorer:${m}`, `minecraft:${m}_axe`)
            e.add(`explorer:${m}`, `minecraft:${m}_pickaxe`)
            e.add(`explorer:${m}`, `minecraft:${m}_shovel`)
            e.add(`explorer:${m}`, `minecraft:${m}_hoe`)
            
            // Armor
            e.add(`explorer:${m}`, `minecraft:${m}_helmet`)
            e.add(`explorer:${m}`, `minecraft:${m}_chestplate`)
            e.add(`explorer:${m}`, `minecraft:${m}_leggings`)
            e.add(`explorer:${m}`, `minecraft:${m}_boots`)
        }

        // Modded Tools
        e.add(`explorer:${m}`, `better_weaponry:${m}_shield`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_dagger`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_scythe`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_rapier`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_cutlass`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_sickle`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_spear`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_katana`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_battleaxe`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_glaive`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_hammer`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_broadsword`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_claymore`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_chakram`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_sai`)
        e.add(`explorer:${m}`, `better_weaponry:${m}_shuriken`)
    })

})