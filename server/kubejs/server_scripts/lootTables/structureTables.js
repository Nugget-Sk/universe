LootJS.lootTables(event => {
    
    // Remove Chorus totem from non-end loot chests
    event.getLootTable("artifacts:inject/chests/woodland_mansion").firstPool().removeItem("artifacts:chorus_totem")
    event.getLootTable("artifacts:inject/chests/bastion_hoglin_stable").firstPool().removeItem("artifacts:chorus_totem")
    event.getLootTable("artifacts:inject/chests/bastion_treasure").firstPool().removeItem("artifacts:chorus_totem")

    // Remove Helium Flamingo from non-end loot chests
    event.getLootTable("artifacts:inject/chests/woodland_mansion").firstPool().removeItem("artifacts:helium_flamingo")
    event.getLootTable("artifacts:inject/chests/ancient_city").firstPool().removeItem("artifacts:helium_flamingo")
    event.getLootTable("artifacts:inject/chests/bastion_hoglin_stable").firstPool().removeItem("artifacts:helium_flamingo")
    event.getLootTable("artifacts:inject/chests/bastion_treasure").firstPool().removeItem("artifacts:helium_flamingo")
})