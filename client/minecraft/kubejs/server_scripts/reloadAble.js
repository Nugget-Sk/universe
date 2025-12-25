///////////////
// Variables //
///////////////
const tiers = [ 'iron_ingot', 'gold_ingot', 'diamond' ]
const woodTypes = [
    {type:'oak', mod:'minecraft'},
    {type:'spruce', mod:'minecraft'},
    {type:'birch', mod:'minecraft'},
    {type:'jungle', mod:'minecraft'},
    {type:'acacia', mod:'minecraft'},
    {type:'dark_oak', mod:'minecraft'},
    {type:'mangrove', mod:'minecraft'},
    {type:'cherry', mod:'minecraft'},
    {type:'crimson', mod:'minecraft', info:'stem'},
    {type:'warped', mod:'minecraft', info:'stem'},
    {type:'archwood', mod:'ars_nouveau', funny:'blue_'},
    {type:'dark_cherry', mod:'vinery', info:'nonRotted'},
    {type:'pine', mod:'meadow', info:'nonRotted'},
    {type:'rotten', mod:'betterarcheology', info:'rotted'} ]
let furniture = [
        {id:'barn_door', mod:'mcwdoors', compat:'everycomp:mcd', perLog:2, perPlanks:false, perSlab:false},
        {id:'planks_path', mod:'mcwpaths', compat:'everycomp:mcp', perLog:24, perPlanks:6, perSlab:3},
        {id:'button', mod:'minecraft', compat:'nonRotted', perLog:12, perPlanks:3, perSlab:2},
        {id:'door', mod:'minecraft', compat:false, perLog:2, perPlanks:false, perSlab:false},
        {id:'fence', mod:'minecraft', compat:false, perLog:2, perPlanks:false, perSlab:false},
        {id:'fence_gate', mod:'minecraft', compat:false, perLog:2, perPlanks:false, perSlab:false},
        {id:'planks', mod:'minecraft', compat:false, perLog:4, perPlanks:false, perSlab:false},
        {id:'pressure_plate', mod:'minecraft', compat:false, perLog:4, perPlanks:1, perSlab:false},
        {id:'sign', mod:'minecraft', compat:'nonRotted', perLog:2, perPlanks:false, perSlab:false},
        {id:'slab', mod:'minecraft', compat:false, perLog:8, perPlanks:4, perSlab:false},
        {id:'stairs', mod:'minecraft', compat:false, perLog:4, perPlanks:1, perSlab:false},
        {id:'trapdoor', mod:'minecraft', compat:false, perLog:2, perPlanks:false, perSlab:false},
        {id:'lattice_fence', mod:'refurbished_furniture', compat:'everycomp:rfm', perLog:2, perPlanks:false, perSlab:false},
        {id:'lattice_fence_gate', mod:'refurbished_furniture', compat:'everycomp:rfm', perLog:2, perPlanks:false, perSlab:false},
        {id:'lattice', mod:'vinery', compat:false, perLog:4, perPlanks:1, perSlab:false},
        {id:'boat', mod:'minecraft', compat:'nonRotted', perLog:1, perPlanks:false, perSlab:false},
        {id:'sign_post', mod:'supplementaries', compat:`replaceMe`, perLog:4, perPlanks:1, perSlab:false}]
const adPother = [
        { id: 'respirator', map1: 'BHB', map2: 'T T', map3: 'WWW', B: true, H: true, W: true },
        { id: 'vacuum_bag', map1: 'LTL', map2: 'TCT', map3: 'LTL', L: true, C: true },
        { id: 'vacuum_tube', map1: 'TTT', map2: ' T ', map3: ' I ', I: true }]
const book = 'ars_nouveau:worn_notebook'
let colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']

ServerEvents.tags('item', e => {
    const woods = ['wood', 'log']
    const colors = ['blue', 'red', 'purple', 'green']

    woods.forEach(w => {

        e.add(`forge:logs/oak`, `vinery:apple_${w}`)

        woodTypes.forEach(wt => {
            if(wt.info == 'oak') return
            if(wt.type == 'archwood') {
                colors.forEach(c => {
                    e.add(`forge:logs/${wt.type}/${c}`, `${wt.mod}:stripped_${c}_${wt.type}_${w}`)
                    e.add(`forge:logs/${wt.type}/${c}`, `${wt.mod}:${c}_${wt.type}_${w}`)
                })
            } else if(wt.info == 'stem') {
                e.add(`forge:stems/${wt.type}`, `${wt.mod}:stripped_${wt.type}_stem`)
                e.add(`forge:stems/${wt.type}`, `${wt.mod}:stripped_${wt.type}_hyphae`)
                e.add(`forge:stems/${wt.type}`, `${wt.mod}:${wt.type}_stem`)
                e.add(`forge:stems/${wt.type}`, `${wt.mod}:${wt.type}_hyphae`)
            } else if(wt.mod == 'minecraft') {e.add(`forge:logs/${wt.type}`, `#minecraft:${wt.type}_logs`)
            } else {
                e.add(`forge:logs/${wt.type}`, `${wt.mod}:${wt.type}_${w}`)
                e.add(`forge:logs/${wt.type}`, `${wt.mod}:stripped_${wt.type}_${w}`)
            }
        })
    })
})

ServerEvents.recipes(e => {
    let { shaped, shapeless, stonecutting, smithing, smoking, recipes } = e
    
    /*
     * Loops
    */
    woodTypes.forEach(w => {
        // Variables
        let input = { log:'', planks:'', slab:'' }
        let output = ''
        input.planks = `${w.mod}:${w.type}_planks`
        input.slab = `${w.mod}:${w.type}_slab`

        furniture.forEach(f => {
            if(f.compat == 'replaceMe') f.compat = `supplementaries:${w.mod}`
            if(w.info == 'stem') {
                // Stem input variable
                input.log = `#forge:stems/${w.type}`

                if(f.id == 'sign_post') {
                    // For sign posts
                    output = `${f.mod}:${f.id}_${w.type}`

                    stonecutting(Item.of(output, f.perLog), input.log)
                    stonecutting(Item.of(output, f.perPlanks), input.planks)

                } else {
                    // For the rest of the items
                    output = `${f.mod}:${w.type}_${f.id}`

                    if(f.id == 'lattice' || f.id == 'boat') {return}
                    stonecutting(Item.of(output, f.perLog), input.log)
                    if(f.perPlanks) stonecutting(Item.of(output, f.perPlanks), input.planks)
                    if(f.perSlab) stonecutting(Item.of(output, f.perSlab), input.slab)
                }
            } else {
                // Change the log variable
                input.log = `#forge:logs/${w.type}`

                if(f.id == 'sign_post' && w.mod != 'minecraft') {
                    // For modded sign posts
                    if(w.type == 'archwood') {output = `${f.mod}:${w.mod}/${f.id}_blue_${w.type}`
                } else if(w.type != 'archwood') {output = `${f.mod}:${w.mod}/${f.id}_${w.type}`}
                
                    stonecutting(Item.of(output, f.perLog), input.log)
                    stonecutting(Item.of(output, f.perPlanks), input.planks)

                } else if(f.id == 'sign_post' && w.mod == 'minecraft') {
                    // For vanilla sign posts
                    output = `${f.mod}:${f.id}_${w.type}`

                    stonecutting(Item.of(output, f.perLog), input.log)
                    if(f.perPlanks) stonecutting(Item.of(output, f.perPlanks), input.planks)
                    if(f.perSlab) stonecutting(Item.of(output, f.perSlab), input.slab)

                } else if(f.compat != false && (f.compat.includes('everycomp:') && w.mod != 'minecraft')) {
                    // For modded items generated by every comp
                if(w.type == 'archwood') {output = `${f.compat}/${w.mod}/blue_${w.type}_${f.id}`} else if(f.id == 'barn_door' && w.type == 'pine') {return} else {output = `${f.compat}/${w.mod}/${w.type}_${f.id}`}

                    if(Item.of(`${output}`).isEmpty()) console.log(`Bug with this output: ${output}`)
                    stonecutting(Item.of(output, f.perLog), input.log)
                    if(f.perPlanks) stonecutting(Item.of(output, f.perPlanks), input.planks)
                    if(f.perSlab) stonecutting(Item.of(output, f.perSlab), input.slab)
                    
                } else if(f.mod == 'minecraft') {
                    // For vanilla items of mods & vanilla
                    output = `${w.mod}:${w.type}_${f.id}`

                    if((w.type == 'archwood' && (f.id == 'boat' || f.id == 'sign')) || (w.info == 'rotted' && (f.id == 'sign' || f.id == 'boat' || f.id == 'button'))) return
                    if(Item.of(`${output}`).isEmpty()) console.log(`Bug with this output: ${output}`)
                    stonecutting(Item.of(output, f.perLog), input.log)
                    if(f.perPlanks) stonecutting(Item.of(output, f.perPlanks), input.planks)
                    if(f.perSlab) stonecutting(Item.of(output, f.perSlab), input.slab)

                } else if(w.mod == 'minecraft' && f.mod != 'minecraft') {
                    // For mc wood types for modded items
                    output = `${f.mod}:${w.type}_${f.id}`

                    if(Item.of(`${output}`).isEmpty()) console.log(`Bug with this output: ${output}`)
                    stonecutting(Item.of(output, f.perLog), input.log)
                    if(f.perPlanks) stonecutting(Item.of(output, f.perPlanks), input.planks)
                    if(f.perSlab) stonecutting(Item.of(output, f.perSlab), input.slab)
                    
                }
            }
        })

        if(w.mod == 'minecraft') {
        // Minecraft chests
        e.remove(`sophisticatedstorage:${w.type}_chest`)

        shaped(Item.of('sophisticatedstorage:chest', `{woodType: "${w.type}"}`), ['WWW', 'W W', 'WWW'], {W:`${w.type}_planks`})
    } else if(w.info != 'rotted') {
        // Other woods from other mods
        shaped(Item.of('sophisticatedstorage:chest', `{woodType: "oak"}`), ['WWW', 'W W', 'WWW'], {W:`${w.mod}:${w.type}_planks`})
    }

    if(w.info == 'stem') {
        // Stem recipes
        e.remove(`${w.mod}:${w.type}_hyphae`)
        e.remove(`${w.mod}:stripped_${w.type}_hyphae`)

        shapeless(`4x ${w.mod}:${w.type}_hyphae`, [
            `${w.mod}:${w.type}_stem`,
            `${w.mod}:${w.type}_stem`,
            `${w.mod}:${w.type}_stem`,
            `${w.mod}:${w.type}_stem` ])
            
        shapeless(`4x ${w.mod}:stripped_${w.type}_hyphae`, [
            `${w.mod}:stripped_${w.type}_stem`, 
            `${w.mod}:stripped_${w.type}_stem`, 
            `${w.mod}:stripped_${w.type}_stem`, 
            `${w.mod}:stripped_${w.type}_stem` ])
            
        
    } else {
        // Log recipes
        e.remove(`${w.mod}:${w.type}_wood`)
        e.remove(`${w.mod}:stripped_${w.type}_wood`)
        let calor = ['blue', 'red', 'purple', 'green']

        calor.forEach(c => {
            if(w.type == 'archwood') {
            e.remove(`${w.mod}:${c}_${w.type}_wood`)
            e.remove(`${w.mod}:stripped_${c}_${w.type}_wood`)
            shapeless(`4x ${w.mod}:${c}_${w.type}_wood`, [ `${w.mod}:${c}_${w.type}_log`, `${w.mod}:${c}_${w.type}_log`, `${w.mod}:${c}_${w.type}_log`, `${w.mod}:${c}_${w.type}_log` ])
            shapeless(`4x ${w.mod}:stripped_${c}_${w.type}_wood`, [ `${w.mod}:stripped_${c}_${w.type}_log`, `${w.mod}:stripped_${c}_${w.type}_log`, `${w.mod}:stripped_${c}_${w.type}_log`, `${w.mod}:stripped_${c}_${w.type}_log` ])
            }
        })
            if(Item.of(`${w.mod}:${w.type}_wood`).isEmpty()) return 
            shapeless(`4x ${w.mod}:${w.type}_wood`, [
                `${w.mod}:${w.type}_log`,
                `${w.mod}:${w.type}_log`,
                `${w.mod}:${w.type}_log`,
                `${w.mod}:${w.type}_log` ])

            shapeless(`4x ${w.mod}:stripped_${w.type}_wood`, [
                `${w.mod}:stripped_${w.type}_log`, 
                `${w.mod}:stripped_${w.type}_log`, 
                `${w.mod}:stripped_${w.type}_log`, 
                `${w.mod}:stripped_${w.type}_log` ])
        
        
    }
    })
    // Ad Pother Changes
    tiers.forEach(tier => {
        adPother.forEach(item => {
            const ingredients = {
                T:`${tier}`
            }

            if(item.B) ingredients.B = 'minecraft:glass_bottle'
            if(item.W) ingredients.W = '#minecraft:wool'
            if(item.H) ingredients.H = '#forge:armors/helmet'
            if(item.I) ingredients.I = 'minecraft:iron_ingot'
            if(item.L) ingredients.L = 'minecraft:leather'
            if(item.C) ingredients.C = 'mekanism:basic_chemical_tank'

            shaped(`adpother:${tier.toString().replace(`_ingot`, '')}_${item.id}`,
                [
                    item.map1,
                    item.map2,
                    item.map3
                ],
                ingredients)
        })
    })

    /////////////////////////
    // Recipe Modification //
    /////////////////////////

    e.replaceOutput({ output: 'createnuclear:lead_ingot'}, 'createnuclear:lead_ingot', 'mekanism:ingot_lead')

    e.remove({ id: 'sophisticatedstorage:double_gold_chest'})
    e.remove({ id: 'sophisticatedstorage:double_iron_chest'})
    e.remove({ id: 'sophisticatedstorage:double_iron_chest_from_copper_chest'})
    e.remove({ id: 'adpother:aerometer'})
    e.remove({ id: 'adpother:gold_vacuum_tube'})
    e.remove({ id: 'adpother:gold_respirator'})
    e.remove({ id: 'adpother:gold_vacuum_bag'})
    e.remove({ id: 'adpother:iron_vacuum_tube'})
    e.remove({ id: 'adpother:iron_respirator'})
    e.remove({ id: 'adpother:iron_vacuum_bag'})
    e.remove({ id: 'adpother:diamond_vacuum_tube'})
    e.remove({ id: 'adpother:diamond_respirator'})
    e.remove({ id: 'adpother:diamond_vacuum_bag'})
    e.remove({ id: 'betterbundles:silver_gold_bundle'})
    e.remove({ id: 'betterbundles:copper_iron_bundle'})
    e.remove({ id: 'betterbundles:netherite_bundle'})
    e.remove({ id: 'sophisticatedbackpacks:backpack'})
    e.remove({ id: 'tacz:gun_smith_table'})
    e.remove({ id: 'tacz:attachment_workbench'})
    e.remove({ id: 'tacz:ammo_workbench'})
    e.remove({ id: 'create:crafting/kinetics/goggles'})
    e.remove({ id: 'ars_nouveau:novice_spell_book'})
    e.remove({ id: 'ars_nouveau:apprentice_spell_book_upgrade'})
    e.remove({ id: 'ars_nouveau:archmage_spell_book_upgrade'})
    e.remove({ id: 'create:crafting/materials/andesite_alloy'})
    e.remove({ id: 'mca:rose_gold_dust'})
    e.remove({ id: 'minecraft:chest'})

    /////////////////////
    // Regular recipes //
    /////////////////////
    stonecutting(`minecraft:ladder`, `#minecraft:logs`)
    stonecutting(`meadow:pine_barn_door`, `#forge:logs/pine`)
    stonecutting('8x minecraft:stick', '#minecraft:logs')

    // Orb of Origin
    shaped(`origins:orb_of_origin`, 
        [
            'ODO',
            'DOD',
            'GEG'
        ],
        {
            O:`minecraft:obsidian`,
            D:`minecraft:diamond_block`,
            G:`minecraft:gold_block`,
            E:`minecraft:emerald`
        })
    // Aerometer Recipe
    shaped(`adpother:aerometer`, 
        [
            'GPG',
            ' C ',
            'G G'
        ],
        {
            G:'#forge:glass/silica',
            P:'#forge:glass_panes',
            C:'minecraft:compass'
        })
    //////////////////////
    // Backpack Recipes //
    //////////////////////
    shaped(`sophisticatedbackpacks:backpack`,
        [
            'SBS',
            'LCL',
            'LLL'
        ],
        {
            S:'minecraft:string',
            B:'minecraft:bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden'
        }).id('kubejs:backpacks/leather')
    shaped(`sophisticatedbackpacks:copper_backpack`,
        [
            'SBS',
            'LCL',
            'LLL'
        ],
        {
            S:'minecraft:string',
            B:'betterbundles:copper_bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden'
        }).id('kubejs:backpacks/copper')
    shaped(`sophisticatedbackpacks:iron_backpack`,
        [
            'SBS',
            'ICI',
            'ILI'
        ],
        {
            S:'minecraft:string',
            B:'betterbundles:copper_bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden',
            I:'minecraft:iron_ingot'
        }).id('kubejs:backpack/copper_to_iron')
    shaped(`sophisticatedbackpacks:iron_backpack`,
        [
            'SBS',
            'LCL',
            'LLL'
        ],
        {
            S:'minecraft:string',
            B:'betterbundles:iron_bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden'
        }).id('kubejs:backpack/iron')
    shaped(`sophisticatedbackpacks:diamond_backpack`,
        [
            'SBS',
            'LCL',
            'LLL'
        ],
        {
            S:'minecraft:string',
            B:'betterbundles:diamond_bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden'
        }).id('kubejs:backpacks/diamond')
    shaped(`sophisticatedbackpacks:netherite_backpack`,
        [
            'SBS',
            'LCL',
            'LLL'
        ],
        {
            S:'minecraft:string',
            B:'betterbundles:netherite_bundle',
            L:'minecraft:leather',
            C:'#forge:chests/wooden'
        }).id('kubejs:backpacks/netherite')
    //////////////////
    // Bundle Fixes //
    //////////////////
    // Copper to iron
    shaped(`betterbundles:iron_bundle`,
        [
            ' I ',
            'IBI',
            ' I '
        ],
        {
            I:'minecraft:iron_ingot',
            B:'betterbundles:iron_bundle'
        }).id('kubejs:bundles/copper_to_iron')
    // Silver to gold
    shaped(`betterbundles:gold_bundle`,
        [
            ' I ',
            'IBI',
            ' I '
        ],
        {
            I:'minecraft:gold_ingot',
            B:'betterbundles:silver_bundle'
        }).id('kubejs:bundles/silver_to_gold')
    smithing('betterbundles:netherite_bundle', 'minecraft:netherite_upgrade_smithing_template', 'betterbundles:diamond_bundle', 'minecraft:netherite_ingot')
    // Rotten Flesh is usefull now!
    smoking('2x minecraft:rabbit_hide', 'minecraft:rotten_flesh', 0.35, 100)
    // Novice Magic Book
    recipes.create.sequenced_assembly([
        Item.of('ars_nouveau:novice_spell_book').withChance(50.0), // Anything in this line is the output
        Item.of('minecraft:book').withChance(25.0), // This is considered junk output and anything below too
        Item.of('ars_nouveau:worn_notebook').withChance(25.0),
        ], 'minecraft:book', [ // Input
        recipes.createDeploying(book, [book, 'mekanism:fluorite_gem']),
        recipes.createPressing(book, book),
        recipes.createDeploying(book, [book, 'iceandfire:silver_sword']),
        recipes.createDeploying(book, [book, 'iceandfire:silver_axe']),
        recipes.createDeploying(book, [book, 'iceandfire:silver_pickaxe']),
        recipes.createDeploying(book, [book, 'iceandfire:silver_shovel']),
        ]).transitionalItem(book).loops(1).id('kubejs:earlygame/novice_spell_book')
    // Andesite
    shaped(Item.of('minecraft:andesite', 4),
        [
            'AB',
            'BA'
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:iron_nugget'
        }
    )
    // Goggles
    shaped('create:goggles',
        [
            'NSN',
            'GNG',
            '   '
        ],
        {
            S:'minecraft:string',
            G:'minecraft:glass_pane',
            N:'minecraft:gold_nugget'
        }
    )
    // Book & Quill
    shapeless(
    'minecraft:writable_book',
    [
        'minecraft:book',
        'minecraft:feather',
        'supplementaries:antique_ink'
    ])
    ///////////////////
    // Glass Recipes //
    ///////////////////
    shapeless('2x minecraft:glass_pane', ['minecraft:glass'])
    for (let i = 0; i < colors.length; i++) {
    shapeless(Item.of(`${colors[i]}_stained_glass_pane`, 2), [`${colors[i]}_stained_glass`])}

    // Tricky Trials Music Discs
    shaped(`tricky_trials:creator`, ['RWR', 'C C', 'RWR'], {R:'tricky_trials:breezerod', W:'tricky_trials:windchargeitem', C:'minecraft:copper_block'})
    shaped(`tricky_trials:creator_music_box_version`, ['RWR', 'CWC', 'RWR'], {R:'tricky_trials:breezerod', W:'tricky_trials:windchargeitem', C:'minecraft:copper_block'})
    shaped(`tricky_trials:precipice`, ['RWR', 'WWW', 'RWR'], {R:'tricky_trials:breezerod', W:'tricky_trials:windchargeitem'})


    // Guns
    // // "Stress" Auto Pistol
    // const gunPistol = ``
    // recipes.create.sequenced_assembly([
    //     Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:16,GunFireMode:"SEMI",GunId:"create_armorer:pistol_auto_stress",HasBulletInBarrel:1b}').withChance(50.0), // Anything in this line is the output
    //     Item.of('tetra:metal_scrap').withChance(25.0), // This is considered junk output and anything below too
    //     Item.of('mekanism:copper_clump', 16).withChance(25.0),
    //     ], '64x minecraft:copper_ingot', [ // Input
    //     recipes.createDeploying(gunPistol, [gunPistol, '32x minecraft:gunpowder']),
    //     recipes.createPressing(gunPistol, gunPistol),
    //     recipes.createDeploying(gunPistol, [gunPistol, Item.of('tacz:modern_kinetic_gun', '{GunId:"create_armorer:special_melee_wrench"}')]),
    //     recipes.createPressing(gunPistol, gunPistol),
    //     ]).transitionalItem(book).loops(1).id('kubejs:midgame/pistol')
    // // "Clockwork" Sniper
    // const gunSniper = `Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:8,GunFireMode:"SEMI",GunId:"create_armorer:sniper_semi_clockwork",HasBulletInBarrel:1b}')`
    // recipes.create.sequenced_assembly([
    //     gunSniper.withChance(50.0), // Anything in this line is the output
    //     Item.of('tetra:metal_scrap').withChance(25.0), // This is considered junk output and anything below too
    //     Item.of('mekanism:copper_clump', 16).withChance(25.0),
    //     ], '64x minecraft:copper_ingot', [ // Input
    //     recipes.createDeploying(temporalGun, [temporalGunw, '32x minecraft:gunpowder']),
    //     recipes.createPressing(temporalGun, temporalGun),
    //     recipes.createDeploying(temporalGun, [temporalGun, 'minecraft:netherite_ingot']),
    //     recipes.createPressing(temportalGun, temporalGun),
    //     ]).transitionalItem(temporalGun).loops(1).id('kubejs:midgame/pistol')
})

/////////////////
// Loot Tables //
/////////////////
