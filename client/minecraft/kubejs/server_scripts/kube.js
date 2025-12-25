///////////////
// Variables //
///////////////
const ores = [
                {ore:'deepslate_coal_ore', mod:'minecraft:', raw:`none`},
                {ore:'deepslate_iron_ore', mod:'minecraft:', raw:`iron`},
                {ore:'deepslate_copper_ore', mod:'minecraft:', raw:`copper`},
                {ore:'deepslate_gold_ore', mod:'minecraft:', raw:`gold`},
                {ore:'deepslate_redstone_ore', mod:'minecraft:', raw:`none`},
                {ore:'deepslate_emerald_ore', mod:'minecraft:', raw:`none`},
                {ore:'deepslate_lapis_ore', mod:'minecraft:', raw:`none`},
                {ore:'deepslate_diamond_ore', mod:'minecraft:', raw:`none`},
                {ore:'deepslate_tin_ore', mod:'mekanism:', raw:`tin`},
                {ore:'deepslate_osmium_ore', mod:'mekanism:', raw:`osmium`},
                {ore:'deepslate_uranium_ore', mod:'mekanism:', raw:`uranium`},
                {ore:'deepslate_uranium_ore', mod:'createnuclear:', raw:`uranium`},
                {ore:'deepslate_fluorite_ore', mod:'mekanism:', raw:`none`},
                {ore:'deepslate_lead_ore', mod:'mekanism:', raw:`lead`},
                {ore:'deepslate_lead_ore', mod:'createnuclear:', raw:`lead`},
                {ore:'deepslate_silver_ore', mod:'iceandfire:', raw:`silver`},
                {ore:'deepslate_zinc_ore', mod:'create:', raw:`zinc`}
            ]

ores.forEach(ore => {

    ServerEvents.recipes(e => {
        if(ore.raw == 'none') return
        if(ore.mod == 'minecraft:' || ore.mod == 'create:') {
            e.blasting(`${ore.mod}${ore.raw}_block`, `${ore.mod}raw_${ore.raw}_block`, 9, 900)
        }
        if(ore.mod == 'mekanism:') {
            e.blasting(`${ore.mod}block_${ore.raw}`, `${ore.mod}block_raw_${ore.raw}`, 9, 900)
        }
        if(ore.mod == 'createnuclear:' && (ore.raw == 'lead' || ore.raw == 'uranium')) {
            e.blasting(`mekanism:block_${ore.raw}`, `${ore.mod}raw_${ore.raw}_block`, 9, 900)}
    })
    // Double Deepslate Ore Drops
    BlockEvents.broken(`${ore.mod}${ore.ore}`, e => {
        let { block, level, player, xp } = e
        var hasFortune = false
        var unbreakingLevel = 0
        let hand = player.mainHandItem

        console.log(hand.nbt?.Enchantments)
        if(hand.nbt?.Enchantments) {
            hand.nbt?.Enchantments.forEach(magic => {
                if(magic.id.includes(`fortune`)) hasFortune = true
                if(magic.id.includes(`unbreaking`)) unbreakingLevel = Number(magic.lvl.toString().replace('s', ''))
        })
    }
        var drops = $Block.getDrops(block.blockState, level, block.pos, null ,null, hand)
        drops.forEach(drop => {
            block.popItem(Item.of(drop, 2))
        })
        if (xp > 0) {
            let xpOrb = level.createEntity('experience_orb')
            xpOrb.pos = block.pos
            xpOrb.nbt.putShort('Value', xp)
            xpOrb.save()
            xpOrb.spawn()
        }
        if(hand.nbt?.Damage == undefined) return
        if(unbreakingLevel > 0) {
            let durabilityChance = 1 - ((23 - Number(unbreakingLevel)) / 30)
            if(Math.random() > durabilityChance) hand.nbt.Damage++
        }
        block.set(`air`)
        e.cancel
    })
})