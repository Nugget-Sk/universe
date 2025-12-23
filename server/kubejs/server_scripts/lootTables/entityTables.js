EntityEvents.death(mob => {
    let { entity } = mob

    if(entity.alive || entity.type != 'artifacts:mimic') return

    
})