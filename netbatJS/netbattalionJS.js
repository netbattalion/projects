"use strict";

let ref, me
 ( ( ) => {
    let r = {}, f = {}
    for( let i of document .querySelectorAll( "[data-bind]" ) ) {
        let d = i .dataset,
        b = d .bind .split( "=" ),
            
// ---- Variables and Functions ---------------------------------
            
        y = b[ 0 ] .trim(),
        w = f[ y ] ?? ( f[ y ] = [] )
        w .push( [ i, Function( d .set ) ] )
        b[ 1 ] && ( r[ y ] = eval( b[ 1 ] ) )
    }
     
// ---- Bind Handlers -------------------------------------------
     
    ref = new Proxy(
        r, {
            set: ( r, p, v ) => {
                r[ p ] = v
                for ( let i of f[ p ] ) i[ 1 ] ( me = i[ 0 ] )
            }
        }
    )
} )()
