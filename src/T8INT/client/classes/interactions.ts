import alt from 'alt-client';
import natives from 'natives';
import { Raycast, GetDirectionFromRotation, playAnimation } from './utility';

export class Interactions {

   init(){
      alt.onServer('T8INT:CLI:interaction', ( call, data ) => { this[call]( data ); });
   };

   sitzen_bank( data:string ){
      let dictArray =  [[ "timetable@ron@ig_5_p3", "ig_5_p3_base" ], 
                        ["timetable@reunited@ig_10", "base_amanda"], 
                        ["timetable@ron@ig_3_couch", "base"]];
      let dictRandom = dictArray[Math.floor(Math.random()*dictArray.length)];
      if ( data === "S" ){ playAnimation(dictRandom[0], dictRandom[1], 1, 300000); return; };
      if ( data === "A" ){ natives.clearPedTasks(alt.Player.local.scriptID); return; };
   };

   animation([ animDict, animName, animFlag, animDuration ]:[string,string,number,number]){
      alt.log ( 'animation >> ' + [ animDict, animName, animFlag, animDuration ] );
      playAnimation( animDict, animName, animFlag, animDuration );
   };
};
