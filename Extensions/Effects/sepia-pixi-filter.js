var gdjs;(function(a){a.PixiFiltersTools.registerFilterCreator("Sepia",new class extends a.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(e,r){const t=new PIXI.ColorMatrixFilter;return t.sepia(!1),t}updatePreRender(e,r){}updateDoubleParameter(e,r,t){const i=e;r==="opacity"&&(i.alpha=a.PixiFiltersTools.clampValue(t,0,1))}getDoubleParameter(e,r){const t=e;return r==="opacity"?t.alpha:0}updateStringParameter(e,r,t){}updateColorParameter(e,r,t){}getColorParameter(e,r){return 0}updateBooleanParameter(e,r,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=sepia-pixi-filter.js.map
