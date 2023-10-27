/*  This section allows a character to reflect on all maps.
    Create a map for the Physical Plane, Astral Space, Matrix Landscape, and a GM Master Map.
    In the naming of each map, include a prefix, separated from the map name by a colon (:), such as "Airship: Astral 1" (Airship is the prefix that the
        API looks for, in this instance.)
    If no prefix is used, no maps will be synchronized.
    Build Dynamic Lighting Obstructions.
    Place representative tokens on the Astral Space for all Characters.  Duplicate any Dynamic Lighting Obstructions.  Link Tokens to their character sheets.
    Place representative tokens on the Matrix Landscape for all SINner Characters.  Link Tokens to their character sheets.
    Place representative tokens on the GM Master for all Characters.  Link Tokens to their character sheets.
    Place Character tokens on the physical map.  All tokens will move to where these tokens are placed and duplicate most settings.
    When a token moves, has a status applied, or has a status bar change, each reflect on all tokens across the table and on every map.
    
    When a character uses Matrix Perception, use VTTES to move that player to the Matrix Landscape.
    When a character uses assensing, use VTTES to move that player to the Astral Space.
    Monitor the GM Master to see all tokens
*/

on('change:campaign:turnorder',function(obj){
    log("Success!")
})

on('change:graphic',function(obj, prev){
    var origin = findObjs({ type: 'page', id: obj.get('pageid')})[0]
    var key = origin.get('name').split(':')[0]
    log('Key: ' + key)
	var tokens = findObjs({ type: 'graphic', represents: obj.get('represents') });
    if(obj.get('represents')!==""){
        for (var i = 0; i < tokens.length; i++) {
            var map = findObjs({ type: 'page', id: tokens[i].get('pageid')})[0]
            if (map.get('name').split(':')[0] === key){
                log("Keymatch: " + key + " and " + map.get('name').split(':')[0])
        	    tokens[i].set('top', obj.get('top'));
        	    tokens[i].set('left', obj.get('left'));
        	    tokens[i].set('bar1_value', obj.get('bar1_value'));
        	    tokens[i].set('bar2_value', obj.get('bar2_value'));
        	    tokens[i].set('bar3_value', obj.get('bar3_value'));
        	    tokens[i].set('name', obj.get('name'));
        	    tokens[i].set('controlledby', obj.get('controlledby'));
        	    tokens[i].set('aura1_radius', obj.get('aura1_radius'));
        	    tokens[i].set('aura2_radius', obj.get('aura2_radius'));
        	    tokens[i].set('aura1_color', obj.get('aura1_color'));
        	    tokens[i].set('aura2_color', obj.get('aura2_color'));
        	    tokens[i].set('aura1_square', obj.get('aura1_square'));
        	    tokens[i].set('aura2_square', obj.get('aura2_square'));
        	    tokens[i].set('statusmarkers', obj.get('statusmarkers'));
        	    tokens[i].set('token_markers', obj.get('token_markers'));
        	    tokens[i].set('showname', obj.get('showname'));
        	    tokens[i].set('showplayers_bar1', obj.get('showplayers_bar1'));
        	    tokens[i].set('showplayers_bar2', obj.get('showplayers_bar2'));
        	    tokens[i].set('showplayers_bar3', obj.get('showplayers_bar3'));
        	    tokens[i].set('showplayers_aura1', obj.get('showplayers_aura1'));
        	    tokens[i].set('showplayers_aura2', obj.get('showplayers_aura2'));
        	    tokens[i].set('playersedit_bar1', obj.get('playersedit_bar1'));
        	    tokens[i].set('playersedit_bar2', obj.get('playersedit_bar2'));
        	    tokens[i].set('playersedit_bar3', obj.get('playersedit_bar3'));
        	    tokens[i].set('playersedit_aura1', obj.get('playersedit_aura1'));
        	    tokens[i].set('playersedit_aura2', obj.get('playersedit_aura2'));
        	    tokens[i].set('rotation', obj.get('rotation'));
            }
        }
	}
});

on("chat:message", function(msg) {
    //log(msg.content)
    msg = msg.content.split(' ')[0]
    if (msg = '!Earthdawn~'){
        //log('Change Detected')
    }
//	var tokens = findObjs({ type: 'graphic', represents: obj.get('represents') });
/*    if(obj.get('represents')!==""){
        for (var i = 0; i < tokens.length; i++) {
    	    tokens[i].set('top', obj.get('top'));
    	    tokens[i].set('left', obj.get('left'));
    	    tokens[i].set('bar1_value', obj.get('bar1_value'));
    	    tokens[i].set('bar2_value', obj.get('bar2_value'));
    	    tokens[i].set('bar3_value', obj.get('bar3_value'));
    	    tokens[i].set('name', obj.get('name'));
    	    tokens[i].set('controlledby', obj.get('controlledby'));
    	    tokens[i].set('aura1_radius', obj.get('aura1_radius'));
    	    tokens[i].set('aura2_radius', obj.get('aura2_radius'));
    	    tokens[i].set('aura1_color', obj.get('aura1_color'));
    	    tokens[i].set('aura2_color', obj.get('aura2_color'));
    	    tokens[i].set('aura1_square', obj.get('aura1_square'));
    	    tokens[i].set('aura2_square', obj.get('aura2_square'));
    	    tokens[i].set('statusmarkers', obj.get('statusmarkers'));
    	    tokens[i].set('token_markers', obj.get('token_markers'));
    	    tokens[i].set('showname', obj.get('showname'));
    	    tokens[i].set('showplayers_bar1', obj.get('showplayers_bar1'));
    	    tokens[i].set('showplayers_bar2', obj.get('showplayers_bar2'));
    	    tokens[i].set('showplayers_bar3', obj.get('showplayers_bar3'));
    	    tokens[i].set('showplayers_aura1', obj.get('showplayers_aura1'));
    	    tokens[i].set('showplayers_aura2', obj.get('showplayers_aura2'));
    	    tokens[i].set('playersedit_bar1', obj.get('playersedit_bar1'));
    	    tokens[i].set('playersedit_bar2', obj.get('playersedit_bar2'));
    	    tokens[i].set('playersedit_bar3', obj.get('playersedit_bar3'));
    	    tokens[i].set('playersedit_aura1', obj.get('playersedit_aura1'));
    	    tokens[i].set('playersedit_aura2', obj.get('playersedit_aura2'));
    	    tokens[i].set('rotation', obj.get('rotation'));
        }
	}*/
});

on('destroy:graphic',function(obj){
	var tokens = findObjs({ type: 'graphic', represents: obj.get('represents') });
    if(obj.get('represents')!==""){
        const inMap = new Array()
        var maps = findObjs({type: 'page'})
        for (var i = 0; i < maps.length; i++) {
            if (maps[i].get('name').toLowerCase().includes('bullpen')){
                inMap.push(maps[i])
            }
        }
        for(var i = 0; i < tokens.length; i++){
            var flag = 1
            for(var j = 0; j < inMap.length; j++){
                if(tokens[i].get('_pageid')===inMap[j].get('_id')){
                    flag = 0
                }
            }
            if (flag){
                tokens[i].remove();
            }
        }
    }
})

on('destroy:character',function(obj){
    log(obj.get('_id'))
	var tokens = findObjs({ type: 'graphic', represents: obj.get('_id') });
    const inMap = new Array()
    var maps = findObjs({type: 'page'})
    for (var i = 0; i < maps.length; i++) {
        if (maps[i].get('name').toLowerCase().includes('bullpen')){
            inMap.push(maps[i])
        }
    }
    for(var i = 0; i < tokens.length; i++){
        var flag = 1
        for(var j = 0; j < inMap.length; j++){
            if(tokens[i].get('_pageid')===inMap[j].get('_id')){
                log("inMap Name: " + inMap[j].get('name'))
                flag = 0
            }
        }
        if (flag){
            tokens[i].remove();
        }
    }
})