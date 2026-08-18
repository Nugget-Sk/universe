//////////////
// Iron Age //
//////////////
// The goofy first stage of mc playthroughs
ServerEvents.recipes(e => {

    // Goofy Recipes here
    // also a start of a very painfull journey
    // First Age first headache

    // Hexerei Constructors
    const hexMixing = (fluidId, fluidCount, ingredientsArray, outputId, heatRequirement) => {
        e.custom({
            type:'hexerei:mixingcauldron',
            fluid: {id: fluidId, amount: fluidCount},
            ingredients: ingredientsArray.map(id => typeof id === 'string' ? { item: id } : id),
            output: {id: outputId, heatRequirement: heatRequirement}
    })}
    const hexMelting = (fluidCount, inputId, outputId) => {
        e.custom({
            type:'hexerei:mixingcauldron',
            fluid: {id: 'minecraft:lava', amount: fluidCount},
            ingredients: [
                {item: inputId},
                {item: inputId},
                {item: inputId},
                {item: inputId},
                {item: inputId},
                {item: inputId},
                {item: inputId},
                {item: inputId}
            ],
            output: { id: outputId, count: 8, heatRequirement: 'heated'}
    })}
    const pestleMortar = (ingredientsArray, output, outputCount, time) => {
        e.custom({
            type: 'hexerei:pestle_and_mortar',
            ingredients: ingredientsArray.map(id => 
                typeof id === 'string'
                ? id.includes('#')
                    ? {tag: id.replace('#', '')}
                    : {item: id}
                : id),
                output: {id: output, count: outputCount},
                grindingTime: time
    })}

    // Froglight
    const froglight = (output, ball, block) => {
        e.shaped(`4x ${output}`, [
            'SBS',
            'B B',
            'SBS'
        ], {
            S:ball,
            B:block
    })}
    
    const woodTypes = [
        {id: 'oak', mod:'minecraft'},
        {id: 'spruce', mod:'minecraft'},
        {id: 'birch', mod:'minecraft'},
        {id: 'jungle', mod:'minecraft'},
        {id: 'acacia', mod:'minecraft'},
        {id: 'dark_oak', mod:'minecraft'},
        {id: 'mangrove', mod:'minecraft'},
        {id: 'cherry', mod:'minecraft'},
        {id: 'warped', mod:'minecraft', helper:'stem'},
        {id: 'crimson', mod:'minecraft', helper:'stem'},
        {id: 'pale_oak', mod:'minecraft', helper:'backport'},
        {id: 'dreadwood', mod:'iceandfire'},
        {id: 'mahogany', mod:'hexerei'},
        {id: 'willow', mod:'hexerei'},
        {id: 'hazel', mod: 'hexerei'},
        {id: 'blue_archwood', mod: 'ars_nouveau', helper: 'archwood'},
        {id: 'red_archwood', mod: 'ars_nouveau', helper: 'archwood'},
        {id: 'purple_archwood', mod: 'ars_nouveau', helper: 'archwood'},
        {id: 'green_archwood', mod: 'ars_nouveau', helper: 'archwood'},
    ]

    // Leather Cutting Recipe
    e.recipes.farmersdelight.cutting('#minecraft:wool', '#c:tools/knife', '4x minecraft:string', 'farmersdelight:block.food.slice')
    e.recipes.farmersdelight.cutting('minecraft:leather', '#c:tools/knife', '4x minecraft:rabbit_hide', 'farmersdelight:block.food.slice')

    // Use for mangrove roots
    e.shapeless('2x minecraft:mangrove_log', [
        'minecraft:mangrove_roots',
        'minecraft:mangrove_roots',
        'minecraft:mangrove_roots',
        'minecraft:mangrove_roots'
    ])

    // Mahogany & Willow Saplings
    e.shapeless('4x hexerei:mahogany_sapling', [
        'ars_nouveau:red_archwood_sapling',
        'minecraft:oak_sapling'
    ])
    e.shapeless('4x hexerei:witch_hazel_sapling', [
        'ars_nouveau:blue_archwood_sapling',
        'minecraft:oak_sapling'
    ])

    e.shapeless('2x minecraft:ice', [
        'minecraft:cobblestone',
        'yungscavebiomes:icicle',
        'minecraft:cobblestone',
        'yungscavebiomes:icicle'
    ])

    e.shaped('minecraft:trident', [
        'Q Q',
        ' S ',
        'S Q'
    ], {
        Q:'minecraft:quartz',
        S:'minecraft:prismarine_shard'
    })

    // Chainmail
    e.shaped('minecraft:chainmail_helmet', ['CCC', 'C C', '   '], {C:'minecraft:chain'})
    e.shaped('minecraft:chainmail_chestplate', ['C C', 'CCC', 'CCC'], {C:'minecraft:chain'})
    e.shaped('minecraft:chainmail_leggings', ['CCC', 'C C', 'C C'], {C:'minecraft:chain'})
    e.shaped('minecraft:chainmail_boots', ['   ', 'C C', 'C C'], {C:'minecraft:chain'})

    // Magma, Slime & Gelatin Froglight Recipe
    froglight('minecraft:ochre_froglight', 'minecraft:magma_cream', 'minecraft:magma_block')
    froglight('minecraft:verdant_froglight', 'slime_ball', 'slime_block')
    froglight('minecraft:pearlescent_froglight', 'reestrogen:artificial_slime_ball', 'reestrogen:cloud_block')

    // Lodestone
    e.remove({id: 'minecraft:lodestone'})
    
    // Grindstone
    e.remove({id: 'minecraft:grindstone'})
    e.shaped('minecraft:grindstone', [
        '   ',
        'SCS',
        'S S'
        ], {
        S: 'minecraft:stick',
        C: 'minecraft:cobblestone'
    })

    // Shulker Box
    e.shaped('minecraft:shulker_box', [
        'III',
        'ICI',
        'BBB'
        ], {
        B: 'minecraft:copper_block',
        C: '#minecraft:chests',
        I: 'tfmg:nickel_ingot'
    })

    // Stonecutter
    e.remove({id: 'minecraft:stonecutter'})
    e.shaped('minecraft:stonecutter', [
        ' I ',
        'ICI',
        'WCW'
        ], {
        I: 'minecraft:iron_ingot',
        C: 'minecraft:cobblestone',
        W: '#minecraft:planks'
    })

    // Add The Recipes Back
    e.shaped('minecraft:bundle', ['S ', 'L '], {S: 'minecraft:string', L: 'minecraft:leather'})
    e.shaped('minecraft:lodestone', [
        'SSS',
        'SIS',
        'SSS'
        ], {
        S:'minecraft:stone',
        I:'minecraft:iron_ingot'
    })
    
    // Old recipes used normally
    e.remove({id: 'refurbished_furniture:knife'})
    e.remove({id: 'reestrogen:surgical_steel_shaft_recipe'})
    e.remove({id: 'hexerei:mixing_cauldron'})
    e.remove({output: 'hexerei:pestle_and_mortar'})
    
    // Pestle and Mortar Recipe cuz the old one's too expensive
    e.shaped('hexerei:pestle_and_mortar', [' C ', 'C C', 'CCC'], {C:'minecraft:cobblestone'})
    
    // Iron Recipe so u can get some early iron
    pestleMortar(['minecraft:raw_iron', 'minecraft:raw_iron', 'minecraft:raw_iron', 'minecraft:raw_iron', 'minecraft:coal'], 'minecraft:iron_ingot', 3, 100)
    
    // Coal To Black Dye
    e.shapeless('minecraft:black_dye', ['minecraft:coal'])

    // All The Previous Mixer Recipes
    e.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
    e.remove({id: 'createcasing:crafting/mixer/brass'})
    e.remove({id: 'createcasing:crafting/mixer/copper'})
    e.remove({id: 'createcasing:crafting/mixer/railway'})
    e.remove({id: 'createcasing:crafting/mixer/shadow_steel'})
    e.remove({id: 'createcasing:crafting/mixer/refined_radiance'})
    e.remove({id: 'createcasing:crafting/mixer/creative'})
    e.remove({id: 'createcasing:crafting/mixer/industrial_iron'})
    e.remove({id: 'createcasing:crafting/mixer/weathered_iron'})    
    // Whisk Recipe
    e.shaped('create:whisk', [
        ' B ',
        'SBS',
        'SSS'
        ], {
        B:'create:brass_ingot',
        S:'create:brass_sheet'
    })
    // Mixer Recipe
    e.shaped('createcasing:brass_mixer', [
        ' G ',
        ' C ',
        ' W '
        ], {
        G: 'create:cogwheel',
        C: 'create:brass_casing',
        W: 'create:whisk'
    })

    // Propeller Recipe
    hexMixing('minecraft:lava', 50, [
            'create:brass_ingot',
            'create:brass_sheet',
            'create:brass_ingot',
            'create:brass_sheet',
            'create:brass_ingot',
            'create:brass_sheet',
            'create:brass_ingot',
            'create:brass_sheet'
        ], 'create:propeller', 'heated')

    

    e.shaped('hexerei:mixing_cauldron', ['C C', 'PCP', 'PPP'], {C:'minecraft:cobblestone', P:'#minecraft:planks'})

    woodTypes.forEach(wood => {
        if (wood.mod != 'minecraft' | wood.helper == 'backport') return
        e.remove({output: `refurbished_furniture:${wood.id}_cutting_board`})
    })
    
    // Ingot Smelting
    hexMelting(10, 'minecraft:raw_iron', 'minecraft:iron_ingot')
    hexMelting(10, 'minecraft:raw_copper', 'minecraft:copper_ingot')
    hexMelting(10, 'minecraft:raw_gold', 'minecraft:gold_ingot')
    hexMelting(10, 'create:raw_zinc', 'create:zinc_ingot')
    hexMelting(10, 'minecraft:clay_ball', 'minecraft:brick')
    // Brass Ingot
    hexMixing('minecraft:lava', 100, [
        'create:copper_nugget',
        'create:copper_nugget',
        'create:copper_nugget',
        'create:copper_nugget',
        'create:zinc_nugget',
        'create:zinc_nugget',
        'create:zinc_nugget',
        'create:zinc_nugget'
        ], 'create:brass_ingot', 'heated')

    e.remove({id: 'minecraft:furnace'})
    e.remove({id: 'minecraft:blast_furnace'})
    e.remove({id: 'miencraft:smoker'})
})
const blockNuke = (blockId, replacement, stage, cost) => {
    BlockEvents.broken(blockId,e => {
        if(e.player.stages.has(stage)) {
            return
        } else {
            e.block.set(replacement)
            if(typeof(cost) == 'array') {
                cost.forEach(c => {
                    console.log(c)
                    e.player.give(c)
                })
            } else {
                e.player.give(cost)
            }
            e.cancel
        }
    })
    BlockEvents.rightClicked(blockId, e => {
        console.log(stage)
        if(e.player.stages.has(stage)) {
            return
        } else {
            e.block.set(replacement)
            if(typeof(cost) == 'array') {
                cost.forEach(c => {
                    console.log(c)
                    e.player.give(c)
                })
            } else {
                e.player.give(cost)
            }
            e.cancel
        }
    })
}
blockNuke('minecraft:furnace', 'minecraft:air', 'impossible', '8x cobblestone')
blockNuke('minecraft:blast_furnace', 'minecraft:air', 'impossible', '8x minecraft:cobblestone')
blockNuke('minecraft:smoker', 'minecraft:air', 'impossible', '8x minecraft:cobblestone')
blockNuke('minecraft:enchanting_table', 'minecraft:air', 'enchanter', '2x minecraft:diamond')

///////////
// Brass //
///////////
// Start of Brass Age
const createMachines = [
        {id: 'gearbox', mod: 'create'},
        {id: 'press', mod: 'create'},
        {id: 'mixer', mod: 'create'},
        {id: 'depot', mod: 'create'},
        {id: 'encased_chain_drive', mod: 'create'},
        {id: 'adjustable_chain_gearshift', mod: 'create'},
        {id: 'configurable_gearbox', mod: 'create'},
        {id: 'chain_conveyor', mod: 'create'},
        {id: 'gearshift', mod: 'create'},
        {id: 'clutch', mod: 'create'},
        {id: 'automatic_clutch', mod: 'create'},
        {id: 'deployer', mod: 'create'},
        {id: 'portable_storage_interface', mod: 'create'},
        {id: 'encased_fan', mod: 'create'},
        {id: 'mechanical_harvester', mod: 'create'},
        {id: 'mechanical_saw', mod: 'create'},
        {id: 'mechanical_drill', mod: 'create'},
        {id: 'mechanical_plough', mod: 'create'},
        {id: 'mechanical_roller', mod: 'create'},
        {id: 'fluid_pipe', mod: 'copper'},
        {id: 'mechanical_pump', mod: 'copper'},
        {id: 'smart_fluid_pipe', mod: 'copper'},
        {id: 'fluid_tank', mod: 'copper'},
        {id: 'steam_engine', mod: 'copper'},
        {id: 'item_drain', mod: 'copper'},
        {id: 'fluid_valve', mod: 'copper'},
        {id: 'valve_handle', mod: 'copper'},
        {id: 'hose_pulley', mod: 'copper'},
        {id: 'portable_fluid_interface', mod: 'copper'},
        {id: 'steam_whistle', mod: 'copper'},
        {id: 'spout', mod: 'copper'},
        {id: 'cogwheel', mod: 'wheels'},
        {id: 'large_cogwheel', mod: 'wheels'},
        {id: 'shaft', mod: 'wheels'}
]
const machineCasings = [
        {id: 'andesite', mod: 'create'},
        {id: 'brass', mod: 'create'},
        {id: 'copper', mod: 'create'},
        {id: 'railway', mod: 'create'},
        {id: 'zinc', mod: 'create'},
        {id: 'accacia', mod: 'wheels'},
        {id: 'birch', mod: 'wheels'},
        {id: 'bamboo', mod: 'wheels'},
        {id: 'cherry', mod: 'wheels'},
        {id: 'crimson', mod: 'wheels'},
        {id: 'dark_oak', mod: 'wheels'},
        {id: 'oak', mod: 'wheels'},
        {id: 'jungle', mod: 'wheels'},
        {id: 'mangrove', mod: 'wheels'},
        {id: 'warped', mod: 'wheels'},
]
ServerEvents.tags('item', e => {

    // Elytra Cape Tag
    e.add('accessories:cape', 'minecraft:elytra')

    // Create Machine Tagging
    createMachines.forEach(cM => {
        machineCasings.forEach(mC => {
            if (cM.mod == mC.id | (cM.mod == 'create' & mC.id == 'andesite')) {
                if (cM.id == 'mixer' | cM.id == 'press') {
                    e.add(`create:${cM.id}`, `create:mechanical_${cM.id}`)
                } else {
                    if (cM.id == 'gearbox') {e.add(`create:vertical_${cM.id}`, `create:vertical_${cM.id}`)}
                    e.add(`create:${cM.id}`, `create:${cM.id}`)
                }
            } else {
                e.add(`create:${cM.id}`, `createcasing:${mC.id}_${cM.id}`)
                if (cM.id == 'gearbox') {e.add(`create:vertical_${cM.id}`, `createcasing:vertical_${mC.id}_${cM.id}`)}
            }
        })
    })
})

ServerEvents.recipes(e => {

    const crushing = e.recipes.create.crushing

    // Coke Oven Recipes
    const coking = (ingredientsArray, resultsArray, time) => {
        e.custom({
            type: 'tfmg:coking',
            ingredients: ingredientsArray.map(id => 
                typeof id === 'string'
                ? id.includes('#')
                    ? {tag: id.replace('#', '')}
                    : {item: id}
                : {amount: id}),
            processing_time: time,
            results: resultsArray.map(id => 
                typeof id === 'string'
                ? id.includes('#')
                    ? {tag: id.replace('#', '')}
                    : {id: id}
                : id),
        })
    }

    // Lazy solution to typing out all gear
    const gear = [
        'hoe',
        'shovel',
        'pickaxe',
        'axe',
        'sword',
        'helmet',
        'chestplate',
        'leggings',
        'boots'
    ]
    // Loop to remove all diamond gear recipes
    gear.forEach(g => {
        if(g == 'pickaxe') {return} else{
            e.remove({id: `minecraft:diamond_${g}`})
        }
    })

    //
    crushing('minecraft:iron_ingot', 'create:crushed_raw_iron', 200)

    // Diamond Armor
    e.shaped('minecraft:diamond_helmet', ['DDD', 'S S', '   '], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot'})
    e.shaped('minecraft:diamond_chestplate', ['D D', 'DSD', 'DDD'], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot'})
    e.shaped('minecraft:diamond_leggings', ['DSD', 'D D', 'S S'], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot'})
    e.shaped('minecraft:diamond_boots', ['   ', 'D D', 'S S'], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot'})

    // Diamond Tools
    e.shaped('minecraft:diamond_sword', [' D ', ' D ', 'SLS'], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot', L:'minecraft:stick'})
    e.shaped('minecraft:diamond_axe', [' DD', ' LS', ' L '], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot', L:'minecraft:stick'})
    e.shaped('minecraft:diamond_shovel', [' D ', ' S ', ' L '], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot', L:'minecraft:stick'})
    e.shaped('minecraft:diamond_hoe', ['SDD', ' L ', ' L '], {D: 'minecraft:diamond', S: 'tfmg:steel_ingot', L:'minecraft:stick'})

    // Steel Furnace Tweaks
    e.remove({id:'tfmg:coking/charcoal'})
    coking([
        '#minecraft:logs_that_burn'
        ], [
        'tfmg:coal_coke',
        {id:'tfmg:creosote', amount: 2},
        {id:'tfmg:carbon_dioxide', amount: 20}
        ], 600
    )
    e.blasting('tfmg:fireproof_bricks', 'tfmg:fireclay')
    e.shapeless('tfmg:fireclay', ['minecraft:clay', 'iceandfire:ash'])
    e.shapeless('4x tfmg:fireclay_ball', ['tfmg:fireclay'])

    // Tide Trident Recipe
    e.remove({id: 'iceandfire:tide_trident'})
    e.smithing(`iceandfire:tide_trident`, 
                `#iceandfire:scales/sea_serpent`, // Template Slot
                `minecraft:trident`, // Upgrade Gear
                `iceandfire:sea_serpent_fang`  // Upgrade Material
            )

    // Drip stone recipe
    e.remove({id: 'minecraft:lightning_rod'})
    e.shaped('minecraft:lightning_rod', [
        'C',
        'C',
        'B'
    ], {
        C:"minecraft:copper_ingot",
        B:"minecraft:copper_block"
    })
    e.shaped('4x minecraft:pointed_dripstone', [' D ', ' D ', ' D '], {D:'minecraft:copper_ingot'})

    // Solar Panel Balancing
    e.remove({id: 'create_new_age:shaped/basic_solar_heating_plate'})
    e.remove({id: 'create_new_age:shaped/advanced_solar_heating_plate'})
    e.shaped('4x create_new_age:advanced_solar_heating_plate', ['GGG', 'IPI', 'IPI'], {G:'#c:glass_blocks/colorless', I:'minecraft:iron_ingot', P:'create_new_age:heat_pipe'})

    // Make Steel Rare
    e.replaceOutput({output: 'reestrogen:surgical_steel'}, 'reestrogen:surgical_steel', 'tfmg:cast_iron_ingot')
    e.blasting('tfmg:steel_ingot', 'stellaris:raw_steel_ingot')
    e.remove({output: 'reestrogen:surgical_steel'})
    
    e.replaceInput( {output:'create:empty_blaze_burner'}, 'minecraft:netherrack', 'minecraft:magma_block')

    e.remove({id: 'create_new_age:shaped/heater'})
    e.shaped('create_new_age:heater', ['N N', 'NBN', 'HHH'], {N:'minecraft:iron_nugget', B:'create:empty_blaze_burner', H:'create_new_age:heat_pipe'})

    // All Create Machines Stonecutting (vanity only)
    let machineTag
    createMachines.forEach(machine => {
        machineTag = Ingredient.all.getItemIds().toArray().filter(id => Item.of(id).hasTag(`create:${machine.id}`))
        machineTag.forEach(item => {
            e.stonecutting(item, `#create:${machine.id}`)
        })
    })


    // Precision Mechanism Fix
    e.recipes.create.sequenced_assembly(
      // Outputs:
      [
        CreateItem.of('create:precision_mechanism', 0.75), // Main output, will appear in JEI as the result
        CreateItem.of('create:golden_sheet', 0.01), // Rest of these items will be considered Random Salvage
        CreateItem.of('create:andesite_alloy', 0.01),
        CreateItem.of('create:cogwheel', 0.01),
        CreateItem.of('create:shaft', 0.01),
        CreateItem.of('create:crushed_raw_gold', 0.01)
      ],
      // Input:
      'create:golden_sheet', 
      // Sequence:
      [
        // The transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        // Like a normal recipe function, it's used as a sequence step in this array. Input and output have the transitional item
        e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel',]),
        e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel',]),
        e.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'minecraft:iron_nugget',]),
      ]
    )
    .transitionalItem('create:incomplete_precision_mechanism') // Set the transitional item
    .loops(2) // Set the number of loops

    // Tuff Recipe
    e.shapeless('2x minecraft:tuff', [
        'minecraft:cobblestone',
        'minecraft:basalt',
        'minecraft:cobblestone',
        'minecraft:basalt'
    ])

    // Limestone Recipe
    e.shapeless('4x create:limestone', [
        'minecraft:polished_basalt',
        'minecraft:quartz',
        'minecraft:polished_basalt',
        'minecraft:quartz'
    ])

    // Ores for blasting raw blocks
    const rawOres = [
        {name:'iron', mod:'minecraft'},
        {name:'copper', mod:'minecraft'},
        {name:'gold', mod:'minecraft'},
        {name:'zinc', mod:'create'},
    ]
    rawOres.forEach( rO => {
       e.blasting(`${rO.mod}:${rO.name}_block`, `${rO.mod}:raw_${rO.name}_block`).cookingTime(440).xp(6.3) 
    })

    // Shaft Recipe
    e.remove({output: 'create:shaft'})
    e.shaped('8x create:shaft', ['B ', 'B '], {B: 'create:brass_ingot'})

    // Sand Blasting
    e.blasting('minecraft:glass', 'minecraft:sand').xp(0.1).cookingTime(5)

    
    e.remove({id: 'create:crafting/kinetics/whisk'})
    e.remove({id: 'create:crafting/kinetics/encased_fan'})
    e.remove({id: 'create:crafting/kinetics/propeller'})
    e.remove({id: 'create:crafting/materials/andesite_alloy'})
    e.remove({id: 'createcasing:crafting/encased_fan/copper'})
    e.remove({id: 'createcasing:crafting/encased_fan/weathered_iron'})
    e.remove({id: 'create:crafting/kinetics/encased_chain_drive'})
    e.remove({id: 'create:crafting/kinetics/shaft'})


})

// Enchanting Table Stage Unlock
PlayerEvents.inventoryChanged('minecraft:end_crystal', e => {
    if(e.player.stages.has('enchanter') == false) e.player.stages.add('enchanter')
})

// Steel Ingot Converts to TFMG
PlayerEvents.inventoryChanged('stellaris:steel_ingot',e => {
    const inventory = e.player.inventory
    let amount = e.item.count
    let slot = inventory.find('stellaris:steel_ingot')
    inventory.setStackInSlot(slot, Item.of('tfmg:steel_ingot', amount))
})

BlockEvents.broken('stellaris:steel_ore', e => {
    e.block.set('air')
    e.player.give('2x reestrogen:raw_surgical_steel')
    e.cancel()
})
BlockEvents.broken('stellaris:deepslate_steel_ore', e => {
    e.block.set('air')
    e.player.give('2x reestrogen:raw_surgical_steel')
    e.cancel()
})

////////////////
// Energy Age //
////////////////
// Start of energy age fun times for AUTISMICAL
ServerEvents.recipes( e=> {
    
    const refining = (outputId, outputAmount, fluidId, fluidAmount, dieselAmount, energyAmount) => {
        e.custom({
            type: 'stellaris:fuel_refinery',
            energyContainer: energyAmount,
            ingredient: {fluid: fluidId, id: fluidId, amount: fluidAmount},
            fuel: {fluid: outputId, id: outputId, amount: outputAmount},
            diesel: {fluid: 'tfmg:diesel', id: 'tfmg:diesel', amount: dieselAmount}
        })
    }
    const craftingMechanical = e.recipes.create.mechanical_crafting
    const rocketStation = (ingredientsArray, output, outputCount) => {
        e.custom({
            type:'stellaris:rocket_station',
            ingredients: ingredientsArray.map(id => 
                typeof id === 'string'
                ? id.includes('#')
                    ? {tag: id.replace('#', '')}
                    : {item: id}
                : id), output: {id: output, count: outputCount}
    })}
    const enchantingAparatus = (keepNbt, pedestalArray, inputMain, outputObj, energy) => {
        e.custom({
            type: 'ars_nouveau:enchanting_apparatus',
            keepNbtOfReagent: keepNbt,
            pedestalItems: pedestalArray.map(id => typeof id === 'string' ? { item: id } : id),
            reagent: {item: inputMain},
            result: outputObj,
            sourceCost: energy
        })
    }

    const imbuement = (inputId, outputId, pedestalArray, energy) => {
        e.custom({
            type: 'ars_nouveau:imbuement',
            input: {item: inputId},
            output: {id: outputId},
            pedestalItems: pedestalArray,
            source: energy
        })
    }

    e.remove({id: 'minecraft:enchanting_table'})
    e.shaped('minecraft:enchanting_table', [
        ' B ',
        'DND',
        'OOO'
    ], {
        B: 'minecraft:book',
        D: 'minecraft:diamond',
        N: 'minecraft:netherite_ingot',
        O: 'minecraft:obsidian'
    })

    //

    // Antenna Recipe
    craftingMechanical('stellaris:antenna', [
        ' SSS ',
        'SSRSS',
        'SRMRS',
        'SSRSS',
        ' SSS '
    ], {
        S:'tfmg:steel_ingot',
        R:'minecraft:redstone',
        M:'tfmg:generator'
    })

    // Rocket Crafting Recipe
    craftingMechanical('stellaris:rocket_station', [
        ' SS SS ',
        'SS   SS',
        'S  C  S',
        'BBSSSBB',
        'BRSSSEB'
    ], {
        S:'tfmg:steel_ingot',
        B:'tfmg:steel_block',
        E:'minecraft:emerald_block',
        R:'minecraft:redstone_block',
        C:'create:crafting_blueprint'
    })

    // Rocket Launch Pad
    craftingMechanical('9x stellaris:rocket_launch_pad',
        [
            ' SSS ',
            'SSSSS',
            'SSRSS',
            'SSSSS',
            ' SSS '
        ], {
            S:'tfmg:steel_block',
            R:'minecraft:redstone_block'
    })

    // Rocket Ingredient Recipes
    craftingMechanical('stellaris:rocket_engine', [
        'BSSSB',
        'SSFSS',
        'SFBFS',
        'SSFSS',
        'BSSSB'
    ], {
        B:'minecraft:bucket',
        S:'tfmg:steel_ingot',
        F:'stellaris:engine_fan'
    })
    craftingMechanical('stellaris:engine_fan', [
        '  S  ',
        ' SBS ',
        'SBSBS',
        ' SBS ',
        '  S  '
    ], {
        S:'tfmg:steel_ingot',
        B:'tfmg:steel_block'
    })
    craftingMechanical('stellaris:rocket_fin', [
        '  S  ',
        ' SSS ',
        'SSSSS',
        'SS SS',
        'S   S'
    ], {
        S:'tfmg:steel_ingot'
    })
    craftingMechanical('stellaris:rocket_nose_cone', [
        '  T  ',
        ' SBS ',
        'SBBBS',
        'SBBBS',
        ' SSS '
    ], {
        T: 'minecraft:redstone_torch',
        S: 'tfmg:steel_ingot',
        B: 'tfmg:steel_block'
    })

    const canColors = [
        'blue',
        'green',
        'purple',
        'red',
        'yellow'
    ]
    canColors.forEach(color => {
        e.shaped(`stellaris:small_${color}_can`, [
            ' A ',
            'ACA',
            'AAA'
        ], {
            A:'tfmg:aluminum_ingot',
            C:`minecraft:${color}_wool`
        })
        e.shaped(`stellaris:big_${color}_can`, [
            ' A ',
            'ACA',
            'BAB'
        ], {
            A:'tfmg:aluminum_ingot',
            B:'tfmg:aluminum_block',
            C:`minecraft:${color}_wool`
        })
    })

    // Vacuumator Recipe
    craftingMechanical('stellaris:vacuumator', [
        'BSB',
        'SDS',
        'BSB'
    ], {
        S:'tfmg:steel_ingot',
        B:'tfmg:steel_block',
        D:'reestrogen:block_of_dreams'
    })

    // Fuel Refinery Recipe
    craftingMechanical('stellaris:fuel_refinery', [
        ' BBB ',
        'BTSTB',
        'PSGSP',
        'BTSTB',
        ' BBB '
    ], {
        S:'tfmg:steel_ingot',
        B:'tfmg:steel_block',
        T:'tfmg:steel_fluid_tank',
        P:'tfmg:steel_pipe',
        G:'tfmg:generator'
    })

    // Fuel Refining Recipe
    refining('stellaris:fuel', 25, 'tfmg:heavy_oil', 50, 25, 200)
    
    // Water Separator
    craftingMechanical('stellaris:water_separator', [
        'BBB    ',
        'SSSSSSS',
        'STSTSTS',
        'SSSSSSS',
        '    BBB'
    ], {
        S:'tfmg:steel_ingot',
        B:'tfmg:steel_block',
        T:'tfmg:steel_fluid_tank'
    })

    // Oxygen Distributor Recipe
    craftingMechanical('stellaris:oxygen_distributor', [
        'BBB',
        'STS',
        'BBB'
    ], {
        S:'tfmg:heavy_plate',
        B:'tfmg:steel_block',
        T:'tfmg:steel_fluid_tank'
    })

    e.shaped('minecraft:shulker_shell', [
        'CCC',
        'C C'
    ], {
        C: 'minecraft:popped_chorus_fruit'
    })

    const seperating = (output, ingredientId, ingredientAmount, energyAmount) => {
        let outputArray = []
        e.custom({
            type: 'stellaris:water_seperator',
            energyContainer: energyAmount,
            ingredient: {
                "fluid" : ingredientId,
                "id": ingredientId,
                "amount": ingredientAmount
            }, results: output
        })
    }
    // Oxygen Recipe
    seperating([
        {fluid:'stellaris:hydrogen', id:'stellaris:hydrogen', amount:200},
        {fluid:'stellaris:oxygen', id:'stellaris:oxygen', amount:100}
    ], 'minecraft:water', 100, 2000)

    // Space Suit Recipe
    craftingMechanical('stellaris:space_suit_helmet', [
        'SCS',
        'CGC',
        'SCS'
    ], {
        S:'tfmg:steel_ingot',
        G:'minecraft:iron_helmet',
        C:'#c:glass_blocks'
    })
    craftingMechanical('stellaris:space_suit_chestplate', [
        'S S',
        'SGS',
        'SSS'
    ], {
        S:'tfmg:steel_ingot',
        G:'minecraft:iron_chestplate'
    })
    craftingMechanical('stellaris:space_suit_leggings', [
        'SGS',
        'S C',
        'S S'
    ], {
        S:'tfmg:steel_ingot',
        G:'minecraft:iron_leggings',
        C:'minecraft:lime_wool'
    })
    craftingMechanical('stellaris:space_suit_boots', [
        '   ',
        'SGS',
        'S S'
    ], {
        S:'tfmg:steel_ingot',
        G:'minecraft:iron_boots'
    })

    // Rocket Recipe
    rocketStation(
        [   
            'stellaris:rocket_nose_cone',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'stellaris:rocket_fin',
            'tfmg:steel_block',
            'tfmg:steel_block',
            'stellaris:rocket_fin',
            'stellaris:rocket_fin',
            'stellaris:rocket_engine',
            'stellaris:rocket_fin'
        ], 'stellaris:rocket', 1
    )

    e.remove({id: 'refurbished_furniture:wrench'})
    e.shapeless('refurbished_furniture:wrench', ['create:wrench'])
    e.shapeless('create:wrench', ['refurbished_furniture:wrench'])

    e.remove({id: 'refurbished_furniture:light_electricity_generator'})
    e.shaped('refurbished_furniture:light_electricity_generator', [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S:'tfmg:steel_ingot',
        G:'tfmg:generator'
    })

    e.replaceInput({ input: 'minecraft:gold_nugget', mod: 'ars_nouveau' },
        'minecraft:gold_nugget',
        'create:brass_nugget'
    )
    e.replaceInput({ input: 'minecraft:gold_ingot', mod: 'ars_nouveau' }, 
        'minecraft:gold_ingot',
        'create:brass_ingot'
    )

    // Ars Nouveau Recipe Tweaks
    e.remove({id: 'ars_nouveau:novice_spell_book'})
    e.remove({id: 'ars_nouveau:novice_spellbook_alt'})
    e.remove({id: 'ars_nouveau:apprentice_book_upgrade'})
    e.remove({id: 'ars_nouveau:archmage_book_upgrade'})

    imbuement('minecraft:stone', 'minecraft:iron_ingot', [{item: 'minecraft:raw_iron'}], 100)
    imbuement('minecraft:iron_ingot', 'minecraft:quartz', [{item: 'minecraft:quartz'}], 200)

    enchantingAparatus(false, [
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_sword'
    ], 'ars_nouveau:worn_notebook', {count: 1, id: 'ars_nouveau:novice_spell_book'}, 200)
    
})

////////////////
// Dragon Age //
////////////////
// AUTISMICAL the age
const dragonColors = [
    { id: 'red', type: 'fire' },
    { id: 'green', type: 'fire' },
    { id: 'bronze', type: 'fire' },
    { id: 'gray', type: 'fire' },
    { id: 'blue', type: 'ice'},
    { id: 'white', type: 'ice'},
    { id: 'sapphire', type: 'ice'},
    { id: 'silver', type: 'ice'},
    { id: 'electric', type: 'lightning' },
    { id: 'amethyst', type: 'lightning' },
    { id: 'copper', type: 'lightning' },
    { id: 'black', type: 'lightning' }
]
const dragonTypes = [
    'fire',
    'ice',
    'lightning'
]
const armorPieces = [
    {id: 'helmet', array: ['IGI', 'I I', '   ']},
    {id: 'chestplate', array: ['I I', 'IGI', 'III']},
    {id: 'leggings', array: ['IGI', 'I I', 'I I']},
    {id: 'boots', array: ['I I', 'IGI', '   ']}
]

ServerEvents.tags('item', e => {
    dragonColors.forEach(color => {
        armorPieces.forEach(piece => {
            e.add(`universe:dragon/${color.type}_${color.id}/armor/${piece.id}`, `iceandfire:armor_${color.id}_${piece.id}`)
            e.add(`universe:dragon/${color.type}/armor/${piece.id}`, `iceandfire:armor_${color.id}_${piece.id}`)
            e.add(`universe:dragon/${color.type}/armor`, `iceandfire:armor_${color.id}_${piece.id}`)
        })
    })
})

ServerEvents.recipes(e => {
    
    dragonColors.forEach(color => {
        armorPieces.forEach(piece => {
            e.remove({id: `iceandfire:armor_${color.id}_${piece.id}`})
            e.smithing(`iceandfire:armor_${color.id}_${piece.id}`, 
                `iceandfire:dragonscale_${color.id}`, // Template Slot
                `minecraft:netherite_${piece.id}`, // Upgrade Gear
                `iceandfire:dragonscales_${color.id}`  // Upgrade Material
            )
        })
    })

    // Ice and Fire Tweaks
    e.remove({id: 'iceandfire:chain'})
    e.remove({id: 'dragoncare:dragon_blood_syringe'})
})

///////////////////
// Planetary Age //
///////////////////
// Start of some planet exploration fun times for majro
ServerEvents.recipes(e => {
    const rocketStation = (ingredientsArray, output, outputCount) => {
        e.custom({
            type:'stellaris:rocket_station',
            ingredients: ingredientsArray.map(id => 
                typeof id === 'string'
                ? id.includes('#')
                    ? {tag: id.replace('#', '')}
                    : {item: id}
                : id), output: {id: output, count: outputCount}
    })}

    rocketStation([
        'tfmg:steel_sword',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:storage_blocks/scales/dragon/ice',
        '#iceandfire:dragon_steels',
        '#iceandfire:dragon_steels',
        '#iceandfire:storage_blocks/scales/dragon/ice',
        '#iceandfire:storage_blocks/scales/dragon/lightning',
        '#iceandfire:storage_blocks/scales/dragon/fire',
        '#iceandfire:storage_blocks/scales/dragon/lightning'
    ], 'tacz:gun_smith_table', 1)

    // TACZ
    e.remove({id: 'tacz:ammo_workbench'})
    e.remove({id: 'tacz:attachment_workbench'})
    e.remove({id: 'tacz:gun_smith_table'})

    // Full Removers
    e.remove({mod: 'stellaris'})
})

///////////////////////
// Space Station Age //
///////////////////////
// The end game of all

ServerEvents.recipes(e => {
    
    

    // Dragonsteel Armor Rework
    armorPieces.forEach(piece => {
        
        dragonTypes.forEach(type => {
            e.remove({id: `iceandfire:dragonsteel_${type}_${piece.id}`})

            e.recipes.create.mechanical_crafting(`iceandfire:dragonsteel_${type}_${piece.id}`, piece.array, {
                G: `#universe:dragon/${type}/armor/${piece.id}`,
                I: `iceandfire:dragonsteel_${type}_ingot`
            })
        })
    })
})

